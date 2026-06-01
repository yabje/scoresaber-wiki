import { readdirSync, writeFileSync } from "node:fs";
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

function hasTranslatedFile(locale: string, dir = docsDir): boolean {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory() && hasTranslatedFile(locale, path)) return true;
    if (
      entry.isFile() &&
      (entry.name.endsWith(`.${locale}.md`) || entry.name.endsWith(`.${locale}.json`))
    )
      return true;
  }

  return false;
}

const activeLocales = supportedLocales.filter(
  (locale) => locale === "en" || hasTranslatedFile(locale),
);
const source = `export const locales = ${JSON.stringify(activeLocales)} as const;\n`;

writeFileSync(outputPath, source);
