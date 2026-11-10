# 80 — Write chapter 8.1: Prompt injection and the lethal trifecta

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-08-production/8.1-prompt-injection.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.2-agent-loop.md` (3.2 Build the agent loop from scratch)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-08-production/8.1-prompt-injection.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain direct and indirect prompt injection
- Spot the lethal trifecta in a design
- Apply design patterns that limit the damage

**The explanation must cover**

- Direct vs indirect injection
- The lethal trifecta: private data, untrusted content, exfiltration
- Why filters don't solve it
- Design patterns (dual LLM, plan-then-execute, etc.)

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Simon Willison, "The lethal trifecta" (TODO: find URL)
- Design patterns for securing LLM agents paper (TODO: find URL)

**Practice brief**

Attack your own `project/` agent: put an injection in a file it reads and try to exfiltrate a fake secret. Document what worked.

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
