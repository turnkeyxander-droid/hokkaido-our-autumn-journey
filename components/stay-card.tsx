import { BedDouble } from "lucide-react";
import { Bilingual } from "@/components/bilingual";

type Props = {
  name: string;
  locationZh: string;
  locationEn: string;
  checkIn: string;
  checkOut: string;
  alertZh?: string;
  alertEn?: string;
};

export function StayCard({ name, locationZh, locationEn, checkIn, checkOut, alertZh, alertEn }: Props) {
  return <aside className="day-stay-card rounded-[30px] bg-[#d97b52] p-7 text-white shadow-sm sm:p-8">
    <div className="flex items-center justify-between gap-4"><BedDouble size={28} className="text-[#ffdc8a]" /><span className="rounded-full bg-white/12 px-3 py-2 text-[10px] font-bold tracking-[.14em]">IMPORTANT</span></div>
    <p className="mt-7 text-sm font-extrabold tracking-[0.18em] text-white/75"><Bilingual zh="今日住宿" en="TODAY'S STAY" /></p>
    <h2 className="mt-3 break-words font-serif text-3xl font-semibold leading-tight sm:text-4xl">{name}</h2>
    <p className="mt-2 text-base font-semibold text-white/85"><Bilingual zh={locationZh} en={locationEn} /></p>
    <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/25 pt-6 text-sm"><div><p className="text-white/60">Check-in</p><p className="mt-1 text-base font-extrabold">{checkIn}</p></div><div><p className="text-white/60">Check-out</p><p className="mt-1 text-base font-extrabold">{checkOut}</p></div></div>
    {alertZh && alertEn && <p className="mt-6 rounded-2xl bg-black/14 p-4 text-sm font-semibold leading-6 text-white/90"><Bilingual zh={alertZh} en={alertEn} /></p>}
  </aside>;
}
