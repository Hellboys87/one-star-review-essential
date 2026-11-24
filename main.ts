// One-Star Review of Something Essential — entry writer.
// Prints a single deadpan one-star review of sleep to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "One star for sleep: an eight-hour download I cannot pause, skip or reschedule, and the overnight update only ever replays things I said wrong in 2011.";

// The gate only accepts 1 to 160 characters, so fail loudly here rather
// than ship a review the scorer would refuse unseen.
if (review.length < 1 || review.length > 160) {
  throw new Error(`review is ${review.length} characters, outside 1-160`);
}

function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!dir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  return dir;
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), review + "\n", "utf8");
}

main();
