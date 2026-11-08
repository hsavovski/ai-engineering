# 08 — Write chapter 0.2: The stack in one picture

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-00-catch-up/0.2-the-stack.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-00-catch-up/0.1-what-changed.md` (0.1 What changed from 2024 to 2026)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-00-catch-up/0.2-the-stack.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Draw the layers from weights to agent and say what each one owns
- Place every tool you use (Ollama, Claude Code, OpenRouter...) on the diagram
- Explain where a given behavior (e.g. thinking leaking into output) comes from

**The explanation must cover**

- Weights and the model
- Inference servers and engines (Ollama, llama.cpp, MLX, vLLM)
- APIs: native vs OpenAI-compatible
- Harnesses and agents
- Routers and gateways (OpenRouter, LiteLLM)
- Where your own experiments sit: experiment 00 as a worked example

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- `GLOSSARY.md` (the starting vocabulary)
- `experiments/00-speed-check/README.md`

**Practice brief**

Draw the stack (Mermaid in `notes/the-stack.md`) with your actual setup on it: Ollama models, Claude Code, Claude Pro, OpenRouter. Mark which layer caused each finding in experiment 00.

Where: Notes only, no code (`notes/`).

**Growing project**

No code. The practice is reading and writing notes.

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

## Comments

- 2026-11-08 (agent): Done. Chapter written in `book/part-00-catch-up/0.2-the-stack.md`, `last_verified: 2026-11-08`. All 14 candidate links opened; 11 used. The two planned "resources" (GLOSSARY.md, experiment 00 README) are in-repo, so they're woven into the text instead of listed as resources. Left out claims I couldn't source: which engine Ollama uses internally, and llama.cpp's server binary name (its README now shows `llama serve`). The worked example places only two experiment-00 findings, leaving the rest for the practice. `needs` unchanged, so no `npm run map`. `npm run build` passes.
