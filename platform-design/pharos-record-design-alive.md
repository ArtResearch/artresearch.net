# The record page as a reading room

A design proposal for the PHAROS artwork record, with the photograph panel
designed in full. Third iteration after `pharos-record-design.md`
(wholeness) and the letterpress mockup. Mockup:
`data/templates/…portrait_of_a_lady_alive.html`, served at
`/resource/portrait_of_a_lady_alive`, on the real `pharos-auto-fit-grid`.

The brief: not flat, not a replica of the physical archive, alive in
Alexander's sense, and a tool for curators. The claim of this document is
that the physical archive has two layers we can borrow from, and the earlier
mockups borrowed from the wrong one. Its **materials** (card, buckram,
rubber stamps, brass) are what it is made of; copying them gives you texture
and nostalgia. Its **practices** (how a print is mounted, marked, boxed,
picked up, turned over, compared, re-attributed) are what it is *for*; those
translate, because a curator at a screen is still trying to do the same
things. The design below takes practices only, and renders them with one
digital material: light.

---

## 1. What the archives actually do

Everything below is sourced; where I quote, the quotation is verbatim.

### 1.1 The mount is the unit, and it has fixed places for fixed things

At the Photothek of the Kunsthistorisches Institut in Florenz every print is
laid on a card mount, and the mount carries its data in conventional
positions. Costanza Caraffa, describing the Carpaccio photographs from the
Ludwig bequest: "All these images, or rather their card mounts, are furnished
not only with their inventory number in the upper left, but also with their
class-mark stamp in the upper right ('Mal[erei] Renaiss[ance]'), the stamp of
the KHI at the centre below or to the left"; the provenance "Nachlass Ludwig"
sits "in the lower right of the mount". The mount itself is evidence: two of
the prints are on "stiffer and smaller card mounts, cream in color, which
differ from those (typical of the Photothek) slightly larger and pale green",
which is how she establishes that those two were mounted by the photographer
and the rest later by the Photothek. (Caraffa, "From 'photo libraries' to
'photo archives'", in *Photo Archives and the Photographic Memory of Art
History*, ed. C. Caraffa, Berlin/Munich 2011.)

Zeri's photograph record (scheda F) makes the same structure explicit as
fields: `Numero di inventario`, `Archivio`, `Fondo`, `Serie archivistica`,
`Busta` ("460. Pittura italiana sec. XVI. Venezia. Veronese 4"), `Fascicolo`,
`Collocazione` ("PI_0460/1/7"), `Definizione` ("positivo"), `Colore / Materia
e Tecnica` ("BN - gelatina ai sali d'argento/ carta baritata"), `Misure` ("mm
253 × 206 (supporto primario)"), `Autore della fotografia`, `Numero
d'inventario del negativo`. (catalogo.fondazionezeri.unibo.it, scheda F
99163; our own print 90606 follows the same scheme.)

The Frick mount in our own record (print 84094, verso) is a typed form:
`DATE:`, `ENGRAVINGS:`, `REPRODUCTIONS:` ("Dr. W.W.S. Cook, May 24, 1943
(Photo Marburg, no. 84094)"), `EXHIBITIONS:`, `COLLECTIONS:`,
`DESCRIPTION:`, `BIBLIOGRAPHY:` ("Mezzetti, A., … 1977, p.88 (92), fig.61 (as
presumed portrait of Renee of France)"), with the call number "722-7 A
Detail" in the corner. The Frick describes the collection as one where "each
photograph is accompanied by historical documentation" tracing "changes of
attribution, ownership, and condition", and warns that "images without
documentation are searchable only by Creator name and National School"
(digitalcollections.frick.org). The mount is the record; the picture is one
field of it.

**Translation.** A print on screen is not a thumbnail of a painting. It is a
mounted object with a fixed place for its archive's mark and its number, and
a reverse side. The viewer shows the mount's data as a labelled strip, not a
one-line caption.

### 1.2 The verso is where the argument is

Caraffa again: looking "is a material act, which is not performed just with
the eyes, but with gestures … by taking hold of the card mount and moving the
photograph under the light; or, as suggested by Ludwig himself on the mount
of photograph 7439, by turning it over ('wenden!') to be able to read on the
verso another inscription that explains to us whence comes the information
reported on the recto". The photographer's identity for 59349 is settled only
"by the stamp on the verso of the mount … 'TOMASO FILIPPI / FOTOGRAFO /
Venezia'". The KHI's digitisation protocol from 2008 "provides for the
scanning not just of the photographic positive, but of the entire mount,
including its verso, if it contains important information".

Berenson's prints at I Tatti: "Much more is to be found on the backs of
Berensonian photographs … Berenson's notes, which record his evolving
thoughts often accompanied by current bibliographical references. Reading
this data, one can see how, for him, each photograph became a working
document that could be easily consulted and modified over the course of
time." Attributions are written as qualifications: "With—but not—Perugino",
"Close to but not Perugino himself", "So-called Bellini probably forgery".
(G. Pagliarulo, in the same volume, p. 185 ff.)

Zeri records this as a reason. Our painting's entry (work 43200, "Ritratto di
Renata di Francia") lists the author "Sellari Girolamo (Girolamo da Carpi)"
with *Reason for attribution* "Bibliografia (A. Pattanaro, 2000)", and under
*Different attributions*: "de Campaña Pedro, (?)" — "Bibliografia (catalogo
museo 1997)"; "Rossi Francesco de' (Salviati)" — "Nota anonima sul verso
della fotografia"; "Sellari Girolamo … (?)" — "Bibliografia (A. Mezzetti,
1977)". Zeri's LOD vocabulary has this as a term:
`w3id.org/zericatalog/criterion/note-on-verso-of-photograph`. The scheda F
likewise gives the photographer attribution a reason (`Motivazione
dell'attribuzione: timbro`, i.e. a stamp) and the date a reason
(`iscrizione/ analisi storica`).

**Translation.** Turning a print over is a first-class action with its own
control, visible without hovering. Evidence rows in the record carry their
*kind* ("as recorded", "reason · bibliography", "reason · verso note",
"reason · museum catalogue") because the archives distinguish them.

### 1.3 The box is the unit of selection

Caraffa: the KHI's "'Painting, Renaissance' section" holds "eight boxes of
photographs reproducing works of Vittore Carpaccio; one of them is entirely
dedicated to the so-called Sant'Orsola cycle". A reattribution by a scholar
who "annotates the photograph (or its mount)" means "a new collocation within
the archival space". Elizabeth Edwards: "Then there are boxes, the building
blocks of archives … They are not merely pragmatic tools of taxonomic
performances", and "the visual equivalence of the photographs is performed
through modes of matting and mounting, setting up a suggestion of possible
comparability". Zeri's `Busta`/`Fascicolo`/`Collocazione` is the same thing
written down. The Warburg collection is "ordered by subject according to a
unique iconographic classification system first designed by Rudolph
Wittkower and Edgar Wind during the 1930s" (iconographic.warburg.sas.ac.uk).

**Translation.** Narrowing the table to some archives is pulling their
boxes: each archive is a toggle on the rail, any number can be selected, the
table relays out with the union of their prints, and the record on the right
is read through them. Clearing restores the whole table.

### 1.4 Comparison is the work

Pagliarulo on the versos: "Compare Two male Saints with / crosses at Abbazia
di S. Bevignate, Perugia"; "Compare Madonna in Ascension at Monreale (Alinari
33289) / Also Madonna in cupola of Florentine Baptistery (Alinari 17235)";
Berenson "traced a cross corresponding to the head on the recto". Warburg's
Mnemosyne atlas survives as "photographs of 40 wooden screens covered in
black canvas to which are hooked a varying number of mounted photographs"
(same volume, p. 91). The PHAROS article describes the consortium's purpose
as "immediate comparison of the different attributions and provenance
histories recorded" across institutions, "allowing researchers to see at a
glance if the work has undergone any" change (Caraffa, Pugh, Stuber, Wood
Ruby, *Art Libraries Journal*).

**Translation.** The table is a comparison surface first and a gallery
second: prints keep their real proportions, lie side by side at one scale,
and the scale is a control ("closer"). Picking one up to read it must not
destroy the arrangement; it lifts, the rest stay where they were.

### 1.5 Status marks and the body of the researcher

Caraffa: prints "do not have a red dot next to the stamp of the inventory
number; this indicates that they have not yet been catalogued in the database
of the Photothek, but only in the … card catalogue". Edwards on how the
archive regulates the hand: "'hold the mounts like this', 'don't touch the
surface of the print', 'only use pencils or laptops'". Caraffa's list of
what an archive is made of: "library shelves, boxes, labels, pressmarks, photo
mounts, inventory numbers and inscriptions, stamps of various kind, card
indexes, registers and inventory books, and the taxonomic systems that order
the archive", and her warning that "the document is the transmitter not of a
single truth, but of multiple narratives that always remain open and subject
to revision".

**Translation.** One small mark can carry one meaning (the red dot). The
page's one accent colour is reserved for one meaning: *the record is being
read through this*. Nothing is edited by touching the print; pencils only, so
the record is never a form.

### 1.6 What the archives' own websites do, and do not do

The Deutsche Digitale Bibliothek rendering of a Marburg record is a labelled
list (`Objekttyp`, `Klassifikation`, `Ereignis: Herstellung (wer / wann /
wo)`, `Datenpartner`), with "Alle ausklappen / Alle einklappen" toggles; the
Marburg archive "has always archived negatives first" and collected positives
since 1889 in a "Kunsthistorischen Apparat" for teaching (Bildarchiv Foto
Marburg, *Fotopositive im Bildarchiv*, 2011). Zeri's web catalogue is a
sectioned form (UBICAZIONE, OGGETTO, SOGGETTO / TITOLO, AUTORE DELLA
FOTOGRAFIA, DATI SULLA RIPRESA, RAPPORTO). The Warburg database was
redesigned in 2023 so that "the design of the new version matches that of the
Institute's other internet resources in lay-out and colour scheme". None of
them lay prints side by side, none show a verso next to its recto, and none
of them distinguish, on the page, a control from a label. They are flat in
exactly the way the brief objects to, and their flatness is the house style
of library catalogues, not a considered choice. That is the gap this design
is for.

---

## 2. Principles, as rules a developer can apply

### 2.1 From the archives

- **R1 The print is a mounted object.** Every print sits on a visible
  margin of pale card, the mount, in the paper family of the sheet: 3 px at
  the table's default scale, growing a little with zoom so it stays a mount
  and never a hairline. The mount is what separates two prints, and it is
  what the archive's mark sits on (upper right) and the number sits on (lower
  left, when handled). Same places on every print, every archive.
- **R2 The verso is one click away and visible as such.** A print with
  leaves shows its leaves at its lower-right corner at rest, not on hover.
  Its number appears when it is handled (hover, picked up); at rest the
  print shows only its archive's mark.
- **R3 The archives are the filter.** The only way to narrow to archives is
  the bank of archive keys on the rail. Any set can be latched; the table
  relays out with the union and the record is read through it. Each key
  shows at rest how many prints its archive has on the table. There is no
  second archive filter on the right.
- **R4 Picking up is reading through.** Clicking a print lifts it, opens it
  under the light, and reads the record through its archive. Putting it back
  closes the viewer and puts the print down: nothing stays picked up, and the
  record is read through every archive again (or through the selected ones).
- **R5 Reasons are data.** Evidence rows say what kind of evidence they are.
  Counts are not shown as prose ("four forms"); the marks are the count.
- **R6 One accent, one meaning.** Blue means "read through this": the selected
  archives, the picked-up print, the active leaf, the band on the record. Red is
  the consensus lozenge and nothing else. Archive colours are the archives'
  own and are never used for state.
- **R7 Nothing on the page edits the record.** No field looks like an input.
  Links are underlined type. Instruments operate the view, not the data.
- **R8 Nearly everything on the sheet is a link, and says so at rest.**
  Every artist, umbrella and authority badge, every type, material and
  narrower term, every subject term, every place and every source is a real
  link to the term's IRI through `/resource/?uri=…` (`#` only where the
  data carries no IRI yet). Not links: the title variants, and the
  as-recorded and reason rows inside a slip. A link is underlined at rest
  with a 1 px line in ink-4, offset 3 px below the baseline, darkening to
  ink-2 under the hand; never the browser default, never colour alone.
- **R9 The date axis names its bounds.** The earliest and latest dates any
  archive claims are the answer to "when, at the outside?"; on the axis they
  are a step heavier (600, 10.5 px, ink-2) with a longer, darker tick, while
  the intermediate years stay a light grid.

### 2.2 From Alexander, made specific

The fifteen properties are a checklist, not a style. Each one below names
the place in the page where it is produced, so it can be checked in a
screenshot.

- **Levels of scale.** Page → panel → rail → instrument → mark; record →
  part → group → claim → evidence. Adjacent levels differ by roughly 2–3×,
  never 10× (rail 54 px, instrument 24 px, mark 16 / 13 px; part head 10.5
  px, claim 14.5 px, title 27 px).
- **Strong centres.** At any moment one thing is "in hand": the picked-up
  print on the left, the held claim (red lozenge) on the right. Both are made
  strong by the same means, elevation plus the accent ring.
- **Boundaries.** Every surface has a thin lit edge and a thin cast edge, in
  that order, from one light at the top left. The table is bounded by a
  recess, the sheet by its standing edge, each instrument by its own face.
  Boundaries are 1–2 px zones with two tones, never a single grey line.
- **Alternating repetition.** Claim / slip / claim; instrument / well /
  instrument; print / gutter / print. The rhythm is of two things, not one.
- **Positive space.** Gaps are shaped: gutters between prints are equal (the
  table's grid), the gap between rail groups is larger than the gap inside a
  group, the void under three prints when one archive is selected is left alone.
- **Good shape.** Instruments are closed, convex, slightly rounded (4 px).
  Marks are square tiles. The handle is a square, not a chevron glyph
  floating in text.
- **Local symmetries.** Each instrument is symmetric about its own axis; the
  marks register is a right-aligned column, the same column in claim and
  slip; the rail as a whole is not symmetric.
- **Deep interlock and ambiguity.** The selected archive's key and the mark on
  the print and the mark in the record are one glyph; the sheet's banner repeats it. The
  active tab is cut from the same face as the rail. The record's filtering
  comes from the grid's own state.
- **Contrast.** Table (cool, recessed) against sheet (warm, standing).
  Content (flat) against instrument (bodied). Serif for what is read, sans
  for what is operated.
- **Gradients.** Shadow depth grows with elevation (well → resting → standing
  → lifted). Claims run from held (lozenge) through shared to single.
- **Roughness.** Rows are justified from the real proportions of the prints,
  so rows are uneven the way a table of real prints is. Numbers are shown as
  the archive wrote them (`mi00571g09`, `fld0017160x_p`).
- **Echoes.** One radius, one light, one mark tile, one caption voice
  ("On the table", "Archives", "Zoom", "Lay out", "Turn").
- **The void.** The table at fit has margin around the prints; the viewer is
  mostly print; the sheet's head has room.
- **Simplicity and inner calm.** No texture, no gradient on surfaces, one
  accent, a sans caption of three words per instrument.
- **Not-separateness.** The two panels answer each other; the page sits in
  the platform's chrome without a frame of its own.

### 2.3 Interaction rules downstream of Alexander

- **Affordance by body, not by colour.** A control is recognisable as a
  control with the colour stripped out (Norman's affordances; the
  pattern-language tradition from Alexander through Tidwell). Test: convert
  the screenshot to greyscale; every instrument must still read as a thing
  you can press.
- **State by position and elevation.** Selected = toward you (lifted, lit
  edge, accent ring). Momentary press = pushed in. Disabled = pushed in and
  dimmed. No state is conveyed by colour alone.
- **Structure-preserving change.** Every transition keeps what was there:
  selecting an archive relays the same table; picking a print lifts it in place
  rather than replacing the table with a black screen; filtering dims the
  other archives' marks (opacity 0.16) rather than deleting them from a
  shared claim, so the shape of agreement is still visible.
- **Smallest effective difference** (Tufte) for data: marks at 82 % opacity,
  rules at 12 % of ink, kinds in 11 px sans.

---

## 3. The page

Two panels on a desk: the **bench** on the left (a rail above a recessed
table), the **sheet** on the right (a standing sheet of paper). 55/45 split,
18 px between them, no chrome of its own. One light from the top left.

Surfaces, from the mockup:

| surface | tone | elevation |
|---|---|---|
| room (page ground) | `hsl(40 16% 92%)` | — |
| bench (rail) | `hsl(40 14% 89%)` | standing, lit top edge |
| table | `hsl(40 9% 84%)` | recessed (inset 2 px cast) |
| instrument well | `hsl(40 12% 85%)` | recessed (inset 1 px cast) |
| instrument face | gradient `hsl(42 30% 98.5%) → hsl(40 18% 93%)` | standing |
| sheet | `hsl(42 32% 97%)` | standing, 28 px soft cast |
| under the light (viewer) | `hsl(40 7% 76%)` with a radial lift | recessed |

Inks: `--ink` warm black, `--ink-2/3/4` three greys; `--pull`
`hsl(212 42% 40%)` the one accent; `--rubric` `hsl(8 55% 42%)` the lozenge.
Archive inks are sampled from the institutions' own marks (Frick and KHI
black, Hertziana `#414040`, Marburg `#EC7B18`, Zeri `#5593C9`) and used
only on their marks.

Type: Source Serif 4 for what is read (title, claims, evidence quotes), Inter
for what is operated and for labels (rail captions, kinds, mount strip,
counts). Small caps are not used; captions are 8.5–10.5 px tracked
uppercase sans.

### 3.1 The bench: every control on the left

The rail is 54 px tall. Each instrument group has a caption above it in the
same voice, so the logic of the controls is written on the controls: **On
the table · Archives · Zoom · Lay out**. Groups sit in wells (recessed);
their selected member stands out of the well on the instrument face.
("Boxes" and "Closer" were the first captions; both were judged too clever
for a curator meeting the page cold, and the plain words won.)

**Tabs — "On the table"** (`Photographs`, `Similar works`, `Parts` when
present)
- *Look.* A segmented well; the active segment is a face standing 1 px proud
  with the lit top edge; inactive segments are text on the well.
- *States.* Resting (text, ink-3), hover (ink-2), active (face, ink).
- *Not content because* it has a body and a well; the sheet's running heads
  are tracked caps with no body.
- *Practice.* Which drawer is open on the table. The table shows one kind of
  thing at a time, as a Photothek box does.

**Archives — the filter, as a bank of latching push-keys**
- *Look.* A well holding one key per archive, like the preset keys of a car
  radio with the detent removed. Each key is raised at rest: a convex face
  (lighter at the top), a lit top edge, a 2 px cast under its bottom edge;
  34×20 px, carrying the archive's own mark in its own ink at the left and,
  printed on the face at the right, the count of prints that archive has on
  the table. The count is there at rest: it is the key's label.
- *States.* Up (raised); hover (face a touch brighter; nothing else, so the
  state never depends on the pointer); **in** (the key sinks 2 px, the face
  darkens, an inset shadow fills it, the mark and count sit a pixel lower,
  the count turns `--pull`) and it stays in until pressed again. Any number
  of keys can be in at once; the table relays out with the union of their
  prints; the sheet's band lists the latched archives and keeps only rows
  that any of them attests. No keys in is the whole table. A round **×**
  instrument appears at the right of the well while anything is latched or
  picked up, and releases everything.
- *Not content because* the mark on a key sits in a body in a well on the
  rail; the same mark in the sheet sits in the register column with no body,
  and does nothing when clicked.
- *Practice.* Caraffa's eight Carpaccio boxes; Zeri's busta and fascicolo;
  Edwards's "boxes, the building blocks of archives". It translates because
  the archive key is already the strongest partition of our data (every value
  carries provenance), and because a curator's question is routinely "what
  does Marburg say" rather than "what is the union".

**Zoom — scale of the table**
- *Look.* A well, like the other groups', holding a groove with a 15 px knob
  on the face between a small "−" and "+" glyph in ink-3, and a **Fit**
  instrument standing at the well's right end.
- *States.* Knob resting / hover (deeper cast) / dragging. **fit** is pushed
  in and dimmed while the table already fits; it stands up as soon as the
  table is scaled, and pressing it lays the whole set out again.
- *Not content because* a groove and a knob are the only slider-shaped things
  on the page; the date scale on the sheet is a groove too, but has no knob,
  only fixed points, and that is deliberate: a groove with a knob is an
  instrument, a groove with points is a reading.
- *Practice.* Deciding how many prints to lay out on the table at once. The
  magnifier is a different tool (the viewer); the table's scale is about
  comparison, so it stays one control, applied to all prints at once.

**Lay out — table / mounts**
- *Look.* A two-position well; the active position stands on the face.
- *States.* Table (justified rows at real proportions) / Mounts (one print
  per row with its full mount data; the component's list view).
- *Not content because* two icons in a well with one standing proud; nothing
  in the sheet is a toggle.
- *Practice.* Spreading prints to compare, versus going through a box one
  mount at a time to read.

**The print**
- *Look.* A photograph on its mount: a 3 px margin of pale card around the
  image (the card is `--autofit-mount`, one step below the sheet's paper),
  standing a few millimetres off the table under the page's one light: a lit
  edge along its top and left, a 1 px contact ring and a tight contact
  shadow where it meets the tray, and a soft cast below and to the right
  that reads as distance, not glow. This is the "standing" elevation of the
  scale, because a print is a thing, not a surface. Its archive's mark sits
  on the mount's upper-right corner (13 px, archive ink, on a tab of the same
  card that turns the corner inward); its number sits on the mount's
  lower-left corner on the same card when hovered or picked up. If it has
  leaves (verso, detail), they sit on the mount's bottom edge at the lower
  right as 20 px thumbnails on the card, always visible; the shown leaf is
  ringed in `--pull`. The gutter between mounts is at least 6 px, so casts
  breathe and no two prints ever touch.
- *States.* Resting (standing); hover (lifts 2 px: the cast widens and
  softens, the contact shadow lets go, the number appears, cursor pointer, no
  overlay); **picked up** (lifts 3 px, a 2 px `--pull` ring on the mount's
  edge, the viewer opens, the sheet reads through its archive); muted (40 %
  opacity, desaturated) when another print is picked up or its archive is
  not among the selected ones. **Put back** (the viewer's
  close instrument) puts the print down: it is no longer picked up and the
  sheet is no longer read through it.
- *As a control.* Clicking the print is "pick it up". Clicking a leaf turns
  it in place without picking it up. There is no separate zoom button on the
  print: the earlier design's corner magnifier was a second control for the
  same gesture.
- *Practice.* R1, R2, R4. The fixed corners are the KHI mount's inventory
  number and class-mark positions; the number chip is the inventory stamp; the
  leaf strip is "wenden!".

**Under the light — the viewer**
- *Look.* Opens over the table only; the rail stays. A neutral mid-grey with
  a radial lift at the centre, the print dropped on it with a real cast
  shadow (drop-shadow follows the picture's own edge). IIIF prints open in
  the deep-zoom viewer, zoomed by wheel, drag and double-click; the viewer's
  stock button strip is hidden (see §6). Top right: a **Put back** instrument
  (× and label). Top left, when the print has leaves: the **Turn** instrument,
  30 px leaves on a face with the caption *Turn*; the shown leaf is ringed.
  Below the print, on a paper strip, **the mount**: `LEAF` (when a verso or
  detail is shown) · `ARCHIVE` · `NUMBER` · `PHOTOGRAPHER` · `TAKEN` ·
  `TECHNIQUE` · `PRINT` (mm) · `RIGHTS`, each as a tracked label and a value,
  then the archive's own caption line in small type.
- *States.* Open / closed; leaf shown; (future) compare.
- *Not content because* the strip's labels are in the caption voice of the
  rail, and the two instruments have faces; the picture has none.
- *Practice.* Holding the mount under the lamp; the typed Frick label; the
  scheda F. It translates because the data is already there in the
  descriptor and was being flattened into one sentence.

**The note under the table.** One line in sans, three verbs in bold: *Pick
up* · *Select archives* · *Turn*. It is the only instruction on the page and
it names the three practices.

### 3.2 The sheet

- **Head.** Title (serif 27), gloss line with links underlined in a
  12 %-ink rule, then "Five catalogue records" followed by the five marks in
  the register order. The register order is alphabetical by archive
  everywhere (Frick, Hertziana, KHI, Marburg, Zeri), so a row of marks can be
  read like a row of a table.
- **Read-through band.** A 30 px band at the top of the sheet that always
  holds its slot, so latching a key never moves the title. At rest it reads
  "Read through · every archive" in ink-4 on nothing. When the grid is read
  through one or more archives it reads "Read through" followed by each
  archive's mark and name, in `--pull` on a 12 % `--pull` ground. It is the
  sheet's only use of the accent.
- **Four levels, four different things.** The sheet is read at four levels
  and adjacent levels step in size, weight, case and colour at once:
  - *Level 0, the field's name.* Running heads in 10.5 px tracked caps,
    600, ink-3, with a rule running out from the label. The labels are the curator-approved
    field names, never renamed by design: Title, Creator/Attribution,
    Production Date, Repository/Last Known Location, Subjects, Physical
    Properties, Bibliography, View original records. A field's sub-label
    (Physical Properties › Types, › Material) is the same
    family one step down: 9.5 px, ink-4, no rule. A label is never a value.
  - *Level 1, the reconciled umbrella.* The authority entity that gathers
    several statements (Girolamo da Carpi ULAN; Historical persons 61B). A
    quiet header: 10 px tracked caps, 500, ink-4, indented to the claim's
    text column, and a link, the name to the entity's record and the badge
    to the authority, underlined at rest like every link, never a body. It shows even
    over a single statement, because it carries the links, and never
    outweighs the statement beneath it.
  - *Level 2, the claim.* The serif statement (14.5 px, ink) with the
    consensus lozenge and the marks register; linked when it has an
    authority IRI. Narrower terms (Malerei, Tafelmalerei, tavola, Öl) hang
    beneath it as branches of a tree: 13 px, ink-2, indented a further step
    behind an L-shaped connector in the rule colour.
  - *Level 3, the evidence.* In the slip under the claim: what the archive
    wrote, italic serif 12.5 px, ink-2, with its kind in 10.5 px sans and
    its marks at 13 px in the same register column.
- **Claims.** A grid of five columns: lozenge · text · kind · marks register
  (96 px, right-aligned) · edge column (22 px). The lozenge (7 px, red,
  rotated) marks the held claim. The edge column is where the **handle**
  lives: an 18 px face with a chevron, present only on claims that have
  evidence. Claims without evidence keep the column empty, so every register
  lines up.
- **Slip.** The evidence, pulled out under the claim: indented 22 px, a 2 px
  rule on its left, each row with the quoted form as recorded, its kind, and
  its marks (13 px) in the same register column as the claim above.
- **Date.** Three readings on one scale: a recessed groove per reading, an
  ink bar for the range and a point for its midpoint; the axis under them,
  with its two bounds (the extremes across every archive's claim) set
  heavier and with a longer tick than the intermediate years. The groove is
  the same groove as the rail's zoom, without a knob.
- **Subject.** Umbrella heads with their Iconclass notation as a badge; terms
  laid in a row with a 16 px gap and no separator glyph, each term followed
  by its mark.
- **Sources.** One link per archive with mark, name and the archive's own
  identifier, and ↗.

---

## 4. The control vocabulary

The letterpress mockup proposed three materials: paper (read), board
(worked), metal (operated). **Replace it.** Materials invited literal
rendering: grain, brass, rotated stamps, swallowtail ribbons. Each of those
was decoration standing in for a role. The role is what matters, so the
vocabulary is three *kinds of thing*, each with one treatment, applied
without exception:

| kind | what it is | treatment | examples |
|---|---|---|---|
| **surface & content** | what is looked at or read | flat on its surface; surfaces have elevation, content never does | prints, claims, evidence, title, mount strip values |
| **mark** | who said this | the institution's own glyph, its own ink, upright, one size per register, never a control | marks in claims, on prints, in the band, in Sources |
| **instrument** | what operates the view | a body on the instrument face in a well or at an edge; state by elevation; captioned in the one caption voice; never inline in running text | tabs, boxes, knob, fit, lay-out, handle, put back, turn, push back |

Rules that follow:

1. A mark is never clickable. The only archive control is the bank of keys
   on the rail.
2. An instrument never carries an archive colour. The accent is `--pull`.
3. Links are type with a quiet underline at rest; they take you elsewhere,
   they do not operate this page. Almost every term on the sheet is one.
4. The one accent means one thing. Red means consensus.
5. Captions are 8.5–10.5 px tracked uppercase sans, three words at most.
6. Depth is produced by one light: a lit top edge and a cast below and to
   the right, in every shadow stack on the page. Recessed things have the
   cast inside at the top.

Kept from letterpress: the four-column claim with a register of marks, the
lozenge for consensus, evidence as a slip under the claim, the date scale,
the umbrella subjects. Kept from wholeness: the four levels of the sheet
(field name, umbrella, claim, evidence) and the umbrella set as a quiet
tracked header rather than a title. Dropped: grain, running-head quads, stamps with
per-occurrence rotation and pressure, index ribbons, the dark tray, the
"brass" toolbar, counts in prose.

---

## 5. What is in the component and what is page CSS

### 5.1 `pharos-auto-fit-grid` (AutoFitGrid.tsx / .scss), done

The build hashes module classes as `[name]--[local]`, so every internal class
is already stable (`AutoFitGrid--autoFitToolbar`, `…Cell`, `…Lightbox` and
so on) and page CSS can address them directly. What the component lacked was
*state the page can see*. Added:

- `ImageDescriptor.archive` (short key, e.g. `zeri`; defaults to a slug of
  `providedBy`) and `ImageDescriptor.side` (`recto` | `verso` | `detail`).
- `archiveFilter` is a set (`string[]`); `filterArchive` toggles membership,
  the chips' active state and `getEffectiveImages` follow, and
  `onArchiveChange` now receives the array.
- Root: `data-tab`, `data-archive` (the selected archives as a
  space-separated list, or the picked-up print's archive, so page CSS can use
  `~=`), `data-pinned`, `data-viewer`.
- The viewer's close button calls `putBack()`: it closes the viewer and
  clears the pinned print.
- Archive chips: `data-archive`, `data-count`, a title with the count.
- Cells (grid and justified paths): `data-archive`, `data-number`,
  `data-leaves`.
- Leaf thumbnails everywhere: `data-side`, `title`.
- Viewer root: `data-archive`. Viewer caption replaced by **the mount**:
  `dl.AutoFitGrid--mount` of labelled rows built from the descriptor
  (archive, number, photographer, date, technique, print size, rights, plus
  the shown leaf), then the caption line as `AutoFitGrid--mountNote`.
- **fit** button (`button.AutoFitGrid--fit`) in the zoom group, disabled at
  zoom 1.
- **The mount.** The justified solver now sizes each cell as its image plus
  a mount of M px on every side (M = round(3·zoom^0.35)), so the solve is
  W_eff = (H_avail + G·(B − K + 1) + 2M·(C − K)) / A with C = Σ Nᵣ/Sᵣ, image
  heights are floored from the row width less gaps and mounts, and the plate
  still fits the table exactly. The cell renders with that padding, exposes
  `--mount`, and carries the card colour (`--autofit-mount`, overridable by
  the page) and the standing/lifted shadow stacks. The mark is wrapped in
  `span.AutoFitGrid--autoFitMark` at the mount's upper right, the number in
  `span.AutoFitGrid--autoFitNumber` at its lower left (shown on hover and
  when pinned), and the leaves strip sits at `bottom: var(--mount)`. The
  gutter floor rose from 2 to 6 px. The older mockups pick all of this up
  unchanged and still fit.
- A bug fix the mockup exposed: the first justified layout is computed while
  the loading branch is rendered, before the toolbar and scroll area exist, so
  it measured the whole container and overflowed by the toolbar's height. The
  component now re-measures once after its first layout mounts.
- Base styles for the new plain-named elements are in the scss under
  `:global`, so they add nothing to the `.scss.d.ts` typings.

The page can then drive the sheet from the grid's own state with no script.
With a set of archives the rule is "a row shows if any of its archives is
selected": each attributed row, group and part gets one custom-property flag
per archive, reset to `initial` on every element so a lit group does not
light its rows; `.rr:has(…[data-archive~="zeri"]) .sheet [data-arch~="zeri"]
{ --on-zeri: var(--show) }` lights one; and the element's display is
`var(--on-frick, var(--on-hertziana, … none))`, with `--show` carrying the
element's own display value (grid, inline-flex, block). Groups and parts
vanish only when none of their rows survive (`.group:has([data-arch~="k"])`).
In production the same can be done with `onArchiveChange` / `onPinChange`;
the attributes remain useful for styling either way.

### 5.2 Page CSS (`assets/new-styles/reading-room.css`; the per-archive rules are written by the template)

Everything visual in §3.1: rail height and captions, wells and faces, box
tiles drawn from the mark via `mask`, knob and groove, the print's corner
mark and number chip (`::before`/`::after` on the cell), leaf strip
placement, the viewer's ground, Put back, Turn, the mount strip typography,
and the hiding of the deep-zoom viewer's stock buttons. One hard rule: the
scroll area must carry **no padding** of its own, because the component
measures its `clientHeight`; the plate pads itself by its gap.

### 5.3 Not done, proposed

- A **compare** state: picking up a second print with a modifier lays both
  under the light side by side, with both mounts. This is the Berenson
  "Compare…" practice and the Warburg screen; it needs component work
  (multiple lightbox indices, a two-up viewer).
- The deep-zoom viewer's own zoom as two instruments on the viewer's top
  edge, instead of the stock image buttons.
- Keyboard: `←`/`→` between prints under the light, `t` to turn, `Esc` to
  put back; focus rings in `--pull`.
- `Mounts` (list) view restyled to the same mount strip.

---

## 6. Open questions

1. **Should the marks in the sheet be clickable?** The vocabulary says no
   (one archive control, on the rail). Curators may expect to click the Zeri
   mark next to a claim to read through Zeri. If yes, it should still look
   like a mark and behave like a link, not grow a body.
2. *(decided)* The print's number shows when the print is handled (hover,
   picked up), not at rest. What is on at rest is the count on each archive
   key.
3. **Viewer zoom instruments.** Wheel and double-click are enough on a
   desktop; the stock OpenSeadragon buttons are hidden in the mockup. Whether
   to add bodied +/− on the viewer edge, or leave the table's "Zoom" as the
   only zoom instrument, is a judgement about touch devices.
4. *(decided)* Put back puts the print down: closing the viewer unpins it
   and lifts the read-through from the sheet. Selected archives stay
   selected until × clears them.
5. **Archives without a mark.** The key should fall back to a letter in
   `--ink-2` on the same body; not designed.
6. **`:has()` in production.** Fine in current browsers; the component's
   callbacks are the fallback if the platform must support older ones.
7. **The serif.** Source Serif 4 is a web font (Google Fonts). If the
   platform cannot load it, the sheet should fall back to Georgia, not to
   Inter; the contrast of read/operated depends on it.
8. **Count flags on hover** may still be judged noise; they are the one place
   a count survives, and only under the hand.

---

## Sources

- C. Caraffa, "From 'photo libraries' to 'photo archives'. On the
  epistemological potential of art-historical photo collections", in
  *Photo Archives and the Photographic Memory of Art History*, ed. C.
  Caraffa, Berlin/Munich 2011 (mounts, stamps, boxes, "wenden!", red dot,
  digitisation protocol).
- E. Edwards, "Photographs: Material Form and the Dynamic Archive", ibid.
  (labels, palimpsest, boxes, the regulated body).
- G. Pagliarulo, "Berenson's photographs", ibid., p. 185 ff. (verso notes,
  "Compare…", qualified attributions).
- "Aby Warburg and Mnemosyne", ibid., p. 91 (the screens).
- C. Caraffa, E. Pugh, T. Stuber, L. Wood Ruby, "PHAROS: a digital research
  space for photo archives", *Art Libraries Journal* (comparison of
  attributions across institutions; ResearchSpace).
- Fondazione Federico Zeri, catalogue: work 43200 (reasons for attribution,
  different attributions); scheda F 99163 and 90606 (fields);
  `w3id.org/zericatalog/criterion/note-on-verso-of-photograph`.
- Frick Art Research Library, digitalcollections.frick.org (Photoarchive
  description); the Frick verso in this record (print 84094).
- Bildarchiv Foto Marburg, *Fotopositive im Bildarchiv*, Arbeitsgespräch,
  2 Feb 2011; Deutsche Digitale Bibliothek record rendering.
- The Warburg Institute Iconographic Database, "About us".
- Bibliotheca Hertziana, Fotothek catalogue introduction (edoc.biblhertz.it).
- C. Alexander, *The Nature of Order*, Book 1, *The Phenomenon of Life*
  (the fifteen properties); Book 2 (structure-preserving transformations);
  *A Pattern Language* (boundaries and trim).
- D. Norman, *The Design of Everyday Things* (affordance);
  J. Tidwell, *Designing Interfaces* (interaction patterns in Alexander's
  form); E. Tufte, *Visual Explanations* (smallest effective difference).

---

## Implementation notes, Oct 9

Changes to the rules above, made while polishing the live page (review:
`pharos-record-review-2026-10-09.md`).

- **One instrument body, three kinds of control.** Every rail instrument is
  22 px tall, radius 4, set 3 px into a 28 px well, on the one face and
  shadow scale, 12 px/500 sans. A *selector* (tabs, lay out) shows its choice
  as the one face standing in the well, the rest lie flat. A *latching key*
  (archives) stands and sinks while it is in, its count in `--pull`. A
  *momentary button* (Fit, ×, Put back, handle) stands and goes in only while
  pressed. Anything that cannot act now is pushed in **and dimmed**, never
  hidden: Fit at zoom 1, × with nothing latched or picked up, the one key of
  a single-archive record, and every table instrument while another drawer is
  open or the table is empty. This replaces "× appears while anything is
  latched" in §3.1; × is always at the archive well's right end, as Fit is at
  the zoom well's.
- **Keys** are sized by content (mark + count) so any count fits, and sit in
  register order like every other row of marks.
- **Marks are drawn as the archive drew them**, not re-inked through a mask:
  several archives' glyphs are tiles (Zeri, RKD, PMC, Dumbarton Oaks), and a
  tile through a mask is a solid block. A glyph too pale at 13 px may be
  darkened per archive (`--mark-filter`). Archives without a glyph wear their
  initial on keys, prints and the sheet alike. On small prints the mark
  steps down (10 px under 88 px, 8 px under 56 px).
- **The sheet has one set of columns**: lead (14) · text · kind · register
  (≥ 96, right-aligned) · edge (22). Field names start at the part edge;
  every value — claims, umbrellas, subject runs, dates, plain lines, sources —
  starts at the text column. The authority badge always follows its linked
  name; the kind column holds only the archive's kind of statement.
- **Level 1 is sentence-case sans** (11 px, ink-3, one line), so case steps
  between level 0 (tracked caps) and level 1. An umbrella is shown only when
  it gathers something other than itself: a creator group is one claim (the
  creator value is the authority entity), and an umbrella over a single term
  of the same name is dropped. Attribution qualifiers appear only when an
  archive recorded them.
- **Date**: the part is one grid; the qualifier sits in the kind column and
  the marks in the register; readings are in chronological order; round years
  within 14 % of the span of a bound are left off the axis.

## Implementation notes, Oct 13

- **Other works on the table.** Related works and Similar works lie on the same
  table as the photographs, one print per work (for a similar work its closest
  photograph, otherwise its preferred one), so Zoom, Fit and Lay out act on them
  too. The archive keys remain the photographs' own and lie pushed in on these
  tabs; the sheet keeps reading through whatever is latched. Picking a work up
  opens it under the light with its own mount: its title as a link to its
  record, the fields of its card, and why it is on the table ("visual
  similarity", "linked from 4 records"). Nothing about another work is read
  into this record's sheet.
- **Mounts (list) restyled** (§5.3): one paper slip per print. The print stands
  in a slot of one width, so the text of every slip starts on one line; the
  title is in the reading voice (serif 15, linked), the mount strip is tracked
  caps and values on one label column, the note is in the kind voice, and a
  work's register of marks closes the slip on the right. Photographs use the
  same slip with the viewer's mount rows.
- **Batches.** A works tab lays out 60 at a time; under the last print, the
  count in the caption voice and a momentary "Lay out 60 more".
- **Missing pictures.** A print whose cached picture fails is asked of its IIIF
  image service (a few at a time, the open tab's first). If that is slow, the
  print lies as a card and the picture is put on the card when it comes, so the
  table never moves; a print with no picture at all is a blank card bearing its
  title.
- **The note** under the table names what the hand can do on the open table.
- **The rail** never covers an instrument: the zoom groove gives way first.
- **The site's palette.** Every surface is drawn from the platform's cream
  (`#fff9e8`): the room is that colour itself, so the page runs on from the
  header without a seam; bench, table, wells, mounts and the sheet are steps
  of the same hue. Rules sit at the site's `#d3cec0`, and `--pull` is the
  site's blue (`hsl(202 44% 40%)`). The surfaces are tokens at the top of
  `reading-room.css`; only the archives' own inks stay literal.
- **The rail has two lines.** What is on the table, Zoom and Lay out on the
  first; the archive keys on a line of their own beneath, since they choose
  among the photographs only. A record with no photographs has no keys and
  keeps one line. Below a 640 px bench the tabs take a line to themselves.
- **Reading through fades, it does not hide.** With archives latched or a
  print picked up, every row, date reading, subject term and source that none
  of them attests fades to `--faded` (0.26), and so do the field and umbrella
  heads with nothing lit beneath them. Nothing is removed, so the sheet keeps
  its exact shape and nothing moves. This replaces "groups and parts vanish
  only when none of their rows survive" in §5.1.
- **The page holds still.** Only the table and the sheet scroll, each on its
  own; the document is exactly the window's height (the site's header margin
  used to collapse through the app's full-height wrapper and leave it one
  header taller). Below 1100 px, where bench and sheet stack, the page
  scrolls as before.
- **Many titles fold.** The Title part shows the three titles the archives
  agree on most; the rest fold beneath a handle row, "Show N more titles",
  with the slip's handle at the edge and the marks of the archives behind
  the folded titles in the register, so a latched archive whose title is
  folded still lights the row. Nothing folds when only one title would.
  The ranking is fixed whatever order the data arrives in: archives agree
  when they wrote the same words, give or take case, accents and cataloguing
  punctuation ("La Joconde /" agrees with "La Joconde"), and only the cleanest
  wording of each is shown; ties go to the wording more archives wrote
  exactly, then alphabetically; an identifier-like string comes last
  (`rankByAgreement`).
- **Everything the hand can work stands.** Tabs and Lay out were the one
  exception (their unchosen options lay flat as type); now every option
  stands and the chosen one is in, like a bank of radio keys, the same as a
  latched archive key. The − and + beside the zoom groove are momentary
  buttons that step it. What cannot act now loses its body and dims (it used
  to be pushed in, which now means chosen); a chosen or latched one stays
  in. Zoom cannot act in the list, so it dims there.
- **One rhythm on the rail.** 9 px of air above each group's name, the name,
  4 px, the 28 px well, 10 px below the last well, 14 px at the sides (as on
  the note under the table and the list of mounts); wells hold 22 px
  instruments 3 px in and 4 px apart; every group's name sits over its first
  instrument. The rail is 110 px, 60 px without archive keys. The viewer's
  Put back and Turn sit 12 px down and 14 px in, Put back as a 22 px body.
- **Pictures are not loaded to be measured** (Oct 14, per image Oct 19).
  Every image carries its pixel size (`custom:image_width` / `custom:image_height`,
  fields `image_width` / `image_height`), and the works tabs' queries return
  `?width ?height` for the image each work is shown by. The table is laid
  out from those sizes at once; each picture loads lazily when its print is
  on the table, and one that fails is swapped in place for its IIIF picture
  (a few at a time), or leaves a blank card — the print keeps its place
  either way. Only a print with no recorded size is still loaded first to
  be measured.
- **Leaves come from the data** (Oct 14, reshaped Oct 19). A photograph lists
  the images that can be shown (`custom:image`, field `photo_image`), each
  with its own position, side (`photograph_recto` / `_verso` / `_detail`),
  thumbnail, preview, IIIF service and size (fields `image_*`), and names
  the one it is shown by (`custom:primary_image`, its first front). A print
  lies on the table as its primary image; its other leaves follow in the
  archive's order on the mount and under *Turn* — Frick sometimes puts
  details before the recto, which is why the primary is named rather than
  taken from position 1. A work names its own primary image and preferred
  photograph (`custom:primary_image`, `custom:preferred_photo`, which holds
  it), and lists all its photographs (`custom:photo`; for a merged A-id,
  those of every record merged into it). The photo-level fields
  `photo_thumbnail` / `photo_preview` / `photo_iiif_manifest` read through the
  primary image, so search cards and the photograph page show it as they
  always read those fields. The works tabs show each work by its photograph's
  primary image; a work with no photograph stands for itself there, because
  an unbound photograph would join every image in the index (that join was
  what made *Similar works* run for minutes and exhaust QLever's memory).
- **A table too large to see at once** (Oct 19). A merged work can hold hundreds of
  prints (A27113: 731 photographs from seven archives). Fitting them all made each
  print a few pixels tall, its strip of leaves covered it (so the table showed
  versos), and the zoom could not even make one print large. Now:
  - *The scale runs from a print that can be read to one print as tall as the
    table.* The smallest print is 96 px (`MIN_PRINT_HEIGHT`); "fit" lays the whole
    set out when it fits at that size or larger, and otherwise lays it out at that
    size and lets the table go on beyond its edge. The other end is one print as
    tall as the table. The slider is a log scale over that range and takes the room
    the rail has between the tabs and the lay-out keys, so its steps stay fine
    over a range that can span hundreds of times. (Levels of scale: mark 13 px,
    leaf 20 px, print ≥ 96 px; nothing on the table is smaller than the things it
    carries.)
  - *A print too small for its strip of leaves shows its own picture* (under 120 px
    wide); the strip folds into a turned corner at the mount's lower right, which
    still says the print has more leaves. Picking it up shows them.
  - *The table says that it goes on, in the room's own terms* (gradients, the
    visible whole). Where prints lie beyond an edge the light falls off towards
    that edge, so the row the edge cuts reads as running on under it; at that edge
    a key says how many prints lie there ("432 more prints further down") and moves
    the table on. Beside the table its plan: every print a tile in its row, in its
    archive's ink, the part in view framed by a lit window; pressed or dragged it
    moves the view. It shows how much there is, where the view is and where each
    archive's prints lie, and it stands in for the scroll bar.
