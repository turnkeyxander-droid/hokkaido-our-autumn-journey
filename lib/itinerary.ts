export type TimelineItem = {
  time: string;
  title: string;
  note?: string;
  tone?: "travel" | "stay" | "food" | "walk" | "must";
};

export const day1Timeline: TimelineItem[] = [
  { time: "09:30", title: "抵达 New Chitose Airport · CTS", tone: "travel" },
  { time: "09:30–12:15", title: "入境＋取行李＋早餐／午餐＋机场", note: "6 人行李，第一天不赶。", tone: "food" },
  { time: "12:15", title: "前往机场外租车公司", tone: "travel" },
  { time: "13:00", title: "Rental Car Pickup", tone: "travel" },
  { time: "13:00–14:00", title: "手续＋放行李＋熟悉车", tone: "travel" },
  { time: "14:00", title: "出发 → Jozankei", tone: "travel" },
  { time: "约 15:30–16:00", title: "抵达定山溪", tone: "stay" },
  { time: "16:00", title: "MolinHotels201 Check-in", tone: "stay" },
  { time: "16:15–17:15", title: "定山溪温泉街慢散步", note: "月见桥、定山源泉公园、河边、小商店。", tone: "walk" },
  { time: "17:30 后", title: "晚餐", note: "荞麦面／拉面／定食／居酒屋，看到合适的就吃。", tone: "food" },
  { time: "晚餐后", title: "便利店补给", note: "补齐两天水、早餐、零食与车上饮料。", tone: "food" },
  { time: "晚上", title: "回住宿／喝酒／休息", tone: "stay" },
];

export const day2Timeline: TimelineItem[] = [
  { time: "07:30", title: "早餐", tone: "food" },
  { time: "08:15", title: "出门", tone: "travel" },
  { time: "08:30–10:00", title: "Futami Park＋Futami Suspension Bridge＋Nature Trail", tone: "must" },
  { time: "10:00–10:20", title: "小休／回车", tone: "walk" },
  { time: "10:20", title: "前往 Hoheikyo Dam Parking", tone: "travel" },
  { time: "约 10:40", title: "抵达停车场", tone: "travel" },
  { time: "10:45–13:15", title: "Hoheikyo Dam", tone: "must" },
  { time: "13:15", title: "返回 Jozankei", tone: "travel" },
  { time: "13:45–14:45", title: "午餐", note: "荞麦面／咖喱／日式定食；控制约 1 小时。", tone: "food" },
  { time: "15:00–16:15", title: "温泉街／河边／咖啡／自由散步", tone: "walk" },
  { time: "约 16:30", title: "回住宿", tone: "stay" },
  { time: "18:00 左右", title: "晚餐", tone: "food" },
  { time: "晚上", title: "温泉／便利店／喝酒／休息", tone: "stay" },
];

export const day3Timeline: TimelineItem[] = [
  { time: "08:00", title: "早餐＋收拾", tone: "food" },
  { time: "09:00–09:45", title: "Jozankei 最后散步／咖啡", tone: "walk" },
  { time: "10:00", title: "Check-out，正式出发", tone: "stay" },
  { time: "10:35–11:15", title: "Nakayama Pass 中山峠", note: "羊蹄山、休息、Age-imo。", tone: "must" },
  { time: "11:15–12:00", title: "Kimobetsu 喜茂别 countryside", tone: "travel" },
  { time: "12:10–13:25", title: "Fukidashi Park 吹出公园", note: "Day 3 Must Go。", tone: "must" },
  { time: "13:30–14:30", title: "Kyogoku／Makkari 午餐", tone: "food" },
  { time: "14:40–15:25", title: "Makkari 真狩", tone: "walk" },
  { time: "15:30–16:00", title: "Niseko Town 补给", tone: "food" },
  { time: "16:15–16:45", title: "Taki – Annupuri Riverside Chalet Check-in", tone: "stay" },
  { time: "16:45–17:30", title: "放行李＋休息", tone: "stay" },
  { time: "17:30 后", title: "自由选择：Chalet Night／Hirafu Evening", tone: "walk" },
  { time: "约 18:00–19:30", title: "晚餐", tone: "food" },
  { time: "19:30–21:00", title: "Hirafu 散步／喝东西／shopping／超市", tone: "walk" },
  { time: "约 21:00", title: "回 Annupuri Chalet", tone: "stay" },
  { time: "晚上", title: "Chalet 喝酒聊天", tone: "stay" },
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

