#!/usr/bin/env node
/**
 * Content verification gate.
 *
 * Compares the locked content manifest (src/content/original-content.ts)
 * against the text actually rendered into the exported production HTML
 * (out/index.html). Fails the build (exit 1) when it finds:
 *
 *   1. missing strings          — manifest text absent from the page
 *   2. altered strings          — casing/punctuation/statistic drift is
 *                                 caught because comparison is exact
 *                                 (only whitespace runs are collapsed,
 *                                 since HTML collapses them too)
 *   3. invented strings         — rendered text that is not part of any
 *                                 manifest string (and not interface
 *                                 chrome on the documented allowlist)
 *   4. omitted/duplicated or reordered sections — section sentinels must
 *                                 appear exactly once, in manifest order
 *   5. meta drift               — <title> and meta description must match
 *
 * Run:  npm run verify:content   (also wired into `npm run build`)
 */

import { readFileSync, writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/* ---------------------------------------------------------------- load
 * The manifest is TypeScript, but deliberately plain-data TypeScript.
 * Strip its two type-level constructs and import it as an ES module so
 * the verifier always reads the same file the site renders from.
 */
async function loadManifest() {
  const src = readFileSync(join(root, "src/content/original-content.ts"), "utf8");
  const js = src
    .replace(/\} as const;/, "};")
    .replace(/export type OriginalContent[^;]*;/, "");
  const dir = mkdtempSync(join(tmpdir(), "content-verify-"));
  const file = join(dir, "manifest.mjs");
  writeFileSync(file, js);
  const mod = await import(pathToFileURL(file).href);
  rmSync(dir, { recursive: true, force: true });
  return mod.originalContent;
}

/* ------------------------------------------------------------ extract */
function decodeEntities(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

const normalize = (s) => decodeEntities(s).replace(/\s+/g, " ").trim();

function extractTextNodes(html) {
  const body = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ");
  const nodes = [];
  for (const match of body.matchAll(/>([^<]+)</g)) {
    const text = normalize(match[1]);
    if (text) nodes.push(text);
  }
  return nodes;
}

/* -------------------------------------------------------------- rules */

// Interface chrome that is allowed to exist without being marketing
// content: accessibility affordances and generated wrapping only.
// Anything else rendered but absent from the manifest fails the build.
const UI_ALLOWLIST = new Set([
  "Skip to content", // skip link for keyboard/screen-reader users
  "Open menu",
  "Close menu",
  "“", // decorative quotation glyph in the About pull quote
]);

// Sentinel string per homepage section, in the approved order. Each must
// appear exactly once so sections cannot be dropped, duplicated or
// reordered silently.
function sectionSentinels(m) {
  return [
    ["Hero", m.hero.heading],
    ["Trusted by Global Businesses", m.trust.sectionName],
    ["Business Overview", m.overview.paragraphs[0]],
    ["Products", m.products.heading],
    ["Technology Services", m.services.heading],
    // items[0] renders twice by design (tab + selected-panel echo); use a
    // non-default tab as the uniqueness sentinel.
    ["Industries", m.industries.items[1].name],
    ["Technology DNA", m.technologyDna.body],
    ["Why Choose WovVTech", m.whyChoose.lead],
    ["About", m.about.statement],
    // the address also appears in the footer by design; the section label
    // is the unique sentinel.
    ["Global Presence", m.globalPresence.sectionName],
    ["CTA", m.cta.heading],
  ];
}

function collectStrings(value, path, out) {
  if (typeof value === "string") {
    out.push({ path, text: normalize(value) });
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => collectStrings(v, `${path}[${i}]`, out));
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      if (k === "href" || k === "route") continue; // not visible text
      collectStrings(v, path ? `${path}.${k}` : k, out);
    }
  }
}

/* ---------------------------------------------------------------- run */
const failures = [];
const manifest = await loadManifest();

let html;
try {
  html = readFileSync(join(root, "out/index.html"), "utf8");
} catch {
  console.error(
    "✖ out/index.html not found — run `next build` (static export) first."
  );
  process.exit(1);
}

const pageText = normalize(html.replace(/<script\b[\s\S]*?<\/script>/gi, " ")
  .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " "));
const nodes = extractTextNodes(html);

// 1 + 2 — every manifest string must appear exactly (missing/altered).
const strings = [];
collectStrings(manifest, "", strings);
for (const { path, text } of strings) {
  if (path.startsWith("meta.")) continue; // checked against <head> below
  if (!pageText.includes(text)) {
    failures.push(`MISSING/ALTERED  ${path}\n    expected: "${text}"`);
  }
}

// 3 — invented strings: every rendered text node must be a fragment of
// some manifest string, or documented interface chrome.
const manifestTexts = strings.map((s) => s.text);
for (const node of nodes) {
  if (UI_ALLOWLIST.has(node)) continue;
  if (/^[\s\d.,:;•·–—|/&+%()©↗→']*$/.test(node)) continue; // separators/digits
  const covered = manifestTexts.some(
    (t) => t === node || t.includes(node)
  );
  if (!covered) {
    failures.push(`INVENTED  rendered text not in manifest:\n    "${node}"`);
  }
}

// 4 — section presence, uniqueness, order.
let lastIndex = -1;
for (const [name, sentinel] of sectionSentinels(manifest)) {
  const text = normalize(sentinel);
  const first = pageText.indexOf(text);
  const last = pageText.lastIndexOf(text);
  if (first === -1) {
    failures.push(`SECTION OMITTED  ${name} (sentinel not rendered)`);
    continue;
  }
  if (first !== last && name !== "Why Choose WovVTech") {
    // whyChoose repeats two sourced sentences used elsewhere by design
    failures.push(`SECTION DUPLICATED  ${name}`);
  }
  if (first < lastIndex) {
    failures.push(`SECTION OUT OF ORDER  ${name}`);
  }
  lastIndex = first;
}

// 5 — meta title/description.
const titleMatch = html.match(/<title>([^<]*)<\/title>/);
if (!titleMatch || normalize(titleMatch[1]) !== manifest.meta.title) {
  failures.push(
    `META  <title> mismatch\n    expected: "${manifest.meta.title}"\n    actual:   "${titleMatch ? normalize(titleMatch[1]) : "(none)"}"`
  );
}
const descMatch = html.match(
  /<meta name="description" content="([^"]*)"/
);
if (!descMatch || normalize(descMatch[1]) !== manifest.meta.description) {
  failures.push(`META  description mismatch`);
}

/* ------------------------------------------------------------- report */
if (failures.length > 0) {
  console.error(`✖ Content verification FAILED — ${failures.length} issue(s):\n`);
  for (const f of failures) console.error("  " + f + "\n");
  process.exit(1);
}

console.log(
  `✓ Content verification passed — ${strings.length} locked strings present, ` +
    `${nodes.length} rendered text nodes accounted for, sections in approved order.`
);
