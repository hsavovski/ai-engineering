// Book pages derived from repo sources, rendered at build time and never committed (docs/adr/0001).
//
// - Markers: a hand-written page holds a line starting with `<!-- derived:NAME -->`, and the whole
//   line is replaced before VitePress compiles the page (and before local search indexes it).
//   Anything after the marker on that line shows only on GitHub, e.g. a "renders in the book" hint.
//   `index.md` → `map` (per-part chapter maps), `glossary.md` → `glossary` (GLOSSARY.md).
// - Experiments: `book/experiments/` is owned by this module and gitignored. Its pages are written
//   from experiments/*/README.md when the config loads, and rewritten while `npm run dev` runs.
//
// The core (renderPage, experimentPages) is pure: sources come in as arguments.
// bookBuild() is the file-reading adapter VitePress uses.
import fs from 'node:fs'
import path from 'node:path'
import { BOOK_DIR, ROOT, loadExperiments } from './chapters.mjs'

const REPO = 'https://github.com/hsavovski/ai-engineering'
const GLOSSARY = path.join(ROOT, 'GLOSSARY.md')
const EXPERIMENTS_SOURCE = path.join(ROOT, 'experiments')
const EXPERIMENTS_TARGET = path.join(BOOK_DIR, 'experiments')
const MARKER = /^<!-- derived:([\w-]+) -->.*$/gm

// Pages that must carry a marker, so deleting one fails the build instead of dropping the content
const REQUIRED = { 'index.md': 'map', 'glossary.md': 'glossary' }

const RENDERERS = {
  map: ({ parts }) => renderMaps(parts),
  glossary: ({ glossary }) =>
    glossary
      // GLOSSARY.md links chapters as repo paths (book/part-NN-*/x.md) so they work on GitHub;
      // the book needs site paths (/part-NN-*/x).
      .replace(/\]\(book\/glossary\.md\)/g, '](/glossary)')
      .replace(/\]\(book\/([^)]+?)\.md\)/g, '](/$1)'),
}

// sources: { parts, glossary }. Read lazily, so a getter can load a source only when a page needs it.
export function renderPage(relativePath, markdown, sources) {
  const required = REQUIRED[relativePath]
  if (required && !markdown.includes(`<!-- derived:${required} -->`)) {
    throw new Error(`book/${relativePath} is missing its <!-- derived:${required} --> marker`)
  }
  return markdown.replace(MARKER, (_, name) => {
    const render = RENDERERS[name]
    if (!render) throw new Error(`book/${relativePath}: unknown marker <!-- derived:${name} -->`)
    return render(sources)
  })
}

// One flowchart per part: its chapters, plus prerequisites from other parts as grey nodes.
function renderMaps(parts) {
  const byId = new Map(parts.flatMap((p) => p.chapters.map((c) => [c.id, c])))
  const node = (id) => `c${id.replace('.', '_')}`
  const label = (c) => `${c.id} ${c.title}`.replace(/"/g, "'")

  function partMap(p) {
    const own = new Set(p.chapters.map((c) => c.id))
    const external = new Set()
    const lines = ['```mermaid', 'flowchart TB']
    for (const c of p.chapters) lines.push(`  ${node(c.id)}["${label(c)}"]${c.tier === 'deeper' ? ':::deeper' : ''}`)
    for (const c of p.chapters) {
      for (const n of c.needs) {
        if (!own.has(n)) external.add(n)
        lines.push(`  ${node(n)} --> ${node(c.id)}`)
      }
    }
    for (const n of external) {
      const c = byId.get(n)
      lines.push(`  ${node(n)}["${c ? label(c) : n}"]:::external`)
    }
    lines.push('  classDef deeper stroke-dasharray: 5 5')
    lines.push('  classDef external fill:none,stroke:#999,color:#999')
    lines.push('```')
    return lines.join('\n')
  }

  const maps = parts
    .filter((p) => p.chapters.length)
    .map((p) => `### Part ${p.number} · ${p.title}\n\n${partMap(p)}`)
    .join('\n\n')
  return `Arrows point from a chapter to the chapters that need it. Dashed boxes are Deeper chapters; grey boxes are prerequisites from other parts.\n\n${maps}`
}

// → [{ file, content }]: one page per experiment plus index.md, paths relative to book/experiments/
export function experimentPages(experiments) {
  return [
    ...experiments.map((e) => ({ file: `${e.dir}.md`, content: renderExperiment(e) })),
    { file: 'index.md', content: renderExperimentsIndex(experiments) },
  ]
}

const HEADER = '<!-- Generated from experiments/*/README.md by scripts/book-build.mjs; gitignored. Edit the README, not this file. -->'

// The README stays the source of truth (readable on GitHub next to its code); the book gets a copy.
// Relative links in a README point at files next to it, so they are rewritten to the GitHub repo.
function renderExperiment({ dir, text, files }) {
  const blob = (rel) => `${REPO}/blob/main/experiments/${dir}/${rel}`
  const body = text
    // links into the book: ../../book/part-NN-x/y.md → /part-NN-x/y
    .replace(/\]\((?:\.\.\/)+book\/([^)]+?)\.md(#[^)]*)?\)/g, '](/$1$2)')
    // other relative links: files next to the README → GitHub
    .replace(/\]\((?!https?:|\/|#|mailto:)([^)\s]+)\)/g, (_, rel) => `](${blob(rel.replace(/^\.\//, ''))})`)

  const filesSection = files.length
    ? `\n\n## Files\n\nOn GitHub, in [\`experiments/${dir}/\`](${REPO}/tree/main/experiments/${dir}):\n\n${files.map((f) => `- [\`${f}\`](${blob(f)})`).join('\n')}\n`
    : '\n'

  return `${HEADER}\n\n${body.trimEnd()}${filesSection}`
}

function renderExperimentsIndex(experiments) {
  const rows = experiments.map((e) => `| [${e.title}](${e.link}) | ${firstParagraph(e.text)} |`).join('\n')
  return `${HEADER}

# Experiments

Hands-on runs, one folder each in \`experiments/NN-name/\`: the code plus a README with what I tried, what happened and why. Each page here is that README.

| Experiment | What I tried |
|---|---|
${rows}
`
}

// first paragraph under "## What I tried"
function firstParagraph(text) {
  const para = text.split(/^## What I tried\s*$/m)[1]?.trim().split(/\n\s*\n/)[0] ?? ''
  return para.replace(/\s+/g, ' ').replace(/\|/g, '\\|')
}

// Writes book/experiments/ to match the experiments: only files whose content changed, so the dev
// server reloads just those pages, and removes pages whose experiment is gone.
function writeExperimentPages(experiments) {
  fs.mkdirSync(EXPERIMENTS_TARGET, { recursive: true })
  const pages = experimentPages(experiments)
  for (const { file, content } of pages) {
    const target = path.join(EXPERIMENTS_TARGET, file)
    if (!fs.existsSync(target) || fs.readFileSync(target, 'utf8') !== content) fs.writeFileSync(target, content)
  }
  const keep = new Set(pages.map((p) => p.file))
  for (const file of fs.readdirSync(EXPERIMENTS_TARGET)) {
    if (!keep.has(file)) fs.rmSync(path.join(EXPERIMENTS_TARGET, file), { recursive: true, force: true })
  }
}

// Wires the module into VitePress. Call it from the config, before VitePress resolves pages: it
// writes book/experiments/ straight away. Chapter maps use `parts` as loaded with the config, so
// they update on restart, like the sidebar; GLOSSARY.md and experiment READMEs reload live.
export function bookBuild({ parts, experiments }) {
  writeExperimentPages(experiments)

  const sources = {
    parts,
    get glossary() {
      return fs.readFileSync(GLOSSARY, 'utf8')
    },
  }

  const plugin = {
    name: 'book-build',
    // before VitePress's own plugin turns the markdown into Vue
    enforce: 'pre',
    transform(code, id) {
      const file = id.split('?')[0]
      if (!file.endsWith('.md') || !file.startsWith(BOOK_DIR + path.sep)) return
      return renderPage(path.relative(BOOK_DIR, file).split(path.sep).join('/'), code, sources)
    },
    configureServer(server) {
      server.watcher.add([GLOSSARY, EXPERIMENTS_SOURCE])
      const onExperimentChange = (file) => {
        if (file.startsWith(EXPERIMENTS_SOURCE + path.sep)) writeExperimentPages(loadExperiments())
      }
      server.watcher.on('change', onExperimentChange)
      server.watcher.on('add', onExperimentChange)
      server.watcher.on('unlink', onExperimentChange)
    },
    handleHotUpdate({ file, server }) {
      if (file !== GLOSSARY) return
      const page = server.moduleGraph.getModuleById(path.join(BOOK_DIR, 'glossary.md'))
      return page ? [page] : []
    },
  }

  // Local search reads pages from disk, so it needs the markers filled too
  const searchRender = (src, env, md) => {
    const html = md.render(renderPage(env.relativePath, src, sources), env)
    return env.frontmatter?.search === false ? '' : html
  }

  return { plugin, searchRender }
}
