import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type HomeContent = {
  action: string;
  resourceLabel: string;
  resourceGroups: {
    title: string;
    links: [string, string][];
  }[];
  externalTitle: string;
  externalLinks: [string, string, string][];
  footer: string;
};

const content: HomeContent = {
  action: "Beginners Guide",
  resourceLabel: "Wiki resources",
  resourceGroups: [
    {
      title: "Getting Started",
      links: [
        ["Rules", "/rules"],
        ["Beginners Guide", "/beginners-guide"],
        ["The Ranking System", "/ranking-system"],
        ["Frequently Asked Questions", "/faq"],
      ],
    },
    {
      title: "Ranking Resources",
      links: [
        ["How to Rank my Map", "/ranking/how-to-rank-map"],
        ["Ranking Criteria", "/ranking/criteria"],
        ["Ranking Queue Rules", "/ranking/ranking-queue-rules"],
        ["QAT Guidelines", "/ranking/qat-guidelines"],
        ["Modding Queue Information", "/ranking/modding-queue-information"],
        ["ScoreSaber Team Information", "/ranking/scoresaber-team-information"],
        ["Ranking Unban System and Terms", "/ranking/ranking-unban-system-and-terms"],
        ["Reweights", "/ranking/reweights"],
      ],
    },
    {
      title: "Other Resources",
      links: [["About Us", "/about-us"]],
    },
  ],
  externalTitle: "External Links",
  externalLinks: [
    ["Discord", "https://discord.gg/scoresaber", "Join us on Discord"],
    ["Patreon", "https://patreon.com/scoresaber", "Support us on Patreon"],
    ["X", "https://x.com/ScoreSaber", "Follow us on X"],
    ["YouTube", "https://www.youtube.com/@ScoreSaberOfficial", "Subscribe to us on YouTube"],
    ["BSMG Wiki", "https://bsmg.wiki/", ""],
  ],
  footer: "Copyright (c) ScoreSaber 2026 | Licensed under CC BY-NC-SA 4.0",
};

export function HomePage() {
  return (
    <main className="home-shell">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-logo">
          <Image src="/scoresaber.svg" width={96} height={96} alt="" priority />
        </div>
        <h1 id="home-title" className="home-title">
          <span className="brand-word">ScoreSaber Wiki</span>
        </h1>
        <div className="home-actions">
          <Link className="home-button" href="/beginners-guide">
            {content.action}
          </Link>
        </div>
      </section>

      <section className="home-grid" aria-label={content.resourceLabel}>
        {content.resourceGroups.map((group) => (
          <article className="home-card" key={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="home-section" aria-labelledby="external-links">
        <h2 id="external-links">{content.externalTitle}</h2>
        <ul>
          {content.externalLinks.map(([label, href, description]) => (
            <li key={href}>
              <a href={href} rel="noreferrer noopener" target="_blank">
                {label}
                <ExternalLink aria-hidden="true" />
              </a>
              {description ? ` - ${description}` : null}
            </li>
          ))}
        </ul>
      </section>

      <footer className="home-footer">{content.footer}</footer>
    </main>
  );
}
