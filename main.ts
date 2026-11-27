// main.ts — the hand-in program for the DealHunt 2026 entry
// (make.fun black-friday-deal-finder-01, Node 22, standard library only).
//
// The site itself is the static app/ folder next to this file: plain HTML,
// CSS and ES modules, no build step, no network loads. This program only
// delivers it: it copies app/ and screenshots/ into the output directory
// and writes dossier.json there with the vendored make.fun library, which
// the scorer requires to be byte-for-byte its own output — so leave
// vendor/makefun-frontend.ts exactly as it came from the kit.
//
// Inside the grader the output goes to /output. Outside it,
// MAKEFUN_OUTPUT_DIR stands in:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-frontend.ts";

const here = fileURLToPath(new URL(".", import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(out, { recursive: true });
cpSync(join(here, "app"), join(out, "app"), { recursive: true });
mkdirSync(join(out, "screenshots"), { recursive: true });
if (existsSync(join(here, "screenshots"))) {
  cpSync(join(here, "screenshots"), join(out, "screenshots"), { recursive: true });
}

// The scorer's own caps (reference/gate.json): text_max_bytes shapes the
// bytes; the rest refuse an entry the scorer would refuse — more than 4
// screenshots or one over 256 KiB; more than 993 files and directories in
// app/ or 16 MiB of app files.
writeFileSync(
  join(out, "dossier.json"),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    app_max_files: 993,
    app_max_bytes: 16777216,
  }),
);
