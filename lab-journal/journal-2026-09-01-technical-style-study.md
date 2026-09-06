# Which restrained visual language should replace the oversized journal presentation?

> **Record status:** Completed design comparison; direction selection open
>
> **Capture note:** Contemporaneous. Web research, design alternatives, local implementation, and Chrome review are recorded during this session.

## Record identity

| Field | Value |
|---|---|
| Entry ID | LN-0002 |
| Date | 2026-09-01 |
| Opened / closed | 2026-09-01T09:13:15+04:00 / 2026-09-01T09:48:20+04:00 |
| Project / phase | lab-journal / restrained visual-language study |
| Status | Completed design comparison; direction selection open |
| Authors | Codex — research, design, implementation, and record author |
| Operators | Codex — web research, repository edits, local serving, and Chrome inspection |
| Independent observer | None during implementation |
| Witness | Pending user comparison and direction selection |
| Environment | Git branch `beautify-all-the-journals`; base commit `e5167b5`; Google Chrome 152 |
| Sensitivity / handling | Public design research and synthesized example data |
| Capture mode | Contemporaneous |
| Reconstruction sources / gaps | User request and repository state observed directly; no known reconstruction gaps |
| Parent / correction target | Follows LN-0001 visual-language implementation; does not correct its historical record |

## Question and success criterion

**Question.** Which dry, technical visual language can retain the notebook's epistemic structure while making evidence faster to scan and eliminating oversized editorial headlines?

**Success criterion.** Produce several static, dependency-free HTML specimens in `tmp/` that present the same record content, use materially different restrained design systems, remain usable at desktop and mobile widths, and can be compared locally in Chrome without changing the live notebook design.

**Credible alternatives.** A productive enterprise interface; a government or standards-service document; a traditional technical report; or a compact scientific-paper layout. Keeping the current expressive design unchanged remains the control.

## Fast field notes

- **09:13 +04** User judges the current design too wild, specifically the super-large titles, and asks for researched local alternatives.
- **Sequence 02** Preserve the live stylesheet and pages; isolate comparison artifacts under `tmp/` until a direction is selected.
- **Sequence 03** Initial research points toward Carbon's productive type, USWDS/GOV.UK reading constraints, NASA technical-report conventions, and ACM publication structure as distinct useful references.
- **Sequence 04** Four same-content directions created under ignored `tmp/technical-style-study/`; the live notebook CSS and plates remain unchanged.
- **Sequence 05** Chrome desktop pass measures specimen titles at 42px, 44px, 38px, and 40px. At 390px they resolve to 31.2px; at 320px they resolve to 28px.
- **Sequence 06** Legacy `xmllint --html` reports HTML5 landmarks such as `main`, `section`, and `article` as invalid. This parser is not an HTML5 conformance test; Chrome parsed every page without console errors, so its output was retained as a rejected validation path rather than used to alter semantic markup.

## Bench record

### OBS-0002.01 — Research constraints converge on restrained hierarchy

| Field | Record |
|---|---|
| Time / sequence | Research pass before implementation |
| Setup / action | Consulted official Carbon, USWDS, GOV.UK, NASA NTRS, and ACM publication guidance |
| Raw observation | Productive systems use fixed moderate headings, constrained measures, consistent type scales, and explicit structural metadata; NASA's survey found single-column Roman text, 10–11 point body type, and ragged-right margins common in technical reports |
| Interpretation at the time | Dryness comes from hierarchy discipline and evidence density, not from removing all visual character |
| Confidence | High for cited guidance; selection preference remains unobserved until user review |
| Attribution | Codex, web research from official sources |
| Evidence | Source links will be included in the style-study index and artifact manifest |
| Next move | Implement identical content through four visual hypotheses and compare them in Chrome |

### OBS-0002.02 — Four restrained systems preserve the same record

| Field | Record |
|---|---|
| Time / sequence | Implementation before Chrome comparison |
| Setup / action | Rendered one synthesized socket-shutdown record as productive system, standards memo, instrument log, and technical paper pages with a neutral comparison index |
| Raw observation | Each page contains the same identity, chronology, two observation blocks, measured result, bounded conclusion, and two open questions; no remote font, framework, script, or asset is required |
| Interpretation at the time | The notebook's epistemic semantics survive substantial visual restraint; the remaining choice is operational emphasis rather than content capability |
| Confidence | High; direct file and browser inspection |
| Attribution | Codex, direct HTML/CSS authoring |
| Evidence | ART-0002.01–05 |
| Next move | Compare desktop and mobile rendering in Chrome |

### OBS-0002.03 — Chrome responsive and contrast review

| Field | Record |
|---|---|
| Time / sequence | Chrome review after implementation |
| Setup / action | Served the project on localhost and inspected every direction at 1440×1000, 390×844, and 320×568; measured headings, document overflow, console output, and small-text contrast |
| Raw observation | Desktop titles: A 42px, B 44px, C 38px, D 40px. Mobile titles: 31.2px at 390px and 28px at 320px. No page-level horizontal overflow or console warning/error occurred. The small-text audit found no normal-weight text below 4.5:1 contrast |
| Interpretation at the time | All four are viable restrained baselines. A and C expose field evidence most quickly; B is the lowest-training-cost reading surface; D is strongest for synthesis but visually implies a more final publication state |
| Confidence | Measured in Google Chrome 152 |
| Attribution | Codex, Chrome extension inspection |
| Evidence | ART-0002.01–05 and retained local screenshots in `/private/tmp/technical-style-*.png` |
| Next move | Present the comparison index and request user selection or hybrid direction |

## Hypothesis and measurement ledger

| ID | Hypothesis | Predicted observation (before test) | Discriminating test | Actual result (after test) | Evidence | State |
|---|---|---|---|---|---|---|
| H-0002.01 | Moderate fixed headings, high-contrast labels, and tighter evidence-first layouts will feel more credible and easier to scan than the current expressive hero treatment | At least one specimen will preserve a recognizable laboratory identity without any title exceeding 48px desktop or 34px mobile | Render the same record in four styles; inspect desktop/mobile hierarchy, overflow, contrast, navigation, and above-fold evidence | Four technically viable specimens rendered with desktop titles ≤44px and mobile titles ≤31.2px; preference requires user review | OBS-0002.02–03; ART-0002.01–05 | Technically supported; aesthetic selection open |

## Thinking sketches

### F-0002-01 — Four-way visual comparison

| Figure metadata | Value |
|---|---|
| Kind | Conjecture |
| Creator / created | Codex / after OBS-0002.01 |
| Supported by | OBS-0002.01 |
| Supersedes | None |

The comparison will hold record content constant while varying typography, density, navigation, rules, and data presentation across four restrained directions.

### F-0002-02 — Rendered comparison matrix

| Figure metadata | Value |
|---|---|
| Kind | Measured |
| Creator / created | Codex / after OBS-0002.03 |
| Supported by | OBS-0002.02–03 |
| Supersedes | Does not supersede F-0002-01; realizes it |

The local comparison index presents all four systems using matching preview content and an explicit trade-off table. Each card opens a complete responsive specimen.

## Synthesis

| Epistemic state | Statement | Support |
|---|---|---|
| Observation | The current visual language uses headlines substantially larger than the productive scales reviewed | Prior Chrome QA and OBS-0002.01 |
| Interpretation | Large display typography is competing with the record's evidence hierarchy | User assessment and prior Chrome QA |
| Hypothesis | A restrained fixed scale can preserve character while making the notebook more operational | H-0002.01 |
| Discriminating test | Compare identical content in four local specimens at desktop and mobile widths | OBS-0002.03 |
| Conclusion | Four restrained systems can preserve the journal semantics without oversized typography; direction selection remains a user preference | OBS-0002.02–03 |
| Projection | A selected direction can later be applied to the shared notebook stylesheet and templates | Not yet authorized |

## Decisions and rejected paths

| Decision / rejected path | Rationale at the time | Cost / reversibility | Owner | Evidence |
|---|---|---|---|---|
| Keep specimens isolated under `tmp/` | The user wants to narrow the target before changing the live system | Low cost; fully reversible | Codex | User request |
| Use identical example content | Prevents content novelty from biasing visual comparison | Minor implementation repetition; reversible | Codex | H-0002.01 |
| Reject remote fonts and UI frameworks | Local/static operation remains a project invariant | Limits exact imitation; desirable | Codex | AUTHORING.md |
| Keep comparison assets ignored with the rest of `tmp/` | These are iteration artifacts, not yet the selected product language | They will not enter a commit unless deliberately promoted | Codex | `.gitignore`; user asked to narrow the target first |

## Artifact manifest

| Artifact ID / path | Parent observation | Captured by / method | Integrity | Sensitivity | Notes |
|---|---|---|---|---|---|
| ART-0002.01 · `tmp/technical-style-study/index.html` | OBS-0002.01 | Codex / direct HTML | Chrome 152; 1440, 390, and 320px widths | Public | Comparison index; intentionally ignored iteration artifact |
| ART-0002.02 · `tmp/technical-style-study/productive-system.html` | H-0002.01 | Codex / direct HTML | Chrome review passed | Public | Direction A |
| ART-0002.03 · `tmp/technical-style-study/standards-memo.html` | H-0002.01 | Codex / direct HTML | Chrome review passed | Public | Direction B |
| ART-0002.04 · `tmp/technical-style-study/instrument-log.html` | H-0002.01 | Codex / direct HTML | Chrome review passed | Public | Direction C |
| ART-0002.05 · `tmp/technical-style-study/technical-paper.html` | H-0002.01 | Codex / direct HTML | Chrome review passed | Public | Direction D |
| ART-0002.06 · `tmp/technical-style-study/study.css` | OBS-0002.02 | Codex / shared local CSS | No remote dependencies; Chrome review passed | Public | Shared responsive comparison system |

## Open-question ledger

| Question ID | Question | Owner | Next discriminating action | Status | Closed/superseded by |
|---|---|---|---|---|---|
| Q-0002-01 | Which restrained direction should become the basis of the live notebook design? | User | Compare the local specimens and select or combine directions | Open | — |

## Correction ledger

None.

## Closure

**Bounded conclusion.** Four restrained, static visual systems preserve the same laboratory record at desktop and mobile sizes without oversized headings, page overflow, console errors, or detected small-text contrast failures. No direction has been selected for the live notebook.

**Still unresolved.** Q-0002-01.

**Signed by / at.** Codex / 2026-09-01T09:48:20+04:00 / repository record.

**Witnessed by / at.** Pending user review.

**Repository state.** Working tree on `beautify-all-the-journals`, based on `e5167b5`; comparison assets remain intentionally ignored under `tmp/` during iteration.

**Expected next entry.** Selected visual direction or hybrid refinement after Q-0002-01.
