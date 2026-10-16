"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Home, MapPinned, Snowflake } from "lucide-react";

const nav = [
  { href: "/", label: "首页", icon: Home },
  { href: "/day-1", label: "Day 1", icon: CalendarDays },
  { href: "/day-2", label: "Day 2", icon: MapPinned },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-[#f2f0e8] text-[#18352f]">
      <header className="sticky top-0 z-50 border-b border-[#18352f]/10 bg-[#f7f5ee]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="回到首页">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#18352f] text-[#f6c85f] shadow-sm"><Snowflake size={17} strokeWidth={1.8} /></span>
            <span><span className="block font-serif text-[17px] font-semibold leading-none tracking-tight">HOKKAIDO</span><span className="mt-1 block text-[9px] font-bold tracking-[0.24em] text-[#be5f3a]">OUR AUTUMN JOURNEY</span></span>
          </Link>
          <nav className="hidden items-center gap-1 rounded-full bg-white/70 p-1 shadow-sm ring-1 ring-[#18352f]/8 sm:flex">
            {nav.map((item) => <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2 text-xs font-bold transition ${pathname === item.href ? "bg-[#18352f] text-white" : "text-[#48635d] hover:bg-white"}`}>{item.label}</Link>)}
          </nav>
          <div className="rounded-full border border-[#18352f]/12 bg-white/60 px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-[#557069]">PRIVATE · 6</div>
        </div>
      </header>
      {children}
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[#18352f]/10 bg-[#f7f5ee]/95 px-5 pb-[max(10px,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl sm:hidden">
        <div className="mx-auto grid max-w-sm grid-cols-3">{nav.map((item) => { const Icon = item.icon; const active = pathname === item.href; return <Link key={item.href} href={item.href} className={`flex flex-col items-center gap-1 rounded-xl py-1.5 text-[10px] font-bold ${active ? "text-[#be5f3a]" : "text-[#78908a]"}`}><Icon size={19} strokeWidth={active ? 2.4 : 1.8} />{item.label}</Link>; })}</div>
      </nav>
      <footer className="border-t border-[#18352f]/10 bg-[#18352f] px-5 pb-24 pt-10 text-white sm:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="font-serif text-2xl">Hokkaido · Day 1–2</p><p className="mt-2 max-w-xl text-sm leading-6 text-white/60">这是一版私人旅行原型。所有攻略事实仅整理自你提供的 9 张截图。</p></div><p className="text-[10px] font-bold tracking-[0.2em] text-white/45">20–21 OCT 2026 · JOZANKEI</p></div>
      </footer>
    </div>
  );
}

