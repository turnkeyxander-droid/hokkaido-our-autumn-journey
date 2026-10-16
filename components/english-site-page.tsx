import Link from "next/link";
import { ArrowRight, BookOpenText, CalendarDays, CalendarRange, CheckCircle2, ClipboardCheck, Clock3, Hotel, LockKeyhole, Route } from "lucide-react";

const homeCards = [
  ["/itinerary", "Itinerary", "Day 1–15", "Open each day's full travel guide."],
  ["/summary", "Summary", "Trip overview", "Stays, route, autumn highlights, Plan B and overall rhythm."],
  ["/timetable", "Timetable", "Time at a glance", "See each day's important times in one place."],
  ["/book-check", "Book / Check", "Before we go", "Reservations, confirmations and pre-departure checks."],
];

const itineraryDays = [
  [1, "20 OCT", "Airport → Jozankei", "/day-1"],
  [2, "21 OCT", "Jozankei Autumn", "/day-2"],
  [3, "22 OCT", "Jozankei → Niseko", "/day-3"],
];

const stays = [
  ["20–22 Oct", "Jozankei", "MolinHotels201", "2"],
  ["22–24 Oct", "Niseko", "Taki – Annupuri Riverside Chalet", "2"],
  ["24–25 Oct", "Lake Toya", "Yotorelo Toyako", "1"],
  ["25–28 Oct", "Hakodate", "Airbnb", "3"],
  ["28–29 Oct", "Noboribetsu", "Hotel Mahoroba", "1"],
  ["29 Oct–2 Nov", "Sapporo", "Airbnb", "4"],
];

const overview = [
  ["01", "20 Oct", "CTS → Jozankei", "13:00 rental-car pickup → Jozankei → check-in → Jozankei Onsen", "Onsen-town walk near the stay"],
  ["02", "21 Oct", "Jozankei Autumn", "Hoheikyo Dam → Futami Park / Suspension Bridge", "Onsen and an easy dinner"],
  ["03", "22 Oct", "Jozankei → Niseko", "Nakayama Pass → Fukidashi Park → Makkari → Niseko", "Chalet Night or Hirafu Evening"],
  ["04", "23 Oct", "Niseko Full Day", "Shinsen-numa → Panorama Line → countryside → Milk Kobo", "Hirafu dinner and walk"],
  ["05", "24 Oct", "Niseko → Lake Toya", "Final Niseko half-day → Lake Toya → lakeside / volcanic views", "Toyako Onsen lakeside night walk"],
  ["06", "25 Oct", "Lake Toya → Hakodate", "Drive south → Motomachi → Hakodate Bay", "Mt. Hakodate night-view option 1"],
  ["07", "26 Oct", "Hakodate City", "Morning Market → Goryokaku → Kosetsuen", "Kosetsuen autumn light-up"],
  ["08", "27 Oct", "Onuma Day", "Onuma Park → Onuma Dango → Kanemori / Bay Area", "Final Hakodate dinner; Mt. Hakodate backup"],
  ["09", "28 Oct", "Hakodate → Noboribetsu", "Drive north → Jigokudani → Oyunuma → Natural Footbath", "Mahoroba, onsen town and Onibi-no-Michi"],
  ["10", "29 Oct", "Noboribetsu → CTS → Sapporo", "08:30 leave → fuel → 13:00 return car → train to Sapporo", "Odori, dinner, Tanukikoji and Susukino"],
  ["11", "30 Oct", "Sapporo Autumn", "Hokkaido University → Sapporo Station → Red Brick Government Office", "COCONO / Susukino and Shime Parfait"],
  ["12", "31 Oct", "Otaru Day Trip", "Sankaku Market → Canal → Sakaimachi → Music Box → LeTAO", "Tenguyama or Canal Night Cruise"],
  ["13", "1 Nov", "Local Sapporo", "Maruyama Park → Hokkaido Shrine → local cafés", "Beer Museum / shopping → Final Dinner"],
  ["14", "2 Nov", "Sapporo → CTS", "10:00 checkout → final lunch → shopping → train to CTS", "Airport shopping, dinner and 21:25 flight"],
];

const autumn = [
  ["20–21 Oct", "Jozankei", "Main valley foliage"], ["21 Oct", "Hoheikyo Dam", "Mountain autumn scenery"],
  ["22–24 Oct", "Niseko", "Highland late autumn and mountain views"], ["24–25 Oct", "Lake Toya", "Lake views and late autumn"],
  ["26 Oct", "Kosetsuen", "Hakodate garden foliage"], ["27 Oct", "Onuma", "Lake, forest and Mt. Komagatake"],
  ["28 Oct", "Noboribetsu", "Volcanic forest in late autumn"], ["30 Oct", "Hokkaido University", "Ginkgo Avenue"],
  ["1 Nov", "Maruyama", "Sapporo late-autumn forest"],
];

type EnglishDay = { day: number; date: string; title: string; rows: [string, string][]; note?: string };
const timetable: EnglishDay[] = [
  { day:1,date:"20 Oct Tue",title:"New Chitose Airport → Jozankei",rows:[["09:30","Arrive at New Chitose Airport"],["09:30–12:30","Immigration, luggage and first meal"],["13:00–14:00","Rental-car pickup, checks and luggage"],["14:00–15:45","Drive to Jozankei and check in"],["16:00–17:30","Jozankei Onsen area walk"],["18:30–21:00","Dinner, night walk and supplies"]],note:"Buy Day 2 breakfast, water and snacks tonight."},
  { day:2,date:"21 Oct Wed",title:"Jozankei + Hoheikyo Dam",rows:[["07:30–08:30","Breakfast"],["09:00–12:00","Hoheikyo Dam, Electric Bus and foliage"],["12:15–13:30","Lunch at ONSEN Shokudo"],["14:00–16:30","Futami Park, Suspension Bridge and valley foliage"],["16:30–20:30","Onsen, dinner and final Jozankei night walk"]],note:"Hoheikyo is today's priority; let good foliage conditions take more time."},
  { day:3,date:"22 Oct Thu",title:"Jozankei → Nakayama Pass → Niseko",rows:[["08:00–10:00","Breakfast, final walk and checkout"],["10:35–12:00","Nakayama Pass and Kimobetsu countryside"],["12:10–15:25","Fukidashi Park, lunch and Makkari"],["15:30–16:45","Niseko supplies and chalet check-in"],["17:30–21:00","Chalet Night or Hirafu Evening"]],note:"Complete chalet check-in before 18:00."},
  { day:4,date:"23 Oct Fri",title:"Niseko Full Day",rows:[["07:30–09:15","Breakfast and drive to Shinsen-numa"],["09:15–12:00","Shinsen-numa and Panorama Line"],["12:00–16:30","Lunch, Milk Kobo and Mt. Yotei countryside drive"],["18:00–21:30","Hirafu dinner, town walk and return"]]},
  { day:5,date:"24 Oct Sat",title:"Niseko → Lake Toya",rows:[["07:30–10:00","Breakfast, pack and checkout"],["10:00–12:30","Drive to Lake Toya and Silo Observatory"],["12:30–15:00","Lunch and lakeside"],["15:00–20:30","Yotorelo check-in, onsen, dinner and night walk"]]},
  { day:6,date:"25 Oct Sun",title:"Lake Toya → Hakodate",rows:[["08:00–10:00","Breakfast, final lakeside walk and checkout"],["10:45–15:00","Drive to Hakodate with a PA break and lunch"],["15:30–18:45","Motomachi; Mt. Hakodate if weather is good"],["19:00–21:30","Lucky Pierrot, Kanemori and Bay Area"]],note:"If Mt. Hakodate visibility is poor, move it to Day 7 or 8."},
  { day:7,date:"26 Oct Mon",title:"Hakodate City + Autumn",rows:[["07:30–09:00","Hakodate Morning Market breakfast"],["09:30–13:00","Goryokaku, tower, park and lunch"],["14:00–17:30","Kosetsuen autumn colours"],["17:30–21:00","Kosetsuen light-up and Hakodate evening"]]},
  { day:8,date:"27 Oct Tue",title:"Onuma + Final Hakodate Full Day",rows:[["08:30–12:30","Drive to Onuma and explore the park"],["12:30–14:30","Onuma Dango, lunch and return"],["14:30–17:30","Kanemori, Bay Area and café"],["17:30–21:00","Mt. Hakodate backup and final dinner"]]},
  { day:9,date:"28 Oct Wed",title:"Hakodate → Noboribetsu",rows:[["07:30–10:00","Breakfast, pack and leave early"],["10:00–14:00","Drive north with PA and simple lunch"],["14:00–16:45","Mahoroba check-in, Jigokudani and Oyunuma"],["17:00–21:00","Onsen, hotel dinner, onsen town and Onibi-no-Michi"]]},
  { day:10,date:"29 Oct Thu",title:"Noboribetsu → CTS → Sapporo",rows:[["07:00–08:30","Breakfast and departure"],["08:30–13:00","Drive to Chitose, fuel and return car by 13:00"],["13:00–15:30","Shuttle, train to Sapporo and check-in"],["16:00–21:30","Odori, Jingisukan, Tanukikoji and Susukino"]]},
  { day:11,date:"30 Oct Fri",title:"Hokkaido University + Central Sapporo",rows:[["08:00–11:30","Breakfast and Hokkaido University Ginkgo Avenue"],["12:00–15:45","Sapporo Station lunch, Daimaru and Red Brick Office"],["15:45–19:00","Akapla, Odori, café and dinner"],["19:00–21:30","COCONO SUSUKINO and Shime Parfait"]]},
  { day:12,date:"31 Oct Sat",title:"Otaru Day Trip",rows:[["09:00–12:15","Train, Sankaku Market and Otaru Canal"],["12:15–16:15","Lunch, Sakaimachi, Kitaichi, Music Box and LeTAO"],["16:15–18:30","Dusk canal; Tenguyama or Canal Cruise"],["18:45–22:00","Dinner, final canal walk and train to Sapporo"]]},
  { day:13,date:"1 Nov Sun",title:"Maruyama + Local Sapporo",rows:[["08:00–11:45","Breakfast, Maruyama Park and Hokkaido Shrine"],["11:45–15:00","Approach snack, lunch, cafés and small shops"],["16:00–17:30","Sapporo Beer Museum and tasting"],["18:00–22:00","Final Dinner, shopping, bar and pack 90%"]],note:"If skipping the Beer Museum, use 15:00–17:30 for Sapporo Station, Daimaru or Odori shopping."},
  { day:14,date:"2 Nov Mon",title:"Final Sapporo → New Chitose Airport",rows:[["07:30–10:30","Final breakfast, weigh luggage, checkout and storage"],["10:30–15:45","Final walk, lunch, shopping and collect luggage"],["16:00–19:30","Train to CTS, ROYCE', airport shopping and dinner"],["20:00–21:25","International check-in, security, gate and departure"]]},
];

const checks = [
  ["Hoheikyo Dam", "21 Oct", "Ready", "No advance booking. Drive to the parking area and buy the Electric Bus round trip on site."],
  ["Niseko Panorama Line / Shinsen-numa", "23 Oct", "Watch", "Check around 15 Oct, again on 22 Oct, and once more before leaving; snow may close the road early."],
  ["Lake Toya Long Run Fireworks", "24 Oct", "Ready", "Confirmed for the 2026 season. Lakeside viewing is free; check same-day operation after check-in."],
  ["Mt. Hakodate night view", "25–27 Oct", "Route change", "The ropeway is closed 20 Oct–8 Nov. Use Route 1 bus or taxi on the clearest of the three nights."],
  ["Kosetsuen MOMI-G Festa", "26 Oct", "Watch", "2026 dates are not yet official. Recheck around 1 Oct, then 15 Oct if needed."],
  ["Hokkaido University Kon'you-sai", "30 Oct", "Watch", "The festival is a bonus; Ginkgo Avenue remains the main plan. Recheck in early and mid-October."],
  ["Otaru Canal Night Cruise", "31 Oct", "Consider booking", "Saturday night cruises can fill. Choose between cruise and Tenguyama after checking the 24–26 Oct forecast."],
  ["Otaru Tenguyama Ropeway", "31 Oct", "Ready", "Do not pre-lock a ticket. Go only if the afternoon weather and summit visibility are good."],
  ["Sapporo Beer Museum", "1 Nov", "Ready", "No rush to book. Decide in late October; switch to shopping if the group is tired."],
];

function Hero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="relative overflow-hidden bg-[#18352f] px-5 py-14 text-white sm:px-6 sm:py-20"><div className="mountain-lines absolute inset-0 opacity-30" /><div className="relative mx-auto max-w-6xl"><p className="text-[10px] font-bold tracking-[.24em] text-[#f6c85f]">{eyebrow}</p><h1 className="mt-4 font-serif text-5xl tracking-[-.04em] sm:text-7xl">{title}</h1><p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">{description}</p></div></section>;
}

function HomeEnglish() {
  const icons = [Route, BookOpenText, CalendarRange, ClipboardCheck];
  return <main className="min-h-[calc(100svh-4rem)] bg-[#18352f] px-5 py-12 text-white"><div className="mx-auto max-w-6xl"><p className="text-[10px] font-bold tracking-[.25em] text-[#f6c85f]">HOKKAIDO · AUTUMN 2026</p><h1 className="mt-4 font-serif text-5xl leading-tight sm:text-7xl">Our journey,<br/><em className="font-normal text-[#f2b276]">all in one place.</em></h1><p className="mt-5 max-w-xl text-sm leading-7 text-white/70">Choose the section you need. The itinerary, trip overview, timetable and booking checks stay separate and easy to use on a phone.</p><div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">{homeCards.map(([href,label,note,description],index)=>{const Icon=icons[index];return <Link key={href} href={href} className="flex min-h-[180px] flex-col justify-between rounded-[24px] bg-white p-5 text-[#18352f]"><div className="flex justify-between"><Icon/><ArrowRight size={17}/></div><div><p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#78908a]">{note}</p><h2 className="mt-2 font-serif text-2xl">{label}</h2><p className="mt-2 hidden text-xs leading-5 text-[#657a74] sm:block">{description}</p></div></Link>})}</div></div></main>;
}

function ItineraryEnglish() {
  return <main><Hero eyebrow="DAY BY DAY" title="Itinerary" description="Choose a day to open its page. Days 1–3 are complete from your screenshots; the remaining days keep their place without invented content."/><section className="mx-auto max-w-6xl px-5 py-12 sm:px-6"><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{Array.from({length:15},(_,i)=>{const day=i+1;const open=itineraryDays.find(row=>row[0]===day);return open?<Link key={day} href={String(open[3])} className="flex min-h-[175px] flex-col justify-between rounded-[24px] bg-[#d97b52] p-5 text-white"><CalendarDays size={18}/><div><p className="font-serif text-5xl">{String(day).padStart(2,"0")}</p><p className="mt-2 text-[9px] font-bold tracking-[.18em] text-white/60">{open[1]}</p><p className="mt-2 text-xs font-semibold">{open[2]}</p></div></Link>:<div key={day} className="flex min-h-[175px] flex-col justify-between rounded-[24px] bg-white/55 p-5 text-[#78908a] ring-1 ring-[#18352f]/8"><LockKeyhole size={16}/><div><p className="font-serif text-5xl text-[#18352f]/30">{String(day).padStart(2,"0")}</p><p className="mt-2 text-[9px] font-bold">TO BE ADDED</p><p className="mt-2 text-xs">Content will be added later.</p></div></div>})}</div></section></main>;
}

function SummaryEnglish() {
  return <main><Hero eyebrow="TRIP OVERVIEW" title="Hokkaido Autumn Road Trip 2026" description="20 Oct–2 Nov · 14 days / 13 nights. Self-drive from 20–29 Oct, then Sapporo by JR until departure."/><div className="mx-auto max-w-6xl space-y-12 px-5 py-12 sm:px-6"><section><div className="flex items-center gap-3"><Hotel className="text-[#be5f3a]"/><h2 className="font-serif text-3xl">Accommodation</h2></div><div className="mt-6 overflow-x-auto rounded-[24px] bg-white p-5 ring-1 ring-[#18352f]/8"><table className="w-full min-w-[620px] text-left text-sm"><thead><tr className="border-b border-[#18352f]/10 text-[10px] uppercase tracking-[.16em] text-[#78908a]"><th className="py-3">Dates</th><th>Base</th><th>Stay</th><th>Nights</th></tr></thead><tbody>{stays.map(row=><tr key={row[0]} className="border-b border-[#18352f]/8 last:border-0">{row.map(cell=><td key={cell} className="py-4 pr-4">{cell}</td>)}</tr>)}</tbody></table></div></section><section><p className="eyebrow">MASTER ROUTE</p><h2 className="mt-3 font-serif text-3xl">West Sapporo → Niseko → Toya → Hakodate → north to CTS</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-[#657a74]">The longest Hakodate–Sapporo drive is split into Hakodate → Noboribetsu and Noboribetsu → CTS. This protects the final part of the trip and keeps the road-trip flow practical.</p></section><section><p className="eyebrow">DAY-BY-DAY OVERVIEW</p><div className="mt-6 space-y-3">{overview.map(row=><article key={row[0]} className="grid gap-2 rounded-[22px] bg-white p-5 ring-1 ring-[#18352f]/8 sm:grid-cols-[55px_110px_1fr]"><p className="font-serif text-3xl text-[#be5f3a]">{row[0]}</p><div><p className="text-xs font-bold">{row[1]}</p><p className="mt-1 text-xs text-[#657a74]">{row[2]}</p></div><div><p className="text-sm font-semibold">{row[3]}</p><p className="mt-2 text-xs text-[#657a74]">Evening: {row[4]}</p></div></article>)}</div></section><section><p className="eyebrow">AUTUMN LINE</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{autumn.map(row=><div key={`${row[0]}${row[1]}`} className="rounded-[22px] bg-[#e7e8dd] p-5"><p className="text-xs font-bold text-[#be5f3a]">{row[0]}</p><h3 className="mt-2 font-serif text-xl">{row[1]}</h3><p className="mt-2 text-xs leading-5 text-[#657a74]">{row[2]}</p></div>)}</div></section><section className="rounded-[28px] bg-[#18352f] p-7 text-white"><h2 className="font-serif text-3xl">What matters most</h2><div className="mt-5 grid gap-4 text-sm leading-7 text-white/70 md:grid-cols-2"><p><strong className="text-white">Must protect from rain:</strong> Day 2 Hoheikyo/Jozankei, Day 7 Kosetsuen, Day 8 Onuma and Day 11 Hokkaido University.</p><p><strong className="text-white">Hotel moves:</strong> six bases and five moves, but the rhythm is 2N → 2N → 1N → 3N → 1N → 4N, ending with four stable Sapporo nights.</p><p><strong className="text-white">Do not overbook food:</strong> seafood, Jingisukan, soup curry, ramen, Shime Parfait, Onuma Dango, Niseko dairy, LeTAO and ryokan meals already provide strong coverage.</p><p><strong className="text-white">Fixed times:</strong> 20 Oct 13:00 car pickup, 22 Oct chalet check-in before 18:00, 28 Oct Mahoroba check-in, 29 Oct car return at 13:00, and the 2 Nov flight.</p></div></section></div></main>;
}

function TimetableEnglish() {
  return <main><Hero eyebrow="JP · HOKKAIDO AUTUMN 2026" title="Master Timetable" description="A practical timetable to follow during the trip. It keeps breathing room for six people instead of forcing every fifteen minutes."/><div className="mx-auto max-w-5xl px-5 py-12 sm:px-6"><div className="space-y-7">{timetable.map(day=><section key={day.day} className="overflow-hidden rounded-[28px] bg-white ring-1 ring-[#18352f]/8"><header className="bg-[#18352f] p-6 text-white"><p className="text-[10px] font-bold tracking-[.18em] text-[#f6c85f]">DAY {day.day} · {day.date}</p><h2 className="mt-2 text-xl font-semibold">{day.title}</h2></header><div className="p-5">{day.rows.map(row=><div key={`${row[0]}${row[1]}`} className="grid grid-cols-[100px_1fr] gap-3 border-b border-[#18352f]/8 py-3 text-sm last:border-0"><p className="text-xs font-bold text-[#be5f3a]">{row[0]}</p><p className="text-[#334f48]">{row[1]}</p></div>)}{day.note&&<p className="mt-4 rounded-2xl bg-[#f1d5c4] p-4 text-xs font-semibold leading-6 text-[#6f5145]">{day.note}</p>}</div></section>)}</div><section className="mt-10 rounded-[28px] bg-[#18352f] p-7 text-white"><Clock3 className="text-[#f6c85f]"/><h2 className="mt-5 font-serif text-3xl">How to use this timetable</h2><p className="mt-4 text-sm leading-7 text-white/70">Times are guidance, not military orders. Apart from checkout, Niseko/Mahoroba check-in, the 29 Oct car return and the 2 Nov flight, moving a block by about 30 minutes is fine. Restaurant names are fixed only where they genuinely suit the route.</p></section></div></main>;
}

function BookCheckEnglish() {
  const actionGroups = [["Now → late September","Shortlist the Otaru Cruise; decide whether any Sapporo or Hakodate meal is a must-eat."],["1–5 Oct","Check Mt. Hakodate Route 1, Kosetsuen MOMI-G, Kon'you-sai, important dinners and Niseko seasonal restaurants."],["10–15 Oct","Check Panorama Line winter closure, Hokkaido roads, Hoheikyo changes and cruise seats."],["Before departure","Final check: Jozankei foliage, Hoheikyo, Niseko roads, Kosetsuen, Mt. Hakodate buses, Hokkaido University, Otaru choice and restaurant bookings."]];
  return <main><Hero eyebrow="BOOK LESS · CHECK BETTER" title="Book / Check" description="What still needs confirmation, what may need booking, and when to act. Do not rush to spend now; mark the items that affect routes or seats."/><div className="mx-auto max-w-5xl px-5 py-12 sm:px-6"><section className="rounded-[28px] bg-[#f3d8ce] p-6"><p className="eyebrow">CONFIRMED ROUTE CHANGE</p><h2 className="mt-3 font-serif text-3xl">Mt. Hakodate Ropeway is closed.</h2><p className="mt-4 text-sm leading-7 text-[#694a40]">Closed for maintenance from 20 Oct to 8 Nov. For Days 6–8, use Route 1 bus or taxi on the clearest night. Rental cars cannot climb between 16:00 and 21:00.</p></section><section className="mt-12"><p className="eyebrow">THE NINE CHECKS</p><div className="mt-6 grid gap-4 md:grid-cols-2">{checks.map((row,index)=><article key={row[0]} className="rounded-[24px] bg-white p-5 ring-1 ring-[#18352f]/8"><div className="flex justify-between"><span className="font-serif text-3xl text-[#be5f3a]">{String(index+1).padStart(2,"0")}</span><span className="text-[10px] font-bold text-[#78908a]">{row[1]}</span></div><h2 className="mt-3 text-lg font-bold">{row[0]}</h2><p className="mt-2 text-xs font-bold text-[#be5f3a]">{row[2]}</p><p className="mt-4 text-sm leading-7 text-[#657a74]">{row[3]}</p></article>)}</div></section><section className="mt-12 rounded-[28px] bg-[#18352f] p-7 text-white"><h2 className="font-serif text-3xl">Restaurant bookings</h2><ul className="mt-5 space-y-3 text-sm leading-7 text-white/70"><li>27 Oct Hakodate final dinner · 6 people · book in early October.</li><li>29 Oct first Sapporo dinner · book in early October if choosing a popular Jingisukan restaurant.</li><li>30 Oct Sapporo dinner + popular Shime Parfait · 5 people · early to mid-October.</li><li>31 Oct Otaru Saturday dinner · 5 people · strongly recommended in early October.</li><li>1 Nov Sapporo Final Dinner · 5 people · early to mid-October.</li></ul></section><section className="mt-12"><p className="eyebrow">ACTION CALENDAR</p><div className="mt-6 grid gap-4 md:grid-cols-2">{actionGroups.map(row=><article key={row[0]} className="rounded-[24px] bg-[#e7e8dd] p-6"><h2 className="font-serif text-2xl">{row[0]}</h2><p className="mt-3 text-sm leading-7 text-[#657a74]">{row[1]}</p></article>)}</div></section><section className="mt-10 rounded-[28px] bg-white p-6 ring-1 ring-[#18352f]/8"><h2 className="font-serif text-2xl">Every morning</h2><div className="mt-4 flex flex-wrap gap-2">{["21 Oct Hoheikyo","23 Oct Niseko mountain","25–27 Oct Mt. Hakodate","31 Oct Tenguyama"].map(item=><span key={item} className="rounded-full bg-[#e7e8dd] px-4 py-2 text-xs font-bold">{item}</span>)}</div><p className="mt-4 text-sm text-[#657a74]">Check weather, roads and live cameras only for the day's critical place.</p></section></div></main>;
}

export function EnglishSitePage({ pathname }: { pathname: string }) {
  if (pathname === "/") return <HomeEnglish />;
  if (pathname.startsWith("/itinerary")) return <ItineraryEnglish />;
  if (pathname.startsWith("/summary")) return <SummaryEnglish />;
  if (pathname.startsWith("/timetable")) return <TimetableEnglish />;
  if (pathname.startsWith("/book-check")) return <BookCheckEnglish />;
  return <HomeEnglish />;
}
