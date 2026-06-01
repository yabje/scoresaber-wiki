import type { ReactNode } from "react";
import { Geist as FontSans } from "next/font/google";
import { Provider } from "@/components/provider";
import { defaultLocale, supportedLocales } from "@/lib/i18n";
import "./global.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const documentLanguageScript = `(() => {
  const locale = location.pathname.split("/").filter(Boolean)[0];
  document.documentElement.lang = ${JSON.stringify([...supportedLocales])}.includes(locale)
    ? locale
    : ${JSON.stringify(defaultLocale)};
})();`;

export const metadata = {
  title: {
    default: "ScoreSaber Wiki",
    template: "%s | ScoreSaber Wiki",
  },
  description: "ScoreSaber Wiki documentation and ranking resources.",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport = {
  themeColor: "#FDD85E",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={fontSans.variable}>
        <script dangerouslySetInnerHTML={{ __html: documentLanguageScript }} />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
