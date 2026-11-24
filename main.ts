import { writeFileSync, mkdirSync } from "node:fs";

const WORD = "Wi-Fickle";

if (WORD.length < 1 || WORD.length > 20 || /\s/.test(WORD)) {
  throw new Error("entry must be a single word of 1-20 characters");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
