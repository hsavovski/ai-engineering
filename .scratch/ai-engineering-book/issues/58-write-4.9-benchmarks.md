# 58 — Write chapter 4.9: Reading benchmarks

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-04-evals-observability/4.9-benchmarks.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-04-evals-observability/4.5-evaluating-agents.md` (4.5 Evaluating agents)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-04-evals-observability/4.9-benchmarks.md`, following the six-section format in the spec. Tier: **deeper**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain what major benchmarks measure
- Spot contamination, eval awareness and harness effects
- Decide when your own evals matter more

**The explanation must cover**

- Knowledge, reasoning, coding and agentic benchmarks
- Contamination
- Eval awareness
- Harness and infrastructure effects
- Leaderboards and arenas

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/eval-awareness-browsecomp
- https://www.anthropic.com/research/infrastructure-noise
- https://www.anthropic.com/research/AI-resistant-technical-evaluations

**Practice brief**

Pick one recent model announcement and annotate every benchmark claim: what it measures, which harness, and whether it matters for your use.

Where: Notes only, no code (`notes/`).

**Growing project**

No code. The practice is reading and writing notes.

## Acceptance criteria

- All six sections present: Why this matters, Explanation, resources at the point of use, Practice, Check questions, My understanding
- Every link opened and checked, and `last_verified` set
- Resources added to `book/resources.md`
- New terms added to `GLOSSARY.md`
- "My understanding" left empty
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
