# Correction: the timeout was a witness, not a cause

| Field | Value |
|---|---|
| Entry ID | LN-0249 |
| Opened | 2026-09-04T13:08:00+04:00 |
| Closed | 2026-09-04T16:44:00+04:00 |
| Status | Signed correction |
| Corrects | LN-0248 / OBS-0248.01 interpretation and synthesis wording |
| Authors | Priya Nwosu, Mira Chen, AI research coordinator |
| Operator | AI research coordinator |
| External observer | Priya Nwosu |
| Witness | Mira Chen |
| Environment | Linux; Node.js 25.2.1; kernel socket observer |
| Sensitivity | Public-safe synthesized measurements |
| Reconstruction | Partial reconstruction from A-0248-01 plus new contemporaneous capture |

> **Illustrative correction.** This page demonstrates how a signed notebook
> changes its mind without replacing the original record.

## Correction target

The original entry remains available as [`LN-0248`](2026-08-30-reply-before-close.md).
It correctly concluded that shutdown must follow reply completion, but one
sentence compressed the mechanism too far.

**Original wording:** “Shutdown destroyed the only socket before the encoded
acknowledgement could be written.”

**Corrected wording:** The application called the encoder before close, but the
reply had not completed its socket write. Shutdown destroyed the socket before
the acknowledgement became observable to the owner.

The conclusion survives. The causal description changes.

## Why the correction was opened

`Q-0248-02` asked whether internal trace hooks could perturb or misrepresent the
sub-millisecond ordering. An external observer showed that application-level
`encode` timestamps do not establish write completion. The earlier trace was
accurate about call order but insufficient for the causal claim attached to it.

## Bench record

### OBS-0249.01 · 2026-09-04T14:02:00+04:00

**Recorded by:** Priya Nwosu
**Operator:** AI research coordinator
**Observer:** external socket observer; internal trace disabled
**Question:** Does encoding occur before close when instrumentation is removed?
**Hypothesis before run:** Internal trace hooks may reorder events or may only
mislabel `encode called` as `reply written`.
**Raw observation:** In five immediate-stop runs, encoding was invoked before
close, the write callback did not complete before close, and no acknowledgement
was observed.
**Interpretation at the time:** The original trace did not prove that close
preceded encoding. It did show that close preceded a successful write.
**Confidence:** Measured.
**Evidence:** [`A-0249-01`](../attachments/2026-09-04-external-observer.csv).
**Next move:** Repeat with callback sequencing and the same external observer.

### OBS-0249.02 · 2026-09-04T15:11:00+04:00

**Question:** Does explicit write completion remain sufficient without internal tracing?
**Hypothesis before run:** If completion—not encoding—is the boundary, callback
sequencing will produce an observable acknowledgement with trace hooks off.
**Raw observation:** Twenty of twenty callback-sequenced runs acknowledged
before close. Five immediate-stop controls produced no acknowledgement.
**Interpretation at the time:** The lifecycle conclusion from LN-0248 survives;
the description of where the race occurs must be narrowed.
**Confidence:** Measured and independently observed.
**Evidence:** A-0249-01 rows 6–10 plus specimen group `R-0249-C`.
**Next move:** Append correction COR-0249-01 and close Q-0248-02.

## Correction ledger

### COR-0249-01 · 2026-09-04T16:20:00+04:00

**Corrects:** LN-0248 synthesis and OBS-0248.01 interpretation only
**Original preserved:** Yes
**Reason:** `encode called` was treated as equivalent to `write completed`
**New evidence:** OBS-0249.01–02 and A-0249-01
**Effect on conclusion:** None; reply completion must precede close
**Effect on mechanism:** Narrowed from encode ordering to write-completion ordering
**Author / witness:** Priya Nwosu / Mira Chen

## Epistemic diff

| Layer | Before correction | After correction |
|---|---|---|
| Observation | Empty owner response; close appeared before encode in internal trace | Empty owner response; encode call before close; callback incomplete at close |
| Interpretation | Socket was destroyed before encoding/writing | Socket was destroyed after encode call but before write completion |
| Conclusion | Shutdown must follow acknowledgement completion | Unchanged |
| Projection | Prefer explicit reply-then-close primitive | Unchanged; evidence is now stronger |

## Artifact manifest

| Artifact ID | Parent | Kind | Path | Integrity | Captured by | Handling |
|---|---|---|---|---|---|---|
| A-0249-01 | OBS-0249.01–02 | external measurement CSV | [`external-observer.csv`](../attachments/2026-09-04-external-observer.csv) | specimen / unhashed | Priya Nwosu | public-safe |
| A-0248-01 | prior observation | internal raw trace | [`stop-trace.txt`](../attachments/2026-08-30-stop-trace.txt) | specimen / unchanged | AI coordinator | internal; synthetic IDs |

## Question ledger

| ID | State before | State after | Basis |
|---|---|---|---|
| Q-0248-02 | Open: can trace hooks perturb ordering? | Closed: hooks were not required for failure, but trace semantics were too coarse | OBS-0249.01 |
| Q-0248-01 | Open: explicit lifecycle primitive? | Open | Correction strengthens, but does not implement, the API case |

## Closure

**Conclusion:** Append COR-0249-01. Preserve LN-0248. The original lifecycle
conclusion remains supported; the mechanism is corrected to distinguish encoder
invocation from completed socket write.
**Signed:** Priya Nwosu + Mira Chen + AI research coordinator
**Timestamp:** 2026-09-04T16:44:00+04:00
**Witness:** Mira Chen reviewed the epistemic diff and artifact linkage
**Next entry:** unresolved; Q-0248-01 remains open


## Specimen supplement — 2026-09-06

<a id="COR-0249-DATA"></a>

**COR-0249-DATA · source coverage clarification.** The original narrative above
is retained. The original CSV is a short illustrative excerpt, not a complete
run export, and the named test/run groups are not supplied executable artifacts.
The [aggregate specimen](../attachments/2026-09-06-correction-aggregate.csv)
now enumerates every narrative group. Codex constructed it on 2026-09-06 from
those already-synthesized counts; it is not recovered experimental evidence.
No per-run timings or historical measurements were invented to fill the gaps.

<a id="ART-0249-AGG"></a>

**ART-0249-AGG:** Aggregate fixture linked above; parents OBS-0249.01–02;
Codex / narrative transcription / retained / unhashed public specimen. The
original CSV remains unchanged and is retained as an excerpt. The current HTML
presentation uses this declared aggregate coverage and links stable objects.

**Count clarification:** The correction describes five initial immediate stops,
twenty callback-sequenced runs, and five subsequent controls: 30 observations
across three groups. The original HTML's “25/25 externally observed runs” omitted
the initial group. The current plate displays 30 runs across three groups.


## Scope amendment — 2026-09-06

[COR-0251-01](2026-09-06-instrumentation-scope-correction.md#COR-0251-01)
narrows the Q-0248-02 closure: hooks are not necessary for the reported failure;
whether they perturb ordering remains open. Original text above is preserved.
This historical specimen is not the current full-format authoring reference;
use [LN-0251](2026-09-06-instrumentation-scope-correction.md) for the current
complete anatomy, source scope, ownership and verification fields.
