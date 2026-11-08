// Regenerates the chapter status table in PROGRESS.md from chapter frontmatter.
import fs from 'node:fs'
import path from 'node:path'
import { BOOK_DIR, loadParts } from './chapters.mjs'

const PROGRESS = path.resolve(BOOK_DIR, '../PROGRESS.md')
const START = '<!-- status:start -->'
const END = '<!-- status:end -->'

const parts = loadParts()
const chapters = parts.flatMap((p) => p.chapters)

const counts = { 'not-started': 0, reading: 0, practiced: 0, understood: 0 }
for (const c of chapters) counts[c.status] = (counts[c.status] ?? 0) + 1

const lines = [
  START,
  `${chapters.length} chapters · ${Object.entries(counts).map(([s, n]) => `${s}: ${n}`).join(' · ')}`,
  '',
  '| Chapter | Title | Tier | Status |',
  '|---|---|---|---|',
  ...parts.flatMap((p) =>
    p.chapters.map((c) => `| ${c.id} | [${c.title}](${c.file}) | ${c.tier} | ${c.status} |`),
  ),
  END,
]

const text = fs.readFileSync(PROGRESS, 'utf8')
const from = text.indexOf(START)
const to = text.indexOf(END)
if (from === -1 || to === -1) {
  console.error(`PROGRESS.md is missing the ${START} / ${END} markers`)
  process.exit(1)
}
fs.writeFileSync(PROGRESS, text.slice(0, from) + lines.join('\n') + text.slice(to + END.length))
console.log(`Updated PROGRESS.md: ${chapters.length} chapters`)
