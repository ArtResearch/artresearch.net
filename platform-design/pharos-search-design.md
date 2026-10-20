# The search page, in the reading room's language

Oct 19 2026. The search page (`Default:search` → `SearchTemplate`, also embedded in the
actor, place, type, subject, material, partner, repositories and women-artists pages) and the
result cards now follow the record page (`pharos-record-design-alive.md`). Styles:
`assets/new-styles/search-room.css`, on the tokens `reading-room.css` shares with it.

## The rules it keeps

- **Three kinds of thing, one treatment each.** Surfaces and content lie flat. Marks are the
  archives' own glyphs, in their own colours, and are never controls. Instruments have a body
  and show state by elevation: what the hand can work stands, a chosen or latched one is
  pressed in, what cannot act now is flat and dim.
- **Links stay type**, with the record page's thin underline, darker under the hand.
- **A result has one explicit way in**: its *Open record* key. Its print and its title lead to
  the record too; its facts (creator, repository, place, the work a photograph depicts) lead
  to their own pages, as on the record page. Marks no longer link anywhere.

## The page

- **The rail** (the bench under the header): *Search in* is a key that opens the five
  domains; *Words or an image* is a field written into, recessed, with clear, help and image
  as small keys inside it; *Search* is the rail's one wide key. Below, *Search types* is a
  bank of latching keys (Keyword, Conceptual, Visual), each with a quiet help glyph that
  explains under the hand; *Search sensitivity* is the zoom's groove and knob, flat and dim
  while keyword search alone has nothing to reach for.
- **The index of filters** is a sheet, like the record's. Each filter is named as the sheet
  names a field (tracked caps and a rule) and opens with the sheet's chevron key. A value is
  one line: its check is a small key that sinks and takes the accent when latched, its name
  is in the reading voice, its count sits at the right in figures that line up, its
  thousands grouped (helper `thousands`, also on the tally); a long name gives way to its
  count, and a list is as tall as its values, up to a dozen rows. *Hide
  Filter* is a key on the sheet's first line; folded away, the index is that key, upright.
- **The table** is the bench with a recess, as on the record page. Its edge carries the
  tally in the reading voice ("431 works") and *Lay out* (list, grid, prints), a bank of
  radio keys. The filters in force sit above it as latched keys, each with its ×, and
  *Clear All* beside them.

## A result

- **Slip** (list and grid; `CardArtwork`, `CardPhotograph`): the record page's list slip.
  The print on its mount with its archive's mark at the upper right; the title in the serif;
  the facts as tracked-caps labels from the field definitions (never renamed) with their
  values; *Found by* and the kinds of match, a note, each term explaining itself under the
  hand; at the right the register of the archives' marks and the *Open record* key. A narrow
  slip names each fact above it.
- **Print** (`CardArtworkThumbnail`, `CardPhotographThumbnail`): the print on its mount on the
  table, with its mark, lifting under the hand, its title beneath. A work with no photograph
  lies there as a blank card.
- **Name** (`CardArtist`, `CardRepository`): a slip with no print — the name, the number of
  works when the query knows it, the register, the key.

Which print a work shows is unchanged: the photograph that matched, else the archive's own
when the search is restricted to one, else the work's preferred photograph (whose primary
image is the work's).

## Facets restrict what is ranked (Oct 19)

A search that ranks or cuts (a vector search for its k nearest with an auto-cut, the
keyword branch's `SERVICE rank:` limit of 10,000) used to be filtered by the facets
only after the cut: "rain" restricted to Hertziana gave the 18 Hertziana works that
made the top of the whole index, not the 273 Hertziana works that look like rain.
Now each ranked branch of the search template ranks a candidate set,
`{ SELECT DISTINCT ?subject WHERE { <domain> {{searchRestrictions}} FILTER(?__facetFilter__) } }`,
and the vector search scores only those candidates (`vec:candidates`, form P of the
QLever fork, cost in proportion to the candidates). The facet store
(`FacetStore.facetedWhere`) puts the selected facet values where a base query marks
`FILTER(?__facetFilter__)` (`SparqlQueryGenerator.bindFacetFilter`), for the results,
the facets' availability and their counts, and appends them as before to a query
without the mark. Photographs reach works through `custom:photo` (the old
`P65/P138_represents` path missed about 32,000 photographs of merged works), and
narrative hits are works themselves now that the index holds them.

## The artist, photographer and repository domains (Oct 19)

These domains rest on a base set: each actor with how
many works they have (`default-query-2/3/4`), a grouped subquery of its own. QLever plans
it alone and it is the same in every query of the domain, so one pinned result serves the
list, the tally and every facet's availability and values; the name cards now show the real
number of works. The Photo Archive facet of these domains likewise groups (actor, catalogue)
pairs before it joins the archive. Its availability check took 27 s and, for artists, ran
out of memory; it now answers in under half a second.

## Vector search: which cut, on which scan (Oct 20)

The three vector indices (`narratives`, `images`, `dinov3`) have two layers, an `i8` coarse scan and a
finer rerank layer, and no HNSW graph. The search sensitivity is `vec:autoCut`, a cut that keeps what
stands out from a noise floor estimated on the scored window. On the two-layer scan that window is
the best ~10,000 candidates, reranked exactly; with `vec:fullPrecision` it is every candidate, the floor
drops and every level lets far more through ("rain" over all artworks gave 640,000 works at
Exploratory). So the searches with a cut use the two-layer scan, whose top results are the same as an
exact scan's, and each index the signal suited to it: `narratives` the cosine (text to text), `images`
CSLS (text to image and image to image, where some photographs are close to everything), and the
near-copy search on `dinov3` the softmax cut at "balanced", which keeps the one or two copies that stand
out (at distances under about 0.07) instead of the dozens the z-cut kept. Searches without a cut (the
record page's Similar works, the photograph page's Similar Photos) use `vec:fullPrecision`. A cap of
100,000 (`vec:k`) stays on every cut, and no `rank:limit` on the vector branches.

The candidates reach the vector search as one subquery: QLever reorders the vector search like any
join, and with the link from works to their photographs outside it, the grouped queries of the page
fed it every photograph and applied the facets afterwards (Type sculpture, visual search "rainbow":
0 works).

## How the kinds of search are fused (Oct 20)

Reciprocal rank fusion (each kind of search ranks, a work scores the sum of 1/(60 + its rank)) lost
strong matches found by one kind only: a work found by keyword and conceptual search, both reading the
same catalogue text, scored about twice what the best visual match could, and how strong a match was did
not count at all ("death": the best visual matches came 16th or not at all). Now each kind scores its
matches 0 to 1, from the weakest to the strongest of what it kept; keyword and conceptual count as one
(the stronger plus half the other), so do the two visual kinds; text and look add up; and a work weighs up
to half more the more often the archives photographed it (a prominence prior, ln(1 + photographs),
pinned in the warmup). Evaluated against `tests/search` (well-known works by name, the best visual
match, a facet inside a visual search): all pass, where rank fusion put Leonardo's Last Supper 119th
and the best visual matches of "death" and "rain" 16th and 18th.

Each kind of search is computed twice for its 0–1 scale (once for the rows, once for its highest and
lowest score); a `rank:` service option in the QLever fork that binds the scaled score in the same pass
would remove that.

## Known gaps

- Every card asks for its own `resource-info`; on a cold QLever cache a page of cards fills in
  slowly (see the record page's transitive-path note in memory).
- RKD works have no title label in the data, so their slips show the record URL as the title.
