# 19 – Tool call by hand

## What I tried

One `read_file` tool, one tool-call round trip by hand (request, run the function, request again, no loop), against local `qwen3:8b` and one paid model. I compare where the call sits in each response, how arguments and ids look, and how the result goes back.

Steps and acceptance check: [chapter 2.6](../../book/part-02-programming-with-llms/2.6-tool-calling.md#practice). I write all the code.

## What happened

### Predictions (before running)

<!-- Will each model call the tool? Valid arguments from qwen3:8b? What breaks without the second request? -->

### Round trips

<!-- Raw request 1 response, tool result and final text, for the local and the paid model. -->

### Diff of the two routes

| | qwen3:8b (route: ) | paid model: |
|---|---|---|
| Where the call is | | |
| Arguments: object or string | | |
| Call id | | |
| How the result is attached | | |
| Stop field that signals a call | | |
| Something that surprised me | | |

### On-purpose failures

| Case | qwen3:8b | paid model | What my code must do |
|---|---|---|---|
| (a) missing file, error as result | | | |
| (b) error with and without a hint | | | |
| (c) second request without `tools` | | | |
| (d) text before `tool_result` (Claude) | | | |
| (e) question that needs no file | | | |
| (f) `max_tokens` too low | | | |

### Two calls in one turn, and forcing

<!-- Step 8 and 9: how many calls per model, how I answered them, what tool_choice did on each route. -->

## Why (what I learned)

<!-- At least three bullets. -->
