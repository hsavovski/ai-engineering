"""Plot out/losses.json: train vs. validation loss against step.

Run:  uv run plot.py     (writes out/loss.png)
"""

import json
from pathlib import Path

import matplotlib

matplotlib.use("Agg")  # write a file, don't open a window
import matplotlib.pyplot as plt

HERE = Path(__file__).parent
h = json.loads((HERE / "out" / "losses.json").read_text())
plt.plot([r["step"] for r in h], [r["train"] for r in h], label="train")
plt.plot([r["step"] for r in h], [r["val"] for r in h], label="val")
plt.xlabel("step")
plt.ylabel("cross-entropy (nats)")
plt.legend()
plt.grid(alpha=0.3)
plt.savefig(HERE / "out" / "loss.png", dpi=150)
print("wrote out/loss.png")
