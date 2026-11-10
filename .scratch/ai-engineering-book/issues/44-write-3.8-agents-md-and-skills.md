# 44 — Write chapter 3.8: AGENTS.md and agent skills

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-03-agents/3.8-agents-md-and-skills.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.4-context-engineering.md` (3.4 Context engineering)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-03-agents/3.8-agents-md-and-skills.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Write an effective AGENTS.md/CLAUDE.md
- Explain progressive disclosure in agent skills
- Write a skill and load it in your own agent

**The explanation must cover**

- AGENTS.md: purpose and adoption
- What belongs in project instructions
- Agent skills: SKILL.md, metadata, progressive disclosure
- Skills vs tools vs MCP

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/equipping-agents-for-the-real-world-with-agent-skills
- AGENTS.md site (TODO: find URL)

**Practice brief**

Teach `project/` to read an `AGENTS.md` at startup and to discover skills from a `skills/` folder (metadata first, full text on demand). Write one skill and check the agent uses it.

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
