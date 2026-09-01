# Responsive behavior becomes an executable notebook contract

> **Record status:** Completed automated assurance; first hosted CI run pending
>
> **Capture note:** Contemporaneous. This record begins before test infrastructure changes.

## Record identity

| Field | Value |
|---|---|
| Entry ID | LN-0007 |
| Date | 2026-09-01 |
| Opened / closed | 2026-09-01T12:01:32+04:00 / 2026-09-01T13:55:14+04:00 |
| Project / phase | lab-journal / automated responsive assurance |
| Status | Completed automated assurance; first hosted CI run pending |
| Authors | Codex — test architecture, implementation, and record author |
| Operators | Codex — dependency installation, repository edits, browser-test execution |
| Independent observer | None during implementation |
| Witness | User authorized implementation; review pending |
| Environment | Git branch `beautify-all-the-journals`; base commit `e5167b5`; Node.js 24.15.0; npm 11.14.1 |
| Sensitivity / handling | Public test infrastructure and synthesized specimen pages |
| Capture mode | Contemporaneous |
| Reconstruction sources / gaps | None at opening |
| Parent / correction target | Follows LN-0006; automates its responsive acceptance criteria without correcting its measurements |

## Question and success criterion

**Question.** Can the notebook continuously verify its responsive, interaction, visual, accessibility, print, and offline contracts without adding a server or framework to the published pages?

**Success criterion.** A clean checkout can install pinned development dependencies and run one documented command that: starts an ephemeral local static server; checks the five representative pages at 320, 360, 375, 390, 430, 667×375, 844×390, and 1440×900 as applicable; asserts no page overflow, heading limits, touch targets, archive task positions, lens visibility, evidence navigation, wide-table containment, desktop order, print completeness, search/lens behavior, and JavaScript-off completeness; compares a small set of committed Chromium screenshots; reports automated WCAG A/AA findings; and runs the strengthened static journal validator. CI must run the same gate and retain failure artifacts. Published notebook pages must retain no runtime package, server, or network dependency.

**Credible alternatives.** Continue manual Chrome review; use screenshot comparison alone; use geometry assertions alone; test direct `file://` URLs; or introduce a permanent application server.

## Fast field notes

- **12:01 +04** User authorizes the proposed automated responsive gap closure: “go ahead”.
- **12:01 +04** Current npm registry reports `@playwright/test` 1.62.1 and `@axe-core/playwright` 4.13.0.
- **After first browser run** 40 checks pass and seven test assertions fail; inspect before changing product code.
- **After assertion repair** Responsive and interaction suite passes 47/47; automated WCAG scans pass 6/6.
- **After baseline review** Four visual references are generated and inspected for macOS and pinned Linux Chromium.
- **13:55 +04** Complete no-update gate passes 57/57 on macOS and 57/57 in `mcr.microsoft.com/playwright:v1.62.1-noble`.

## Bench record

### OBS-0007.01 — Existing validator cannot observe layout

| Field | Record |
|---|---|
| Time / sequence | Opening inspection |
| Setup / action | Read `scripts/validate-lab-journal.mjs`, shared responsive CSS, repository manifests, and LN-0006 |
| Raw observation | The repository has no package manifest or browser-test files. The validator checks local links, plate anatomy, indexes, SVG descriptions, and offline dependencies, but it does not execute CSS, JavaScript, viewport layout, print media, or accessibility rules. |
| Interpretation at the time | The identified merge risk requires a real browser gate plus a stricter static convention check |
| Confidence | High; direct repository inspection |
| Attribution | Codex / shell inspection |
| Evidence | `scripts/validate-lab-journal.mjs`; absence of package/test manifests |
| Next move | Add a pinned, development-only Playwright harness and preregister layout contracts |

### OBS-0007.02 — The first run distinguishes product behavior from test assumptions

| Field | Record |
|---|---|
| Time / sequence | First responsive run after harness implementation |
| Setup / action | Ran 47 responsive, interaction, JavaScript-off, and print checks against the current five surfaces |
| Raw observation | 40 pass and seven fail. Five archive failures include the visually hidden lens heading in the visible-heading maximum. The evidence anchor changes the URL before smooth scrolling settles. The JavaScript-off check expects nine record layers, while the specimen contains eight. Failure traces and screenshots show the intended page state. |
| Interpretation at the time | The failing assertions model visibility, asynchronous scrolling, and completeness too narrowly; no inspected failure identifies a product regression |
| Confidence | High; each failure has a direct assertion value, page snapshot, screenshot, and trace |
| Attribution | Codex / Playwright Test 1.62.1, bundled Chromium |
| Evidence | First `npm run test:responsive` output and ignored `test-results/` diagnostics |
| Next move | Exclude skip-link headings from visible typography measurement, poll for anchor settling, and assert a bounded nonempty layer set plus universal visibility |

### OBS-0007.03 — Geometry, interaction, print, offline, and accessibility contracts pass

| Field | Record |
|---|---|
| Time / sequence | After the bounded assertion repairs in OBS-0007.02 |
| Setup / action | Reran responsive tests; ran axe WCAG A/AA scans on archive, experiment, and correction surfaces at mobile and desktop widths |
| Raw observation | Responsive and interaction suite passes 47/47. It covers 25 portrait combinations, 10 landscape combinations, five desktop surfaces, print completeness, search, all four lenses, evidence anchoring, keyboard table scrolling, local-only requests, and JavaScript-off completeness. Six axe scans pass with no selected WCAG A/AA violations. |
| Interpretation at the time | LN-0006's manual acceptance criteria now have executable counterparts, with automated accessibility coverage added |
| Confidence | High for named tests, pages, dimensions, and axe rule tags; automated accessibility remains partial by definition |
| Attribution | Codex / Playwright Test and `@axe-core/playwright` |
| Evidence | `tests/responsive.spec.mjs`, `tests/interactions.spec.mjs`, `tests/accessibility.spec.mjs`; passing command output |
| Next move | Establish and compare platform-specific visual references |

### OBS-0007.04 — Reviewed image baselines are platform-specific and reproducible

| Field | Record |
|---|---|
| Time / sequence | After OBS-0007.03 |
| Setup / action | Generated four macOS Chromium baselines and four Linux Chromium baselines; visually inspected archive mobile, plate mobile, artifact-table mobile, and plate desktop compositions; added a pinned Linux update helper |
| Raw observation | Both platform sets show the intended dense bench sheet, complete mobile lenses, contained table cue, and desktop hierarchy. macOS and Linux render system typography differently enough to justify the explicit `{platform}` snapshot path. |
| Interpretation at the time | Platform-separated references preserve a strict 0.1% pixel-difference ceiling without confusing font rasterization with layout drift |
| Confidence | High for the two generated environments |
| Attribution | Codex / Playwright Chromium on Darwin and official `v1.62.1-noble` container |
| Evidence | `tests/__screenshots__/visual.spec/`; `scripts/update-linux-snapshots.mjs` |
| Next move | Run the complete gate without snapshot updates on both platforms |

### OBS-0007.05 — Complete no-update gate passes on developer and CI-equivalent platforms

| Field | Record |
|---|---|
| Time / sequence | Final discriminating run before closure |
| Setup / action | Ran `npm test` on macOS; ran `npm ci && npm test` in `mcr.microsoft.com/playwright:v1.62.1-noble` with the committed Linux baselines |
| Raw observation | Static validation reports seven live records, three live/example plates, complete indexes, and intact offline dependencies. Both environments report 57/57 Playwright checks passed without updating snapshots. npm reports zero known package vulnerabilities. |
| Interpretation at the time | The test harness reproduces the responsive conclusion and visual references across the developer and pinned CI-equivalent environments |
| Confidence | High for local and container execution; the hosted GitHub Actions runner has not executed the workflow yet |
| Attribution | Codex / local Node.js 24.15.0 and official Playwright Linux container |
| Evidence | `npm test` outputs; `package-lock.json`; `.github/workflows/notebook-quality.yml` |
| Next move | Close Q-0007-01; observe the first hosted workflow as Q-0007-02 |

## Hypothesis and measurement ledger

| ID | Hypothesis | Predicted observation (before test) | Discriminating test | Actual result (after test) | Evidence | State |
|---|---|---|---|---|---|---|
| H-0007.01 | Geometry-first Playwright tests plus a small pinned visual suite will detect responsive regressions while remaining stable enough for CI | The current design will satisfy explicit layout and interaction contracts at every named viewport; four canonical screenshots will stabilize in a pinned Chromium environment | Implement the harness, generate reviewed baselines, rerun without baseline updates, and inspect all failures | Both complete no-update runs pass 57/57 with platform-specific reviewed baselines | OBS-0007.02–05 | Supported in macOS and pinned Linux environments |
| H-0007.02 | Static protocol enforcement and axe scans will catch defects outside screenshot comparison | The validator will reject missing evidence jumps or malformed scroll regions, while current pages produce no serious WCAG A/AA violations under the selected automated rule set | Add negative validator fixtures or source mutations where practical; run validator and axe scans across representative surfaces | Validator now enforces bench jumps and labeled focusable scroll regions; current pages pass six selected WCAG A/AA scans. A negative mutation fixture was not added. | OBS-0007.03–05 | Partially supported; rejection path established by source logic but not independently fixture-tested |

## Thinking sketches

### F-0007-01 — Layered assurance model

| Figure metadata | Value |
|---|---|
| Kind | Conjecture |
| Creator / created | Codex / before implementation |
| Supported by | OBS-0007.01 |
| Supersedes | Manual-only assurance boundary in LN-0006 |

Static contract → browser geometry and interactions → selective visual comparison → accessibility scan → CI artifact report.

Only the test harness serves files. The notebook artifact remains relative, local, and complete through `file://`.

## Synthesis

| Epistemic state | Statement | Support |
|---|---|---|
| Observation | Static validation cannot execute the responsive behavior recorded in LN-0006 | OBS-0007.01 |
| Interpretation | Responsive acceptance criteria should become executable contracts rather than prose-only review notes | OBS-0007.01 |
| Hypothesis | A geometry-first Playwright gate with selective snapshots and axe scans can close the gap | H-0007.01–02 |
| Discriminating test | Run the complete gate twice, including a no-update visual comparison pass | OBS-0007.05 |
| Conclusion | The responsive behavior is now an executable, cross-platform checked contract rather than a manual-only review | OBS-0007.03–05 |
| Projection | The same contract pattern may support future plate modules without expanding manual QA linearly | Not yet observed |

## Decisions and rejected paths

| Decision / rejected path | Rationale at the time | Cost / reversibility | Owner | Evidence |
|---|---|---|---|---|
| Use semantic geometry assertions as the primary gate | Directly encodes notebook requirements and avoids pixel-only diagnosis | Test dependency and maintenance; reversible | Codex | OBS-0007.01 |
| Limit visual snapshots to four canonical compositions | Bounds review noise while retaining sensitivity to visual drift | Some surfaces remain geometry-only; reversible | Codex | H-0007.01 |
| Use an ephemeral Node static server only during tests | Exercises relative HTTP navigation without changing the published runtime contract | Small helper script; reversible | Codex | Success criterion |
| Pin exact development dependency versions | Reduces unreviewed browser and image-baseline changes | Requires intentional upgrades | Codex | npm registry observations |
| Keep platform-specific image baselines | System typography differs materially between macOS and Linux | Eight small PNGs instead of four; reversible | Codex | OBS-0007.04 |
| Do not loosen assertions after the first failures | Diagnostics identified test-model errors with bounded fixes | Small test repair; preserves product contract | Codex | OBS-0007.02 |

## Artifact manifest

| Artifact ID / path | Parent observation | Captured by / method | Integrity | Sensitivity | Notes |
|---|---|---|---|---|---|
| ART-0007.01 · `package.json`, `package-lock.json`, `playwright.config.mjs` | OBS-0007.02–05 | Codex / pinned npm install and configuration | Working tree; lockfile integrity hashes | Public | Development-only test dependencies |
| ART-0007.02 · `scripts/serve-static.mjs` | OBS-0007.03 | Codex / Node built-ins | Working tree | Public | Loopback-only ephemeral test server |
| ART-0007.03 · `tests/responsive.spec.mjs`, `tests/interactions.spec.mjs` | OBS-0007.02–03 | Codex / Playwright Test | Working tree | Public | Geometry, behavior, print, local-resource, and JavaScript-off contracts |
| ART-0007.04 · `tests/accessibility.spec.mjs` | OBS-0007.03 | Codex / axe integration | Working tree | Public | Selected automated WCAG A/AA rules |
| ART-0007.05 · `tests/visual.spec.mjs`, `tests/__screenshots__/` | OBS-0007.04–05 | Codex / reviewed Playwright screenshots | Working tree; PNG baselines | Public | Four compositions × Darwin/Linux |
| ART-0007.06 · `.github/workflows/notebook-quality.yml` | OBS-0007.05 | Codex / CI configuration | Working tree | Public | PR and `master` gate; failure artifacts retained 14 days |
| ART-0007.07 · `scripts/validate-lab-journal.mjs` | OBS-0007.03 | Codex / static protocol extension | Working tree | Public | Requires bench jump and accessible scroll-region declarations |
| ART-0007.08 · `scripts/update-linux-snapshots.mjs` | OBS-0007.04 | Codex / pinned Docker invocation | Working tree | Public | Reproducible Linux baseline update |

## Open-question ledger

| Question ID | Question | Owner | Next discriminating action | Status | Closed/superseded by |
|---|---|---|---|---|---|
| Q-0007-01 | Can the automated suite reproduce LN-0006's responsive conclusions without flaky or platform-dependent gates? | Codex | Implement and rerun the full gate without updating baselines | Closed | OBS-0007.03–05 |
| Q-0007-02 | Does the hosted GitHub Actions runner execute the pinned workflow exactly as the local CI-equivalent container did? | Repository maintainer | Observe the first pull-request or `master` workflow run and retain diagnostics if it differs | Open | — |

## Correction ledger

None.

## Closure

**Bounded conclusion.** The repository now converts LN-0006's responsive criteria into a 57-check browser gate with static protocol enforcement, interaction, JavaScript-off, print, local-resource, visual, and automated accessibility coverage. The complete gate passes without baseline updates on macOS and the exact pinned Linux Playwright container configured for CI.

**Still unresolved.** Q-0007-02; hosted workflow execution is not yet observed. Automated accessibility does not replace qualitative or assistive-technology review.

**Signed by / at.** Codex / 2026-09-01T13:55:14+04:00.

**Witnessed by / at.** User authorized implementation; final review pending.

**Repository state.** Working tree on `beautify-all-the-journals`, based on `e5167b5`; LN-0002 through LN-0007, visual-system changes, and test infrastructure remain uncommitted.

**Expected next entry.** Hosted CI observation for Q-0007-02, only if the remote run differs from the local container result.
