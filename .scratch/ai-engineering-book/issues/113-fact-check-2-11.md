# 113 — Fact-check chapter 2.11

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-02-programming-with-llms/2.11-agentic-search.md`

## Goal

Fact-check chapter 2.11 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 2.11".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- The local test (ripgrep + `read_file`, five questions, one run each: 1/5, 1/5, then 3/5 after rewording) is an anecdote and its script was not committed.
- The chapter links to `0.3-standards-and-orgs` because a glossary row ties progressive disclosure to it. The writer did not open 0.3 to confirm it covers skills.
- The Claude Code tools page says Grep and Glob are absent by default on macOS/Linux under some conditions. Re-read.
- The two Anthropic articles are cited by their `/research/` URLs (the `/engineering/` ones redirect there). The text states no dates; the fetched pages showed 2025-09-29 and 2025-06-13.
- The issue went straight to resolved without a `claimed` commit (process slip only).

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 2.11 "Agentic search vs. vector DB" written: two ways to get text into the prompt (Mermaid), pipeline-vs-loop mapping, just-in-time loading and lightweight identifiers from Anthropic's context-engineering article, why grep suits code (Cline's argument with vendor caveat, Aider repo map), where it fails, a made-up cost model (13,750 vs 3,500 input tokens) with the multi-agent article's 4x/15x/80% numbers, hybrids (retrieval as a tool, agentic RAG), a throwaway local measurement (qwen3:8b/14b, grep+read_file, 5 questions, one run each: 1/5, 1/5, 3/5; refusal passed without searching), corpus decision table; practice extends experiment 22 (README section added, no code); 6 resource rows and 5 glossary terms added (issue 36). No paid calls; the measurement is an anecdote.

## Comments

## Needs human

- The throwaway measurement (qwen3:8b/14b, grep + read_file, five questions, one run each: 1/5, 1/5, 3/5) has no committed script, so it can't be reproduced. The chapter now labels it unverified. To settle it, rerun it and commit the script, or keep it as a labelled anecdote.

## Resolution (2026-11-13)

Checked 24 claims and 7 links (all live, HTTP 200). The two Anthropic articles, the Cline post, Aider's repo map, both Claude Code docs pages and the arXiv survey all match the quotes. The cost arithmetic adds up (13,750 vs ~3,550). 0.3 does cover progressive disclosure for skills. Fixed 4 items: Grep/Glob are absent by default on macOS, Linux and WSL, and Claude searches through Bash instead (the old "under some conditions" wording was wrong). Cline names three problems, not four. "augmenting" replaces "add". "Start wide, then narrow down" replaces "start broad". Labelled the local measurement as unverified. Nothing cut. The article dates (2025-09-29, 2025-06-13) are confirmed; the chapter states no dates, so none were added.
