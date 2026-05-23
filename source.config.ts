import { remarkDirectiveAdmonition } from "fumadocs-core/mdx-plugins";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import remarkDirective from "remark-directive";

type DirectiveNode = {
  type: string;
  name?: string;
  children?: DirectiveNode[];
  value?: string;
};

function getDirectiveLabel(node: DirectiveNode): string {
  return node.children?.map((child) => child.value ?? getDirectiveLabel(child)).join("") ?? "";
}

function remarkPlainTextDirectives() {
  function walk(node: DirectiveNode) {
    if (!node.children) return;

    node.children = node.children.map((child) => {
      if (child.type === "textDirective" || child.type === "leafDirective") {
        const marker = child.type === "leafDirective" ? "::" : ":";
        const label = getDirectiveLabel(child);

        return {
          type: "text",
          value: `${marker}${child.name ?? ""}${label ? `[${label}]` : ""}`,
        };
      }

      walk(child);
      return child;
    });
  }

  return (tree: DirectiveNode) => {
    walk(tree);
  };
}

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkDirective, remarkDirectiveAdmonition, remarkPlainTextDirectives],
  },
});
