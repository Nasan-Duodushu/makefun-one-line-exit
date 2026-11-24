// The One-Line Exit — a resignation letter exactly one line long.
// Reads like a real letter, lands the joke on the office printer that
// has been warming up since 2019: the reason for leaving is the building.
import { writeFileSync, mkdirSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "Dear Manager, I resign effective immediately — not because the work was hard, but because the printer has been 'warming up' since 2019 and I refuse to be outlived by it.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, line, "utf8");
