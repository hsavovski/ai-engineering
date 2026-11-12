# 62 — Write chapter 5.4: Build a mini coding harness

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-05-harnesses/5.4-mini-harness.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.3-tool-design.md` (3.3 Tool design)
  - `book/part-03-agents/3.4-context-engineering.md` (3.4 Context engineering)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-05-harnesses/5.4-mini-harness.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Add coding tools (precise edits, search, tests) and permission prompts
- Add a usable terminal UX
- Run it on your eval set

**The explanation must cover**

- Edit tools: search/replace vs patches
- Permission model
- Streaming terminal UI
- Project instructions
- Checkpoints/undo

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Notes from 5.2
- https://www.anthropic.com/research/writing-tools-for-agents

**Practice brief**

Turn `project/` into a mini coding harness: edit tool with exact-match replace, permission prompts for shell and writes, streaming output, AGENTS.md loading. Run the eval set.

Where: A step in the growing `project/` (see `project/ROADMAP.md`).

**Growing project**

This chapter is a step in the growing `project/`. See `project/ROADMAP.md` for what the project has before this step and what this step adds. The chapter gives the brief, steps and acceptance check; the learner writes the code.

## Acceptance criteria

- `npm run check -- 5.4` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
