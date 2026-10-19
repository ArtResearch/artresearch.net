# Slow search queries — to look into

Measured 2026-10-12 on the local QLever (index 175, `ql:has-word` views,
545M triples), cold cache, through the search page in the browser. The text
lookups themselves are fast (18–640 ms for every domain); what is slow is the
patterns around them.

## 1. Facet check "Photographer documented in Institution" — 27.3 s

Search: domain Photographer, input "alinari". Every facet sends an `ASK` to
learn whether it has values for the current results; this one is the slowest
request on the page. It does not block the result list, but it occupies the
server.

Relation `fr:Photographer_documented_in_Institution`
(`SearchSimpleRelations`):

    ?work crm:P65_shows_visual_item/crm:P94i_was_created_by/crm:P14_carried_out_by/custom:sameAs? ?subject .
    ?work crm:P70i_is_documented_in/crm:P104_is_subject_to ?ownership .
    ?__value__ crm:P75_possesses ?ownership .

The result set is small (photographers named "alinari…"), but the property
paths are evaluated over all photographs before the join with it. The same
shape, with `P108i_was_produced_by/P9_consists_of*/P14_carried_out_by`, is in
`fr:Artist_documented_in_Institution` (not measured).

Ideas: restructure so the bound `?subject` set drives the paths (a subquery
that starts from the results, as done for the photographer keyword search,
see 3), or have the ETL materialise "photographer/artist → documenting
institution" as a direct triple or a view.

## 2. Facet check "Photograph created by Photographer" — 10.7 s

Search: domain Photograph, input "mona lisa" (keyword + visual). Relation
`fr:Photograph_created_by_Photographer` (`SearchSimpleRelations`):

    ?subject crm:P65_shows_visual_item/crm:P94i_was_created_by/crm:P14_carried_out_by/crm:P107i_is_current_or_former_member_of? ?__value__ .

Same cause: an optional-step path evaluated broadly before the join with ~900
result photographs. Next slowest on that page: a date facet `ASK`
(`P82a_begin_of_the_begin` / `P82b_end_of_the_end`), 2.6 s.

## 3. Photographer keyword search — fixed, but the same pattern remains elsewhere

The photographer scope checks the photograph type through the type hierarchy:

    ?work crm:P2_has_type/crm:P127_has_broader_term* <…/pharos/vocab/meta/photograph> .
    ?work crm:P65_shows_visual_item/crm:P94i_was_created_by/crm:P14_carried_out_by/crm:P107i_is_current_or_former_member_of? ?subject .

With the name lookup in the same group this took 12.7 s ("alinari"). Putting the
name lookup and the photo link in a subquery, and checking the type afterwards
on those photos only, gives the same results in 0.1–0.6 s (now in
`SearchTemplate`, `text-query-3`). The hierarchy is needed: 832,067 photos are
typed `photographic_print`, 683,161 `foto`, and so on, not `photograph`.

Not yet changed: `default-query-3` (the photographer list with no input) uses
the same pattern without anything to restrict it first; not measured.

## How to reproduce

Open `/resource/Default:search?query=alinari&domain=photographer` or
`?query=mona+lisa&domain=photograph` and watch the `/sparql` requests; the slow
ones are `ASK` queries containing the relation patterns above. QLever's
`?cmd=clear-cache` gives cold timings.
