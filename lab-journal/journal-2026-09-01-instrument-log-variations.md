# Which instrument-log treatment should define the notebook's restrained visual language?

> **Record status:** Completed variation study; variant selection open
>
> **Capture note:** Contemporaneous. The user's selection of direction C and subsequent variation work are recorded during this session.

## Record identity

| Field | Value |
|---|---|
| Entry ID | LN-0003 |
| Date | 2026-09-01 |
| Opened / closed | 2026-09-01T10:09:18+04:00 / 2026-09-01T10:17:13+04:00 |
| Project / phase | lab-journal / instrument-log variation study |
| Status | Completed variation study; variant selection open |
| Authors | Codex — design, implementation, and record author |
| Operators | Codex — repository edits, local serving, and Chrome inspection |
| Independent observer | None during implementation |
| Witness | Pending user comparison and variation selection |
| Environment | Git branch `beautify-all-the-journals`; base commit `e5167b5`; Google Chrome 152 |
| Sensitivity / handling | Public design study and synthesized example data |
| Capture mode | Contemporaneous |
| Reconstruction sources / gaps | User selected option C directly; no known reconstruction gaps |
| Parent / correction target | Follows LN-0002 and closes Q-0002-01 at the family level; no signed claim is corrected |

## Question and success criterion

**Question.** Within the selected instrument-log family, which balance of density, contrast, measurement prominence, and reading comfort should guide the live notebook?

**Success criterion.** Produce three materially different instrument-log variants under `tmp/`, preserve the same record content and static constraints, render cleanly at desktop and mobile widths, and provide a focused comparison surface without changing the live notebook design.

**Credible alternatives.** A balanced calibration sheet, a dense operations console, or a quiet bench sheet. The original direction C remains the control.

## Fast field notes

- **10:09 +04** User selects option C and asks for variations.
- **Sequence 02** Treat the selection as closure of broad direction Q-0002-01, not authorization to modify the live design.
- **Sequence 03** Vary information behavior rather than making three color skins: balanced calibration, telemetry-forward operations, and quieter bench reading.
- **Sequence 04** C1 Calibration, C2 Operations, and C3 Bench Sheet created beside the original C0 control, plus a focused comparison index.
- **Sequence 05** Desktop Chrome pass measures record titles at 36px, 36px, and 35px; evidence begins between 900px and 948px from the page origin.
- **Sequence 06** First 320px pass detects two pixels of document overflow in C2. The source is the unbroken `CONTROL=WRITE_CALLBACK_BARRIER` event token; adding token-level emergency wrapping removes the overflow without changing the recorded text.
- **Sequence 07** Final mobile pass shows complete two-row contents navigation, 44px targets, no page overflow, no console errors, and no detected normal-text contrast below 4.5:1.

## Bench record

### OBS-0003.01 — Direction family selected

| Field | Record |
|---|---|
| Time / sequence | User instruction at session start |
| Setup / action | Presented four restrained directions from LN-0002; user chose option C |
| Raw observation | User response: “Let's continue with option C. Create some variations of that.” |
| Interpretation at the time | The instrument-log family is selected; its exact density and surface treatment remain open |
| Confidence | High; direct user instruction |
| Attribution | User selection, observed by Codex |
| Evidence | Conversation and LN-0002 / Q-0002-01 |
| Next move | Create three same-content variations inside the C family |

### OBS-0003.02 — Three operationally distinct variants

| Field | Record |
|---|---|
| Time / sequence | Implementation after OBS-0003.01 |
| Setup / action | Held the synthesized LN-0248 record constant while changing layout, density, palette, status treatment, and typographic voice |
| Raw observation | C1 uses a light calibration surface and balanced evidence hierarchy; C2 uses a dark telemetry-forward surface and compact machine tokens; C3 uses a warm print-oriented sheet and quieter serif reading hierarchy |
| Interpretation at the time | The selected family supports a default plus specialized modes without changing the underlying record contract |
| Confidence | High; direct artifact inspection |
| Attribution | Codex, direct HTML/CSS authoring |
| Evidence | ART-0003.01–04 |
| Next move | Compare desktop, mobile, contrast, and navigation behavior in Chrome |

### OBS-0003.03 — Chrome responsive review and narrow-token correction

| Field | Record |
|---|---|
| Time / sequence | Chrome review after implementation |
| Setup / action | Inspected the focused index and all variants at 1440×1000, 390×844, and 320×568; measured headings, document width, navigation targets, console output, and small-text contrast |
| Raw observation | Desktop titles: C1 36px, C2 36px, C3 35px. Mobile titles: 28–29px. Initial C2 narrow width was 322px in a 320px viewport due to one unbroken event token; final width is 320px after token wrapping. All variants finish without page overflow or console errors, with 44px navigation targets and no detected normal-text contrast below 4.5:1 |
| Interpretation at the time | C1 is the most neutral default candidate. C2 is effective but specialized for active operations. C3 is strongest for long reading and print but less compact on mobile |
| Confidence | Measured in Google Chrome 152 |
| Attribution | Codex, Chrome extension inspection |
| Evidence | ART-0003.01–04 and local screenshots in `/private/tmp/instrument-*.png` |
| Next move | Present all four treatments and request user selection or hybrid instruction |

## Hypothesis and measurement ledger

| ID | Hypothesis | Predicted observation (before test) | Discriminating test | Actual result (after test) | Evidence | State |
|---|---|---|---|---|---|---|
| H-0003.01 | A balanced calibration-sheet variant will retain option C's laboratory identity while being less telemetry-heavy than an operations console and more operational than a quiet bench sheet | The balanced variant will expose identity, state, chronology, and the first evidence block within a compact but calm hierarchy at desktop and mobile widths | Render all three with identical content; compare first-screen evidence, heading scale, overflow, contrast, and navigation | C1 retains the instrument identity, begins evidence at 900px desktop, uses 36px/29px titles, and passes final responsive, target, console, and contrast checks | OBS-0003.02–03; ART-0003.02 | Supported as a default candidate; user preference open |

## Thinking sketches

### F-0003-01 — Instrument-log variation axes

| Figure metadata | Value |
|---|---|
| Kind | Conjecture |
| Creator / created | Codex / after OBS-0003.01 |
| Supported by | User selection and LN-0002 OBS-0002.03 |
| Supersedes | Narrows F-0002-02 to direction C |

The study will hold record semantics constant while moving along two axes: calm reading versus operational density, and narrative emphasis versus measurement emphasis.

### F-0003-02 — Rendered instrument matrix

| Figure metadata | Value |
|---|---|
| Kind | Measured |
| Creator / created | Codex / after OBS-0003.03 |
| Supported by | OBS-0003.02–03 |
| Supersedes | Does not supersede F-0003-01; realizes it |

The focused index places C0, C1, C2, and C3 in a common matrix and names their primary signal, density, reading behavior, operations fit, and default suitability.

## Synthesis

| Epistemic state | Statement | Support |
|---|---|---|
| Observation | The user selected the instrument-log family from four restrained alternatives | OBS-0003.01 |
| Interpretation | Laboratory-coded procedural presentation is preferred over government, enterprise, or publication-first framing | OBS-0003.01 |
| Hypothesis | A balanced calibration treatment may be the strongest default within the family | H-0003.01 |
| Discriminating test | Compare three same-content variants in Chrome at desktop and mobile sizes | OBS-0003.03 |
| Conclusion | C1 is the most balanced default candidate; C2 and C3 are credible specialized modes | OBS-0003.02–03 |
| Projection | The selected variant can become the basis for a later live-system redesign proposal | Not yet authorized |

## Decisions and rejected paths

| Decision / rejected path | Rationale at the time | Cost / reversibility | Owner | Evidence |
|---|---|---|---|---|
| Preserve the original C specimen as a control | Makes each change visible against the selected starting point | Low cost; fully reversible | Codex | OBS-0003.01 |
| Make variations structural, not color-only | The user needs to narrow information behavior and tone | More authored CSS/HTML; reversible | Codex | H-0003.01 |
| Keep all variants under ignored `tmp/` | Selection is still in progress | No committed prototype artifact until promotion | Codex | Existing iteration workflow |

## Artifact manifest

| Artifact ID / path | Parent observation | Captured by / method | Integrity | Sensitivity | Notes |
|---|---|---|---|---|---|
| ART-0003.01 · `tmp/technical-style-study/instrument-variations.html` | OBS-0003.01 | Codex / direct HTML | Chrome 152; desktop and mobile review passed | Public | Focused comparison index; ignored iteration artifact |
| ART-0003.02 · `tmp/technical-style-study/instrument-calibration.html` | H-0003.01 | Codex / direct HTML/CSS | Chrome review passed | Public | C1 balanced calibration sheet |
| ART-0003.03 · `tmp/technical-style-study/instrument-operations.html` | H-0003.01 | Codex / direct HTML/CSS | Chrome review passed after narrow-token correction | Public | C2 dense operations console |
| ART-0003.04 · `tmp/technical-style-study/instrument-bench-sheet.html` | H-0003.01 | Codex / direct HTML/CSS | Chrome review passed | Public | C3 quiet bench sheet |

## Open-question ledger

| Question ID | Question | Owner | Next discriminating action | Status | Closed/superseded by |
|---|---|---|---|---|---|
| Q-0002-01 | Which restrained direction should become the basis of the live notebook design? | User | Select broad family | Closed at family level | OBS-0003.01; option C selected |
| Q-0003-01 | Which instrument-log variant or hybrid should guide the live notebook? | User | Compare original C and three new variants | Open | — |

## Correction ledger

None.

## Closure

**Bounded conclusion.** The selected instrument-log family supports three technically viable treatments. C1 is the strongest neutral default candidate; C2 and C3 offer useful operations-heavy and reading-heavy modes. No variant has been selected for the live notebook.

**Still unresolved.** Q-0003-01.

**Signed by / at.** Codex / 2026-09-01T10:17:13+04:00 / repository record.

**Witnessed by / at.** Pending user review.

**Repository state.** Working tree on `beautify-all-the-journals`, based on `e5167b5`; prior LN-0002 index and record changes remain uncommitted.

**Expected next entry.** Selected instrument-log variant or hybrid refinement after Q-0003-01.
