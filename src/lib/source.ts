import { docs } from "collections/server";
import { loader } from "fumadocs-core/source";
import type { InferPageType } from "fumadocs-core/source";
import { i18nConfig } from "@/lib/i18n";
import { docsRoute } from "@/lib/shared";

export const source = loader({
  baseUrl: docsRoute,
  i18n: i18nConfig,
  source: docs.toFumadocsSource(),
});

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title}

${processed}`;
}
