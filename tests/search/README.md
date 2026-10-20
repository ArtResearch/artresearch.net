# Search regression tests

Run the search page as a visitor would and check that the ranking still finds what it should.
Each case in `cases.json` opens the search page, sets the search types and the sensitivity, searches,
and reads the order of the results from the page's own result-list query (not from the cards, so the
test does not wait for them).

Kinds of case:

- `known-item`: a well-known work must be among the first `within` results (the Mona Lisa for
  "mona lisa", Michelangelo's David for "david", …). Catches ranking and fusion regressions.
- `best-visual`: the work whose photograph is closest to the words (images index, exact, no cut) must be
  among the first `within` results. Catches a fusion or a cut that loses strong visual matches.
- `facet`: after the steps (select a facet value, change the search types) the search must not come back
  empty. Catches facets applied after the ranking instead of before it.

Defaults: the artworks domain, all three search types, sensitivity Precise.

## Running

Needs the dev stack (`./gradlew runAll` in researchspace-pharos) and its QLever.

```bash
cd tests/search
npm install
CHROMIUM=/path/to/chromium node run.js        # or without CHROMIUM after `npx playwright install chromium`
ONLY=david node run.js                        # the cases whose query contains "david"
```

Environment: `BASE_URL` (default `http://localhost:10214`), `APP_USER` / `APP_PASSWORD` (default
admin/admin), `CHROMIUM`, `ONLY`. It prints one line per case, writes `report.json`, and exits 1 if a case
fails. A full run takes about two minutes.

## Adding a case

Find the record of the work (the one with most photographs is usually the reconciled PHAROS record), e.g.

```sparql
SELECT ?w (SAMPLE(?t) AS ?title) (COUNT(DISTINCT ?p) AS ?photos) WHERE {
  ?w crm:P2_has_type <http://vocab.getty.edu/aat/300133025> ;
     crm:P1_is_identified_by/crm:P190_has_symbolic_content ?t .
  FILTER(REGEX(STR(?t), "birth of venus|nascita di venere", "i"))
  OPTIONAL { ?w custom:photo ?p }
} GROUP BY ?w ORDER BY DESC(?photos) LIMIT 5
```

and give `within` the position a visitor should find it at, not the position it happens to have today.

Why the ranking is what it is, what these checks show and what they cannot: `../../platform-design/search-fusion.md`.
