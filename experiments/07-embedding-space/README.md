# 07 – Embedding space: neighbours, analogies and where the geometry breaks

## What I tried

What does an embedding space actually look like up close? Which words end up near each other, do the famous analogies work, and where does the "meaning is geometry" picture break?

Three scripts (to write: see the steps in [chapter 1.3](../../book/part-01-how-llms-work/1.3-embeddings.md#practice)):

- `words.ts`: the word list (40–60 words chosen to probe clusters, analogies, antonyms, polysemy, Bulgarian translations).
- `embed.ts`: one `/api/embed` call to local Ollama with `qwen3-embedding:0.6b`, cached to `embeddings.json` (plus 128- and 32-dimension versions).
- `neighbours.ts`: hand-written `dot`, `norm` and `cosine`, top-5 neighbours, mean pairwise cosine, and `analogy(a, b, c)` with and without excluding the input words.

```bash
ollama pull qwen3-embedding:0.6b
node experiments/07-embedding-space/embed.ts        # calls Ollama once, writes embeddings.json
node experiments/07-embedding-space/neighbours.ts   # reads the cache, no model calls
```

Free: local Ollama only, no paid API calls.

## What happened

<!-- Fill in after running. -->

### The space

<!-- Dimension, are the vectors unit length, mean cosine over all pairs (your "unrelated" baseline). -->

### Nearest neighbours

| Word | Top 5 (cosine) |
|---|---|
| | |
| | |
| | |

### Analogies

| Analogy | Expected | Nearest (inputs excluded) | Nearest (inputs allowed) |
|---|---|---|---|
| man : king :: woman : ? | queen | | |
| France : Paris :: Bulgaria : ? | Sofia | | |
| | | | |
| | | | |
| | | | |

### Truncated dimensions

| Word | Top 5 at 1024 | Top 5 at 128 | Top 5 at 32 |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

## Where the geometry breaks

<!-- At least four concrete failures, each with a number and one sentence on why: antonyms, polysemy, input-word exclusion, English–Bulgarian pairs, capitalization, truncated dimensions... -->

## Why (what I learned)

<!-- Your notes: what does "close" mean in this space? Why can't one vector per word handle "bank"? What would you change about how you'd use cosine thresholds in a RAG system? -->
