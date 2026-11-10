// Loads the two catalogs the book is built from: chapters (book/part-NN-<slug>/ frontmatter)
// and experiments (experiments/NN-name/README.md).
// Shared by the VitePress config (sidebar, chapter index, scripts/book-build.mjs), scripts/chapter-check.mjs
// and scripts/progress.mjs.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

export const BOOK_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../book')
export const ROOT = path.resolve(BOOK_DIR, '..')
const EXPERIMENTS_DIR = path.join(ROOT, 'experiments')

const PART_DIR = /^part-(\d+)-(.+)$/
const EXPERIMENT_DIR = /^(\d+)-(.+)$/

// "1.10" sorts after "1.9"
export function compareIds(a, b) {
  const pa = a.split('.').map(Number)
  const pb = b.split('.').map(Number)
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] ?? -1) - (pb[i] ?? -1)
    if (d !== 0) return d
  }
  return 0
}

function titleCase(slug) {
  return slug.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase())
}

const TIERS = ['core', 'deeper']
const STATUSES = ['not-started', 'reading', 'practiced', 'understood']

// Frontmatter problems in one chapter file; `needs` ids are checked against the whole book later.
function frontmatterProblems(file, partNumber, data) {
  const problems = []
  const id = file.match(/^(\d+\.\d+)-/)?.[1]
  if (typeof data.chapter !== 'string') {
    problems.push(`chapter: ${JSON.stringify(data.chapter)} must be a quoted id (YAML reads 1.10 as 1.1)`)
  } else if (data.chapter !== id) {
    problems.push(`chapter: "${data.chapter}" doesn't match the file name (${id ?? 'no id prefix'})`)
  }
  if (data.part != null && data.part !== partNumber) problems.push(`part: ${data.part} but the file is in part ${partNumber}`)
  if (data.tier != null && !TIERS.includes(data.tier)) problems.push(`tier: "${data.tier}" is not one of ${TIERS.join(', ')}`)
  if (data.status != null && !STATUSES.includes(data.status)) problems.push(`status: "${data.status}" is not one of ${STATUSES.join(', ')}`)
  for (const n of data.needs ?? []) {
    if (typeof n !== 'string') problems.push(`needs: ${JSON.stringify(n)} must be a quoted id`)
  }
  return problems
}

// Throws on invalid chapter frontmatter, so a typo fails dev, build and progress instead of
// rendering a wrong sidebar, badge or map.
export function loadParts() {
  const parts = []
  const problems = []
  for (const dir of fs.readdirSync(BOOK_DIR).sort()) {
    const m = dir.match(PART_DIR)
    if (!m) continue
    const partDir = path.join(BOOK_DIR, dir)
    let title = titleCase(m[2])
    const chapters = []

    for (const file of fs.readdirSync(partDir)) {
      if (!file.endsWith('.md')) continue
      const { data, content } = matter(fs.readFileSync(path.join(partDir, file), 'utf8'))
      if (file === 'index.md') {
        if (data.title) title = data.title
        continue
      }
      if (data.chapter == null) continue
      for (const p of frontmatterProblems(file, Number(m[1]), data)) problems.push(`book/${dir}/${file}: ${p}`)
      chapters.push({
        id: String(data.chapter),
        title: data.title ?? file,
        tier: data.tier ?? 'core',
        status: data.status ?? 'not-started',
        needs: (data.needs ?? []).map(String),
        // Stubs carry the "::: warning Stub" box until their task writes them
        written: !content.includes('::: warning Stub'),
        link: `/${dir}/${file.replace(/\.md$/, '')}`,
        file: path.join('book', dir, file),
      })
    }

    chapters.sort((a, b) => compareIds(a.id, b.id))
    parts.push({ number: Number(m[1]), title, dir, chapters })
  }

  const ids = new Set(parts.flatMap((p) => p.chapters.map((c) => c.id)))
  for (const c of parts.flatMap((p) => p.chapters)) {
    for (const n of c.needs) if (!ids.has(n)) problems.push(`${c.file}: needs: "${n}" is not a chapter`)
  }
  if (problems.length) throw new Error(`Invalid chapter frontmatter:\n${problems.map((p) => `  ${p}`).join('\n')}`)

  return parts.sort((a, b) => a.number - b.number)
}

export function loadExperiments() {
  if (!fs.existsSync(EXPERIMENTS_DIR)) return []
  return fs
    .readdirSync(EXPERIMENTS_DIR)
    .filter((dir) => EXPERIMENT_DIR.test(dir) && fs.existsSync(path.join(EXPERIMENTS_DIR, dir, 'README.md')))
    .sort()
    .map((dir) => {
      const text = fs.readFileSync(path.join(EXPERIMENTS_DIR, dir, 'README.md'), 'utf8')
      // "# 02 – Model comparison: …" → "02 Model comparison: …"
      const heading = text.match(/^# (.+)$/m)?.[1] ?? dir
      return {
        dir,
        title: heading.replace(/^(\d+)\s*[–-]\s*/, '$1 '),
        link: `/experiments/${dir}`,
        text,
        // everything else in the folder, for the page's "Files" section
        files: listFiles(path.join(EXPERIMENTS_DIR, dir)).filter((f) => f !== 'README.md'),
      }
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
