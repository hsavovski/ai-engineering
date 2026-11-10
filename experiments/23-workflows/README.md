# 23 – Workflows without an agent loop

## What I tried

One workflow for a task of my choice: route the input, run a specialised prompt, then an evaluator-optimizer with a capped number of rounds. Compared against a single-call baseline. No agent loop, no model-chosen tools.

Steps and acceptance check: [chapter 3.1](../../book/part-03-agents/3.1-workflows-vs-agents.md#practice). I write all the code.

## What happened

### Task, categories and test inputs

<!-- The task, 2-3 categories, 8-10 inputs (at least two on a category boundary), 3-5 checkable criteria. -->

### Predictions (before building the workflow)

<!-- Will it beat the baseline? Where will the router be wrong? How many evaluator rounds? How many calls per input? -->

### Baseline (single call)

<!-- Prompt and notes on the outputs. -->

### Workflow results

| Input | Route | Calls | Rounds | Time | Baseline vs workflow (won/lost/tie) |
|---|---|---|---|---|---|
| | | | | | |

### On-purpose failures

| Case | What my code did | What it should do |
|---|---|---|
| (a) forced wrong route | | |
| (b) unsatisfiable criterion, cap holds? | | |
| (c) different model for the evaluator | | |

### Where my code held the control flow

<!-- Step 10: the exact points, and what would have to change for the model to hold it instead. -->

## Why (what I learned)

<!-- At least three bullets. Was the workflow worth its extra calls? -->
