# Cambrian real-content trial — 2026-09-06

The previous B+ / 8 evaluation and its eight findings are retained in LN-0012.
This trial evaluates unchanged shared CSS/JS against three real records. It
does not resolve the earlier findings.

## Source and adaptation

Cambrian master was resolved to `a4d2181c488bc5f0ff329438541cba51e8543fc8`.
Each same-basename Markdown is an unchanged source copy; [sources.json](sources.json)
records upstream URLs, byte lengths and SHA-256 hashes. HTML adds labelled
retrospective summaries and missing-metadata disclosures. Original signatures
are reproduced as attribution. Historical work was not rerun; historical prices
and broad technical claims were not independently validated.

- [Routine cleanup](journal-2026-04-03d.html): 702 bytes of original Markdown.
- [Campaign comparison](journal-2026-04-04b.html): 5233 bytes; outcomes, wide quality matrix, historical estimates and code.
- [Long diagnosis](journal-2026-04-01c.html): 10548 bytes; logs, stack trace, diffs, staged results and generation analysis.

All original source sections are retained. Sample selection is deliberately
heterogeneous, not random or exhaustive. New notices, identity summaries,
visuals and limitations are adaptation content and are labelled accordingly.

## Browser evidence

[Measurements](qa/results.json) use direct-file Chromium at 390×900 and
1440×900. PNG and PDF captures are in [qa/](qa/).

| Sample | Document width at 390px | At 1440px | Mobile height | PDF pages |
|---|---:|---:|---:|---:|
| Routine | 390px | 1440px | 3650px | 3 |
| Campaign | 507px | 1440px | 7085px | 6 |
| Diagnosis | 818px | 1440px | 10590px | 7 |

All contents links revealed their targets from each restricted lens. No page
JavaScript errors were observed. JavaScript-off left every section visible.
Fenced code text matched the originals. Tables remained inside their focusable
scroll regions. Long code lines overflowed the document.

## Findings

1. **Mobile code/log/diff handling needs a shared component.** The campaign
   overflows by 117px and diagnosis by 428px. Ordinary preformatted code lacks
   bounded scrolling. Preserve whitespace and copying, contain horizontal
   overflow, and define a separate print policy. These are real regression cases.
2. **Compact Markdown is essential.** The short cleanup becomes 3650px and
   three printed pages. Retrospective provenance adds overhead a native entry
   would not need, so this is not a universal template cost. Even allowing for
   that, its sequence figure adds little evidence. Keep routine work Markdown-only.
3. **Comparison is the strongest HTML use case.** The campaign matrix and
   diagnostic test-pass/start-fail boundary are easier to locate and compare.
4. **Print column sizing is too uniform.** In the quality matrix, equal-width
   columns split Dimension and Specific exceptions into awkward fragments.
   Code is styled like pieces of inline code. Diagnosis PDF pages 2–3 and
   campaign page 3 were visually inspected; no blanket claim of perfect
   pagination across every page is made.
5. **Retrospective conversion needs explicit rules.** Missing opened times,
   witnesses, predictions and raw run artifacts must stay missing. The combined
   Commit / Witness field contains commit IDs, not witness evidence.
6. **Reading lenses are navigation, not proof of epistemic classification.**
   Real sections mix measurements, judgments, estimates and recommendations.
   Preserve source text and label those categories more precisely when adapting.
7. **Do not silently repair source inconsistencies.** The diagnosis announces
   three changes and lists four; this is preserved and disclosed in the page.

## Evaluation

Real-content fitness: **B / 7.5 out of 10**, against the prior B+ / 8 overall
baseline. The visual direction remains useful, but mobile code overflow lowers
release confidence. Fix and test code blocks and their print behavior before
claiming robust general-purpose engineering-record support.

The existing 112-test gate does not target these review pages. Its results are
separate from the known rendering failures above. No shared styles, protocol,
skill or distributable specimens were changed for this trial.

## Dated remediation — 2026-09-06

The preceding findings describe the original trial. Shared styles and authoring
guidance have now been revised; original Markdown and the original `qa/` captures
are unchanged. [New measurements and captures](qa-fixed/results.json) are retained
separately in `qa-fixed/`.

- At 390px, all three documents now measure 390px wide. Code and wide tables
  scroll within labelled, keyboard-focusable regions.
- The routine reading view is 1328px tall, down from 3650px, and prints on one
  A4 page instead of three. Its unnecessary diagram and full-plate apparatus
  were removed.
- Campaign and diagnosis retain all fenced code text and source hashes.
  Print wraps long code lines and gives the quality matrix's label column more
  space. Campaign pages 2–3 and diagnosis page 3 were visually inspected.
- Mixed source sections are labelled and shared across evidence/synthesis
  lenses; historical prices are explicitly historical estimates.
- Real-content checks now run in Chromium, Firefox and WebKit, including
  320/390/430/1440px widths, direct-file use and JavaScript-off completeness.
  Automated accessibility includes these three samples at 320px and 1440px.

See the [complete finding-to-fix map](../remediation-2026-09-06.md) and
[LN-0013](../../../lab-journal/journal-2026-09-06-close-real-content-gaps.md)
for verification outcomes and remaining external limits. The original grades
above remain the dated pre-remediation evaluation.
