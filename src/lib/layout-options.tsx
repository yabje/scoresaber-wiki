import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BrandTitle } from "@/components/brand-title";
import { GitHubIcon } from "@/components/github-icon";
import { ThemeSwitch } from "@/components/theme-switch";
import { gitConfig } from "@/lib/shared";
import { ExternalLink } from "lucide-react";

export const repositoryUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

export function baseOptions(): BaseLayoutProps {
  return {
    i18n: true,
    nav: {
      title: <BrandTitle />,
      url: "/",
    },
    links: [
      {
        text: "Home",
        url: "/",
        active: "url",
      },
      {
        text: (
          <span className="nav-external-label">
            ScoreSaber
            <ExternalLink aria-hidden="true" />
          </span>
        ),
        url: "https://scoresaber.com",
        external: true,
        on: "nav",
      },
      {
        text: "ScoreSaber",
        url: "https://scoresaber.com",
        external: true,
        on: "menu",
      },
      {
        type: "icon",
        text: "GitHub",
        label: "GitHub",
        url: repositoryUrl,
        external: true,
        on: "nav",
        icon: <GitHubIcon />,
      },
    ],
    slots: {
      themeSwitch: ThemeSwitch,
    },
  };
}
