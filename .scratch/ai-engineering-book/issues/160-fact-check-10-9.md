# 160 — Fact-check chapter 10.9

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-10-modifying-serving-models/10.9-distillation-synthetic-data.md`

## Goal

Fact-check chapter 10.9 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 10.9".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-13: chapter 10.9 "Distillation and synthetic data" written (deeper): logit vs output distillation (table, on-policy mention), synthetic data families and the generation loop (Mermaid; diversity from inputs, human-made eval set), filtering and dedup (filter-cost table, exact/near/test-set dedup), model collapse (replacement vs accumulation), terms of service and licensing (teacher API terms, student/base license, aggregators, private data in prompts, provenance manifest), cost arithmetic and break-even (no prices; links Landscape); 11 resource rows, 7 glossary terms, 5 check questions; practice extends `experiments/38-lora/` with a README "10.9" section (teacher-labelled commit messages from the learner's own diffs, TypeScript `generate.ts`/`filter.ts` written by the learner, retrain with the same config, four-way comparison, cost to `costs.md`); no starter code added. Opened (HTTP 200 via curl) and abstract/relevant passage read: arXiv 1503.02531, 2212.10560, 2305.17493, 2404.01413, 2107.06499, 2406.08464, 2501.12948 (abstract), Nature s41586-024-07566-y (abstract), Alpaca blog (intro, release-decision paragraph), Anthropic Commercial Terms (D.4 quote), aie-book ToC (ch. 8 entries), smol-course v1/6_synthetic_datasets README and instruction_datasets.md (headings and the quoted lines). Only status checked, not read: arXiv 2306.11644 (title only), arXiv 2306.08543 MiniLLM (title only; the "student's own sequences" description is from memory of the paper), distilabel. UNVERIFIED: OpenAI terms page returned 403, so the OpenAI no-competing clause is cited only through the Alpaca authors' statement; Hinton paper's "soft targets and temperature" sections and the 7/1/4 digit example are from memory (only the abstract was read; the example is labelled illustrative); the claim that the teacher's logits are not available from hosted APIs beyond top log-probs rests on memory (1.1 mentions logprobs, not re-read); the "same tokenizer" requirement for logit distillation and the MinHash/Jaccard dedup descriptions are my general knowledge; the Nature paper's Gaussian-mixture toy example and "discussion of tails" pointers were not read past the abstract; reading times are estimates; the Anthropic terms may have changed (checked 2026-11-13); smol-course module is in the archived v1 folder, current course version has no synthetic-data unit (checked from the unit list on the course home page). Not run: the practice (learner's work); no generate.ts/filter.ts exist by design; the Mermaid diagram was not rendered visually (build passes).

## Comments
