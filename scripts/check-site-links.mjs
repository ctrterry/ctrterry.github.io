import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, normalize, relative, resolve, sep } from "node:path";

const siteRoot = resolve(process.argv[2] || "_site");
const htmlFiles = [];

function collectHtmlFiles(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) collectHtmlFiles(path);
    if (stat.isFile() && path.endsWith(".html")) htmlFiles.push(path);
  }
}

function localTarget(fromFile, value) {
  const clean = value.split("#", 1)[0].split("?", 1)[0];
  if (!clean || /^(?:[a-z]+:|\/\/)/i.test(clean)) return null;

  const decoded = decodeURIComponent(clean);
  const target = decoded.startsWith("/")
    ? join(siteRoot, decoded.slice(1))
    : resolve(dirname(fromFile), decoded);

  return normalize(target);
}

function targetExists(target) {
  if (existsSync(target)) return true;
  return existsSync(join(target, "index.html"));
}

if (!existsSync(siteRoot)) {
  console.error(`Publish directory does not exist: ${siteRoot}`);
  process.exit(1);
}

collectHtmlFiles(siteRoot);

const failures = [];
const attributePattern = /\b(?:href|src)=["']([^"']+)["']/gi;

for (const htmlFile of htmlFiles) {
  const html = readFileSync(htmlFile, "utf8");
  for (const match of html.matchAll(attributePattern)) {
    const target = localTarget(htmlFile, match[1]);
    if (!target) continue;

    const outsideSite = relative(siteRoot, target).split(sep)[0] === "..";
    if (outsideSite || !targetExists(target)) {
      failures.push(`${relative(siteRoot, htmlFile)} -> ${match[1]}`);
    }
  }
}

if (failures.length) {
  console.error("Broken local links found:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files: all local links resolve.`);
