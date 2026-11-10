# 25 — Write chapter 1.15: Efficient attention and long context

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-01-how-llms-work/1.15-efficient-attention.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.9-kv-cache-context-window.md` (1.9 The KV cache and the context window)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-01-how-llms-work/1.15-efficient-attention.md`, following the six-section format in the spec. Tier: **deeper**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain MQA/GQA and their effect on KV-cache size
- Explain FlashAttention at a high level
- Explain sliding-window and hybrid attention, and context extension (RoPE scaling)

**The explanation must cover**

- Multi-query and grouped-query attention
- FlashAttention: IO-aware computation
- Sliding-window and hybrid layers
- RoPE scaling / YaRN
- Linear attention and state-space hybrids (overview)

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Raschka, architecture comparison articles (TODO: find URL)
- FlashAttention paper (optional)

**Practice brief**

Redo the KV-cache memory estimate from 1.9 with GQA using qwen3:14b's real config, and compare it with the naive multi-head estimate.

Where: Notes only, no code (`notes/`).

**Growing project**

No code. The practice is reading and writing notes.

## Acceptance criteria

- `npm run check -- 1.15` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
