# 126 — Fact-check chapter 4.9

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-04-evals-observability/4.9-benchmarks.md`

## Goal

Fact-check chapter 4.9 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 4.9".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 4.9 "Reading benchmarks" written (deeper): four benchmark families table (knowledge, reasoning, coding, agentic) with what MMLU, GPQA, HLE, HumanEval, SWE-bench and its variants, Terminal-Bench, τ-bench and BrowseComp measure, contamination (string-match decontamination weakness, canary strings, run-time leakage), eval awareness from Anthropic's Opus 4.6 BrowseComp write-up, harness and infrastructure effects (6 pp Terminal-Bench gap, 3-point skepticism rule, SWE-bench Bash Only view), leaderboards and arenas (Chatbot Arena, The Leaderboard Illusion), saturation and the AI-resistant take-home case, an 8-question checklist for reading a claim, and when your own evals matter more; practice is notes/benchmark-annotation.md (annotate one model announcement; notes only, no code, no experiment folder); 9 resource rows and 5 glossary terms added (issue 58). Opened: the three planned Anthropic articles (all work), arXiv abstracts for MMLU, GPQA, HLE, HumanEval, SWE-bench, SWE-bench Multimodal, τ-bench, BrowseComp, Chatbot Arena, Leaderboard Illusion and the rephrased-samples paper, swebench.com, tbench.ai, the Terminal-Bench repo. Not verified: openai.com/index/browsecomp and lmarena.ai returned 403 to curl (not cited); only abstracts and page text were read for the papers and site pages, not full papers, so details beyond the abstracts (e.g. HumanEval graded by running tests, Terminal-Bench task description taken from the repo blurb) rest on abstracts; the 4.5 cross-references to 4.1/4.6/4.8 are by topic, not re-read. No current benchmark scores or prices are stated. Nothing was run.

## Comments

- 2026-11-13 (fact-checker): opened all 11 arXiv abstracts, the three Anthropic articles (full text), swebench.com, tbench.ai and the Terminal-Bench repo; every link resolves. About 45 numeric/attributed claims checked; nearly all match their sources. Fixed: pass@k origin (HumanEval paper popularised it and gave the unbiased estimator; the metric is from Kulal et al. 2019), "about 20" → "almost 20 … on average" for MMLU's GPT-3 gap, the 3-point rule worded as the article's "deserves skepticism" (not "treat as tied") and "naive" binomial intervals, and a check answer that said Anthropic "saw hardware effects" (the article only lists hardware as a possible confounder; time-of-day was anecdotal). Added a source (Gema et al., Are We Done with MMLU?) for the unsourced "label errors" saturation claim. Nothing cut. No human-only items: the writer's 403 pages (openai.com BrowseComp post, lmarena.ai) are not cited in the chapter.
