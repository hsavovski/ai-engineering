# 53 — Write chapter 4.4: LLM-as-judge vs. human labels

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-04-evals-observability/4.4-llm-as-judge.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-04-evals-observability/4.3-code-based-checks.md` (4.3 Code-based checks)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-04-evals-observability/4.4-llm-as-judge.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Write a binary, criteria-specific judge prompt
- Measure judge agreement with your own labels (TPR/TNR)
- Iterate the judge until it's trustworthy

**The explanation must cover**

- When to use a judge
- Binary pass/fail over scales
- Labeling a sample yourself
- Agreement metrics
- Judge biases

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Husain & Shankar, evals FAQ
- Hamel Husain, LLM-as-judge guide (TODO: find URL)

**Practice brief**

Label 30 outputs yourself for one criterion, write a judge, and measure TPR/TNR. Iterate until both exceed a bar you choose. Add it to the eval runner.

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
