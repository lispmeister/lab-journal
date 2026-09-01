# Authoring remains a file operation, not a toolchain

> **Record status:** Completed; cross-host skill discovery observation pending
>
> **Capture note:** Contemporaneous from the point of implementation authorization. Earlier design discussion is reconstructed from the user-visible conversation and repository state named below.

## Record identity

| Field | Value |
|---|---|
| Entry ID | LN-0008 |
| Date | 2026-09-01 |
| Opened / closed | 2026-09-01T14:29:48+04:00 / 2026-09-01T16:58:51+04:00 |
| Project / phase | lab-journal / zero-infrastructure distribution |
| Status | Completed; cross-host skill discovery observation pending |
| Authors | Codex — protocol, packaging, documentation, and implementation |
| Operators | Codex — repository inspection, edits, and QA execution |
| Independent observer | None at opening |
| Witness | User directed the architecture correction and authorized implementation; final review pending |
| Environment | Branch `beautify-all-the-journals`; base commit `e5167b5`; 27 pre-existing changed/untracked paths at opening |
| Sensitivity / handling | Public project documentation, templates, skill, and synthesized examples |
| Capture mode | Mixed |
| Reconstruction sources / gaps | User-visible conversation; `master` branch README, CLAUDE.md, Markdown template, and index; current working tree. Exact timestamps for earlier discussion were not recorded. |
| Parent / correction target | Follows LN-0007. This changes the distribution boundary; it does not correct LN-0007's maintainer-QA measurements. |

## Question and success criterion

**Question.** Can the richer Markdown-plus-HTML notebook preserve the `master` branch's copy-files-and-instruct-the-agent adoption model while keeping all build and browser QA strictly maintainer-only?

**Success criterion.** A clean starter contains only static instructions, templates, indexes, assets, and empty artifact directories; its authoring guide contains no Node, npm, Playwright, server, generator, validator, or build requirement; concise adapters cover `AGENTS.md`, `CLAUDE.md`, and generic agent environments; an optional standards-based skill installs or operates the same static kit without becoming a runtime dependency; repository maintainer documentation owns the complete QA toolchain; and the existing maintainer gate passes against the revised product.

**Credible alternatives.** Keep the validator as a recommended adopter tool; use a Markdown-to-HTML generator; make the skill the only installation path; or continue copying the repository's own agent files and manually cleaning its live index.

## Fast field notes

- **14:29 +04** User authorizes the revised implementation and emphasizes that authoring itself must require no infrastructure.
- **Opening inspection** `master` confirms the original product model: copy `TEMPLATE.md`, `index.md`, and an agent-instruction block; the agent authors entries directly.
- **Opening inspection** Current portable instructions conflict with themselves: they omit the npm/Playwright files while copied authoring instructions require `npm test`.
- **After distribution split** The committed starter contains 18 static files, zero live entries, and no scripts, package manifests, test configuration, or authoring command.
- **After skill packaging** The first official skill-validation attempt fails because the host Python lacks PyYAML. An isolated temporary environment with PyYAML runs the unchanged official validator successfully.
- **After maintainer gate** Distribution and live-notebook validation pass; the complete browser gate passes 62/62 without baseline updates.
- **Adoption smoke** A temporary project is installed, paired Markdown/HTML are authored, and both indexes are edited using file operations only. A later QA screenshot attempt defaults to unavailable WebKit; the explicit Chromium retry opens the authored plate directly from disk.

## Bench record

### OBS-0008.01 — The original product boundary is file-only

| Field | Record |
|---|---|
| Time / sequence | Opening inspection, before edits |
| Setup / action | Read the complete `master` branch README, CLAUDE.md, template, and index without switching branches |
| Raw observation | Installation on `master` consists of copying two Markdown files and merging an instruction block. Entry creation, measurement logging, signing, and index maintenance are assigned to the agent; there is no authoring runtime or validator. |
| Interpretation at the time | HTML should enlarge the static kit and the agent's vocabulary, not introduce a production pipeline |
| Confidence | High; direct branch inspection |
| Attribution | Codex / `git show master:<path>` |
| Evidence | `master:README.md`, `master:CLAUDE.md`, `master:lab-journal/TEMPLATE.md`, `master:lab-journal/index.md` |
| Next move | Define a committed clean starter and thin environment adapters |

### OBS-0008.02 — Current authoring and maintainer contracts are entangled

| Field | Record |
|---|---|
| Time / sequence | Opening inspection, before edits |
| Setup / action | Compared the current README installation file list with current root agent instructions and AUTHORING.md |
| Raw observation | The documented portable copy omits `package.json`, browser tests, and Playwright configuration, but the copied instructions require `npm test`, `npm ci`, and `npm run test:install`. |
| Interpretation at the time | Root maintainer instructions cannot also serve as portable adopter instructions now that repository QA exists |
| Confidence | High; direct text comparison |
| Attribution | Codex / repository files |
| Evidence | `README.md`; `AGENTS.md`; `CLAUDE.md`; `lab-journal/AUTHORING.md` |
| Next move | Split the two contracts and remove tooling from the portable path |

### OBS-0008.03 — The clean distribution has no authoring toolchain

| Field | Record |
|---|---|
| Time / sequence | After starter, adapter, and skill implementation |
| Setup / action | Synchronized the shared protocol and assets, then ran the distribution integrity check |
| Raw observation | The clean bundle contains 18 static files across the notebook and agent adapters, has zero live records, and contains no package manifest, scripts, tests, CI configuration, or maintainer command in portable instructions. The skill's bundled starter is byte-identical. |
| Interpretation at the time | The distributable product boundary is now independently inspectable rather than implied by prose |
| Confidence | High; manifest, content-parity, command-pattern, and local-link checks passed |
| Attribution | Codex / `scripts/check-distribution.mjs` |
| Evidence | ART-0008.01–03; passing `npm run validate:distribution` output |
| Next move | Validate the skill package and exercise the starter without its maintainer checks |

### OBS-0008.04 — The script-free skill satisfies its native package validator

| Field | Record |
|---|---|
| Time / sequence | After OBS-0008.03 |
| Setup / action | Ran the official skill-creator `quick_validate.py` against `skills/lab-journal` |
| Raw observation | Two attempts with available Python runtimes fail at import time because PyYAML is absent. A temporary isolated environment with PyYAML runs the unchanged validator and reports `Skill is valid!`. The skill contains `SKILL.md`, OpenAI UI metadata, and static starter assets, but no scripts or external dependency declaration. |
| Interpretation at the time | The initial failures describe the validator host, not the skill bundle; isolation avoids adding a repository or adopter dependency |
| Confidence | High for the official structural validation; native discovery in Claude and Grok hosts was not exercised locally |
| Attribution | Codex / official skill-creator validator |
| Evidence | ART-0008.03; validator command output |
| Next move | Run the full maintainer gate, including direct-disk starter behavior |

### OBS-0008.05 — Maintainer QA protects the kit without entering its workflow

| Field | Record |
|---|---|
| Time / sequence | After skill validation |
| Setup / action | Ran distribution validation, live static validation, and the complete Playwright suite without updating snapshots |
| Raw observation | Distribution validation passes; live validation reports eight indexed records and intact local dependencies; 62/62 browser checks pass. The total includes clean-starter checks at 320px and 1440px, direct `file://` loading with JavaScript disabled, eight automated WCAG A/AA scans, existing responsive/interaction/print contracts, and all reviewed visual baselines. |
| Interpretation at the time | QA can remain strict at the distribution-maintainer boundary while installed notebooks remain file-only |
| Confidence | High for the named local Chromium environment and assertions |
| Attribution | Codex / Node, Playwright Chromium, axe integration |
| Evidence | ART-0008.04–06; complete `npm test` output |
| Next move | Exercise actual entry authorship in an isolated copied starter |

### OBS-0008.06 — A paired record is authored with file operations alone

| Field | Record |
|---|---|
| Time / sequence | Final adoption smoke after OBS-0008.05 |
| Setup / action | Copied the starter and AGENTS adapter into an isolated temporary directory; copied both templates; directly edited a synthesized Markdown record, same-basename HTML plate, and both indexes |
| Raw observation | The temporary project contains the complete paired record and cross-links without any package, scripts, test directory, authoring command, server, or generator. Post-authoring QA opens the HTML through `file://` at 390px using local Chromium and captures a 390×1721 image with the dense bench-sheet CSS applied. The first screenshot command selected unavailable WebKit; specifying Chromium succeeds. |
| Interpretation at the time | The richer path preserves the original `master` workflow: agent file capabilities are sufficient to create both forms |
| Confidence | High for the isolated smoke scenario; behavior of other agent hosts is projected from the shared format, not directly observed |
| Attribution | Codex / native file operations; Chromium used only after authoring for observation |
| Evidence | ART-0008.07; temporary smoke tree; screenshot command output |
| Next move | Close Q-0008-01; retain a bounded cross-host discovery question |

## Hypothesis and measurement ledger

| ID | Hypothesis | Predicted observation (before test) | Discriminating test | Actual result (after test) | Evidence | State |
|---|---|---|---|---|---|---|
| H-0008.01 | A committed clean starter plus a short protocol pointer can preserve zero-infrastructure adoption while supporting both Markdown and HTML | A temporary project assembled only from starter files will contain no package/test/runtime dependency and all local links will resolve | Inspect the starter manifest and exercise its documented authoring flow in an isolated directory without Node or a server | A paired record and both indexes were authored in an isolated copied starter using file operations only; post-authoring direct-disk QA loaded local assets | OBS-0008.03, OBS-0008.06 | Supported in the smoke scenario |
| H-0008.02 | One canonical project-local protocol with thin environment adapters will be more portable than copied vendor-specific full instructions | AGENTS, Claude, generic, and skill adapters can all defer to the same installed `AUTHORING.md` without duplicating its rules | Compare adapters and search for duplicated normative protocol or maintainer commands | Three short adapters and the skill route to installed AUTHORING.md; distribution checks find no maintainer command; official skill structure validation passes | OBS-0008.03–04 | Structurally supported; cross-host discovery pending |
| H-0008.03 | Maintainer-only QA can continue to protect the shipped visual language after it is removed from the authoring contract | The full static, responsive, visual, print, interaction, and accessibility gate will pass against the revised templates and examples | Run the repository's complete maintainer suite without snapshot updates | Complete gate passes 62/62 without snapshot updates | OBS-0008.05 | Supported in local Chromium |

## Thinking sketches

### F-0008-01 — Dependency boundary

| Figure metadata | Value |
|---|---|
| Kind | Conjecture |
| Creator / created | Codex / before implementation |
| Supported by | OBS-0008.01–02 |
| Supersedes | None |

Agent → project instruction pointer → project-local AUTHORING.md → static templates and assets → Markdown plus optional HTML.

Maintainer CI → tests the clean starter, shared visual language, and specimens. No edge returns from the authoring path to maintainer CI.

## Synthesis

| Epistemic state | Statement | Support |
|---|---|---|
| Observation | `master` assigns journal production directly to the agent using copied files | OBS-0008.01 |
| Interpretation | The richer notebook should remain a static authoring protocol rather than an application | OBS-0008.01–02 |
| Hypothesis | A clean starter, thin adapters, and optional skill can preserve that boundary | H-0008.01–03 |
| Discriminating test | Install and exercise only the starter, then independently run maintainer QA | OBS-0008.05–06 |
| Conclusion | The shipped authoring path is static and directly agent-authored; repository QA is a separate maintainer concern | OBS-0008.03–06 |
| Projection | The standards-based skill and thin adapters should carry the same workflow into additional agent environments | Q-0008-02; not directly observed |

## Decisions and rejected paths

| Decision / rejected path | Rationale at the time | Cost / reversibility | Owner | Evidence |
|---|---|---|---|---|
| Treat the static notebook kit as the product | Preserves the proven `master` adoption model | Requires documentation and packaging changes; reversible | Codex | OBS-0008.01 |
| Treat a skill as an optional adapter, not a runtime | Projects remain self-contained and agent-independent | Skill installation is an additional convenience path | Codex | H-0008.02 |
| Reject a required validator or generator | The user explicitly requires authoring without infrastructure | Loses mandatory automated per-entry linting for adopters | User / Codex | OBS-0008.02 |
| Retain browser QA for maintainers | It verifies the templates and CSS we distribute | Repository development still requires npm/Playwright | Codex | LN-0007 |

## Artifact manifest

| Artifact ID / path | Parent observation | Captured by / method | Integrity | Sensitivity | Notes |
|---|---|---|---|---|---|
| ART-0008.01 · `starter-kit/lab-journal/` | OBS-0008.03, OBS-0008.06 | Codex / static distribution assembly | Working tree; parity checked | Public | Clean notebook, zero live entries |
| ART-0008.02 · `starter-kit/agent-instructions/` | OBS-0008.03 | Codex / direct file authoring | Working tree; parity checked | Public | AGENTS, Claude, and generic thin adapters |
| ART-0008.03 · `skills/lab-journal/` | OBS-0008.04 | Codex / skill packaging guidance | Official structural validation passed | Public | Optional, script-free, bundled clean starter |
| ART-0008.04 · `CONTRIBUTING.md`, root `AGENTS.md`, root `CLAUDE.md` | OBS-0008.02, OBS-0008.05 | Codex / documentation split | Working tree | Public | Maintainer-only QA contract |
| ART-0008.05 · `scripts/sync-distribution.mjs`, `scripts/check-distribution.mjs` | OBS-0008.03 | Codex / maintainer tooling | Passing distribution validation | Public | Maintainer parity and boundary checks |
| ART-0008.06 · `tests/distribution-browser.spec.mjs`, `tests/accessibility.spec.mjs` | OBS-0008.05 | Codex / Playwright and axe | 62/62 complete gate | Public | Direct-disk, responsive, and accessibility coverage for clean starter |
| ART-0008.07 · [`attachments/2026-09-01-zero-infrastructure-smoke-mobile.png`](attachments/2026-09-01-zero-infrastructure-smoke-mobile.png) | OBS-0008.06 | Codex / post-authoring Chromium screenshot | 390×1721 PNG; checksum not computed | Public synthesized smoke evidence | Captured from isolated `file://` plate; not a live notebook entry |

## Open-question ledger

| Question ID | Question | Owner | Next discriminating action | Status | Closed/superseded by |
|---|---|---|---|---|---|
| Q-0008-01 | Can the clean starter be adopted and used without any executable tooling while retaining truthful cross-linked Markdown and HTML? | Codex | Exercise the documented flow in an isolated temporary project using file operations only | Closed | OBS-0008.06 |
| Q-0008-02 | Do current Claude Code and Grok Build hosts discover and invoke the same skill bundle without platform-specific changes? | Release maintainer | Install this exact skill in each host and perform one initialization plus one entry-authoring smoke test | Open | — |
| Q-0007-02 | Does the hosted GitHub Actions runner execute the pinned workflow exactly as the local CI-equivalent container did? | Repository maintainer | Observe the first hosted workflow after publication | Open, inherited | — |

## Correction ledger

None.

## Closure

**Bounded conclusion.** The distribution now preserves the original file-only authoring model while adding direct HTML authorship. A clean 18-file starter, three thin adapters, and an optional script-free skill all defer to one project-local protocol. An isolated copied starter produced a paired record and both index updates using file operations only. Separate maintainer QA passes 62/62 and does not enter the installed workflow.

**Still unresolved.** Q-0008-02 and inherited Q-0007-02.

**Signed by / at.** Codex / 2026-09-01T16:58:51+04:00.

**Witnessed by / at.** User review pending.

**Repository state.** Working tree on `beautify-all-the-journals`, based on `e5167b5`; implementation remains uncommitted. Twenty-seven changed or untracked paths predated LN-0008.

**Expected next entry.** Cross-host skill discovery for Q-0008-02 or hosted CI observation for Q-0007-02 when either is exercised.

## Post-signature verification

**2026-09-01T17:02:00+04:00 — appended, not backfilled.** A direct-disk mobile
screenshot of the clean zero-entry starter index was inspected after closure. It
retains the accepted dense bench-sheet hierarchy at 390px: compact masthead,
restrained 30/26px title scale, visible zero-state, catalog before thematic
lenses, local specimen links, and no horizontal overflow. The first sandboxed
Chromium launch failed at macOS process registration; the explicitly authorized
outside-sandbox retry succeeded. This image was transient and was not added as
record evidence because ART-0008.07 already preserves the authored-entry smoke.

The first `npm audit` attempt could not reach the registry from the restricted
network. The authorized network retry reported zero known vulnerabilities. No
repository file changed as a result of either retry.

**Addendum signed by / at.** Codex / 2026-09-01T17:02:00+04:00.

**2026-09-01T17:04:03+04:00 — second append-only verification.** Local CLI
inspection found Claude Code, Grok Build, and Codex installed. In an isolated
project, Grok Build 1.0.5 `grok inspect --json` discovered the exact bundle at
`.grok/skills/lab-journal/SKILL.md`, retained its full description, and marked
it project-sourced and user-invocable. Claude Code's local help confirms named
skills resolve through `/skill-name`; no Claude model call was made, so actual
Claude invocation and initialization remain the unobserved part of Q-0008-02.

**Second addendum signed by / at.** Codex / 2026-09-01T17:04:03+04:00.
