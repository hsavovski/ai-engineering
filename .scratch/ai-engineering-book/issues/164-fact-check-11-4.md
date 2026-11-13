# 164 — Fact-check chapter 11.4

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-11-multimodal/11.4-computer-browser-agents.md`

## Goal

Fact-check chapter 11.4 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 11.4".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-13: chapter 11.4 "Computer and browser agents" written (deeper): the computer-use loop (Mermaid sequence; client-executed tools, coordinate scaling, batch actions, screenshot accumulation, verify-after-acting), vision vs accessibility-tree browser agents (Mermaid, comparison table, Playwright MCP, Anthropic browser-use tool), Claude Code Chrome and computer-use surfaces, reliability and speed (compounding-error arithmetic, habits table), prompt injection from web pages (channel table by observation style, five defences); practice is `experiments/44-browser-agent/` (README skeleton only; learner writes the TS client, Playwright MCP run, local injection page), 5 check questions, 8 resource rows, 4 glossary terms (issue 103). Opened and read (HTTP 200, text extracted via curl): Claude computer use tool docs (most; the middle "available actions"/limitations text partly truncated in my view), Claude browser use tool docs (intro, security considerations, member-tool paragraph), Playwright MCP README (options, features, tool list), Playwright aria-snapshots page (overview), Claude Code Chrome docs (capabilities, prerequisites; skimmed), Claude Code computer-use docs (header, permissions, trust-boundary headings only), Anthropic prompt-injection-defenses article (intro, amplifiers, defences; the attack-success-rate chart and figures were not quoted), Simon Willison lethal trifecta post. UNVERIFIED / not run: nothing was executed (no Playwright MCP run, no agent, no injection page); the OpenAI "computer-using agent" page returned 403 and is not cited; the "p^10 ≈ 60%/90%" success arithmetic is mine; the table row on typical failures and token-cost drivers, the claim that CSS-hidden text is "often invisible in a screenshot" and that alt/aria-label are attacker-controlled channels are my reasoning, not sourced; the Claude Code computer-use page's plan/macOS claims were read from its intro only; the Chrome docs' "site permissions inherited from the extension" is from a skim; the "Look for" item about "Limitations" and the zoom action come from the docs but the exact limitation list was only partly read; the `--isolated`, `--caps vision`, `--snapshot-mode full|none` and `--allowed-origins` flag descriptions come from the README at fetch time and were not run; `npx @playwright/mcp@latest --isolated` untested; `qwen3:14b` tool-calling suitability via Ollama is assumed, not tested; reading times are estimates; chapters 2.1, 2.6, 2.7, 3.4, 3.6, 4.1, 4.7, 8.1, 8.3 are linked by filename and not re-read.

## Comments
