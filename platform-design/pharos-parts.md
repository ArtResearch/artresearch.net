# Works with parts on the record page (as built, 21 Oct 2026)

A building, an altarpiece, an album or a bronze door is recorded with its parts, and those with
theirs, several levels deep. The record page now shows:
- **on the table:** the work's photographs and, under them, every part that has a photograph;
- **on the sheet:** where the record stands among its wholes and parts.

Fable's proposal and mockup (`pharos-parts-design.md`, `parts-assisi.html`) were the starting point.
This note says what was kept, what was rejected and why, and what was built.

## The mockup: what was kept

- **Parts on the photographs' table, under the work's own prints**, so that a building with no
  photograph of its own still shows what is in it at once.
- **Parts one step smaller than the work's own prints** (levels of scale). One Zoom moves them all.
- **One query for everything the table needs.** The old Parts drawer read a card per part (about 67
  requests per 20 parts, ~45 s on a 200-part work).
- **The chain of wholes on the sheet**, with each archive's marks.
- **The data findings.** In particular: rooms are nodes minted inside a record, with no page and no
  photograph.

## The mockup: what was wrong, and why

1. **One form for three kinds of choice.** Every one of these was the same standing key:
   - the tabs (which set lies on the table: one-of-equals, a bank);
   - the "In" path (where one is in the hierarchy: going somewhere, a link);
   - the lintels heading each tray (a heading, which also re-laid the table).

   The grammar is one form per kind of choice, and two kinds must never look alike
   (`pharos-search-design.md`).
2. **A hidden mode.** Pressing a lintel laid that level out on the table while the sheet still showed
   the first record. Table and sheet then disagreed about which record one was on, and the pressed
   path key was the only clue. Here one page is one record: going into a part means going to its page.
3. **Too many materials for one idea.** Recessed trays, standing lintels, closed lintels, stacks with
   offset mounts and blank cards: five new forms where a name over its prints says it.
4. **The table filled with labels.** Rooms and parts without photographs lay as blank cards, often the
   same name three times ("San Francesco, Assisi"). The table is for photographs; the structure belongs
   to the sheet.
5. **Invented labels** ("Contents", "The work", "In") where the curators' labels exist: "Has Parts",
   "Is Part Of", "Is Part Of/Has Part".
6. **A fourth rail line on phones** for the path.

## The table

- **The work's own prints first, as before.** A work without parts is laid out exactly as it was.
- **Then the "Has Parts" line:** the sheet's own field heading (tracked caps with its rule), carried
  across the table, with how many works lie under it ("50 works", or "120 of 483 works" while a batch is
  out). The line between the work and what is in it reads as on the sheet.
- **Each part of the work under its name.** The name is a link to the part's record, in the reading
  voice, underlined as every link on the page. A room has no record, so its name stays type.
  - A part that brings only its own print, or whose prints fit one row, lies only as wide as its prints,
    beside the next. Its name may take two lines rather than be cut.
  - A part with parts of its own takes the table's width and says how many works lie under it. Its own
    parts follow as blocks of their own:
    - named a step smaller;
    - hanging behind the left rule the sheet's slips hang from.

    Deeper parts are laid with the part of the part they belong to. So the table has two named levels,
    the rest lies within them.
- **One print per part:** its preferred photograph. Picking it up shows it under the light with the
  part's record mount (title linked, "Part of", "Location") and, for one further in, where it is
  ("in Fassade").
- **Parts without a photograph are not on the table.** The sheet's tree has them.
- **Size and scale:**
  - Parts' prints are ⅔ of the work's, with floors of 96 and 64 px.
  - A work with no prints of its own lays its parts at the table's own scale.
  - Zoom and Fit act on the whole table.
  - The plan beside the table draws each part's rows where they lie, side by side.
- **"Lay out › list"** shows the same headings between the slips. A heading that would only repeat the
  title of the one slip under it is left out.
- **The archive keys** remain the work's photographs' keys and filter those only. The parts are other
  works.
- **The Parts tab is gone.**

## The sheet: Is Part Of/Has Part

- **Placement:** a part after Repository/Last Known Location.
- **Heading:** the field label of `object_part_of_hierarchy` ("Is Part Of/Has Part"), or of
  `object_is_part_of` / `object_has_parts` when only one direction applies.
- **The tree:** the sheet's own rows (text · kind · register), stepping in one branch per level:
  - the chain of wholes from the outermost down;
  - this record among the other parts of its whole;
  - its own parts beneath it.
- **Each row:**
  - the name, a link when the node has a record;
  - its kind as the archive typed it ("Dom", "Kapelle", "Fenster") and how many parts it has;
  - the marks of the archives that record it, so the archives' duplicate nodes can be told apart.
- **This record's row** is set heavier and darker and is not a link: the place the tree is read from.
- **Folding:**
  - Two siblings either side of the record are shown.
  - Eight of its parts are shown.
  - The rest fold under the sheet's own handle ("Show 50 more parts", "Show 23 more parts of San
    Francesco, Assisi").
- **A record in several wholes** (one per archive, often) shows each chain. The first, the deepest,
  carries the siblings and the parts.
- **Read-through:** rows carry `data-arch`, so with archives latched on the rail, what they don't
  record fades like the rest of the sheet.

## Controls and forms

| thing | kind | form |
|---|---|---|
| Photographs · Related works · Similar works | bank | keys in a well (unchanged) |
| a part's name (table, list, sheet) | link | reading type, underlined |
| a room's name | text | reading type, no underline |
| Has Parts | heading | the sheet's field heading, on the table too |
| a part's count | caption | sans, ink-3 |
| Show N more parts | handle | the sheet's existing fold handle |
| Lay out N more | command | the table's existing key |

No new control was added to the rail.

## Spaces

- Between part blocks: 16 px down and 18 px across.
- Within a part's own parts: 10 / 14 px, with a 2 px rule and 12 px in.
- From the heading to the blocks: 10 px. From the work's last row to the heading: 12 px + the row gap.
- Inside a block, name to prints and print row to print row: the table's own row gap.

## Narrow widths

- **Phone (390):** the parts flow on the 352 px table as on the desk. On the sheet, a phone rule now puts
  the kind under the text for every row (claims, branches, tree rows, sources). Before, the kind ran
  into the text ("Rosetteame of the building"): a fault that predates this work.
- **Tablet (768):** checked.

## Data and queries

- **Parts are `crm:P46_is_composed_of`.** In combine 522 that is the archives' own structure (307k edges,
  MIDAS t-numbers, rooms).
- **The judge's part-of relations do not show yet.** They are `custom:relatedArtwork` with an E13
  typed `artwork_relation/part_of`, pointing at deprecated building stubs; for example, 314 works on the
  Assisi buildings. Both queries pick them up unchanged once the data agent writes part-of as `P46` to
  the building's A-id.
- **Table:** the `data-contents` query in the template.
  - It returns every descendant with a preferred photograph, with:
    - the part of the work it lies under;
    - the part of that part;
    - one consistent path for a node reached two ways;
    - one photograph, so picture, size and archive agree.
  - Timings: Troia `A43824` 50 rows 0.36 s, the Monreale door `A40626` 133 rows 0.46 s, Assisi `A123636`
    0.46 s.
  - Never leave `?within` unbound: an OPTIONAL on an unbound variable joined every work (2.4 GB) before
    this was fixed.
- **Sheet:** `pharos-part-tree` runs ancestors (`P46i+`), siblings, parts, with kinds, part counts and
  archives. 0.28 s warm. The first cold run took 42 s, so the `P46i` path should be in the warmup.
- **"Has parts?"** is now a server-side ASK in the template. The profile no longer loads every descendant
  with a nested field per part, which was thousands of values on the largest albums.

## Where

- `data/templates/Template:…aat/300133025.html`: the `data-contents` child, the tree, no Parts tab,
  the ASKs.
- `config/resource-info-profiles/artwork-full.json`: `object_has_parts` removed.
- `assets/new-styles/reading-room.css`: parts on the table, the tree, the phone rule.
- `researchspace-pharos/src/main/web/pharos/components/AutoFitGrid.tsx`: the parts' set, their layout
  (`computeLayoutWithParts`), headings, list, plan.
- `researchspace-pharos/src/main/web/pharos/components/PartTree.tsx`: new, as `pharos-part-tree`.

## Open

- **Duplicated nodes.** The archives' duplicate nodes (two "Innenraum", KHI's three Nikolauskapelle)
  show as recorded. Merging them is the data agent's reconciliation, not the page's.
- **Rooms' names.** Rooms without a name are named from their IRI ("Fassade west").
- **Order.** Parts lie in the archives' order (their identifiers' numbers), not by name.
