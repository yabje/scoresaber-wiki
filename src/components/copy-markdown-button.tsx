"use client";

import { useCopyButton } from "fumadocs-ui/utils/use-copy-button";
import { Check, Copy } from "lucide-react";

export function CopyMarkdownButton({ markdown }: { markdown: string }) {
  const [checked, onClick] = useCopyButton(() => {
    navigator.clipboard.writeText(markdown);
  });

  return (
    <button type="button" className="copy-markdown-button" onClick={onClick}>
      {checked ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      {checked ? "Copied" : "Copy as Markdown"}
    </button>
  );
}
