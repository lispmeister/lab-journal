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
  the conflict if a notebook or target file would be replaced. Then follow the
  installed protocol to create the first live entry documenting notebook
  adoption and update both indexes. Treat copy and merge steps completed before
  that entry opened as reconstructed; never invent their timestamps.
- **Author or continue:** Read the installed `lab-journal/AUTHORING.md`, the appropriate Markdown
  template (compact for routine work, full for experiments or corrections), the
  HTML template only when a plate helps, both indexes, the previous entry, and
  related open questions. Follow the installed protocol's start/resume rules:
  continue only an unsigned record for the same work; otherwise allocate a new
  live ID after checking files as well as indexes. Do not use specimen IDs as
  the live sequence. Create Markdown before acting; mark earlier work as
  reconstructed and never backdate predictions. The installed protocol governs
  notebook authoring within the user's scope and project instructions.
- **Adapt historical content:** Follow the installed retrospective-conversion
  section. Preserve source bytes and signatures, label new interpretations and
  missing metadata, and prefer a simple reading view for routine material.
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
- Capture consequential actions and results during work. Cite material claims
  to observations and retained inline evidence or artifacts, including method,
  scope and limitations. A filled template is not evidence.
- Do not claim a check passed unless it ran. Do not name a user or agent as an
  independent witness without an actual witnessing event.
- Update both indexes; link every Markdown entry and only HTML files that exist.
- Use relative local assets. HTML must open from disk, remain complete without
  JavaScript, and print the full record.
- Close with the installed guide's applicable quality review. Record checks
  performed, checks unavailable and their reasons, actual outcome, open
  questions, state and your own signature. HTML checks are not applicable to a
  Markdown-only entry. A record may close with an unsuccessful or inconclusive
  result; an interrupted record may remain open with a handoff note.
- Report record links, verification and gaps to the user. No notebook-specific
  command is required; normal project tests and approval boundaries still apply.

The bundled starter is only for initialization. After copying it, always follow
the project's installed protocol so the notebook remains self-contained and can
evolve independently of this skill.
