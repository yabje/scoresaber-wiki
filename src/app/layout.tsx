import type { ReactNode } from "react";
import { Geist as FontSans } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
