import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Apology: a robot confesses one specific, human-scale mistake.
// Line 1 owns it exactly: the mop bucket, three litres of grey water,
// an orchid that survived eleven years and two house moves.
// Line 2 draws the lesson from that exact mistake: check the label
// before the tap, and read the pot's tag out loud before pouring a drop.
// Two lines, no trailing newline: the gate counts 1-400 characters.
const ENTRY =
  "I am sorry I watered your grandmother's orchid with the mop bucket: three litres of grey water on a plant that survived eleven years and two house moves.\nI learned to check the label before the tap, so from now on I read the pot's tag out loud before I pour a single drop.";

if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`entry must be 1-400 chars, got ${ENTRY.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
