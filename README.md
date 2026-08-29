# Lab Journal

![The Lab](docs/images/the-lab.jpeg)

A Markdown-first engineering notebook for humans and AI agents, extended with
optional, expressive HTML plates that open directly from disk.

The Markdown record is always complete. HTML is used when chronology, system
structure, measurements, sketches, provenance, or corrections deserve more
visual bandwidth than linear prose can provide.

## What this preserves

The original workflow still works:

1. Copy a Markdown template.
2. Record goals before work.
3. Append observations, decisions, failures, and measurements as they happen.
4. Sign the entry and update the Markdown index.

No server, generator, framework, package installation, or network connection is
required to read the journal. A team can use only Markdown forever.

## What this adds

- A three-layer protocol: **bench record**, **Markdown synthesis**, and optional
  **HTML plate**.
- Stable IDs for entries, observations, hypotheses, figures, artifacts,
  questions, and corrections.
- Explicit authors, operators, independent observers, witnesses, capture mode,
  reconstruction, sensitivity, and artifact provenance.
- Reading lenses that isolate bench evidence, synthesis, or visual reasoning.
- A searchable HTML archive alongside the durable Markdown index.
- Append-only corrective records that visibly preserve superseded claims.
- A dependency-free validator that checks both forms and the offline contract.

Open [`lab-journal/index.html`](lab-journal/index.html) directly to see the
working notebook.

## Two authoring paths

### Markdown-only

Use this for routine work or whenever prose and tables communicate the evidence
well. Copy [`lab-journal/TEMPLATE.md`](lab-journal/TEMPLATE.md), create the next
`journal-YYYY-MM-DD-short-title.md`, and update both indexes. In the HTML index,
show Markdown and “No HTML plate.”

### Markdown plus a rich plate

Use this when a visual relationship materially helps. After the canonical
Markdown is complete enough to support every claim, copy
[`lab-journal/PLATE-TEMPLATE.html`](lab-journal/PLATE-TEMPLATE.html) to the same
basename with `.html`. Select one to three evidence-bearing forms—such as a
chronology, measured comparison, system map, conjecture/measured sketch pair,
fault atlas, or corrective diff.

The plate is authored, not mechanically generated. That keeps the full
expressiveness of HTML while the Markdown remains the audit record.

## Install in another project

Copy these files and directories:

```text
your-project/
├── AGENTS.md or CLAUDE.md
├── scripts/
│   └── validate-lab-journal.mjs
└── lab-journal/
    ├── AUTHORING.md
    ├── TEMPLATE.md
    ├── PLATE-TEMPLATE.html
    ├── index.md
    ├── index.html
    ├── assets/
    │   ├── notebook.css
    │   └── notebook.js
    └── attachments/
```

Copy the relevant agent-instruction file from this repository or merge its
Lab Journal section into an existing instruction file. For a clean notebook,
remove the live LN-0001 row from both copied indexes, reset their counts, and
keep the linked specimens only if they help your team.

The examples directory is optional. It is valuable when agents need concrete
visual grammar:

- [Layered experiment plate](lab-journal/examples/2026-08-30-reply-before-close.html)
- [Append-only correction plate](lab-journal/examples/2026-09-04-timeout-was-witness.html)

All people, dates, commands, and measurements in those two specimens are
synthesized and explicitly labeled.

## Agent workflow

Agents are instructed to:

1. Read [`lab-journal/AUTHORING.md`](lab-journal/AUTHORING.md), the template,
   indexes, previous entry, and related open questions.
2. Start canonical Markdown before changing code or design.
3. Preserve event order and separate observation from interpretation.
4. Record hypotheses and predictions before tests whenever possible.
5. Link measured and causal claims to durable evidence.
6. Decide whether HTML materially improves comprehension.
7. Update both indexes and run validation.
8. Sign with unresolved questions and witness state made explicit.

The complete LLM prompt, epistemic vocabulary, correction protocol, HTML
constraints, and quality gate live in
[`lab-journal/AUTHORING.md`](lab-journal/AUTHORING.md).

## Validate

From the project root:

```sh
node scripts/validate-lab-journal.mjs
```

The script uses only Node.js built-ins. It verifies local links, Markdown/HTML
pairs, index completeness, accessible inline diagrams, layered-plate anatomy,
and the absence of network-dependent runtime assets. Validation is an authoring
aid; readers do not need Node.js.

## Design principles

This system adapts the scientific habits described by Howard M. Kanare in
*Writing the Laboratory Notebook* and lessons visible in famous historical
notebooks: keep sequence, distinguish conjecture from measurement, preserve
drawings as reasoning, name provenance and witnesses, give questions durable
identities, and correct by addition rather than erasure.

The visual language treats the notebook as a serious lab instrument rather than
a themed blog: paper-like archival surfaces, restrained signal color, precise
typographic hierarchy, compact evidence ledgers, accessible diagrams, responsive
layouts, and print-ready closure.

## Repository contents

| Path | Purpose |
|---|---|
| `lab-journal/TEMPLATE.md` | Canonical Markdown entry template |
| `lab-journal/PLATE-TEMPLATE.html` | Optional same-basename HTML starting point |
| `lab-journal/AUTHORING.md` | Complete human/LLM protocol |
| `lab-journal/index.md` | Durable Markdown archive |
| `lab-journal/index.html` | Searchable, thematic local archive |
| `lab-journal/assets/` | Shared static visual and interaction system |
| `lab-journal/examples/` | Synthesized experiment and correction specimens |
| `scripts/validate-lab-journal.mjs` | Dependency-free integrity checker |
| `AGENTS.md` / `CLAUDE.md` | Ready-to-use agent instructions |

## Reference

Kanare, Howard M. *Writing the Laboratory Notebook.* American Chemical Society,
1985. ISBN 978-0-8412-0906-4.
