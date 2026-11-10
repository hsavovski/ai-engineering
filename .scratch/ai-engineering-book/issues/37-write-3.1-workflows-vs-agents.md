# 37 — Write chapter 3.1: Workflows vs. agents

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-03-agents/3.1-workflows-vs-agents.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-02-programming-with-llms/2.6-tool-calling.md` (2.6 Tool calling)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-03-agents/3.1-workflows-vs-agents.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Name the common workflow patterns (chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer)
- Define an agent precisely
- Choose between them for a given task

**The explanation must cover**

- Augmented LLM as the building block
- Workflow patterns
- What makes something an agent
- Autonomy vs predictability trade-off

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Anthropic, "Building effective agents" (TODO: find URL)
- OpenAI, "A practical guide to building agents" (TODO: find URL)

**Practice brief**

Implement one workflow (e.g. route → specialized prompt → evaluator-optimizer) in TS for a task of your choice, without any agent loop.

Where: `experiments/23-workflows/`: a standalone experiment (number assigned up front so parallel tasks don't collide).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 3.1` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
