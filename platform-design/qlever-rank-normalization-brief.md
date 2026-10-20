# Brief for the QLever fork: normalized scores in `SERVICE rank:`

For whoever works on the PHAROS QLever fork (`qlever-pharos`, branch `rank-service-2026-10`, reference
`docs/rank-service/README.md`). Background: `search-fusion.md` in this folder.

## Why

The PHAROS search fuses up to four result lists (keyword index, text embeddings, image embeddings,
near-copy embeddings). It no longer uses reciprocal rank fusion: each list's score is scaled to 0–1 over
the rows the list keeps (its best row 1, its weakest 0), and the lists are then combined by weighted
sums. In plain SPARQL the scale needs each list's highest and lowest score, so today every list is
computed twice in the same query: once for its rows and once in an aggregate subquery for `MAX`/`MIN`
(the vector search and the keyword view lookups run twice). `SERVICE rank:` already sorts each list and
keeps its top N; it can bind the scaled score in the same pass.

## 1. Required: `rank:bindNormalized`

```sparql
PREFIX rank: <https://qlever.cs.uni-freiburg.de/rank/>
SERVICE rank: {
  _:r rank:score ?s ;
      rank:descending true ;           # as now; false for distances
      rank:limit 10000 ;               # optional, as now
      rank:bindRank ?rank ;            # as now, optional once bindNormalized is given
      rank:bindNormalized ?norm .      # NEW
  { SELECT ?subject ?s WHERE { … } }
}
```

Semantics, over the **kept rows** K (numeric scores only, after `rank:limit`, tie groups that cross the
limit kept whole, exactly the rows the service returns today):

- `best` = the score of rank 1 (the maximum if `descending true`, the minimum if `false`); `worst` = the
  score of the last kept row.
- `?norm = (s − worst) / (best − worst)`: 1 for the best row, 0 for the worst, linear in between; for
  `descending false` this is `(worst − s) / (worst − best)`, so the best (smallest distance) is again 1.
- If `best == worst` (one row, or all kept rows tie): `?norm = 1` for every row.
- Type `xsd:double`.
- Rows dropped today (unbound or non-numeric score) are dropped and do not count for `best`/`worst`.
- At least one of `rank:bindRank` and `rank:bindNormalized` is required; neither changes which rows are
  returned or their order.
- No second evaluation of the input: one extra linear pass over K.
- Errors as for the other options (an unknown option, a non-variable object).

## 2. Proposed, separate change: the vector cut's statistics as columns

The z-cut of `vec:autoCut` (precise / balanced / broad / exact, signal cosine or csls) already computes,
on its window, the best signal `s_max`, the noise floor `mu` (median of the lower half) and the spread
`sigma` (1.4826 × MAD). Bind them, the same value on every result row:

```sparql
SERVICE vec: { [] vec:index "images" ; vec:queryText "rain" ; vec:candidates ?p ; vec:result ?p ;
               vec:bindScore ?d ; vec:autoCut "balanced" ;
               vec:bindTop ?top ; vec:bindFloor ?floor ; vec:bindNoise ?noise . }   # NEW
```

- In the units of the cut's signal (cosine similarity `1 − distance` for the cosine signal, the CSLS value
  for csls); unbound when the query has no z-cut (no `vec:autoCut`, or the softmax signal).
- With them the search can scale a list against its own noise floor, `(s − floor) / (top − floor)`
  (comparable across queries, unlike 0–1 over what was kept, which always gives a list's best a full 1),
  and weigh each list by how clearly it found something, `(top − floor) / noise`.

## Acceptance

1. **Same numbers as the two-pass SPARQL.** On the PHAROS index, the conceptual list for "rain" over all
   artworks, computed both ways, gives the same `?norm` per subject (to 1e-9):

   ```sparql
   PREFIX crm:  <http://www.cidoc-crm.org/cidoc-crm/>
   PREFIX vec:  <https://qlever.cs.uni-freiburg.de/vectorSearch/>
   PREFIX rank: <https://qlever.cs.uni-freiburg.de/rank/>
   # today: the list twice
   SELECT ?subject ((?similarity - ?low) / IF(?high > ?low, ?high - ?low, 1) AS ?norm) WHERE {
     { SELECT ?subject ((1 - ?distance) AS ?similarity) WHERE {
         { SELECT DISTINCT ?subject WHERE { ?subject crm:P2_has_type <http://vocab.getty.edu/aat/300133025> . } }
         SERVICE vec: { [] vec:index "narratives" ; vec:queryText "rain" ; vec:candidates ?subject ;
                        vec:result ?subject ; vec:bindScore ?distance ; vec:autoCut "precise" ; vec:k 100000 . } } }
     { SELECT (MAX(?similarity) AS ?high) (MIN(?similarity) AS ?low) WHERE {
         { SELECT ?subject ((1 - ?distance) AS ?similarity) WHERE {
             { SELECT DISTINCT ?subject WHERE { ?subject crm:P2_has_type <http://vocab.getty.edu/aat/300133025> . } }
             SERVICE vec: { [] vec:index "narratives" ; vec:queryText "rain" ; vec:candidates ?subject ;
                            vec:result ?subject ; vec:bindScore ?distance ; vec:autoCut "precise" ; vec:k 100000 . } } } } }
   }
   ```
   ```sparql
   # with the new option: the list once
   SELECT ?subject ?norm WHERE {
     SERVICE rank: {
       _:n rank:score ?similarity ; rank:descending true ; rank:bindNormalized ?norm .
       { SELECT ?subject ((1 - ?distance) AS ?similarity) WHERE {
           { SELECT DISTINCT ?subject WHERE { ?subject crm:P2_has_type <http://vocab.getty.edu/aat/300133025> . } }
           SERVICE vec: { [] vec:index "narratives" ; vec:queryText "rain" ; vec:candidates ?subject ;
                          vec:result ?subject ; vec:bindScore ?distance ; vec:autoCut "precise" ; vec:k 100000 . } } }
     }
   }
   ```
2. `descending false` on distances gives the same `?norm` as `descending true` on `1 − distance`.
3. With `rank:limit 10` on a list with ties at rank 10: the tie group kept whole, the worst of it is 0.
4. One kept row, and all rows tied: `?norm = 1`.
5. The runtime information of the second query shows the vector search once; report the time of both
   queries, cold (`?cmd=clear-cache` between runs), medians of 5.
6. `docs/rank-service/README.md` documents the option, with the semantics above.
7. A local image, drop-in like the current `-rank` one; tell us its tag. Nothing else changes: existing
   queries return what they return today.

Then the PHAROS search template replaces each list's second copy by `rank:bindNormalized` (the domain
queries stay as they are); `tests/search` must still pass, and the timings are compared with the ones in
`search-fusion.md`.
