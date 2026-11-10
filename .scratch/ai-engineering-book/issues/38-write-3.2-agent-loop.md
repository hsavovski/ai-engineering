# 38 — Write chapter 3.2: Build the agent loop from scratch

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-03-agents/3.2-agent-loop.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.1-workflows-vs-agents.md` (3.1 Workflows vs. agents)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-03-agents/3.2-agent-loop.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Implement the agent loop with no framework
- Handle stop conditions, errors and max turns
- Observe how local and paid models differ in the loop

**The explanation must cover**

- The loop: call → tool use → execute → append → repeat
- Message history as state
- Stop conditions and turn limits
- Error handling and tool failures
- Logging every step

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/building-agents-with-the-claude-agent-sdk (TODO: check URL; spec lists it under /engineering/)
- Claude Agent SDK docs, "The agent loop", https://code.claude.com/docs/en/agent-sdk/agent-loop (unverified)

**Practice brief**

Start `project/`: a TS CLI agent with `read_file` and `run_shell` tools, a loop until the model stops calling tools, and a step log. Run it with local Qwen and one paid model; write where the local model breaks in `notes/agent-loop.md` (old roadmap items).

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
