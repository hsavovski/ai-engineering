# 27 — Write chapter 2.2: Streaming

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-02-programming-with-llms/2.2-streaming.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-02-programming-with-llms/2.1-calling-models.md` (2.1 Calling models: Anthropic, OpenAI-compatible, Ollama)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-02-programming-with-llms/2.2-streaming.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Parse server-sent events by hand
- Handle text, thinking and tool-call deltas
- Measure time to first token

**The explanation must cover**

- SSE format
- Anthropic stream events vs OpenAI chunks
- Accumulating partial JSON for tool calls
- Cancellation and backpressure
- TTFT vs throughput

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude docs, streaming (TODO: find URL)
- MDN, Server-sent events (TODO: find URL)

**Practice brief**

Extend the 2.1 script to stream from all three providers, print tokens as they arrive, and log TTFT and tokens/s for each.

Where: `experiments/15-streaming/`: a standalone experiment (number assigned up front so parallel tasks don't collide).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 2.2` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed

## Answer

Chapter written in `book/part-02-programming-with-llms/2.2-streaming.md`; experiment skeleton in `experiments/15-streaming/`.
