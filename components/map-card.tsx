import { ExternalLink, MapPinned, Navigation } from "lucide-react";

type Props = { title: string; subtitle: string; mapQuery: string; origin: string; destination: string };

export function MapCard({ title, subtitle, mapQuery, origin, destination }: Props) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
  return <section className="overflow-hidden rounded-[28px] border border-[#18352f]/10 bg-white shadow-[0_18px_55px_rgba(24,53,47,0.08)]">
    <div className="flex items-start justify-between gap-4 px-5 py-5 sm:px-7"><div className="flex gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#e7efe7] text-[#315d4f]"><MapPinned size={19} /></span><div><p className="text-[10px] font-bold tracking-[0.22em] text-[#be5f3a]">ROUTE MAP</p><h2 className="mt-1 font-serif text-xl font-semibold text-[#18352f]">{title}</h2><p className="mt-1 text-xs leading-5 text-[#6c7f79]">{subtitle}</p></div></div><a href={directions} target="_blank" rel="noreferrer" className="hidden shrink-0 items-center gap-2 rounded-full bg-[#18352f] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#274d44] sm:flex"><Navigation size={14} /> Google Maps 导航</a></div>
    <div className="relative h-[330px] bg-[#dfe7df] sm:h-[390px]"><iframe title={`${title} Google Maps`} src={mapSrc} className="h-full w-full border-0 grayscale-[12%]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
    <div className="flex flex-col gap-3 border-t border-[#18352f]/8 bg-[#fbfaf5] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7"><p className="text-[11px] leading-5 text-[#6c7f79]">地图以截图中的地点名称搜寻；未使用或补写坐标。</p><a href={directions} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[#18352f] px-4 py-3 text-xs font-bold text-white sm:hidden"><Navigation size={14} /> 在 Google Maps 开始导航 <ExternalLink size={13} /></a></div>
  </section>;
}

