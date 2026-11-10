// Scans book/part-NN-<slug>/ folders and reads chapter frontmatter.
// Shared by the VitePress config (sidebar, chapter index) and scripts/progress.mjs.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

export const BOOK_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../book')

const PART_DIR = /^part-(\d+)-(.+)$/

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
