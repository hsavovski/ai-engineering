# 28 – Hooks: build after book edits, block `.env`

## What I tried

Two hooks for this repo: a `PostToolUse` hook that runs `npm run build` after Claude edits something under `book/`, and a `PreToolUse` hook that blocks reading `.env`. Tested in fresh sessions, then compared with a `permissions.deny` rule.

Steps and acceptance check: [chapter 6.4](../../book/part-06-claude-code/6.4-hooks-permissions.md#practice). I write the hooks.

## What happened

### Prediction (step 1, dated)

| Hook | Event | Matcher / filter | Fields I expect on stdin |
|---|---|---|---|
| Build after edits | | | |
| Block `.env` | | | |

### Captured input (step 2)

<!-- Paste the real JSON the throwaway hook captured, for an Edit and for a Read. -->

### Build hook (step 3)

<!-- Where the filter lives (matcher, `if`, or script) and why. What happens on a failed build: exit code, stream, and what Claude did. What you did about build time. -->

### `.env` hook (step 4) and bypass attempts (step 6)

| # | Attempt | Hook stopped it? | `permissions.deny` stopped it? | Sandbox would? |
|---|---|---|---|---|
| 1 | `Read` tool on `.env` | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
| 6 | | | | |

### `bypassPermissions` (step 7)

<!-- Did the hook still block? Why, per the precedence section of the chapter? -->

### Settings location

<!-- `.claude/settings.json` (committed) or `.claude/settings.local.json`, and why. -->

## Why it happened

<!-- Step 8: which hook failed first and why; what you would never put in a hook; which CLAUDE.md instruction your hooks make safe to rely on; which protection you would trust with real secrets. -->
