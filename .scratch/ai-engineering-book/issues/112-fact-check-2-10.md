# 112 — Fact-check chapter 2.10

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-02-programming-with-llms/2.10-better-retrieval.md`

## Goal

Fact-check chapter 2.10 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 2.10".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- Quotes from the RRF PDF (extracted by hand), Hamel Husain's evals FAQ and Jason Liu's article came through fetch summaries. Confirm exact wording.
- The Hamel FAQ anchor and the Chip Huyen ch. 6 section names and page numbers (pp. 257–273) come from visible headings or the table of contents.
- The transformers.js reranker and Qwen3-Reranker were **not run**; the chapter flags both as untested. It also says Ollama's docs mention no rerank endpoint; confirm.
- The MRR table (vector 0.459, BM25 0.743, RRF 0.663, RRF + `qwen3:8b` rerank 0.828; 307 chunks, 12 questions) is a local measurement whose script was **not committed**. The chapter says the questions favour BM25. Either commit the script under `experiments/22-rag/` or soften the claim.

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 2.10 "Better retrieval: hybrid search and reranking" written: retrieve-wide-then-narrow funnel, BM25 mechanism and FTS5 pitfalls (sign, query syntax, AND vs OR), RRF with the paper's formula and a hand-checkable four-chunk example, cross-encoder rerankers and options (prompted local LLM, transformers.js, Qwen3-Reranker; no Ollama rerank endpoint found in its docs), query rewriting (standalone, sub-queries, multi-phrasing, HyDE), recall@k/precision@k/MRR with traps, a small local measurement (12 questions on chapters 2.1-2.9: vector, BM25, RRF, RRF plus qwen3:8b rating rerank; MRR 0.459/0.743/0.663/0.828); practice extends experiment 22 (README section added, no solution code); 11 resource rows and 12 glossary terms added (issue 35). Local rerankers (transformers.js, Qwen3-Reranker) were not run, only the prompted-LLM one.

## Comments

- 2026-11-13 (fact-checker): ~45 claims, 14 external links and 11 resource rows checked (all load). Confirmed verbatim: RRF paper quotes (PDF text extracted locally, 2 pages, k = 60 "near-optimal, but ... not critical", CombMNZ needs scores and a cut-off rank), FTS5 k1/b and sign quotes, Anthropic 150/20 funnel, latency quote, 5.7→2.9→1.9% and 67%, sbert quotes and "e.g. 100", BEIR and HyDE abstract quotes, Hamel FAQ anchor and the three metric definitions plus synthetic queries from documents, Jason Liu quotes and 55%/65% on repository issues, Huyen pp. 257/268/273 and summary quotes, Qwen3-Reranker card (Apache-2.0, yes/no scoring, Transformers/ST/vLLM, no Ollama), no rerank endpoint in Ollama's API docs. Measurement tables re-computed from the per-question ranks (recall and MRR match). Fixed 5: Jason Liu "Look for" (only one dataset has numbers, none for precision); RRF "consistently beating the best system" → all but TREC 9; Xenova card's pipeline example is a single sentence (pair-scoring snippet noted); the measurement is labelled unreproduced (script not committed) and the BM25-bias claim softened; Qwen3-Reranker row marked "I did not run it". Cut 0.

## Needs human

- Re-run the 2026-11-10 MRR measurement (vector / BM25 / RRF / RRF + `qwen3:8b` rerank, 307 chunks, 12 questions) and commit the script under `experiments/22-rag/`, or keep the chapter's "unreproduced illustration" label. The script lived only in the writer's scratchpad.
- The transformers.js `Xenova/bge-reranker-base` and Qwen3-Reranker routes were not run (the chapter says so); confirm the output shape if a learner picks them.
