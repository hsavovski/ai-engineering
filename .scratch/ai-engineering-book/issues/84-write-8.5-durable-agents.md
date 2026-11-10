# 84 — Write chapter 8.5: Durable agents: queues, retries, rate limits

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-08-production/8.5-durable-agents.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.2-agent-loop.md` (3.2 Build the agent loop from scratch)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-08-production/8.5-durable-agents.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Handle rate limits and retries correctly
- Make an agent resumable after a crash
- Choose between queues and durable-execution frameworks

**The explanation must cover**

- Rate limits and backoff
- Idempotent tools
- Checkpointing agent state
- Queues and workers
- Durable execution frameworks (e.g. Temporal, Inngest: verify current options)

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Durable execution framework docs (TODO: find URLs)
- Claude API rate limit docs (TODO: find URL)

**Practice brief**

Make `project/` resumable: persist state after each step and resume after a killed process. Add retry with backoff on rate-limit errors.

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
