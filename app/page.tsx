import Link from "next/link";
import { ArrowRight, BookOpenText, CalendarRange, ClipboardCheck, Route } from "lucide-react";

const sections = [
  {
    href: "/itinerary",
    label: "Itinerary",
    note: "Day 1–15",
    description: "每天各自一页，按日期查看完整行程。",
    icon: Route,
    tone: "bg-[#d97b52] text-white",
    accent: "text-[#ffdc8a]",
  },
  {
    href: "/summary",
    label: "Summary",
    note: "Trip overview",
    description: "住宿、路线、赏枫、Plan B 与整趟节奏。",
    icon: BookOpenText,
    tone: "bg-[#f1d5c4] text-[#18352f]",
    accent: "text-[#b75a37]",
  },
  {
    href: "/timetable",
    label: "Timetable",
    note: "Time at a glance",
    description: "集中查看每天需要留意的时间。",
    icon: CalendarRange,
    tone: "bg-[#dfe9df] text-[#18352f]",
    accent: "text-[#315d4f]",
  },
  {
    href: "/book-check",
    label: "Book / Check",
    note: "Before we go",
    description: "预约、确认与出发前检查事项。",
    icon: ClipboardCheck,
    tone: "bg-[#f3c85e] text-[#18352f]",
    accent: "text-[#8a4d2f]",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-[#18352f] text-white">
      <div className="absolute inset-0 opacity-55 [background:radial-gradient(circle_at_82%_16%,#d07549_0,transparent_27%),radial-gradient(circle_at_20%_88%,#547c69_0,transparent_36%)]" />
      <div className="mountain-lines absolute inset-0 opacity-35" />
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col px-5 py-8 sm:px-6 sm:py-12">
        <div className="flex items-center justify-between text-[9px] font-bold tracking-[0.2em] text-white/50 sm:text-[10px]">
          <span>PRIVATE TRAVEL FIELD GUIDE</span>
          <span>20 OCT — 2 NOV</span>
        </div>

        <div className="my-auto py-10">
          <p className="text-[10px] font-bold tracking-[0.28em] text-[#f6c85f]">HOKKAIDO · AUTUMN 2026</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">Our journey,<br /><em className="font-normal text-[#f2b276]">all in one place.</em></h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">选择要查看的部分。行程、总览、时间与预约检查各自独立，旅途中用手机也能快速找到。</p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4">
            {sections.map(({ href, label, note, description, icon: Icon, tone, accent }) => (
              <Link key={href} href={href} className={`group flex min-h-[178px] flex-col justify-between rounded-[24px] p-5 shadow-[0_18px_50px_rgba(0,0,0,.12)] transition hover:-translate-y-1 sm:min-h-[210px] sm:p-6 ${tone}`}>
                <div className="flex items-start justify-between gap-3">
                  <Icon size={23} className={accent} strokeWidth={1.8} />
                  <ArrowRight size={17} className="opacity-55 transition group-hover:translate-x-1" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-55">{note}</p>
                  <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">{label}</h2>
                  <p className="mt-2 hidden text-xs leading-5 opacity-65 sm:block">{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/12 pt-5 text-[9px] font-bold tracking-[0.18em] text-white/45">
          <span>14 DAYS · 13 NIGHTS</span>
          <span>SELF-DRIVE + JR</span>
        </div>
      </div>
    </main>
  );
}
