# Lab Journal

A structured engineering lab journal, adapted from laboratory notebook practices in the physical sciences.

## Why a Lab Journal?

Software engineering sessions — especially those involving AI-assisted development — produce a stream of decisions, experiments, failures, and fixes that are poorly captured by commit messages alone. A lab journal provides:

- **Reproducibility.** Enough context to re-derive any decision.
- **Accountability.** Signed, dated, immutable records.
- **Continuity.** Future sessions (or collaborators) can pick up where you left off.
- **Learning.** Failures and dead ends are as valuable as successes — but only if recorded.

## Method

This journal follows the principles in:

> **Kanare, Howard M.** *Writing the Laboratory Notebook.* Washington, DC: American Chemical Society, 1985. ISBN 978-0-8412-0906-4.

![Writing the Laboratory Notebook](docs/images/Writing_the_Laboratory_Notebook.jpg)

Kanare's book is the standard reference for laboratory record-keeping in science and engineering. Originally written for chemists and physicists, its principles apply directly to any experimental or engineering discipline. The key practices adapted here:

### Permanence

Entries are append-only. Never delete, overwrite, or rewrite history. If a previous entry contains an error, add a dated correction in a new entry referencing the original. This mirrors Kanare's rule that notebook pages are never torn out or erased — cross out errors with a single line and initial them.

### Immediacy

Record observations and decisions *as they happen*, not reconstructed from memory hours later. Kanare emphasizes that delayed recording introduces bias and omissions. In practice: write the journal entry during the session, not after.

### Self-Containment

Each entry must stand alone. A reader unfamiliar with the project should be able to understand what was attempted, what happened, and what was concluded — without reading every prior entry. Include enough context (goals, environment, tool versions) to make the entry independently meaningful.

### Completeness

Negative results, failed approaches, and rollbacks are as important as successes. Kanare stresses that the notebook records *what happened*, not *what you wish had happened*. A failed experiment that is properly recorded saves future researchers from repeating it.

### Witnessing and Traceability

Every entry is signed, dated, and linked to verifiable artifacts (git commits, issue IDs). This corresponds to Kanare's witnessing requirement — in a lab notebook, entries are periodically reviewed and countersigned. Here, commit hashes and issue tracker references serve the same purpose.

## Structure

```
lab-journal/
  index.md          — Master table of contents (update with every entry)
  TEMPLATE.md       — Copy this to start a new entry
  journal-*.md      — Individual session entries
  attachments/      — Screenshots, plots, logs (date-prefixed)
docs/
  images/           — Project images and book cover
CLAUDE.md           — Instructions for AI assistants working on this project
```

## Quick Start

1. Copy `lab-journal/TEMPLATE.md` to `lab-journal/journal-YYYY-MM-DD.md`
2. Fill in the date and session goals before starting work
3. Record as you go — don't backfill
4. Fill in the footer (signed, date, tools, commits) when done
5. Update `lab-journal/index.md` with a new row

For multiple sessions on the same day, append a letter suffix: `journal-2026-04-12b.md`, `journal-2026-04-12c.md`, etc.

## The Hypothesis Table

Each entry includes a **Hypothesis vs Measured Impact** table:

| Change | Hypothesis (before) | Measurement (after) | Evidence / Notes |
|--------|---------------------|---------------------|------------------|
| Example change | Expected effect | Actual result | Link to data |

State your prediction *before* running the experiment. This forces clear thinking about expected outcomes and makes surprises visible.

## Origin

This practice was developed during the [Cambrian](https://github.com/lispmeister/cambrian) project — a self-reproducing code factory where rigorous session logging proved essential for tracking multi-generation experiments across dozens of sessions. The journal format survived 46+ entries and proved its value for AI-assisted engineering work.

## Reference

Kanare, Howard M. *Writing the Laboratory Notebook.* American Chemical Society, 1985.

- The definitive guide to laboratory record-keeping
- Covers: purpose of notebooks, what to record, format and organization, legal considerations, witnessing, and archival
- Available from ACS Publications and major booksellers
