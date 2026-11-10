// Checks a written chapter against the mechanical part of the spec's chapter format.
//   npm run check            every written chapter (no stub box)
//   npm run check -- 1.7     that chapter, even if it's still a stub
//
// Only rules a script can decide without judgment or network belong here. Left out on purpose:
// prices (chapters legitimately quote historical or made-up example prices), "Look for:" (some
// callouts explain what to look for in the surrounding text), and whether links still resolve
// (sites block bots; that's the fact-checker's job).
//
// The core (checkChapter) is pure: the chapter text and the resources catalog come in as arguments.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'
import { BOOK_DIR, ROOT, loadParts } from './chapters.mjs'

const SECTIONS = ['Why this matters', 'Explanation', 'Practice', 'Check questions', 'My understanding']
const TYPES = ['article', 'video', 'paper', 'book', 'repo', 'docs']
// Resource callouts: "::: info 📖 Read now", "::: tip ▶️ Watch", "::: tip 📕 Book", …
const RESOURCE_CALLOUT = /^::: (?:info|tip) (?:📖|▶️|📄|📕)/
// a qualifier may follow the type or the priority: "docs/course", "optional here (…)"
const DESCRIPTOR = new RegExp(`· (${TYPES.join('|')})\\b[^·]* · ~[^·]+ · (?:\\*\\*)?(essential|optional)\\b`)
const URL = /\]\((https?:\/\/[^)\s]+)\)/g

// → [{ rule, line, message }], line numbers 1-based in the whole file (frontmatter included)
export function checkChapter(markdown, { resourceUrls }) {
  const problems = []
  const add = (rule, line, message) => problems.push({ rule, line, message })
  const lines = markdown.split('\n')
  const inCode = codeLines(lines)
  const prose = lines.map((text, i) => ({ text, line: i + 1 })).filter((l) => !inCode[l.line - 1])

  // sections: exactly the five ## headings, in order
  const headings = prose.filter((l) => l.text.startsWith('## ')).map((l) => ({ ...l, name: l.text.slice(3).trim() }))
  const names = headings.map((h) => h.name)
  if (names.join('|') !== SECTIONS.join('|')) {
    add('sections', headings[0]?.line ?? 1, `## headings are [${names.join(', ')}], expected [${SECTIONS.join(', ')}]`)
  }
  const section = (name) => {
    const i = headings.findIndex((h) => h.name === name)
    if (i === -1) return null
    const end = headings[i + 1]?.line ?? lines.length + 1
    return { line: headings[i].line, lines: prose.filter((l) => l.line > headings[i].line && l.line < end) }
  }

  // stub leftovers
  for (const l of prose) {
    if (l.text.startsWith('::: warning Stub')) add('stub', l.line, 'stub box still present')
    else if (/\bTODO\b/.test(l.text)) add('stub', l.line, 'TODO left in the chapter')
    else if (/^### Planned resources/.test(l.text)) add('stub', l.line, '"Planned resources" list from the stub still present')
  }

  // last_verified: a YYYY-MM-DD date
  const { data } = matter(markdown)
  const verified = data.last_verified
  const isDate = verified instanceof Date || (typeof verified === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(verified))
  if (!isDate) {
    const line = lines.findIndex((l) => l.startsWith('last_verified:')) + 1
    add('last-verified', line || 1, 'last_verified must be set to the date every link was checked (YYYY-MM-DD)')
  }

  // My understanding: only the learner writes here
  const mine = section('My understanding')
  if (mine) {
    const text = mine.lines.map((l) => l.text).join('\n').replace(/<!--[\s\S]*?-->/g, '').trim()
    if (text) add('my-understanding', mine.line, '"My understanding" must stay empty: the learner writes it')
  }

  // resource callouts: tagged, and listed in book/resources.md
  prose.forEach((l, i) => {
    if (!RESOURCE_CALLOUT.test(l.text)) return
    const descriptor = prose.slice(i + 1).find((n) => n.text.trim())
    const text = descriptor?.text ?? ''
    const line = descriptor?.line ?? l.line
    const urls = [...text.matchAll(URL)].map((m) => m[1])
    if (!DESCRIPTOR.test(text)) {
      add('resource-tags', line, `resource line needs "· type · ~time · essential|optional" (type: ${TYPES.join('/')})`)
    }
    if (!urls.length) add('resource-catalog', line, 'resource line has no link')
    else if (!urls.some((u) => resourceUrls.has(u))) add('resource-catalog', line, `not in book/resources.md: ${urls[0]}`)
  })

  // check questions: each numbered question has a <details> answer
  const questions = section('Check questions')
  if (questions) {
    const items = questions.lines.filter((l) => /^\d+\. /.test(l.text))
    if (!items.length) add('check-questions', questions.line, 'no numbered check questions')
    items.forEach((item, i) => {
      const end = items[i + 1]?.line ?? Infinity
      const hasAnswer = questions.lines.some((l) => l.line > item.line && l.line < end && l.text.includes('<details>'))
      if (!hasAnswer) add('check-questions', item.line, 'question has no <details> answer')
    })
  }

  return problems
}

// true for lines inside ``` or ~~~ fences (fence lines included)
function codeLines(lines) {
  let fence = null
  return lines.map((l) => {
    const m = l.trim().match(/^(`{3,}|~{3,})/)
    if (fence) {
      if (m && m[1][0] === fence[0] && m[1].length >= fence.length) fence = null
      return true
    }
    if (m) {
      fence = m[1]
      return true
    }
    return false
  })
}

export function resourceUrlsFrom(resourcesMarkdown) {
  return new Set([...resourcesMarkdown.matchAll(URL)].map((m) => m[1]))
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const ids = process.argv.slice(2)
  const all = loadParts().flatMap((p) => p.chapters)
  const unknown = ids.filter((id) => !all.some((c) => c.id === id))
  if (unknown.length) {
    console.error(`No chapter ${unknown.join(', ')}`)
    process.exit(1)
  }
  const chapters = ids.length ? all.filter((c) => ids.includes(c.id)) : all.filter((c) => c.written)
  const resourceUrls = resourceUrlsFrom(fs.readFileSync(path.join(BOOK_DIR, 'resources.md'), 'utf8'))

  let failed = 0
  for (const c of chapters) {
    const problems = checkChapter(fs.readFileSync(path.join(ROOT, c.file), 'utf8'), { resourceUrls })
    if (problems.length) failed++
    for (const p of problems) console.log(`${c.file}:${p.line}  ${p.rule}  ${p.message}`)
  }
  console.log(`${chapters.length - failed} of ${chapters.length} chapters pass`)
  process.exit(failed ? 1 : 0)
}
