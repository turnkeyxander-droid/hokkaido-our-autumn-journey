"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import type { ActionGroup } from "@/lib/book-check";

const storageKey = "hokkaido-book-check-v1";

export function ActionChecklist({ groups }: { groups: ActionGroup[] }) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      try { setCompleted(new Set(JSON.parse(saved) as string[])); } catch { /* Ignore invalid local data. */ }
    }
  }, []);

  const total = useMemo(() => groups.reduce((count, group) => count + group.items.length, 0), [groups]);

  function toggle(id: string) {
    setCompleted((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id); else next.add(id);
      window.localStorage.setItem(storageKey, JSON.stringify([...next]));
      return next;
    });
  }

  function clear() {
    setCompleted(new Set());
    window.localStorage.removeItem(storageKey);
  }

  const progress = total ? Math.round((completed.size / total) * 100) : 0;

  return <div>
    <div className="flex flex-col gap-5 rounded-[26px] bg-[#18352f] p-5 text-white sm:flex-row sm:items-end sm:justify-between sm:p-7">
      <div className="min-w-0 flex-1">
        <div className="flex items-end justify-between gap-4"><div><p className="text-[10px] font-bold tracking-[0.2em] text-[#f6c85f]">ACTION PROGRESS</p><p className="mt-2 font-serif text-3xl">{completed.size} <span className="text-lg text-white/35">/ {total}</span></p></div><p className="text-sm font-bold text-white/60">{progress}%</p></div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[#f2b276] transition-[width] duration-300" style={{ width: `${progress}%` }} /></div>
      </div>
      {completed.size > 0 && <button type="button" onClick={clear} className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-4 py-2 text-[11px] font-bold text-white/65 transition hover:bg-white/8 sm:self-auto"><RotateCcw size={13} />清除勾选</button>}
    </div>

    <div className="mt-6 grid gap-5 lg:grid-cols-2">
      {groups.map((group) => <section key={group.label} className="overflow-hidden rounded-[26px] bg-white shadow-[0_14px_40px_rgba(24,53,47,.06)] ring-1 ring-[#18352f]/8">
        <header className="border-b border-[#18352f]/8 bg-[#e7e8dd] px-5 py-5 sm:px-6"><p className="text-[10px] font-bold tracking-[0.18em] text-[#be5f3a]">{group.label}</p><h3 className="mt-1.5 font-serif text-2xl">{group.subtitle}</h3></header>
        <div className="divide-y divide-[#18352f]/7 px-3 py-2 sm:px-4">
          {group.items.map((item) => {
            const checked = completed.has(item.id);
            return <label key={item.id} className="flex cursor-pointer items-start gap-3 rounded-2xl px-2 py-3.5 transition hover:bg-[#f2f0e8]">
              <input className="sr-only" type="checkbox" checked={checked} onChange={() => toggle(item.id)} />
              <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border transition ${checked ? "border-[#18352f] bg-[#18352f] text-white" : item.level === "must" ? "border-[#d94f65]/40 bg-[#fff1ee] text-transparent" : "border-[#d8b359]/45 bg-[#fff8e6] text-transparent"}`}><Check size={13} strokeWidth={3} /></span>
              <span className={`text-sm font-medium leading-6 transition ${checked ? "text-[#78908a] line-through" : "text-[#334f48]"}`}>{item.text}</span>
            </label>;
          })}
        </div>
      </section>)}
    </div>
    <p className="mt-4 text-center text-[11px] leading-5 text-[#78908a]">勾选记录只保存在这台设备的浏览器，不会上传。</p>
  </div>;
}
