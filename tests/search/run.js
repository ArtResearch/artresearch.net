// Search regression tests: runs each case of cases.json on the search page, as a visitor would, and
// reads the order of the results from the page's own result-list query (so it does not wait for cards).
// Usage: node run.js   (env: BASE_URL, APP_USER, APP_PASSWORD, CHROMIUM, ONLY)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const BASE = process.env.BASE_URL || 'http://localhost:10214';
const USER = process.env.APP_USER || 'admin';
const PASSWORD = process.env.APP_PASSWORD || 'admin';
const ONLY = process.env.ONLY;
const INPUT = "input[placeholder='Keywords or image']";
// the search types are checks, found by their values
const TYPES = { keyword: 'exact', conceptual: 'metadata', visual: 'visual' };
const ALL_TYPES = Object.keys(TYPES);

const queryOf = (request) => {
  const body = request.postData() || '';
  try {
    return new URLSearchParams(body).get('query') || body;
  } catch (e) {
    return body;
  }
};
// the infinite-scroll list of the search template: SELECT DISTINCT ?domain ?subject ?maxPhoto …
const isResultList = (request) => /\/sparql/.test(request.url()) && /\?domain \?subject \?maxPhoto/.test(queryOf(request));
const short = (iri) => iri.replace('https://artresearch.net/resource/', '');

/** Follows the result-list queries of a page; settle() gives the last one once they have stopped. */
function followResults(page) {
  const pending = new Set();
  let last = null;
  let lastAt = 0;
  page.on('request', (r) => isResultList(r) && pending.add(r));
  page.on('requestfailed', (r) => pending.delete(r));
  page.on('requestfinished', async (r) => {
    if (!pending.has(r)) return;
    try {
      const body = await (await r.response()).json();
      last = { query: queryOf(r), ids: body.results.bindings.map((b) => b.subject && b.subject.value).filter(Boolean) };
    } catch (e) {
      last = { query: queryOf(r), error: e.message, ids: [] };
    }
    lastAt = Date.now();
    pending.delete(r);
  });
  return {
    async settle(after, timeout = 180000) {
      const t0 = Date.now();
      while (Date.now() - t0 < timeout) {
        await page.waitForTimeout(250);
        if (pending.size === 0 && lastAt > after && Date.now() - lastAt > 1500) return last;
      }
      throw new Error(`no result list within ${timeout / 1000} s`);
    },
  };
}

async function setTypes(page, wanted) {
  // switch on what is wanted first, so the search never has no type at all in between
  const order = Object.keys(TYPES).sort((a, b) => wanted.includes(b) - wanted.includes(a));
  for (const key of order) {
    const input = page.locator(`input[name='searchTypes'][value='${TYPES[key]}']`);
    if (!(await input.count())) continue;
    if ((await input.isChecked()) !== wanted.includes(key)) {
      await page.locator('label', { has: input }).click();
      await page.waitForTimeout(300);
    }
  }
}

async function openSearch(context, c) {
  const page = await context.newPage();
  const results = followResults(page);
  await page.goto(`${BASE}/resource/Default:search?domain=${c.domain || 'work'}`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector(INPUT, { timeout: 120000 });
  await page.waitForTimeout(3000);
  await setTypes(page, c.types || ALL_TYPES);
  if (c.sensitivity && c.sensitivity !== 'Precise') {
    await page.locator('[role=radio]', { hasText: c.sensitivity }).first().click();
  }
  const t = Date.now();
  await page.fill(INPUT, c.query);
  await page.keyboard.press('Enter');
  return { page, results, first: await results.settle(t) };
}

/** The work whose photograph is closest to the words: images index, exact, no cut. */
async function bestVisual(words) {
  const query = `PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/> PREFIX custom: <https://artresearch.net/custom/> PREFIX vec: <https://qlever.cs.uni-freiburg.de/vectorSearch/>
SELECT ?subject (MAX(1 - ?d) AS ?s) WHERE {
  { SELECT ?subject ?p WHERE { { SELECT DISTINCT ?subject WHERE { ?subject crm:P2_has_type <http://vocab.getty.edu/aat/300133025> . } } ?subject custom:photo ?p . } }
  SERVICE vec: { [] vec:index "images" ; vec:fullPrecision true ; vec:queryText ${JSON.stringify(words)} ; vec:candidates ?p ; vec:result ?p ; vec:bindScore ?d ; vec:k 50 . }
} GROUP BY ?subject ORDER BY DESC(?s) LIMIT 1`;
  const response = await fetch(`${BASE}/sparql?repository=default`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/sparql-results+json', Authorization: 'Basic ' + Buffer.from(`${USER}:${PASSWORD}`).toString('base64') },
    body: new URLSearchParams({ query }),
  });
  return (await response.json()).results.bindings[0].subject.value;
}

async function runCase(context, c) {
  const t0 = Date.now();
  const { page, results, first } = await openSearch(context, c);
  let outcome;
  if (c.kind === 'known-item' || c.kind === 'best-visual') {
    const expect = c.kind === 'known-item' ? c.expect : [await bestVisual(c.query)];
    const position = Math.min(...expect.map((e) => first.ids.indexOf(e) + 1 || Infinity));
    outcome = {
      pass: position <= c.within,
      detail: `${expect.map(short).join(' or ')} at ${position === Infinity ? 'not found' : position} (needs ≤ ${c.within}) of ${first.ids.length}`,
      top: first.ids.slice(0, 5).map(short),
    };
  } else if (c.kind === 'facet') {
    let last = first;
    for (const step of c.steps) {
      const t = Date.now();
      if (step.facet) {
        await page.locator('.facet__relation__header', { hasText: new RegExp(`^\\s*${step.facet}\\s*$`, 'i') }).first().click();
        const item = page.locator('.LazyTreeSelector--item, .facet__relation__values__value', {
          has: page.locator(`[title="${step.value}"]`),
        }).first();
        await item.waitFor({ timeout: 120000 });
        await item.locator('input[type=checkbox]').first().click();
      }
      if (step.types) await setTypes(page, step.types);
      last = await results.settle(t);
    }
    outcome = { pass: last.ids.length >= c.expectAtLeast, detail: `${last.ids.length} results after ${c.steps.length} steps (needs ≥ ${c.expectAtLeast})`, top: last.ids.slice(0, 5).map(short) };
  } else {
    throw new Error(`unknown kind ${c.kind}`);
  }
  await page.close();
  return { ...outcome, seconds: ((Date.now() - t0) / 1000).toFixed(1) };
}

(async () => {
  const { cases } = JSON.parse(fs.readFileSync(path.join(__dirname, 'cases.json'), 'utf8'));
  const selected = cases.filter((c) => !ONLY || c.query.includes(ONLY));
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || undefined, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1100 }, httpCredentials: { username: USER, password: PASSWORD } });
  const report = [];
  for (const c of selected) {
    let r;
    try {
      r = await runCase(context, c);
    } catch (e) {
      r = { pass: false, detail: `error: ${e.message.split('\n')[0]}`, top: [], seconds: '-' };
    }
    report.push({ kind: c.kind, query: c.query, ...r });
    console.log(`${r.pass ? 'PASS' : 'FAIL'}  ${c.kind.padEnd(11)} ${JSON.stringify(c.query).padEnd(22)} ${r.detail}  [${r.seconds} s]${r.pass ? '' : `\n      top: ${r.top.join(', ')}`}`);
  }
  await browser.close();
  fs.writeFileSync(path.join(__dirname, 'report.json'), JSON.stringify(report, null, 1));
  const failed = report.filter((r) => !r.pass).length;
  console.log(`\n${report.length - failed} passed, ${failed} failed`);
  process.exit(failed ? 1 : 0);
})().catch((e) => {
  console.error(e);
  process.exit(2);
});
