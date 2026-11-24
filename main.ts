import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My son asked why I keep a pencil behind my ear. I said, \"In case I ever need to draw the line.\"";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
