# 137 — Fact-check chapter 6.5

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-06-claude-code/6.5-parallel-work.md`

## Goal

Fact-check chapter 6.5 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 6.5".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 6.5 "Subagents, worktrees and parallel work" written (core): the five parallel approaches and the three choosing questions, subagent context (what a fresh window starts with and lacks, delegation prompt as the whole interface, Mermaid), built-ins, forks, foreground/background, nesting and concurrency limits, when not to delegate; custom subagents (file format, frontmatter table, silent-ignore of misspelled fields, what makes a good one, skill vs subagent); git worktrees (`--worktree`, `.worktreeinclude`, what is shared, enforced-isolation checks and their gap, cleanup rules, `isolation: worktree`, merge conflicts remain); background sessions and agent view; agent teams and dynamic workflows (comparison table, decision flowchart); Pro-plan cost (usage scales with busy context windows, `/usage`, experiment 06's measurements reused); practice is experiments/29-parallel (two parallel worktree tasks, merge, custom `reviewer` subagent, cost comparison; README template only, no code); 7 resource rows and 8 glossary terms added (issue 69). Opened and read (fetched with curl as .md 2026-11-12): Claude Code docs pages agents, sub-agents (most sections, not the example subagents or hook sections), worktrees (most sections, not troubleshooting), agent-teams (intro, comparison, token usage, limitations; not display modes or troubleshooting), workflows (intro, comparison table, cost; not the example prompts or manage-runs), costs (usage breakdown, agent-team costs, long-session section), agent-view (quick start head, dispatch from shell, file-isolation section; not row summaries or keyboard shortcuts). Not verified: Claude Code version requirements (none cited); the "~7x" agent-team figure and the 25-agent / 1.5M-token workflow warning are quoted from the docs, not reproduced; the experiment-06 numbers (6% and 44%) are quoted from that README, not re-measured; "Projects public beta" and "agent view research preview" come from the agents page and may change; the claim that `/usage` plan breakdown shows on Pro comes from the costs page; reading-time estimates are mine; the Pro-plan "usage limits are the budget" framing relies on the costs page and was not checked against the plans pricing page; the book's own `book-batch.workflow.js` was only read for its header; `/subtask` and `/fork` naming depends on agent view being on and was not tried. Nothing was run besides check and build: no worktree, subagent, background session or team was created and the practice steps were not executed.

## Comments
