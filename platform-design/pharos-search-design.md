# The search page: the catalogue hall

The search page (`Default:search` → `SearchTemplate`, also embedded in the actor, place, type,
subject, material, partner, repositories and women-artists pages) and its result cards. Styles:
`assets/new-styles/search-room.css`, on the tokens `reading-room.css` shares with it; the question is
the `ImageSearchWithSlider` component (`researchspace-pharos`). First set in the reading room's
language on Oct 19 2026, redesigned as a room of its own on Oct 20.

## A room of its own, not the reading room again

The record page is a desk for one work read closely. The search page is the catalogue hall where
one question meets many works: the visitor asks, runs an eye over the answers, narrows them, glances
at one, opens it. The two rooms are built of the same materials, as the rooms of one house are, but
they are not laid out alike, because people do different things in them:

- **What they share** (the materials, `reading-room.css` tokens): surfaces and content lie flat;
  marks are the archives' own glyphs in their own colours and never controls; links are type; what
  holds a value is sunk into the surface, what acts stands up from it; one light from the upper left.
- **What is the search room's own**: the answers are the room's centre and get its space. The
  question is a sentence above them, the filters a narrow drawer beside them, the tally and the
  layouts one slim line at their head. Each answer is as large as what it holds, and the three
  layouts are three ways of looking, not three sizes of one card.

## Every kind of choice has one form

A control's form says what kind of choice it is, so the hand knows what will happen before
pressing. The same kind looks the same everywhere in the room; two different kinds never look alike.

| Kind | What it does | Form | Where |
|---|---|---|---|
| command | acts once and springs back | a key standing up from the bench | *Search* (the one dark key, the strongest), *Image*, *Open record*, *Hide Filter*, × and *Clear All* on the filters in force |
| check | in or out, any number of them | a small square key that sinks and takes the accent, with a tick, its name beside it | the search types; every filter value in the drawer |
| scale | one position on an ordered range | a rounded groove with the positions named in it and a detent between each two; the chosen one carries the raised shuttle | search sensitivity (Precise, Balanced, Exploratory) |
| bank | one of several equals | keys in a well; the chosen one is pressed in | the three layouts |
| selector | one of a list, which changes what the page is about | a value sunk like a field, with the list's chevron | *Search in* |
| field | written into | sunk, with a 1 px edge; the accent ring when written in | the words; a filter's own search |
| field glyph | works on the field's own text | a flat glyph inside the field, no body | clear (×) |
| link | goes to something to read | type in the accent, underlined | *How search works*, titles, facts |

Why some of these are as they are:

- **Search is the only dark key.** Every other key is the bench's face; Search is made of the page's
  ink. It is what the whole question is for, so it is the strongest thing on the line, and nothing
  else in the room is mistaken for it.
- **The search types are checks, not keys.** They used to be keys in a well, which looked like the
  sensitivity next to them and like Search; but they are independent (any number in, never none),
  so each says whether it is in by its own check. A type left out keeps its name, greyed.
- **Sensitivity is a scale, not a set of buttons.** Only one position, and the positions are ordered
  (narrowest to widest), so it is round like the zoom's groove on the record page: what slides along
  a range is round, what is pressed is square. When only keyword search is in, the scale stays where
  it is, flat and grey, so where it stands is still read.
- **What is searched is a value, not a command.** *Search in* shows what is chosen and opens a list;
  it is sunk like the field next to it, and the two read together: "Search in Artworks: madonna".
- **Help is a page, so it is a link**, *How search works*, at the end of the terms, not a "?" key
  inside the field. What each type finds is said by its own title under the hand.
- **Labels name controls only where the control does not say it itself**, in a lighter voice
  (12 px, the third ink) than the names of the choices (12.5 px), just before what they name:
  *Search in*, *Search types*, *Search sensitivity*. The layouts and the filters need none.

## The spaces

The space between two things says how closely they belong together, and it grows step by step:

| Space | Between |
|---|---|
| 4 px | a glyph and the field it works on |
| 6 px | a check or a stop and its name; a field and the list it searches |
| 8 px | the field and its Search; the question and its terms |
| 10 px | a label and the control it names |
| 16 px | one choice and the next in a group |
| 28 px | one group and the next |
| 14 px | the gutter between the drawer's column and the answers' |

Heights follow the same idea: the question's line is 36 px (selector, field and Search all one
height, so the line reads as one sentence), the terms' line 22 px, a key 22 px, a check 14 px.

## The page

- **The question** (the bench under the header) is two lines. The first is the question as it is
  said: *Search in* [Artworks] [madonna × | Image] [Search]. What is searched stands over the drawer
  of filters and is exactly as wide (236 px), because the kind of thing decides how it can be
  narrowed; the words and Search stand over the answers. The second line, in a smaller voice, starts
  where the field starts, because it is how the words are matched: *Search types* (checks), *Search
  sensitivity* (scale), *How search works* (link). Where a domain has no kinds of search (artists,
  photographers, repositories), the question is one line. 82 px for both lines, 52 px for one.
- **The drawer of filters** is an index to run the eye down, not a sheet to read: 236 px wide, one
  compact line per filter divided by hairlines, the filter's name in sentence case and the sheet's
  chevron key at the line's end. The sheet is as long as the index, not as the room, and scrolls once
  an opened filter makes it longer. A value is one line: its check, its name in the reading voice,
  its count at the right in figures that line up; in a tree the triangle, check and name sit 6 px
  apart and a long name ends in an ellipsis before its count. *Hide Filter* folds the drawer to an
  upright key at the room's edge.
- **The answers** lie on the table, recessed into the bench as on the record page. Their head is one
  slim line (36 px, with filters in force too): the tally in the reading voice ("10,042 works"), the
  filters in force as latched keys each with its ×, *Clear All* after them (a command on all of
  them, so it follows what it acts on), and the layouts' bank at the right.
- **Three ways of looking**, each answer as large as that way needs (the `item-width` in the template
  is an answer's least width; a row shares the table's width):
  - *the catalogue* (list, 440 px least): to read what the archives say of each work. Two slips to a
    row at 1280 and 1440, three at 1920; the print small at the left, the title, up to three facts
    named as the field definitions name them, why it was found, the marks and *Open record*;
  - *the cards* (grid, 212 px): to recognise works. The print on top, the title and the two facts
    that place a work, the marks and the key on one line;
  - *the prints* (150 px): to scan by eye. Pictures only, close together, the title under the hand.

Answers wholly in view after a search for "madonna" (the list; the grid; the prints):

| Window | First answer at | List | Grid | Prints |
|---|---|---|---|---|
| 1280 × 800 | 221 px | 8 | 4 | 18 |
| 1440 × 900 | 221 px | 10 | 10 | 28 |
| 1920 × 1080 | 221 px | 18 | 14 | 50 |

Before the redesign the first answer started at 205 px and the list showed 4 at 1280 (one slip to a
row). The question's second line costs 24 px (58 → 82); the slimmer answers' head and table edge give
back 8.

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

Each kind of search scores its matches 0 to 1 over what it kept; keyword and conceptual count as one
text signal, the two visual kinds as one; text and look add up; and an artwork weighs up to half more
the more often the archives photographed it. Why reciprocal rank fusion was replaced, the formulas, how
prominence is computed and what it is biased towards, the evaluation (`tests/search`), how the weights
could be overtuned and what would guard against it: `search-fusion.md`.

## Known gaps

- Every card asks for its own `resource-info`; on a cold QLever cache a page of cards fills in
  slowly (see the record page's transitive-path note in memory).
- RKD works have no title label in the data, so their slips show the record URL as the title.
