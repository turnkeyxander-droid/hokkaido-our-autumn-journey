import Link from "next/link";
import { ArrowRight, CalendarDays, LockKeyhole } from "lucide-react";

const days = Array.from({ length: 15 }, (_, index) => {
  const day = index + 1;
  if (day === 1) return { day, date: "20 OCT", title: "Airport → Jozankei", href: "/day-1" };
  if (day === 2) return { day, date: "21 OCT", title: "Jozankei Autumn", href: "/day-2" };
  return { day, date: "待补充", title: "行程内容稍后加入", href: null };
});

export default function ItineraryPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#18352f] px-5 py-14 text-white sm:px-6 sm:py-20">
        <div className="mountain-lines absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#f6c85f]">DAY BY DAY</p>
          <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">Itinerary</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">选择一天进入当天页面。现有截图只提供 Day 1–2 的完整攻略，其余日期先保留入口，不补写内容。</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {days.map((item) => item.href ? (
            <Link key={item.day} href={item.href} className="group flex min-h-[175px] flex-col justify-between rounded-[24px] bg-[#d97b52] p-5 text-white shadow-[0_14px_40px_rgba(98,50,33,.13)] transition hover:-translate-y-1">
              <div className="flex items-start justify-between"><CalendarDays size={18} className="text-[#ffdc8a]" /><ArrowRight size={15} className="opacity-60 transition group-hover:translate-x-1" /></div>
              <div><p className="font-serif text-5xl leading-none">{String(item.day).padStart(2, "0")}</p><p className="mt-3 text-[9px] font-bold tracking-[0.18em] text-white/55">{item.date}</p><p className="mt-2 text-xs font-semibold leading-5">{item.title}</p></div>
            </Link>
          ) : (
            <div key={item.day} className="flex min-h-[175px] flex-col justify-between rounded-[24px] border border-[#18352f]/8 bg-white/55 p-5 text-[#78908a]">
              <LockKeyhole size={16} className="opacity-45" />
              <div><p className="font-serif text-5xl leading-none text-[#18352f]/30">{String(item.day).padStart(2, "0")}</p><p className="mt-3 text-[9px] font-bold tracking-[0.18em] opacity-55">{item.date}</p><p className="mt-2 text-xs leading-5">{item.title}</p></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
