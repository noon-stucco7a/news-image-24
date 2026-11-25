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

const OUTPUT_FILE_NAME = "entry.png";
const OUTPUT_DIR_ENV = "MAKEFUN_OUTPUT_DIR";
const DEFAULT_OUTPUT_DIR = "/output";

function resolveOutputDir(): string {
  return process.env[OUTPUT_DIR_ENV] ?? DEFAULT_OUTPUT_DIR;
}

function bundledImagePath(): string {
  return fileURLToPath(new URL("./entry.png", import.meta.url));
}

function destinationPath(outDir: string): string {
  return join(outDir, OUTPUT_FILE_NAME);
}

function placeEntryImage(outDir: string): void {
  copyFileSync(bundledImagePath(), destinationPath(outDir));
}

function ensureOutputDir(outDir: string): void {
  mkdirSync(outDir, { recursive: true });
}

function main(): void {
  const outDir = resolveOutputDir();
  ensureOutputDir(outDir);
  placeEntryImage(outDir);
}

main();
