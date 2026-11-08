// Renders each experiments/NN-name/README.md into book/experiments/NN-name.md, plus an index page.
// The READMEs stay the source of truth (readable on GitHub next to their code); the book gets a copy.
// Relative links in a README point at files next to it, so they are rewritten to the GitHub repo.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { BOOK_DIR } from './chapters.mjs'

const ROOT = path.resolve(BOOK_DIR, '..')
const SOURCE_DIR = path.join(ROOT, 'experiments')
const TARGET_DIR = path.join(BOOK_DIR, 'experiments')
const REPO = 'https://github.com/hsavovski/ai-engineering'
const EXPERIMENT_DIR = /^(\d+)-(.+)$/
const HEADER = '<!-- Generated from experiments/*/README.md by `npm run experiments` (also runs before dev and build). Edit the README, not this file. -->'

export function loadExperiments() {
  if (!fs.existsSync(SOURCE_DIR)) return []
  return fs
    .readdirSync(SOURCE_DIR)
    .filter((dir) => EXPERIMENT_DIR.test(dir) && fs.existsSync(path.join(SOURCE_DIR, dir, 'README.md')))
    .sort()
    .map((dir) => {
      const text = fs.readFileSync(path.join(SOURCE_DIR, dir, 'README.md'), 'utf8')
      // "# 02 – Model comparison: …" → "02 Model comparison: …"
      const heading = text.match(/^# (.+)$/m)?.[1] ?? dir
      return { dir, title: heading.replace(/^(\d+)\s*[–-]\s*/, '$1 '), link: `/experiments/${dir}`, text }
    })
}

function listFiles(dir, prefix = '') {
  return fs
    .readdirSync(path.join(dir, prefix), { withFileTypes: true })
    .filter((e) => !e.name.startsWith('.') && e.name !== '__pycache__')
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((e) => {
      const rel = path.posix.join(prefix, e.name)
      return e.isDirectory() ? listFiles(dir, rel) : [rel]
    })
}

function render({ dir, text }) {
  const blob = (rel) => `${REPO}/blob/main/experiments/${dir}/${rel}`
  const body = text
    // links into the book: ../../book/part-NN-x/y.md → /part-NN-x/y
    .replace(/\]\((?:\.\.\/)+book\/([^)]+?)\.md(#[^)]*)?\)/g, '](/$1$2)')
    // other relative links: files next to the README → GitHub
    .replace(/\]\((?!https?:|\/|#|mailto:)([^)\s]+)\)/g, (_, rel) => `](${blob(rel.replace(/^\.\//, ''))})`)

  const files = listFiles(path.join(SOURCE_DIR, dir)).filter((f) => f !== 'README.md')
  const filesSection = files.length
    ? `\n\n## Files\n\nOn GitHub, in [\`experiments/${dir}/\`](${REPO}/tree/main/experiments/${dir}):\n\n${files.map((f) => `- [\`${f}\`](${blob(f)})`).join('\n')}\n`
    : '\n'

  return `${HEADER}\n\n${body.trimEnd()}${filesSection}`
}

function renderIndex(experiments) {
  const rows = experiments.map((e) => `| [${e.title}](${e.link}) | ${firstSentence(e.text)} |`).join('\n')
  return `${HEADER}

# Experiments

Hands-on runs, one folder each in \`experiments/NN-name/\`: the code plus a README with what I tried, what happened and why. Each page here is that README.

| Experiment | What I tried |
|---|---|
${rows}
`
}

// first paragraph under "## What I tried"
function firstSentence(text) {
  const para = text.split(/^## What I tried\s*$/m)[1]?.trim().split(/\n\s*\n/)[0] ?? ''
  return para.replace(/\s+/g, ' ').replace(/\|/g, '\\|')
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const experiments = loadExperiments()
  fs.rmSync(TARGET_DIR, { recursive: true, force: true })
  fs.mkdirSync(TARGET_DIR, { recursive: true })
  for (const e of experiments) fs.writeFileSync(path.join(TARGET_DIR, `${e.dir}.md`), render(e))
  fs.writeFileSync(path.join(TARGET_DIR, 'index.md'), renderIndex(experiments))
  console.log(`Updated book/experiments/ from ${experiments.length} experiment READMEs`)
}
