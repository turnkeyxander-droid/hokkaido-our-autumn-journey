import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "北海道 Day 1–2｜私人旅行手册",
  description: "北海道 15 天旅程的 Day 1–2 手机优先旅行手册。",
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
