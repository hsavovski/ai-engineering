# 80 — Write chapter 8.1: Prompt injection and the lethal trifecta

Status: resolved
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

- `npm run check -- 8.1` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

## Answer

Chapter 8.1 written in `book/part-08-production/8.1-prompt-injection.md`; 8 resource rows, 7 glossary terms, BUILD-LOG line added. No experiment folder.
