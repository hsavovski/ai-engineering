# 144 — Fact-check chapter 7.4

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-07-ai-native-development/7.4-ci-background-agents.md`

## Goal

Fact-check chapter 7.4 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 7.4".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 7.4 "CI and background agents" written (core): one agent with three launchers (headless, GitHub Action, cloud scheduled task) with Mermaid and a comparison table, `claude -p` flags, permission modes for unattended runs (dontAsk/auto/bypass) with own recommendation, GitHub Action setup (interactive vs automation mode, secrets, plain-text prompt has no tools, job permissions vs allowlist, schedule caveats, GITHUB_TOKEN doesn't trigger CI), cloud sessions and scheduled tasks (triggers, claude/ branch prefix), launcher decision flowchart and 7-point control checklist; practice is experiment 31-background-agent (labeled issue or weekly landscape check -> PR, dry run, deliberate failures, injection test); 3 glossary terms, 4 resources rows. UNVERIFIED/not done: docs were read through a fetch subagent and the routines, permission-modes and web pages were truncated, so the hourly run caps were left out of the chapter; `--max-budget-usd` is only mentioned in passing in the docs (chapter says to confirm it); the minimum version for `--permission-prompts none` was not stated; did not open the claude-code-action repo or its security.md; the practice workflow was not run (needs a GitHub repo and an API key); 'Cloud sessions are not available on Bedrock/Vertex' and the plan list come from the web page via summary.

## Comments

## Needs human

- The practice workflow (GitHub Action on a labeled issue, cloud scheduled task) was not run: it needs a GitHub repo, a secret and an API key or subscription. The chapter states only what the docs say and leaves the run to the learner.
