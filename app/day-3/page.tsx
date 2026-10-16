import { DayHero } from "@/components/day-hero";
import { MapCard } from "@/components/map-card";
import { Timeline } from "@/components/timeline";
import { day3Route, day3SupplyList, day3Timeline } from "@/lib/itinerary";
import { AlertTriangle, BedDouble, CheckCircle2, CircleSlash2, Droplets, Footprints, House, MapPin, MoonStar, ShoppingBasket, Sparkles, Store, Trees, Utensils, Wine } from "lucide-react";

const bookingRows = [
  ["Nakayama Pass", "免费／不用"],
  ["Fukidashi Park", "免费／不用"],
  ["Kyogoku／Makkari", "不用"],
  ["道之驿", "不用"],
  ["Hirafu evening walk", "不用"],
  ["晚餐", "暂不预约；10 月初再确认营业状况"],
  ["Chalet", "已订"],
];

export default function Day3Page() {
  return <main>
    <DayHero
      day="03"
      date="THU · 22 OCT 2026"
      title="Jozankei → Nakayama Pass → Kyogoku → Makkari → Niseko"
      kicker="羊蹄山、北海道农村、涌水森林、小镇与 Road Trip。白天内容完整，晚上只做有意义的选择。"
      location="JOZANKEI → NISEKO"
      previousHref="/day-2"
      nextHref="/itinerary"
      nextLabel="行程列表"
    />

    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
      <section className="grid gap-5 md:grid-cols-[1.35fr_.65fr]">
        <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-[#18352f]/8 sm:p-8">
          <div className="flex items-center justify-between gap-4"><div><p className="eyebrow">DAY PLAN</p><h2 className="mt-2 font-serif text-3xl">Day 3 时间表</h2></div><span className="rounded-full bg-[#e2eadf] px-3 py-2 text-[10px] font-bold text-[#315d4f]">ROAD TRIP</span></div>
          <Timeline items={day3Timeline} />
        </div>
        <div className="space-y-5">
          <div className="rounded-[28px] bg-[#d97b52] p-6 text-white"><BedDouble size={22} className="text-[#ffdc8a]" /><p className="mt-6 text-[10px] font-bold tracking-[0.22em] text-white/55">TODAY&apos;S STAY</p><h3 className="mt-2 font-serif text-2xl">Taki – Annupuri Riverside Chalet</h3><p className="mt-2 text-sm text-white/75">495-3 Soga, Niseko</p><div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/20 pt-5 text-xs"><div><p className="text-white/50">Check-in</p><p className="mt-1 font-bold">15:00–18:00</p></div><div><p className="text-white/50">Check-out</p><p className="mt-1 font-bold">24 Oct · 10:00</p></div></div><p className="mt-5 rounded-2xl bg-white/10 p-4 text-xs leading-5 text-white/75">硬限制是 18:00 前完成 check-in；目标 16:15–16:45 抵达，放好行李后白天任务就结束。</p></div>
          <div className="rounded-[28px] bg-[#18352f] p-6 text-white"><Sparkles size={21} className="text-[#f6c85f]" /><h3 className="mt-5 font-serif text-xl">今天不是大量景点日</h3><p className="mt-3 text-sm leading-6 text-white/65">定位是「羊蹄山＋北海道农村＋涌水森林＋小镇＋Road Trip」。行程约 70–80% 满，留一点时间看田、农舍和羊蹄山角度。</p></div>
        </div>
      </section>

      <section className="mt-16 grid gap-5 lg:grid-cols-2">
        <article className="rounded-[28px] bg-white p-6 ring-1 ring-[#18352f]/8 sm:p-8">
          <div className="flex items-start justify-between gap-4"><div><p className="eyebrow">10:35 · STOP 01</p><h2 className="mt-3 font-serif text-3xl">Nakayama Pass<br />中山峠</h2></div><span className="text-lg text-[#d8a932]">★★★★½</span></div>
          <p className="mt-5 text-sm font-bold text-[#315d4f]">第一站：Michi-no-Eki Bōyō Nakayama</p>
          <p className="mt-3 text-sm leading-7 text-[#657a74]">道之驿、停车、上厕所、看看土产；如果天气够清，这是今天第一次正式看 Mt. Yotei 羊蹄山。顺便吃一份中山峠代表小吃 Age-imo。</p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-xs"><div className="rounded-2xl bg-[#e7e8dd] p-4"><p className="text-[#78908a]">停留</p><p className="mt-1 font-bold">约 30–40 分钟</p></div><div className="rounded-2xl bg-[#e2eadf] p-4"><p className="text-[#78908a]">门票／停车</p><p className="mt-1 font-bold">免费／不需预约</p></div></div>
        </article>

        <article className="rounded-[28px] bg-[#e7e8dd] p-6 sm:p-8">
          <p className="eyebrow">11:15 · STOP 02</p><h2 className="mt-3 font-serif text-3xl">Kimobetsu<br />喜茂别 countryside</h2>
          <p className="mt-5 text-sm font-bold text-[#315d4f]">不设“景点”的北海道 countryside。</p>
          <p className="mt-3 text-sm leading-7 text-[#657a74]">从中山峠下来后，山谷、小镇、农田、农舍、羊蹄山与秋天树林会慢慢打开。看到漂亮景色时，找安全合法位置停 10 分钟；不需要为了“网红羊蹄山拍照点”硬拐路。</p>
          <blockquote className="mt-5 border-l-2 border-[#be5f3a] pl-4 font-serif text-lg text-[#48635d]">「就这样很漂亮，停一下。」</blockquote>
        </article>
      </section>

      <section className="mt-16 overflow-hidden rounded-[30px] bg-[#18352f] text-white">
        <div className="grid gap-0 lg:grid-cols-[.82fr_1.18fr]">
          <div className="p-6 sm:p-9"><Droplets size={24} className="text-[#8cc8cf]" /><p className="mt-6 text-[10px] font-bold tracking-[0.22em] text-[#f6c85f]">12:10 · MUST GO 03</p><h2 className="mt-3 font-serif text-4xl">Fukidashi Park<br />吹出公园</h2><p className="mt-3 text-sm text-[#f6c85f]">★★★★★ · DAY 3 MUST GO</p></div>
          <div className="border-t border-white/10 p-6 sm:p-9 lg:border-l lg:border-t-0"><p className="font-serif text-2xl leading-snug">巨大的羊蹄山地下水，在森林里冒出来。</p><p className="mt-5 text-sm leading-7 text-white/65">来到 Kyogoku 京极后，这里是今天真正的大停留。不是 Hoheikyo 那种巨大山谷＋水库，而是森林、木桥、泉水、苔藓和秋叶。可以自己带空水瓶装水。</p><div className="mt-7 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-white/8 p-4"><p className="text-xs text-white/45">建议停留</p><p className="mt-2 font-serif text-xl">约 1 小时～1 小时 15 分钟</p></div><div className="rounded-2xl bg-white/8 p-4"><p className="text-xs text-white/45">门票／预约</p><p className="mt-2 font-serif text-xl">免费／不需预约</p></div></div><p className="mt-5 text-xs leading-6 text-white/50">旁边有 Michi-no-Eki Meisui-no-Sato Kyogoku；如有 local snacks、coffee 或农产品，可以顺便看看。</p></div>
        </div>
      </section>

      <section className="mt-16 grid gap-5 lg:grid-cols-2">
        <article className="rounded-[28px] bg-[#f0d7c7] p-6 sm:p-8"><Utensils size={22} className="text-[#b75a37]" /><p className="mt-5 eyebrow">13:30 · LUNCH</p><h2 className="mt-3 font-serif text-3xl">Kyogoku 京极／Makkari 真狩</h2><p className="mt-4 text-sm leading-7 text-[#6f625b]">这餐不锁指定名店。看到荞麦面、乌冬、定食、小洋食店或道之驿料理，有感觉就吃；今天不值得为了某间餐厅绕去 Kutchan 再回来。如果中山峠已经吃过不少 Age-imo，午餐也可以后移 20–30 分钟。</p></article>
        <article className="rounded-[28px] bg-white p-6 ring-1 ring-[#18352f]/8 sm:p-8"><Trees size={22} className="text-[#315d4f]" /><p className="mt-5 eyebrow">14:40 · STOP 05</p><h2 className="mt-3 font-serif text-3xl">Makkari 真狩</h2><p className="mt-4 text-sm leading-7 text-[#657a74]">真狩不是“下车拍完就走”的景点，而是慢慢经过一个羊蹄山脚下的北海道农村。可停 Michi-no-Eki Makkari Flower Center，也可以在羊蹄山＋农田角度漂亮时找安全位置短停。</p><div className="mt-5 rounded-2xl bg-[#e2eadf] p-4 text-xs leading-6 text-[#48635d]">约 30–45 分钟。天气好、羊蹄山完整露出时多给时间；若整座山被云吃掉，就缩短后提早往 Niseko。</div></article>
      </section>

      <section className="mt-16 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
        <div className="rounded-[30px] bg-[#e9e5da] p-6 sm:p-8"><ShoppingBasket size={22} className="text-[#be5f3a]" /><p className="mt-5 eyebrow">15:30 · SUPPLY STOP</p><h2 className="mt-3 font-serif text-3xl">Niseko Town 补给</h2><p className="mt-4 text-sm leading-7 text-[#657a74]">今天便利店升级成「Chalet 採购」。接下来住两晚，先买够水、早餐与简单食物，避免每次都从 Annupuri 再开车出来。</p><div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">{day3SupplyList.map((item) => <div key={item} className="flex items-center gap-2 rounded-xl bg-white/75 p-3 text-xs font-semibold"><CheckCircle2 size={14} className="shrink-0 text-[#be5f3a]" />{item}</div>)}</div><p className="mt-5 text-xs leading-6 text-[#657a74]">如果想逛 Niseko Town 的小型食品店，看到合适的就先去；目前部分当地食品／杂货店约 18:00–19:00 便关闭，使用便利店最稳。</p></div>
        <div className="rounded-[30px] bg-[#d97b52] p-6 text-white sm:p-8"><House size={22} className="text-[#ffdc8a]" /><p className="mt-5 text-[10px] font-bold tracking-[0.2em] text-white/55">16:15–16:45</p><h2 className="mt-3 font-serif text-3xl">Chalet Check-in</h2><p className="mt-4 text-sm leading-7 text-white/75">停车、找入口、搬六个人行李、看房间、熟悉厨房与附近。全部慢慢来。</p><div className="mt-6 border-t border-white/20 pt-5"><p className="font-bold">16:45–17:30</p><p className="mt-2 text-sm text-white/65">休息一下。然后今晚开始有两个版本。</p></div></div>
      </section>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-5"><div><p className="eyebrow">DAY 3 NIGHT</p><h2 className="mt-3 font-serif text-4xl">Check-in 不是行程结束。</h2></div><MoonStar className="hidden text-[#be5f3a] sm:block" size={28} /></div>
        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[28px] bg-[#18352f] p-6 text-white sm:p-8"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8"><House size={19} className="text-[#f6c85f]" /></div><p className="mt-6 text-[10px] font-bold tracking-[0.2em] text-[#f6c85f]">OPTION A</p><h3 className="mt-2 font-serif text-3xl">Chalet Night</h3><p className="mt-4 text-sm leading-7 text-white/65">如果大家已经累了，这是很有北海道度假感的选项：简单煮饭或买熟食，喝 Sapporo Classic，聊天、想吃宵夜再去便利店，然后早睡。六个人一起住整栋 chalet，不需要每一晚都往外跑。</p><p className="mt-6 border-l-2 border-[#f6c85f] pl-4 text-sm font-semibold text-white/85">这是晚上本身就是旅行。</p></article>
          <article className="rounded-[28px] bg-[#e2eadf] p-6 sm:p-8"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-white"><Footprints size={19} className="text-[#315d4f]" /></div><p className="mt-6 text-[10px] font-bold tracking-[0.2em] text-[#be5f3a]">OPTION B</p><h3 className="mt-2 font-serif text-3xl">Hirafu Evening</h3><p className="mt-4 text-sm leading-7 text-[#48635d]">如果还有精神，约 17:30–18:00 再出发。Hirafu 不是“滑雪季的繁华背景”：你们抵达时是 Niseko off-season，很多 ski-season 店铺可能没开。</p><p className="mt-5 border-l-2 border-[#315d4f] pl-4 text-sm font-semibold text-[#315d4f]">看有没有 Niseko resort town 的感觉 → 吃晚餐 → 街上散步 → 喝东西。</p></article>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-[24px] bg-white p-5 ring-1 ring-[#18352f]/8"><Utensils size={19} className="text-[#be5f3a]" /><p className="mt-4 text-[10px] font-bold tracking-[0.16em] text-[#78908a]">18:00–19:30</p><h3 className="mt-2 font-serif text-xl">Hirafu Dinner</h3><p className="mt-3 text-xs leading-6 text-[#657a74]">晚餐可在 Hirafu 解决。10 月是换季期，10 月初重新查一次营业状态；若热门餐厅或座位少，建议提前预约。</p></div>
          <div className="rounded-[24px] bg-white p-5 ring-1 ring-[#18352f]/8"><Footprints size={19} className="text-[#be5f3a]" /><p className="mt-4 text-[10px] font-bold tracking-[0.16em] text-[#78908a]">19:30–20:30</p><h3 className="mt-2 font-serif text-xl">Hirafu 夜间散步</h3><p className="mt-3 text-xs leading-6 text-[#657a74]">沿 Hirafu Village 慢慢走，看小街、酒店、bar／café、resort buildings 与便利店。10 月底不用安排成“景点”。</p></div>
          <div className="rounded-[24px] bg-white p-5 ring-1 ring-[#18352f]/8"><Store size={19} className="text-[#be5f3a]" /><p className="mt-4 text-[10px] font-bold tracking-[0.16em] text-[#78908a]">20:30</p><h3 className="mt-2 font-serif text-xl">回 Chalet 前最后补给</h3><p className="mt-3 text-xs leading-6 text-[#657a74]">人在 Hirafu 可去 Seicomart Niseko Hirafu（截图资料：06:30–23:00）；已回 chalet 周边则用 7-Eleven Niseko（24 小时）。约 21:00–21:30 回 Chalet，Day 3 结束。</p></div>
        </div>
      </section>

      <section className="mt-16 rounded-[30px] bg-white p-6 ring-1 ring-[#18352f]/8 sm:p-8"><div className="flex items-end justify-between gap-4"><div><p className="eyebrow">TICKETS & RESERVATIONS</p><h2 className="mt-3 font-serif text-3xl">门票与预约总表</h2></div><Wine className="hidden text-[#be5f3a] sm:block" /></div><div className="mt-7 divide-y divide-[#18352f]/8 border-y border-[#18352f]/8">{bookingRows.map(([item, status], index) => <div key={item} className="grid grid-cols-[1fr_auto] gap-4 py-4 text-sm"><p className="font-semibold text-[#334f48]">{item}</p><p className={`text-right text-xs font-bold ${index === bookingRows.length - 1 ? "text-[#2f7456]" : index === 5 ? "text-[#806313]" : "text-[#55a47d]"}`}>{status}</p></div>)}</div><p className="mt-5 text-sm font-semibold text-[#48635d]">今天没有需要现在提前购买的票。</p></section>

      <section className="mt-16"><p className="eyebrow">PLAN B · WEATHER & ENERGY</p><h2 className="mt-3 font-serif text-3xl">今天刻意没排进去的地方</h2><div className="mt-7 grid gap-4 md:grid-cols-2">
        <div className="rounded-[26px] bg-[#f0d7c7] p-6"><div className="flex items-center justify-between"><h3 className="font-serif text-xl">Kyogoku Onsen 京极温泉</h3><span>★★★</span></div><p className="mt-3 text-sm leading-6 text-[#6f625b]">若下午突然很累：Fukidashi Park → Kyogoku Onsen。舒服但不特别；后面还有 Toya 与 Noboribetsu，不要把这天变成温泉联跑。</p></div>
        <div className="rounded-[26px] bg-[#e2eadf] p-6"><div className="flex items-center justify-between"><h3 className="font-serif text-xl">Niseko View Plaza</h3><span>★★½</span></div><p className="mt-3 text-sm leading-6 text-[#48635d]">下雨或太早抵达时，可看农产品、local food、土产。不要让今天变成北海道道之驿 Stamp Rally。</p></div>
        <div className="rounded-[26px] bg-white p-6 ring-1 ring-[#18352f]/8"><div className="flex items-center justify-between"><h3 className="font-serif text-xl">Kutchan 倶知安</h3><span>★★★</span></div><p className="mt-3 text-sm leading-6 text-[#657a74]">不是观光点，而是 Niseko 一带最像真正 town 的地方，给 Day 4 补给。截图资料：MaxValu Kutchan Shop 23:00、Lucky Supermarket Kutchan Shop 21:00。</p></div>
        <div className="rounded-[26px] bg-white p-6 ring-1 ring-[#18352f]/8"><div className="flex items-center justify-between"><h3 className="font-serif text-xl">Hangetsu Lake 半月湖</h3><span>★★½</span></div><p className="mt-3 text-sm leading-6 text-[#657a74]">今天已有 Fukidashi Park 森林散步，不要重复；留给 Day 4 的天气／道路 Plan B。</p></div>
        <div className="rounded-[26px] bg-[#18352f] p-6 text-white md:col-span-2"><div className="flex gap-3"><CircleSlash2 className="shrink-0 text-[#f2b276]" /><div><h3 className="font-serif text-xl">Otaru／Yoichi</h3><p className="mt-3 text-sm leading-6 text-white/65">依然不去。小樽已有独立 JR day trip；不为了多塞地点破坏羊蹄山南侧路线。</p></div></div></div>
      </div></section>

      <section className="mt-16 rounded-[30px] bg-[#e7e8dd] p-6 sm:p-8"><MapPin size={22} className="text-[#be5f3a]" /><p className="mt-5 eyebrow">DAY 3 · ONE-GLANCE ROUTE</p><h2 className="mt-3 font-serif text-3xl">10:00 出发，约 21:00 回 Chalet。</h2><div className="mt-7 flex flex-wrap items-center gap-2 text-xs font-bold text-[#48635d]">{["Jozankei", "Nakayama Pass＋Age-imo", "Kimobetsu countryside", "Fukidashi Park", "Kyogoku 午餐", "Makkari", "Niseko 补给", "16:30 Chalet Check-in", "休息", "Chalet Night／Hirafu Evening"].map((stop, index, all) => <span key={stop} className="contents"><span className="rounded-full bg-white px-3 py-2 ring-1 ring-[#18352f]/8">{stop}</span>{index < all.length - 1 && <span className="text-[#be5f3a]">→</span>}</span>)}</div></section>

      <section className="mt-16 rounded-[28px] border border-[#d3a873] bg-[#fff7e8] p-6"><div className="flex gap-4"><AlertTriangle className="shrink-0 text-[#b75a37]" size={22} /><div><h3 className="font-serif text-xl">这天最大的弹性</h3><p className="mt-2 text-sm leading-6 text-[#6f625b]">先看天气，再决定哪里多停。如果羊蹄山在中山峠已经完整出现，可多留 10–15 分钟；若全程被云盖，就把时间留给 Fukidashi Park、补给与提早入住。晚餐和 Hirafu 商店需在 10 月初重新确认 off-season 营业状态。</p></div></div></section>

      <div className="mt-14"><MapCard title="Jozankei → Niseko" subtitle="经 Nakayama Pass、Fukidashi Park、Makkari 与 Niseko Town 前往 Chalet。导航仅使用截图中的地点名称。" {...day3Route} /></div>
    </div>
  </main>;
}
