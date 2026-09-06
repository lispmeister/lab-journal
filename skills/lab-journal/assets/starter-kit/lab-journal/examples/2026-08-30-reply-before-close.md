# The reply must leave before the room goes dark

| Field | Value |
|---|---|
| Entry ID | LN-0248 |
| Opened | 2026-08-30T08:42:00+04:00 |
| Closed | 2026-08-30T11:26:00+04:00 |
| Status | Witnessed example |
| Project / phase | QONTXT / shutdown ordering follow-up |
| Authors | Mira Chen (research lead), AI research coordinator |
| Operators | AI research coordinator |
| Independent observer | Jules Okafor |
| Witness | Mira Chen |
| Environment | Linux; Node.js 25.2.1; Bare 1.31.0 |
| Sensitivity | Internal; synthetic identifiers; no secrets |
| Reconstruction | Contemporaneous example record |

> **Illustrative record.** This synthesized example demonstrates the expanded
> notebook method. Its commands, IDs, people, and measurements are specimens,
> not claims about the current QONTXT repository.

## Question and success condition

Does `system.stop` guarantee that its acknowledgement becomes observable before
shutdown closes the owner socket?

Success requires thirty repeated owner-RPC stops to return the complete
acknowledgement before the socket close event. A timeout or empty response is a
failure even if the service eventually stops.

## Fast field notes

| Time | Note |
|---|---|
| 08:47 | baseline command written before tracing; expect ack then EOF |
| 09:18 | empty response again. trace looks backwards: close 1 ms before encode |
| 09:24 | do not call it causal yet—instrument timestamps may be misleading |
| 09:51 | discriminating seam: barrier after write callback, not a sleep |
| 10:36 | deferral passes 30/30; explicit callback barrier also passes 30/30 |
| 10:49 | deferral is evidence of ordering bug, not the final contract |

## Bench record

### OBS-0248.01 · 2026-08-30T09:18:14+04:00

**Recorded by:** AI research coordinator
**Operator:** AI research coordinator
**Independent observer:** Jules Okafor
**Question:** What does the owner observe during the current stop path?
**Setup:** One owner socket; request ID 41; trace hooks on request, stop, close,
encode, and write; no artificial delay.
**Action:** Invoke `system.stop` once after the node reports ready.
**Raw observation:** Client reports `empty admin response`. Trace orders
`stop.begin`, `socket.close`, `reply.encode`, then a failed write.
**Interpretation at the time:** Shutdown ordering is a plausible cause, but
trace timestamp precision may be insufficient.
**Confidence:** Tentative.
**Evidence:** [`A-0248-01`](../attachments/2026-08-30-stop-trace.txt).
**Next move:** Run a discriminating test that controls reply completion rather
than adding an arbitrary delay.

### OBS-0248.02 · 2026-08-30T09:51:00+04:00

**Question:** Does waiting for the reply write callback eliminate the empty response?
**Hypothesis before run:** If socket close races reply completion, a write
barrier will make acknowledgement observable without changing the payload.
**Setup:** Same request and trace points. Replace immediate shutdown with a
test-only barrier released by the reply write callback.
**Raw observation:** Ten of ten runs return `{ "stopping": true }`; close is
recorded after callback completion.
**Interpretation at the time:** The result supports an ordering race and
falsifies malformed response encoding as the primary explanation.
**Confidence:** Supported, not yet final.
**Evidence:** `rpc-stop-barrier.spec.mjs`, specimen run group `R-0248-B`.
**Next move:** Compare the small event-loop deferral with an explicit
reply-then-close production API.

### OBS-0248.03 · 2026-08-30T10:36:00+04:00

**Question:** Is one event-loop deferral repeatable enough to close the defect?
**Hypothesis before run:** Deferral should move close after encode in all thirty
specimen runs, but it does not itself express the protocol guarantee.
**Raw observation:** Immediate stop fails three of three. Deferred stop passes
thirty of thirty. Explicit callback sequencing also passes thirty of thirty.
**Interpretation at the time:** Deferral demonstrates the race and is a bounded
repair; explicit sequencing remains the stronger long-term contract.
**Confidence:** Measured.
**Evidence:** [`A-0248-02`](../attachments/2026-08-30-stop-ordering.csv).
**Next move:** Close the immediate defect; retain explicit sequencing as open
question `Q-0248-01`.

## Thinking sketches

### F-0248-01 — Working model

- Kind: conjecture
- Created: 2026-08-30T09:27:00+04:00
- Author: AI research coordinator
- Supported by: OBS-0248.01 only
- Superseded by: F-0248-02

The first model proposed that shutdown destroyed the socket before the reply
could leave. It was deliberately drawn before the discriminating test.

### F-0248-02 — Measured sequence

- Kind: measured model
- Created: 2026-08-30T10:41:00+04:00
- Author: AI research coordinator
- Supported by: OBS-0248.02–03 and A-0248-02
- Supersedes: F-0248-01

The measured model retains the same mechanism but narrows the claim: the
callback barrier and deferral both change observable ordering; only the callback
barrier directly expresses the desired guarantee.

## Synthesis

The owner response was not malformed. Shutdown started while one response was
still in flight and destroyed the only socket before the encoded acknowledgement
could be written. A one-turn deferral removed the immediate race in all repeated
specimen runs. It is accepted as the bounded repair, while an explicit
reply-then-close service contract remains follow-up work.

| Epistemic state | Statement |
|---|---|
| Observed | Immediate shutdown produced an empty response and close preceded successful write in the trace. |
| Interpreted | Closing the socket before reply completion was the likely cause. |
| Discriminated | A reply-write barrier made the acknowledgement observable without changing its encoding. |
| Concluded | Stop must sequence shutdown after acknowledgement completion. |
| Projected | Replace the deferral with an explicit service API if the production boundary is refactored. |

## Artifact manifest

| Artifact ID | Parent | Kind | Path | Integrity | Captured by | Handling |
|---|---|---|---|---|---|---|
| A-0248-01 | OBS-0248.01 | raw trace | [`stop-trace.txt`](../attachments/2026-08-30-stop-trace.txt) | specimen / unhashed | AI coordinator | internal; synthetic IDs |
| A-0248-02 | OBS-0248.03 | measurement CSV | [`stop-ordering.csv`](../attachments/2026-08-30-stop-ordering.csv) | specimen / unhashed | Mira Chen | public-safe specimen |

## Open questions

| ID | Question | Raised from | Needed evidence | State |
|---|---|---|---|---|
| Q-0248-01 | Should the service expose an explicit reply-then-close lifecycle primitive? | OBS-0248.03 | API design plus negative close/re-entry tests | Open |
| Q-0248-02 | Can trace hooks perturb this sub-millisecond ordering? | OBS-0248.01 | run with external socket observer | Open |

## Corrections and later annotations

None at signing. Later correction record:
[`LN-0249`](2026-09-04-timeout-was-witness.html).

## Closure

**Conclusion:** The immediate defect is supported by discriminating evidence and
the bounded repair is repeatable. The broader lifecycle API question remains open.
**Signed:** Mira Chen + AI research coordinator
**Timestamp:** 2026-08-30T11:26:00+04:00
**Witness:** Jules Okafor independently observed groups `R-0248-A/B`
**Next entry:** `2026-09-04-timeout-was-witness.md`


## Specimen supplement — 2026-09-06

<a id="COR-0248-DATA"></a>

**COR-0248-DATA · source coverage clarification.** The original narrative above
is retained. The original CSV is a short illustrative excerpt, not a complete
run export, and the named test/run groups are not supplied executable artifacts.
The [aggregate specimen](../attachments/2026-09-06-experiment-aggregate.csv)
now enumerates every narrative group. Codex constructed it on 2026-09-06 from
those already-synthesized counts; it is not recovered experimental evidence.
No per-run timings or historical measurements were invented to fill the gaps.

<a id="ART-0248-AGG"></a>

**ART-0248-AGG:** Aggregate fixture linked above; parents OBS-0248.01–03;
Codex / narrative transcription / retained / unhashed public specimen. The
original CSV remains unchanged and is retained as an excerpt. The current HTML
presentation uses this declared aggregate coverage and links stable objects.

**Role clarification:** The identity table calls Mira Chen the witness while the
closure names Jules Okafor as independent observer of run groups. These are
separate stated roles; the current plate labels the closure as independent
observation rather than silently reassigning the identity-table witness.


## Scope amendment — 2026-09-06

[COR-0251-01](2026-09-06-instrumentation-scope-correction.md#COR-0251-01)
narrows the Q-0248-02 closure: hooks are not necessary for the reported failure;
whether they perturb ordering remains open. Original text above is preserved.
This historical specimen is not the current full-format authoring reference;
use [LN-0251](2026-09-06-instrumentation-scope-correction.md) for the current
complete anatomy, source scope, ownership and verification fields.
