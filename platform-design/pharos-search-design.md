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

## Vector search: exact scores, the sensitivity decides (Oct 20)

The three vector indices (`narratives`, `images`, `dinov3`) have two layers, an `i8` coarse scan and a
finer rerank layer, and no HNSW graph. Every vector search now asks for `vec:fullPrecision true`: an
exact scan on the fine layer, as fast as the coarse scan plus rerank on this server (30–50 ms warm,
whole index) and with the same top 10,000. Where the search sensitivity cuts the results
(`vec:autoCut`), the fixed `vec:k 10000` and the rank service's `rank:limit 10000` are gone;
a cap of 100,000 per branch remains (`vec:k 100000`), because on exact scores the cut lets far more
through than it did on the two-layer scan: "rain" over all artworks, uncapped, gave 640,000 works
at Exploratory. The levels are to be recalibrated for exact scores.

## Known gaps

- Every card asks for its own `resource-info`; on a cold QLever cache a page of cards fills in
  slowly (see the record page's transitive-path note in memory).
- RKD works have no title label in the data, so their slips show the record URL as the title.
