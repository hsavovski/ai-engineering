# 50 — Write chapter 4.1: Error analysis first

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-04-evals-observability/4.1-error-analysis.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.2-agent-loop.md` (3.2 Build the agent loop from scratch)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-04-evals-observability/4.1-error-analysis.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Do open and axial coding on real traces
- Build a failure taxonomy
- Prioritize what to fix or measure

**The explanation must cover**

- Why generic metrics mislead
- Collecting traces
- Open coding, axial coding
- Failure taxonomies
- From failures to evals

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Husain & Shankar, evals FAQ, https://hamel.dev/blog/posts/evals-faq/
- https://www.anthropic.com/research/demystifying-evals-for-ai-agents

**Practice brief**

Run `project/` on 20 varied tasks, read every transcript, and build a failure taxonomy in `project/evals/error-analysis.md`.

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
