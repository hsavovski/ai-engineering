# 111 — Fact-check chapter 2.9

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-02-programming-with-llms/2.9-rag-fundamentals.md`

## Goal

Fact-check chapter 2.9 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 2.9".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- The "200,000 tokens, about 500 pages" rule and the Lost in the Middle effect are flagged in the text as dated.
- Anthropic's 35/49/67% figures are attributed to Anthropic's own setup. Re-read the contextual-retrieval article.
- The LangChain text-splitters page redirected to an unrelated page and is not cited; `RecursiveCharacterTextSplitter` is described through the Chroma report only.
- Two local experiments (chunking strategies; `qwen3:8b` with right, near-miss and no context) are dated own measurements on a tiny sample.

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 2.9 "RAG fundamentals" written: pipeline diagram and stage-failure table, when not to use RAG, four chunking families with a small local measurement (4 strategies, 4 questions on chapter 2.8), contextual retrieval (Anthropic prompt and reported 35/49/67% failure reductions), prompting with numbered sources, refusal path and citations (observed qwen3:8b with right, near-miss and no context), failure-analysis decision tree, Barnett's seven failure points, hit rate and MRR; practice is experiment 22 (10 questions, retrieval vs generation labels; README skeleton only); 9 resource rows and 11 glossary terms added (issue 34).

## Comments
