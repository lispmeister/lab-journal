# Mobile order and agent installation must match their promises

> **Record status:** Completed
>
> **Capture note:** Mixed. The review observations preceding implementation are
> reconstructed from the immediately preceding browser measurements and repository
> inspection in this conversation; implementation notes are contemporaneous.

## Record identity

| Field | Value |
|---|---|
| Entry ID | LN-0009 |
| Date | 2026-09-01 |
| Opened / closed | 2026-09-01T17:31:13+04:00 / 2026-09-02T17:55:04+04:00 |
| Project / phase | lab-journal / pre-merge review corrections |
| Status | Completed; inherited cross-host and hosted-CI observations remain open |
| Authors | Codex — review correction design and implementation |
| Operators | Codex — repository edits and QA execution |
| Independent observer | None at opening |
| Witness | User requested the checkpoint commit and authorized all review fixes; results were not independently witnessed |
| Environment | Branch `beautify-all-the-journals`; checkpoint commit `84e9716`; clean working tree at opening |
| Sensitivity / handling | Public repository documentation, templates, skill, CSS, and tests |
| Capture mode | Mixed |
| Reconstruction sources / gaps | Immediately preceding browser measurements and review report; exact wall-clock times of individual review observations were not recorded |
| Parent / correction target | Follows LN-0008; corrects implementation gaps found in the fresh review without changing the notebook's accepted visual direction |

## Question and success criterion

**Question.** Can the accepted dense notebook preserve its visual composition
while making mobile reading and focus order agree, enforcing its stated target
sizes, and making the optional skill genuinely installable and auditable across
agent environments?

**Success criterion.** The archive has one coherent DOM and visual order at all
widths; mobile focus progresses monotonically through visible content; primary
navigation targets meet the 44px narrow-screen contract; timestamps wrap at
intentional boundaries; the accepted stylesheet is one maintainable cascade;
manual and skill initialization explicitly record adoption; host installation
locations and verification status are documented without adding an authoring
runtime; distribution and skill parity pass; browser QA and visual baselines are
reviewed; and the complete maintainer gate passes.

**Credible alternatives.** Keep CSS-only visual reordering and add tabindex
workarounds; relax the 44px contract; leave skill placement to vendor knowledge;
retain the historical stylesheet as a cascade of overrides; or defer every gap
because the existing automated suite is green.

## Fast field notes

- **17:31 +04** Checkpoint commit `84e9716` preserves the reviewed implementation before corrections.
- **Opening reconstruction** At 320px, the archive visually places search and catalog before lenses, while DOM focus reaches four lens links near 2242px before returning to the search field near 441px.
- **Opening reconstruction** The mobile brand target measures 28×28px and archive-lens links approximately 32px high; current responsive target checks omit both selectors.
- **Opening reconstruction** The optional skill validates structurally, but README does not explain host installation/discovery and Q-0008-02 still lacks an actual Claude invocation.
- **Opening reconstruction** The installed authoring guide names its directory `lab-notebook/` although installation and adapters use `lab-journal/`.
- **Implementation** Reordered both populated and zero-state archive markup to hero → catalog tools → catalog → thematic lenses → archival notes and removed mobile-only flex ordering.
- **Implementation** Added 44px mobile targets for the brand and thematic lens links, split ISO timestamps only at the date/time boundary, and expanded responsive and focus-order assertions.
- **Implementation** Consolidated the accepted bench-sheet cascade and synchronized the live, starter, and skill-bundled copies.
- **17:55 +04** The official skill validator passed using temporary validator dependencies; the final repository gate passed 64/64 Chromium tests.

## Bench record

### OBS-0009.01 — CSS ordering disagrees with interaction order

| Field | Record |
|---|---|
| Time / sequence | Review immediately before implementation authorization; reconstructed at opening |
| Setup / action | Opened the populated archive at 320×700 and enumerated visible main-page focusables in DOM order with their visual top coordinates |
| Raw observation | Four thematic lens links occur first in DOM order around visual positions 2242–2364px; the search input follows in DOM order at 441px, then catalog links at 708–2088px. CSS `order` moves the catalog above the lenses visually. |
| Interpretation at the time | The evidence-first layout is visual only and creates backward keyboard movement |
| Confidence | High; direct DOM and layout measurements |
| Attribution | Codex / local browser inspection |
| Evidence | `lab-journal/index.html`; `lab-journal/assets/notebook.css`; review measurement output in the preceding conversation |
| Next move | Adopt one source order rather than repairing focus with tabindex |

### OBS-0009.02 — The target-size test omits primary navigation

| Field | Record |
|---|---|
| Time / sequence | Review immediately before implementation authorization; reconstructed at opening |
| Setup / action | Measured mobile link rectangles and compared them with the selectors in `tests/responsive.spec.mjs` |
| Raw observation | Brand/home measures 28×28px; thematic lens links measure about 32px high. The test checks `.contents a`, `.jump-evidence`, `.lens-button`, `.view-link`, and search only. |
| Interpretation at the time | The declared 44px contract is stronger than the automated coverage |
| Confidence | High; direct computed rectangles and test-source inspection |
| Attribution | Codex / local browser inspection and repository files |
| Evidence | `lab-journal/assets/notebook.css`; `tests/responsive.spec.mjs` |
| Next move | Expand both styling and executable coverage |

### OBS-0009.03 — One source order removes backward focus travel

| Field | Record |
|---|---|
| Time / sequence | After archive markup and interaction-test revision |
| Setup / action | Loaded the populated and clean-starter archives at 320×700; enumerated visible main focusables in DOM order and asserted nondecreasing visual top coordinates |
| Raw observation | Both new focus-order tests passed. The full responsive matrix also passed for five portrait widths, two landscape widths, and 1440px desktop. |
| Interpretation at the time | The catalog-first source order reconciles visual, keyboard, and screen-reader progression without tabindex repair |
| Confidence | High; executable geometry and direct screenshots |
| Attribution | Codex / Playwright Chromium |
| Evidence | `tests/interactions.spec.mjs`; `tests/responsive.spec.mjs`; 64/64 final `npm test` output |
| Next move | Inspect populated and zero-state screenshots before closing Q-0009-01 |

### OBS-0009.04 — The consolidated cascade is rendering-equivalent

| Field | Record |
|---|---|
| Time / sequence | After mechanical consolidation and before distribution sync |
| Setup / action | Inlined the pre-consolidation and proposed stylesheets into the archive, both specimens, the live plate, and the plate template at 320px and 1440px; compared every computed CSS property on every element |
| Raw observation | All ten page/viewport comparisons reported zero computed-style differences after stale narrow-selector properties were removed. The live stylesheet changed from 42,793 to 35,584 bytes, a 16.8% reduction. |
| Interpretation at the time | The accepted appearance can be expressed as one consolidated cascade without relying on the historical override layer |
| Confidence | High for the sampled page corpus and viewports; screenshots and the broader geometry matrix provide additional coverage |
| Attribution | Codex / temporary Playwright comparison harness and repository measurement |
| Evidence | `lab-journal/assets/notebook.css`; comparison output in this session; synchronized starter and skill copies |
| Next move | Run visual regression and inspect intentional deltas |

### OBS-0009.05 — Installation is explicit without becoming infrastructure

| Field | Record |
|---|---|
| Time / sequence | After documentation, adapter, and skill revisions |
| Setup / action | Compared README, installed protocol, three host adapters, skill initialization, and bundled starter assets; ran distribution parity and the official structural skill validator |
| Raw observation | README now names project/user discovery paths and invocation checks for Codex, Claude Code, and Grok Build. Manual and skill initialization both require a first live adoption record and forbid invented timestamps. `lab-notebook/` was corrected to `lab-journal/`. Distribution validation passed for 18 static starter files and the official skill validator reported `Skill is valid!`. |
| Interpretation at the time | The optional skill is a portable convenience wrapper; canonical authoring remains direct Markdown/HTML file work in the installed project |
| Confidence | High for structure, parity, and documentation; an actual Claude authoring invocation remains unobserved as Q-0008-02 |
| Attribution | Codex / repository inspection, sync validator, official skill validator, and current vendor documentation |
| Evidence | `README.md`; `lab-journal/AUTHORING.md`; `skills/lab-journal/SKILL.md`; `starter-kit/agent-instructions/`; `npm run validate:distribution` |
| Next move | Keep the unobserved Claude smoke explicit rather than treating structural compatibility as execution evidence |

### OBS-0009.06 — Intentional mobile deltas remain restrained

| Field | Record |
|---|---|
| Time / sequence | Final visual QA after baseline update |
| Setup / action | Inspected actual and diff images for changed mobile snapshots, then captured full direct-file screenshots of populated desktop plus clean-starter mobile and desktop archives |
| Raw observation | Snapshot deltas were confined to the enlarged home target, revised archive count, and intentional timestamp boundary. The populated archive remains a compact tabular record; the clean starter keeps the same hierarchy without an empty visual void; catalog precedes thematic lenses at all inspected widths. |
| Interpretation at the time | The fixes strengthen operation without making headings or navigation visually louder |
| Confidence | High for the inspected macOS Chromium renderings |
| Attribution | Codex / Playwright Chromium screenshots opened from `file://` |
| Evidence | Updated `tests/__screenshots__/visual.spec/`; final 64/64 `npm test`; direct-file screenshots inspected in this session |
| Next move | Close Q-0009-01; retain hosted-run and Claude-invocation questions |

## Hypothesis and measurement ledger

| ID | Hypothesis | Predicted observation (before test) | Discriminating test | Actual result (after test) | Evidence | State |
|---|---|---|---|---|---|---|
| H-0009.01 | A single catalog-first source order can preserve the accepted archive while removing mobile focus reversal | Desktop and mobile screenshots remain coherent, and focusable visual positions do not move backward on mobile | Reorder archive markup without tabindex and assert monotonically increasing focus positions at 320px | Confirmed for populated and zero-state archives: focus-order assertions and direct mobile/desktop inspection passed | OBS-0009.01, OBS-0009.03, OBS-0009.06 | Supported |
| H-0009.02 | Consolidating the accepted override layer into the base stylesheet can preserve rendering while reducing cascade ambiguity | Responsive geometry and reviewed screenshots remain unchanged or show only intentional fixes | Remove superseded CSS, run the full responsive and visual suite, and inspect desktop/mobile pages | Ten computed-style comparisons had zero differences; CSS bytes fell 16.8%; final visual and responsive tests passed | OBS-0009.04, OBS-0009.06 | Supported |
| H-0009.03 | Host-specific installation guidance plus an adoption-entry requirement will close the practical packaging gap without making the skill a runtime | A user or agent can locate the correct skill directory, initialize safely, and leave a first canonical record using file operations only | Compare README, skill initialization, adapters, bundled assets, and distribution checks; validate the skill | Paths, invocation checks, and adoption behavior are explicit; parity and structural skill validation pass; actual Claude invocation remains separately open | OBS-0009.05, Q-0008-02 | Supported within stated structural/documentation boundary |

## Thinking sketches

### F-0009-01 — One reading order

| Figure metadata | Value |
|---|---|
| Kind | Conjecture |
| Creator / created | Codex / opening |
| Supported by | OBS-0009.01 |
| Supersedes | Mobile CSS-only ordering in LN-0006 |

Hero → search and chronological record → thematic lenses → archival notes.
The DOM, visual flow, keyboard focus, and screen-reader sequence should follow
the same path at every viewport.

## Synthesis

| Epistemic state | Statement | Support |
|---|---|---|
| Observation | Mobile visual and DOM orders differ, and two primary navigation classes fall below the declared target size | OBS-0009.01–02 |
| Interpretation | Passing geometry and axe scans do not by themselves prove coherent keyboard travel or compliance with the notebook's stronger interaction contract | OBS-0009.01–02 |
| Hypothesis | One source order, expanded interaction assertions, consolidated CSS, and explicit installation guidance can close the gaps without changing the accepted design | H-0009.01–03 |
| Discriminating test | Structural, skill, responsive, interaction, visual, accessibility, offline, JavaScript-free, and print checks after the corrections | OBS-0009.03–06 |
| Conclusion | The accepted design is preserved while source/focus order, mobile targets, timestamp wrapping, cascade ownership, and installation guidance now match their stated contracts | OBS-0009.03–06 |
| Projection | Executable focus/target contracts and a single accepted cascade should make later archive and template changes safer for agent authors | Forward-looking; not yet observed over a later change |

## Decisions and rejected paths

| Decision / rejected path | Rationale at the time | Cost / reversibility | Owner | Evidence |
|---|---|---|---|---|
| Preserve the current state in checkpoint `84e9716` before corrections | The user explicitly requested committing the working tree first | One additional commit; reversible through ordinary Git history | User / Codex | Repository log |
| Reject positive tabindex as an order repair | It would mask rather than reconcile source and visual reading order | Requires markup/layout adjustment; reversible | Codex | OBS-0009.01 |
| Use catalog-first source order at every width | One chronology now serves visual, keyboard, and assistive-technology reading | Markup change; reversible | Codex | OBS-0009.03, OBS-0009.06 |
| Keep authoring runtime-free and put host discovery in optional-skill documentation | The project protocol and files remain the durable product; the skill only installs or routes agents into them | Documentation/packaging change; reversible | User / Codex | OBS-0009.05 |
| Do not claim a Claude smoke from structural validation | No Claude authoring invocation occurred in this record | Leaves Q-0008-02 open; epistemically necessary | Codex | OBS-0009.05 |

## Artifact manifest

| Artifact ID / path | Parent observation | Captured by / method | Integrity | Sensitivity | Notes |
|---|---|---|---|---|---|
| ART-0009.01 · `lab-journal/assets/notebook.css` | OBS-0009.01–02 | Codex / direct CSS revision | Rendering-equivalence comparison and final browser gate passed; final commit pending | Public | Accepted shared visual language, synchronized to both distributions |
| ART-0009.02 · `tests/` | OBS-0009.01–02 | Codex / Playwright contract revision | 64/64 final local tests passed | Public | Focus order, target size, responsive and visual coverage |
| ART-0009.03 · `README.md`, `skills/lab-journal/`, `starter-kit/` | H-0009.03 | Codex / documentation and skill packaging revision | Distribution and official skill validation passed | Public | Cross-agent installation and adoption behavior |

## Open-question ledger

| Question ID | Question | Owner | Next discriminating action | Status | Closed/superseded by |
|---|---|---|---|---|---|
| Q-0009-01 | Does one catalog-first source order remain as useful on desktop as the earlier lenses-first composition? | Codex | Inspected populated and zero-state archives at desktop and mobile after markup revision | Closed | OBS-0009.03 and OBS-0009.06 |
| Q-0008-02 | Do current Claude Code and Grok Build hosts discover and invoke the same skill bundle without platform-specific changes? | Release maintainer | Follow documented installation in each host and perform initialization plus entry-authoring smoke | Open, inherited | — |
| Q-0007-02 | Does the hosted GitHub Actions runner execute the pinned workflow exactly as the local CI-equivalent container did? | Repository maintainer | Observe the first hosted workflow after publication | Open, inherited | — |

## Correction ledger

None. This entry corrects implementation behavior and documentation; it does
not amend a signed scientific claim.

## Closure

**Bounded conclusion.** For the representative live record, clean starter,
templates, and specimens in this repository, one catalog-first source order
preserves the accepted dry bench-sheet composition and removes the observed
mobile focus reversal. The expanded target test covers the formerly omitted
brand and lens links. The consolidated stylesheet is computed-style equivalent
on ten direct comparisons and 16.8% smaller by bytes. Installation now names
current host paths and creates an honest first adoption record while authoring
continues to require only file operations.

**Still unresolved.** Q-0008-02 and Q-0007-02.

**Signed by / at.** Codex / 2026-09-02T17:55:04+04:00.

**Witnessed by / at.** User authorized the fixes in this conversation; the
finished result has no independent witness.

**Repository state.** Branch `beautify-all-the-journals`; checkpoint `84e9716`;
review corrections prepared in the working tree and final commit pending at
signature time.

**Expected next entry.** Cross-host invocation evidence or the first hosted CI
observation, whichever occurs first.
