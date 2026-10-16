import { TimelineItem } from "@/lib/itinerary";
import { CarFront, Coffee, Footprints, House, Sparkles } from "lucide-react";

const iconFor = { travel: CarFront, stay: House, food: Coffee, walk: Footprints, must: Sparkles };
export function Timeline({ items }: { items: TimelineItem[] }) {
  return <ol className="relative mt-7 space-y-0">{items.map((item, index) => { const Icon = iconFor[item.tone ?? "walk"]; return <li key={`${item.time}-${item.title}`} className="grid grid-cols-[70px_28px_1fr] gap-3 sm:grid-cols-[105px_34px_1fr] sm:gap-4"><time className="pt-1 text-right text-[11px] font-bold leading-5 text-[#be5f3a] sm:text-xs">{item.time}</time><div className="relative flex justify-center">{index < items.length - 1 && <span className="absolute top-7 h-[calc(100%+12px)] w-px bg-[#18352f]/15" />}<span className={`relative z-10 grid h-7 w-7 place-items-center rounded-full border bg-[#f7f5ee] ${item.tone === "must" ? "border-[#be5f3a] text-[#be5f3a]" : "border-[#18352f]/20 text-[#557069]"}`}><Icon size={13} strokeWidth={2} /></span></div><div className="min-w-0 pb-6"><p className={`text-sm font-semibold leading-6 sm:text-[15px] ${item.tone === "must" ? "text-[#be5f3a]" : "text-[#18352f]"}`}>{item.title}</p>{item.note && <p className="mt-1 text-xs leading-5 text-[#6c7f79]">{item.note}</p>}</div></li>; })}</ol>;
}

