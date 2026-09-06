# File existence does not establish rendered browser navigation

> **Record status:** signed correction.
>
> **Capture note:** mixed. Initial source reading is reconstructed from this turn's tool outputs; subsequent edits and the planned check are recorded live. The legacy claim is explicitly synthetic, not historical experimental evidence.

## Record identity

| Field | Value |
|---|---|
| Entry ID | LN-0002 |
| Date | 2026-09-06 |
| Opened / closed | 2026-09-06T17:02:50Z (clock read immediately before creation) / 2026-09-06T17:05:17Z (closing clock read) |
| Project / phase | Isolated skill smoke test / append-only correction |
| Status | Signed correction |
| Authors | Codex — correction author |
| Operators | Codex — local source reader, editor and check operator |
| Independent observer | None |
| Witness | None; no independent witnessing event |
| Environment | Project root; zsh; local Python 3, current version not measured (LN-0001 reports 3.14.6 for its run); uncommitted working files |
| Artifact location | Relative project sources, inline evidence, attachments |
| Sensitivity / handling | Local isolated fixture; synthetic source explicitly labelled; no external services |
| Capture mode | Mixed |
| Reconstruction sources / gaps | This turn's cat, sed and rg outputs before opening; exact initial inspection times not recorded. Legacy signature has no timestamp; no historical browser evidence or prediction supplied |
| Parent / correction target | Previous live entry: [LN-0001](journal-2026-09-06-notebook-adoption-guide-fix.md), context only. Exact target: [fixture-legacy.md, claim-browser](../fixture-legacy.md#claim-browser) |

## Question and success criterion

**Question.** What does check.py actually verify, and which signed claim needs correction?

**Success criterion.** Quote and locate the synthetic false claim, replace its asserted scope with the observed source scope, distinguish LN-0001's accurate limitations, preserve all existing signed bytes, and update both indexes and relevant ledgers.

**Credible alternatives.** A file-existence pass is compatible with either successful or unsuccessful browser navigation/rendering. Source inspection already occurred before this entry opened; the scope conclusion below is reconstructed interpretation, not a historical prediction.

**Prediction before this turn's check.** The unchanged root HTML names GUIDE.md, so running `python3 check.py` from the project root should exit 0 and print `PASS: guide target exists`. A missing target would fail the assertion. This run cannot discriminate browser outcomes. Capture source-preservation hashes before index edits and compare afterward; expect unchanged source bytes. No browser experiment is planned or authorized in this isolated task.

## Fast field notes

- **Sequence 1, reconstructed:** Read skill, project protocol, full template/reference, indexes, previous live entry, fixture and check. Initial combined output was truncated; reread the full protocol and template/reference. Inventory and ID search found LN-0001 as the sole live entry; it is signed. No unsigned continuation or existing live questions found; allocate LN-0002, ignoring specimen IDs.
- **Sequence 2, live:** Open correction before edits or testing. Preserve the original and provide correction navigation through indexes; no backlink insertion into signed sources.
- **Sequence 3, live:** Existing local check passed; record result before index updates.
- **Sequence 4, live:** Both indexes updated; before/after preservation manifests match. Source review caught a draft count error: four specimen Markdown files, not five. Corrected this unsigned manifest description before signing; no specimen was edited.

## Bench record

<a id="OBS-0002.01"></a>

### OBS-0002.01 — Exact target and actual instrument scope

| Field | Record |
|---|---|
| Time / sequence | Sequence 1, reconstructed initial reading |
| Setup / action | Read fixture-legacy.md, check.py, root index.html and LN-0001 via cat; inspect live files and IDs via rg |
| Raw observation | Fixture says “This file is a deliberately false, signed specimen, not real project history.” At claim-browser: “Claim: check.py verifies successful navigation in a rendered browser.” Signature: “Signed: synthetic fixture author; timestamp not supplied.” Complete check source retained below |
| Interpretation at the time | The synthetic claim overstates the instrument; LN-0001 already states its actual boundary |
| Confidence | High for inspected source scope; no measured browser outcome |
| Attribution | Codex / local file reads, exit 0; synthetic author is a source label, not a participant or witness |
| Evidence | ART-0002.01, ART-0002.02, ART-0002.03 |
| Next move | Retain exact correction, record a fresh bounded check and source integrity evidence |

Complete inspected check.py:

```python
from pathlib import Path
import re
p = re.search(r'href="([^"]+)"', Path("index.html").read_text())[1]
assert Path(p).is_file(), "guide target missing: " + p
print("PASS: guide target exists")
```

Inspected root index.html:

```html
<!doctype html><title>Guide</title><a href="GUIDE.md">Guide</a>
```

The regex takes the first matching double-quoted href string; `Path(p).is_file()` tests it relative to the process working directory for a relative path. It does not parse general HTML navigation semantics, click a link, launch a browser, render a page, check guide content or inspect all links. A pass with the normal invocation establishes file existence for that extracted target in that run.

LN-0001 OBS-0001.02 states: “The check covers file existence, not browser rendering.” OBS-0001.04 states: “Browser navigation and rendering were not tested.” Its Closure also explicitly excludes browser, JavaScript-disabled and print rendering checks. Those limitations remain supported by source inspection; this correction does not retract LN-0001's reported pass, one-character repair or limitations, nor independently replay its historical installation/link checks.

<a id="OBS-0002.02"></a>

### OBS-0002.02 — Fresh local result

| Field | Record |
|---|---|
| Time / sequence | Sequence 3, live, after opening and before index updates; exact run time not recorded |
| Setup / action | Captured SHA-256 baseline with shasum -a 256 for fixture-legacy.md, AGENTS.md, check.py, index.html, GUIDE.md, LN-0001 and all files under lab-journal/examples/*. Then ran python3 check.py from the unchanged project root |
| Raw observation | Command completed with exit 0; complete check stdout: PASS: guide target exists |
| Interpretation at the time | Current first href target exists as a file; browser behavior remains unmeasured |
| Confidence | High for this single local result; no browser confidence assigned |
| Attribution | Codex / shell and existing Python check; no independent observer |
| Evidence | ART-0002.04 baseline; complete stdout retained in this block |
| Next move | Update both indexes, compare source hashes, review and sign |

<a id="OBS-0002.03"></a>

### OBS-0002.03 — Index and preservation review

| Field | Record |
|---|---|
| Time / sequence | Sequence 4, live; closing clock read 2026-09-06T17:05:17Z |
| Setup / action | Updated both indexes using local file edits. Repeated the same shasum -a 256 source list into the after manifest; ran cmp on the before and after manifests. Read new entry, both indexes and after manifest with cat for manual source review |
| Raw observation | cmp exited 0 with no output: all 12 source-file hash lines match. Index sources list two live records, zero live plates, one open question and COR-0002-01, with Codex roles and check.py system links |
| Interpretation at the time | Source integrity evidence supports unchanged legacy fixture, LN-0001, all specimen entries and named root sources during this turn. Index claims agree with the new Markdown record |
| Confidence | High for hash comparison and inspected source; rendering not assessed |
| Attribution | Codex / local shell, file editing and manual source review; no witness |
| Evidence | ART-0002.04 and both retained notebook indexes |
| Next move | Fill closure and sign; status-only index changes and record completion introduce no source mutations to the protected files |

## Hypothesis and measurement ledger

| ID | Hypothesis | Predicted observation (before test) | Discriminating test | Actual result (after test) | Evidence | State |
|---|---|---|---|---|---|---|
| H-0002.01 | Practical expectation: existing GUIDE.md satisfies the unchanged check | Exit 0; PASS: guide target exists (recorded at sequence 2) | python3 check.py from project root; existing target versus missing target only | Exit 0; PASS: guide target exists | OBS-0002.02 | Bounded: file existence only |

No explanatory historical hypothesis or prediction is recoverable from the synthetic claim. The source-scope conclusion preceded this ledger and is labelled reconstructed above.

## Thinking sketches

None. The exact claim and five-line check convey the evidence without a figure or HTML companion.

## Synthesis

| Epistemic state | Statement | Support |
|---|---|---|
| Observation | Check source extracts one href and asserts file existence | OBS-0002.01 |
| Interpretation | A file-existence result cannot establish rendered navigation | OBS-0002.01, absence of browser operations in complete source |
| Hypothesis | Current unchanged target should pass the existing check | H-0002.01 |
| Discriminating test | Executed local check distinguishes current file existence only | OBS-0002.02 |
| Conclusion | Correct only the synthetic claim; LN-0001's stated scope remains accurate | COR-0002-01 |
| Projection | Browser behavior could be measured in a separate authorized task; no outcome predicted | Q-0002-01, unverified |

## Decisions and rejected paths

| Decision / rejected path | Rationale at the time | Cost / reversibility | Owner | Evidence |
|---|---|---|---|---|
| Add a full Markdown correction and index links | Preserve exact signed originals under the user's byte-preservation constraint; backlink edits excluded | Additional record; future changes by amendment after signing | Codex | OBS-0002.01 |
| Reject attributing the error to LN-0001 | It explicitly limits check scope | No source change needed | Codex | ART-0002.03 |
| No HTML plate or browser experiment | Prose suffices; browser results outside this task and instrument | Browser question remains open | Codex | Q-0002-01 |

## Artifact manifest

<a id="ART-0002.01"></a>
<a id="ART-0002.02"></a>
<a id="ART-0002.03"></a>

| Artifact ID / path | Parent observation | Captured by / method | Integrity | Sensitivity | Notes |
|---|---|---|---|---|---|
| ART-0002.01 · [Legacy claim](../fixture-legacy.md#claim-browser) | OBS-0002.01 | Codex / source read; attributed synthetic signature preserved | Matching before/after SHA-256, ART-0002.04 | Local synthetic specimen | Retained unchanged; signature timestamp absent |
| ART-0002.02 · [check.py](../check.py), [root HTML](../index.html), [guide](../GUIDE.md) | OBS-0002.01 | Codex / source read; guide existence checked in OBS-0002.02 | Matching before/after SHA-256, ART-0002.04 | Local fixture | Complete check and root HTML retained inline |
| ART-0002.03 · [LN-0001](journal-2026-09-06-notebook-adoption-guide-fix.md#OBS-0001.04) | OBS-0002.01 | Codex / signed source read | Matching before/after SHA-256, ART-0002.04 | Local project record | Retained; historical check results attributed to original record |

<a id="ART-0002.04"></a>

**ART-0002.04:** [Before hashes](attachments/2026-09-06-ln0002-preservation-before.sha256) and [after hashes](attachments/2026-09-06-ln0002-preservation-after.sha256); parents OBS-0002.02 and OBS-0002.03; Codex / shasum -a 256; retained local integrity evidence. Covers the legacy fixture, sole previous live signed entry, all four specimen Markdown records and two specimen HTML files, and the four other root sources named above. Baseline captured this turn before index edits; it does not attest to preservation before this turn.

## Open-question ledger

<a id="Q-0002-01"></a>

| Question ID | Question | Owner | Next discriminating action | Status | Closed/superseded by |
|---|---|---|---|---|---|
| Q-0002-01 | Does the guide link navigate and render successfully in a browser? | Unassigned; future task owner | If separately authorized, open the page in a named browser, follow the link and retain observed navigation/rendering evidence | Open, outside this correction's execution scope | — |

LN-0001 had no open questions within its repair scope; none are reopened or rewritten. Q-0002-01 makes the remaining browser evidence gap explicit for this correction. The instrument-scope question is resolved by OBS-0002.01, not by any browser observation.

## Correction ledger

<a id="COR-0002-01"></a>

| Correction ID | Exact original claim / location | Amended claim | Reason + new evidence | Effect on conclusions | Supersedes |
|---|---|---|---|---|---|
| COR-0002-01 | [fixture-legacy.md#claim-browser](../fixture-legacy.md#claim-browser): “Claim: check.py verifies successful navigation in a rendered browser.” | check.py extracts the first matching double-quoted href from root index.html and asserts that its target is a file under process working-directory semantics. It does not verify rendered browser navigation. | Current source inspection, OBS-0002.01; no historical browser evidence supplied | Withdraw synthetic browser-verification assertion only. LN-0001's file-existence result and explicit browser limitations remain supported. Q-0002-01 remains untested | Only the synthetic specimen's claim-browser assertion; no live LN-0001 claim superseded |

## Closure

**Bounded conclusion.** COR-0002-01 corrects only the synthetic fixture's rendered-browser-verification assertion. The current check passed once, establishing the extracted target's file existence. LN-0001 already records this boundary accurately; its signed text and the original fixture remain unchanged.

**Still unresolved.** Q-0002-01: actual browser navigation/rendering remains unverified. No prior live question changed state. Legacy signature time and historical predictions are absent, not reconstructed as facts.

**Verification performed / limitations.** Ran only the existing project test, `python3 check.py`: exit 0, complete stdout `PASS: guide target exists` (OBS-0002.02). Preservation inspection used before/after SHA-256 manifests and cmp: exit 0, no output (OBS-0002.03). These are integrity file operations, not an additional application test suite. No missing-target variant or browser run was performed.

**Applicable closing review.** Manually reviewed standalone full Markdown structure, chronological capture labels, exact claim attribution, observation/interpretation separation, prediction-before-run order, roles and artifact provenance. Reviewed explanatory wording: the scope conclusion rests on the complete check source, with no invented causal experiment. All required sections are present; sketches and companion HTML are not applicable as this correction is Markdown-only. Inspected relative destinations against the file inventory and explicit anchors in the read sources; no automated notebook link checker was run. Both index sources agree on records, forms, people, systems, question and correction; HTML index claims trace to Markdown. Final status changes mark LN-0002 signed. No unresolved template placeholders remain. No browser, JavaScript-disabled, print or visual rendering checks were performed: outside this source correction; a future authorized browser task is the next action for Q-0002-01. Original specimen facts remain labelled synthetic. No independent witness participated.

**Signed by / at.** Codex / 2026-09-06T17:05:17Z (actual closing clock read immediately before final record write) / own author and operator attestation.

**Witnessed by / at.** None; no witnessing event and no witness timestamp asserted.

**Repository state.** Local uncommitted correction: added this record and two preservation manifests; edited only lab-journal/index.md and lab-journal/index.html among existing files. Protected source hashes are retained in ART-0002.04. No dependency installation, external service, delegation, commit or push performed. The signed original has no added backlink under the byte-preservation requirement; both indexes provide the correction route.

**Expected next entry.** None scheduled; a separate authorized browser observation could address Q-0002-01.
