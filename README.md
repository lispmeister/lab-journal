# Lab Journal

A structured engineering lab journal adapted from laboratory notebook practices in the physical sciences. Drop it into any project to give AI agents (and humans) a disciplined session-logging workflow.

## Why?

Software engineering sessions — especially AI-assisted ones — produce a stream of decisions, experiments, failures, and fixes that commit messages alone can't capture. A lab journal provides:

- **Reproducibility.** Enough context to re-derive any decision.
- **Accountability.** Signed, dated, immutable records.
- **Continuity.** Future sessions (or collaborators) can pick up where you left off.
- **Learning.** Failures and dead ends are valuable — but only if recorded.

## Method

This journal follows the principles in:

> **Kanare, Howard M.** *Writing the Laboratory Notebook.* Washington, DC: American Chemical Society, 1985. ISBN 978-0-8412-0906-4.

![Writing the Laboratory Notebook](docs/images/Writing_the_Laboratory_Notebook.jpg)

Kanare's book is the standard reference for laboratory record-keeping. Originally written for chemists and physicists, its principles transfer directly to engineering:

**Permanence.** Entries are append-only. Never delete or rewrite history. If a previous entry contains an error, add a dated correction referencing the original — just as Kanare requires crossing out errors with a single line and initialing them, never tearing out pages.

**Immediacy.** Record as you work, not from memory afterward. Delayed recording introduces bias and omissions.

**Self-containment.** Each entry stands alone. A reader unfamiliar with the project should understand what was attempted, what happened, and what was concluded — without reading every prior entry.

**Completeness.** The notebook records *what happened*, not *what you wish had happened*. A properly recorded failure saves future researchers from repeating it.

**Witnessing.** Every entry is signed, dated, and linked to verifiable artifacts (git commits, issue IDs). This is Kanare's witnessing requirement adapted for software — commit hashes and issue references replace the countersignature.

## Usage

Copy three things into your project:

1. `lab-journal/TEMPLATE.md` — the entry template
2. `lab-journal/index.md` — the master table of contents
3. The **CLAUDE.md** contents — paste into your project's CLAUDE.md to instruct the agent

The agent will create a dated journal entry at the start of each session, record as it works, and update the index when done.

## Origin

Developed during the [Cambrian](https://github.com/lispmeister/cambrian) project — a self-reproducing code factory where rigorous session logging proved essential for tracking multi-generation experiments. The format survived 46+ entries and proved its value for AI-assisted engineering.

## Reference

Kanare, Howard M. *Writing the Laboratory Notebook.* American Chemical Society, 1985.

- The definitive guide to laboratory record-keeping
- Covers: purpose of notebooks, what to record, format and organization, legal considerations, witnessing, and archival
- Available from ACS Publications and major booksellers
