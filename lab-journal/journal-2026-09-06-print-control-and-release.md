# Printing must give readers a usable next step

> **Record status:** open
>
> **Capture note:** mixed. The preceding in-app print-button observation is reconstructed from the prior conversation; implementation and release checks start with this entry.

## Record identity

| Field | Value |
|---|---|
| Entry ID | LN-0014 |
| Date | 2026-09-06 |
| Opened / closed | 2026-09-06T17:24:24Z / open |
| Project / phase | lab-journal / print control and release |
| Status | Open |
| Authors | Codex — implementation and release review |
| Operators | Codex — file, browser and git operations |
| Independent observer | None |
| Witness | None; authorization is not a witnessing event |
| Environment | macOS; Node 24.15.0; beautify-all-the-journals at 88f94d7 plus preceding uncommitted review work |
| Artifact location | Inline evidence and ../docs/reviews/ |
| Sensitivity / handling | Public project evidence; exclude credentials |
| Capture mode | Mixed |
| Reconstruction sources / gaps | Prior conversation's in-app click and unchanged screen; exact click time not retained |
| Parent / correction target | LN-0013 verification scope; print rendering did not verify the native control |

## Question and success criterion

**Question:** Can the print control provide a useful path even when its browser host does not open native printing, and can the reviewed branch pass hosted CI before merging?

**Success:** A click requests native printing and exposes accurate fallback instructions without claiming success. Feedback is accessible, dismissible and absent from printed output. Existing PDF snapshots are linked only where retained. Actual controls and complete gates are checked; hosted checks gate release.

**Alternatives:** Browser-host print support may be absent, or a page handler may fail. A generated PDF verifies layout but cannot distinguish these causes. Host authoring can remain blocked independently of notebook correctness.

## Fast field notes

- 17:24 UTC: current handlers are inline `window.print()` with no feedback. Prior in-app click showed no dialog. CLI GitHub read needs network access.

## Bench record

<a id="OBS-0014.01"></a>

**OBS-0014.01 · reconstructed opening observation.** Prior in-app click on diagnosis Print / PDF left the accessibility tree and page screenshot unchanged. Source inspection now confirms the same direct handler across templates and plates. Interpretation: the reader needs an explicit fallback; this alone does not prove whether the browser host suppresses all printing. Evidence: preceding conversation and current HTML source. Next: add feedback and test real clicks separately from PDF rendering.

## Hypothesis and measurement ledger

| ID | Hypothesis | Prediction before test | Discriminating test | Actual result | Evidence | State |
|---|---|---|---|---|---|---|
| H-0014.01 | Shared print feedback removes a silent dead end | Click exposes instructions even if print is missing, throws, or returns without a dialog | Browser interaction cases plus in-app click | Pending | OBS-0014.01 | Live |
| H-0014.02 | The distribution is ready for hosted verification | Complete local and hosted gates pass on the proposed commit | npm test and GitHub workflow | Pending | Planned | Live |

## Thinking sketches

Not applicable: a short feedback panel needs no explanatory diagram or new plate.

## Synthesis

Observation: print layout and native-dialog behavior are distinct. Interpretation:
the previous gate lacked the latter's user-facing fallback. Conclusion pending
new evidence; no claim that a PDF was saved or a printer received a job.

## Decisions and rejected paths

Use browser printing with always-available conditional instructions after a click.
Reject browser-name sniffing and unreliable inference that a print job succeeded.
Retained sample PDFs are optional labelled snapshots, not dynamically generated
exports. Codex owns the reversible implementation.

## Artifact manifest

ART-0014.01: inline observations in this entry; parent OBS-0014.01; Codex /
source and browser inspection / retained / public. Further artifacts follow.

## Open-question ledger

Q-0007-02 hosted CI, Q-0008-02 Claude access, Q-0013-01 Grok execution and
Q-0010-01 user design acceptance are inherited. User authorized proceeding with
the listed remaining work, including commit, CI and merge; this is not an
independent witness signature. Host access limitations are reported rather than
bypassed. Release outcome follows actual checks.

## Correction ledger

COR-0014-01 narrows LN-0013's verification scope: its generated PDFs and print
media checks did not establish that clicking Print / PDF opens a native dialog
in the in-app browser. Prior results remain retained and valid within their scope.

## Closure

Open pending implementation and release verification.

## Appended implementation evidence

<a id="OBS-0014.02"></a>

**OBS-0014.02 · sequence 2.** Replaced inline handlers with shared print feedback,
labelled saved-PDF links on the three real samples, and documented the distinction
between requesting print, native dialog display, and saved output. First phone
click tests timed out because the existing stylesheet hid print below 650px.
Removed that rule. The focused suite then passed 25 checks with two explicitly
inapplicable native lifecycle cases skipped (Firefox/WebKit). Chromium's real
`window.print()` produced a beforeprint event; mocked no-op and throwing hosts
retained accessible guidance in all three engines. PDF links returned `%PDF-`
file content. These checks do not establish OS dialog appearance or a saved job.

**Actual in-app observation:** Clicked the updated diagnosis control through
the in-app browser. A focused Print options panel appeared with conditional
instructions; its close button removed the panel and restored focus to Print /
PDF. Screenshot inspected. No native dialog appeared. H-0014.01 is supported at
the intended fallback scope. The full gate passed 155 cases and skipped two;
one expected screenshot difference remained because Print / PDF is newly visible
on phones. That actual screenshot was visually inspected before baseline update.

<a id="OBS-0014.03"></a>

**OBS-0014.03 · host and release preflight.** GitHub reports no existing PR for
this branch. Fetched master is 89e63c9, already an ancestor of this branch (zero
master-only commits). Grok's fourth isolated attempt used documented `dontAsk`
mode, explicit command/edit allows, and its workspace sandbox; it again returned
`cancelled` and produced no notebook. Cause remains unknown. Claude's retained
organization-policy 403 has no known access change; no redundant retry or
credential/configuration change was attempted. Compatibility limitations remain
documented. Next: complete gates, commit the accumulated authorized work and
create a PR to observe hosted CI before merging.


**Release sequence:** Complete no-update local gate passed 156 browser checks and four integrity checks, with two native headless lifecycle cases explicitly skipped. Committed accumulated work as `1ef1948` and pushed the branch. The first PR creation request raced the still-running upload and failed with missing head-ref/sha; the push completed successfully afterward. Retry is ordered after confirmed remote ref equality. No alternate branch or force push was used.

<a id="OBS-0014.04"></a>

**OBS-0014.04 · hosted failure and discriminating fix.** PR #1's first hosted
run [34049319359](https://github.com/lispmeister/lab-journal/actions/runs/34049319359)
passed 130 browser cases but failed all 27 Firefox cases at process launch (one
other engine-specific case skipped). Its log says the root container process
has `/github/home` owned by `pwuser`; Firefox rejects another user's home.
This is an actual hosted-environment mismatch, not a page assertion failure.
Prediction before rerun: aligning that existing directory's ownership with the
container process user will allow Firefox to launch. Added a workflow step
that changes only the home directory's ownership, without changing HOME or
disabling Firefox checks/sandbox policy. Hosted rerun is the discriminating test.
