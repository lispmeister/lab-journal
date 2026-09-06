# Notebook adoption and guide-link repair

<!-- Record format: compact -->

> **Record status:** signed. **Capture note:** mixed. Installation is reconstructed from this session's file-operation tool output; subsequent work is captured live. Exact installation times were not recorded.

## Record identity

| Field | Value |
|---|---|
| Entry ID / date | LN-0001 / 2026-09-06 |
| Opened / closed | 2026-09-06T16:57:44+00:00 / 2026-09-06T16:59:37+00:00 |
| Project / phase | Isolated fixture / notebook adoption and navigation repair |
| Author / operator | Codex — author, file editor and check operator |
| Observer / witness | None; no independent witnessing event |
| Environment / state | Local fixture; zsh; Python 3.14.6; uncommitted working files |
| Handling / artifact location | Local project material; inline evidence and relative project files |
| Parent / correction target | None; first live entry |

## Question and prediction

**Question:** Can the notebook be adopted and the broken guide link repaired within the fixture?
**Success:** Preserve original instructions, install the protocol, index this live entry in both indexes, point the guide link to an existing local guide, and run `python3 check.py` successfully.
**Hypothesis:** A wrong href is the navigation defect. **Alternative:** The guide is missing or the check requires a different target.
**Prediction, before inspection and test:** Inspecting `index.html`, `GUIDE.md` and `check.py` will identify the required local target. A minimal href correction should satisfy the existing check; its scope will be recorded after inspection.

## Bench record

<a id="OBS-0001.01"></a>

**OBS-0001.01 · sequence 1, reconstructed** — **Action:** Read project instructions and installed skill, confirmed no `lab-journal/` existed, copied the bundled starter directory with `shutil.copytree`, and appended the supplied AGENTS block to the existing `AGENTS.md`. Read the installed protocol, compact template, routine specimen and both indexes. Checked live filenames as well as indexes: zero live entries; no prior live questions or previous record.
**Observed:** Copy/append command exited 0; both starter indexes reported zero live records. The original isolated-fixture paragraph was read before the append.
**Interpretation:** LN-0001 is unused; specimen IDs do not determine the sequence. **Evidence:** Session tool output, summarized here; installation timestamps unavailable. **Next move:** Inspect the repair inputs.

<a id="OBS-0001.02"></a>

**OBS-0001.02 · sequence 2, live** — **Action:** Read `index.html`, `GUIDE.md`, and `check.py` using `cat` (exit 0).
**Observed:** HTML is `<!doctype html><title>Guide</title><a href="GUIDE.mdd">Guide</a>`. `GUIDE.md` exists and contains the fixture guide. The check extracts the first quoted href and asserts `Path(p).is_file()`.
**Interpretation:** The href has an extra `d`; the intended guide is present. The check covers file existence, not browser rendering. **Evidence:** Inline source excerpt here, captured by Codex; retained. **Next move:** Change only `GUIDE.mdd` to `GUIDE.md`.

**Prediction before check:** After this one-character correction, `python3 check.py` should exit 0 and print `PASS: guide target exists`. This distinguishes an existing target from the currently mistyped target; it does not test browser navigation.

<a id="OBS-0001.03"></a>

**OBS-0001.03 · sequence 3, live** — **Action:** Replaced the single `GUIDE.mdd` occurrence with `GUIDE.md` in `index.html`.
**Observed:** File write completed. **Evidence:** [ART-0001.01](#ART-0001.01). **Next move:** Run the existing check.

<a id="OBS-0001.04"></a>

**OBS-0001.04 · sequence 4, live** — **Action:** Ran `python3 check.py` from the fixture root after the edit, using Python 3.14.6.
**Observed:** Exit status 0; complete stdout: `PASS: guide target exists`.
**Interpretation:** The first href resolves to an existing file under the check's working-directory semantics. Browser navigation and rendering were not tested. **Evidence:** Inline complete check output, retained by Codex from tool result. **Next move:** Update both indexes and review record completeness and local links.

## Evidence and decision

<a id="ART-0001.01"></a>

**ART-0001.01:** Inline exact source change; parent OBS-0001.03; Codex / file replacement / retained / local project material. Current files: [index.html](../index.html), [GUIDE.md](../GUIDE.md), [check.py](../check.py), [AGENTS.md](../AGENTS.md), [installed protocol](AUTHORING.md). Integrity: full before/after line below; final file hashes recorded at closure.

```diff
-<!doctype html><title>Guide</title><a href="GUIDE.mdd">Guide</a>
+<!doctype html><title>Guide</title><a href="GUIDE.md">Guide</a>
```

**Decision:** Keep the one-character repair and copied notebook protocol. Codex owns this reversible local edit; no guide duplication or dependencies are needed. Use a compact Markdown-only entry since the source diff and check output fully convey this routine change.
**Conclusion:** The existing check passed after correction (OBS-0001.04).
**Projection:** Browser navigation is expected to use this relative target; unverified.
**Open questions:** None within the requested scope. **Corrections:** None.

<a id="OBS-0001.05"></a>

**OBS-0001.05 · sequence 5, live closing review** — **Action:** Updated both indexes with LN-0001, author/operator and systems, zero plates and no questions/corrections. Ran an inline `python3 -` inspection using pathlib, regex and urllib.parse: extracted Markdown destinations and HTML href/src from this entry and both indexes, resolved relative paths after removing query strings, and checked explicit fragment IDs. Compared AGENTS bytes with the original paragraph plus supplied block; compared all copied non-index starter files byte-for-byte with the source; checked exactly one live Markdown record and its presence in both indexes. Generated SHA-256 hashes with hashlib.
**Observed:** Exit 0. Complete inspection status output:

```text
PASS: 36 local links/assets in live record and both indexes resolve, including explicit fragments
PASS: original AGENTS.md preserved with exact appended block; copied non-index starter files unchanged; one live record indexed in both forms
```

**Interpretation:** Local destinations and installation preservation satisfy this source-level review. The inspection did not recursively audit specimen content or exercise a browser. **Evidence:** Inline output retained by Codex from tool result; method and scope above. **Next move:** Sign and set both index statuses to signed; these final status edits introduce no new links.

## Closure

**Outcome:** Completed notebook adoption and the one-character guide-link repair. Existing `python3 check.py` passed with exit 0 (OBS-0001.04).
**Verification / limitations:** Reviewed Markdown standalone completeness, chronology, observation/interpretation separation, prediction before testing, explicit roles and mixed capture provenance, retained source diff and test output, truthful index counts and people/system/question/correction lenses, and absence of live template placeholders or specimen facts. No explanatory causal claim beyond the bounded file-existence result. Local link and preservation inspection passed (OBS-0001.05). No open questions or corrections require IDs. Sketch and companion-plate checks are not applicable: this entry is Markdown-only. Browser, JavaScript-disabled and print rendering were not checked; this was a source-level routine repair, and visual validation remains outside the observed result. Installation times are unknown; reconstruction sources are recorded. No dependencies, external services, delegation or commits were used.
**Repository state:** Local working files: added starter notebook and this live record; appended AGENTS instructions; updated both notebook indexes; corrected root HTML. No commit asserted. Exact final source SHA-256 values:

```text
1694a0ffe04238eb08c7eb968bc0d6fc4978bf7d9450ea04d21560b9e6d6002d  index.html
001fdd961cf7e18fa6ef4ba7a14f1dccff00b315dd26f8b9f653d4b1fe7e54d8  GUIDE.md
28c800c5a6b5615f837cbcff778e03166110ac1809873fe3d5c22374975f8664  check.py
df42c29ef6146413b15bd4b09f18d293a7cb990f1cb20b5ba2184cc6c94cf67d  AGENTS.md
```

**Signed:** Codex / 2026-09-06T16:59:37+00:00 / own author and operator attestation. **Witness:** None; no independent witnessing event. **Next entry:** None planned.
