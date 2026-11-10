# 21 – Semantic search

## What I tried

Can a local embedding model (`qwen3-embedding:0.6b`) answer "which note talks about X?" over my `notes/`, `GLOSSARY.md` and book chapters, with vectors stored in SQLite? Where does it fail, and does BM25 (SQLite FTS5) fix those failures?

Steps and acceptance check: [chapter 2.8](../../book/part-02-programming-with-llms/2.8-embeddings-in-practice.md#practice). I write all the code.

## What happened

### Setup

| Model | Dimension | Chunks | Index time | Index size | Vector norm (5 samples) |
|---|---|---|---|---|---|
| qwen3-embedding:0.6b | | | | | |

### Predictions (before running)

<!-- Five queries with the file I expect to win, three queries I expect to be hard. -->

### Results

| Query | Expected file | Rank (embeddings) | Rank (BM25) | Notes |
|---|---|---|---|---|

### Query instruction on vs. off

| Query | Score of right answer (with / without) | Gap to best wrong (with / without) |
|---|---|---|

### Failures

<!-- At least two: query, scores, one-sentence reason. -->

### BM25 and (optional) merging

<!-- What BM25 fixed, what it made worse. Optional: reciprocal rank fusion results. -->

## Why (what I learned)

<!-- At least three bullets. -->
