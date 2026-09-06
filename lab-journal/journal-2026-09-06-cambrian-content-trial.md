# Real Cambrian records test the HTML notebook contract

> **Record status:** Open
>
> **Capture note:** Mixed. Source selection and retrieval are reconstructed from this conversation; rendering and review follow this opening. Historical source facts are attributed, not independently repeated.

## Record identity

| Field | Value |
|---|---|
| Entry ID | LN-0012 |
| Date | 2026-09-06 |
| Opened / closed | 2026-09-06T16:14:22Z / open |
| Project / phase | lab-journal / real-content rendering trial |
| Status | Open |
| Authors | Codex — adapter and reviewer |
| Operators | Codex — source retrieval, HTML authoring, browser checks |
| Independent observer | None |
| Witness | None; user review requested |
| Environment | macOS; Node 24.15.0; beautify-all-the-journals; base 88f94d7 plus LN-0010–0011 uncommitted work |
| Artifact location | ../docs/reviews/cambrian/ |
| Sensitivity / handling | Public repository source, attributed |
| Capture mode | Mixed |
| Reconstruction sources / gaps | User-supplied Cambrian index and raw Markdown at a4d2181c488bc5f0ff329438541cba51e8543fc8; missing historical fields remain unknown |
| Parent / correction target | LN-0011; prior review retained below, no fixes to its findings in this trial |

## Question and success criterion

**Question.** Does the current HTML template help readers understand real routine, comparative and diagnostic entries without inventing evidence or disguising source limitations?

**Success criterion.** Render three contrasting records with complete retained Markdown, explicit source revision and adaptation attribution; preserve source text, numbers, uncertainty and code; inspect desktop, narrow mobile, navigation, JavaScript-off and print behavior; serve the pages and evaluate the branch from these examples.

**Credible alternatives.** Use only the richest entry; redesign CSS while importing; force every source into newly invented observations and hypotheses; retain original source sections inside the existing template shell. Prefer the last approach and use separate labelled visual summaries so this tests the existing design.

## Fast field notes

- **Opening reconstruction:** Prior fresh review rated B+ / 8 out of 10. Preserve its findings: missing portable license notice; overbroad question closure in correction specimen; examples lag mandatory protocol; HTML closure lacks verification fields; validators omit semantic integrity checks; accessibility/engine coverage is narrower than broad claims; mobile label and witness terminology issues; actual cross-host authoring remains weakly evidenced.
- **Opening reconstruction:** User supplied Cambrian master index. Web retrieval failed with cache miss; raw GitHub retrieval succeeded. API request initially failed DNS in sandbox and succeeded with approved access.
- **16:14:22 UTC:** Selected routine 2026-04-03d (702 bytes), campaign 2026-04-04b (5233 bytes), diagnosis 2026-04-01c (10548 bytes). These span short prose, wide matrices, code/diffs and a long multi-phase analysis. Resolved master to a4d2181c488bc5f0ff329438541cba51e8543fc8 and fetched sources at that revision.

## Bench record

### OBS-0012.01 — Source selection

| Field | Record |
|---|---|
| Time / sequence | Opening retrieval; reconstructed |
| Setup / action | Read Cambrian index and three contrasting Markdown entries |
| Raw observation | Routine record reports tests without logs or counts; campaign combines observed generation results with historical cost estimates; diagnosis contains logs, tables, diffs and broad technical claims |
| Interpretation at the time | Real records will stress source classification and dense content more than synthetic specimens |
| Confidence | High for source content; original experiments not rerun |
| Attribution | Cambrian source authors for historical claims; Codex for selection |
| Evidence | Pinned source revision and retained originals in review folder |
| Next move | Author faithful HTML adaptations using unchanged shared CSS/JS |

## Hypothesis and measurement ledger

| ID | Hypothesis | Predicted observation (before test) | Discriminating test | Actual result (after test) | Evidence | State |
|---|---|---|---|---|---|---|
| H-0012.01 | The template can present long real evidence without layout loss | Tables remain scrollable, code intact, all content reachable at 390px and desktop | Browser geometry, source-content comparison, navigation and print review | Pending | Planned | Live |
| H-0012.02 | Visual treatment is more valuable for comparisons than routine fixes | Campaign and diagnosis benefit from summaries; short repair incurs disproportionate scaffolding | Compare three rendered samples | Pending | Planned | Live |
| H-0012.03 | Faithful retrospective conversion needs explicit provenance limits | No invented times, witnesses, predictions, observation capture or rerun claims | Review original and adapted content | Pending | Planned | Live |

## Thinking sketches

Three retrospective evidence summaries planned: repair sequence, campaign outcomes, and diagnostic stage boundary. These are source-derived illustrations, not newly measured experiments.

## Synthesis

Pending rendering review. Prior overall grade retained as the baseline, not discarded.

## Decisions and rejected paths

| Decision / rejected path | Rationale at the time | Cost / reversibility | Owner | Evidence |
|---|---|---|---|---|
| Separate review samples from distributable synthetic examples | Real source records should retain identity and not become this project's live history | Reversible docs/reviews assets | Codex | User request |
| Keep shared CSS/JS unchanged | Evaluate current branch, not a redesigned treatment | Content-specific markup only | Codex | H-0012.01 |

## Artifact manifest

| Artifact ID / path | Parent observation | Captured by / method | Integrity | Sensitivity | Notes |
|---|---|---|---|---|---|
| ART-0012.01 · ../docs/reviews/cambrian/ | OBS-0012.01 | Codex / pinned raw-source retrieval and explicit adaptation | SHA-256 manifest planned | Public | Retained Markdown, HTML and review evidence |

## Open-question ledger

Q-0010-01 remains user design review pending. Q-0008-02 and Q-0007-02 remain inherited. Trial results will identify whether another question is needed.

## Correction ledger

None. Original Cambrian text will be retained unchanged; review annotations will not silently amend historical claims.

## Closure

Open. Results, limits, signature and final repository state follow after validation.

## OBS-0012.02 — Real content exposes unbounded code

**Sequence:** After authoring three adaptations with the branch's unchanged
shared CSS and JavaScript. **Operator:** Codex. **Method:** Direct-file Chromium
at 390×900 and 1440×900, full-page screenshots, restricted-lens navigation,
JavaScript-off contexts, fenced-code comparison and PDF export.

| Sample | Source bytes | Width at 390px | Width at 1440px | Mobile height | PDF pages |
|---|---:|---:|---:|---:|---:|
| Warning cleanup | 702 | 390px | 1440px | 3650px | 3 |
| Campaign comparison | 5233 | 507px | 1440px | 7085px | 6 |
| Gen-16 diagnosis | 10548 | 818px | 1440px | 10590px | 7 |

**Raw observations:** Every contents link revealed its target from all restricted
lenses. No JavaScript errors; no hidden sections without JavaScript. Fenced code
matched the original text. Tables stayed in scroll regions, while preformatted
code expanded the campaign and diagnosis documents. Diagnosis PDF pages 2–3
and campaign page 3 were rasterized and inspected: narrow equal-width matrix
columns break labels awkwardly; code has inline-code styling. This was not an
exhaustive pixel-level review of every PDF page.

**Interpretation:** H-0012.01 is rejected for mobile containment; navigation and
desktop portions pass. H-0012.02 is supported qualitatively: the campaign matrix
and diagnostic stage boundary are useful, while the routine illustration adds
little evidence. Retrospective provenance contributes overhead, so the short
entry's full page count is not a universal native-template cost. H-0012.03 is
supported within this adaptation: source signatures are attributed, absent
metadata stays absent, historical work is not presented as rerun, and estimates
remain historical. Whole-section lenses still mix source observation and analysis.

**Adaptation corrections:** The first one-off authoring helper restarted numbered
lists separated by blank lines; fixed the HTML list start values and recaptured
the pages. Source Markdown bytes were never changed. An attempted report-writing
command was rejected by the shell guard's redirect analysis; an explicit file
patch safely created the report. The local server start reported EADDRINUSE;
the existing server is reused. These tooling outcomes are not source events.

## Retained evidence and evaluation

- [Sample collection](../docs/reviews/cambrian/index.html).
- [Detailed evaluation](../docs/reviews/cambrian/REVIEW.md).
- [Pinned sources and SHA-256 manifest](../docs/reviews/cambrian/sources.json).
- [Browser measurements](../docs/reviews/cambrian/qa/results.json).
- [Desktop/mobile PNGs and PDF review exports](../docs/reviews/cambrian/qa/).

The prior B+ / 8 evaluation remains intact. This trial rates real-content
fitness **B / 7.5**, chiefly because ordinary long code causes substantial
phone overflow. Shared code/log/diff containment and print behavior need a
defined component and real-content regression cases before merge. Compact
Markdown should remain the normal path for routine work. Existing prior-review
findings remain unresolved; this trial does not silently fix or supersede them.

## Final verification and closure — 2026-09-06T16:31:08Z

**Maintainer gate:** `npm test` without baseline updates: **112 passed (21.3s)**.
Distribution validates 22 clean starter files; journal validates 12 live records
and three entry/example plates. These tests do not cover the new review pages;
their passing result does not negate the observed mobile overflow.

**Final status:** Signed evaluation with known rendering failures. This appended
closure supersedes the opening pending fields and hypothesis states.
**Signed by / at:** Codex / 2026-09-06T16:31:08Z / author signature.
**Witness:** none; user review pending. **Repository state:**
beautify-all-the-journals, 88f94d7 plus uncommitted LN-0010–0012 changes.
**Tools:** GitHub raw/API retrieval, Python one-off HTML authoring helper,
Node 24.15.0, Playwright 1.62.1 / Chromium, Poppler and Codex file tools.
**Still unresolved:** Mobile code containment and print treatment under
Q-0010-01 design review; inherited Q-0008-02 and Q-0007-02.
**Expected next entry:** LN-0013, user review or implementation of these bounded
real-content fixes. No commit, upstream modification or publication performed.
