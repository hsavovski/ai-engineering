# 59 — Write chapter 5.1: What a harness is

Status: resolved
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

- `npm run check -- 5.1` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
