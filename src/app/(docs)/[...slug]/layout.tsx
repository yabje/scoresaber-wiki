import type { ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { SidebarActions } from "@/components/sidebar-actions";
import { SidebarHotkey } from "@/components/sidebar-hotkey";
import { splitLocaleFromSlug } from "@/lib/i18n";
import { baseOptions, repositoryUrl } from "@/lib/layout-options";
import { source } from "@/lib/source";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: string[] }>;
};

export default async function Layout({ children, params }: LayoutProps) {
  const { slug } = await params;
  const { locale } = splitLocaleFromSlug(slug);

  return (
    <DocsLayout
      tree={source.getPageTree(locale)}
      {...baseOptions()}
      themeSwitch={{ enabled: false }}
      sidebar={{ footer: <SidebarActions key="sidebar-actions" githubUrl={repositoryUrl} /> }}
    >
      <SidebarHotkey />
      {children}
    </DocsLayout>
  );
}
