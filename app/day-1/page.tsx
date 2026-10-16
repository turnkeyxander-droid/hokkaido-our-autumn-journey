import { DayHero } from "@/components/day-hero";
import { MapCard } from "@/components/map-card";
import { Timeline } from "@/components/timeline";
import { StayCard } from "@/components/stay-card";
import { Bilingual } from "@/components/bilingual";
import { convenienceList, day1Route, day1Timeline } from "@/lib/itinerary";
import { CheckCircle2, Coffee, Luggage, ShoppingBag } from "lucide-react";

export default function Day1Page() {
  return <main className="day-page">
    <DayHero day="01" date="TUE · 20 OCT 2026" title="New Chitose Airport 新千岁机场 → Jozankei 定山溪" titleEn="New Chitose Airport → Jozankei" kicker="抵达北海道 → 取车 → 定山溪 → 慢慢进入旅行状态。第一天不追景点。" kickerEn="Arrive in Hokkaido, pick up the car and ease into the trip in Jozankei. No attraction chasing today." previousHref="/" nextHref="/day-2" nextLabel="DAY 2" />
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
      <section className="grid gap-5 md:grid-cols-[1.35fr_.65fr]">
        <div className="order-2 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-[#18352f]/8 sm:p-8 md:order-1"><div className="flex items-center justify-between gap-4"><div><p className="eyebrow">DAY PLAN</p><h2 className="mt-2 font-serif text-3xl"><Bilingual zh="今天时间表" en="TODAY'S TIMELINE" /></h2><p className="mt-2 text-xs font-semibold text-[#78908a]"><Bilingual zh="每一个时间段都可以点开。" en="Tap any time block for full details." /></p></div><span className="rounded-full bg-[#f8eadf] px-3 py-2 text-[10px] font-bold text-[#b75a37]">ARRIVAL DAY</span></div><Timeline items={day1Timeline} /></div>
        <div className="order-1 space-y-5 md:order-2">
          <StayCard name="MolinHotels201" locationZh="Jozankei 定山溪" locationEn="Jozankei" checkIn="20 Oct · 15:00" checkOut="22 Oct · 10:00" />
          <div className="rounded-[28px] bg-[#18352f] p-6 text-white"><Luggage size={21} className="text-[#f6c85f]" /><h3 className="mt-5 font-serif text-xl"><Bilingual zh="今天最重要的缓冲" en="TODAY'S KEY BUFFER" /></h3><p className="mt-3 text-sm leading-6 text-white/65"><Bilingual zh="飞机、入境、行李、接驳、租车手续都有变量。13:00 取车，按 14:00 才正式离开租车公司来规划。" en="Flights, immigration, luggage, transfers and rental paperwork can all vary. Pick up the car at 13:00 and plan on leaving the rental office at 14:00." /></p></div>
        </div>
      </section>

      <div className="day-details-zh"><section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div><p className="eyebrow">16:15 · SLOW WALK</p><h2 className="mt-3 font-serif text-3xl">只沿温泉街慢慢走。</h2><p className="mt-4 text-sm leading-7 text-[#657a74]">入住后沿 Jozankei Onsen 定山溪温泉街散步：Tsukimi Bridge 月见桥、Jozankei Gensen Park 定山源泉公园、河边和小商店。</p><div className="mt-6 rounded-2xl border-l-4 border-[#d97b52] bg-white p-5 text-sm leading-6 text-[#48635d]">如果当天抵达得早、行李也轻，可以走到 Futami Park 二见公园看看；但不要去 Futami Suspension Bridge 二见吊桥，留给明天早上正式走。</div></div>
        <div className="grid gap-4 sm:grid-cols-2"><div className="rounded-[24px] bg-[#e2eadf] p-5"><Coffee size={20} className="text-[#315d4f]" /><h3 className="mt-4 font-serif text-xl">晚餐不指定名店</h3><p className="mt-2 text-xs leading-6 text-[#5b726b]">荞麦面／拉面／定食／居酒屋，抵达后看到合适的就吃。今晚不为某家餐厅再开 20 分钟车。</p></div><div className="rounded-[24px] bg-[#f2ddcf] p-5"><CheckCircle2 size={20} className="text-[#b75a37]" /><h3 className="mt-4 font-serif text-xl">门票／预约</h3><p className="mt-2 text-xs leading-6 text-[#6f625b]">全部免费，不需预约。温泉街、Gensen Park、Futami Park 都可自由走。</p></div></div>
      </section>

      <section className="mt-14 rounded-[30px] bg-[#e9e5da] p-6 sm:p-8"><div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]"><div><ShoppingBag size={22} className="text-[#be5f3a]" /><p className="mt-5 eyebrow">LAST STOP</p><h2 className="mt-3 font-serif text-3xl">便利店补给</h2><p className="mt-3 text-sm leading-6 text-[#657a74]">附近：LAWSON Jozankeionsen Higashi。截图原文写“目前资料显示 24 小时营业”，出发前再复核营业状态。</p></div><div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{convenienceList.map(item=><div key={item} className="flex items-center gap-2 rounded-xl bg-white/75 p-3 text-xs font-semibold"><CheckCircle2 size={14} className="shrink-0 text-[#be5f3a]" />{item}</div>)}</div></div></section></div>
      <div className="day-details-en"><section className="mt-14 grid gap-5 lg:grid-cols-2"><article className="rounded-[28px] bg-white p-6 ring-1 ring-[#18352f]/8"><p className="eyebrow">16:15 · SLOW WALK</p><h2 className="mt-3 font-serif text-3xl">Keep the first walk gentle.</h2><p className="mt-4 text-sm leading-7 text-[#657a74]">After check-in, walk around Jozankei Onsen: Tsukimi Bridge, Jozankei Gensen Park, the riverside and small shops. Futami Park is optional only if arrival is early; save Futami Suspension Bridge for Day 2.</p></article><article className="rounded-[28px] bg-[#e9e5da] p-6"><p className="eyebrow">DINNER & SUPPLIES</p><h2 className="mt-3 font-serif text-3xl">No fixed restaurant tonight.</h2><p className="mt-4 text-sm leading-7 text-[#657a74]">Choose soba, ramen, a set meal or an izakaya nearby. Afterwards, use LAWSON Jozankeionsen Higashi for two days of water, breakfast, snacks and car drinks. Recheck opening hours before departure.</p></article></section></div>
      <div className="mt-14"><MapCard title="Airport → Jozankei" subtitle="从 New Chitose Airport 新千岁机场出发，抵达 Jozankei 定山溪。导航按截图提供的地点名称开启。" subtitleEn="Drive from New Chitose Airport to Jozankei. Navigation uses only the place names in the source screenshots." {...day1Route} /></div>
    </div>
  </main>;
}
