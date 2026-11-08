# 52 — Write chapter 4.3: Code-based checks

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-04-evals-observability/4.3-code-based-checks.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-04-evals-observability/4.2-eval-sets.md` (4.2 Building an eval set)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-04-evals-observability/4.3-code-based-checks.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Write assertion-based graders
- Grade agent outcomes via environment state
- Build a small eval runner in TS

**The explanation must cover**

- Assertions and unit-test-style graders
- Outcome vs output grading
- Environment setup and teardown
- An eval runner

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/demystifying-evals-for-ai-agents

**Practice brief**

Write `npm run eval` in `project/`: runs each case, applies code-based graders, prints a pass rate. Run it with local Qwen and a paid model (old roadmap: record pass/fail, time, cost).

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
- A dated `PROGRESS.md` log line
- Committed
