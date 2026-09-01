# Lab Journal Repository — Maintainer Instructions

This file governs development of the lab-journal templates, protocol, skill,
examples, and quality-control infrastructure in this repository. It is not the
portable adapter users copy into their projects. Portable adapters live in
`starter-kit/agent-instructions/`.

Every session that changes code, specifications, experiments, or design
decisions must have an append-only journal entry.

## Before changing the repository

1. Read `lab-journal/AUTHORING.md`, `lab-journal/TEMPLATE.md`, both indexes,
   the previous entry, and related open questions.
2. Choose the next stable entry ID and create canonical Markdown from
   `lab-journal/TEMPLATE.md`.
3. Fill record identity, question, credible alternatives, hypotheses, and
   success criteria before work whenever chronology permits.

## While working

- Append field notes and stable observation blocks in event order.
- Keep observation, interpretation, hypothesis, discriminating test,
  conclusion, and projection separate.
- Record predictions before results and preserve failures, rejected paths,
  rollbacks, and uncertainty.
- Never invent timestamps, commands, participants, witnesses, measurements, or
  rationale. Mark unknown or reconstructed material and name its sources.
- Markdown is mandatory and canonical. Create same-basename HTML only when a
  visual relationship materially improves the record.

## Repository-only quality control

Authoring in an installed notebook requires no executable tooling. Changes to
this distribution are different: maintainers must verify the clean starter,
skill bundle, shared assets, examples, responsive behavior, interactions,
JavaScript-off completeness, print output, visual baselines, and accessibility.

Before closing a repository-development session:

1. Update both live indexes. Markdown is always linked; HTML only when it exists.
2. Run `npm test` without updating visual baselines.
3. For a fresh maintainer checkout, run `npm ci` and
   `npm run test:browsers:install` once first.
4. If shared distribution files changed, run `npm run sync:distribution`, review
   the generated diff, and rerun the complete gate.
5. Sign with repository state, tools, witness status, unresolved questions, and
   expected next entry.

## Rules

- Signed entries are append-only. Corrections are new dated records that retain
  and precisely identify the original claim.
- An entry may close with open questions.
- Every entry must stand alone in Markdown.
- Do not create decorative HTML that carries no evidence.
- Never copy this maintainer file as an adopter integration; use the adapters in
  `starter-kit/agent-instructions/`.
