import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "北海道秋季自驾｜私人旅行手册",
  description: "北海道秋季自驾 14 天 13 夜的手机优先私人旅行手册。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body className="antialiased"><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
