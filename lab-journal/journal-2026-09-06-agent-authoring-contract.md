# Agent instructions must produce evidence, not filled templates

> **Record status:** Open
>
> **Capture note:** Mixed. Initial review is reconstructed from this conversation and current files; edits and checks follow this opening. Individual review times were not recorded.

## Record identity

| Field | Value |
|---|---|
| Entry ID | LN-0011 |
| Date | 2026-09-06 |
| Opened / closed | 2026-09-06T15:28:13Z / open |
| Project / phase | lab-journal / agent authoring assurance |
| Status | Open |
| Authors | Codex — author and editor |
| Operators | Codex — file inspection and maintainer checks |
| Independent observer | None |
| Witness | None; user requested review, not a witness to results |
| Environment | macOS; Node 24.15.0; beautify-all-the-journals; base 88f94d7 plus prior uncommitted LN-0010 changes |
| Artifact location | This record and relative protocol/skill files |
| Sensitivity / handling | Public |
| Capture mode | Mixed |
| Reconstruction sources / gaps | Current README, skill, adapters, protocol, templates; initial review times unknown |
| Parent / correction target | LN-0010; no signed claim correction planned |

## Question and success criterion

**Question.** Do all installation and invocation paths give agents a consistent, usable contract for producing trustworthy entries?

**Success criterion.** Align README, skill, three adapters and templates with the installed protocol; clarify triggers, resumption, evidence, proportional records and honest closure. Walk through routine, resumed, retrospective, correction and unavailable-tool cases. Sync portable copies, validate the skill, and pass the maintainer gate without updating baselines during the final run.

**Credible alternatives.** Add a mandatory generator or much longer adapter; leave interpretation to individual hosts; centralize the workflow in AUTHORING.md with concise routing elsewhere. Prefer the last approach to preserve portability and reduce divergence.

## Fast field notes

- **Opening reconstruction:** The user asks for clear agent instructions and confidence in entry quality. Adapters still name only TEMPLATE.md; the quality gate says every answer must be yes, including optional HTML checks; skill continuation does not define unsigned versus signed records.
- **15:28:13 UTC:** Clock read before implementation. Read protocol, both templates, indexes, previous closure and inherited questions. Skill-creator guidance used for this instruction review.

## Bench record

<a id="OBS-0011.01"></a>

### OBS-0011.01 — Entry routes disagree

| Field | Record |
|---|---|
| Time / sequence | Opening review; reconstructed |
| Setup / action | Read README, skill, three portable adapters and installed protocol |
| Raw observation | Full-template routing in adapters differs from compact routing in skill; closing checklist unconditionally asks HTML questions; continuation boundary unspecified |
| Interpretation at the time | Agents can follow one route faithfully and still overproduce scaffolding or misstate verification |
| Confidence | High for text mismatch; effects on future agent behavior unmeasured |
| Attribution | Codex / current repository text |
| Evidence | README.md; skills/lab-journal/SKILL.md; starter-kit/agent-instructions/; AUTHORING.md |
| Next move | Clarify shared lifecycle and evidence review; align entry points |

## Hypothesis and measurement ledger

| ID | Hypothesis | Predicted observation (before test) | Discriminating test | Actual result (after test) | Evidence | State |
|---|---|---|---|---|---|---|
| H-0011.01 | One explicit lifecycle removes route ambiguity | Routine, resumed, retrospective and correction cases have consistent actions through adapters and skill | Manual scenario walkthrough of final files | Pending | OBS-0011.01 | Live |
| H-0011.02 | A conditional closing review prevents fabricated completeness | Markdown-only and unavailable-browser cases can close honestly while required evidence gaps remain explicit | Trace those cases through templates and quality gate; validate bundle | Pending | Planned | Live |

## Thinking sketches

None. This is an instruction review; no visual relationship requires a new plate.

## Synthesis

Pending implementation and scenario review. Text consistency alone cannot guarantee a future agent's behavior.

## Decisions and rejected paths

| Decision / rejected path | Rationale at the time | Cost / reversibility | Owner | Evidence |
|---|---|---|---|---|
| Centralize detailed lifecycle in installed AUTHORING.md | Adapters and skill must agree without duplicating the whole protocol | Reversible documentation edits | Codex | OBS-0011.01 |
| No new authoring toolchain | File-only portability remains the product boundary | Human/agent review required | Codex | README.md |

## Artifact manifest

| Artifact ID / path | Parent observation | Captured by / method | Integrity | Sensitivity | Notes |
|---|---|---|---|---|---|
| ART-0011.01 · this record | OBS-0011.01 | Codex / direct inspection and scenario review | Working tree based on 88f94d7 | Public | Retained; results appended below |

## Open-question ledger

Q-0010-01 remains open for full design acceptance; the user's statement of progress is not treated as acceptance. Q-0008-02 (actual Claude smoke) and Q-0007-02 (hosted CI) remain inherited and open. No new open question at opening.

## Correction ledger

None. Instructions evolve; signed history remains unchanged.

## Closure

Open. Results, bounded conclusion, tools, state and signature will be appended.

## OBS-0011.02 — Implementation and scenario review

**Sequence:** After the opening record, before the final maintainer gate.
**Action:** Revised the installed protocol, skill, all three adapters, README
and Markdown templates. Walked through the cases below by reading the resulting
instructions. This is a manual consistency review by the author, not an
independent agent invocation or a measured compliance rate.

| Case | Required behavior found in the revised instructions | Result / limit |
|---|---|---|
| Routine link repair | Adapter routes to protocol; compact template, practical expectation, inline evidence, normal project checks | Consistent; no fabricated scientific hypothesis required |
| Resume interrupted work | Continue only the same unsigned record; append state and gaps; preserve earlier predictions | Consistent with project-specific requirements taking precedence |
| New scope or signed record | Allocate new ID after checking live files and indexes; link parent; no overwrite | Consistent; specimen numbering excluded |
| Retrospective entry | Use actual capture time, identify sources, distinguish event times and sequence; no backdated prediction | Consistent |
| Markdown-only correction | New full record locates the old claim; links HTML only when it exists | Review found and fixed an additional unconditional “both forms” instruction |
| Browser or historical log unavailable | Mark not checked/unavailable, state limits and next action; do not report a pass | Closure can remain honest without mandatory authoring tools |
| Failed experiment | Retain failure, bound conclusion, leave questions open; signature attests to record rather than success | Consistent |
| Witness absent | Name actual source; author signs own role; user request does not establish witnessing | Consistent |
| Existing notebook initialization | README and skill preserve installed notebook and instructions instead of copying over them | Consistent |

**Raw verification so far:** Shared distribution and journal validation pass;
official skill validator reports valid. First validation rejected a template
artifact link pointing to a nonexistent placeholder; replaced it with an
explicit instruction to insert a real link or inline evidence. Before indexes
were updated, validation also correctly reported the new record missing from
both. A sandboxed browser attempt failed with EPERM while binding the server;
retried with approved access. No failed check was treated as a pass.

**Interpretation:** H-0011.01 and H-0011.02 are supported as instruction
consistency claims for these scenarios. They do not establish that every future
agent follows the protocol. Actual Claude invocation remains Q-0008-02.

**Artifacts:** The revised [protocol](AUTHORING.md),
[full template](TEMPLATE.md), [compact template](COMPACT-TEMPLATE.md),
[skill](../skills/lab-journal/SKILL.md),
[README](../README.md), and [portable adapters](../starter-kit/agent-instructions/)
are retained source evidence. Generated copies were synchronized and checked
for equality by distribution validation. No separate HTML plate is applicable.

## Final verification and closure — 2026-09-06T15:35:45Z

- `npm run sync:distribution` synchronized 16 shared files and the skill starter;
  reviewed the affected guidance and portable copies via consistency checks.
- `npm test`, without baseline updates: **112 passed (18.6s)** on macOS,
  including Chromium, Firefox and WebKit reader tasks and the existing
  responsive, interaction, accessibility, print and visual checks.
- Visual update-mode checks passed 7/7 on macOS and 7/7 in the pinned Linux
  container; neither reported changed baseline images. No page design changed.
- Official skill validator: **Skill is valid!** Distribution: 22 clean static
  starter files. Journal: 11 live entries, three HTML plates. `git diff --check`
  passed. These structural checks do not test future agent reasoning.

**Bounded conclusion:** The README, skill, three adapters and templates now
route through a shared lifecycle and evidence contract. Both hypotheses are
supported within the manual scenario review. Entry quality remains dependent
on actual agent behavior and review; no new independent host smoke was run.

**Signed by / at:** Codex / 2026-09-06T15:35:45Z / appended author signature.
**Final status:** Signed. This closure supersedes opening pending fields without
rewriting the initial observations. **Witness:** none; author review only.
**Repository state:** beautify-all-the-journals; 88f94d7 plus the uncommitted
LN-0010 and LN-0011 working-tree changes. No commit or publication performed.
**Tools:** Codex file tools, Python, Git, Node 24.15.0, Playwright 1.62.1,
Chromium/Firefox/WebKit; pinned Linux Playwright Docker image for visual checks.
**Still unresolved:** Q-0010-01, Q-0008-02, Q-0007-02.
**Expected next entry:** LN-0012, user review or actual host invocation evidence.
