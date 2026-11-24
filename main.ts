// News-image entry for Tuesday 24 November 2026 (Node 22, standard library only).
//
// The repository holds entry.png: a one-page newspaper front page that sums up
// the day's world news, drawn with PIL by the build's front-page renderer.
// This program's only job is to place those exact bytes at the output path —
// /output/entry.png in the grader, or $MAKEFUN_OUTPUT_DIR/entry.png locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(fileURLToPath(new URL("./entry.png", import.meta.url)), join(outDir, "entry.png"));
