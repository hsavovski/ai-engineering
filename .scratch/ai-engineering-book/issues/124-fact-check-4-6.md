# 124 — Fact-check chapter 4.6

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-04-evals-observability/4.6-regression-evals-ci.md`

## Goal

Fact-check chapter 4.6 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 4.6".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 4.6 "Regression evals in CI" written: regression vs capability suites (table, Evals FAQ CI/CD answer), choosing the CI subset (five-step recipe), GitHub Actions mechanics (paths filter, concurrency cancel, timeout, read-only permissions, secrets and forks, pwn requests), cost control (seven levers incl. runner-side cap and OpenRouter per-key credit limit via Management API), thresholds and flakiness (infra errors, retry-then-fail rule with f² math, baseline-derived floor, must-pass list, Mermaid flow); practice is project step 16 (workflow under .github/workflows, cap, retry/threshold rules, break/quiet/cap proofs; brief and acceptance only, no code, no experiment folder); 3 resource rows and 6 glossary terms added (issue 55). Opened: Evals FAQ (CI/CD and how-often answers read in the page text), GitHub workflow-syntax, concurrency, using-secrets docs, OpenRouter limits and management-api-keys pages, GitHub Security Lab pwn-requests post, Anthropic demystifying-evals article (cited, not re-read this run). Not verified: timeout-minutes wording (summary only, default 360 not cited), that no hosted-runner GPU/Ollama option fits (own reasoning), temperature-0 nondeterminism of hosted models, whether the OpenRouter dashboard can set key limits (not claimed). Arithmetic (64%, 4%, 9%, 1.5 cases) is my own. Nothing was run besides check and build.

## Comments
