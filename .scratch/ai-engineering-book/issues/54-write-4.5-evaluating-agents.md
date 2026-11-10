# 54 — Write chapter 4.5: Evaluating agents

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-04-evals-observability/4.5-evaluating-agents.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-04-evals-observability/4.3-code-based-checks.md` (4.3 Code-based checks)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-04-evals-observability/4.5-evaluating-agents.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain pass@k vs pass^k
- Grade trajectories and outcomes
- Account for noise from infrastructure and nondeterminism

**The explanation must cover**

- Tasks, trials, transcripts, outcomes
- pass@k and pass^k
- Trajectory vs outcome grading
- Infrastructure noise
- Capability vs regression evals

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/demystifying-evals-for-ai-agents
- https://www.anthropic.com/research/infrastructure-noise

**Practice brief**

Run each eval case 5× and report pass@1, pass@5 and pass^5 for two models. Note which cases are flaky and why.

Where: A step in the growing `project/` (see `project/ROADMAP.md`).

**Growing project**

This chapter is a step in the growing `project/`. See `project/ROADMAP.md` for what the project has before this step and what this step adds. The chapter gives the brief, steps and acceptance check; the learner writes the code.

## Acceptance criteria

- `npm run check -- 4.5` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
