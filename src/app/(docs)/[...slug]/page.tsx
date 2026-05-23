import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CopyMarkdownButton } from "@/components/copy-markdown-button";
import { ExternalLinkAnchor } from "@/components/external-link-anchor";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import { getMDXComponents } from "@/components/mdx";
import { splitLocaleFromSlug } from "@/lib/i18n";
import { normalizeSlug } from "@/lib/routes";
import { getLLMText, source } from "@/lib/source";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export const dynamicParams = false;

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const parsed = splitLocaleFromSlug(slug);
  const page = source.getPage(normalizeSlug(parsed.slug), parsed.locale);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdown = await getLLMText(page);

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <div className="docs-page-heading">
        <DocsTitle>{page.data.title}</DocsTitle>
        <CopyMarkdownButton markdown={markdown} />
      </div>
      {page.data.description ? (
        <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      ) : null}
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page, ExternalLinkAnchor),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: page.url.split("/").filter(Boolean),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const parsed = splitLocaleFromSlug(slug);
  const page = source.getPage(normalizeSlug(parsed.slug), parsed.locale);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
