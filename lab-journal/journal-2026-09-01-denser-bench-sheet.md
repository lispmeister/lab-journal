# Can the bench sheet carry more evidence without raising its voice?

> **Record status:** Completed refinement; user review open
>
> **Capture note:** Contemporaneous. The user's preference and the refinement hypothesis were recorded before modifying the C3 specimen.

## Record identity

| Field | Value |
|---|---|
| Entry ID | LN-0004 |
| Date | 2026-09-01 |
| Opened / closed | 2026-09-01T10:58:15+04:00 / 2026-09-01T11:03:00+04:00 |
| Project / phase | lab-journal / selected bench-sheet refinement |
| Status | Completed refinement; user review open |
| Authors | Codex — design, implementation, and record author |
| Operators | Codex — repository edits, local serving, and Chrome inspection |
| Independent observer | None during implementation |
| Witness | Pending user review of the refined specimen |
| Environment | Git branch `beautify-all-the-journals`; base commit `e5167b5`; Google Chrome 152 |
| Sensitivity / handling | Public design study and synthesized example data |
| Capture mode | Contemporaneous |
| Reconstruction sources / gaps | User selected C3 directly and requested higher density with less prominent headings; no known reconstruction gaps |
| Parent / correction target | Follows LN-0003 and closes Q-0003-01 at the variant level; no signed claim is corrected |

## Question and success criterion

**Question.** Can C3 retain its quiet, print-minded bench-sheet character while showing more evidence per viewport and making headings materially less prominent?

**Success criterion.** Refine the C3 specimen under `tmp/` so its desktop title is no larger than 30px, section headings are no larger than 21px, the first observation begins earlier than in the original C3, and the page remains readable without horizontal overflow at 390px and 320px widths.

**Credible alternatives.** Reduce typography alone; compress spacing alone; or jointly reduce heading scale, padding, metadata height, and section rhythm while preserving body readability and 44px interactive targets.

## Fast field notes

- **10:58 +04** User: “I really like option C3 but we want higher density and less prominent headings.”
- **Sequence 02** Treat C3 as selected at the family-variant level; refine its hierarchy without introducing a new aesthetic direction.
- **Sequence 03** Baseline C3 at wide desktop: 35px title, 29px section heading, 2650px document height, evidence section at 937px.
- **Sequence 04** First refinement combines smaller headings with tighter record padding, metadata, section rhythm, event rows, observation cells, result metrics, and question blocks.
- **Sequence 05** Desktop refinement: 30px title, 21px section heading, 1887px document height, evidence section at 679px, first observation at 783px.
- **Sequence 06** First mobile review shows the inherited one-column identity ledger consuming too much vertical space; retain two metadata columns for C3 at narrow widths.
- **Sequence 07** Final 390px and 320px checks show no horizontal overflow. All five mobile contents links are at least 44px high.

## Bench record

### OBS-0004.01 — C3 selected with bounded refinement request

| Field | Record |
|---|---|
| Time / sequence | User instruction at session start |
| Setup / action | User reviewed the C0–C3 comparison from LN-0003 |
| Raw observation | “I really like option C3 but we want higher density and less prominent headings.” |
| Interpretation at the time | C3's visual character is selected; its hierarchy and density require refinement |
| Confidence | High; direct user statement |
| Attribution | User selection, observed by Codex |
| Evidence | Conversation; LN-0003 / Q-0003-01 |
| Next move | Preserve C3's visual language and alter typographic scale and spatial rhythm |

### OBS-0004.02 — Coordinated compression increases desktop evidence density

| Field | Record |
|---|---|
| Time / sequence | Chrome comparison after CSS refinement |
| Setup / action | Rendered the same synthesized LN-0248 content before and after refinement at wide desktop; inspected final layout at 1440×1000, 2160×1500, 390×844, and 320×568 |
| Raw observation | Title changes from 35px to 30px; section heading from 29px to 21px; document height from 2650px to 1887px; evidence section from 937px to 679px. Final 390px and 320px renders have no horizontal overflow; headings are 26px/18px; mobile contents targets are at least 44px. Lowest sampled normal-text contrast is 7.53:1 |
| Interpretation at the time | Coordinated hierarchy and spacing changes satisfy the density request while retaining readable body copy and the bench-sheet character |
| Confidence | Measured in Google Chrome 152 |
| Attribution | Codex, Chrome extension inspection |
| Evidence | ART-0004.01–03 |
| Next move | Present the refined C3 for user review |

## Hypothesis and measurement ledger

| ID | Hypothesis | Predicted observation (before test) | Discriminating test | Actual result (after test) | Evidence | State |
|---|---|---|---|---|---|---|
| H-0004.01 | Jointly tightening heading scale and vertical rhythm will increase information density without losing C3's archival calm | At desktop width, the record title will be at most 30px and the first observation will move materially upward; at mobile widths, body text and controls will remain legible without overflow | Render the original and refined C3 with the same content; compare heading sizes, evidence position, document height, overflow, and interaction targets in Chrome | Title is 30px; first observation begins at 783px; page height falls by 763px. Mobile renders retain 15px lead copy, 44px contents targets, and no overflow | OBS-0004.02; ART-0004.01–03 | Supported for presentation; aesthetic acceptance pending user review |

## Thinking sketches

### F-0004-01 — Quiet-density hierarchy

| Figure metadata | Value |
|---|---|
| Kind | Conjecture |
| Creator / created | Codex / after user instruction, before implementation |
| Supported by | User preference and LN-0003 ART-0003.04 |
| Supersedes | Narrows LN-0003 F-0003-02 to the selected C3 direction |

Keep the warm paper surface, serif narrative voice, thin rules, and understated status treatment. Compress the page through smaller headings, shorter introductions, tighter section padding, denser metadata, and more compact evidence cells—not through smaller body text.

## Synthesis

| Epistemic state | Statement | Support |
|---|---|---|
| Observation | The user prefers C3 and requests higher density and less prominent headings | User instruction |
| Interpretation | The warm bench-sheet language is selected; hierarchy and spacing were the refinement targets | User instruction; LN-0003 |
| Hypothesis | A coordinated typographic and spacing reduction will meet both goals without harming legibility | H-0004.01 |
| Discriminating test | Compare original and refined C3 at desktop and narrow mobile widths | OBS-0004.02 |
| Conclusion | The refined C3 meets the preregistered density, heading-scale, overflow, and target-size criteria | OBS-0004.02 |
| Projection | User acceptance could make this treatment the basis for the live notebook design | Not yet verified or authorized |

## Decisions and rejected paths

| Decision / rejected path | Rationale at the time | Cost / reversibility | Owner | Evidence |
|---|---|---|---|---|
| Preserve C3's palette and serif/sans division | The user's request targets density and hierarchy, not the selected visual character | Low cost; reversible | Codex | User instruction |
| Do not reduce ordinary body copy below the existing readable scale | Density should come from hierarchy and space before body-text sacrifice | Low cost; reversible | Codex | H-0004.01 |

## Artifact manifest

| Artifact ID / path | Parent observation | Captured by / method | Integrity | Sensitivity | Notes |
|---|---|---|---|---|---|
| ART-0004.01 · `tmp/technical-style-study/instrument-bench-sheet.html` | OBS-0004.02 | Codex / direct HTML and Chrome inspection | Static local page; desktop and mobile checks passed | Public | Refined dense C3 specimen; ignored iteration artifact |
| ART-0004.02 · `tmp/technical-style-study/study.css` | OBS-0004.02 | Codex / direct CSS and computed-style measurement | Cache-busted as version 6 in affected specimens | Public | Shared study stylesheet containing the C3 refinement |
| ART-0004.03 · `/private/tmp/instrument-bench-sheet-dense-final.png` | OBS-0004.02 | Codex / Chrome full-page capture | Captured after final desktop measurements | Public | Ephemeral visual QA image, not repository history |

## Open-question ledger

| Question ID | Question | Owner | Next discriminating action | Status | Closed/superseded by |
|---|---|---|---|---|---|
| Q-0003-01 | Which instrument-log variant or hybrid should guide the live notebook? | User | Refine selected C3 | Closed at variant level | OBS-0004.01; C3 selected |
| Q-0004-01 | Does the denser, quieter C3 refinement meet the intended balance? | User | Review the served refined specimen | Open | — |

## Correction ledger

None.

## Closure

**Bounded conclusion.** The dense C3 refinement reduces heading prominence and exposes substantially more evidence on desktop while preserving the warm bench-sheet language, readable body copy, narrow-screen fit, and mobile contents targets. User acceptance remains open.

**Still unresolved.** Q-0004-01.

**Signed by / at.** Codex / 2026-09-01T11:03:00+04:00 / repository record.

**Witnessed by / at.** Pending user review.

**Repository state.** Working tree on `beautify-all-the-journals`, based on `e5167b5`; prior design-study records and index updates remain uncommitted.

**Expected next entry.** User review of the denser bench-sheet refinement and, if accepted, a proposal for applying it to the live notebook.
