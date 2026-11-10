# 56 — Write chapter 4.7: Tracing: OpenTelemetry GenAI and Langfuse

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-04-evals-observability/4.7-tracing.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.2-agent-loop.md` (3.2 Build the agent loop from scratch)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-04-evals-observability/4.7-tracing.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Instrument the agent with OpenTelemetry spans
- Explain the GenAI semantic conventions (and check their stability status)
- View traces in Langfuse

**The explanation must cover**

- Traces, spans, attributes
- OpenTelemetry GenAI semantic conventions (re-verify: stable or experimental?)
- Langfuse (self-hosted or cloud)
- What to record and what not to (privacy)

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Langfuse OpenTelemetry docs, https://langfuse.com/docs/opentelemetry
- OpenTelemetry GenAI semantic conventions (TODO: find URL)
- Claude Agent SDK observability docs (unverified)

**Practice brief**

Instrument `project/` with OTel spans following the GenAI conventions and send them to Langfuse (local Docker or free cloud tier). Inspect a long run.

Where: A step in the growing `project/` (see `project/ROADMAP.md`).

**Growing project**

This chapter is a step in the growing `project/`. See `project/ROADMAP.md` for what the project has before this step and what this step adds. The chapter gives the brief, steps and acceptance check; the learner writes the code.

## Acceptance criteria

- `npm run check -- 4.7` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
