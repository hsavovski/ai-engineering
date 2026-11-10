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

### 2.11: agentic search

Same ten questions, same corpus; the model gets only `grep` and `read_file` (your 3.2 loop) instead of a retriever. Steps and acceptance check: [chapter 2.11](../../book/part-02-programming-with-llms/2.11-agentic-search.md#practice).

| Setup | Value |
|---|---|
| Model, thinking, temperature | |
| Tools and their caps (lines, chars) | |
| Turn limit | |
| What counts as a correct answer | |

#### Predictions (before running)

<!-- Which questions will the agent find, in how many turns? Where will it beat the pipeline, where lose? -->

#### Per question

| # | Question | Correct | Turns | Tokens in/out | Seconds | Files read | Answer text seen in a tool result | First wrong step (class) |
|---|---|---|---|---|---|---|---|---|

Unanswerable question: did the agent search before refusing? 

#### Failure classes

| Class | Count |
|---|---|
| Bad query (copied from the question, wrong words) | |
| Gave up too early | |
| Opened the wrong file | |
| Ran out of turns | |
| Read it and still wrong | |
| Answered without searching | |

#### One change, before and after

<!-- Change, accuracy before/after, which failure class moved. -->

#### Comparison

| Approach | Accuracy | Tokens/question (mean, worst) | Seconds/question (mean, worst) |
|---|---|---|---|
| Pipeline (2.9) | | | |
| Pipeline + 2.10 improvements | | | |
| Agentic search | | | |
| Agentic search after the change | | | |

## Why (what I learned)

<!-- At least three bullets. -->
