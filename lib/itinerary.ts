export type TimelineItem = {
  time: string;
  title: string;
  titleEn: string;
  note?: string;
  noteEn?: string;
  details: string[];
  detailsEn: string[];
  tone?: "travel" | "stay" | "food" | "walk" | "must";
};

export const day1Timeline: TimelineItem[] = [
  { time: "09:30", title: "抵达 New Chitose Airport 新千岁机场 · CTS", titleEn: "Arrive at New Chitose Airport · CTS", details: ["落地后跟着入境指示前进，六个人保持一起。"], detailsEn: ["Follow the immigration signs and keep the group of six together."], tone: "travel" },
  { time: "09:30–12:15", title: "入境＋取行李＋早餐／午餐＋机场", titleEn: "Immigration, luggage and first meal at the airport", note: "6 人行李，第一天不赶。", noteEn: "Six people and their luggage: no rushing on Day 1.", details: ["完成入境、取行李，并在机场解决早餐或午餐。", "这一段是缓冲，不把时间排满。"], detailsEn: ["Clear immigration, collect luggage and have breakfast or lunch at the airport.", "This block is intentional buffer time."], tone: "food" },
  { time: "12:15", title: "前往机场外租车公司", titleEn: "Head to the off-airport rental-car office", details: ["预留移动与接驳时间，目标 13:00 到租车公司。"], detailsEn: ["Allow time for the transfer; aim to reach the rental office by 13:00."], tone: "travel" },
  { time: "13:00", title: "Rental Car Pickup 取车", titleEn: "Rental-car pickup", details: ["确认车辆、行李空间与取车手续。"], detailsEn: ["Confirm the vehicle, luggage space and pickup procedure."], tone: "travel" },
  { time: "13:00–14:00", title: "手续＋放行李＋熟悉车", titleEn: "Paperwork, load luggage and learn the car", details: ["六人行李上车后先熟悉车辆；14:00 才按正式离开来规划。"], detailsEn: ["Load luggage and get familiar with the car; plan on a 14:00 departure."], tone: "travel" },
  { time: "14:00", title: "出发 → Jozankei 定山溪", titleEn: "Depart for Jozankei", details: ["从租车公司正式出发前往 Jozankei 定山溪。"], detailsEn: ["Leave the rental office and drive to Jozankei."], tone: "travel" },
  { time: "约 15:30–16:00", title: "抵达 Jozankei 定山溪", titleEn: "Arrive in Jozankei", details: ["抵达后先以住宿和停车为优先，不急着追景点。"], detailsEn: ["Prioritise the stay and parking; do not rush into sightseeing."], tone: "stay" },
  { time: "16:00", title: "MolinHotels201 Check-in 入住", titleEn: "Check in at MolinHotels201", details: ["放好行李，确认住宿环境后再出门。"], detailsEn: ["Settle the luggage and check the accommodation before heading out."], tone: "stay" },
  { time: "16:15–17:15", title: "Jozankei Onsen 定山溪温泉街慢散步", titleEn: "Slow walk around Jozankei Onsen", note: "Tsukimi Bridge 月见桥、Jozankei Gensen Park 定山源泉公园、河边、小商店。", noteEn: "Tsukimi Bridge, Jozankei Gensen Park, the riverside and small shops.", details: ["只沿温泉街慢慢走，不把它变成赶景点。", "Futami Suspension Bridge 二见吊桥留给 Day 2。"], detailsEn: ["Keep this as a gentle onsen-town walk.", "Save Futami Suspension Bridge for Day 2."], tone: "walk" },
  { time: "17:30 后", title: "晚餐 Dinner", titleEn: "Dinner", note: "荞麦面／拉面／定食／居酒屋，看到合适的就吃。", noteEn: "Soba, ramen, set meals or an izakaya—choose what looks suitable.", details: ["不指定名店，也不为某家餐厅再开 20 分钟车。"], detailsEn: ["No fixed restaurant and no extra 20-minute drive for a particular place."], tone: "food" },
  { time: "晚餐后", title: "便利店补给 Convenience-store supplies", titleEn: "Convenience-store supply stop", note: "补齐两天水、早餐、零食与车上饮料。", noteEn: "Buy two days of water, breakfast, snacks and car drinks.", details: ["一次补齐，避免隔天刚出发又停便利店。"], detailsEn: ["Buy everything in one stop so Day 2 can start smoothly."], tone: "food" },
  { time: "晚上", title: "回住宿／喝酒／休息", titleEn: "Return to the stay, have a drink and rest", details: ["第一天以休息收尾，为 Day 2 的红叶行程留体力。"], detailsEn: ["End Day 1 with rest before the autumn itinerary on Day 2."], tone: "stay" },
];

export const day2Timeline: TimelineItem[] = [
  { time: "07:30", title: "早餐 Breakfast", titleEn: "Breakfast", details: ["住宿附近吃早餐，为两个 Must Go 留足时间。"], detailsEn: ["Have breakfast near the stay and keep enough time for both Must Go stops."], tone: "food" },
  { time: "08:15", title: "出门／早上复核", titleEn: "Leave and run the morning checks", details: ["先看天气、Hoheikyo Electric Bus 丰平峡电气巴士与停车场情况。"], detailsEn: ["Check the weather, Hoheikyo Electric Bus operation and parking conditions."], tone: "travel" },
  { time: "08:30–10:00", title: "Futami Park 二见公园＋Futami Suspension Bridge 二见吊桥＋Nature Trail", titleEn: "Futami Park, Suspension Bridge and Nature Trail", details: ["舒服走、拍照、看红叶，不强迫走完整条 2.5km 自然步道。", "这是 Day 2 Must Go 01。"], detailsEn: ["Walk, photograph and enjoy the autumn leaves; the full 2.5 km trail is optional.", "This is Day 2 Must Go 01."], tone: "must" },
  { time: "10:00–10:20", title: "小休／回车", titleEn: "Short rest and return to the car", details: ["喝水、整理后再转往 Hoheikyo Dam 丰平峡水库。"], detailsEn: ["Take a water break before driving to Hoheikyo Dam."], tone: "walk" },
  { time: "10:20", title: "前往 Hoheikyo Dam Parking 丰平峡停车场", titleEn: "Drive to Hoheikyo Dam Parking", details: ["自驾只到停车场，之后必须换乘 Electric Bus。"], detailsEn: ["Drive only as far as the car park, then transfer to the Electric Bus."], tone: "travel" },
  { time: "约 10:40", title: "抵达 Hoheikyo Dam Parking 丰平峡停车场", titleEn: "Arrive at Hoheikyo Dam Parking", details: ["现场购买 Electric Bus 往返票，不需提前网购。"], detailsEn: ["Buy the Electric Bus round-trip ticket on site; no advance online purchase is needed."], tone: "travel" },
  { time: "10:45–13:15", title: "Hoheikyo Dam 丰平峡水库", titleEn: "Hoheikyo Dam", details: ["乘 Electric Bus 进入，预留约 2–2.5 小时。", "看 Lake Jozan 定山湖、水库、Senjo-iwa 千丈岩、山谷与红叶。"], detailsEn: ["Enter by Electric Bus and allow about 2–2.5 hours.", "See Lake Jozan, the dam, Senjo-iwa, the valley and autumn foliage."], tone: "must" },
  { time: "13:15", title: "返回 Jozankei 定山溪", titleEn: "Return to Jozankei", details: ["两个 Must Go 完成后，下午放慢。"], detailsEn: ["Slow the pace after completing both Must Go stops."], tone: "travel" },
  { time: "13:45–14:45", title: "午餐 Lunch", titleEn: "Lunch", note: "荞麦面／咖喱／日式定食；控制约 1 小时。", noteEn: "Soba, curry or a Japanese set meal; keep it to about one hour.", details: ["不锁定指定餐厅，看到合适的就吃。"], detailsEn: ["No fixed restaurant; choose a suitable place on the day."], tone: "food" },
  { time: "15:00–16:15", title: "温泉街／河边／咖啡／自由散步", titleEn: "Onsen town, riverside, café or free walk", details: ["补走 Jozankei Shrine 定山溪神社、Gensen Park、Tsukimi Bridge 或找 cafe 坐一小时。"], detailsEn: ["Visit Jozankei Shrine, Gensen Park or Tsukimi Bridge, or simply sit in a café."], tone: "walk" },
  { time: "约 16:30", title: "回 MolinHotels201 住宿", titleEn: "Return to MolinHotels201", details: ["回住宿休息或泡汤，晚餐前不再塞景点。"], detailsEn: ["Rest or enjoy the onsen; do not add another attraction before dinner."], tone: "stay" },
  { time: "18:00 左右", title: "晚餐 Dinner", titleEn: "Dinner", details: ["回到定山溪慢节奏，晚餐不锁定名店。"], detailsEn: ["Keep the slow Jozankei pace; no fixed restaurant."], tone: "food" },
  { time: "晚上", title: "温泉／便利店／喝酒／休息", titleEn: "Onsen, convenience store, drinks and rest", details: ["确认明天早餐与车上饮料已经备好。"], detailsEn: ["Make sure breakfast and car drinks for tomorrow are ready."], tone: "stay" },
];

export const day3Timeline: TimelineItem[] = [
  { time: "08:00", title: "早餐＋收拾", titleEn: "Breakfast and pack up", details: ["吃早餐并整理六个人的行李。"], detailsEn: ["Have breakfast and organise the luggage for six people."], tone: "food" },
  { time: "09:00–09:45", title: "Jozankei 定山溪最后散步／咖啡", titleEn: "Final Jozankei walk or coffee", details: ["只做住宿附近的最后散步或喝咖啡，不延误退房。"], detailsEn: ["Keep the final walk or coffee close to the stay and do not delay checkout."], tone: "walk" },
  { time: "10:00", title: "MolinHotels201 Check-out，正式出发", titleEn: "Check out of MolinHotels201 and depart", details: ["退房后正式开始前往 Niseko 二世谷的 road trip。"], detailsEn: ["Begin the road trip to Niseko after checkout."], tone: "stay" },
  { time: "10:35–11:15", title: "Nakayama Pass 中山峠", titleEn: "Nakayama Pass", note: "Mt. Yotei 羊蹄山、休息、Age-imo。", noteEn: "Mt. Yotei, a rest stop and Age-imo.", details: ["停 Michi-no-Eki Bōyō Nakayama，天气清时看 Mt. Yotei 羊蹄山。", "建议约 30–40 分钟；免费，不需预约。"], detailsEn: ["Stop at Michi-no-Eki Bōyō Nakayama and look for Mt. Yotei in clear weather.", "Allow about 30–40 minutes; free, no reservation."], tone: "must" },
  { time: "11:15–12:00", title: "Kimobetsu 喜茂别 countryside", titleEn: "Kimobetsu countryside", details: ["这是自然行驶段；看到漂亮农田、农舍或羊蹄山角度时，只在安全合法位置短停。"], detailsEn: ["This is a scenic driving section; stop only at safe, legal places for farmland or Mt. Yotei views."], tone: "travel" },
  { time: "12:10–13:25", title: "Fukidashi Park 吹出公园", titleEn: "Fukidashi Park", note: "Day 3 Must Go。", noteEn: "Day 3 Must Go.", details: ["森林、木桥、泉水、苔藓与秋叶；可自带空水瓶装水。", "建议约 1 小时至 1 小时 15 分钟；免费，不需预约。"], detailsEn: ["Forest, wooden bridges, spring water, moss and autumn leaves; bring an empty bottle if desired.", "Allow about 1 to 1¼ hours; free, no reservation."], tone: "must" },
  { time: "13:30–14:30", title: "Kyogoku 京极／Makkari 真狩午餐", titleEn: "Lunch in Kyogoku or Makkari", details: ["不锁定名店；荞麦面、乌冬、定食、小洋食店或道之驿料理都可。"], detailsEn: ["No fixed restaurant; soba, udon, set meals, a small yoshoku shop or roadside-station food all work."], tone: "food" },
  { time: "14:40–15:25", title: "Makkari 真狩", titleEn: "Makkari", details: ["慢慢经过羊蹄山脚下的农村，可停 Michi-no-Eki Makkari Flower Center。", "天气好就多留；羊蹄山被云盖就缩短。"], detailsEn: ["Pass slowly through the rural area below Mt. Yotei; Michi-no-Eki Makkari Flower Center is an option.", "Stay longer in clear weather; shorten the stop if Mt. Yotei is hidden."], tone: "walk" },
  { time: "15:30–16:00", title: "Niseko Town 二世谷补给", titleEn: "Supply stop in Niseko Town", details: ["为两晚 chalet 购买水、早餐、简单食物与饮料。"], detailsEn: ["Buy water, breakfast, simple food and drinks for two chalet nights."], tone: "food" },
  { time: "16:15–16:45", title: "Taki – Annupuri Riverside Chalet Check-in 入住", titleEn: "Check in at Taki – Annupuri Riverside Chalet", details: ["目标 16:15–16:45 抵达；最晚必须在 18:00 前完成入住。"], detailsEn: ["Aim to arrive at 16:15–16:45; check-in must be completed before 18:00."], tone: "stay" },
  { time: "16:45–17:30", title: "放行李＋休息", titleEn: "Unload luggage and rest", details: ["停车、找入口、搬行李、看房间并熟悉厨房和附近。"], detailsEn: ["Park, find the entrance, carry luggage in and get familiar with the rooms, kitchen and area."], tone: "stay" },
  { time: "17:30 后", title: "自由选择：Chalet Night／Hirafu Evening", titleEn: "Choose: Chalet Night or Hirafu Evening", details: ["累了就留在 chalet；还有精神才去 Hirafu 比罗夫。"], detailsEn: ["Stay at the chalet if tired; go to Hirafu only if the group still has energy."], tone: "walk" },
  { time: "约 18:00–19:30", title: "晚餐 Dinner", titleEn: "Dinner", details: ["可在 chalet 简单煮或买熟食；若去 Hirafu，10 月初再确认餐厅营业与预约。"], detailsEn: ["Cook simply or buy prepared food at the chalet; for Hirafu, recheck October opening and reservations."], tone: "food" },
  { time: "19:30–21:00", title: "Hirafu 比罗夫散步／喝东西／shopping／超市", titleEn: "Hirafu walk, drinks, shopping or supermarket", details: ["这是 off-season 夜晚，不把它安排成必须完成的景点。"], detailsEn: ["It is an off-season evening, not a must-complete attraction."], tone: "walk" },
  { time: "约 21:00", title: "回 Annupuri Chalet 安努普利小屋", titleEn: "Return to the Annupuri chalet", details: ["回程前完成最后补给，约 21:00–21:30 抵达。"], detailsEn: ["Finish the final supply stop before returning around 21:00–21:30."], tone: "stay" },
  { time: "晚上", title: "Chalet 喝酒聊天", titleEn: "Drinks and conversation at the chalet", details: ["晚上本身就是旅行，不需要再加夜间景点。"], detailsEn: ["The evening at the chalet is part of the trip; no extra night attraction is needed."], tone: "stay" },
];

export const day1Route = { mapQuery: "New Chitose Airport to Jozankei Onsen", origin: "New Chitose Airport", destination: "Jozankei Onsen" };
export const day2Route = { mapQuery: "Futami Suspension Bridge Jozankei to Hoheikyo Dam Parking", origin: "Futami Suspension Bridge Jozankei", destination: "Hoheikyo Dam Parking" };
export const day3Route = {
  mapQuery: "Nakayama Pass Hokkaido Fukidashi Park Makkari Niseko",
  origin: "Jozankei Onsen",
  destination: "Taki Annupuri Riverside Chalet",
  waypoints: ["Nakayama Pass Hokkaido", "Fukidashi Park Kyogoku", "Makkari Hokkaido", "Niseko Town"],
};

export const day3SupplyList = ["北海道牛奶", "鸡蛋", "早餐", "水果", "肉／熟食", "Cheese", "泡面", "Coffee", "Sapporo Classic", "Highball", "Ice", "明天车上的水"];

export const convenienceList = ["北海道牛奶／咖啡牛奶", "水、茶", "啤酒／Highball", "零食、饭团", "明天早餐", "车上饮料"];

