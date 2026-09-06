# Mobile readers should reach the record before the furniture

> **Record status:** Completed mobile refinement; user review pending
>
> **Capture note:** Mixed. The implementation request is contemporaneous; baseline mobile measurements are reconstructed from the immediately preceding Chrome diagnostic and named below.

## Record identity

| Field | Value |
|---|---|
| Entry ID | LN-0006 |
| Date | 2026-09-01 |
| Opened / closed | 2026-09-01T11:43:09+04:00 / 2026-09-01T11:54:03+04:00 |
| Project / phase | lab-journal / evidence-first mobile refinement |
| Status | Completed mobile refinement; user review pending |
| Authors | Codex — mobile design implementation and record author |
| Operators | Codex — repository edits, local serving, and Chrome inspection |
| Independent observer | None during implementation |
| Witness | User authorized the recommended mobile refinement; final review pending |
| Environment | Git branch `beautify-all-the-journals`; base commit `e5167b5`; Google Chrome 152 |
| Sensitivity / handling | Public design-system work and synthesized specimen data |
| Capture mode | Mixed |
| Reconstruction sources / gaps | Baseline measurements reconstructed from the preceding Chrome diagnostic in this conversation; screenshots and reported values are available, but no separate signed entry recorded that read-only run |
| Parent / correction target | Follows LN-0005; refines presentation only and does not correct an evidence claim |

## Question and success criterion

**Question.** Can mobile readers reach the archive catalog and plate evidence materially sooner while retaining visible navigation, the accepted dense bench-sheet character, and complete static content?

**Success criterion.** At 320px, move the archive search above 500px and first catalog entry above 650px; show every reading-lens control without horizontal scrolling; add a visible 44px evidence jump on every plate; give internally scrollable evidence tables a persistent textual cue; preserve zero page overflow, heading limits, contrast, lens/search behavior, desktop layout, and validator success.

**Credible alternatives.** Hide explanatory content; collapse it with JavaScript; reorder existing static sections for mobile; or retain the layout and rely on users to discover long scrolling and clipped controls.

## Fast field notes

- **Reconstructed baseline** At 320px, archive search begins at 1012px and the first catalog entry at 1067px; the hero is 474px and research lenses 365px.
- **Reconstructed baseline** At 320px, only 33px of the 83px “Visual plate” reading-lens button is initially visible.
- **Reconstructed baseline** At 320px, first observation begins at 2185px; one artifact table requires 297px of contained horizontal scrolling.
- **11:43 +04** User authorizes the focused fixes: “go and do that”.
- **11:46 +04** Archive task order becomes identity → search → catalog → lenses on narrow screens; plate markup gains a direct bench anchor.
- **11:49 +04** The 25-combination portrait matrix reports no page overflow; all four lens controls fit their container.
- **11:52 +04** Anchor, lens, search, landscape, desktop, and contrast checks pass in Chrome.
- **11:54 +04** Static journal validation, JavaScript syntax checking, and diff whitespace checking pass.

## Bench record

### OBS-0006.01 — Mobile refinement authorized from measured friction

| Field | Record |
|---|---|
| Time / sequence | Baseline diagnostic followed by current user instruction |
| Setup / action | Reviewed five notebook surfaces at common portrait and landscape widths, then proposed four bounded mobile changes |
| Raw observation | No page overflow was present, but catalog access, lens visibility, evidence reach, and wide-table discoverability were weaker than intended; user authorized implementation |
| Interpretation at the time | Mobile correctness is established, but mobile task priority requires a layout refinement |
| Confidence | High for authorization; measured baseline values reconstructed from the preceding diagnostic |
| Attribution | Codex / Chrome measurements; user / implementation authorization |
| Evidence | Conversation; `/private/tmp/mobile-archive-320.png`, `/private/tmp/mobile-lens-320.png`, and `/private/tmp/mobile-plate-320.png` |
| Next move | Reorder rather than remove static content; expose direct evidence navigation |

### OBS-0006.02 — Static mobile structure moves the task ahead of explanation

| Field | Record |
|---|---|
| Time / sequence | After OBS-0006.01; before responsive verification |
| Setup / action | Reordered archive sections with a narrow-screen flex layout; compressed the archive header; added a static `#bench` link to every plate; converted the lens bar to a 2×2 grid at 390px and below; marked artifact manifests as labeled, focusable horizontal regions |
| Raw observation | At 320px, archive hero height is 359px, search begins at 441px, and the first catalog row begins at 560px. Each plate exposes a 44px `Jump to first observation` target. Artifact manifests expose the text “Swipe horizontally for all columns →” and retain a sticky first column. |
| Interpretation at the time | Existing content can remain complete while the mobile reading order privileges lookup and evidence access |
| Confidence | High; values read from computed Chrome layout |
| Attribution | Codex / repository edits and Chrome inspection |
| Evidence | `assets/notebook.css`; four plate HTML files; `/private/tmp/mobile-refined-archive-320.png`, `/private/tmp/mobile-refined-plate-320.png`, `/private/tmp/mobile-refined-table-320.png` |
| Next move | Exercise the new controls and compare all supported widths |

### OBS-0006.03 — Portrait, landscape, interaction, and desktop checks pass

| Field | Record |
|---|---|
| Time / sequence | After OBS-0006.02 |
| Setup / action | Inspected archive, template, live plate, experiment specimen, and correction specimen at 320, 360, 375, 390, and 430px; checked all five at 667×375 and 844×390; checked archive and experiment at 1440×900; exercised the bench anchor, bench lens, and archive search |
| Raw observation | All 25 portrait combinations and 10 landscape combinations report zero horizontal page overflow. Portrait plate titles are 26px and section headings 18px; archive title is 24px. Every lens bar reports `scrollWidth == clientWidth`, with all four buttons inside its bounds. The bench link lands at `#bench`, with the target 72px below the viewport top. Bench filtering hides two non-bench layers; an `LN-0001` search leaves only LN-0001 visible. At desktop, archive title/section headings remain 30/21px, lenses precede the catalog, the jump is hidden, and there is no overflow. |
| Interpretation at the time | The mobile refinement changes task priority without perturbing the accepted desktop grammar or enhancement behavior |
| Confidence | High for the inspected surfaces and dimensions |
| Attribution | Codex / Google Chrome 152 |
| Evidence | Chrome computed-layout matrix and control exercise; `/private/tmp/mobile-refined-lens-320.png` |
| Next move | Validate static integrity and close the implementation question |

### OBS-0006.04 — New cues remain legible and protocolized

| Field | Record |
|---|---|
| Time / sequence | After OBS-0006.03 |
| Setup / action | Measured foreground/background contrast of the new table cue and evidence jump; added the mobile rules to agent guidance and the canonical authoring protocol |
| Raw observation | Table cue contrast is 12.15:1; evidence-jump contrast against the record surface is 13.30:1. `AGENTS.md`, `CLAUDE.md`, `README.md`, `AUTHORING.md`, and `PLATE-TEMPLATE.html` now carry the reusable behavior. |
| Interpretation at the time | The fix is a notebook convention rather than a one-off specimen adjustment |
| Confidence | High for measured contrast and repository coverage |
| Attribution | Codex / Chrome computed styles and repository inspection |
| Evidence | Agent instructions, authoring protocol, plate template, and shared stylesheet |
| Next move | Run the journal validator |

### OBS-0006.05 — Static notebook integrity passes after index closure

| Field | Record |
|---|---|
| Time / sequence | Final implementation check |
| Setup / action | Ran `node scripts/validate-lab-journal.mjs`, `node --check lab-journal/assets/notebook.js`, and `git diff --check` from the project root |
| Raw observation | Validator reports 6 live records, 3 live/example plates, and intact indexes and offline dependencies. Syntax and whitespace checks return without output or error. |
| Interpretation at the time | The mobile additions preserve the static notebook's link, pairing, dependency, and script invariants |
| Confidence | High for the validator's declared scope |
| Attribution | Codex / local command execution |
| Evidence | Command output in this session |
| Next move | Close Q-0006-01; invite qualitative review |

## Hypothesis and measurement ledger

| ID | Hypothesis | Predicted observation (before test) | Discriminating test | Actual result (after test) | Evidence | State |
|---|---|---|---|---|---|---|
| H-0006.01 | Mobile-only reordering and explicit navigation cues will reduce time-to-record without weakening completeness or desktop behavior | Search and first catalog entry will move above the preregistered thresholds; all four lens controls will be visible in a 2×2 grid; the evidence jump and table cue will be visible without JavaScript | Implement shared static markup/CSS changes; inspect all five surfaces at 320–430px and representative desktop/landscape widths; exercise anchors, lenses, and search | Search begins at 441px and first record at 560px; controls fit; static cues render; interactive, desktop, and static-integrity checks pass | OBS-0006.02–05 | Supported within inspected surfaces |

## Thinking sketches

### F-0006-01 — Mobile task order

| Figure metadata | Value |
|---|---|
| Kind | Conjecture |
| Creator / created | Codex / before implementation |
| Supported by | OBS-0006.01 |
| Supersedes | Refines the mobile ordering implied by LN-0005 |

Archive: compact identity → search → catalog → research lenses → archival notes.

Plate: contents → compact record summary → visible evidence jump → lenses and results → full provenance and chronology. Wide tables remain complete and receive a non-JavaScript scroll cue.

## Synthesis

| Epistemic state | Statement | Support |
|---|---|---|
| Observation | Mobile pages fit, but key tasks begin late or require undisclosed horizontal interaction | OBS-0006.01 |
| Interpretation | Mobile layout order, not visual scale, is the main remaining problem | OBS-0006.01 |
| Hypothesis | Static mobile reordering and visible cues can address the friction without hiding evidence | H-0006.01 |
| Discriminating test | Compare task positions and control visibility before and after at the same widths | OBS-0006.02–03 |
| Conclusion | The static mobile ordering meets the preregistered task-position and control-visibility thresholds without observed desktop or overflow regression | OBS-0006.02–05 |
| Projection | Evidence-first ordering may make the notebook practical as a default field tool | Not yet observed |

## Decisions and rejected paths

| Decision / rejected path | Rationale at the time | Cost / reversibility | Owner | Evidence |
|---|---|---|---|---|
| Reorder research lenses below the catalog only on mobile | Preserves content while prioritizing journal access | CSS-only; reversible | Codex | OBS-0006.01 |
| Add static evidence-jump markup to every plate | The shortcut must remain useful without JavaScript | Small repeated markup; reversible | Codex | H-0006.01 |
| Prefer visible table cues over changing table semantics | Wide manifests need their columns and should remain complete | Small visual addition; reversible | Codex | OBS-0006.01 |

## Artifact manifest

| Artifact | Role | State / handling |
|---|---|---|
| `assets/notebook.css` | Shared mobile ordering, lens grid, jump target, and scroll-region treatment | Working tree; public |
| `PLATE-TEMPLATE.html` and three authored plates | Static evidence links and accessible artifact regions | Working tree; public |
| `AGENTS.md`, `CLAUDE.md`, `README.md`, `AUTHORING.md` | Reusable human/agent protocol | Working tree; public |
| `/private/tmp/mobile-refined-archive-320.png` | 320px archive review | Ephemeral Chrome QA screenshot |
| `/private/tmp/mobile-refined-plate-320.png` | 320px plate header review | Ephemeral Chrome QA screenshot |
| `/private/tmp/mobile-refined-lens-320.png` | 2×2 lens and result-band review | Ephemeral Chrome QA screenshot |
| `/private/tmp/mobile-refined-table-320.png` | Wide-table cue review | Ephemeral Chrome QA screenshot |

## Open-question ledger

| Question ID | Question | Owner | Next discriminating action | Status | Closed/superseded by |
|---|---|---|---|---|---|
| Q-0006-01 | Does evidence-first mobile ordering meet the measured thresholds without desktop or static regressions? | Codex | Responsive Chrome inspection and validation | Closed | OBS-0006.02–05 |

## Correction ledger

None.

## Closure

**Bounded conclusion.** On the five inspected surfaces and stated Chrome dimensions, evidence-first mobile ordering meets every preregistered threshold: archive lookup enters the first viewport, reading lenses no longer clip, plates expose a direct 44px bench jump, wide manifests announce their contained scroll, and desktop layout remains unchanged.

**Still unresolved.** The user's qualitative review of the refined mobile composition remains pending; Q-0006-01 is closed for the measured implementation criteria.

**Signed by / at.** Codex / 2026-09-01T11:54:03+04:00.

**Witnessed by / at.** User authorized implementation; final review pending.

**Repository state.** Working tree on `beautify-all-the-journals`, based on `e5167b5`; LN-0002 through LN-0006 and design-system changes remain uncommitted.

**Expected next entry.** None if mobile refinement passes; otherwise a bounded mobile correction.
