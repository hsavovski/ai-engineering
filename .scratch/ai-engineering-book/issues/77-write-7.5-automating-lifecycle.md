# 77 — Write chapter 7.5: Automating the whole lifecycle

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-07-ai-native-development/7.5-automating-lifecycle.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-07-ai-native-development/7.1-spec-driven-development.md` (7.1 Spec-driven development)
  - `book/part-07-ai-native-development/7.4-ci-background-agents.md` (7.4 CI and background agents)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-07-ai-native-development/7.5-automating-lifecycle.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Design an end-to-end agent-driven workflow
- Find the bottlenecks (usually review and verification)
- Measure whether it helps

**The explanation must cover**

- Issue → spec → implement → review → merge
- Verification as the bottleneck
- Metrics: throughput, defects, cost
- Case studies

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/building-c-compiler
- https://www.anthropic.com/research/redesigning-source-control

**Practice brief**

Run one `project/` feature through the full pipeline with as little hands-on work as you can. Time each stage.

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
