# Failure without hooks does not rule out ordering perturbation

> **Record status:** Signed reference correction.
>
> **Capture note:** Reconstructed review of synthesized specimens LN-0248 and LN-0249. Their runs and people are fictional. This current-format example adds no experimental measurements.

## Record identity

| Field | Value |
|---|---|
| Entry ID | LN-0251 |
| Date | 2026-09-06 |
| Opened / closed | 2026-09-06T16:38:11Z / 2026-09-06T16:38:11Z; single source-review capture |
| Project / phase | Lab Journal specimens / scope correction |
| Status | Signed reference correction |
| Authors | Codex — specimen editor |
| Operators | Codex — source comparison |
| Independent observer | None; no experiment performed |
| Witness | None; editorial self-review only |
| Environment | Markdown source review; prior fixture groups in ART-0251.02 |
| Artifact location | Relative sources and inline claim comparison below |
| Sensitivity / handling | Public, synthesized source data |
| Capture mode | Reconstructed |
| Reconstruction sources / gaps | LN-0249 Question ledger and OBS-0249.01; no new matched timing traces |
| Parent / correction target | LN-0249 Question ledger, Q-0248-02 closure scope |

## Question and success criterion

**Question.** Does reproducing failure with hooks disabled establish that hooks cannot perturb ordering?

**Success criterion.** State only what the existing specimen groups establish and preserve the untested timing question.

**Credible alternatives.** Hooks might perturb ordering even when failure also occurs without them. Conversely, hooks might not perturb ordering. Both remain compatible with the supplied outcome counts.

## Fast field notes

- **Source-review sequence 1:** Read the original question and its stated closure basis.
- **Source-review sequence 2:** Compare the measured outcome with the broader question; no runtime test was performed.

## Bench record

<a id="OBS-0251.01"></a>

### OBS-0251.01 — The closure answers a narrower question

| Field | Record |
|---|---|
| Time / sequence | Source-review sequence 1–2; reconstructed |
| Setup / action | Compare LN-0249 Question ledger with its first observation |
| Raw observation | Question: “can trace hooks perturb ordering?” Closure: “hooks were not required for failure, but trace semantics were too coarse” |
| Interpretation at the time | Necessity for failure and ability to perturb ordering are different properties |
| Confidence | High for logical scope; no confidence assigned to unmeasured timing behavior |
| Attribution | Codex comparing retained synthesized source claims |
| Evidence | ART-0251.01 and ART-0251.02 |
| Next move | Narrow the closed proposition and retain a distinct open timing question |

## Hypothesis and measurement ledger

| ID | Hypothesis | Predicted observation (before test) | Discriminating test | Actual result (after test) | Evidence | State |
|---|---|---|---|---|---|---|
| H-0251.01 | Hooks may change relative event timing | Not recorded before a run; this is a future test proposal | Matched hooks-on/off timing traces with the same workload and external observer | Not run; existing outcome groups cannot decide this | OBS-0251.01 | Live, untested |

## Thinking sketches

None. The distinction is fully expressed in prose; a diagram would add no evidence.

## Synthesis

| Epistemic state | Statement | Support |
|---|---|---|
| Observation | The specimen reports failure with hooks disabled | ART-0251.02 |
| Interpretation | Hooks are not necessary for that observed failure | OBS-0251.01 |
| Hypothesis | Hooks could still perturb ordering | H-0251.01; untested |
| Discriminating test | Matched timing comparison, not only pass/fail counts | H-0251.01; planned |
| Conclusion | Close only the necessity-for-failure question | OBS-0251.01 |
| Projection | Timing comparison could refine the mechanism | Unverified |

## Decisions and rejected paths

| Decision / rejected path | Rationale at the time | Cost / reversibility | Owner | Evidence |
|---|---|---|---|---|
| Retain broad Q-0248-02 as unresolved | Existing outcome data does not measure perturbation | New dated amendment; original preserved | Specimen editor | OBS-0251.01 |
| Reject silently changing the original question | Would hide why the old conclusion was too broad | Preserve original and link this correction | Specimen editor | ART-0251.01 |

## Artifact manifest

<a id="ART-0251.01"></a>
<a id="ART-0251.02"></a>

| Artifact ID / path | Parent observation | Captured by / method | Integrity | Sensitivity | Notes |
|---|---|---|---|---|---|
| ART-0251.01 · [Original question ledger](2026-09-04-timeout-was-witness.md#question-ledger) | OBS-0251.01 | Original specimen authors; Codex source comparison | Original retained; no checksum asserted | Public | Retained original claim |
| ART-0251.02 · [Declared aggregate fixture](../attachments/2026-09-06-correction-aggregate.csv) | OBS-0251.01 | Codex / prior narrative transcription | Synthesized, unhashed | Public | Outcome counts only; no matched timing traces |

## Open-question ledger

<a id="Q-0248-02"></a>

| Question ID | Question | Owner | Next discriminating action | Status | Closed/superseded by |
|---|---|---|---|---|---|
| Q-0248-02 | Can hooks perturb relative ordering? | Specimen research lead (role, unassigned) | Compare matched hooks-on/off timing traces | Open; prior closure narrowed | COR-0251-01 |
| Q-0248-01 | Is an explicit lifecycle primitive preferable? | Specimen API maintainer (role, unassigned) | Specify and compare explicit completion sequencing | Open, inherited | — |

## Correction ledger

<a id="COR-0251-01"></a>

| Correction ID | Exact original claim / location | Amended claim | Reason + new evidence | Effect on conclusions | Supersedes |
|---|---|---|---|---|---|
| COR-0251-01 | LN-0249 Question ledger closes “can trace hooks perturb ordering?” | Hooks are not required for the reported failure; ordering perturbation remains untested | OBS-0251.01; source-scope review, no new runs | Lifecycle conclusion unchanged; broad question reopened | Q-0248-02 closure only |

## Closure

**Bounded conclusion.** The fixture establishes failure without hooks, not absence of timing perturbation.

**Still unresolved.** Q-0248-02 and inherited Q-0248-01, with owners and next actions above.

**Verification performed / limitations.** Compared the exact question and evidence statements; no experiments or timing measurements run. Markdown-only: HTML/print checks are not applicable to this record. The original specimens remain fictional.

**Signed by / at.** Codex / 2026-09-06T16:38:11Z / source-review signature.

**Witnessed by / at.** None; no independent witness participated.

**Repository state.** This reference plus unchanged original specimen narrative and declared aggregate fixture; no claim about an actual runtime commit.

**Expected next entry.** A matched timing experiment addressing Q-0248-02, if the fictional investigation is extended.
