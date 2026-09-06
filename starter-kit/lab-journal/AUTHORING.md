# Authoring the layered lab notebook

This is the operating contract for a human or LLM creating an append-only
entry. On first use, read the Markdown example matching the work: the
[compact routine record](examples/2026-09-06-routine-link-fix.md),
[current full reference and scope correction](examples/2026-09-06-instrumentation-scope-correction.md). Read companion HTML only
when authoring a plate. The older LN-0248/LN-0249 pair is retained history with dated amendments, not a
complete current-format reference. Examples demonstrate structure; never reuse their people,
commands, measurements, timestamps or conclusions as project facts.

Authoring is a file operation. It requires no server, package manager,
validator, generator, build step, or network connection. Use the agent's normal
file tools to copy the templates and write Markdown and HTML directly.

## Start, resume, and finish

The project adapter triggers recording for work that changes code,
specifications, experiments, or design decisions. Also record work explicitly
requested as a journal entry. A read-only question need not create a record
unless project instructions or the user require one. Recording work does not
by itself authorize experiments, installations, publication, or other actions.

- **Start before changing or testing:** Read project instructions, this guide,
  both indexes, the latest live entry and relevant questions. Choose the compact
  or full template below. Check live files as well as indexes for the next unused
  `LN-NNNN`; specimen IDs under `examples/` do not set the live sequence. Use a
  unique `journal-YYYY-MM-DD-short-title.md` basename; never overwrite a collision.
- **Resume:** Continue an unsigned entry only when it covers the same ongoing
  work. Read its existing observations and predictions first, and append a
  resumption note identifying the current state and any gaps. A signed entry or
  a new scope gets a new linked entry. Coordinate ID allocation if multiple
  writers share the notebook; do not renumber another writer's records.
- **Capture as work happens:** Write the question, success criterion and planned
  check before its result. Append consequential actions, failed attempts,
  surprises, changes of approach and results before moving to the next stage.
  Preserve evidence-bearing notes; omit repetitive noise and secrets.
- **Retrospective request:** Write now with the actual authoring time, name the
  sources, and distinguish event times from capture time. An expectation first
  written after the result is a retrospective interpretation, not a prediction.
  Use sequence numbers when clock times were not recorded.
- **Finish or hand off:** A record can close with failed tests, an inconclusive
  result, or open questions. State the work's actual status, what was checked,
  what remains unverified and the next action. If interrupted, leave it open
  with a handoff note; do not fabricate a signature or successful completion.

While an entry is open, fill previously pending results and closure fields;
retain earlier predictions, observations and beliefs. If one needs correcting,
append a clearly identified amendment. After signing, use the correction
protocol below. Keep the visible final status consistent with the closure, or
append an explicit superseding status if earlier text must remain untouched.

## Adapting an existing record to HTML

Keep the original Markdown unchanged and link it as the canonical source.
Record the source revision, retrieval date and hash when available. Attribute
original signatures; do not sign again on behalf of the original authors.
Label new summaries, selected excerpts and visualizations as retrospective
adaptations, and distinguish missing metadata from negative findings.

Retain source inconsistencies visibly; put corrections or review annotations
in a separately dated record. Do not turn a source recommendation into a result,
a historical cost estimate into current pricing, or a combined commit/witness
field into a witness identity. Reading lenses organize content; they do not prove
its epistemic status. When a source section mixes observation and analysis, label
that mixture or separate attributed passages without silently rewriting them.

A short routine record normally stays Markdown-only. If a reading view is
explicitly requested, a simple HTML page with source attribution is enough;
full layered-plate controls and an invented diagram are not required for that
reading view. Use the full plate only when an evidence relationship benefits.

## The record has three layers

1. **Bench record — what happened.** Contemporaneous fragments, observations,
   commands, measurements, sketches, artifacts, people, and clock times. Keep
   the awkward sequence. Do not retrofit a clean story.
2. **Synthesis — what it means.** Markdown is mandatory and canonical for this
   durable narrative. It must stand alone and distinguish observation,
   interpretation, hypothesis, discriminating test, conclusion, and projection.
3. **Plate — what is easier to see.** A same-basename HTML companion is optional.
   Use it for topology, chronology, visual comparison, annotated images, or
   epistemic change. It may reorganize facts but never contradict, sanitize, or
   replace the Markdown.

This layering borrows the most useful habits of historical notebooks: the
sequence and visual thinking of [Leonardo's notebooks](https://www.bl.uk/collection-items/the-codex-arundel),
the evolving conjectures in the [Newton Project](https://www.newtonproject.ox.ac.uk/),
Faraday's numbered experimental diary at the [Royal Institution](https://www.rigb.org/explore-science/explore/collection/faradays-diary),
Darwin's question-led notebooks at [English Heritage](https://www.english-heritage.org.uk/visit/places/home-of-charles-darwin-down-house/history/collection/darwins-notebooks/),
and the witness, drawing, and provenance practices visible in the
[Bell papers](https://www.loc.gov/collections/alexander-graham-bell-papers/about-this-collection/),
[Edison papers](https://edisondigital.rutgers.edu/),
[Curie papers](https://gallica.bnf.fr/), and
[Pauling notebooks](https://scarc.library.oregonstate.edu/coll/pauling/rnb/).
The template adopts the habits, not their page styling.

## Epistemic vocabulary

Use these labels literally. They prevent a later reader—or an LLM—from turning
a plausible sequence into a proved cause.

| Label | Meaning | Acceptable form |
|---|---|---|
| Observation | Directly sensed or captured | “The callback was absent from trace A.” |
| Interpretation | Meaning assigned at that time | “The owner may have closed too early.” |
| Hypothesis | Falsifiable proposed explanation | “If close precedes completion, delaying close will preserve the reply.” |
| Discriminating test | Test that separates live hypotheses | Change one ordering boundary and observe from an independent point. |
| Conclusion | Smallest claim supported by the evidence | “Shutdown must follow acknowledged write completion in this path.” |
| Projection | Expected consequence not yet observed | “The same rule may apply to reconnect.” |

For deliberate implementation or documentation work, a hypothesis may be a
practical expectation (“this change should satisfy this criterion”). If there
is no explanatory hypothesis or meaningful alternative, say why it is not
applicable; do not manufacture scientific claims to fill a template.

Audit explanatory claims using the words **because**, **caused**, **therefore**, **proves**, **always**,
and **never**. Each requires a cited observation and a test that rules out a
credible alternative. Otherwise downgrade the wording.

## Required record identity

Every Markdown entry begins with a stable identity table containing:

- entry ID, ISO date, opened/closed times with timezone, status, project/phase;
- authors, operators, independent observers, and witnesses, with roles explicit;
- environment and instrument versions that affect reproduction;
- sensitivity/handling and artifact location;
- capture mode: `contemporaneous`, `reconstructed`, or `mixed`;
- reconstruction sources and gaps when the record was not written live;
- parent entry and exact correction target when applicable.

Never invent a timestamp, participant, command, result, or rationale. Mark it
`unknown`, `[not recorded]`, or reconstructed from a named source. A correction
has its own authorship and time; it does not inherit authority invisibly.

A user's request, automated test, or the authoring agent itself is not an
independent witness. Attribute observations to their actual source. Use `none`
or `not recorded` when no observer or witness participated. Sign only for your
own role; a requested human witness stays pending until actually provided.

## Evidence that supports a record

A result must let a later reader determine what happened and how far it applies.
For each material test or inspection, retain the relevant input/setup, exact
command or inspection method, environment/state, actual outcome (including exit
status when available), and an output excerpt or durable artifact link. State
sample size and exclusions for aggregates. “Tests passed” alone is insufficient;
name the checks and their scope. Do not imply a manual inspection was executed
as an automated test, or a test was run when it was only proposed.

Small outputs, diffs and observations may be retained inline and cited by ID;
there is no requirement to create a separate log file for every command. Mark
partial, external, unavailable or redacted evidence and explain what that limits.
Do not retain credentials or sensitive raw data just to make a record complete.
For unavailable checks, record the reason and next action rather than inventing
results. The notebook requires no tools of its own; the project's normal build,
test and validation requirements still apply to the underlying work.

## Choose the record size

Use [`COMPACT-TEMPLATE.md`](COMPACT-TEMPLATE.md) for a routine, bounded change
with one question and a small evidence set. See the complete
[Markdown-only example](examples/2026-09-06-routine-link-fix.md).
Use [`TEMPLATE.md`](TEMPLATE.md) for multiple hypotheses, experiments, substantial
decisions, or a correction. Expand a compact entry if the work becomes complex.
Both paths preserve identity, predictions before results, observations separate
from interpretations, evidence, decisions, unresolved questions, and signature.
A compact record combines these fields rather than filling unused sections.
Repository maintainer instructions may require the full template.

## Full Markdown anatomy

Copy [`TEMPLATE.md`](TEMPLATE.md). In a full record preserve these sections even
when their content is “none” or “not recorded”:

1. **Question and success criterion** — written before work when possible.
2. **Fast field notes** — timestamped fragments retained verbatim; append only.
3. **Bench record** — repeatable `OBS-<entry>.<nn>` blocks containing setup, raw
   observation, interpretation-at-the-time, confidence, attribution, evidence,
   and next move.
4. **Hypothesis and measurement ledger** — hypothesis and prediction before the
   test, actual result afterward, with an evidence pointer.
5. **Thinking sketches** — each figure states ID, kind (`conjecture`, `measured`,
   `corrective`), creator, creation point, evidence support, and what it
   supersedes. Tentative diagrams must look and read as tentative.
6. **Synthesis** — a compact epistemic table using the vocabulary above.
7. **Decisions and rejected paths** — rationale, cost, reversibility, owner.
8. **Artifact manifest** — stable ID/path, parent observation, capturer, method,
   integrity/checksum when available, sensitivity, and notes.
9. **Open-question ledger** — stable IDs, owner, next discriminating action,
   status, and the later entry that closes or supersedes each question.
10. **Correction ledger** — exact original claim, amended claim, reason,
    evidence, effect on conclusions, and supersession relationship.
11. **Closure** — bounded conclusion, unresolved questions, signatures/witness,
    commit or state identifier, and expected next entry.

An entry may close while questions remain open. That is a useful result, not a
defect to conceal.

## Creating the optional HTML plate

Create a plate only when a visual form answers a real reading question faster
than prose. Use one to three primary forms, not a card for every paragraph.

| Reading question | HTML form |
|---|---|
| What did we know at each moment? | Chronology rail or observation stack |
| Which event is observed versus inferred? | Layered evidence map |
| Where does the causal boundary move? | Before/after or corrective SVG |
| What was predicted and measured? | Comparison table with restrained plot |
| How did a conjecture evolve? | Paired conjecture/measured sketches |
| Which failures form a family? | Fault atlas |
| Who captured, interpreted, or witnessed it? | Role and provenance ledger |
| What remains unresolved? | Stable question cards linked across entries |

Every new layered plate must:

- link back to its same-basename Markdown using `class="source-link"`;
- use the shared `print-button` control without an inline click handler. It
  requests browser printing and exposes fallback instructions; this does not
  prove a print dialog opened or a PDF was saved. Test clicking the control
  separately from print layout. Optional saved-PDF links must identify retained
  snapshots and point to actual local files, not promise a generated download;
- expose `all`, `bench`, `synthesis`, and `plate` reading lenses while leaving
  every layer visible when JavaScript is disabled;
- place a `jump-evidence` link to `#bench` directly after record metadata so a
  narrow-screen reader can reach the first observation in one 44px target;
- include the record identity, artifact manifest, open questions, and closure;
- give meaningful inline SVGs a `<title>` and `<desc>`; use semantic reflowing
  sequences (`evidence-flow`, `flow-steps`) when labels would shrink below 13px;
- put explicit stable `id` anchors on observations, questions, figures, artifacts,
  and corrections and use ordinary relative links to cite them; add matching
  `<a id="OBS-0123.01"></a>` anchors in Markdown when exact cross-form links help;
- keep dated correction and specimen notices outside filtered layers; contents
  and evidence links must reveal their targets even when another lens is active;
- replace instructional section introductions with findings or remove them;
  template comments are author guidance, not finished-record content;
- use ordinary headings, landmarks, tables, visible focus, text status (not
  color alone), narrow-screen reflow, and print styles;
- wrap genuinely wide evidence tables in a keyboard-focusable
  `matrix-wrap scroll-x` region with a concise label; this invokes the shared
  persistent mobile scroll cue and sticky first column;
- declare when data or identities are synthesized for demonstration;
- put logs, code and diffs in a `pre` with `class="code-block"`, `role="region"`,
  `tabindex="0"` and a concise `aria-label`, containing a `code` element. Preserve
  source whitespace; the shared styles scroll on screen and wrap in print;
- give wide comparison matrices explicit column proportions with `colgroup`.
  The supplied `comparison-matrix` class is for nine-column matrices (a 28%
  label column and eight 9% value columns); use proportions appropriate to other
  evidence instead of squeezing long labels into equally narrow columns.

### Accepted dense bench-sheet grammar

The shared stylesheet is the default visual language for the archive and every
plate. Treat the page as a working laboratory instrument: quiet, compact,
print-minded, and optimized for evidence scanning rather than presentation.

| Element | Default constraint |
|---|---|
| Entry title | Maximum 30px desktop / 26px mobile; finding-led, not a generic session label |
| Section heading | Maximum 21px desktop / 18px mobile |
| Ordinary copy | 13–16px; never compress the record by making prose difficult to read |
| Density | Tight section rhythm, compact ledgers, two-column evidence where width permits |
| Surface | Warm paper, muted dark ink, thin neutral rules, restrained green-gray status accents |
| Controls | Squared, textual, visible focus; 44px minimum touch target at narrow widths |
| Mobile task order | Evidence first: compact identity, direct observation jump, then full provenance and chronology |
| Ornament | No oversized hero type, decorative gradients, floating circles, or evidence-free illustration |

Reuse the semantic classes in `PLATE-TEMPLATE.html` and
`assets/notebook.css`. Evidence-specific SVGs, plots, comparisons, and fault
maps may vary internally, but they should inherit the shared scale, surface,
rules, and spacing. A custom plate should feel like another instrument on the
same bench, not a new publication brand.

## Corrections are records, not edits

Never silently repair a signed entry. Create a new dated correction that:

1. links to the original Markdown and its HTML only if that plate exists;
2. quotes or precisely locates the smallest claim being changed;
3. preserves the original claim visibly;
4. gives new observations their own stable IDs and provenance;
5. states what changes, what remains supported, and which questions move state;
6. adds a correction ID such as `COR-0249-01` to the master index;
7. links both directions when repository policy permits amending the earlier
   page with a non-destructive “corrected by” notice.

See the current [LN-0251 reference](examples/2026-09-06-instrumentation-scope-correction.md).
It corrects the scope of the historical LN-0249 question closure while preserving
the original. Failure without instrumentation does not prove no timing perturbation.

## Static file and link rules

```text
lab-journal/
├── index.md
├── index.html
├── AUTHORING.md
├── COMPACT-TEMPLATE.md
├── TEMPLATE.md
├── PLATE-TEMPLATE.html
├── assets/
│   ├── notebook.css
│   └── notebook.js
├── attachments/
├── examples/
├── journal-YYYY-MM-DD-short-title.md
└── journal-YYYY-MM-DD-short-title.html   # optional; same basename
```

- Use relative links only. No `fetch()`, server, framework runtime, CDN, web
  font, absolute filesystem path, or network-dependent asset.
- Keep HTML meaningful with JavaScript disabled; scripts are enhancement only.
- Inline small explanatory SVGs. Link larger images, logs, and datasets from
  both forms using date-prefixed names.
- Keep aggregate claims traceable to complete data or labelled excerpts plus
  a complete aggregate ledger. A synthesized example must say when its data was
  constructed; it must not imply that missing historical measurements were recovered.
- Retain decision-critical evidence before removing temporary working files.
  In each manifest say `retained`, `external`, `excerpt`, or `unavailable`, and
  link retained bytes with a checksum or immutable state when practical.
- Update the index with every Markdown record and only the HTML plates that
  exist. Also index stable IDs, people/roles, systems, questions, corrections,
  and status so the archive can be navigated by more than date. Maintain real
  people, system, question and correction lists in both indexes. Add author,
  system and stable IDs to each HTML row's `data-search` text; list links should
  lead to live records, with demonstration links labelled separately. Counts
  describe all records; printing restores the full catalog regardless of search.

## LLM workflow

1. Read this contract, the appropriate Markdown template, both indexes, the previous entry,
   related open questions, and repository instructions.
2. Follow the start/resume rules above to allocate or continue a record. Create
   canonical Markdown before the work, or explicitly mark retrospective capture.
3. Fill identity, question, known context, hypotheses, and success criteria
   before work when the chronology permits.
4. Append field notes and observation blocks in event order. Never normalize an
   earlier belief after learning the result.
5. Before each material test, record the hypothesis, predicted observation, alternatives,
   and discriminating boundary. Afterward, add the actual result and evidence.
6. Write synthesis only after the bench record. Preserve uncertainty and rejected
   paths. Run the causal-word audit.
7. Decide whether an HTML plate materially helps. If so, copy
   `PLATE-TEMPLATE.html` beside the Markdown using the same basename. Use the
   paired examples as visual grammar while replacing every example fact.
8. Update the archive row and the people/system/question/correction lenses.
9. Review the entry against the quality checklist below. When a browser is
   available and an HTML plate was created, opening it directly from disk is a
   useful visual review, but it is not an authoring requirement.
10. Complete the applicable quality checks, resolve or explicitly record gaps,
    and sign only your own role. Report the Markdown link, optional plate link,
    validation performed, limitations and remaining questions to the user. No
    notebook-specific command is required to close the entry.

## Copy/paste prompt for an LLM

```text
Use lab-journal/AUTHORING.md as the authoring contract for this work. Read the
project instructions and follow its start/resume, evidence and closing rules.
Create or continue the appropriate canonical Markdown record before acting;
if documenting earlier work, identify sources and mark retrospective capture.
Use the compact or full template according to scope. Keep observations separate
from interpretation and preserve predictions, failures and changed beliefs.
Do not invent missing facts, tests or witnesses. Add HTML only when it clarifies
evidence. Update both indexes and report the record links, actual verification,
limitations and open questions. Do not overwrite an existing notebook or add an
authoring toolchain. Project testing requirements still apply.
```

## Quality gate

Review every applicable item. Fix omissions you can resolve from available
evidence. Use `not applicable` with a brief reason for unused forms, and
`not checked` with a reason and next action for unavailable verification. Never
turn either into a pass. Missing historical evidence limits the conclusion;
it need not keep a record open indefinitely. Signing attests to the record's
honest account, not to a successful experiment or completed project.

Record a short verification summary in closure, including limitations. Check:

- Can a new researcher understand the work from Markdown alone?
- Is the chronology intact, including mistaken beliefs and failed work?
- Are observations distinguishable from interpretations and projections?
- Do causal claims cite discriminating evidence rather than sequence alone?
- Are roles, capture mode, reconstruction, sensitivity, and artifact provenance explicit?
- If sketches exist, does each say whether it is conjectural, measured, or corrective?
- Are open questions and corrections stable, linkable notebook objects?
- If HTML exists, does every claim trace to Markdown or a linked artifact?
- If a plate exists and was checked, does it work from disk, without JavaScript or the network, and print legibly?
- Are all local links and referenced assets present, relative, and truthful?
- Is the index truthful and complete across date, people, system, question, and correction lenses?
- Have template placeholders and example facts been replaced with actual facts,
  explicit unknowns or justified non-applicability? Do visible IDs match anchors?
- Does closure state the actual outcome, checks run/not run, remaining questions,
  author signature, witness status and reproducible repository/working state?
