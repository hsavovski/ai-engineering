"""Quick speed check for an Ollama model.

Usage:
    python3 bench.py                  # defaults to qwen3:14b
    python3 bench.py qwen3:8b
    python3 bench.py qwen3:14b 16384  # custom context size
    THINK=1 python3 bench.py          # let the model reason before answering

Uses only the standard library, so no install needed.
"""

import json
import os
import sys
import urllib.error
import urllib.request

MODEL = sys.argv[1] if len(sys.argv) > 1 else "qwen3:14b"
NUM_CTX = int(sys.argv[2]) if len(sys.argv) > 2 else 8192
THINK = os.environ.get("THINK") == "1"
PROMPT = (
    "Write a Python function that checks if a string is a palindrome, "
    "ignoring case and non-alphanumeric characters. Code only."
)

def generate(payload):
    req = urllib.request.Request(
        "http://localhost:11434/api/generate",
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req) as resp:
        return json.load(resp)


payload = {
    "model": MODEL,
    "prompt": PROMPT,
    "stream": False,
    "think": THINK,  # reasoning models: Ollama returns the reasoning in a separate "thinking" field
    "options": {"num_ctx": NUM_CTX},
}
try:
    d = generate(payload)
except urllib.error.HTTPError as e:
    # Non-reasoning models (e.g. qwen2.5-coder) may reject the "think" flag.
    if e.code != 400:
        raise
    payload.pop("think")
    THINK = "n/a"
    d = generate(payload)

# Ollama reports durations in nanoseconds.
s = lambda ns: ns / 1e9

print(d["response"].strip())
print("---")
print(f"model:   {MODEL} (num_ctx={NUM_CTX}, think={THINK})")
if d.get("thinking"):
    print(f"thinking: {len(d['thinking'])} chars of reasoning (counted in output tokens)")
print(f"load:    {s(d.get('load_duration', 0)):.1f}s")
print(f"prompt:  {d['prompt_eval_count']} tokens @ "
      f"{d['prompt_eval_count'] / s(d['prompt_eval_duration']):.0f} tok/s")
print(f"output:  {d['eval_count']} tokens @ "
      f"{d['eval_count'] / s(d['eval_duration']):.1f} tok/s")
print(f"total:   {s(d['total_duration']):.1f}s")
