# 22 – RAG

## What I tried

A RAG Q&A over the book chapters (and optionally `notes/`), built on the 2.8 search, with 10 questions with known answers; for each failure, was it retrieval or generation?

Steps and acceptance check: [chapter 2.9](../../book/part-02-programming-with-llms/2.9-rag-fundamentals.md#practice). I write all the code. Chapters 2.10 and 2.11 add their own sections below.

Chapter 2.10 extension: add BM25 + rank fusion and a reranker, and compare recall@5 and MRR on the same questions. Steps and acceptance check: [chapter 2.10](../../book/part-02-programming-with-llms/2.10-better-retrieval.md#practice).

## What happened

### Setup

| Embedding model | Generator | Chunker (name, params) | Chunks | k |
|---|---|---|---|---|
| qwen3-embedding:0.6b | | | | |

### Predictions (before running)

<!-- Which of the ten questions do I expect to fail, and why? -->

### Results

| # | Question | Expected chunk | Rank | Retrieval hit | Generation correct | Outcome |
|---|---|---|---|---|---|---|

Outcome: retrieved and right / retrieved but wrong (generation) / not retrieved but right / not retrieved and wrong (retrieval).

Totals: retrieval failures __, generation failures __.

### Citation check

<!-- How many answers cited a source id that was not in the prompt? -->

### Unanswerable question

<!-- Answer with the refusal instruction / without it. -->

### One change, before and after

<!-- Change, hit rate before/after, did it move retrieval or generation failures? -->

### 2.10: better retrieval

Same questions, same chunks as above; only the retrieval changes.

| Setup | Value |
|---|---|
| Candidate depth per retriever | |
| RRF k / weights | |
| Reranker (model, candidates reranked) | |
| What counts as a right chunk | |

#### Predictions (before running)

<!-- Per question: vector, BM25 or hybrid, which do I expect to rank the answer highest? -->

#### Ranks of the answer-bearing chunk

| # | Question | Vector | BM25 | Hybrid (RRF) | Hybrid + rerank |
|---|---|---|---|---|---|

#### Totals

| Configuration | recall@5 | recall@50 | MRR | Latency per question |
|---|---|---|---|---|
| Vector (2.9 baseline) | | | | |
| BM25 | | | | |
| Hybrid (RRF) | | | | |
| Hybrid + rerank | | | | |

#### What each method fixed, and what it didn't

<!-- One question each method fixed, one it did not. Did the changes move absent chunks or low-ranked ones? -->

## Why (what I learned)

<!-- At least three bullets. -->
