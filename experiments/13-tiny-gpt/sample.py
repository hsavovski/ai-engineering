"""Step 4 (the generation loop is YOURS): sample text from the trained model.

Run:  uv run sample.py "ROMEO:" --temperature 0.8 --tokens 500
"""

import argparse
import json
from pathlib import Path

import torch

from model import GPT, GPTConfig

HERE = Path(__file__).parent
parser = argparse.ArgumentParser()
parser.add_argument("prompt", nargs="?", default="\n")
parser.add_argument("--tokens", type=int, default=500)
parser.add_argument("--temperature", type=float, default=1.0)
parser.add_argument("--top_k", type=int, default=0, help="0 = off")
args = parser.parse_args()

device = "mps" if torch.backends.mps.is_available() else "cpu"
chars = json.loads((HERE / "data" / "meta.json").read_text())["chars"]
stoi = {c: i for i, c in enumerate(chars)}
ckpt = torch.load(HERE / "out" / "ckpt.pt", map_location=device)
model = GPT(GPTConfig(**ckpt["cfg"])).to(device)
model.load_state_dict(ckpt["model"])
model.eval()


@torch.no_grad()
def generate(idx: torch.Tensor, n_new: int, temperature: float, top_k: int) -> torch.Tensor:
    """Extend idx (1, T) by n_new tokens, one token at a time.

    TODO (yours), for each new token:
      1. Crop idx to the last cfg.block_size tokens (the model has no
         position embedding beyond that).
      2. Run the model; keep only the logits of the LAST position.
      3. Divide by temperature (chapter 1.8). If top_k > 0, set every logit
         below the k-th largest to -inf.
      4. softmax -> probabilities -> torch.multinomial(probs, 1) -> next id.
      5. Append it to idx.
    Note there is no KV cache here: every step recomputes the whole window.
    That is the inefficiency chapter 1.9 fixes.
    """
    raise NotImplementedError


prompt_ids = torch.tensor([[stoi[c] for c in args.prompt]], device=device)
out = generate(prompt_ids, args.tokens, args.temperature, args.top_k)
print("".join(chars[i] for i in out[0].tolist()))
