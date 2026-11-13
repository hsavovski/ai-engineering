# 154 — Fact-check chapter 9.3

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-09-model-landscape-cost/9.3-local-vs-paid.md`

## Goal

Fact-check chapter 9.3 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 9.3".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- Experiments 5.5 and 9.1 have no results yet, so the chapter uses only experiment 00 numbers. Update once those exist.
- Apple's power page figures (idle 5 W, max 140 W) are for a 64 GB M4 Pro configuration. This Mac mini has 24 GB, so confirm the wording "the configuration it shows".
- "Paid is usually faster" and prompt-processing-speed claims are framed as hypotheses to measure, not sourced.
- Ollama cloud docs say it doesn't train on prompts but give no retention period; the chapter says so.
- The experiment-00 link uses the repo URL `hsavovski/ai-engineering`, copied from Landscape. Confirm it is right.

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 9.3 "Local vs. paid" written: compare on your own tasks (pass rate, latency, cost per passed task), where the quality gap lives and local-specific traps (4096 default num_ctx, thinking), speed and memory on 24 GB read through memory bandwidth and active parameters with experiment 00 numbers, true-cost components with a made-up electricity example and break-even formula, privacy (local vs policy, Ollama cloud models, local system still leaking), offline, when local wins; practice is notes/routing.md combining 5.5 and 9.1 results (notes only, no experiment folder); 5 resource rows and 3 glossary terms added (issue 89). 5.5 and 9.1 results were not available, so the chapter uses experiment 00 numbers only; Apple's power page lists a 64 GB M4 Pro configuration.

## Comments
