# 15 — Write chapter 1.5: The transformer block

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-01-how-llms-work/1.5-transformer-block.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.4-attention.md` (1.4 Attention)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-01-how-llms-work/1.5-transformer-block.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Draw a decoder block and the data flow through it
- Explain residual streams, LayerNorm/RMSNorm and the MLP
- Explain RoPE at an intuitive level
- Count parameters for a small config

**The explanation must cover**

- Residual stream
- Normalization (pre-norm, RMSNorm)
- The MLP / feed-forward layer and activations
- Positional encodings: learned, sinusoidal, RoPE
- Stacking blocks, the LM head
- Parameter counting

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Raschka, *Build an LLM From Scratch*, ch. 4 (unverified)
- Karpathy, "Let's build GPT: from scratch, in code, spelled out" (video, TODO: find URL)
- Raschka, LLM architecture comparison articles (TODO: find URL)

**Practice brief**

Read the `config.json` of `qwen3:14b` (or its Hugging Face page) and compute its parameter count from the config. Compare with the published number.

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
