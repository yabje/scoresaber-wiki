import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const locales = [
  "de",
  "ja",
  "zh-CN",
  "ru",
  "fr",
  "pl",
  "nl",
  "pt-BR",
  "zh-TW",
  "cs",
  "ko",
] as const;
const rootDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const docsDir = join(rootDir, "content", "docs");
const localeSuffix = /\.(de|ja|zh-CN|ru|fr|pl|nl|pt-BR|zh-TW|cs|ko)\.(md|json)$/;
const excludedPaths = new Set([
  join(docsDir, "ranking", "reweights.md"),
  join(docsDir, "ranking", "reweights", "meta.json"),
]);
const excludedDirs = [join(docsDir, "ranking", "reweights")];

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return walk(path);
    if (!entry.isFile()) return [];
    if (![".md", ".json"].includes(extname(entry.name))) return [];
    if (localeSuffix.test(entry.name)) return [];
    if (
      excludedPaths.has(path) ||
      excludedDirs.some((excludedDir) => path.startsWith(`${excludedDir}/`))
    )
      return [];

    return [path];
  });
}

function buildJsonPlaceholder(path: string) {
  const source = JSON.parse(readFileSync(path, "utf8")) as { pages?: unknown; title?: unknown };
  const placeholder: { pages?: unknown; title: string } = { title: "" };
  if (source.pages) placeholder.pages = source.pages;

  return `${JSON.stringify(placeholder, null, 2)}\n`;
}

function buildPlaceholder(path: string) {
  if (path.endsWith(".json")) return buildJsonPlaceholder(path);

  return '---\ntitle: ""\n---\n';
}

let created = 0;

for (const sourcePath of walk(docsDir)) {
  const extension = extname(sourcePath);
  const basePath = sourcePath.slice(0, -extension.length);

  for (const locale of locales) {
    const targetPath = `${basePath}.${locale}${extension}`;
    if (existsSync(targetPath)) continue;

    mkdirSync(dirname(targetPath), { recursive: true });
    writeFileSync(targetPath, buildPlaceholder(sourcePath));
    created++;
  }
}

console.log(`created ${created} translation placeholders`);
