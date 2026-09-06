import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, cp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { identityIssues, indexIssues, anchorIds, duplicateValues } from './record-integrity.mjs';

test('current full reference has complete identity; a removed operator fails', async () => {
  const record = await readFile('lab-journal/examples/2026-09-06-instrumentation-scope-correction.md', 'utf8');
  assert.deepEqual(identityIssues(record), []);
  assert.ok(identityIssues(record.replace(/^\| Operator[^\n]*\n/m, '')).includes('missing identity operator'));
});
test('archive rejects duplicate stable IDs, incorrect counts and missing rows', () => {
  const records = [{ name: 'one.md', source: '| Entry ID | LN-0001 |' }];
  const md = '**Total live entries:** 1\n| LN-0001 | [One](one.md) |';
  const html = '<strong>1</strong><span>Live records</span><article data-markdown="one.md">';
  assert.deepEqual(indexIssues(records, md, html), []);
  assert.ok(indexIssues(records, md.replace('** 1', '** 2'), html).some(s => s.includes('counts')));
  assert.ok(indexIssues([...records, { name: 'two.md', source: records[0].source }], md, html).some(s => s.includes('duplicate live entry ID')));
  assert.ok(indexIssues(records, md, '').some(s => s.includes('missing archive row')));
});
test('fragments ignore fenced demonstrations and distinguish duplicate explicit IDs', () => {
  const md = '# A heading\n# A heading\n<a id="OBS-0001.01"></a>\n```html\n<a id="fake"></a>\n```\n';
  const ids = anchorIds(md);
  assert.ok(ids.includes('a-heading-1'));
  assert.ok(ids.includes('OBS-0001.01'));
  assert.ok(!ids.includes('fake'));
  assert.ok(!ids.includes('missing-fragment'));
  assert.deepEqual(duplicateValues(anchorIds('<i id="same"></i><b id="same"></b>', true)), ['same']);
});

test('validator rejects broken fragment links and rewritten signed history in an isolated copy', async () => {
  const root = await mkdtemp(join(tmpdir(), 'journal-integrity-'));
  try {
    for (const name of ['lab-journal', 'scripts', 'starter-kit', 'docs', 'skills', 'AGENTS.md', 'CLAUDE.md', 'README.md', 'CONTRIBUTING.md']) {
      await cp(name, join(root, name), { recursive: true });
    }
    const run = () => spawnSync(process.execPath, [join(root, 'scripts/validate-lab-journal.mjs')], { encoding: 'utf8' });
    const valid = run();
    assert.equal(valid.status, 0, valid.stderr);
    const path = join(root, 'lab-journal/index.md');
    const original = await readFile(path, 'utf8');
    await writeFile(path, original + '\n[Broken fragment](TEMPLATE.md#does-not-exist)\n');
    const broken = run();
    assert.equal(broken.status, 1);
    assert.match(broken.stderr, /missing fragment/);
    await writeFile(path, original);
    const old = join(root, 'lab-journal/examples/2026-08-30-reply-before-close.md');
    await writeFile(old, 'Rewritten claim\n' + await readFile(old, 'utf8'));
    const rewritten = run();
    assert.equal(rewritten.status, 1);
    assert.match(rewritten.stderr, /preserved legacy record was rewritten/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
