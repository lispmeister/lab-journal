# The dense bench sheet becomes the live notebook language

> **Record status:** Completed implementation; final user review pending
>
> **Capture note:** Contemporaneous. The user's acceptance and implementation hypothesis were recorded before changing the live notebook assets.

## Record identity

| Field | Value |
|---|---|
| Entry ID | LN-0005 |
| Date | 2026-09-01 |
| Opened / closed | 2026-09-01T11:19:04+04:00 / 2026-09-01T11:29:38+04:00 |
| Project / phase | lab-journal / dense bench-sheet promotion |
| Status | Completed implementation; final user review pending |
| Authors | Codex — design-system implementation and record author |
| Operators | Codex — repository edits, validation, local serving, and Chrome inspection |
| Independent observer | None during implementation |
| Witness | User accepted the C3 refinement; final implementation review pending |
| Environment | Git branch `beautify-all-the-journals`; base commit `e5167b5`; Google Chrome 152; Node.js validator |
| Sensitivity / handling | Public design-system work and synthesized specimen data |
| Capture mode | Contemporaneous |
| Reconstruction sources / gaps | User acceptance is direct; C3 measurements are preserved in LN-0004; no known reconstruction gaps |
| Parent / correction target | Follows LN-0004 and closes Q-0004-01; no signed claim is corrected |

## Question and success criterion

**Question.** Can the accepted dense bench-sheet treatment become the shared visual language for the archive, template, live plate, and synthesized examples without weakening the static Markdown-first contract?

**Success criterion.** Promote the C3 hierarchy and density to the shared live stylesheet; encode its limits in agent-facing instructions; render the index, plate template, live plate, and both examples without horizontal overflow at 1440px, 390px, and 320px; preserve file-only operation, print completeness, lens behavior, and validator success.

**Credible alternatives.** Restyle only the existing live plate; duplicate C3-specific CSS into each page; or promote one shared dense-bench design system so present and future plates inherit the accepted language.

## Fast field notes

- **11:19 +04** User accepts the refined C3: “excellent! Let's use this”.
- **Sequence 02** Interpret acceptance as authorization to promote the design to the working notebook, not merely keep the temporary specimen.
- **Sequence 03** Prefer a shared stylesheet and explicit authoring constraints so future agent-created plates inherit the decision.
- **Sequence 04** First archive render still shows the prior oversized design. The HTML reused a cached unversioned stylesheet; versioned local asset references expose the new CSS without adding a network dependency.
- **Sequence 05** First live plate render exposes a structural mismatch: the existing section label and heading share one wrapper, so a 104px first column makes headings wrap word by word. `display: contents` places label, heading, and introduction on the intended bench-sheet grid without changing evidence markup.
- **Sequence 06** Responsive sweep covers five HTML surfaces at 1440×1000, 390×844, and 320×568. No page overflows horizontally; titles are 30px/26px and section headings 21px/18px.
- **Sequence 07** First contrast sample finds muted 9–10px text at 3.66–4.21:1. Darkening the shared faint token raises the lowest sampled normal-text contrast to 5.10:1.
- **Sequence 08** Archive search initially treats `LN-0004` and visible `LN–0004` as different strings. Dash normalization plus searchable Markdown filenames makes the ASCII ID query return exactly one record.
- **Sequence 09** Chrome automation blocks `file://` navigation by browser security policy. Static validation and a remote-dependency scan pass; direct-file visual execution was not instrumented in this run.

## Bench record

### OBS-0005.01 — Dense C3 accepted for use

| Field | Record |
|---|---|
| Time / sequence | User instruction at session start |
| Setup / action | User reviewed the refined C3 specimen from LN-0004 |
| Raw observation | “excellent! Let's use this” |
| Interpretation at the time | Q-0004-01 is closed by acceptance; the live notebook may adopt the dense bench-sheet language |
| Confidence | High; direct user authorization |
| Attribution | User decision, observed by Codex |
| Evidence | Conversation; LN-0004 / ART-0004.01 |
| Next move | Promote the accepted hierarchy through shared assets and authoring guidance |

### OBS-0005.02 — Shared promotion preserves semantic structure

| Field | Record |
|---|---|
| Time / sequence | Implementation after OBS-0005.01 |
| Setup / action | Added the accepted dense bench-sheet system to the shared stylesheet; retained existing plate and archive class names; added explicit constraints to AGENTS.md, CLAUDE.md, AUTHORING.md, README.md, and PLATE-TEMPLATE.html |
| Raw observation | The archive, template, live LN-0001 plate, experiment specimen, and correction specimen inherit warm paper, muted ink, thin rules, squared controls, compact evidence modules, and restrained heading scales from one stylesheet |
| Interpretation at the time | The visual decision is now systemic and future-facing rather than a one-page theme |
| Confidence | High; direct source inspection and rendered pages |
| Attribution | Codex, repository edits and Chrome inspection |
| Evidence | ART-0005.01–04 |
| Next move | Exercise responsive layouts and interaction behavior |

### OBS-0005.03 — Responsive and interaction QA

| Field | Record |
|---|---|
| Time / sequence | Chrome sweep after shared promotion |
| Setup / action | Rendered five HTML surfaces at 1440×1000, 390×844, and 320×568; measured document width, title and section scales, contents and lens targets, and contrast; exercised search and reading-lens controls |
| Raw observation | All fifteen viewport/page combinations have zero horizontal page overflow. Titles measure 30px desktop and 26px mobile; section headings measure 21px and 18px. Mobile contents and lens controls are at least 44px high. Lowest sampled normal-text contrast is 5.10:1 after correction. Searching `LN-0004` returns one record; the bench lens reduces visible journal sections from eight to six and “All layers” restores all eight |
| Interpretation at the time | The promoted language meets the accepted density and hierarchy while preserving responsive navigation and progressive enhancement |
| Confidence | Measured in Google Chrome 152 |
| Attribution | Codex, Chrome extension inspection |
| Evidence | ART-0005.01–05 |
| Next move | Run repository validation and offline-dependency scan |

### OBS-0005.04 — Static notebook contract validates

| Field | Record |
|---|---|
| Time / sequence | Final repository checks |
| Setup / action | Ran `node scripts/validate-lab-journal.mjs`, searched HTML/CSS/JS for remote runtime references, and ran `git diff --check` |
| Raw observation | Validator reports five live records, three entry/example plates, intact indexes, and intact offline dependencies. Remote runtime scan finds no matches. Diff whitespace check passes. Chrome automation rejects direct `file://` navigation under its URL security policy |
| Interpretation at the time | Repository evidence supports the static/offline contract; direct-file visual rendering remains uninstrumented in this Chrome run rather than observed to fail |
| Confidence | High for source and validator checks; direct-file visual check not measured |
| Attribution | Codex, Node.js validator, ripgrep, Git, and Chrome security response |
| Evidence | Validator output and ART-0005.01–04 |
| Next move | Close Q-0005-01 with the direct-file instrumentation limitation explicit |

## Hypothesis and measurement ledger

| ID | Hypothesis | Predicted observation (before test) | Discriminating test | Actual result (after test) | Evidence | State |
|---|---|---|---|---|---|---|
| H-0005.01 | A shared CSS promotion plus explicit authoring limits will transfer C3's density to all HTML surfaces without changing their evidence semantics | The archive and every plate will use restrained headings, warm paper surfaces, compact evidence components, and narrow layouts while existing links, lenses, and print content continue to work | Apply the shared design; inspect all HTML surfaces at desktop and mobile widths; run the static validator and offline checks | All shared surfaces inherit the accepted treatment; fifteen responsive combinations fit without overflow; search and lenses work; static validation and offline scans pass. Direct-file visual navigation was blocked by Chrome automation policy | OBS-0005.02–04; ART-0005.01–05 | Supported within the stated instrumentation limit |

## Thinking sketches

### F-0005-01 — One language, unchanged record contract

| Figure metadata | Value |
|---|---|
| Kind | Conjecture |
| Creator / created | Codex / after OBS-0005.01, before live edits |
| Supported by | LN-0004 measurements and user acceptance |
| Supersedes | Promotes LN-0004 F-0004-01 from temporary study to live design intent |

The shared stylesheet should carry the accepted visual language. HTML structure continues to carry evidence semantics; Markdown remains canonical; JavaScript remains optional enhancement; the validator continues to enforce the offline contract.

## Synthesis

| Epistemic state | Statement | Support |
|---|---|---|
| Observation | The user accepted the refined C3 specimen for use | OBS-0005.01 |
| Interpretation | The dense bench sheet should become the live and future-facing visual language | OBS-0005.01 |
| Hypothesis | Shared CSS and explicit authoring limits can propagate the language without changing semantics | H-0005.01 |
| Discriminating test | Inspect every HTML surface responsively and run the validator | OBS-0005.03–04 |
| Conclusion | The shared system promotes the accepted design while preserving validated notebook semantics and offline dependencies | OBS-0005.02–04 |
| Projection | New plates using the template and shared classes should inherit this visual language by default | Not yet observed in a later authored entry |

## Decisions and rejected paths

| Decision / rejected path | Rationale at the time | Cost / reversibility | Owner | Evidence |
|---|---|---|---|---|
| Promote through the shared stylesheet | Current pages already share stable semantic class names | Central change; reversible in one file | Codex | Repository inspection |
| Add numerical hierarchy guidance to the protocol | Visual consistency should not rely on an agent inferring taste from examples | Small documentation cost; reversible | Codex | User acceptance; H-0005.01 |
| Reject per-page duplicated styling | Duplication would let pages drift and make future maintenance harder | Avoided complexity | Codex | Repository inspection |

## Artifact manifest

| Artifact ID / path | Parent observation | Captured by / method | Integrity | Sensitivity | Notes |
|---|---|---|---|---|---|
| ART-0005.01 · `lab-journal/assets/notebook.css` | OBS-0005.02–03 | Codex / shared CSS and Chrome computed styles | Validator passed; versioned locally as `v=5` | Public | Accepted dense bench-sheet visual system |
| ART-0005.02 · `lab-journal/assets/notebook.js` | OBS-0005.03 | Codex / interaction test | Validator passed; versioned locally as `v=2` | Public | Adds dash-normalized archive ID search |
| ART-0005.03 · `AGENTS.md`, `CLAUDE.md`, `lab-journal/AUTHORING.md`, `README.md` | OBS-0005.02 | Codex / direct protocol edits | Git diff and validator passed | Public | Makes heading, density, surface, target, and ornament limits explicit |
| ART-0005.04 · `lab-journal/PLATE-TEMPLATE.html` and existing HTML surfaces | OBS-0005.02–04 | Codex / shared asset adoption | Five surfaces validated and rendered responsively | Public | Semantic evidence structure retained; local asset versions added |
| ART-0005.05 · `/private/tmp/live-dense-bench-*.png` | OBS-0005.03 | Codex / Chrome captures | Ephemeral QA images | Public | Desktop archive, desktop live plate, and mobile specimen captures |

## Open-question ledger

| Question ID | Question | Owner | Next discriminating action | Status | Closed/superseded by |
|---|---|---|---|---|---|
| Q-0004-01 | Does the denser, quieter C3 refinement meet the intended balance? | User | Accept or reject the refined specimen | Closed | OBS-0005.01; accepted |
| Q-0005-01 | Does the promoted live system preserve the accepted design and notebook contract across all surfaces? | Codex | Responsive Chrome inspection and static validation | Closed within direct-file instrumentation limit | OBS-0005.02–04 |

## Correction ledger

None.

## Closure

**Bounded conclusion.** The accepted dense bench-sheet language is now the shared default for the archive, template, live plate, and both synthesized specimens. Responsive, interaction, contrast, index, link, and offline-dependency checks pass. Chrome automation policy prevented a direct `file://` visual run; repository validation still confirms only portable relative local dependencies.

**Still unresolved.** None for this promotion. A later real entry should confirm that an independently authored plate inherits the guidance without manual restyling.

**Signed by / at.** Codex / 2026-09-01T11:29:38+04:00 / repository record.

**Witnessed by / at.** User accepted the source design; promoted implementation review pending.

**Repository state.** Working tree on `beautify-all-the-journals`, based on `e5167b5`; LN-0002 through LN-0004 and their index updates remain uncommitted.

**Expected next entry.** First project-work entry authored with the promoted dense bench-sheet system, or a bounded design correction if user review finds a regression.
