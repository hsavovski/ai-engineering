import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { loadParts, loadExperiments } from '../../scripts/chapters.mjs'
import { bookBuild } from '../../scripts/book-build.mjs'

const parts = loadParts()
const experiments = loadExperiments()
// derived pages: chapter maps, glossary, book/experiments/ (see scripts/book-build.mjs)
const book = bookBuild({ parts, experiments })

const sidebar = [
  {
    text: 'Start here',
    items: [
      { text: 'Home & map', link: '/' },
      { text: 'Suggested paths', link: '/paths' },
    ],
  },
  ...parts.map((p) => ({
    text: `Part ${p.number} · ${p.title}`,
    collapsed: p.number !== 0,
    items: p.chapters.map((c) => ({
      text: `${c.id} ${c.title}${c.tier === 'deeper' ? ' ◇' : ''}`,
      link: c.link,
    })),
  })),
  {
    text: 'Experiments',
    collapsed: true,
    items: [
      { text: 'All experiments', link: '/experiments/' },
      ...experiments.map((e) => ({ text: e.title, link: e.link })),
    ],
  },
  {
    text: 'Reference',
    items: [
      { text: 'Resources', link: '/resources' },
      { text: 'Landscape', link: '/landscape' },
      { text: 'Glossary', link: '/glossary' },
    ],
  },
]

export default withMermaid(
  defineConfig({
    title: 'AI Engineering',
    description: 'A study book: how LLMs work, agents, harnesses, and AI-native development',
    // served from GitHub Pages at https://hsavovski.github.io/ai-engineering/
    base: '/ai-engineering/',
    srcExclude: ['_template/**'],
    // mermaid 11 imports fastdom (UMD, no ESM export), which the plugin's pre-bundle list misses,
    // so `npm run dev` failed with "does not provide an export named 'default'".
    // Pre-bundling mermaid itself converts all of its CommonJS deps.
    vite: { optimizeDeps: { include: ['mermaid'] }, plugins: [book.plugin] },
    lastUpdated: true,
    themeConfig: {
      sidebar,
      // chapter index for ChapterMeta (resolves `needs` ids to links)
      chapters: parts.flatMap((p) => p.chapters.map(({ id, title, link }) => ({ id, title, link }))),
      search: { provider: 'local', options: { _render: book.searchRender } },
      outline: [2, 3],
      socialLinks: [{ icon: 'github', link: 'https://github.com/hsavovski/ai-engineering' }],
    },
  }),
)
