# 40 — Write chapter 3.4: Context engineering

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-03-agents/3.4-context-engineering.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.2-agent-loop.md` (3.2 Build the agent loop from scratch)
  - `book/part-01-how-llms-work/1.9-kv-cache-context-window.md` (1.9 The KV cache and the context window)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-03-agents/3.4-context-engineering.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain context rot and the attention budget
- Apply compaction, note-taking and sub-agent isolation
- Measure context growth in your own agent

**The explanation must cover**

- Context as a finite resource
- System prompts at the right altitude
- Just-in-time retrieval
- Compaction and summarization
- Structured note-taking
- Sub-agents for context isolation
- Tool-result clearing

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/effective-context-engineering-for-ai-agents
- Claude Code docs, "Explore the context window", https://code.claude.com/docs/en/context-window (unverified)

**Practice brief**

Add context tracking (tokens per turn) and compaction to `project/`: when context passes a threshold, summarize older turns. Compare a long task with and without compaction.

Where: A step in the growing `project/` (see `project/ROADMAP.md`).

**Growing project**

This chapter is a step in the growing `project/`. See `project/ROADMAP.md` for what the project has before this step and what this step adds. The chapter gives the brief, steps and acceptance check; the learner writes the code.

## Acceptance criteria

- `npm run check -- 3.4` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

## Answer

Chapter written in book/part-03-agents/3.4-context-engineering.md; check and build pass.
