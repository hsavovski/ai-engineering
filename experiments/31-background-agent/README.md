# 31 – Background agent: a labeled issue becomes a pull request

## What I tried

A GitHub Actions workflow that runs Claude Code unattended on an issue labeled `ready-for-agent` (or, for the alternative brief, a weekly `landscape.md` freshness check) and opens a pull request, with a cost cap and a minimal tool allowlist.

Steps and acceptance check: [chapter 7.4](../../book/part-07-ai-native-development/7.4-ci-background-agents.md#practice). I write the workflow.

## What happened

### Choice and repo (step 1)

| Question | Answer |
|---|---|
| Brief chosen (labeled issue / weekly check) | |
| Throwaway repo or this repo | |
| Auth: API key secret or OAuth token | |

### Headless dry run (step 2)

<!-- The `claude -p` command you ran locally, its `--allowedTools` / permission mode, `total_cost_usd` and what you changed in the allowlist after the first denied call. -->

### The workflow (steps 3–4)

| Setting | Value and why |
|---|---|
| Trigger and condition | |
| `permissions:` block | |
| `--allowedTools` | |
| `--max-turns` | |
| `timeout-minutes` / `concurrency` | |

### Runs (steps 5–6)

| Run | Trigger | Outcome (PR / no change / failure) | Minutes | Cost (USD) |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |

### The untrusted-input test (step 7)

<!-- What the issue text said, what the agent did, which control stopped it (or did not). -->

## What surprised me

## Cost

Record any spend in [costs.md](../../costs.md).
