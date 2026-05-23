import type { I18nConfig } from "fumadocs-core/i18n";

export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeItems = [{ name: "English", locale: defaultLocale }];

export const i18nConfig = {
  languages: [...locales],
  defaultLanguage: defaultLocale,
  hideLocale: "default-locale",
  fallbackLanguage: defaultLocale,
} satisfies I18nConfig<Locale>;

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function splitLocaleFromSlug(slug: string[] = []) {
  const [first, ...rest] = slug;
  if (isLocale(first)) return { locale: first, slug: rest };

  return { locale: defaultLocale, slug };
}
