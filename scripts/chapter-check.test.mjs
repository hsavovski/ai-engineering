import { test } from 'node:test'
import assert from 'node:assert/strict'
import { checkChapter, resourceUrlsFrom } from './chapter-check.mjs'

const resourceUrls = resourceUrlsFrom('| [ ] | [Attention paper](https://arxiv.org/abs/1706.03762) | paper | ~1 h | essential | [1.4](/x) |')

// A chapter that passes every rule; each test breaks one thing.
const good = `---
title: Attention
chapter: "1.4"
last_verified: 2026-11-09
---

# Attention

## Why this matters

Why.

## Explanation

::: info 📖 Read now
[Attention Is All You Need](https://arxiv.org/abs/1706.03762) · paper · ~1 h · **essential**

Look for: the attention formula.
:::

\`\`\`python
# TODO inside code is fine
## not a heading
\`\`\`

## Practice

Do it.

## Check questions

1. What does attention compute?

   <details><summary>Answer</summary>

   A weighted average.

   </details>

2. Why scale by √d?

   <details><summary>Answer</summary>

   Softmax saturates.

   </details>

## My understanding

<!-- Written by the learner, in their own words. Agents never fill this in. -->
`

const check = (md) => checkChapter(md, { resourceUrls })
const rules = (md) => check(md).map((p) => p.rule)

test('a chapter in the spec format passes', () => {
  assert.deepEqual(check(good), [])
})

test('sections must be the five ## headings in order', () => {
  const swapped = good.replace('## Practice\n\nDo it.\n\n', '').replace('## My understanding', '## Practice\n\nDo it.\n\n## My understanding')
  assert.deepEqual(rules(swapped), ['sections'])
  assert.match(check(good.replace('## Practice', '## Exercises'))[0].message, /\[Why this matters, Explanation, Exercises, Check questions, My understanding\]/)
})

test('stub leftovers fail with their line', () => {
  const stub = good.replace('# Attention\n', '# Attention\n\n::: warning Stub\nNot written.\n:::\n\n<!-- TODO (chapter task): write it -->\n\n### Planned resources\n')
  const problems = check(stub)
  assert.deepEqual(problems.map((p) => [p.rule, p.line]), [
    ['stub', 9],
    ['stub', 13],
    ['stub', 15],
  ])
})

test('last_verified must be a date', () => {
  assert.deepEqual(rules(good.replace('last_verified: 2026-11-09', 'last_verified:')), ['last-verified'])
  assert.deepEqual(rules(good.replace('last_verified: 2026-11-09', 'last_verified: "2026-11-09"')), [])
  assert.equal(check(good.replace('last_verified: 2026-11-09\n', '')).length, 1)
})

test('"My understanding" may hold only comments', () => {
  assert.deepEqual(rules(good + '\nI think attention is a lookup.\n'), ['my-understanding'])
})

test('resource callouts need type, time and priority, and a row in resources.md', () => {
  const untagged = good.replace(' · paper · ~1 h · **essential**', ' (paper)')
  assert.deepEqual(rules(untagged), ['resource-tags'])
  assert.deepEqual(rules(good.replace(' · paper · ', ' · podcast · ')), ['resource-tags'])
  // qualifiers after the type or priority are fine
  assert.deepEqual(rules(good.replace(' · paper · ~1 h · **essential**', ' · docs/course · ~1 h to read · optional here (see 10.3)')), [])
  const uncatalogued = check(good.replace('https://arxiv.org/abs/1706.03762', 'https://example.com/new'))
  assert.deepEqual(uncatalogued.map((p) => [p.rule, p.line, p.message]), [['resource-catalog', 16, 'not in book/resources.md: https://example.com/new']])
})

test('callouts that are not resources are ignored', () => {
  assert.deepEqual(rules(good.replace('::: info 📖 Read now\n', '::: tip 🧪 Try\n')), [])
})

test('every check question needs a <details> answer', () => {
  const noAnswer = good.replace(/2\. Why scale by √d\?\n\n   <details>[\s\S]*?<\/details>\n/, '2. Why scale by √d?\n')
  assert.deepEqual(check(noAnswer).map((p) => [p.rule, p.message]), [['check-questions', 'question has no <details> answer']])
  const none = good.replace(/## Check questions\n[\s\S]*?## My understanding/, '## Check questions\n\n## My understanding')
  assert.deepEqual(rules(none), ['check-questions'])
})
