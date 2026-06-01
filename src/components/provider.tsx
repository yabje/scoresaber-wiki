"use client";

import type { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import SearchDialog from "@/components/search";
import { defaultLocale, isLocale, localeItems, splitLocaleFromSlug, type Locale } from "@/lib/i18n";
import { RootProvider } from "fumadocs-ui/provider/next";

function getLocaleFromPathname(pathname: string): Locale {
  const { locale } = splitLocaleFromSlug(pathname.split("/").filter(Boolean));
  return locale;
}

function getLocalePath(pathname: string, locale: string) {
  const parsed = splitLocaleFromSlug(pathname.split("/").filter(Boolean));
  const segments =
    locale === defaultLocale || !isLocale(locale) ? parsed.slug : [locale, ...parsed.slug];

  return `/${segments.join("/")}`;
}

export function Provider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <RootProvider
      i18n={{
        locale: getLocaleFromPathname(pathname),
        locales: localeItems,
        onLocaleChange: (locale) => router.push(getLocalePath(pathname, locale)),
      }}
      search={{ SearchDialog }}
      theme={{ enabled: false }}
    >
      {children}
    </RootProvider>
  );
}
