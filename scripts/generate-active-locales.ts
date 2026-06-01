import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const supportedLocales = [
  "en",
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
const outputPath = join(rootDir, "src", "lib", "generated-locales.ts");

function hasMeaningfulJson(value: unknown): boolean {
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.some(hasMeaningfulJson);
  if (!value || typeof value !== "object") return false;

  return Object.entries(value).some(([key, child]) => key !== "pages" && hasMeaningfulJson(child));
}

function hasTranslatedContent(path: string): boolean {
  const content = readFileSync(path, "utf8").trim();
  if (!content) return false;

  if (path.endsWith(".json")) {
    try {
      return hasMeaningfulJson(JSON.parse(content));
    } catch {
      return true;
    }
  }

  const frontmatter = content.match(/^---\s*\n([\s\S]*?)\n---\s*([\s\S]*)$/);
  if (!frontmatter) return true;

  const [, metadata, body] = frontmatter;
  if (body.trim()) return true;

  return metadata.split("\n").some((line) => {
    const [, value = ""] = line.split(/:(.*)/s);
    return value.trim().replace(/^['"]|['"]$/g, "").length > 0;
  });
}

function hasTranslatedFile(locale: string, dir = docsDir): boolean {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory() && hasTranslatedFile(locale, path)) return true;
    if (
      entry.isFile() &&
      (entry.name.endsWith(`.${locale}.md`) || entry.name.endsWith(`.${locale}.json`)) &&
      hasTranslatedContent(path)
    )
      return true;
  }

  return false;
}

const activeLocales = supportedLocales.filter(
  (locale) => locale === "en" || hasTranslatedFile(locale),
);
const source = `export const locales = [${activeLocales.map((locale) => JSON.stringify(locale)).join(", ")}] as const;\n`;

writeFileSync(outputPath, source);
