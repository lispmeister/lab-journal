---
name: lab-journal
description: Initialize, author, continue, correct, or audit a project-local append-only lab journal with canonical Markdown and optional static HTML evidence plates. Use when work should be recorded as a laboratory notebook, when a project contains lab-journal/AUTHORING.md, or when the user asks to install or maintain this notebook format. Do not require a generator, server, validator, package installation, or build step.
---

# Lab Journal

Treat the project-local notebook as the durable product. Use ordinary file read,
copy, and edit capabilities; do not introduce an authoring runtime.

## Select the operation

- **Initialize:** If `lab-journal/` does not exist and the user asks to install
  the notebook, copy `assets/starter-kit/lab-journal/` into the project. Merge
  the appropriate block from `assets/starter-kit/agent-instructions/` into an
  existing project-instruction file; never overwrite that file. Stop and report
  the conflict if a notebook or target file would be replaced.
- **Author or continue:** Read the installed `lab-journal/AUTHORING.md`, both
  templates, both indexes, the previous entry, and related open questions. The
  installed protocol is authoritative. Create and update the Markdown and
  optional same-basename HTML directly.
- **Correct:** Preserve the signed original. Create a new dated correction and
  follow the installed correction protocol.
- **Audit:** Inspect record completeness, chronology, provenance, local links,
  index truthfulness, and HTML/Markdown agreement. Do not mutate files unless
  the user asks for changes.

## Preserve these invariants

- Markdown is mandatory, canonical, and independently complete.
- HTML is optional and evidence-bearing; never create it merely as decoration.
- Preserve contemporaneous sequence, failed paths, uncertainty, and earlier
  beliefs. Never invent missing facts.
- Update both indexes; link every Markdown entry and only HTML files that exist.
- Use relative local assets. HTML must open from disk, remain complete without
  JavaScript, and print the full record.
- Close with the installed guide's human/agent review. No command is required.

The bundled starter is only for initialization. After copying it, always follow
the project's installed protocol so the notebook remains self-contained and can
evolve independently of this skill.
