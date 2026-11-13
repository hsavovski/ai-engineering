# 140 — Fact-check chapter 6.8

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-06-claude-code/6.8-pro-limits.md`

## Goal

Fact-check chapter 6.8 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 6.8".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 6.8 "Working within Pro limits" written (core): what the limits are (five-hour and weekly, shared with Claude apps, not a message count or dollar figure), how usage is counted (context size × requests × model/effort, cache misses, Mermaid), measuring with /usage, /context, /insights, model and effort choice (decision table, escalate on failure), /clear vs /compact vs fresh session with handoff (Mermaid decision), other context habits, subagent and parallel cost, offloading (route Claude Code via ANTHROPIC_BASE_URL to Ollama/OpenRouter vs move bulk tasks out; the trap), when you hit the limit; practice is notes/claude-code.md (one-week log, controlled comparison, three rules; notes only, no experiment folder); 4 resource rows and 5 glossary terms added (issue 72). Opened and read (curl 2026-11-12, HTTP 200): Claude Code docs costs (most sections), model-config (aliases, effort), prompt-caching (cache lifetime, compaction), sub-agents (model rows), llm-gateway and llm-gateway-connect (grep only), Help Center articles 11145838 (first half) and 9797557 (first half), Ollama Claude Code page, OpenRouter Claude Code page (intro/why/quick-start head); only status 200 for claude.com/pricing, the platform effort page and the Anthropic-compatibility page. Not verified: which models Pro includes and the Pro limit sizes (nothing cited; Help Center plan pages not read); the decision tables (model/effort by task) and the offload split are my synthesis, labelled as such where stated; the claim that a routed session does not stretch the Pro allowance is inferred from the gateway docs (base URL alone keeps the claude.ai login) and not tested; the claim that a small local model is weak at Claude Code's tool use rests on 5.5 and was not measured here; reading-time estimates are mine; the 'usage credits' and /usage-credits details come from the costs page only. Not run: no Claude Code command from the chapter (/usage, /compact, ollama launch, ANTHROPIC_BASE_URL) was executed; only check and build.

## Comments
