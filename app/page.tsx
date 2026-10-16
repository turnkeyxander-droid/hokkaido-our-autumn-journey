import Link from "next/link";
import { ArrowRight, CalendarDays, CarFront, Check, Clock3, MapPinned } from "lucide-react";

export default function Home() {
  return <main>
    <section className="relative overflow-hidden bg-[#18352f] text-white">
      <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_78%_22%,#d07549_0,transparent_29%),radial-gradient(circle_at_25%_82%,#547c69_0,transparent_34%)]" />
      <div className="mountain-lines absolute inset-x-0 bottom-0 h-3/4 opacity-40" />
      <div className="relative mx-auto grid min-h-[660px] max-w-6xl content-between px-5 py-10 sm:min-h-[720px] sm:px-6 sm:py-16">
        <div className="flex items-center justify-between text-[10px] font-bold tracking-[0.2em] text-white/55"><span>PRIVATE TRAVEL FIELD GUIDE</span><span>01 / 15 DAYS</span></div>
        <div className="py-16"><p className="text-xs font-bold tracking-[0.28em] text-[#f6c85f]">HOKKAIDO · AUTUMN 2026</p><h1 className="mt-5 max-w-4xl font-serif text-[clamp(4rem,14vw,9rem)] font-semibold leading-[0.78] tracking-[-0.065em]">Slow into<br /><em className="font-normal text-[#f2b276]">Jozankei.</em></h1><p className="mt-9 max-w-xl text-sm leading-7 text-white/70 sm:text-base">抵达北海道，不急着打卡。先取车、入住，让定山溪的河声和红叶把旅程慢慢打开。</p></div>
        <div className="grid gap-3 sm:grid-cols-3">{[{ icon: CalendarDays, label: "DATES", value: "20–21 OCT 2026" }, { icon: CarFront, label: "TRAVEL MODE", value: "SELF-DRIVE · 6 PEOPLE" }, { icon: MapPinned, label: "BASE", value: "MolinHotels201 · Jozankei" }].map(({ icon: Icon, label, value }) => <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm"><Icon size={19} className="text-[#f6c85f]" /><div><p className="text-[9px] font-bold tracking-[0.2em] text-white/45">{label}</p><p className="mt-1 text-xs font-semibold">{value}</p></div></div>)}</div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16"><div><p className="eyebrow">THE FIRST 48 HOURS</p><h2 className="mt-4 font-serif text-4xl leading-tight text-[#18352f] sm:text-5xl">两天，一条很清楚的节奏。</h2><p className="mt-5 text-sm leading-7 text-[#657a74]">Day 1 只负责安顿；Day 2 把时间留给两个真正的 Must Go。临场需要的票务、Plan B 与补给各自归位。</p><div className="mt-8 flex flex-wrap gap-2 text-[11px] font-bold">{["手机优先", "每日地图", "导航按钮", "Plan B 清楚分开"].map((item) => <span key={item} className="flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-[#48635d] shadow-sm ring-1 ring-[#18352f]/8"><Check size={12} />{item}</span>)}</div></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/day-1" className="group relative min-h-[430px] overflow-hidden rounded-[28px] bg-[#d97b52] p-6 text-white shadow-[0_18px_60px_rgba(98,50,33,.16)] transition hover:-translate-y-1"><div className="absolute inset-x-0 bottom-0 h-1/2 opacity-50 [background:linear-gradient(160deg,transparent_15%,#7c3b2c_16%,#7c3b2c_38%,transparent_39%),linear-gradient(200deg,transparent_20%,#a95439_21%,#a95439_53%,transparent_54%)]" /><div className="relative flex h-full flex-col justify-between"><div><p className="text-[10px] font-bold tracking-[0.22em] text-white/60">TUE · 20 OCT</p><p className="mt-4 font-serif text-6xl font-semibold tracking-[-0.05em]">01</p><h3 className="mt-3 font-serif text-2xl">Airport → Jozankei</h3><p className="mt-3 text-sm leading-6 text-white/75">抵达、取车、入住、慢慢走。</p></div><span className="flex items-center gap-2 text-xs font-bold">查看 Day 1 <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span></div></Link>
          <Link href="/day-2" className="group relative min-h-[430px] overflow-hidden rounded-[28px] bg-[#2d6254] p-6 text-white shadow-[0_18px_60px_rgba(24,53,47,.16)] transition hover:-translate-y-1"><div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full border-[55px] border-[#f2b276]/20" /><div className="absolute bottom-24 right-8 h-32 w-32 rounded-full border-[28px] border-white/8" /><div className="relative flex h-full flex-col justify-between"><div><p className="text-[10px] font-bold tracking-[0.22em] text-[#f6c85f]">WED · 21 OCT</p><p className="mt-4 font-serif text-6xl font-semibold tracking-[-0.05em]">02</p><h3 className="mt-3 font-serif text-2xl">Jozankei Full Day</h3><p className="mt-3 text-sm leading-6 text-white/75">二见吊桥与丰平峡水库，两个 Must Go。</p></div><span className="flex items-center gap-2 text-xs font-bold">查看 Day 2 <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span></div></Link>
        </div>
      </div>
    </section>

    <section className="border-y border-[#18352f]/10 bg-[#e9e5da]"><div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3 sm:px-6">{[{ icon: Clock3, title: "不赶", text: "Day 1 没有景点任务；Day 2 也不硬塞第三个大景点。" }, { icon: MapPinned, title: "只走主线", text: "二见吊桥与丰平峡水库是 Day 2 两个真正的 Must Go。" }, { icon: CarFront, title: "以自驾为准", text: "巴士资料保留作参考，但主行程按自驾与停车场衔接。" }].map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-4"><Icon className="mt-1 shrink-0 text-[#be5f3a]" size={20} /><div><h3 className="font-serif text-xl">{title}</h3><p className="mt-2 text-sm leading-6 text-[#657a74]">{text}</p></div></div>)}</div></section>
  </main>;
}

