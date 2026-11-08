import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { loadParts } from '../../scripts/chapters.mjs'
import { loadExperiments } from '../../scripts/experiments.mjs'

const parts = loadParts()
const experiments = loadExperiments()

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
    srcExclude: ['_template/**'],
    // mermaid 11 imports fastdom (UMD, no ESM export), which the plugin's pre-bundle list misses,
    // so `npm run dev` failed with "does not provide an export named 'default'".
    // Pre-bundling mermaid itself converts all of its CommonJS deps.
    vite: { optimizeDeps: { include: ['mermaid'] } },
    lastUpdated: true,
    themeConfig: {
      sidebar,
      // chapter index for ChapterMeta (resolves `needs` ids to links)
      chapters: parts.flatMap((p) => p.chapters.map(({ id, title, link }) => ({ id, title, link }))),
      search: { provider: 'local' },
      outline: [2, 3],
    },
  }),
)
