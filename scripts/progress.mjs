// Regenerates the chapter table in PROGRESS.md from chapter frontmatter.
import fs from 'node:fs'
import path from 'node:path'
import { BOOK_DIR, loadParts } from './chapters.mjs'

const PROGRESS = path.resolve(BOOK_DIR, '../PROGRESS.md')
const START = '<!-- status:start -->'
const END = '<!-- status:end -->'

const parts = loadParts()
const chapters = parts.flatMap((p) => p.chapters)
const written = chapters.filter((c) => c.written)

// Reading status lives in each reader's browser (the badge on every chapter), so this
// table only tracks what's written.
const lines = [
  START,
  `${written.length} of ${chapters.length} chapters written.`,
  '',
  '| Chapter | Title | Tier | Written |',
  '|---|---|---|---|',
  ...parts.flatMap((p) =>
    p.chapters.map((c) =>
      c.written ? `| ${c.id} | [${c.title}](${c.file}) | ${c.tier} | ✓ |` : `| ${c.id} | ${c.title} | ${c.tier} | stub |`,
    ),
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
console.log(`Updated PROGRESS.md: ${written.length} of ${chapters.length} chapters written`)
