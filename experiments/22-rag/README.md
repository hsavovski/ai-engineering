# 22 – RAG

## What I tried

A RAG Q&A over the book chapters (and optionally `notes/`), built on the 2.8 search, with 10 questions with known answers; for each failure, was it retrieval or generation?

Steps and acceptance check: [chapter 2.9](../../book/part-02-programming-with-llms/2.9-rag-fundamentals.md#practice). I write all the code. Chapters 2.10 and 2.11 add their own sections below.

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

## Why (what I learned)

<!-- At least three bullets. -->
