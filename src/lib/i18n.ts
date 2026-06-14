import type { I18nConfig } from "fumadocs-core/i18n";
import { locales } from "@/lib/generated-locales";

const supportedLocaleItems = [
  { name: "English", locale: "en" },
  { name: "German", locale: "de" },
  { name: "Japanese", locale: "ja" },
  { name: "Chinese Simplified", locale: "zh-CN" },
  { name: "Russian", locale: "ru" },
  { name: "French", locale: "fr" },
  { name: "Polish", locale: "pl" },
  { name: "Dutch", locale: "nl" },
  { name: "Portuguese, Brazilian", locale: "pt-BR" },
  { name: "Chinese Traditional", locale: "zh-TW" },
  { name: "Czech", locale: "cs" },
  { name: "Korean", locale: "ko" },
] as const;

export const supportedLocales = [
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
export type Locale = (typeof supportedLocales)[number];
export const defaultLocale: Locale = "en";
export { locales };
export const localeItems = supportedLocaleItems.filter((item) =>
  (locales as readonly string[]).includes(item.locale),
);

export const i18nConfig = {
  languages: [...locales],
  defaultLanguage: defaultLocale,
  hideLocale: "default-locale",
  fallbackLanguage: defaultLocale,
} satisfies I18nConfig<Locale>;

export function isLocale(value: string | undefined): value is Locale {
  return (locales as readonly string[]).includes(value ?? "");
}

export function splitLocaleFromSlug(slug: string[] = []) {
  const [first, ...rest] = slug;
  if (isLocale(first)) return { locale: first, slug: rest };

  return { locale: defaultLocale, slug };
}
