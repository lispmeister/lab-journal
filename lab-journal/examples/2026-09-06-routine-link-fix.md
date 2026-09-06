# The help link reaches the local guide

<!-- Record format: compact -->

> **Record status:** Signed specimen. **Capture note:** Synthesized on
> 2026-09-06 to demonstrate a compact Markdown-only entry. All names, times,
> actions and outcomes below are illustrative, not repository history.

## Record identity

| Field | Value |
|---|---|
| Entry ID / date | LN-0250 / 2026-09-06 (illustrative) |
| Opened / closed | 09:10 UTC / 09:18 UTC (illustrative) |
| Project / phase | Sample notebook / routine navigation repair |
| Author / operator | Alex — editor and local browser operator (fictional) |
| Observer / witness | None; independent witness not required for this reversible specimen |
| Environment / state | Local static HTML; illustrative before/after shown below |
| Handling / artifact location | Public specimen; inline evidence retained in this file |
| Parent / correction target | None |

## Question and prediction

**Question:** Does the help link work when the notebook is opened from disk?
**Success:** The link opens the neighboring guide.
**Hypothesis:** The leading slash resolves outside the notebook.
**Alternative:** The guide file is missing.
**Prediction, before test:** If the file exists and the path is the fault,
changing only the href to `AUTHORING.md` will open the guide from the same folder.

## Bench record

<a id="OBS-0250.01"></a>

**OBS-0250.01 · 09:14 UTC (illustrative)** — **Action:** Confirmed the neighboring
file exists, changed the href, and opened the link from a local HTML page.
**Observed:** Before: file not found. After: the authoring guide opens.
**Interpretation:** Supports the path explanation for this directory layout;
confidence is limited to this local check.
**Evidence:** [ART-0250.01](#ART-0250.01). **Next move:** Keep the relative path.

## Evidence and decision

<a id="ART-0250.01"></a>

**ART-0250.01:** Inline synthesized before/after; parent OBS-0250.01;
Alex / illustrative source diff / retained / integrity: this file / public.

```diff
- <a href="/AUTHORING.md">Help</a>
+ <a href="AUTHORING.md">Help</a>
```

**Decision:** Use the relative link. Alex owns this one-line reversible change;
reject copying the guide to the filesystem root because the notebook must travel.
**Projection:** Other relative links should travel with the folder; unverified here.
**Open questions:** None within this bounded repair. **Corrections:** None.

## Closure

**Signed:** Alex / 2026-09-06T09:18:00Z / illustrative signature.
**Witness:** None; reason above. **Repository state:** Inline before/after only;
no real commit asserted. **Next entry:** None.
