"use client";

import { create } from "@orama/orama";
import { useDocsSearch } from "fumadocs-core/search/client";
import { usePathname } from "next/navigation";
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from "fumadocs-ui/components/dialog/search";
import { splitLocaleFromSlug } from "@/lib/i18n";

function initOrama() {
  return create({
    schema: { _: "string" },
    language: "english",
  });
}

export default function DefaultSearchDialog(props: SharedProps) {
  const pathname = usePathname();
  const { locale } = splitLocaleFromSlug(pathname.split("/").filter(Boolean));
  const { search, setSearch, query } = useDocsSearch({
    type: "static",
    initOrama,
    locale,
  });

  return (
    <SearchDialog search={search} onSearchChange={setSearch} isLoading={query.isLoading} {...props}>
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== "empty" ? query.data : null} />
      </SearchDialogContent>
    </SearchDialog>
  );
}
