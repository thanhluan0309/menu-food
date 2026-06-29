import type { MenuItem, RestaurantInfo } from "@/types/menu";

const u = (id: string) =>
  `https://images.unsplash.com/${id}?w=600&q=80&auto=format&fit=crop`;

export const restaurantInfo: RestaurantInfo = {
  name: "Bếp Lửa Hồng",
  slogan: "Hương vị thịt nướng — Kết nối yêu thương",
  address: "123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh",
  phone: "028 3822 1234",
  hours: "10:00 — 22:00 (Thứ 2 — Chủ Nhật)",
};

export const appetizers: MenuItem[] = [
  {
    name: "Kim Chi Tự Làm",
    desc: "Kim chi cải thảo lên men 3 ngày, chua giòn tự nhiên",
    price: 35000,
    image: u("photo-1569050467447-ce54b3bbc37d"),
  },
  {
    name: "Salad Bò Tái Chanh",
    desc: "Thịt bò tái trộn rau sống, chanh tươi, ớt sừng",
    price: 65000,
    image: u("photo-1540420773420-3366772f4999"),
  },
  {
    name: "Súp Bắp Bò Hầm",
    desc: "Bắp bò hầm mềm với cà rốt, khoai tây, tiêu đen",
    price: 55000,
    image: u("photo-1547592166-23ac45744acd"),
  },
  {
    name: "Chả Giò Tôm Thịt",
    desc: "Chả giò vàng giòn nhân tôm, thịt heo, miến",
    price: 75000,
    tag: "Bán chạy",
    image: u("photo-1535399831218-d5bd36d1a6b3"),
  },
];

export const beef: MenuItem[] = [
  {
    name: "Bò Ba Chỉ Nướng",
    desc: "Ba chỉ bò Mỹ ướp sả tỏi, nướng than hoa",
    price: 189000,
    tag: "Bán chạy",
    image: u("photo-1558030006-450675393462"),
  },
  {
    name: "Thăn Nội Bò Wagyu A4",
    desc: "Wagyu nhập khẩu, chấm muối ớt xanh",
    price: 350000,
    tag: "Đặc biệt",
    image: u("photo-1600891964092-4316c288032e"),
  },
  {
    name: "Sườn Bò Non",
    desc: "Short rib bò Úc, ướp 12 tiếng, mềm tan",
    price: 245000,
    image: u("photo-1529694157872-4e0c0f3b238b"),
  },
  {
    name: "Lưỡi Bò Nướng",
    desc: "Lưỡi bò thái mỏng, ướp dầu vừng Hàn Quốc",
    price: 165000,
    image: u("photo-1555939594-58d7cb561ad1"),
  },
  {
    name: "Bò Cuộn Nấm Kim Châm",
    desc: "Thịt bò mỏng cuộn nấm kim châm, sốt teriyaki",
    price: 175000,
    image: u("photo-1590301157890-4810ed352733"),
  },
];

export const porkChicken: MenuItem[] = [
  {
    name: "Heo Ba Chỉ Nướng Mật Ong",
    desc: "Ba chỉ heo ướp mật ong + gừng, nướng vàng đều",
    price: 125000,
    tag: "Bán chạy",
    image: u("photo-1529692236671-f1f6cf9683ba"),
  },
  {
    name: "Cổ Heo Cắt Khúc",
    desc: "Cổ heo áp chảo trước khi nướng, giòn ngoài mềm trong",
    price: 145000,
    image: u("photo-1504674900247-0877df9cc836"),
  },
  {
    name: "Gà Thả Đồi Nướng Muối",
    desc: "Gà ta nguyên con (1kg), nướng muối ớt xanh Tây Nguyên",
    price: 220000,
    image: u("photo-1562967916-eb82221dfb92"),
  },
  {
    name: "Đùi Gà Nướng Sả Ớt",
    desc: "Đùi gà ướp sả tươi, ớt hiểm, dầu ăn",
    price: 115000,
    image: u("photo-1432139509613-5c4255815697"),
  },
  {
    name: "Cánh Gà Nướng Teriyaki",
    desc: "Cánh gà sốt teriyaki Nhật, rắc mè rang",
    price: 95000,
    image: u("photo-1527477396000-e27163b481c2"),
  },
];

export const combos: MenuItem[] = [
  {
    name: "Set Đôi Lãng Mạn",
    desc: "Bò ba chỉ 200g + heo mật ong 200g + rau kèm + 2 cơm + 2 nước",
    price: 480000,
    tag: "Tiết kiệm",
    image: u("photo-1414235077428-338989a2e8c0"),
  },
  {
    name: "Set Gia Đình 4 Người",
    desc: "Wagyu 300g + sườn bò 300g + gà đùi 4 cái + đầy đủ phụ kiện",
    price: 980000,
    tag: "Tiết kiệm",
    image: u("photo-1555939594-58d7cb561ad1"),
  },
  {
    name: "Set BBQ Thập Cẩm",
    desc: "5 loại thịt đặc trưng 600g, phù hợp 3-4 người",
    price: 750000,
    image: u("photo-1558030006-450675393462"),
  },
  {
    name: "Lẩu Thái Hải Sản",
    desc: "Nước dùng chua cay, tôm hùm nhỏ, mực, sò điệp, nấm",
    price: 390000,
    image: u("photo-1547592166-23ac45744acd"),
  },
];

export const drinks: MenuItem[] = [
  {
    name: "Bia Hơi Hà Nội",
    desc: "Bia hơi tươi, nhập từ Hà Nội mỗi ngày",
    price: 15000,
    image: u("photo-1558618666-fcd25c85cd64"),
  },
  {
    name: "Bia Tiger Lon",
    desc: "Tiger 330ml, uống kèm đá",
    price: 30000,
    image: u("photo-1532634922-8fe0b757fb13"),
  },
  {
    name: "Soju Chamsul Original",
    desc: "Soju Hàn Quốc 360ml, 17.5 độ",
    price: 85000,
    image: u("photo-1551538827-9c037cb4f32a"),
  },
  {
    name: "Nước Ép Dưa Hấu",
    desc: "Dưa hấu tươi xay, không đường",
    price: 35000,
    image: u("photo-1622597467836-f3285f2131b8"),
  },
  {
    name: "Trà Đào Cam Sả",
    desc: "Trà hoa đào pha cam tươi + sả",
    price: 45000,
    tag: "Mới",
    image: u("photo-1499638673689-79a0b5115d87"),
  },
];

export const desserts: MenuItem[] = [
  {
    name: "Kem Vani Nướng",
    desc: "Kem vani đặt lên vỉ nướng, rưới caramel nóng",
    price: 55000,
    tag: "Độc đáo",
    image: u("photo-1551024506-0bccd828d307"),
  },
  {
    name: "Chè Bà Ba",
    desc: "Khoai, chuối, bột lọc trong nước cốt dừa béo ngậy",
    price: 40000,
    image: u("photo-1579954115563-e72bf1381629"),
  },
  {
    name: "Bánh Mì Bơ Tỏi Nướng",
    desc: "Bánh mì nướng bơ tỏi, ăn kèm tương cà",
    price: 25000,
    image: u("photo-1509440159596-0249088772ff"),
  },
];
