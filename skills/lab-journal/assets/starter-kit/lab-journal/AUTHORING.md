# Authoring the layered lab notebook

This is the operating contract for a human or LLM creating an append-only
entry. Read the paired experiment [`LN-0248`](examples/2026-08-30-reply-before-close.html)
and correction [`LN-0249`](examples/2026-09-04-timeout-was-witness.html) before
authoring. Their data is explicitly illustrative; their record structure is the
standard.

Authoring is a file operation. It requires no server, package manager,
validator, generator, build step, or network connection. Use the agent's normal
file tools to copy the templates and write Markdown and HTML directly.

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

Audit the words **because**, **caused**, **therefore**, **proves**, **always**,
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

## Required Markdown anatomy

Copy [`TEMPLATE.md`](TEMPLATE.md). Preserve these sections even when
their content is “none” or “not recorded”:

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
- expose `all`, `bench`, `synthesis`, and `plate` reading lenses while leaving
  every layer visible when JavaScript is disabled;
- place a `jump-evidence` link to `#bench` directly after record metadata so a
  narrow-screen reader can reach the first observation in one 44px target;
- include the record identity, artifact manifest, open questions, and closure;
- give meaningful inline SVGs a `<title>` and `<desc>`;
- use ordinary headings, landmarks, tables, visible focus, text status (not
  color alone), narrow-screen reflow, and print styles;
- wrap genuinely wide evidence tables in a keyboard-focusable
  `matrix-wrap scroll-x` region with a concise label; this invokes the shared
  persistent mobile scroll cue and sticky first column;
- declare when data or identities are synthesized for demonstration.

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

1. links to the original in both forms;
2. quotes or precisely locates the smallest claim being changed;
3. preserves the original claim visibly;
4. gives new observations their own stable IDs and provenance;
5. states what changes, what remains supported, and which questions move state;
6. adds a correction ID such as `COR-0249-01` to the master index;
7. links both directions when repository policy permits amending the earlier
   page with a non-destructive “corrected by” notice.

See [`LN-0249`](examples/2026-09-04-timeout-was-witness.md): its external
observation narrows a causal claim without erasing the earlier result.

## Static file and link rules

```text
lab-notebook/
├── index.html
├── AUTHORING.md
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
- Update the index with every Markdown record and only the HTML plates that
  exist. Also index stable IDs, people/roles, systems, questions, corrections,
  and status so the archive can be navigated by more than date.

## LLM workflow

1. Read this contract, `TEMPLATE.md`, the master index, the previous entry,
   related open questions, and repository instructions.
2. Choose the next filename and stable IDs. Create the canonical Markdown first.
3. Fill identity, question, known context, hypotheses, and success criteria
   before work when the chronology permits.
4. Append field notes and observation blocks in event order. Never normalize an
   earlier belief after learning the result.
5. Before each test, record the hypothesis, predicted observation, alternatives,
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
10. Sign only after all unknown witness fields are explicitly marked. No command
    is required to close the entry.

## Copy/paste prompt for an LLM

```text
Create the next append-only lab-notebook entry in this repository.

Read AUTHORING.md, TEMPLATE.md, index.html, the previous entry, related
open questions, and repository instructions. Create canonical Markdown first.
Use stable IDs for observations, artifacts, questions, figures, and corrections.
Preserve event order and contemporaneous wording. Never invent missing facts;
mark unknowns and identify reconstructed passages and their sources.

Keep observation, interpretation, hypothesis, discriminating test, conclusion,
and projection explicitly separate. Record hypotheses and predictions before
results when possible. Cite every measured or causal claim to an observation and
artifact. Preserve failures and rejected paths. Audit because/caused/therefore/
proves/always/never. Leave unresolved questions open with owners and next tests.

Create same-basename HTML only when a visual relationship materially helps. If
created, include all/bench/synthesis/plate lenses, record identity, provenance,
artifact and question ledgers, accessible SVG metadata, closure, and the source-
link back to Markdown. All content must remain visible without JavaScript and all
assets must work from file:// with no network.

Use the shared dense bench-sheet visual language. Keep entry titles no larger
than 30px on desktop / 26px on mobile and section headings no larger than 21px /
18px. Preserve 13–16px body copy, compact evidence through spacing and grids,
44px narrow-screen controls, warm paper, thin rules, restrained status color,
and complete print output. Do not add oversized heroes or decorative surfaces.

Never silently rewrite signed history. Corrections are new records that preserve
the original claim, identify the exact amendment and new evidence, and state what
does and does not change. Update chronological and thematic index lenses. Run
the quality checklist and report created files, evidence forms, reconstruction
gaps, open questions, and witness status. Author the files directly; do not
introduce or require a generator, validator, server, or build tool.
```

## Quality gate

Do not sign until every answer is yes:

- Can a new researcher understand the work from Markdown alone?
- Is the chronology intact, including mistaken beliefs and failed work?
- Are observations distinguishable from interpretations and projections?
- Do causal claims cite discriminating evidence rather than sequence alone?
- Are roles, capture mode, reconstruction, sensitivity, and artifact provenance explicit?
- Does each sketch say whether it is conjectural, measured, or corrective?
- Are open questions and corrections stable, linkable notebook objects?
- Does every HTML claim trace to Markdown or a linked artifact?
- Does the plate work from disk, without JavaScript or the network, and print legibly?
- Are all local links and referenced assets present, relative, and truthful?
- Is the index truthful and complete across date, people, system, question, and correction lenses?
