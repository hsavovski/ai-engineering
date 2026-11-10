# 48 — Write chapter 3.12: A2A: agent-to-agent protocol

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-03-agents/3.12-a2a.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.10-multi-agent.md` (3.10 Multi-agent patterns)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-03-agents/3.12-a2a.md`, following the six-section format in the spec. Tier: **deeper**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain A2A's model: agent cards, tasks, messages
- Compare A2A with MCP
- Know its governance and adoption status

**The explanation must cover**

- Agent cards and discovery
- Tasks and their lifecycle
- A2A vs MCP
- Governance (re-verify: relation to the Agentic AI Foundation)

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- A2A project docs (TODO: find URL)
- Linux Foundation A2A announcement (TODO: find URL)

**Practice brief**

Expose the `project/` agent as a minimal A2A server with an agent card, and call it from a second script.

Where: `experiments/NN-a2a/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

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
