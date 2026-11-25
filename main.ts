import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "My laminated flowchart covers this exact fault in twelve steps — step one is 'turn to page two', and page two is missing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
