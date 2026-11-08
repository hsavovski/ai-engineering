# 90 — Write chapter 9.4: Cost-effective routing rules

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-09-model-landscape-cost/9.4-routing-rules.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-09-model-landscape-cost/9.2-openrouter-litellm.md` (9.2 OpenRouter and LiteLLM)
  - `book/part-09-model-landscape-cost/9.3-local-vs-paid.md` (9.3 Local vs. paid)
  - `book/part-04-evals-observability/4.3-code-based-checks.md` (4.3 Code-based checks)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-09-model-landscape-cost/9.4-routing-rules.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Write routing rules backed by eval data
- Implement routing in your project
- Check the savings against the eval pass rate

**The explanation must cover**

- Static rules vs learned routers
- Escalation (try cheap, fall back to strong)
- Routing by task type, size, privacy
- Measuring savings

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Your `notes/routing.md`
- RouteLLM or similar router research (TODO: find URL, optional)

**Practice brief**

Add routing to `project/`: local Qwen by default, escalate to a paid model on failure or by task type, all through the 9.2 gateway. Report eval pass rate and cost vs. always-paid.

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
