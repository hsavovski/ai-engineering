# 41 — Write chapter 3.5: Memory

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-03-agents/3.5-memory.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.4-context-engineering.md` (3.4 Context engineering)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-03-agents/3.5-memory.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Distinguish working, episodic, semantic and procedural memory for agents
- Choose storage and retrieval for memories
- Evaluate whether memory actually helps

**The explanation must cover**

- Kinds of agent memory
- File-based memory (CLAUDE.md, memory tools) vs vector stores
- Writing, updating and forgetting memories
- Memory as an attack surface (preview of Part 8)
- Evaluating memory

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/components-of-agent-memory (article, 2026-11-06)
- Claude docs, memory tool (TODO: find URL)

**Practice brief**

Add a file-based memory tool to `project/` (save/read/update notes in a `memory/` folder). Run the same two-session task with and without memory and compare.

Where: A step in the growing `project/` (see `project/ROADMAP.md`).

**Growing project**

This chapter is a step in the growing `project/`. See `project/ROADMAP.md` for what the project has before this step and what this step adds. The chapter gives the brief, steps and acceptance check; the learner writes the code.

## Acceptance criteria

- All six sections present: Why this matters, Explanation, resources at the point of use, Practice, Check questions, My understanding
- Every link opened and checked, and `last_verified` set
- Resources added to `book/resources.md`
- New terms added to `GLOSSARY.md`
- "My understanding" left empty
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
