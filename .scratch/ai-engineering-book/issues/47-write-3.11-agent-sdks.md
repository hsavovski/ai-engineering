# 47 — Write chapter 3.11: TS agent SDKs: rebuild with one

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-03-agents/3.11-agent-sdks.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.3-tool-design.md` (3.3 Tool design)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-03-agents/3.11-agent-sdks.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Compare Vercel AI SDK, Claude Agent SDK, OpenAI Agents SDK and Mastra
- Rebuild the project agent with one of them
- Say what you gained and lost

**The explanation must cover**

- What an agent SDK provides
- Vercel AI SDK
- Claude Agent SDK (Claude Code's harness as a library)
- OpenAI Agents SDK (JS)
- Mastra
- Lock-in and provider support

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/building-agents-with-the-claude-agent-sdk (TODO: check URL)
- Claude Agent SDK docs, https://code.claude.com/docs/en/agent-sdk/overview (unverified)
- Vercel AI SDK docs (TODO: find URL)
- OpenAI Agents SDK JS (TODO: find URL)
- Mastra docs (TODO: find URL)

**Practice brief**

Rebuild the `project/` agent with one SDK in a separate entry point (keep the hand-written loop). Compare lines of code, features and model support in the project README.

Where: A step in the growing `project/` (see `project/ROADMAP.md`).

**Growing project**

This chapter is a step in the growing `project/`. See `project/ROADMAP.md` for what the project has before this step and what this step adds. The chapter gives the brief, steps and acceptance check; the learner writes the code.

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
