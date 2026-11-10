# 51 — Write chapter 4.2: Building an eval set

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-04-evals-observability/4.2-eval-sets.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-04-evals-observability/4.1-error-analysis.md` (4.1 Error analysis first)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-04-evals-observability/4.2-eval-sets.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Turn the failure taxonomy into eval cases
- Generate synthetic cases carefully
- Version and maintain the set

**The explanation must cover**

- What makes a good eval case
- Coverage of failure modes
- Synthetic data with dimensions
- Golden answers vs rubrics
- Versioning

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Husain & Shankar, evals FAQ
- *Evals for AI Engineers* (O'Reilly) — specific chapters TBD

**Practice brief**

Create `project/evals/` with 20–30 cases from your taxonomy (old roadmap: "5 small realistic programming tasks" is the seed).

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
