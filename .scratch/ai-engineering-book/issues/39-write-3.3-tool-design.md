# 39 — Write chapter 3.3: Tool design

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-03-agents/3.3-tool-design.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.2-agent-loop.md` (3.2 Build the agent loop from scratch)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-03-agents/3.3-tool-design.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Design tool names, descriptions, inputs and outputs for a model
- Return errors and results that help the model recover
- Evaluate tools by watching the agent use them

**The explanation must cover**

- Tools as a contract with a non-deterministic caller
- Choosing the right granularity
- Naming and namespacing
- Token-efficient, meaningful outputs
- Helpful errors
- Testing tools with the agent itself

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/writing-tools-for-agents

**Practice brief**

Add `edit_file`, `list_files` and `search` tools to `project/`, following the article. Run 3 tasks, read the transcripts, and redesign at least one tool based on what the agent got wrong.

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
