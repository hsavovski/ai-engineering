# 21 — Write chapter 1.11: Mixture of experts

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-01-how-llms-work/1.11-mixture-of-experts.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.5-transformer-block.md` (1.5 The transformer block)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-01-how-llms-work/1.11-mixture-of-experts.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain routing, experts and active vs total parameters
- Explain why MoE is fast but memory-hungry
- Read MoE model names (e.g. 30b-a3b)

**The explanation must cover**

- Dense vs sparse MLP layers
- Routers and top-k experts
- Load balancing
- Active parameters and speed
- Memory: all experts must be loaded

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Hugging Face blog, "Mixture of Experts Explained" (TODO: find URL)
- Raschka, architecture comparison articles (TODO: find URL)

**Practice brief**

Go back to experiment 00's comparison table and explain every number for qwen3:30b-a3b using this chapter (speed, memory, CPU spill). Add the explanation to the experiment README.

Where: Notes only, no code (`notes/`).

**Growing project**

No code. The practice is reading and writing notes.

## Acceptance criteria

- `npm run check -- 1.11` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
