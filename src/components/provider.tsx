"use client";

import type { ReactNode } from "react";
import SearchDialog from "@/components/search";
import { defaultLocale, localeItems } from "@/lib/i18n";
import { RootProvider } from "fumadocs-ui/provider/next";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      i18n={{
        locale: defaultLocale,
        locales: localeItems,
        onLocaleChange: () => {},
      }}
      search={{ SearchDialog }}
      theme={{ enabled: false }}
    >
      {children}
    </RootProvider>
  );
}
