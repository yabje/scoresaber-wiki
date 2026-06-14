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
  action: "초보자 가이드",
  resourceLabel: "위키 자료",
  resourceGroups: [
    {
      title: "시작하기",
      links: [
        ["규칙", "/ko/rules"],
        ["초보자 가이드", "/ko/beginners-guide"],
        ["랭킹 시스템", "/ko/ranking-system"],
        ["자주 묻는 질문", "/ko/faq"],
      ],
    },
    {
      title: "랭킹 자료",
      links: [
        ["내 맵 랭크하는 법", "/ko/ranking/how-to-rank-map"],
        ["랭킹 기준", "/ko/ranking/criteria"],
        ["랭킹 대기열 규칙", "/ko/ranking/ranking-queue-rules"],
        ["QAT 가이드라인", "/ko/ranking/qat-guidelines"],
        ["모딩 대기열 정보", "/ko/ranking/modding-queue-information"],
        ["ScoreSaber 팀 정보", "/ko/ranking/scoresaber-team-information"],
        ["차단 해제 시스템 및 약관", "/ko/ranking/ranking-unban-system-and-terms"],
        ["리웨이트", "/ko/ranking/reweights"],
      ],
    },
    {
      title: "기타 자료",
      links: [["소개", "/ko/about-us"]],
    },
  ],
  externalTitle: "외부 링크",
  externalLinks: [
    ["Discord", "https://discord.gg/scoresaber", "디스코드에 참여하세요"],
    ["Patreon", "https://patreon.com/scoresaber", "Patreon에서 후원하기"],
    ["X", "https://x.com/ScoreSaber", "X에서 팔로우하기"],
    ["YouTube", "https://www.youtube.com/@ScoreSaberOfficial", "YouTube 구독하기"],
    ["BSMG Wiki", "https://bsmg.wiki/", ""],
  ],
  footer: "Copyright (c) ScoreSaber 2026 | Licensed under CC BY-NC-SA 4.0",
};

export default function Page() {
  return (
    <main className="home-shell" lang="ko">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-logo">
          <Image src="/scoresaber.svg" width={96} height={96} alt="" priority />
        </div>
        <h1 id="home-title" className="home-title">
          <span className="brand-word">ScoreSaber Wiki</span>
        </h1>
        <div className="home-actions">
          <Link className="home-button" href="/ko/beginners-guide">
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
