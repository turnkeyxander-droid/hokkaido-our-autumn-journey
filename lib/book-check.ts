export type Priority = "ready" | "watch" | "book" | "change";

export type StatusItem = {
  title: string;
  date: string;
  status: string;
  next: string;
  priority: Priority;
};

export type CheckDetail = {
  number: number;
  title: string;
  date: string;
  priority: Priority;
  verdict: string;
  paragraphs: string[];
  facts?: string[];
  actions: string[];
  planB?: string;
  sources: string[];
};

export const statusItems: StatusItem[] = [
  { title: "Hoheikyo Dam", date: "21 Oct", status: "2026 已公布", next: "不用预订，现场搭 Electric Bus", priority: "ready" },
  { title: "Lake Toya Fireworks", date: "24 Oct", status: "2026 已确认", next: "不用订票，照常去", priority: "ready" },
  { title: "函馆山", date: "25–27 Oct", status: "Ropeway 确定停驶", next: "10月初查登山巴士班次", priority: "change" },
  { title: "Kosetsuen MOMI-G", date: "26 Oct", status: "2026 日期未正式出", next: "10月初再确认活动日期", priority: "watch" },
  { title: "Niseko Panorama Line", date: "23 Oct", status: "可能季节性封路", next: "10月中再查道路状况", priority: "watch" },
  { title: "北大金叶祭", date: "30 Oct 附近", status: "2026 日期未公布", next: "10月初～中旬再查", priority: "watch" },
  { title: "Otaru Canal Cruise", date: "31 Oct", status: "班次已公布", next: "如果决定坐，建议提前订", priority: "book" },
  { title: "Tenguyama", date: "31 Oct", status: "2026 营运已确认", next: "不用订，当天天气好才上", priority: "ready" },
  { title: "Beer Museum", date: "1 Nov", status: "已有营业资料", next: "不是要订，可现场", priority: "ready" },
];

export const checkDetails: CheckDetail[] = [
  {
    number: 1,
    title: "Hoheikyo Dam",
    date: "21 Oct",
    priority: "ready",
    verdict: "现在不用做任何购票",
    paragraphs: [
      "2026 Hoheikyo 秋季交通已正式公布，10/3–10/25 营运。你们有车，所以最合理的方式是自驾到 Hoheikyo Dam Parking，再现场买 Electric Bus 来回票。",
      "成人来回 ¥1,200。官方 Hoheikyo Dam Liner 从定山溪观光案内所出发，只能当日先到先得，不能现在网上预约。",
    ],
    actions: ["10/20 晚上或 10/21 早餐时查看当天停车／营运状况", "不用预先付款"],
    sources: ["Jozankei 2026 五大红叶交通官方页", "Hoheikyo 官方网站"],
  },
  {
    number: 2,
    title: "Niseko Panorama Line / Shinsen-numa",
    date: "23 Oct",
    priority: "watch",
    verdict: "一定要再确认的第一名",
    paragraphs: [
      "问题不是门票，而是 10 月下旬可能因为降雪提早封路。",
      "去年曾发生原定 10/24 冬季封路，却因降雪在 10/20 提早封闭的情况。因此 23 Oct 不能 100% 假设道路一定开放；若通往 Shinsen-numa／Goshiki 一带的高海拔山路关闭，就改走低海拔 Plan B。",
    ],
    actions: ["10/15 左右第一次查", "10/22 晚上再查一次", "10/23 早上出发前最后确认"],
    planB: "Hangetsu Lake → Hirafu → Kutchan → Milk Kobo",
    sources: ["Niseko Resort Tourist Association 官方网站", "北海道道路即时资讯"],
  },
  {
    number: 3,
    title: "Lake Toya Long Run Fireworks",
    date: "24 Oct",
    priority: "ready",
    verdict: "已经可以安心，不需要预订",
    paragraphs: [
      "2026 官方已确认活动期为 4/28–10/31，每晚 20:45–21:05，地点在 Toyako Onsen 湖畔。",
      "10/24 正好在活动期内。一般湖边观看免费、不需门票、不需预约；主要只有强风等状况才可能取消。",
    ],
    actions: ["现在不用做", "10/24 下午 check-in 前后查看当天是否照常"],
    sources: ["Lake Toya Long Run Fireworks 官方页"],
  },
  {
    number: 4,
    title: "函馆山夜景",
    date: "25–27 Oct",
    priority: "change",
    verdict: "这个要修改原行程",
    paragraphs: [
      "Ropeway 不用等，也不会开。2026 官方明确公布：10/20–11/8 函馆山 Ropeway 停驶维修，因此不要再安排任何 Ropeway 票。",
      "正确做法是 Route 1 函馆山登山巴士。Ropeway 停驶期间可用 Route 1、Taxi 或 Tour bus；Rental car 在 16:00–21:00 禁止上山。",
      "登山巴士从函馆站前 4 号乘车处出发，单程约 30 分钟，现行资料为单程成人 ¥700。函馆巴士说明 10/1 之后的时刻表会另行公布。",
    ],
    facts: ["优先顺序：Route 1 → Taxi → 函馆夜景号", "三晚里选择天气与能见度最好的一晚"],
    actions: ["10/1–10/5 查 Route 1 正式秋季 timetable", "10/24 或 25 白天查看函馆山天气／visibility", "不需现在订 Ropeway"],
    planB: "如不想挤 Route 1，可考虑能预约并有电子票的函馆夜景号；当天按 5／6 人需求再选。",
    sources: ["函馆山 2026 交通官方资讯", "函馆巴士 Route 1／函馆山交通页", "函馆山官方 Live／运行资讯"],
  },
  {
    number: 5,
    title: "Kosetsuen 香雪园 MOMI-G Festa",
    date: "26 Oct",
    priority: "watch",
    verdict: "要再确认 2026 正式日期",
    paragraphs: [
      "官方目前公开资讯仍是 2025 年 10/17–11/3。活动每年通常在 10 月下旬至 11 月上旬，夜间约 16:00–21:00；2026 确切日期尚未更新。",
      "目前只能说季节上高度吻合，不能说 2026 日期已经 confirm。过往为免费、免预约。",
    ],
    actions: ["10/1 左右查一次", "若还没更新，10/15 再查", "确认 2026 是否仍在典型活动窗口"],
    sources: ["Hakobura MOMI-G Festa 官方活动页", "Travel Hakodate 秋季活动页"],
  },
  {
    number: 6,
    title: "北海道大学金叶祭 Kon’you-sai",
    date: "30 Oct",
    priority: "watch",
    verdict: "这个也要等 2026 日期",
    paragraphs: [
      "北大官方说明金叶祭通常在 10 月下旬至 11 月上旬，地点为札幌校园银杏大道；2026 正式日期尚未看到公布。",
      "这不影响我们去银杏大道：金叶祭是 bonus，银杏大道本身才是主行程。",
    ],
    actions: ["10/1–10/10 查第一次", "10/20 左右再查一次", "若 30 Oct 刚好有活动，再调整抵达时间"],
    sources: ["北海道大学学生／活动公告", "北海道大学 University Festivals 官方介绍"],
  },
  {
    number: 7,
    title: "Otaru Canal Night Cruise",
    date: "31 Oct",
    priority: "book",
    verdict: "目前最建议真的提前订的一项",
    paragraphs: [
      "2026 官方 timetable 已公布，10/16–31 夜航有 18:00、18:30、19:00、19:30、20:00，航程约 40 分钟。",
      "你们是 10/31 星期六加 Night Cruise。官方提醒周末、假期与 night cruise 容易满，建议预约。网上票可售至开航前 1 小时，现场票至开航前 15 分钟，但不代表当天一定有位。",
      "目前倾向先不订，因为 Tenguyama 是很强的晴天选项。到 10/24–26 查看 31 Oct 长期预报后再选，但要接受热门时段可能满。",
    ],
    facts: ["天气很好 → Tenguyama", "山上视野差／阴天 → Night Cruise"],
    actions: ["若已决定 Canal Cruise > Tenguyama：现在或最迟 10 月初预订", "若保留天气选择：10/24–26 看长期预报后决定"],
    sources: ["Otaru Canal Cruise 2026 Timetable", "Otaru Canal Cruise 官方网站／订票"],
  },
  {
    number: 8,
    title: "Otaru Tenguyama Ropeway",
    date: "31 Oct",
    priority: "ready",
    verdict: "不要提前锁票",
    paragraphs: [
      "2026 官方已确认夏季营运至 11/3，所以 10/31 在正常季节内。营运时间上行至 20:48、下行至 21:00，成人来回目前 ¥1,800。",
    ],
    actions: ["现在不用买", "10/31 下午看天气与山顶能见度", "天气好才去"],
    sources: ["Otaru Tenguyama Ropeway 官方营业时间／票价"],
  },
  {
    number: 9,
    title: "Sapporo Beer Museum",
    date: "1 Nov",
    priority: "ready",
    verdict: "这个不用抢",
    paragraphs: [
      "目前官方营业时间为 11:00–18:00，最后入馆 17:30。现场可能需要等候，但不是必须提前数月抢的景点；官方也提供各类 ticket information。",
    ],
    actions: ["10 月下旬才决定要不要去", "若 Day 13 大家已累，直接改 shopping", "不要现在绑死"],
    sources: ["Sapporo Beer Museum 官方资讯", "参观／Ticket 资讯"],
  },
];

export const restaurantBookings = [
  { date: "10/27", meal: "Hakodate 最后晚餐", people: "6 人", timing: "建议 10 月上旬订" },
  { date: "10/29", meal: "Sapporo 第一晚", people: "如吃热门 Jingisukan", timing: "建议 10 月上旬订" },
  { date: "10/30", meal: "Sapporo dinner + 热门 Shime Parfait", people: "5 人", timing: "建议 10 月上旬～中旬" },
  { date: "10/31", meal: "Otaru Saturday dinner", people: "5 人＋星期六", timing: "强烈建议 10 月初订" },
  { date: "11/1", meal: "Sapporo Final Dinner", people: "5 人", timing: "建议 10 月初～中旬" },
];

export type ActionGroup = {
  label: string;
  subtitle: string;
  items: { id: string; text: string; level: "must" | "nice" }[];
};

export const actionGroups: ActionGroup[] = [
  {
    label: "现在～9月底",
    subtitle: "先不用花钱",
    items: [
      { id: "now-cruise", text: "把 Otaru Cruise 列入 shortlist", level: "nice" },
      { id: "now-food", text: "决定有没有一定要吃的札幌／函馆餐厅", level: "nice" },
    ],
  },
  {
    label: "10/1–10/5",
    subtitle: "第一轮最重要",
    items: [
      { id: "oct1-route1", text: "查函馆山 Route 1 正式 10 月 timetable", level: "must" },
      { id: "oct1-momig", text: "查 Kosetsuen MOMI-G 2026 日期", level: "must" },
      { id: "oct1-konyou", text: "查北海道大学金叶祭", level: "must" },
      { id: "oct1-dinner", text: "开始订 Hakodate／Sapporo／Otaru 重要晚餐", level: "nice" },
      { id: "oct1-niseko-food", text: "查 Niseko 10 月餐厅 seasonal opening", level: "nice" },
    ],
  },
  {
    label: "10/10–10/15",
    subtitle: "道路与座位",
    items: [
      { id: "oct10-panorama", text: "查 Niseko Panorama Line 冬季封路公告", level: "must" },
      { id: "oct10-road", text: "查北海道道路即时资讯", level: "must" },
      { id: "oct10-hoheikyo", text: "再确认 Hoheikyo Electric Bus 是否有临时变动", level: "nice" },
      { id: "oct10-cruise", text: "若 Otaru Cruise 想确保座位，在这段时间预订", level: "nice" },
    ],
  },
  {
    label: "10/20 出发前",
    subtitle: "最后一次总检查",
    items: [
      { id: "final-jozankei", text: "Jozankei 红叶状况", level: "nice" },
      { id: "final-hoheikyo", text: "Hoheikyo 营运", level: "must" },
      { id: "final-niseko", text: "Niseko 道路", level: "must" },
      { id: "final-momig", text: "Kosetsuen 活动", level: "nice" },
      { id: "final-hakodate", text: "函馆山巴士", level: "must" },
      { id: "final-hokudai", text: "北大银杏／金叶祭", level: "nice" },
      { id: "final-otaru", text: "Otaru Cruise／Tenguyama 选择", level: "nice" },
      { id: "final-dinners", text: "各日已订餐厅", level: "nice" },
    ],
  },
];

export const morningChecks = ["10/21 Hoheikyo", "10/23 Niseko mountain", "10/25–27 Mt Hakodate", "10/31 Tenguyama"];
