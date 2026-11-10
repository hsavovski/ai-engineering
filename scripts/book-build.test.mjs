import { test } from 'node:test'
import assert from 'node:assert/strict'
import { renderPage, experimentPages } from './book-build.mjs'

const chapter = (id, title, extra = {}) => ({ id, title, tier: 'core', needs: [], ...extra })
const parts = [
  { number: 0, title: 'Catch-up', chapters: [chapter('0.1', 'What changed')] },
  {
    number: 1,
    title: 'How LLMs work',
    chapters: [chapter('1.1', 'Next-token prediction', { needs: ['0.1'] }), chapter('1.14', 'Interpretability', { tier: 'deeper', needs: ['1.1'] })],
  },
  { number: 2, title: 'Empty part', chapters: [] },
]
const sources = { parts, glossary: '# Glossary\n\n| Token | … | [1.2](book/part-01-how-llms-work/1.2-tokenization.md) |\n\nRendered at [Glossary](book/glossary.md).' }

test('the map marker line becomes one flowchart per part with chapters', () => {
  const out = renderPage('index.md', '# Home\n\n<!-- derived:map --> *renders in the book*\n\nAfter.', sources)
  assert.doesNotMatch(out, /derived:map|renders in the book/)
  assert.match(out, /### Part 0 · Catch-up/)
  assert.match(out, /### Part 1 · How LLMs work/)
  assert.doesNotMatch(out, /Empty part/)
  assert.match(out, /c1_14\["1.14 Interpretability"\]:::deeper/)
  // a prerequisite from another part shows as a grey node
  assert.match(out, /c0_1 --> c1_1/)
  assert.match(out, /c0_1\["0.1 What changed"\]:::external/)
  assert.match(out, /After\.$/)
})

test('the glossary marker inlines GLOSSARY.md with chapter links turned into site paths', () => {
  const out = renderPage('glossary.md', '<!-- derived:glossary --> *edit GLOSSARY.md*\n', sources)
  assert.match(out, /^# Glossary/)
  assert.match(out, /\[1\.2\]\(\/part-01-how-llms-work\/1\.2-tokenization\)/)
  assert.match(out, /\[Glossary\]\(\/glossary\)/)
})

test('sources are only read when a page uses them', () => {
  const lazy = {
    parts,
    get glossary() {
      throw new Error('glossary read')
    },
  }
  assert.equal(renderPage('part-01-how-llms-work/1.1-next-token-prediction.md', '# 1.1\n', lazy), '# 1.1\n')
})

test('an unknown marker fails', () => {
  assert.throws(() => renderPage('paths.md', '<!-- derived:paths -->\n', sources), /unknown marker <!-- derived:paths -->/)
})

test('a required page without its marker fails', () => {
  assert.throws(() => renderPage('index.md', '# Home\n', sources), /book\/index\.md is missing its <!-- derived:map --> marker/)
  assert.throws(() => renderPage('glossary.md', '# Glossary\n', sources), /missing its <!-- derived:glossary -->/)
})

const experiment = {
  dir: '06-parallel-tasks',
  title: '06 Parallel tasks',
  link: '/experiments/06-parallel-tasks',
  files: ['run.js', 'out/log.txt'],
  text: `# 06 – Parallel tasks

## What I tried

Can tasks | run in parallel?
Second line.

More. See [the script](run.js), [chapter 1.2](../../book/part-01-how-llms-work/1.2-tokenization.md#bpe), [web](https://example.com) and [top](#what-i-tried).
`,
}

test('an experiment page rewrites README links and lists its files on GitHub', () => {
  const pages = experimentPages([experiment])
  assert.deepEqual(pages.map((p) => p.file), ['06-parallel-tasks.md', 'index.md'])
  const page = pages[0].content
  assert.match(page, /^<!-- Generated from experiments/)
  assert.match(page, /\[the script\]\(https:\/\/github\.com\/hsavovski\/ai-engineering\/blob\/main\/experiments\/06-parallel-tasks\/run\.js\)/)
  assert.match(page, /\[chapter 1\.2\]\(\/part-01-how-llms-work\/1\.2-tokenization#bpe\)/)
  assert.match(page, /\[web\]\(https:\/\/example\.com\)/)
  assert.match(page, /\[top\]\(#what-i-tried\)/)
  assert.match(page, /## Files\n\nOn GitHub, in \[`experiments\/06-parallel-tasks\/`\]/)
  assert.match(page, /- \[`out\/log\.txt`\]\(.+\/experiments\/06-parallel-tasks\/out\/log\.txt\)/)
})

test('the experiments index has one row per experiment with its first "What I tried" paragraph', () => {
  const index = experimentPages([experiment, { ...experiment, dir: '07-x', title: '07 X', link: '/experiments/07-x', files: [], text: '# 07 X\n' }]).at(-1).content
  assert.match(index, /\| \[06 Parallel tasks\]\(\/experiments\/06-parallel-tasks\) \| Can tasks \\\| run in parallel\? Second line\. \|/)
  assert.match(index, /\| \[07 X\]\(\/experiments\/07-x\) \|  \|/)
})
