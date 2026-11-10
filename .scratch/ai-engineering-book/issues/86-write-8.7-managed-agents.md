# 86 — Write chapter 8.7: Managed agents

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-08-production/8.7-managed-agents.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-08-production/8.5-durable-agents.md` (8.5 Durable agents: queues, retries, rate limits)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-08-production/8.7-managed-agents.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain the managed-agent architecture (brain vs hands)
- Compare with self-hosted agents
- Run one task on a managed agent platform

**The explanation must cover**

- What a managed agent platform provides
- Separating the model loop from execution environments
- Sessions, environments, outcomes
- Cost and lock-in

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/managed-agents
- Claude platform docs, managed agents (TODO: find URL)

**Practice brief**

If budget allows, run one small task on Anthropic's managed agents and compare cost and setup effort with `project/`. Log the cost.

Where: `experiments/NN-managed-agent/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- All six sections present: Why this matters, Explanation, resources at the point of use, Practice, Check questions, My understanding
- Every link opened and checked, and `last_verified` set
- Resources added to `book/resources.md`
- New terms added to `GLOSSARY.md`
- "My understanding" left empty
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
