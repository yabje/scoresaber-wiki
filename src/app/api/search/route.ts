import { createFromSource } from "fumadocs-core/search/server";
import { source } from "@/lib/source";

export const revalidate = false;

const localeMap = {
  en: "english",
  de: "german",
  ja: "english",
  "zh-CN": "english",
  ru: "russian",
  fr: "french",
  pl: "english",
  nl: "dutch",
  "pt-BR": "portuguese",
  "zh-TW": "english",
  cs: "czech",
  ko: "english",
} as const;

export const { staticGET: GET } = createFromSource(source, {
  language: "english",
  localeMap,
});
