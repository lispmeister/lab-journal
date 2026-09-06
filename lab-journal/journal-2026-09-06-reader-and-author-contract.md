# Readers must be able to follow the evidence

> **Record status:** Open
>
> **Capture note:** Mixed. Opening review findings are reconstructed from the
> preceding conversation and direct browser measurements; implementation is
> recorded during this session. Original review timestamps were not recorded.

## Record identity

| Field | Value |
|---|---|
| Entry ID | LN-0010 |
| Date | 2026-09-06 |
| Opened / closed | 2026-09-06T13:56:58Z / open |
| Project / phase | lab-journal / reader and author contract |
| Status | Open |
| Authors | Codex — implementation and record |
| Operators | Codex — file edits, browser inspection, maintainer checks |
| Independent observer | None |
| Witness | User requested implementation; final design review pending |
| Environment | macOS; Node 24.15.0; branch beautify-all-the-journals; base 88f94d7 |
| Sensitivity / handling | Public; retain review evidence in relative attachments |
| Capture mode | Mixed |
| Reconstruction sources / gaps | Prior review in this conversation; individual review times unknown |
| Parent / correction target | LN-0009; later provenance clarification for LN-0002–0006; specimen supplements described below |

## Question and success criterion

**Question.** Can the accepted bench sheet make evidence readable and navigable,
preserve its provenance, and reduce routine authoring effort without adding an
installed runtime?

**Success criterion.** Fix all seven reported issues: mobile SVG readability,
lens/navigation coordination, truthful archive research navigation and search,
specimen evidence coverage, full archive printing, complete template identity,
and retained design evidence. Also ship a compact template and example, factual
finished-page headings, linkable stable objects, visible correction notices,
README previews, and combined-state/long-content/cross-browser checks. Sync the
starter and skill assets, inspect intentional visual changes, pass the complete
no-update gate, and serve examples for the user's design review.

**Credible alternatives.** Remove lenses; horizontally scroll every diagram;
rely on instructional prose rather than template fields; silently replace
specimen data; require a generator for index consistency; keep eleven sections
for every routine task. Prefer targeted progressive enhancement and ordinary
portable files, retaining prior signed records and identifying new specimen data.

## Fast field notes

- **Opening reconstruction** Prior review: 64/64 tests passed on 88f94d7, but
  mobile SVG labels measured about 3.7–4.4px; synthesis → bench navigation left
  #bench hidden; Codex search returned no records; filtered print showed one of
  nine rows. Specimen CSVs were smaller than their narrative run counts.
- **13:56:58 UTC** Read the clock, protocol, templates, indexes, prior entry,
  inherited open questions, distribution scripts, and existing tests.
- **Sequence 02** The ignored technical-style-study files still exist locally.
  Their present bytes can be retained with hashes; their historical exactness
  cannot be established merely from their presence.

## Bench record

### OBS-0010.01 — Review findings define reader tasks

| Field | Record |
|---|---|
| Time / sequence | Opening reconstruction |
| Setup / action | Reviewed base 88f94d7 and rendered examples directly from disk |
| Raw observation | Seven gaps above survived the existing 64-test gate |
| Interpretation at the time | Tests check individual component states more thoroughly than complete reader tasks |
| Confidence | High for reproduced browser states; design preferences remain qualitative |
| Attribution | Codex / prior conversation, repository files, Chromium measurements |
| Evidence | Base 88f94d7; preceding review; forthcoming retained artifacts |
| Next move | Implement and test navigation across states, readable diagrams, and traceable records |

## Hypothesis and measurement ledger

| ID | Hypothesis | Predicted observation (before test) | Discriminating test | Actual result (after test) | Evidence | State |
|---|---|---|---|---|---|---|
| H-0010.01 | Target-aware lenses and real archive metadata repair retrieval | Every contents/object link exposes its destination; author searches find live records; print restores all rows | Exercise chained reader tasks with and without JavaScript | Pending | OBS-0010.01 | Live |
| H-0010.02 | Responsive semantic diagrams preserve evidence at phone widths | Diagram labels remain at least 13px without page overflow | Inspect all diagrams at 320–430px, desktop, and print | Pending | OBS-0010.01 | Live |
| H-0010.03 | A compact record can preserve the required epistemic distinctions | A routine example stands alone with identity, prediction, observation, evidence, decision and closure | Compare compact example to protocol and validate distribution | Pending | Planned | Live |
| H-0010.04 | Retained original sources plus explicitly new specimen supplements avoid false provenance | Prior bytes remain available; every displayed aggregate has a matching declared specimen group | Hash originals, inspect supplements and assert counts | Pending | Planned | Live |

## Thinking sketches

No separate plate planned. This record concerns reader tasks whose behavior is
best demonstrated by the revised examples and retained screenshots.

## Synthesis

Pending measurements. Observation and interpretation are separated in OBS-0010.01;
the hypotheses above remain unverified at opening.

## Decisions and rejected paths

| Decision / rejected path | Rationale at the time | Cost / reversibility | Owner | Evidence |
|---|---|---|---|---|
| Preserve the accepted bench-sheet visual direction | User asked for refinements, and LN-0004–0005 record its acceptance | Reversible CSS/markup changes | Codex | Prior review and user request |
| Retain original signed narratives and disclose new specimen supplements | New illustrative data must not masquerade as historical capture | Additional small artifacts | Codex | AUTHORING.md |
| Keep authoring file-only | Core product boundary | Maintainer tooling remains outside starter | Codex | LN-0008 |

## Artifact manifest

Pending retained review captures, recovered design sources, and final validation.

## Open-question ledger

| Question ID | Question | Owner | Next discriminating action | Status | Closed/superseded by |
|---|---|---|---|---|---|
| Q-0010-01 | Do the revised examples meet the user's design and functionality expectations? | User | Review locally served examples after QA | Open | — |
| Q-0008-02 | Does an actual Claude invocation initialize and author the exact bundle? | Release maintainer | Cross-host smoke | Open, inherited | — |
| Q-0007-02 | Does hosted CI execute the pinned workflow? | Repository maintainer | Observe hosted run | Open, inherited | — |

## Correction ledger

Later provenance clarification and specimen supplements will be appended with
exact targets. No original signed live entry will be rewritten.

## Closure

Open. Final checks, tools, repository state, witness status, and next entry will
be appended after implementation and validation.


## Implementation notes — sequence 03

- Retained pre-change templates/assets/specimens and recovered comparison source
  bytes in attachments/2026-09-06-review-sources.zip with a SHA-256 manifest.
- Authored compact template and routine specimen; updated the protocol and skill.
- Added target-aware lenses, print restoration, searchable authors and live ledgers.
- Replaced specimen SVG diagrams with semantic sequences that reflow vertically.
- Preserved original CSVs and appended explicitly new aggregate-fixture supplements.
- First documentation edit stopped with a missing Python import before the HTML
  template was written; resumed that bounded step after importing re.
- First static check rejected the correction plate after its renamed heading
  omitted “question ledger”; restored the semantic section label.
- An inline editing command was rejected by the shell guard's redirect analysis;
  the same repository edits were applied with explicit file patches instead.

<a id="COR-0010-01"></a>

### COR-0010-01 — Design evidence retention clarification

**Targets:** LN-0002 ART-0002.01–06; LN-0003 ART-0003.01–04; LN-0004
ART-0004.01–03; LN-0005 ART-0005.05; LN-0006 temporary screenshot manifest.
Original signed records are unchanged. Their temporary paths did not promise
committed retention, but could not serve a new checkout. The current comparison
files were recovered and retained; their exact bytes at the original observation
times are unknown. Original ephemeral screenshots have not been recovered here.
New screenshots will describe today's state, never be labelled historical QA.

**Evidence:** [Retained source archive](attachments/2026-09-06-review-sources.zip)
and [SHA-256 manifest](attachments/2026-09-06-review-sources.json). The recovered
source tree can be extracted to inspect the alternatives.
**Effect:** Strengthens present retention; does not retroactively verify the old
measurements or independent witness status. No design conclusion is reversed.

<a id="COR-0010-02"></a>

### COR-0010-02 — Specimen source coverage and presentation

**Targets:** LN-0248 OBS-0248.02–03 and A-0248-02; LN-0249 OBS-0249.02
and A-0249-01; LN-0249 HTML headline “25/25 externally observed runs”.
The original Markdown and CSV bytes are preserved. Appended specimen supplements
identify the CSVs as excerpts and new aggregate fixtures as synthesized on
2026-09-06 from the illustrative narratives. No missing measured runs were
claimed as recovered. The correction's three groups total 30, not 25; the revised
HTML now shows 30 and links the explicit source clarification.

**Effect:** Makes demonstration evidence self-contained and correctly labelled.
These fixtures remain synthesized and establish no real system behavior. The
current presentation adds anchors, factual headings and persistent provenance.

**Index correction:** The old index said there were no live corrections although
LN-0001 already records COR-0001-01. Both indexes now link that existing record.

## Validation notes — sequence 04

### OBS-0010.02 — Reader tasks expose and resolve interaction failures

**Setup / action:** Expanded the original 64-test gate with chained lens and
contents navigation, object fragments, author/multiword search, empty results,
filtered archive printing, direct-file use, JavaScript-off completeness,
long content, and aggregate-fixture checks. Reader-task checks run in Chromium,
Firefox and WebKit; responsive, visual and accessibility checks run in Chromium.

**Raw observation:** Intermediate gates reported 62/75, 72/82, then 82/82
passing. Real failures included long-token overflow, a crowded 430px archive
heading, mobile focus geometry, and chained navigation waiting on smooth scroll.
Direct browser reproduction isolated smooth scrolling; removing it resolved the
chained interactions. The first 112-test gate passed 109, exposing a missing
F-0248-02 target. Adding that stable anchor produced 112/112 on macOS. The Linux
gate's saved Playwright result also reports passed with no failed tests.

**Interpretation:** Complete reader tasks found faults that individual visual
states did not. Target-aware navigation now reveals its destination and excludes
hidden sections from location tracking. Search uses author metadata and combines
words. Archive printing restores every record while preserving screen filtering.

**Attribution / confidence:** Codex, automated browser measurements and direct
inspection; high for the tested routes and states. This is not an independent
witness or an exhaustive device survey.

### OBS-0010.03 — Responsive diagrams and actual print output

**Setup / action:** Inspected template and specimens at phone and desktop widths;
tested 320, 390, 430 and 1440px reader layouts. Replaced specimen SVG text with
semantic sequences that stack on phones. The older live SVG retains its content
in a keyboard-accessible horizontal scroll region. Exported both specimen pages
to PDF after choosing a restricted screen lens, then rasterized and inspected
their print pages.

**Raw observation:** New diagram labels meet the 13px minimum. The experiment
prints to five pages and the correction to four. Print inspection found an
unwanted skip link, awkward section splitting, and clipped signature text;
print rules were corrected and both exports inspected again. Tables wrap their
full content. The signature is legible and restricted lenses do not omit evidence.
Component screenshots initially captured fixed page chrome over tall elements;
the screenshot fixture now hides that chrome only during component capture.

**Interpretation:** Readability and provenance are improved while retaining the
bench-sheet visual direction. Some print whitespace remains from keeping evidence
blocks together; aesthetic acceptance remains Q-0010-01.

### OBS-0010.04 — Portable authoring and evidence coverage

**Setup / action:** Added a compact canonical Markdown template and routine
specimen, complete HTML identity fields, factual finished-page headings, stable
object links and persistent provenance notices. Updated README with an actual
page preview and short specimen. Synchronized the shared distribution inventory.

**Raw observation:** Distribution validation reports 22 clean starter files;
journal validation reports ten live records and three HTML plates. The official
skill validator passes. Its first run could not import PyYAML; validation then
used the already available temporary validator dependency directory. Browser
cache, local-server and Docker sandbox restrictions required approved retries.
No authoring runtime was added to the portable starter.

The retained source archive contains 42 files (264,232 bytes uncompressed), with
per-file SHA-256 hashes. It combines recovered comparison working copies and
explicitly identified base-88f94d7 sources. Historical screenshot bytes remain
unrecovered. New specimen aggregate CSVs enumerate the narrative groups and
declare synthesis provenance; the correction totals 30 runs across three groups.

**Interpretation:** The compact record preserves identity, prediction,
observation, evidence, decision and closure with less scaffolding. Retention and
specimen coverage are explicit without claiming newly recovered measurements.

## Final hypothesis disposition

| ID | Result | Evidence | Disposition |
|---|---|---|---|
| H-0010.01 | Contents and object targets reveal themselves; author search and complete print work in tested states | OBS-0010.02; tests/reader-tasks.spec.mjs | Supported within tested states |
| H-0010.02 | Semantic diagram labels remain at least 13px at the tested widths | OBS-0010.03; retained mobile captures | Supported for revised specimens; legacy SVG uses scrolling |
| H-0010.03 | Compact specimen retains the required distinctions and validates in the portable bundle | OBS-0010.04; COMPACT-TEMPLATE.md; LN-0250 | Supported structurally; adoption experience unmeasured |
| H-0010.04 | Original source bytes are retained and new aggregate groups match the illustrative narratives | OBS-0010.04; source manifest; fixture assertions | Supported with the historical-recovery limits in COR-0010-01 |

## Retained artifact manifest — final additions

| Artifact | Location | Provenance / retention |
|---|---|---|
| ART-0010-01 | [Source archive](attachments/2026-09-06-review-sources.zip), [SHA-256 manifest](attachments/2026-09-06-review-sources.json) | Retained current recovery and base sources; historical exactness qualified above |
| ART-0010-02 | [Mobile experiment evidence](attachments/2026-09-06-mobile-evidence.png), [correction evidence](attachments/2026-09-06-correction-evidence.png) | New browser captures of this working tree; component capture hides fixed chrome |
| ART-0010-03 | [Experiment print](attachments/2026-09-06-experiment-print.pdf), [correction print](attachments/2026-09-06-correction-print.pdf) | New Chromium print QA exports, visually inspected after rasterization |
| ART-0010-04 | [Experiment aggregate](attachments/2026-09-06-experiment-aggregate.csv), [correction aggregate](attachments/2026-09-06-correction-aggregate.csv) | Explicitly synthesized demonstration fixtures; originals retained |
| ART-0010-05 | [Routine specimen](examples/2026-09-06-routine-link-fix.md), [compact template](COMPACT-TEMPLATE.md) | New canonical Markdown authoring path |
| ART-0010-06 | tests/reader-tasks.spec.mjs; tests/__screenshots__/visual.spec/ | Maintainer tests and reviewed macOS/Linux visual baselines; final gate runs without updating them |

## Bounded conclusion and next entry

All seven reported issues and the proposed authoring, navigation, README and
verification improvements are implemented. No original signed live Markdown
entry was rewritten. Original specimen narratives have dated appended
supplements; illustrative data is not evidence about a real runtime.

User design acceptance remains Q-0010-01. The inherited actual-Claude smoke and
hosted-CI questions remain open: local Linux execution is not a hosted CI run.
The expected next entry is LN-0011, recording user review and any resulting
changes, or release validation if that occurs first.

## Final verification and signature — 2026-09-06T15:23:47Z

Final image inspection caught a test-fixture API mismatch: the screenshot
assertion accepts `stylePath`, while `style` belongs to the direct screenshot
API. Added tests/component-capture.css, used `stylePath`, and regenerated and
inspected the affected macOS/Linux component baselines. This changes capture
behavior only. Both subsequent complete gates ran without baseline updates:

- `npm test` on macOS: **112 passed (19.5s)**.
- Pinned `mcr.microsoft.com/playwright:v1.62.1-noble`, `npm ci && npm test`:
  **112 passed (31.5s)**.
- Distribution: 22 clean static starter files; journal: ten live records,
  three entry/example HTML plates; offline dependencies and indexes validated.
- Official skill validator: valid. `git diff --check`: clean before signature.
- Byte comparison against 88f94d7 confirms both original specimen Markdown
  narratives are preserved as prefixes and both original CSVs are unchanged.
- Local example HTTP check returned 200. Server remains on 127.0.0.1:4173;
  experiment, correction and template tabs were queued in Codex.

**Signed:** Codex, author and operator. **Closed:** 2026-09-06T15:23:47Z.
**Final status:** Signed; user design review pending. This appended closure
supersedes the opening pending fields and hypothesis states without erasing them.
**Repository:** beautify-all-the-journals, base 88f94d7 plus this uncommitted
working tree; no commit or publication performed. **Tools:** Node 24.15.0,
Playwright 1.62.1, Chromium/Firefox/WebKit, Docker's pinned Playwright Linux image,
Python, Poppler, Git, and Codex file/browser tools. **Independent witness:** none.
**Unresolved:** Q-0010-01, Q-0008-02, Q-0007-02. **Expected next entry:** LN-0011.
