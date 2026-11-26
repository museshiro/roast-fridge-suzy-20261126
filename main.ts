import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of the fridge: freezer burn reframed as an archive, leftovers as evidence.
const LINE = "You call it freezer burn; I call it an archival system—every leftover goes in as dinner and comes out as evidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
