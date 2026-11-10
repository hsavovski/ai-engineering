// Loads the two catalogs the book is built from: chapters (book/part-NN-<slug>/ frontmatter)
// and experiments (experiments/NN-name/README.md).
// Shared by the VitePress config (sidebar, chapter index, scripts/book-build.mjs) and scripts/progress.mjs.
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

export function loadParts() {
  const parts = []
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
