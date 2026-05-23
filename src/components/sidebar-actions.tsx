"use client";

import { GitHubIcon } from "@/components/github-icon";
import { ThemeSwitch } from "@/components/theme-switch";

type SidebarActionsProps = {
  githubUrl: string;
};

export function SidebarActions({ githubUrl }: SidebarActionsProps) {
  return (
    <div className="sidebar-actions">
      <a
        className="sidebar-action-link"
        href={githubUrl}
        rel="noreferrer noopener"
        target="_blank"
        aria-label="GitHub"
      >
        <GitHubIcon />
      </a>
      <ThemeSwitch className="sidebar-theme-switch" />
    </div>
  );
}
