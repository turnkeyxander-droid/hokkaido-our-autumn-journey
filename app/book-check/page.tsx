import { AlertTriangle, CalendarCheck, CheckCircle2, ChevronDown, CircleDollarSign, CloudSun, Utensils } from "lucide-react";
import { ActionChecklist } from "@/components/action-checklist";
import { actionGroups, checkDetails, morningChecks, restaurantBookings, statusItems, type Priority } from "@/lib/book-check";

const priorityStyle: Record<Priority, { dot: string; badge: string; label: string }> = {
  ready: { dot: "bg-[#55a47d]", badge: "bg-[#e3f1e9] text-[#2f7456]", label: "现场／当天处理" },
  watch: { dot: "bg-[#e0b84e]", badge: "bg-[#fff3ce] text-[#806313]", label: "之后再确认" },
  book: { dot: "bg-[#d94f65]", badge: "bg-[#fde5e9] text-[#a9354a]", label: "考虑提前订" },
  change: { dot: "bg-[#d36b45]", badge: "bg-[#f8e0d5] text-[#9a4528]", label: "行程要修改" },
};

export default function BookCheckPage() {
  return <main>
    <section className="relative overflow-hidden bg-[#18352f] px-5 py-14 text-white sm:px-6 sm:py-20">
      <div className="absolute inset-0 opacity-45 [background:radial-gradient(circle_at_84%_12%,#d07549_0,transparent_28%),radial-gradient(circle_at_15%_92%,#547c69_0,transparent_38%)]" />
      <div className="mountain-lines absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-5xl">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#f6c85f] ring-1 ring-white/15"><CalendarCheck size={21} /></div>
        <p className="mt-7 text-[10px] font-bold tracking-[0.25em] text-[#f6c85f]">BOOK LESS · CHECK BETTER</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl tracking-[-0.045em] sm:text-7xl">Book / Check</h1>
        <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/80 sm:text-2xl">要再确认、要订、什么时候行动。</p>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">按时间先后整理。现在不用急着花钱，先把真正会影响路线与座位的事情标记好。</p>
      </div>
    </section>

    <div className="mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-14">
      <section className="overflow-hidden rounded-[28px] bg-[#f3d8ce] ring-1 ring-[#c76643]/15">
        <div className="flex gap-4 p-5 sm:p-7"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#bd5937] text-white"><AlertTriangle size={20} /></span><div><p className="text-[10px] font-bold tracking-[0.2em] text-[#a34a2e]">CONFIRMED CHANGE</p><h2 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">函馆山 Ropeway 确定停驶</h2><p className="mt-3 text-sm leading-7 text-[#694a40]">10/20–11/8 停驶维修。Day 6／7／8 的夜景交通改为 <strong>Route 1 登山巴士／Taxi</strong>，三晚选择天气最好的一晚；租车 16:00–21:00 禁止上山。</p></div></div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4"><div><p className="eyebrow">NOW → LATE SEPTEMBER</p><h2 className="mt-3 font-serif text-3xl sm:text-4xl">先不用花钱，但要标记</h2></div><CircleDollarSign className="hidden text-[#be5f3a] sm:block" /></div>
        <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {statusItems.map((item) => <article key={item.title} className="rounded-[24px] bg-white p-5 shadow-[0_12px_35px_rgba(24,53,47,.055)] ring-1 ring-[#18352f]/8">
            <div className="flex items-center justify-between gap-3"><span className={`h-2.5 w-2.5 shrink-0 rounded-full ${priorityStyle[item.priority].dot}`} /><span className="text-[10px] font-bold tracking-[0.12em] text-[#78908a]">{item.date}</span></div>
            <h3 className="mt-4 text-base font-bold leading-6">{item.title}</h3>
            <p className="mt-2 text-xs font-semibold text-[#557069]">{item.status}</p>
            <p className="mt-4 border-t border-[#18352f]/8 pt-4 text-xs leading-6 text-[#6b7f79]">{item.next}</p>
          </article>)}
        </div>
      </section>

      <section className="mt-14">
        <p className="eyebrow">THE NINE CHECKS</p><h2 className="mt-3 font-serif text-3xl sm:text-4xl">逐项确认</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-[#657a74]">点开每一项查看判断、时间与 Plan B。页面内容依据你提供的资料整理，没有补写未提供的官方网址。</p>
        <div className="mt-7 space-y-4">
          {checkDetails.map((item) => <details key={item.number} className="group overflow-hidden rounded-[26px] bg-white shadow-[0_14px_40px_rgba(24,53,47,.055)] ring-1 ring-[#18352f]/8" open={item.number === 4}>
            <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 marker:hidden sm:px-6 sm:py-6">
              <span className="font-serif text-3xl text-[#be5f3a]">{String(item.number).padStart(2, "0")}</span>
              <span className="min-w-0 flex-1"><span className="block text-base font-bold leading-6 sm:text-lg">{item.title}</span><span className="mt-1 block text-[10px] font-bold tracking-[0.13em] text-[#78908a]">{item.date}</span></span>
              <span className={`hidden rounded-full px-3 py-1.5 text-[10px] font-bold sm:block ${priorityStyle[item.priority].badge}`}>{priorityStyle[item.priority].label}</span>
              <ChevronDown size={18} className="shrink-0 text-[#78908a] transition group-open:rotate-180" />
            </summary>
            <div className="border-t border-[#18352f]/8 px-5 pb-6 pt-5 sm:px-6 sm:pb-7">
              <span className={`inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold sm:hidden ${priorityStyle[item.priority].badge}`}>{priorityStyle[item.priority].label}</span>
              <h3 className="mt-4 text-lg font-bold text-[#294941] sm:mt-0">{item.verdict}</h3>
              <div className="mt-4 space-y-3 text-sm leading-7 text-[#5e746e]">{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              {item.facts && <div className="mt-5 grid gap-2 sm:grid-cols-2">{item.facts.map((fact) => <p key={fact} className="rounded-2xl bg-[#e7e8dd] px-4 py-3 text-xs font-semibold leading-5 text-[#415d56]">{fact}</p>)}</div>}
              <div className="mt-6 rounded-[20px] bg-[#f2f0e8] p-4 sm:p-5"><p className="text-[10px] font-bold tracking-[0.18em] text-[#be5f3a]">你要做的</p><ul className="mt-3 space-y-2">{item.actions.map((action) => <li key={action} className="flex gap-2.5 text-sm leading-6 text-[#334f48]"><CheckCircle2 size={15} className="mt-1 shrink-0 text-[#6f9b83]" />{action}</li>)}</ul></div>
              {item.planB && <div className="mt-4 rounded-[20px] border border-[#d8b359]/25 bg-[#fff8e6] p-4 text-sm leading-6 text-[#705b27]"><strong>Plan B：</strong> {item.planB}</div>}
              <div className="mt-5 border-t border-[#18352f]/8 pt-4"><p className="text-[9px] font-bold tracking-[0.18em] text-[#91a19d]">资料名称</p><p className="mt-2 text-xs leading-6 text-[#78908a]">{item.sources.join(" · ")}</p></div>
            </div>
          </details>)}
        </div>
      </section>

      <section className="mt-14 rounded-[30px] bg-[#18352f] p-6 text-white sm:p-9">
        <Utensils className="text-[#f2b276]" />
        <p className="mt-6 text-[10px] font-bold tracking-[0.22em] text-[#f6c85f]">RESTAURANT BOOKINGS</p><h2 className="mt-3 font-serif text-3xl sm:text-4xl">只锁真正重要的几餐</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">前半段 6 人、后段 5 人。不把全部餐厅订死，保留自驾旅行的自由度。</p>
        <div className="mt-7 divide-y divide-white/10 border-y border-white/10">{restaurantBookings.map((item) => <div key={`${item.date}-${item.meal}`} className="grid gap-2 py-5 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:gap-5"><p className="text-xs font-bold text-[#f6c85f]">{item.date}</p><div><p className="text-sm font-semibold leading-6">{item.meal}</p><p className="mt-1 text-xs text-white/45">{item.people}</p></div><p className="text-xs font-bold text-[#f2b276] sm:text-right">{item.timing}</p></div>)}</div>
        <p className="mt-6 rounded-2xl bg-white/8 p-4 text-xs leading-6 text-white/60">Niseko 10/22–23 是 off-season：10 月初先重新确认哪些餐厅秋季真的营业，再决定预约，避免 seasonal closure。</p>
      </section>

      <section className="mt-14">
        <p className="eyebrow">ACTION CALENDAR</p><h2 className="mt-3 font-serif text-3xl sm:text-4xl">照着日期完成</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-[#657a74]">可以直接勾选。红点是必须确认，黄点是有余力时处理。</p>
        <div className="mt-7"><ActionChecklist groups={actionGroups} /></div>
      </section>

      <section className="mt-12 grid gap-5 rounded-[28px] bg-[#e7e8dd] p-6 sm:grid-cols-[auto_1fr] sm:p-8">
        <CloudSun className="text-[#be5f3a]" />
        <div><p className="text-[10px] font-bold tracking-[0.2em] text-[#be5f3a]">EVERY MORNING</p><h2 className="mt-2 font-serif text-2xl">Weather + Road + Live Camera</h2><div className="mt-5 flex flex-wrap gap-2">{morningChecks.map((item) => <span key={item} className="rounded-full bg-white px-3.5 py-2 text-[11px] font-bold text-[#48635d] ring-1 ring-[#18352f]/8">{item}</span>)}</div></div>
      </section>
    </div>
  </main>;
}
