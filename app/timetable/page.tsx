import { CalendarClock, ExternalLink, Info, MapPinned } from "lucide-react";
import { timetableDays } from "@/lib/timetable";

function googleMapsSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default function TimetablePage() {
  return <main>
    <section className="relative overflow-hidden bg-[#18352f] px-5 py-14 text-white sm:px-6 sm:py-20">
      <div className="absolute inset-0 opacity-45 [background:radial-gradient(circle_at_82%_12%,#d07549_0,transparent_28%),radial-gradient(circle_at_18%_90%,#547c69_0,transparent_36%)]" />
      <div className="mountain-lines absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-5xl">
        <p className="text-[10px] font-bold tracking-[0.25em] text-[#f6c85f]">JP · HOKKAIDO AUTUMN 2026</p>
        <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">Master Timetable</h1>
        <p className="mt-5 text-lg font-semibold sm:text-2xl">20 Oct – 2 Nov <span className="text-white/35">|</span> Day 1–14</p>
        <div className="mt-8 max-w-3xl rounded-[24px] border border-white/12 bg-white/8 p-5 text-sm leading-7 text-white/70 backdrop-blur-sm sm:p-6">
          <p>这不是攻略、也不是景点介绍，而是在旅途中打开就能照着走的 timetable。</p>
          <p className="mt-3">保留少量弹性，不把六个人的旅行排到每15分钟一格。景点与餐厅名称可以点开 Google Maps；餐厅只在真的适合当天路线时指定。</p>
        </div>
      </div>
    </section>

    <div className="sticky top-16 z-40 border-b border-[#18352f]/10 bg-[#e7e8dd]/95 px-5 py-3 backdrop-blur-xl sm:px-6">
      <nav aria-label="跳到指定日期" className="mx-auto flex max-w-5xl gap-2 overflow-x-auto pb-1 whitespace-nowrap">
        {timetableDays.map(({ day }) => <a key={day} href={`#day-${day}`} className="grid h-9 min-w-9 place-items-center rounded-full bg-white px-3 text-[10px] font-bold text-[#48635d] ring-1 ring-[#18352f]/8">D{day}</a>)}
      </nav>
    </div>

    <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
      <div className="space-y-8 sm:space-y-10">
        {timetableDays.map((day) => <section key={day.day} id={`day-${day.day}`} className="scroll-mt-36 overflow-hidden rounded-[28px] bg-white shadow-[0_16px_50px_rgba(24,53,47,.07)] ring-1 ring-[#18352f]/8">
          <header className="relative overflow-hidden bg-[#18352f] px-5 py-6 text-white sm:px-7 sm:py-7">
            <div className="absolute -right-8 -top-12 font-serif text-[120px] leading-none text-white/[.035]">{String(day.day).padStart(2,"0")}</div>
            <div className="relative flex items-start gap-4">
              <span className="font-serif text-5xl leading-none text-[#f2b276] sm:text-6xl">{String(day.day).padStart(2,"0")}</span>
              <div className="min-w-0 border-l border-white/15 pl-4"><p className="text-[10px] font-bold tracking-[0.18em] text-[#f6c85f]">DAY {day.day} · {day.date}</p><h2 className="mt-2 text-base font-semibold leading-6 sm:text-xl">{day.title}</h2></div>
            </div>
          </header>

          <div className="px-4 py-3 sm:px-6 sm:py-5">
            <table className="w-full table-fixed border-collapse text-left">
              <colgroup><col className="w-[92px] sm:w-[130px]" /><col /></colgroup>
              <thead><tr className="border-b border-[#18352f]/12"><th className="px-2 py-3 text-[9px] font-bold tracking-[0.18em] text-[#78908a]">时间</th><th className="px-2 py-3 text-[9px] font-bold tracking-[0.18em] text-[#78908a]">行程</th></tr></thead>
              <tbody>{day.items.map((item, index) => <tr key={`${item.time}-${index}`} className={`border-b border-[#18352f]/7 last:border-0 ${item.important ? "bg-[#fff1ee]" : ""}`}><td className={`px-2 py-3.5 align-top text-[11px] font-bold leading-5 sm:text-xs ${item.important ? "text-[#d94f65]" : "text-[#be5f3a]"}`}>{item.time}</td><td className="px-2 py-3.5 text-xs font-medium leading-6 text-[#334f48] sm:text-sm">{item.query ? <a href={googleMapsSearch(item.query)} target="_blank" rel="noreferrer" className="group inline border-b border-dotted border-[#557069]/45 transition hover:text-[#be5f3a]"><span>{item.activity}</span><ExternalLink size={10} className="ml-1.5 inline opacity-45 transition group-hover:opacity-100" /></a> : item.activity}</td></tr>)}</tbody>
            </table>
          </div>

          {day.note && <div className="mx-4 mb-5 flex gap-3 rounded-2xl bg-[#f1d5c4] p-4 text-xs font-semibold leading-6 text-[#6f5145] sm:mx-6 sm:mb-6 sm:p-5"><Info size={16} className="mt-1 shrink-0 text-[#b75a37]" /><p>{day.note}</p></div>}
        </section>)}
      </div>

      <section className="mt-12 rounded-[30px] bg-[#18352f] p-6 text-white sm:p-9">
        <CalendarClock className="text-[#f6c85f]" />
        <p className="mt-6 text-[10px] font-bold tracking-[0.22em] text-[#f6c85f]">HOW TO USE</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">这份 timetable 怎么用最方便</h2>
        <p className="mt-5 text-sm leading-7 text-white/70">这版刻意只留下三件事：</p>
        <p className="mt-2 text-lg font-semibold">时间 → 做什么 → 点哪里。</p>
        <div className="mt-7 space-y-5 border-t border-white/12 pt-6 text-sm leading-7 text-white/70">
          <p>表上的时间不是军令。除了 Check-out、Niseko／Mahoroba check-in、29日还车和2日航班之外，前后浮动30分钟完全没问题。</p>
          <p>特别是你们6个人一起旅行，像「09:30–11:30 北海道大学」的意思是：这两个小时留给北大，不是11:31大家必须冲出去。😅</p>
          <p>我没有为每一餐都指定餐厅。当天早餐会在路线附近找合适的店；定山溪也有实际营业时间吻合的选择，所以直接放进表里。其他像 Niseko、札幌、Otaru 晚餐，预算留下来比较好操作。</p>
        </div>
        <div className="mt-7 flex items-center gap-3 rounded-2xl bg-white/8 p-4 text-xs leading-6 text-white/65"><MapPinned size={17} className="shrink-0 text-[#f2b276]" /><p>地图按钮以截图里的地点名称进行 Google Maps 搜索；未补写坐标或官方网址。</p></div>
      </section>
    </div>
  </main>;
}
