# 110 — Fact-check chapter 2.8

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-02-programming-with-llms/2.8-embeddings-in-practice.md`

## Goal

Fact-check chapter 2.8 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 2.8".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- "Qwen3-Embedding ranked first on MTEB multilingual as of 2025-06-05" is taken from its Ollama page and may be stale. The chapter caveats it.
- Ollama's embedding page does not say whether `/api/embed` has an `input_type`-style parameter; the chapter says only that the shown requests have none.
- Node 26 docs name the SQLite class `Database`, with `DatabaseSync` as a deprecated alias. Confirm.
- The local measurements (`ERR_4021` 0.510 vs `ERR_4210` 0.416; the negation pair 0.761 vs 0.720; ~6 s per 100 chunks) are the writer's own, dated 2026-11-10, and not reproducible from the repo.

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 2.8 "Embeddings in practice" written: retrieval loop diagram, embedding models vs. LLMs, calls to Ollama/OpenAI/OpenRouter (Anthropic has no embedding model), query/document asymmetry, dimensions and storage cost, dot/cosine/L2 on unit vectors, storage options (memory, SQLite BLOBs, sqlite-vec, pgvector, dedicated DBs) with exact vs. ANN, reading MTEB, when BM25 beats embeddings (measured identifier and negation cases on qwen3-embedding:0.6b); experiment `experiments/21-semantic-search/` brief and README skeleton (issue 33).

## Comments
