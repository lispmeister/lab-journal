# Lab Journal — Agent Instructions

Every session that changes code, specifications, experiments, or design
decisions must have an append-only journal entry.

## Before changing the project

1. Read `lab-journal/AUTHORING.md`, `lab-journal/TEMPLATE.md`, both indexes,
   the previous entry, and any related open questions.
2. Choose the next stable entry ID from the index.
3. Copy `lab-journal/TEMPLATE.md` to
   `lab-journal/journal-YYYY-MM-DD-short-title.md` (add a discriminator when
   names collide).
4. Fill record identity, session question, alternatives, hypotheses, and success
   criteria before work whenever the chronology permits.

## While working

- Append field notes and stable `OBS-<entry>.<nn>` blocks as events occur.
- Never rewrite an earlier belief after learning the result.
- Keep observation, interpretation, hypothesis, discriminating test, conclusion,
  and projection explicitly separate.
- Record predictions before tests and actual measurements afterward.
- Link claims to commands, commits, issues, logs, images, or date-prefixed files
  in `lab-journal/attachments/`.
- Preserve failed attempts, rejected paths, rollbacks, and uncertainty.
- Never invent timestamps, commands, participants, witnesses, or rationale.
  Mark unknown or reconstructed material and name its sources.

## Creating a rich HTML plate

Markdown is mandatory and canonical. HTML is an optional same-basename companion
when chronology, topology, comparison, measurements, sketches, failure families,
or corrections become clearer visually.

When a plate materially helps:

1. Copy `lab-journal/PLATE-TEMPLATE.html` beside the Markdown using the same
   basename.
2. Use `lab-journal/assets/` and the examples as the visual grammar.
3. Replace every example fact. The plate may reorganize evidence but may not
   contradict or sanitize the Markdown.
4. Keep all paths relative and dependencies local. It must open through
   `file://`, remain complete without JavaScript, and print the full record.
5. Link back to Markdown with `class="source-link"`.

## Closing the session

1. Complete synthesis, decisions, artifacts, questions, corrections, and closure.
2. Audit **because**, **caused**, **therefore**, **proves**, **always**, and
   **never**. Causal wording requires discriminating evidence.
3. Update both `lab-journal/index.md` and `lab-journal/index.html`. Markdown
   is always linked; HTML is linked only when it exists.
4. Run `node scripts/validate-lab-journal.mjs`.
5. Sign with an ISO timestamp, participants/tools, repository state, witness
   status, unresolved question IDs, and expected next entry.

## Rules

- Signed entries are append-only. Corrections are new dated records that preserve
  and precisely identify the original claim.
- An entry may close with open questions.
- Every entry must stand alone in Markdown.
- Do not create decorative HTML that carries no evidence.
- Read and follow `lab-journal/AUTHORING.md` for the complete protocol.
