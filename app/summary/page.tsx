import { CalendarClock, CarFront, CheckCircle2, ChevronRight, Clock3, Coffee, Heart, Hotel, Leaf, Moon, Pin, ShoppingBag, Sparkles, UtensilsCrossed } from "lucide-react";

const stays = [
  ["20–22 Oct", "Jozankei 定山溪", "MolinHotels201", "2"],
  ["22–24 Oct", "Niseko 二世谷", "Taki – Annupuri Riverside Chalet", "2"],
  ["24–25 Oct", "Lake Toya 洞爷湖", "Yotorelo Toyako", "1"],
  ["25–28 Oct", "Hakodate 函馆", "Airbnb", "3"],
  ["28–29 Oct", "Noboribetsu 登别", "Hotel Mahoroba", "1"],
  ["29 Oct–2 Nov", "Sapporo 札幌", "Airbnb", "4"],
];

const days = [
  ["1", "20 Oct Tue", "✈️ CTS → Jozankei", "13:00取车 → 定山溪 → Check-in → Jozankei Onsen", "温泉街／酒店附近散步"],
  ["2", "21 Oct Wed", "🌸 Jozankei Autumn", "Hoheikyo Dam → 定山溪红叶 → Futami Park / Suspension Bridge", "温泉＋轻松晚餐"],
  ["3", "22 Oct Thu", "Jozankei → Niseko", "Check-out → 山區景觀路线 → Niseko / Annupuri → Chalet", "Niseko晚餐＋周边小镇"],
  ["4", "23 Oct Fri", "⛰️ Niseko Full Day", "Shinsen-numa → Panorama Line → Niseko countryside → Milk Kobo等", "Hirafu / Niseko 晚餐＋散步"],
  ["5", "24 Oct Sat", "Niseko → Lake Toya", "Niseko最后半天 → Lake Toya → 湖畔／火山景观 → Check-in", "Toyako Onsen湖畔夜散步"],
  ["6", "25 Oct Sun", "Toya → Hakodate", "Toya周边 → 南下 → Hakodate Bay / Motomachi", "🌃 Mt. Hakodate 夜景候选①"],
  ["7", "26 Oct Mon", "🌸 Hakodate City", "Morning Market → Goryokaku → Kosetsuen", "🌸 香雪园夜枫＋函馆夜生活"],
  ["8", "27 Oct Tue", "🍂 Onuma Day", "Onuma Quasi-National Park → Onuma Dango → 回函馆 → Kanemori / Bay Area", "函馆最后晚餐＋Mt Hakodate补考"],
  ["9", "28 Oct Wed", "Hakodate → Noboribetsu", "高速北上 → Jigokudani → Oyunuma → Natural Footpath", "Mahoroba＋温泉街＋Onibi-no-Michi"],
  ["10", "29 Oct Thu", "🚙 Noboribetsu → CTS → Sapporo", "08:30出发 → 加油 → 13:00还车 → JR札幌 → Check-in", "Odori → Dinner → Tanukikoji → Susukino"],
  ["11", "30 Oct Fri", "🍂 Sapporo Autumn", "Hokkaido University Ginkgo Avenue → Sapporo Station → Red Brick Government Office", "Dinner → COCONO / Susukino → Shime Parfait"],
  ["12", "31 Oct Sat", "🏮 Otaru Day Trip", "JR → Sankaku Market → Otaru Canal → Sakaimachi → Music Box → Kitaichi → LeTAO", "🌃 Tenguyama 或 Canal Night Cruise → Dinner → Sapporo"],
  ["13", "1 Nov Sun", "⛩️ Local Sapporo", "Maruyama Park → Hokkaido Shrine → Maruyama lunch＋cafés", "Beer Museum / Shopping → Final Dinner＋自由夜生活"],
  ["14", "2 Nov Mon", "🧳 Sapporo → CTS ✈️", "10:00退房 → 寄行李 → Final Lunch → Final Shopping → JR CTS", "Airport shopping＋Dinner → 21:25 Flight"],
];

const autumn = [
  ["20–21 Oct", "Jozankei", "🌸 山谷红叶主场"],
  ["21 Oct", "Hoheikyo Dam", "🌸 山區大紅紅葉景觀"],
  ["22–24 Oct", "Niseko", "🍂 高地晚秋／山景"],
  ["24–25 Oct", "Lake Toya", "🍂 湖景＋晚秋"],
  ["26 Oct", "Kosetsuen", "🌸 函館庭園紅葉"],
  ["27 Oct", "Onuma", "🍂 湖泊＋森林＋駒岳"],
  ["28 Oct", "Noboribetsu", "🍂 火山森林 late autumn"],
  ["30 Oct", "Hokkaido University", "💛 銀杏大道"],
  ["1 Nov", "Maruyama", "🍂 札幌晚秋森林"],
];

const bookings = [
  ["🚙 Rental Car", "20–29 Oct", "🔴", "已确认13:00取／13:00还"],
  ["🚎 Hoheikyo Dam 電氣巴士", "21 Oct", "🟡", "出发前确认2026红叶期营运／交通管制"],
  ["🍽️ 熱門晚餐", "全程", "🟡", "6人时尤其建议订"],
  ["🌃 Mt Hakodate", "25–27 Oct", "🟢", "不要提前锁死哪一天，看天气"],
  ["♨️ Jigokudani", "28 Oct", "🟢", "不需预约"],
  ["🚆 CTS → Sapporo", "29 Oct", "🟢", "自由席即可；多人＋行李可考虑指定席"],
  ["🍨 Shime Parfait", "30 Oct", "🟡", "5人热门店建议订"],
  ["🚤 Otaru Canal Cruise", "31 Oct", "🟡🟡", "如果决定坐，周六建议提前订"],
  ["🚡 Tenguyama", "31 Oct", "🟢", "现场、看天气"],
  ["🍽️ Final Dinner", "1 Nov", "🟡🟡", "建议提前订"],
  ["🚆 Sapporo → CTS", "2 Nov", "🟢", "现场即可"],
];

const planB = [
  ["D1", "Jozankei雨", "Check-in＋温泉＋温泉街"],
  ["D2", "Hoheikyo大雨", "定山溪较短散步＋onsen/café"],
  ["D3", "Niseko阴雨", "小镇／café／Milk Kobo＋提早Chalet"],
  ["D4", "Shinsen-numa恶劣天气", "Niseko local food＋onsen＋Hirafu"],
  ["D5", "Toya下雨", "Toyako Onsen＋café＋住宿"],
  ["D6", "函馆山云雾", "延到D7/D8"],
  ["D7", "Kosetsuen雨", "Goryokaku＋市内；枫叶前后移"],
  ["D8", "Onuma大雨", "Kanemori＋Motomachi＋函馆室内"],
  ["D9", "登别大雨", "Mahoroba＋温泉街；Jigokudani雨小再去"],
  ["D10", "札幌下雨", "地下街＋Tanukikoji＋COCONO"],
  ["D11", "北大大雨", "Shopping＋Red Brick；北大改D13"],
  ["D12", "小樽雨", "Otaru Art Base＋Sakaimachi＋Canal Cruise"],
  ["D13", "Maruyama雨", "Beer Museum＋shopping"],
  ["D14", "下雨", "完全没差 😄 商场＋CTS"],
];

const evenings = [
  ["Jozankei", "温泉街＋溪谷附近散步"],
  ["Niseko", "Hirafu / local dinner＋小镇"],
  ["Lake Toya", "湖畔夜散步"],
  ["Hakodate", "Bay Area＋Motomachi＋Mt Hakodate＋bar"],
  ["Noboribetsu", "温泉街＋Onibi-no-Michi 夜地狱谷＋泡汤"],
  ["Sapporo", "Tanukikoji＋Susukino＋COCONO＋bar＋夜パフェ"],
  ["Otaru", "黄昏运河＋Tenguyama / Canal Cruise"],
];

function Section({ id, icon: Icon, eyebrow, title, children }: { id: string; icon: typeof Hotel; eyebrow: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-24 border-t border-[#18352f]/10 py-14 sm:py-20"><div className="mb-8 flex items-start gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#18352f] text-[#f6c85f]"><Icon size={18} /></span><div><p className="eyebrow">{eyebrow}</p><h2 className="mt-2 font-serif text-3xl leading-tight sm:text-5xl">{title}</h2></div></div>{children}</section>;
}

function Table({ headings, rows, widths }: { headings: string[]; rows: string[][]; widths?: string }) {
  return <div className="overflow-hidden rounded-[26px] bg-white ring-1 ring-[#18352f]/8"><div className="overflow-x-auto"><table className={`w-full min-w-[680px] border-collapse text-left text-xs leading-5 ${widths ?? ""}`}><thead className="bg-[#18352f] text-white"><tr>{headings.map((heading) => <th key={heading} className="px-4 py-4 font-bold tracking-wide">{heading}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`} className="border-t border-[#18352f]/8 align-top">{row.map((cell, cellIndex) => <td key={cellIndex} className={`px-4 py-4 ${cellIndex === 0 ? "font-bold text-[#be5f3a]" : "text-[#48635d]"}`}>{cell}</td>)}</tr>)}</tbody></table></div></div>;
}

export default function SummaryPage() {
  return <main>
    <section className="relative overflow-hidden bg-[#18352f] px-5 py-14 text-white sm:px-6 sm:py-20">
      <div className="absolute inset-0 opacity-45 [background:radial-gradient(circle_at_82%_12%,#d07549_0,transparent_28%),radial-gradient(circle_at_18%_90%,#547c69_0,transparent_36%)]" />
      <div className="mountain-lines absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-[10px] font-bold tracking-[0.25em] text-[#f6c85f]">JP · HOKKAIDO AUTUMN ROAD TRIP 2026</p>
        <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">Trip Summary</h1>
        <p className="mt-5 text-xl font-semibold sm:text-2xl">20 Oct – 2 Nov <span className="text-white/35">|</span> 14 Days / 13 Nights</p>
        <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm"><p className="text-[9px] font-bold tracking-[0.18em] text-white/45">前半段</p><p className="mt-2 text-sm font-semibold">自驾 🚙 20–29 Oct</p></div>
          <div className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm"><p className="text-[9px] font-bold tracking-[0.18em] text-white/45">后半段</p><p className="mt-2 text-sm font-semibold">札幌＋JR 🚆 29 Oct–2 Nov</p></div>
        </div>
      </div>
    </section>

    <div className="border-b border-[#18352f]/10 bg-[#e7e8dd] px-5 py-4 sm:px-6"><nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-1 text-[10px] font-bold whitespace-nowrap">{[["#stays","住宿"],["#master","14天总表"],["#drive","自驾"],["#autumn","赏枫"],["#before","出发前"],["#plan-b","Plan B"],["#rhythm","节奏"]].map(([href,label])=><a key={href} href={href} className="rounded-full bg-white px-4 py-2.5 text-[#48635d] ring-1 ring-[#18352f]/8">{label}</a>)}</nav></div>

    <div className="mx-auto max-w-6xl px-5 sm:px-6">
      <Section id="stays" icon={Hotel} eyebrow="WHERE WE STAY" title="住宿总览">
        <Table headings={["日期", "住宿地", "住宿", "晚数"]} rows={stays} />
      </Section>

      <Section id="master" icon={CalendarClock} eyebrow="DAY 1 — DAY 14" title="Master itinerary">
        <div className="space-y-3 lg:hidden">{days.map(([day,date,route,core,evening])=><article key={day} className="rounded-[24px] bg-white p-5 ring-1 ring-[#18352f]/8"><div className="flex items-center justify-between"><span className="font-serif text-4xl text-[#be5f3a]">{day.padStart(2,"0")}</span><span className="rounded-full bg-[#e7e8dd] px-3 py-1 text-[10px] font-bold text-[#557069]">{date}</span></div><h3 className="mt-4 font-semibold">{route}</h3><div className="mt-4 space-y-3 border-t border-[#18352f]/8 pt-4 text-xs leading-6 text-[#5d726c]"><p><span className="mr-2 text-[#d2a82f]">★</span>{core}</p><p><span className="mr-2">🌙</span>{evening}</p></div></article>)}</div>
        <div className="hidden lg:block"><Table headings={["Day", "日期", "路线／主题", "★ 核心行程", "🌙 晚上"]} rows={days} /></div>
      </Section>

      <Section id="drive" icon={CarFront} eyebrow="SELF-DRIVE · AT A GLANCE" title="自驾段一眼版">
        <div className="grid gap-5 lg:grid-cols-[.75fr_1.25fr]">
          <div className="rounded-[28px] bg-[#d97b52] p-6 text-white sm:p-8"><p className="text-sm font-semibold">你们真正的 road trip 是：</p><div className="mt-6 space-y-2 text-sm font-bold leading-6"><p>20 Oct｜New Chitose Airport</p><p>→ Jozankei 2N</p><p>→ Niseko 2N</p><p>→ Lake Toya 1N</p><p>→ Hakodate 3N</p><p>→ Noboribetsu 1N</p><p>→ 29 Oct New Chitose Airport 还车</p></div></div>
          <div className="rounded-[28px] bg-white p-6 ring-1 ring-[#18352f]/8 sm:p-8"><p className="text-sm leading-7 text-[#657a74]">这个版本比最早放 Furano / Biei 的版本顺非常多。</p><p className="mt-6 text-[10px] font-bold tracking-[0.2em] text-[#be5f3a]">整条线基本是</p><p className="mt-3 font-serif text-2xl leading-relaxed">札幌西南 → Niseko → Toya → 道南函馆 → 再沿高速北上 → CTS</p><p className="mt-6 text-sm leading-7 text-[#657a74]">没有为了富良野先向东跑，再整条折回来。而且最大的长途 Hakodate → Sapporo 被拆成：</p><div className="mt-4 rounded-2xl bg-[#e7e8dd] p-5 font-semibold leading-7"><p>Hakodate → Noboribetsu</p><p className="text-[#be5f3a]">＋</p><p>Noboribetsu → CTS</p></div><p className="mt-4 text-sm text-[#657a74]">这也是我很喜欢你最后这个排序的原因。</p></div>
        </div>
      </Section>

      <Section id="autumn" icon={Leaf} eyebrow="AUTUMN THREAD" title="赏枫主线">
        <p className="mb-7 max-w-3xl text-sm leading-7 text-[#657a74]">这趟其实不是只有「几个枫叶景点」，而是一路追着北海道秋天由山區到城市。</p>
        <Table headings={["日期", "地点", "秋色角色"]} rows={autumn} />
        <div className="mt-6 rounded-[24px] bg-[#f1d5c4] p-6"><p className="text-sm font-bold">⭐ 最需要保护的赏枫日</p><div className="mt-4 grid gap-2 text-sm leading-6 sm:grid-cols-2"><p>Day 2 Hoheikyo / Jozankei</p><p>Day 7 Kosetsuen</p><p>Day 8 Onuma</p><p>Day 11 Hokkaido University</p></div><p className="mt-4 text-xs leading-6 text-[#6f625b]">如果下雨，其他普通景点可以换；这几个我会优先看天气前后调整。</p></div>
      </Section>

      <Section id="before" icon={CheckCircle2} eyebrow="BEFORE DEPARTURE" title="出发前真正需要处理的东西">
        <p className="mb-7 text-sm text-[#657a74]">其实不多。大部分景点都不需要提前买票。</p>
        <Table headings={["项目", "日期", "Priority", "建议"]} rows={bookings} />
        <div className="mt-6 rounded-[24px] border-l-4 border-[#d97b52] bg-white p-6 text-sm leading-7 text-[#48635d] ring-1 ring-[#18352f]/8"><p className="font-bold text-[#18352f]">🔴 我最不想提前买的：</p><p className="mt-2">Mt Hakodate / Tenguyama 这类靠天气的东西。</p><p>北海道10月底天气变化大，能保留 flexibility 就保留。</p></div>
      </Section>

      <Section id="plan-b" icon={Sparkles} eyebrow="WEATHER BACKUP" title="Plan B master list">
        <p className="mb-7 text-sm text-[#657a74]">这张旅行时其实非常有用。</p>
        <Table headings={["Day", "如果天气不好", "最适合替代"]} rows={planB} />
      </Section>

      <Section id="evening" icon={Moon} eyebrow="EVENING CHARACTER" title="晚上活动总览">
        <p className="mb-7 max-w-3xl text-sm leading-7 text-[#657a74]">你之前特别要求「不要吃完晚餐就回酒店」，所以整趟其实每站都有自己的 evening character。</p>
        <Table headings={["地点", "晚上"]} rows={evenings} />
        <div className="mt-6 rounded-[24px] bg-[#18352f] p-6 text-white"><p className="text-xs font-bold tracking-[0.16em] text-[#f6c85f]">这样就不会出现：</p><div className="mt-4 space-y-2 border-l border-white/25 pl-4 text-sm leading-6 text-white/75"><p>17:30吃饭</p><p>18:30「所以我们现在回房吗？」</p><p>19:00六个人在Airbnb互看。🤣</p></div></div>
      </Section>

      <Section id="food" icon={UtensilsCrossed} eyebrow="FOOD & SUPPLIES" title="北海道「不要漏吃」Checklist">
        <div className="grid gap-4 sm:grid-cols-2"><div className="rounded-[26px] bg-white p-6 ring-1 ring-[#18352f]/8"><p className="text-sm font-bold">海鲜类</p><p className="mt-3 text-sm leading-7 text-[#657a74]">海鲜丼、Uni、Ikura、鱿鱼、北海道蟹、Sushi</p></div><div className="rounded-[26px] bg-white p-6 ring-1 ring-[#18352f]/8"><p className="text-sm font-bold">札幌类</p><p className="mt-3 text-sm leading-7 text-[#657a74]">Jingisukan 成吉思汗、Soup Curry、Miso Ramen、Shime Parfait</p></div><div className="rounded-[26px] bg-white p-6 ring-1 ring-[#18352f]/8"><p className="text-sm font-bold">地方类</p><p className="mt-3 text-sm leading-7 text-[#657a74]">Onuma Dango、Niseko dairy / ice cream、Otaru LeTAO、温泉旅馆料理</p></div><div className="rounded-[26px] bg-white p-6 ring-1 ring-[#18352f]/8"><p className="text-sm font-bold">饮料</p><p className="mt-3 text-sm leading-7 text-[#657a74]">Sapporo Classic 🍺、北海道牛乳、local coffee</p></div></div>
        <div className="mt-5 rounded-[26px] bg-[#f1d5c4] p-6 text-sm leading-7"><p>你们函馆3晚＋札幌4晚，所以完全不需要每餐都「北海道名物」。</p><p className="mt-3 font-semibold">中间一定可以插：烧肉、义大利面、café、便利店早餐、居酒屋。</p><p className="mt-2">不然第10天看到海胆可能开始没有感情 😅。</p></div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[.7fr_1.3fr]"><div><ShoppingBag className="text-[#be5f3a]" /><h3 className="mt-4 font-serif text-3xl">补给节奏</h3><p className="mt-3 text-sm text-[#657a74]">不用每天疯狂买。</p></div><div className="space-y-4"><div className="rounded-[24px] bg-white p-6 ring-1 ring-[#18352f]/8"><p className="font-bold">🚙 自驾期</p><p className="mt-2 text-sm leading-7 text-[#657a74]">每次入住后／晚餐后：Seicomart / 7-Eleven / Lawson → 水、coffee、早餐、零食、酒。</p><div className="mt-4 space-y-1 text-xs font-semibold leading-6"><p>Niseko chalet：比较值得事先买。</p><p>Hakodate Airbnb：住3晚，可以正式补一次。</p><p>Noboribetsu：只住1晚，只买第二天road supplies。</p></div></div><div className="rounded-[24px] bg-[#dfe9df] p-6"><p className="font-bold">🚆 Sapporo 4晚</p><p className="mt-2 text-sm leading-7 text-[#48635d]">第一次入住：找 supermarket 正式补一次。之后便利店随意。</p></div></div></div>
      </Section>

      <Section id="rhythm" icon={Hotel} eyebrow="TRIP RHYTHM" title="搬酒店次数与整趟节奏">
        <div className="grid gap-5 lg:grid-cols-2"><div className="rounded-[28px] bg-[#18352f] p-6 text-white sm:p-8"><p className="text-sm text-white/60">最后实际是：</p><div className="mt-5 space-y-2 font-semibold leading-6"><p>Jozankei</p><p>→ Niseko</p><p>→ Toya</p><p>→ Hakodate</p><p>→ Noboribetsu</p><p>→ Sapporo</p></div><p className="mt-6 font-serif text-2xl">共 6间住宿 / 5次换酒店。</p><p className="mt-3 text-sm text-white/70">节奏是：2N → 2N → 1N → 3N → 1N → 4N</p></div><div className="rounded-[28px] bg-white p-6 ring-1 ring-[#18352f]/8 sm:p-8"><p className="text-sm font-bold">但分配是可以接受。</p><p className="mt-4 text-sm leading-7 text-[#657a74]">因为两个1晚站：</p><ul className="mt-3 space-y-3 text-sm leading-6"><li><b>Toya</b>＝值得为湖景住一次</li><li><b>Noboribetsu</b>＝用来拆函馆→札幌长途＋温泉</li></ul><p className="mt-4 text-sm leading-7 text-[#657a74]">它们不是为了打卡而换房。而最后 <b>Sapporo 4 nights</b>，完全不搬＋不再车，正好让整趟旅行慢下来。</p></div></div>

        <div className="mt-12"><div className="flex items-center gap-3"><Clock3 className="text-[#be5f3a]" /><h3 className="font-serif text-3xl">四个不能迟到的时间</h3></div><p className="mt-3 text-sm text-[#657a74]">整趟我真正会在手机里设红色的只有：</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{[["20 Oct","13:00 New Chitose Airport附近取车","你预估约14:00正式开始自驾。"],["22 Oct","Taki – Annupuri Riverside Chalet","Check-in 15:00–18:00。不要18:00还在山里 😅。"],["28 Oct","Hotel Mahoroba","Check-in 14:00–18:00，所以函馆当天不能含量景点。"],["29 Oct","13:00 New Chitose Airport附近还车","12:30抵达 rental office 作为真正目标。"]].map(([date,title,note])=><div key={date} className="rounded-[24px] bg-white p-5 ring-1 ring-[#18352f]/8"><p className="text-[10px] font-bold tracking-[0.18em] text-[#d94f65]">● {date}</p><p className="mt-3 text-sm font-bold leading-6">{title}</p><p className="mt-2 text-xs leading-6 text-[#657a74]">{note}</p></div>)}</div></div>

        <div className="mt-12 rounded-[30px] bg-[#f1d5c4] p-6 sm:p-8"><Heart className="text-[#d94f65]" fill="currentColor" size={20} /><h3 className="mt-4 font-serif text-3xl">整趟旅行的节奏</h3><p className="mt-3 text-sm text-[#6f625b]">如果把14天浓缩成一句：</p><div className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm"><b>20–21</b><span>🌸 山谷红叶</span><b>22–24</b><span>⛰️ Niseko countryside</span><b>24–25</b><span>🌊 湖</span><b>25–28</b><span>🌃 函馆＋大沼</span><b>28–29</b><span>♨️ 火山＋温泉</span><b>29–30</b><span>🍂 札幌城市秋色</span><b>31</b><span>🏮 小樽港町</span><b>1 Nov</b><span>⛩️ 札幌local slow day</span><b>2 Nov</b><span>🧳 吃、买、回家</span></div><p className="mt-6 text-sm leading-7 text-[#6f625b]">所以它不是「14天一直看湖、看枫叶、看山」。而是有很清楚的变化：</p><p className="mt-3 font-semibold leading-7">山林 → 高原 → 湖 → 港町 → 火山温泉 → 大城市 → 小港町 → local neighbourhood → shopping收尾。</p></div>

        <div className="mt-6 rounded-[30px] bg-[#18352f] p-6 text-white sm:p-8"><Pin className="text-[#f6c85f]" /><h3 className="mt-4 font-serif text-3xl">最后把行程分成三个层级</h3><p className="mt-3 text-sm leading-7 text-white/65">旅行时看到每天的 itinerary，可以直接用这套：</p><div className="mt-6 space-y-3 text-sm"><p><span className="mr-2">🔴</span><b>MUST GO</b> — 今天不应该便删</p><p><span className="mr-2">🟡</span><b>NICE TO HAVE</b> — 时间／体力够再去</p><p><span className="mr-2">⚪</span><b>PLAN B</b> — 天气、塞车、大家累时替换</p></div><p className="mt-6 text-sm leading-7 text-white/65">这样六个人旅行会好用很多。因为六个人的速度一定比两个人慢，不需要因为少去一个景点就觉得行程失败。</p><p className="mt-3 text-sm font-semibold leading-7 text-[#f2b276]">这份 itinerary 最大的优点，本来就不是「塞最多」，而是每一站都有足够时间真正待一下。</p></div>
      </Section>
    </div>
  </main>;
}
