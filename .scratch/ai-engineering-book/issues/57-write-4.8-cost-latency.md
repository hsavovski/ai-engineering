# 57 — Write chapter 4.8: Cost and latency tracking

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-04-evals-observability/4.8-cost-latency.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-04-evals-observability/4.7-tracing.md` (4.7 Tracing: OpenTelemetry GenAI and Langfuse)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-04-evals-observability/4.8-cost-latency.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Compute cost per task from usage
- Find latency hotspots in traces
- Set per-task budgets

**The explanation must cover**

- Token accounting incl. cache and thinking tokens
- Price tables (link to Landscape)
- TTFT, total latency, tool time
- Budgets and alerts

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- `book/landscape.md`
- Claude Agent SDK cost tracking docs (unverified)

**Practice brief**

Add cost per run to `project/` (computed from usage and a price table) and a `--budget` flag that stops the agent when exceeded. Log real spend in `costs.md`.

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
