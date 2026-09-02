# Lab Journal

![The Lab](docs/images/the-lab.jpeg)

A file-only engineering notebook for humans and AI agents. Markdown preserves
the complete record; optional HTML plates use the full expressiveness of the web
when chronology, topology, measurements, sketches, provenance, or corrections
are easier to understand visually.

## The whole runtime is a folder

Authoring requires no server, generator, framework, package installation,
validator, network connection, or build step. An agent reads the reporting
guide and templates, then writes ordinary `.md` and `.html` files directly.

The HTML pages use relative local assets, open through `file://`, remain complete
without JavaScript, and print the full record. Markdown is always canonical and
must stand alone.

## Install in another project

### 1. Copy the clean notebook

Copy [`starter-kit/lab-journal/`](starter-kit/lab-journal/) into the root of
your project as `lab-journal/`:

```text
your-project/
└── lab-journal/
    ├── AUTHORING.md
    ├── TEMPLATE.md
    ├── PLATE-TEMPLATE.html
    ├── index.md
    ├── index.html
    ├── assets/
    ├── attachments/
    └── examples/
```

This is a clean notebook with zero live entries. There is nothing to reset or
generate.

### 2. Tell the agent where the protocol lives

Merge one short adapter into the project instructions your environment reads.
Do not replace existing project instructions.

- [`AGENTS.md` adapter](starter-kit/agent-instructions/AGENTS.md) for Codex,
  Grok Build, and other `AGENTS.md` environments.
- [`CLAUDE.md` adapter](starter-kit/agent-instructions/CLAUDE.md) for Claude Code.
- [Generic instruction block](starter-kit/agent-instructions/GENERIC.md) for
  environments with custom project rules.

The adapters deliberately contain only a pointer and the essential trigger.
The single authoritative protocol remains inside
`lab-journal/AUTHORING.md`.

### 3. Record notebook adoption

The installation changes the project's working protocol, so it should become
the first live record. Create `LN-0001` from `TEMPLATE.md`, state that the
notebook was adopted, link the copied protocol and project-instruction change,
and update both indexes. Mark the copy and adapter steps as reconstructed when
they happened before the entry was opened; never invent their timestamps.

That completes installation. Subsequent work that changes code, specifications,
experiments, or design decisions maintains its record as part of the work. No
command needs to be installed or run.

## What the agent does

1. Reads `AUTHORING.md`, the Markdown template, both indexes, the previous
   entry, and related open questions.
2. Creates the next canonical Markdown entry before work when chronology allows.
3. Appends observations, hypotheses, predictions, measurements, failures, and
   decisions in event order.
4. Creates a same-basename HTML plate directly from `PLATE-TEMPLATE.html` when a
   visual relationship materially helps. HTML is authored, not generated from
   Markdown.
5. Updates `index.md` and `index.html`, linking Markdown always and HTML only
   when it exists.
6. Performs the guide's closing review and signs the record.

## Two authoring paths

### Markdown only

Use this for routine work or whenever prose and tables communicate the evidence
well. Copy `TEMPLATE.md`, author the record, and update both indexes. The HTML
index links to Markdown and states that no companion plate exists.

### Markdown plus HTML

Use this for chronology, measured comparison, system maps, conjecture-versus-
measurement sketches, failure families, annotated evidence, or corrective
diffs. Copy `PLATE-TEMPLATE.html` to the Markdown entry's basename and select
one to three evidence-bearing forms.

The shared dense bench-sheet language is quiet, compact, responsive, accessible,
and print-minded. It should feel like a serious laboratory instrument rather
than a themed blog or presentation deck.

## Optional cross-agent skill

[`skills/lab-journal/`](skills/lab-journal/) packages the same workflow as a
standards-based `SKILL.md` bundle for agent environments that support skills.
It can initialize the clean static kit or operate an existing notebook using the
agent's normal file tools. The installed project remains self-contained and does
not depend on the skill afterward.

The skill is a convenience layer, not the product. Teams that do not use skills
receive the same notebook behavior from the project instruction adapter.

### Install the optional skill

Copy the complete `skills/lab-journal/` directory into one discovery location.
The destination must contain `lab-journal/SKILL.md`, not only the Markdown file.

| Agent host | Project-scoped location | User-scoped location | Invoke or verify |
|---|---|---|---|
| Codex | `.agents/skills/lab-journal/` | `~/.agents/skills/lab-journal/` | Mention `$lab-journal`; `/skills` lists discovered skills |
| Claude Code | `.claude/skills/lab-journal/` | `~/.claude/skills/lab-journal/` | Invoke `/lab-journal` or ask Claude to use the lab-journal skill |
| Grok Build | `.grok/skills/lab-journal/` | `~/.grok/skills/lab-journal/` | Invoke `/lab-journal`; `grok inspect` reports discovery |

These locations follow the current [Codex skill documentation](https://developers.openai.com/codex/skills),
[Claude Code skill documentation](https://code.claude.com/docs/en/slash-commands),
and [Grok Build skill documentation](https://docs.x.ai/build/features/skills-plugins-marketplaces).
Restart the host if a newly copied skill does not appear.

For a repository installation, check in the skill directory so every agent sees
the same version. For a personal installation, the skill can initialize many
projects, but each installed notebook remains independent afterward.

### Verification status

- The exact bundle passes the official structural skill validator.
- Grok Build 1.0.5 discovered it as a project skill and user-invocable command.
- Claude Code documents the same open Agent Skills structure; an actual Claude
  initialization and entry-authoring smoke remains tracked as Q-0008-02.
- Codex officially scans `.agents/skills` from the working directory to the
  repository root and supports user skills in `~/.agents/skills`.

## What this preserves

The original Markdown workflow from `master` remains intact:

- permanence through append-only entries and explicit corrections;
- immediacy through contemporaneous field notes;
- self-contained records that survive changing agents and tools;
- hypotheses and predictions recorded before measurements;
- failures and rejected paths retained as evidence;
- signatures, witnesses, provenance, and durable links.

The richer system adds stable observation, artifact, question, figure, and
correction IDs; a searchable static HTML index; optional visual plates; and a
professional shared visual grammar.

## Examples

The starter includes two explicitly synthesized specimens:

- [Layered experiment](starter-kit/lab-journal/examples/2026-08-30-reply-before-close.html)
  with its [canonical Markdown](starter-kit/lab-journal/examples/2026-08-30-reply-before-close.md).
- [Append-only correction](starter-kit/lab-journal/examples/2026-09-04-timeout-was-witness.html)
  with its [canonical Markdown](starter-kit/lab-journal/examples/2026-09-04-timeout-was-witness.md).

## Developing this repository

The npm, Playwright, Chromium, Docker, visual-baseline, accessibility, and static
validation machinery in this repository is solely for maintainers of the
templates and shared design language. It is not copied into projects and is not
part of authoring.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the maintainer setup and release
gate.

## Repository map

| Path | Audience | Purpose |
|---|---|---|
| `starter-kit/` | Notebook users and agents | Clean, ready-to-copy, file-only notebook and instruction adapters |
| `skills/lab-journal/` | Skill-capable agents | Optional portable adapter with the same clean starter as assets |
| `lab-journal/` | This repository's maintainers | The project's own live notebook and canonical shared design sources |
| `CONTRIBUTING.md` | Maintainers | Development dependencies, QA, release, and baseline review |
| `tests/`, `scripts/`, `package*.json` | Maintainers | Distribution integrity and browser-based quality control |

## Reference

Kanare, Howard M. *Writing the Laboratory Notebook.* American Chemical Society,
1985. ISBN 978-0-8412-0906-4.
