# 46 — Write chapter 3.10: Multi-agent patterns

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-03-agents/3.10-multi-agent.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.2-agent-loop.md` (3.2 Build the agent loop from scratch)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-03-agents/3.10-multi-agent.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Describe orchestrator-worker, sub-agent and parallel patterns
- Explain the token cost of multi-agent systems
- Decide when to use one

**The explanation must cover**

- Sub-agents for context isolation
- Orchestrator-workers
- Parallel exploration
- Coordination and failure modes
- Cost
- Case study: Anthropic's research system

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/multi-agent-research-system
- Cognition, "Don't build multi-agents" (TODO: find URL, counterpoint)

**Practice brief**

Add a `delegate` tool to `project/` that runs a sub-agent with its own context and returns a summary. Compare one research-style task with and without delegation (quality, tokens).

Where: A step in the growing `project/` (see `project/ROADMAP.md`).

**Growing project**

This chapter is a step in the growing `project/`. See `project/ROADMAP.md` for what the project has before this step and what this step adds. The chapter gives the brief, steps and acceptance check; the learner writes the code.

## Acceptance criteria

- `npm run check -- 3.10` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

## Answer

Chapter 3.10 written in `book/part-03-agents/3.10-multi-agent.md`; 4 resources, 4 glossary terms, BUILD-LOG line. No experiment folder (practice is a `project/` step, `notes/multi-agent.md`).
