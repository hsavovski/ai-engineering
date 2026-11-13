# 33 – Managed agent: one task on Anthropic's Managed Agents vs `project/`

## What I tried

One small task run on Claude Managed Agents (cloud environment, explicit networking, a session budget), then the same task on `project/`, comparing setup effort, cost and observability.

Steps and acceptance check: [chapter 8.7](../../book/part-08-production/8.7-managed-agents.md#practice). I write the code (TypeScript).

## What happened

### The task (step 1)

| Question | Answer |
|---|---|
| Task | |
| Acceptance check | |
| Model (cheapest that can do it) | |

### Agent and environment (steps 2–3)

| Setting | Value and why |
|---|---|
| Start time (for setup effort) | |
| Agent: model, system prompt, tools | |
| Environment `networking` | |

### The session (steps 4–5)

| Item | Value |
|---|---|
| Budget (US cents) | |
| `stop_reason` | |
| Tokens in / out (from `span.model_request_end` or `session.usage`) | |
| `running` time | |
| My computed cost (tokens + runtime) | |
| Console Usage page figure | |
| Gap, and why | |

### The same task on `project/` (step 6)

| Item | Managed | `project/` |
|---|---|---|
| Model | | |
| Tokens in / out | | |
| Cost (USD) | | |
| Wall-clock time | | |
| Setup effort (time, concepts to learn) | | |
| What I could observe | | |
| What I could not control | | |

### Outcome run (step 7, optional)

<!-- Rubric criteria, iterations used, grader verdict vs my own judgement. -->

### The low-budget test (step 8)

<!-- Budget set, stop_reason, how far past the cap the cost landed, whether the work so far was readable, what a follow-up event did. -->

## What surprised me

## Comparison and one case where I would still build my own

## Cost

Record the spend in [costs.md](../../costs.md).
