import { readFileSync } from "node:fs";
import { docs } from "collections/server";
import { loader } from "fumadocs-core/source";
import type { InferPageType } from "fumadocs-core/source";
import { i18nConfig } from "@/lib/i18n";
import { docsRoute } from "@/lib/shared";

const translatedFile = /\.(de|ja|zh-CN|ru|fr|pl|nl|pt-BR|zh-TW|cs|ko)\.(md|json)$/;

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

const docsSource = docs.toFumadocsSource();
const filteredSource = {
  files: docsSource.files.filter(
    (file) =>
      !translatedFile.test(file.path) ||
      (file.absolutePath ? hasTranslatedContent(file.absolutePath) : true),
  ),
};

export const source = loader({
  baseUrl: docsRoute,
  i18n: i18nConfig,
  source: filteredSource,
});

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title}

${processed}`;
}
