# Maintaining Lab Journal

This document is for contributors changing the notebook protocol, templates,
shared CSS/JavaScript, examples, distribution bundle, skill, or automated tests.
None of these tools are required to install, author, read, or print a notebook.

## Product boundary

The shipped product is `starter-kit/`: static instructions, Markdown and HTML
templates, clean indexes, examples, and local assets. Agents create entries by
reading and writing files directly.

The npm and browser stack exists only to catch regressions in what maintainers
ship. Do not add its commands to `lab-journal/AUTHORING.md`, portable instruction
adapters, or the skill's authoring workflow.

## Maintainer setup

Requires Node.js 20 or newer:

```sh
npm ci
npm run test:browsers:install
```

The second command downloads the pinned Chromium, Firefox, and WebKit builds once. CI uses the
matching official Playwright container.

## Distribution synchronization

The live notebook's protocol, templates, shared assets, and synthesized examples
are the maintained sources. After changing them, regenerate the clean starter
and the skill's bundled copy:

```sh
npm run sync:distribution
```

Always inspect the generated diff. The clean indexes and portable instruction
adapters are distribution-specific sources and are not replaced by this command.

`npm run validate:distribution` verifies byte-for-byte parity, confirms that the
starter has zero live records, rejects authoring-tool commands in portable
instructions, and checks local links in the clean bundle.

## Complete quality gate

```sh
npm test
```

The gate runs:

1. Distribution integrity and zero-infrastructure contract checks.
2. Static validation of this repository's live notebook.
3. The reader-task, real-content and print-control suites in Chromium, Firefox and WebKit.
   The exhaustive geometry matrix and visual baselines run in Chromium.
4. JavaScript-off, offline-resource, and print-completeness checks.
5. Reviewed Chromium visual baselines.
6. Chromium automated WCAG A/AA scans for both archives, every template/live/example
   plate, and the three real-content reading samples. This is automated coverage,
   not a claim of a complete manual accessibility audit.

After changes to print layout, export both specimens through browser print, render
the PDFs, and inspect page breaks, evidence labels, tables and closure. Screen
geometry alone does not verify pagination. Retain decision-critical screenshots
and validation summaries in the live journal attachments, not only temporary paths.

Print-control tests distinguish a request, fallback instructions, and native
print lifecycle events. The native headless event check is Chromium-only;
Firefox/WebKit run the control/fallback checks. A lifecycle event is not proof
that an OS dialog opened or a reader saved a PDF. Check embedded-browser feedback
visually, and keep saved-PDF links explicitly labelled as snapshots.

Focused commands are available in `package.json`.

## Visual changes

Update snapshots only after understanding the source change:

```sh
npm run test:visual:update
npm run test:visual:update:linux
```

Inspect every changed PNG. Do not accept baselines merely to silence a failure;
geometry and interaction failures must be understood independently.

## Release checklist

- The starter opens directly from disk and has zero live records.
- Portable instructions contain no authoring runtime or QA command.
- The skill validates and contains no executable dependency.
- Skill installation paths in README match current host documentation; any
  unexercised host invocation remains named as an open notebook question.
- Markdown remains complete without an HTML companion.
- HTML remains complete without JavaScript or the network.
- `npm test` passes without snapshot updates.
- The live journal and both live indexes describe the release work truthfully.
