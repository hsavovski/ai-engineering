# 152 — Fact-check chapter 8.7

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-08-production/8.7-managed-agents.md`

## Goal

Fact-check chapter 8.7 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 8.7".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-13: chapter 8.7 "Managed agents" written (core): what a managed platform provides (table mapping my own loop/tools/sandbox/checkpointing to harness/toolset/environment/session; agent, environment, session, events), brain/hands/session decoupling from Anthropic's engineering post with Mermaid (pets vs cattle, `execute`/`wake`/`emitEvent`, credentials out of the sandbox, session vs context window, many brains/hands, the post's TTFT numbers attributed to Anthropic), environments (cloud vs self-hosted sandbox, omitted `networking` = unrestricted), session statuses and budget, outcomes with rubric and grader, cost (tokens + session runtime, rate on Landscape) and lock-in table, build-or-rent flowchart (my own framing); practice is experiments/33-managed-agent (task, agent+environment, budgeted session, cost from events vs Console, same task on project/, optional outcome, low-budget test, costs.md); 5 check questions; 3 resource rows, 7 glossary terms and 1 Landscape bullet (Managed Agents runtime price) added (issue 86). Opened and read (curl as .md 2026-11-13, HTTP 200): anthropic.com/research/managed-agents (whole; /engineering/managed-agents redirects to it), platform docs managed-agents overview, quickstart (first part), reference (event types, rate limits), sessions (budget and initial events parts), session-operations (statuses table), environments (networking, lifecycle), choosing-an-environment (intro), define-outcomes (rubric, results), pricing page (Managed Agents section). Only HTTP 200, not read: self-hosted, self-hosted-sandboxes, budgets, scheduled-deployments, tools pages (cited as pointers only; the chapter says only what their one-line descriptions in the overview/choosing page say). Not verified: the `wake`/`getSession`/`emitEvent`/`provision` names are from the post and may not be the public API (the chapter says so); the claim that other vendors' hosted agents converge on this shape is my opinion, unsourced; "token cost usually dominates runtime" is my inference (the pricing worked example only suggests it); the "ZDR/HIPAA not eligible" and beta header facts come from the overview as of today and may change; I did not read the quickstart's session/stream steps in full so the practice leaves field names to the learner; reading times are estimates; `session.usage` carrying cost and `span.model_request_end` carrying token counts come from the reference table, not tried. Not run: no managed-agent session was created and no API call made (unattended run, would spend money and needs a key), so nothing in the practice was tested and costs.md is unchanged; only check and build.

## Comments
