# 114 — Fact-check chapter 3.1

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-03-agents/3.1-workflows-vs-agents.md`

## Goal

Fact-check chapter 3.1 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 3.1".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- The OpenAI business page returns 403, so the chapter cites the PDF on `cdn.openai.com`; page numbers (pp. 4–6, 12–17) are PDF page numbers.
- Anthropic's "4× / 15× more tokens" figures link their source; re-confirm.
- OpenAI's PDF uses "workflow" differently from Anthropic; the chapter says so and follows Anthropic.

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 3.1 "Workflows vs. agents" written: who decides the next step (Anthropic's workflow/agent split, OpenAI's differing use of "workflow"), the augmented LLM, the five workflow patterns with Mermaid diagrams and TS sketches, a working agent definition (goal, tools, loop, stopping rule), the autonomy/predictability trade table with Anthropic's measured 4x/15x token figures, a decision flowchart with worked examples, where Claude Code sits; practice is experiment 23 (route + evaluator-optimizer vs. single-call baseline; README skeleton only); 4 resource rows and 7 glossary terms added (issue 37). OpenAI guide read from its PDF; page-number references are to that PDF.

## Comments
