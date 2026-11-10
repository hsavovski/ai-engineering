# 59 — Write chapter 5.1: What a harness is

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-05-harnesses/5.1-what-is-a-harness.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.2-agent-loop.md` (3.2 Build the agent loop from scratch)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-05-harnesses/5.1-what-is-a-harness.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- List the components of a harness
- Explain why harness choice changes results
- Map your own project onto those components

**The explanation must cover**

- Harness components: loop, tools, system prompt, context management, permissions, UI
- Model-harness co-design
- Harness engineering as a discipline

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/effective-harnesses-for-long-running-agents
- Claude Code docs, "How Claude Code works", https://code.claude.com/docs/en/how-claude-code-works (unverified)

**Practice brief**

Make a table of harness components and check off which ones `project/` already has. This becomes the checklist for 5.4.

Where: Notes only, no code (`notes/`).

**Growing project**

No code. The practice is reading and writing notes.

## Acceptance criteria

- All six sections present: Why this matters, Explanation, resources at the point of use, Practice, Check questions, My understanding
- Every link opened and checked, and `last_verified` set
- Resources added to `book/resources.md`
- New terms added to `GLOSSARY.md`
- "My understanding" left empty
- If `needs` changed, `npm run map` re-run
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
