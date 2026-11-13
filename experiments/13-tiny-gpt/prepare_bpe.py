"""Chapter 10.5, step 1 (starter, you fill in the TODOs): BPE tokens for a bigger corpus.

Run:  uv run prepare_bpe.py

Writes data_bpe/train.bin, data_bpe/val.bin (uint16 token ids), data_bpe/tokenizer.json
and data_bpe/meta.json (vocab size and the bytes-per-token ratio of the validation set).
Your train_bpe.py and sample_bpe.py read these. The original prepare.py, train.py and
the 1.13 data/ folder stay untouched, so you can compare the two runs.

The corpus is TinyStories (Eldan & Li, 2023): short synthetic stories written with a
small vocabulary. It is a good fit for a laptop because even a small model learns to
write coherent text on it. The V2 train file is about 2.2 GB, more than you need:
we use only the first MAX_TRAIN_BYTES of it.

Why uint16? A token id must fit in 2 bytes, so the vocabulary must stay below 65,536.
That holds for every vocabulary in this experiment (nanoGPT does the same for GPT-2's
50,257 tokens).
"""

import json
import urllib.request
from pathlib import Path

import numpy as np
from tokenizers import Tokenizer, decoders, models, pre_tokenizers, trainers

BASE = "https://huggingface.co/datasets/roneneldan/TinyStories/resolve/main/"
TRAIN_FILE = "TinyStoriesV2-GPT4-train.txt"
VAL_FILE = "TinyStoriesV2-GPT4-valid.txt"   # about 22 MB, used as given for validation
MAX_TRAIN_BYTES = 300_000_000               # ~300 MB of the 2.2 GB file; raise it later
VOCAB_SIZE = 4096                           # try 2048 / 8192 / 16384 later and compare
EOT = "<|endoftext|>"                       # the separator between stories
DATA = Path(__file__).parent / "data_bpe"
DATA.mkdir(exist_ok=True)


def download(name: str, max_bytes: int | None = None) -> Path:
    """Download (a prefix of) a file once. A Range request fetches only the first bytes,
    so a cut can end in the middle of a story or even of a UTF-8 character:
    we drop the incomplete tail in load_stories()."""
    path = DATA / name
    if path.exists():
        return path
    req = urllib.request.Request(BASE + name)
    if max_bytes:
        req.add_header("Range", f"bytes=0-{max_bytes - 1}")
    print("downloading", name)
    with urllib.request.urlopen(req) as r, open(path, "wb") as f:
        while chunk := r.read(1 << 20):
            f.write(chunk)
    return path


def load_stories(path: Path) -> list[str]:
    """TinyStories files separate stories with the <|endoftext|> marker.
    TODO 1: read the file as UTF-8 text (errors="ignore" drops a cut-off character),
    split on EOT, strip whitespace, drop empty strings, and drop the LAST piece when the
    file was cut (it is probably an incomplete story). Return the list of stories.
    """
    raise NotImplementedError


def train_tokenizer(stories: list[str]) -> Tokenizer:
    """Train a byte-level BPE tokenizer with the Hugging Face `tokenizers` library.

    Byte-level: the base vocabulary is the 256 bytes, so no text is ever out of
    vocabulary (chapter 1.2). Train it on the TRAIN stories only: if the tokenizer
    saw the validation text, the validation loss would be slightly flattered.

    TODO 2: build it:
      tok = Tokenizer(models.BPE())
      tok.pre_tokenizer = pre_tokenizers.ByteLevel(add_prefix_space=False)
      tok.decoder = decoders.ByteLevel()
      trainer = trainers.BpeTrainer(vocab_size=VOCAB_SIZE, special_tokens=[EOT],
                                    initial_alphabet=pre_tokenizers.ByteLevel.alphabet())
      tok.train_from_iterator(stories, trainer)
    Then look at the merges: print the first 30 and last 30 tokens of the vocabulary
    (tok.get_vocab(), sorted by id). Which are the first merges? Which are the last?
    """
    raise NotImplementedError


def encode_to_bin(tok: Tokenizer, stories: list[str], out: Path) -> int:
    """Encode every story, put the EOT id after each, and write one flat uint16 array.

    TODO 3: use tok.encode_batch(stories) (it runs in parallel), concatenate the ids
    with an EOT id after each story, convert to np.uint16 and .tofile(out).
    Return the number of tokens. If memory gets tight, encode in chunks of 50,000
    stories and append to the file.
    """
    raise NotImplementedError


if __name__ == "__main__":
    train_stories = load_stories(download(TRAIN_FILE, MAX_TRAIN_BYTES))
    val_stories = load_stories(download(VAL_FILE))
    print(f"{len(train_stories):,} train stories, {len(val_stories):,} validation stories")

    tok = train_tokenizer(train_stories)
    tok.save(str(DATA / "tokenizer.json"))

    n_train = encode_to_bin(tok, train_stories, DATA / "train.bin")
    n_val = encode_to_bin(tok, val_stories, DATA / "val.bin")

    # Bytes per token on the validation text: you need it to turn the loss into
    # bits per byte, the number that compares different tokenizers (chapter 10.5).
    # TODO 4: n_val_bytes = the UTF-8 size of the validation text you encoded
    # (the stories joined with the separator you used, measured with len(s.encode())).
    n_val_bytes = 0
    meta = {"vocab_size": tok.get_vocab_size(), "train_tokens": n_train,
            "val_tokens": n_val, "val_bytes": n_val_bytes}
    (DATA / "meta.json").write_text(json.dumps(meta))
    print(meta, "bytes per token:", round(n_val_bytes / max(n_val, 1), 2))
