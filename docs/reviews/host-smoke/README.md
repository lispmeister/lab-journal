# Actual host authoring smoke — 2026-09-06

Three isolated temporary projects received the current skill bundle in each
host's documented project-skill location. No personal configuration, credentials,
or other project was changed. [Bundle hashes](tested-bundle-sha256.json) identify
the exact tested copy; later accessibility/style edits do not change the tested
skill instructions. Prompts and the successful generated fixture are retained.

| Host | Actual result | Limit |
|---|---|---|
| Codex desktop CLI 0.153.4 | Adoption, routine href repair and full correction completed; project check passed; protected originals unchanged | One bounded fixture; no general guarantee across models or tasks |
| Claude Code | API 403 before authoring | Organization disabled subscription access for Claude Code; no inference or authoring verification |
| Grok Build | Skill/protocol read; three headless attempts cancelled at Execute | No notebook created; cancellation cause not established; permission-rule retries did not resolve it |

The earlier npm-installed Codex CLI rejected its configured model as requiring
a newer CLI. Retrying with the already-installed desktop CLI succeeded. No
model, account configuration, or global installation was changed.

## Reproduction and retained evidence

Use an empty fixture containing `index.html` with `href="GUIDE.mdd"`, `GUIDE.md`,
the retained `check.py`, and the original isolated-project paragraph from
`AGENTS.md`. Copy the complete skill into `.agents/skills/lab-journal` for Codex,
`.claude/skills/lab-journal` for Claude, or `.grok/skills/lab-journal` for Grok.
Use the retained adoption prompt, with `$lab-journal` for Codex and
`/lab-journal` for the other hosts. Commands were:

```sh
codex exec --sandbox workspace-write --skip-git-repo-check --ephemeral --json - < prompt.txt
claude -p --permission-mode acceptEdits --allowedTools 'Read,Write,Edit,Glob,Grep,Skill,Bash' --tools 'Read,Write,Edit,Glob,Grep,Skill,Bash' --strict-mcp-config --mcp-config '{"mcpServers":{}}' --setting-sources project --no-session-persistence --output-format json < prompt.txt
grok --no-subagents --disable-web-search --permission-mode acceptEdits --allow Execute --max-turns 35 --output-format json --prompt-file prompt.txt
```

Earlier Grok attempts used scoped `Bash(...)` rules and then `--allow Bash`.
Both also cancelled. The exported transcript identifies the attempted tool
as Execute. Do not interpret the CLI's exit status 0 as completed work: its
structured result says `cancelled`, and the notebook directory was absent.

For Codex's second phase, add the deliberately false, explicitly synthetic
`fixture-legacy.md`, hash it and the signed first entry, then run the same
Codex command with `correction-prompt.txt`. The false claim is that a file-existence
check verifies rendered browser navigation. It is a test fixture, not a claim
made by the first actual entry.

- [Routine adoption/repair record](codex-fixture/lab-journal/journal-2026-09-06-notebook-adoption-guide-fix.md)
- [Full correction record](codex-fixture/lab-journal/journal-2026-09-06-synthetic-browser-claim-correction.md)
- [Both indexes and complete retained fixture](codex-fixture/lab-journal/index.md)
- [Protected-original hashes](codex-fixture/preservation-before.json)
- [Codex adoption events](codex-adoption-events.json) and [correction events](codex-correction-events.json)
- [Claude response](claude-result.json); [Grok result](grok-result.json) and [transcript](grok-transcript.md)

Review of the produced records found explicit roles, mixed-capture disclosure,
predictions before the check, retained inline results, bounded conclusions,
truthful witness status, full correction targeting, question ownership and both
indexes updated. Both records pass the distribution's identity checker. The
reviewer independently compared the protected source hashes after correction:
both matched. These are source-level checks; actual browser navigation in the
fixture remains untested and is explicitly left open by the generated correction.

Retained event JSON excludes reasoning and host session identifiers. It includes
local temporary paths and commands for reproducibility. The fixture's generated
notebook is evidence, not another distribution copy to synchronize.

## Follow-up — 2026-09-06, LN-0014

A fourth Grok run used `--sandbox workspace --permission-mode dontAsk
--allow 'Bash(*)' --allow Edit --allow Write` with the same isolated prompt.
This follows the documented headless mode in the
[Grok enterprise guide](https://docs.x.ai/build/enterprise) and
[permission rules](https://docs.x.ai/build/features/permissions).
It again returned `cancelled`, and no notebook directory was created.
No permission protections were disabled and no global configuration was changed.
The cancellation cause remains unestablished. Claude's organization-policy 403
has no known intervening access change; no redundant invocation was made.
