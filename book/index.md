# AI Engineering: a study book

A personal, non-linear course on how LLMs work, how to program with them, agents and harnesses, Claude Code, AI-native software development, and choosing models cost-effectively. Each chapter combines a structured explanation, curated articles and videos at the point of use, and hands-on practice.

New here? Start with [How to use this book](/part-00-catch-up/0.0-how-to-use-this-book).

## How it works

- **Read in any order.** Each chapter lists what it **needs**, but those are hints, not gates. See [Suggested paths](/paths) for some ready-made routes.
- **Core vs Deeper.** *Core* chapters give the first pass through every concept. *Deeper* chapters (◇ in the sidebar) are optional follow-ups.
- **Status.** Every chapter is `not-started` → `reading` → `practiced` → `understood`. Update it in the chapter's frontmatter, then run `npm run progress`.
- **Resources.** Everything referenced is collected in the [Resources](/resources) catalog. Facts that go stale fast (models, prices, tools) live on the dated [Landscape](/landscape) page.

## Map

How the parts build on each other:

```mermaid
flowchart TB
  P0[0 · Catch-up] --> P1[1 · How LLMs work]
  P0 --> P2[2 · Programming with LLMs]
  P1 --> P2
  P2 --> P3[3 · Agents]
  P3 --> P4[4 · Evals & observability]
  P3 --> P5[5 · Harnesses]
  P5 --> P6[6 · Claude Code mastery]
  P6 --> P7[7 · AI-native software development]
  P3 --> P8[8 · Production]
  P2 --> P9[9 · Model landscape & cost]
  P1 --> P10[10 · Modifying & serving models]
  P2 --> P11[11 · Multimodal, voice, computer use]
```

## Chapter maps

<!-- derived:map --> *The per-part maps are generated from chapter frontmatter and render in the book (`npm run dev`).*
