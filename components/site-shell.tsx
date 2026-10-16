"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenText, CalendarRange, ClipboardCheck, Route, Snowflake } from "lucide-react";
import { BackToTop } from "@/components/back-to-top";
import { DayPreferences } from "@/components/day-preferences";
import { Bilingual } from "@/components/bilingual";
import { EnglishSitePage } from "@/components/english-site-page";

const nav = [
  { href: "/itinerary", label: "Itinerary", icon: Route },
  { href: "/summary", label: "Summary", icon: BookOpenText },
  { href: "/timetable", label: "Timetable", icon: CalendarRange },
  { href: "/book-check", label: "Book / Check", icon: ClipboardCheck },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDayPage = pathname.startsWith("/day-");
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`) || (href === "/itinerary" && pathname.startsWith("/day-"));

  return (
    <div className="site-shell min-h-screen bg-[#f2f0e8] text-[#18352f]">
      <header className="site-header sticky top-0 z-50 border-b border-[#18352f]/10 bg-[#f7f5ee]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="回到首页">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#18352f] text-[#f6c85f] shadow-sm"><Snowflake size={17} strokeWidth={1.8} /></span>
            <span><span className="block font-serif text-[17px] font-semibold leading-none tracking-tight">HOKKAIDO</span><span className="mt-1 block text-[9px] font-bold tracking-[0.24em] text-[#be5f3a]">OUR AUTUMN JOURNEY</span></span>
          </Link>
          <nav className="hidden items-center gap-1 rounded-full bg-white/70 p-1 shadow-sm ring-1 ring-[#18352f]/8 lg:flex">
            {nav.map((item) => <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2 text-xs font-bold transition ${isActive(item.href) ? "bg-[#18352f] text-white" : "text-[#48635d] hover:bg-white"}`}>{item.label}</Link>)}
          </nav>
          <DayPreferences />
        </div>
      </header>
      {isDayPage ? children : <><div className="site-language-zh">{children}</div><div className="site-language-en"><EnglishSitePage pathname={pathname} /></div></>}
      <nav className="site-mobile-nav fixed inset-x-0 bottom-0 z-50 border-t border-[#18352f]/10 bg-[#f7f5ee]/95 px-2 pb-[max(9px,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl lg:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-4">{nav.map((item) => { const Icon = item.icon; const active = isActive(item.href); return <Link key={item.href} href={item.href} className={`flex min-w-0 flex-col items-center gap-1 rounded-xl py-1.5 text-[9px] font-bold ${active ? "text-[#be5f3a]" : "text-[#78908a]"}`}><Icon size={18} strokeWidth={active ? 2.4 : 1.8} /><span className="max-w-full truncate">{item.label}</span></Link>; })}</div>
      </nav>
      <BackToTop />
      <footer className="site-footer border-t border-[#18352f]/10 bg-[#18352f] px-5 pb-24 pt-10 text-white lg:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="font-serif text-2xl">Hokkaido · Autumn 2026</p><p className="mt-2 max-w-xl text-sm leading-6 text-white/60"><Bilingual zh="私人旅行手册 · 行程内容依据你提供的截图整理。" en="Private travel guide · Built only from your supplied itinerary screenshots." /></p></div><p className="text-[10px] font-bold tracking-[0.2em] text-white/45">20 OCT — 2 NOV · 14 DAYS / 13 NIGHTS</p></div>
      </footer>
    </div>
  );
}
