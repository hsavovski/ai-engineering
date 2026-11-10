"""Step 1 (done for you): download a small corpus and turn it into token ids.

Run:  uv run prepare.py

Writes data/train.bin, data/val.bin (uint16 token ids) and data/meta.json
(the vocabulary), which train.py and sample.py read.

We use a CHARACTER-level tokenizer: every distinct character is one token.
That is not what real LLMs do (see chapter 1.2, they use BPE), but it keeps the
vocabulary at ~65 entries, so the embedding table and the output head are tiny
and all the interesting parts (attention, blocks, loss) stay visible.
Swapping in your BPE from experiment 04 is a good stretch goal.
"""

import json
import urllib.request
from pathlib import Path

import numpy as np

URL = "https://raw.githubusercontent.com/karpathy/ng-video-lecture/master/input.txt"
DATA = Path(__file__).parent / "data"
DATA.mkdir(exist_ok=True)

# 1. Get the text (about 1.1 MB: Shakespeare's plays concatenated).
text_path = DATA / "input.txt"
if not text_path.exists():
    print("downloading", URL)
    urllib.request.urlretrieve(URL, text_path)
text = text_path.read_text(encoding="utf-8")
print(f"{len(text):,} characters")

# 2. The vocabulary: sorted distinct characters. stoi = string -> int.
chars = sorted(set(text))
stoi = {ch: i for i, ch in enumerate(chars)}
print(f"vocab size: {len(chars)}")

# 3. Encode everything, then split 90% train / 10% validation.
#    We split by POSITION (the last 10% of the book), not randomly, because
#    neighbouring text is correlated: a random split would leak the answers.
ids = np.array([stoi[ch] for ch in text], dtype=np.uint16)
n_train = int(0.9 * len(ids))
ids[:n_train].tofile(DATA / "train.bin")
ids[n_train:].tofile(DATA / "val.bin")
print(f"train: {n_train:,} tokens, val: {len(ids) - n_train:,} tokens")

(DATA / "meta.json").write_text(json.dumps({"chars": chars}))
