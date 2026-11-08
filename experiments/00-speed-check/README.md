# 00 – Speed check

## What I tried

How fast do local Qwen models run on a Mac mini M4 Pro (24 GB), how much does thinking mode cost, and are the answers any good?

`bench.py` sends one small coding prompt (a palindrome checker, "code only") to an Ollama model and prints speed stats. It uses only the standard library.

```bash
python3 bench.py                 # qwen3:14b, thinking off
THINK=1 python3 bench.py         # thinking on
python3 bench.py qwen3:8b        # another model (pull it first)
python3 bench.py qwen3:14b 16384 # custom context size
```

Runs on 2026-11-06, Ollama 0.40.14: qwen3:14b with thinking off and on, then four models compared with thinking off.

## What happened

### qwen3:14b, thinking off vs. on

| Date | Model | Ctx | Think | Prompt tok/s | Output tok/s | Output tokens | Total | Mem free |
|---|---|---|---|---|---|---|---|---|
| 2026-11-06 | qwen3:14b (Q4, 9.3GB) | 8192 | off | 87 | 24.3 | 36 | 2.0s | 29% |
| 2026-11-06 | qwen3:14b (Q4, 9.3GB) | 8192 | on | 151 | 19.5 | 875 | 45.0s | 29% |

~24 tok/s output, and thinking mode made a simple answer ~20× slower (2 s → 45 s).

### Model comparison (2026-11-06, ctx 8192, thinking off, cold start)

| Model | Disk | In memory | GPU | Load | Output tok/s | Output tokens | Mem free | Correct? |
|---|---|---|---|---|---|---|---|---|
| qwen3:8b | 5.2GB | 5.2GB | 100% | 4.4s | 41.3 | 38 | 49% | ❌ bug |
| qwen3:14b | 9.3GB | 9.7GB | 100% | 4.8s | 25.0 | 36 | 21% | ✅ |
| qwen2.5-coder:14b | 9.0GB | 9.5GB | 100% | 3.6s | 24.8 | 110 | 24% | ✅ (+ comments, examples) |
| qwen3:30b-a3b | 18GB | 19GB | 94% (6% CPU) | 11.8s | 41.1 | 193 | 14% | ✅ but leaked reasoning |

In short: the 8b wrote buggy code, and the 30b-a3b is fast (MoE) but tight on memory.

## Why (what I learned)

### Speed and thinking

- **Thinking is the big cost, not raw speed.** Same answer, but ~840 hidden reasoning tokens
  turned a 2-second reply into 45 seconds. Turn it off for simple tasks, on for hard ones.
- In current Ollama, the `/no_think` prompt tag doesn't stop reasoning. Use the API's
  `"think": false` (or `/set nothink` in the CLI chat).
- ~20–24 tok/s output is a comfortable reading speed. Model ran 100% on GPU (`ollama ps`).
- First call includes a load time of a few seconds; the model then stays in memory
  for 5 minutes by default.

### From the model comparison

- **Small models fail confidently.** qwen3:8b wrote
  `s == re.sub(...).lower()[::-1]`, which compares the *original* string to the cleaned
  reversed one, so `"Racecar"` and `"A man, a plan..."` return False. It looks right at a glance.
  Always test generated code.
- **MoE = big model, small-model speed.** qwen3:30b-a3b has 30B params but only ~3B active per
  token, so it runs at ~41 tok/s (same as the 8b) while being smarter. The cost is memory:
  19GB doesn't fully fit the GPU limit, so 6% spilled to CPU and free memory dropped to 14%.
  Close other apps when using it.
- **`think: false` isn't always honored.** qwen3:30b-a3b still reasoned and the raw text
  (ending in `</think>`) leaked into the answer. Harnesses need to handle this; for scripts,
  strip everything up to `</think>`.
- **Coder model is chattier.** qwen2.5-coder:14b ignored "code only" and added comments and
  usage examples. Same speed as qwen3:14b (same size class).
- **Speed scales with active parameters:** 8b and 30b-a3b ≈ 41 tok/s, both 14b ≈ 25 tok/s.
