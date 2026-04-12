# Lab Journal — Project Instructions for Claude Code

## What This Is

A structured lab journal for recording engineering sessions, following Howard M. Kanare's *Writing the Laboratory Notebook* (ACS, 1985) principles. Every session that changes code, specs, or design decisions **must** have a journal entry.

## Core Principles (Kanare)

1. **Permanence.** Entries are append-only. Never delete or rewrite history — add corrections as new entries.
2. **Immediacy.** Record as you work, not from memory afterward.
3. **Self-containment.** Each entry must stand alone: enough detail that another person (or future you) could reproduce the session.
4. **Completeness.** Failures and rollbacks are as important as successes — record both.
5. **Traceability.** Link to commits, beads, and specs; don't redescribe what git already records.

## Starting a New Entry

1. Copy `lab-journal/TEMPLATE.md` to `lab-journal/journal-YYYY-MM-DD.md`.
2. Append `b`, `c`, `d`, … for multiple sessions on the same day (e.g., `journal-2026-04-12b.md`).
3. Fill in the date and session goals **before** you start work.
4. Add sections as the session progresses — don't backfill.

## During a Session

- Use tables liberally for issues/fixes, test results, comparisons, before/after measurements.
- Include the **Hypothesis vs Measured Impact** table whenever changes are testable — state your prediction *before* running, then record what actually happened.
- Include code snippets, error messages, and command output where they aid reproducibility.
- Note tool versions, model names, and environment details that affect results.

## Ending an Entry

Fill in the footer block at the bottom of the template:

- **Signed / Date** — always (full ISO timestamp preferred for legal clarity)
- **Participants & Tools** — model name (from the Co-Authored-By tag in the commit), language version, key libraries/tools
- **Commit / Witness** — the git commit hash(es) produced in this session + bead IDs
- **Related Specs / Beads** — active spec versions and bead IDs referenced
- **Next journal entry** — next file name (or `journal-YYYY-MM-DD.md (use TEMPLATE.md)`)

## After Each Entry Is Committed

Update `lab-journal/index.md` — add one row to the TOC table with the date, filename, key topics, and milestone/bead. Keep the table sorted chronologically.

## Index Maintenance

The `index.md` file is the master Table of Contents. It must be:
- Updated with every new journal entry
- Sorted chronologically
- Concise — one row per entry with date, file link, key topics, and milestone/phase

Every quarter, consider generating a PDF snapshot of the entire `lab-journal/` folder (including the index) for immutable long-term storage.

## Format Rules

- **No reconstruction.** If you forgot to log something, add a dated addendum — don't silently insert it into an earlier entry.
- **Tables over prose** for structured data (test results, issue lists, comparisons).
- **Relative links** to other journal entries, specs, and project files.
- **Attachments** go in `lab-journal/attachments/` with date prefixes, linked from the entry.
