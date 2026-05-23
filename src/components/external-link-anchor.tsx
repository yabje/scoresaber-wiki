import type { ComponentProps } from "react";
import { ExternalLink } from "lucide-react";

function isExternalHref(href: string | undefined) {
  return Boolean(href && /^(https?:)?\/\//.test(href));
}

export function ExternalLinkAnchor({ children, className, href, ...props }: ComponentProps<"a">) {
  if (!isExternalHref(href)) {
    return (
      <a {...props} className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <a
      {...props}
      className={["external-link", className].filter(Boolean).join(" ")}
      href={href}
      rel="noreferrer noopener"
      target="_blank"
    >
      {children}
      <ExternalLink aria-hidden="true" />
    </a>
  );
}
