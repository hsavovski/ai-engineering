# 29 – Parallel work: worktrees, a custom subagent, and what it costs

## What I tried

Two chapter tasks run at once in separate worktrees, merged by hand, plus a read-only `reviewer` subagent compared with reviewing in the main conversation.

Steps and acceptance check: [chapter 6.5](../../book/part-06-claude-code/6.5-parallel-work.md#practice). I write the subagent (`reviewer.md`, here in this folder; copy it to `.claude/agents/` to use it). Earlier batch measurements are in [experiment 06](../06-parallel-tasks/README.md).

## What happened

### The two tasks and my prediction (step 1)

| | Issue | Chapter | Shared files it will touch |
|---|---|---|---|
| A | | | |
| B | | | |

Expected conflicts:

### Setup (step 3)

<!-- By hand or `claude --worktree`? What had to be fixed up (node_modules symlink, .worktreeinclude, .env)? -->

### The parallel run (steps 2 and 4)

| | Value |
|---|---|
| `/usage` before | |
| `/usage` after | |
| Wall time, both sessions | |
| Times each session needed me | A: / B: |

### Merge (step 5)

| File | Cause | Resolution | Predicted? |
|---|---|---|---|
| | | | |

`npm run check` and `npm run build` after the merge:

### Subagent (steps 6 and 7)

| Prompt | Should use `reviewer`? | Used it? |
|---|---|---|
| | yes | |
| | no | |

| | Main conversation | `reviewer` subagent |
|---|---|---|
| Tokens / `/usage` change | | |
| What was in my main context afterwards (`/context`) | | |

## Why (what I learned)

<!-- At least three bullets: which approach I would use next time for this kind of task, what the shared files cost me, whether the parallel run was worth it in usage terms. -->
