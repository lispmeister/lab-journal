# [Finding or question, stated plainly]

> **Record status:** [open / signed / witnessed / correction]
>
> **Capture note:** [contemporaneous / reconstructed / mixed]. Never remove this
> line. Name reconstruction sources and gaps below.

## Record identity

| Field | Value |
|---|---|
| Entry ID | LN-[NNNN] |
| Date | YYYY-MM-DD |
| Opened / closed | [ISO timestamp + timezone] / [ISO timestamp + timezone or open] |
| Project / phase | [project] / [phase] |
| Status | [open / signed / witnessed / correction] |
| Authors | [name or agent ID — role] |
| Operators | [name — action performed] |
| Independent observer | [name / none / not recorded] |
| Witness | [name / pending / not required, with reason] |
| Environment | [hardware, OS, runtime, versions, commit/state] |
| Artifact location | [relative attachment directory or external retention reference] |
| Sensitivity / handling | [public / internal / restricted; storage rule] |
| Capture mode | [contemporaneous / reconstructed / mixed] |
| Reconstruction sources / gaps | [source IDs and missing facts, or none] |
| Parent / correction target | [entry + exact section/claim, or none] |

## Question and success criterion

**Question.** [What uncertainty is this work intended to reduce?]

**Success criterion.** [What observable result would count as success?]

**Credible alternatives.** [List competing explanations before testing.]

## Fast field notes

<!-- Append terse notes in event order. Do not polish them after the result. -->

- **[HH:MM TZ]** [verbatim fragment, command, surprise, or uncertainty]
- **[HH:MM TZ]** [next fragment]

## Bench record

<a id="OBS-NNNN.01"></a>

### OBS-[NNNN].01 — [short observation name]

| Field | Record |
|---|---|
| Time / sequence | [timestamp or ordinal; say if reconstructed] |
| Setup / action | [what was controlled or changed] |
| Raw observation | [direct output, count, state, or sensory description] |
| Interpretation at the time | [what it seemed to mean then; may be wrong] |
| Confidence | [low / medium / high, and why] |
| Attribution | [who operated, who observed, instrument/source] |
| Evidence | [ART-[NNNN].01 link, command, log range, commit, image] |
| Next move | [what this observation caused you to do next] |

<!-- Duplicate OBS blocks. Preserve event order; never renumber signed IDs. -->

## Hypothesis and measurement ledger

| ID | Hypothesis | Predicted observation (before test) | Discriminating test | Actual result (after test) | Evidence | State |
|---|---|---|---|---|---|---|
| H-[NNNN].01 | [falsifiable explanation] | [specific expected result] | [change/observation separating alternatives] | [result or pending] | [OBS/ART IDs] | [live / rejected / bounded] |

## Thinking sketches

<a id="F-NNNN-01"></a>

### F-[NNNN]-01 — [figure title]

| Figure metadata | Value |
|---|---|
| Kind | [conjecture / measured / corrective] |
| Creator / created | [person or agent] / [time or after OBS ID] |
| Supported by | [OBS/ART IDs or none yet] |
| Supersedes | [figure/claim ID or none] |

[Inline text sketch, image link, or description. Mark conjectural lines and
labels explicitly; do not draw inferred events as measured facts.]

## Synthesis

| Epistemic state | Statement | Support |
|---|---|---|
| Observation | [direct fact] | [OBS/ART IDs] |
| Interpretation | [meaning assigned] | [OBS IDs] |
| Hypothesis | [remaining explanation] | [H ID] |
| Discriminating test | [test performed or next test] | [OBS/ART or planned] |
| Conclusion | [smallest supported claim] | [OBS/ART IDs] |
| Projection | [possible consequence not yet observed] | [explicitly unverified] |

## Decisions and rejected paths

| Decision / rejected path | Rationale at the time | Cost / reversibility | Owner | Evidence |
|---|---|---|---|---|
| [decision or rejected approach] | [why] | [cost; reversible?] | [name] | [OBS/ART/H IDs] |

## Artifact manifest

<a id="ART-NNNN.01"></a>

| Artifact ID / path | Parent observation | Captured by / method | Integrity | Sensitivity | Notes |
|---|---|---|---|---|---|
| ART-[NNNN].01 · `[relative/path; replace with a real Markdown link or inline evidence]` | OBS-[NNNN].01 | [name/instrument + method] | [checksum / immutable commit / not computed] | [handling] | [retained / excerpt / external / unavailable; scope, omissions] |

## Open-question ledger

<a id="Q-NNNN-01"></a>

| Question ID | Question | Owner | Next discriminating action | Status | Closed/superseded by |
|---|---|---|---|---|---|
| Q-[NNNN]-01 | [bounded unknown] | [name] | [specific test or observation] | open | — |

## Correction ledger

<!-- Write “None” for a new record. For a correction, preserve the original. -->

| Correction ID | Exact original claim / location | Amended claim | Reason + new evidence | Effect on conclusions | Supersedes |
|---|---|---|---|---|---|
| [COR-[NNNN]-01 or none] | [verbatim short claim + entry/section] | [bounded replacement] | [OBS/ART IDs] | [changed / unchanged, why] | [claim/figure ID] |

## Closure

**Bounded conclusion.** [What the record supports—no more.]

**Still unresolved.** [Question IDs, or none.]

**Verification performed / limitations.** [Checks and actual outcomes; not checked or not applicable with reasons; evidence IDs.]

**Signed by / at.** [name or agent ID / ISO timestamp / method]

**Witnessed by / at.** [name / timestamp, or pending/not required with reason]

**Repository state.** [commit, tag, tree, or exact state identifier]

**Expected next entry.** [question ID, proposed title, or none]
