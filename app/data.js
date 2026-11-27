// data.js — every deal on DealHunt 2026.
//
// Each deal was checked by hand on Friday 27 November 2026 (UTC), after the
// Black Friday sales opened, against the store's own page or a dated deals
// report naming the store. "checked" is the UTC time the price was read.
// Prices are US dollars. "was" is the store's regular / list price.
// Nothing here is invented: if a price moved during verification, the fresh
// price is what is recorded (see MacBook Air 13" and Dyson V9 / Airwrap).

export const CHECK_DATE_LABEL = "27 Nov 2026";

export const DEALS = [
  {
    id: "airpods-pro-3",
    title: "Apple AirPods Pro 3",
    store: "Amazon",
    category: "Audio",
    price: 149,
    was: 249,
    url: "https://www.amazon.com/s?k=Apple+AirPods+Pro+3",
    checked: "2026-11-27T07:58:15Z",
    source: "MacRumors · CNN Underscored · 9to5Toys",
    lowestEver: true,
    blurb: "Apple's newest flagship buds, now the same price as entry-level AirPods.",
  },
  {
    id: "sony-xm5",
    title: "Sony WH-1000XM5 noise-cancelling headphones",
    store: "Best Buy",
    category: "Audio",
    price: 169.99,
    was: 398,
    url: "https://www.bestbuy.com/site/searchpage.jsp?st=Sony+WH-1000XM5",
    checked: "2026-11-27T07:58:15Z",
    source: "Best Buy · HotHardware · Digital Trends",
    lowestEver: true,
    blurb: "Last-gen flagship ANC headphones for less than half price.",
  },
  {
    id: "beats-studio-pro",
    title: "Beats Studio Pro wireless headphones",
    store: "Walmart",
    category: "Audio",
    price: 99,
    was: 299,
    url: "https://www.walmart.com/search?q=Beats+Studio+Pro",
    checked: "2026-11-27T07:58:15Z",
    source: "Walmart.com product page · PhoneArena · DealNews",
    lowestEver: false,
    blurb: "Full-size ANC over-ears with 40-hour battery for under $100.",
    note: "White & Black / Matte White colors",
  },
  {
    id: "beats-solo-4",
    title: "Beats Solo 4 on-ear headphones",
    store: "Target",
    category: "Audio",
    price: 79.99,
    was: 199.99,
    url: "https://www.target.com/s?searchTerm=Beats+Solo+4",
    checked: "2026-11-27T07:58:15Z",
    source: "Target · ClarkDeals · swikblog (checked 27 Nov)",
    lowestEver: false,
    blurb: "Everyday on-ears with 50-hour battery life, in Target-exclusive colors.",
    note: "Bright Pink / Warm White",
  },
  {
    id: "sony-xm6",
    title: "Sony WH-1000XM6 noise-cancelling headphones",
    store: "Amazon",
    category: "Audio",
    price: 348,
    was: 459.99,
    url: "https://www.amazon.com/s?k=Sony+WH-1000XM6",
    checked: "2026-11-27T07:58:40Z",
    source: "ProductBible · The Gadgeteer · Notebookcheck",
    lowestEver: true,
    blurb: "Sony's current flagship ANC cans at their lowest price ever.",
  },
  {
    id: "tcl-65-s4cf",
    title: "TCL 65\" S4CF 4K Fire TV",
    store: "Best Buy",
    category: "TVs",
    price: 229.99,
    was: 469.99,
    url: "https://www.bestbuy.com/site/searchpage.jsp?st=TCL+65+inch+4K+Fire+TV",
    checked: "2026-11-27T07:58:40Z",
    source: "BestBuy.com product page · DealNews · Slickdeals",
    lowestEver: false,
    blurb: "Biggest screen for the least money — 65 inches of 4K Fire TV.",
  },
  {
    id: "hisense-h5r1",
    title: "Hisense 65\" H5R1 4K Roku TV",
    store: "Walmart",
    category: "TVs",
    price: 228,
    was: 398,
    url: "https://www.walmart.com/search?q=Hisense+65+H5R1+Roku+TV",
    checked: "2026-11-27T07:58:40Z",
    source: "Walmart.com product page · DealNews · Slickdeals",
    lowestEver: false,
    blurb: "65-inch 4K Roku TV with Dolby Vision for the price of a 43-inch set.",
  },
  {
    id: "insignia-40-f40",
    title: "Insignia 40\" F40 Full HD Fire TV",
    store: "Best Buy",
    category: "TVs",
    price: 89.99,
    was: 149.99,
    url: "https://www.bestbuy.com/site/searchpage.jsp?st=Insignia+40+inch+Fire+TV",
    checked: "2026-11-27T07:58:40Z",
    source: "Best Buy announcement (Business Wire) · inksight (checked 26 Nov)",
    lowestEver: false,
    blurb: "Cheapest decent bedroom TV of the sale — full HD Fire TV.",
  },
  {
    id: "hisense-u7",
    title: "Hisense U7 65\" Mini-LED 4K Google TV",
    store: "Amazon",
    category: "TVs",
    price: 797.99,
    was: 1497.99,
    url: "https://www.amazon.com/s?k=Hisense+U7+65+Mini-LED",
    checked: "2026-11-27T07:59:00Z",
    source: "ProductBible · PC Guide · TechDeals (Amazon price, 27 Nov 00:20 UTC)",
    lowestEver: true,
    blurb: "Mini-LED, 165Hz, 3,000 nits — a premium gaming TV at half price.",
  },
  {
    id: "samsung-frame-55",
    title: "Samsung 55\" The Frame QLED 4K TV",
    store: "Target",
    category: "TVs",
    price: 899.99,
    was: 1199.99,
    url: "https://www.target.com/s?searchTerm=Samsung+The+Frame+55",
    checked: "2026-11-27T07:59:00Z",
    source: "Target.com · MacRumors",
    lowestEver: false,
    blurb: "A TV that hangs like art, with a matte anti-glare screen.",
  },
  {
    id: "macbook-air-13-m5",
    title: "Apple MacBook Air 13\" M5 (16GB / 512GB)",
    store: "Amazon",
    category: "Laptops",
    price: 999.99,
    was: 1299,
    url: "https://www.amazon.com/s?k=MacBook+Air+13+M5",
    checked: "2026-11-27T07:59:00Z",
    source: "9to5Toys · MacRumors · AppleInsider (26 Nov)",
    lowestEver: false,
    blurb: "The newest MacBook Air under $1,000 — M5 chip, 16GB RAM, 512GB SSD.",
    note: "Silver / Starlight at this price; Midnight $1,049. Price rose from $989.10 on 23 Nov — fresh price used.",
  },
  {
    id: "hp-omnibook-5",
    title: "HP OmniBook 5 14\" 2K OLED Touch laptop",
    store: "Best Buy",
    category: "Laptops",
    price: 449.99,
    was: 799.99,
    url: "https://www.bestbuy.com/site/searchpage.jsp?st=HP+OmniBook+5+14+OLED",
    checked: "2026-11-27T07:59:00Z",
    source: "BestBuy.com product page · DealNews · Digital Trends",
    lowestEver: false,
    blurb: "OLED touchscreen laptop for the price of a basic LCD one.",
  },
  {
    id: "macbook-air-15-m5",
    title: "Apple MacBook Air 15\" M5 (16GB / 512GB)",
    store: "Amazon",
    category: "Laptops",
    price: 1199,
    was: 1499,
    url: "https://www.amazon.com/s?k=MacBook+Air+15+M5",
    checked: "2026-11-27T07:59:15Z",
    source: "MacRumors · CNN Underscored · Macworld (26 Nov)",
    lowestEver: false,
    blurb: "Bigger screen, same M5 speed — $300 off Apple's price.",
  },
  {
    id: "apple-watch-series-12",
    title: "Apple Watch Series 12 GPS 42mm",
    store: "Amazon",
    category: "Wearables",
    price: 299,
    was: 399,
    url: "https://www.amazon.com/s?k=Apple+Watch+Series+12",
    checked: "2026-11-27T07:59:15Z",
    source: "9to5Mac · MacRumors · CNN Underscored",
    lowestEver: true,
    blurb: "Apple's newest watch with redesigned health sensors, $100 off.",
    note: "From $299 — 46mm GPS $349 (was $449)",
  },
  {
    id: "apple-watch-se-3",
    title: "Apple Watch SE 3 GPS 40mm",
    store: "Amazon",
    category: "Wearables",
    price: 179,
    was: 249,
    url: "https://www.amazon.com/s?k=Apple+Watch+SE+3",
    checked: "2026-11-27T07:59:15Z",
    source: "9to5Mac · MacRumors · Digital Trends",
    lowestEver: true,
    blurb: "Always-on display and gesture control at the cheapest Apple Watch price.",
    note: "From $179 — 44mm GPS $209 (was $279)",
  },
  {
    id: "pixel-watch-5",
    title: "Google Pixel Watch 5 (41mm, Wi-Fi)",
    store: "Amazon",
    category: "Wearables",
    price: 300,
    was: 400,
    url: "https://www.amazon.com/s?k=Pixel+Watch+5",
    checked: "2026-11-27T07:59:15Z",
    source: "9to5Toys · 9to5Google",
    lowestEver: false,
    blurb: "Google's latest watch with Gemini, $100 off the whole lineup.",
  },
  {
    id: "airtag-2",
    title: "Apple AirTag 2 (single)",
    store: "Amazon",
    category: "Wearables",
    price: 18,
    was: 29,
    url: "https://www.amazon.com/s?k=AirTag+2",
    checked: "2026-11-27T07:59:30Z",
    source: "9to5Toys · AppleInsider · CNN Underscored",
    lowestEver: true,
    blurb: "Louder speaker, longer range — the cheapest way into Find My.",
  },
  {
    id: "dyson-v9",
    title: "Dyson V9 Motorbar cordless vacuum",
    store: "Amazon",
    category: "Home",
    price: 269.95,
    was: 600,
    url: "https://www.amazon.com/s?k=Dyson+V9+Motorbar",
    checked: "2026-11-27T07:59:30Z",
    source: "9to5Toys · CNN Underscored · DealNews",
    lowestEver: true,
    blurb: "Dyson's lightest cordless stick vacuum at its all-time low.",
  },
  {
    id: "dyson-v12",
    title: "Dyson V12 Detect Slim cordless vacuum",
    store: "Walmart",
    category: "Home",
    price: 429.99,
    was: 729.99,
    url: "https://www.walmart.com/search?q=Dyson+V12+Detect+Slim",
    checked: "2026-11-27T07:59:30Z",
    source: "Walmart.com product page · ComicBook",
    lowestEver: false,
    blurb: "Laser dust detection and 60-minute runtime, $300 off.",
  },
  {
    id: "dyson-airwrap",
    title: "Dyson Airwrap i.d. Multi-Styler",
    store: "Amazon",
    category: "Home",
    price: 499.99,
    was: 649.99,
    url: "https://www.amazon.com/s?k=Dyson+Airwrap",
    checked: "2026-11-27T07:59:30Z",
    source: "CNN Underscored · 9to5Toys · WishDeck (checked 26 Nov)",
    lowestEver: false,
    blurb: "The cult hair styler at its holiday floor price.",
    note: "Straight+Wavy $499, Curly+Coily $499.99",
  },
  {
    id: "quest-3s",
    title: "Meta Quest 3S 128GB VR headset",
    store: "Target",
    category: "Gaming",
    price: 297.49,
    was: 349.99,
    url: "https://www.target.com/s?searchTerm=Meta+Quest+3S",
    checked: "2026-11-27T07:59:50Z",
    source: "Target.com · VR.org",
    lowestEver: false,
    blurb: "Standalone VR, plus a $50 Target GiftCard with the headset.",
  },
  {
    id: "ipad-11",
    title: "Apple iPad 11\" (A16, 128GB, Wi-Fi)",
    store: "Amazon",
    category: "Tablets",
    price: 379,
    was: 449,
    url: "https://www.amazon.com/s?k=iPad+11+A16",
    checked: "2026-11-27T07:59:50Z",
    source: "MacRumors · Macworld · ProductBible (24–26 Nov)",
    lowestEver: false,
    blurb: "The cheapest current iPad — A16 chip, full iPadOS.",
  },
  {
    id: "kindle-paperwhite",
    title: "Kindle Paperwhite 16GB (2024)",
    store: "Target",
    category: "Tablets",
    price: 129.99,
    was: 199.99,
    url: "https://www.target.com/s?searchTerm=Kindle+Paperwhite",
    checked: "2026-11-27T07:59:50Z",
    source: "blackfriday.com · Slickdeals · The Verge",
    lowestEver: false,
    blurb: "Waterproof e-reader with a sharp 300ppi screen, $70 off.",
    note: "2024 model — the new one is $199.99 with minimal upgrades",
  },
  {
    id: "samsung-9100-pro",
    title: "Samsung 9100 PRO 2TB NVMe Gen5 SSD",
    store: "Amazon",
    category: "Storage",
    price: 349.99,
    was: 679.97,
    url: "https://www.amazon.com/s?k=Samsung+9100+Pro+2TB",
    checked: "2026-11-27T07:59:50Z",
    source: "WCCFTech · Technetbooks · Tom's Hardware",
    lowestEver: false,
    blurb: "Gen5 NVMe at 14,700MB/s — half price in a NAND-shortage year.",
  },
];

export const CATEGORIES = [
  "Audio",
  "TVs",
  "Laptops",
  "Wearables",
  "Home",
  "Gaming",
  "Tablets",
  "Storage",
];

export const STORES = ["Amazon", "Best Buy", "Walmart", "Target"];

// ---- derived numbers (single source of truth; the stats strip reads these) ----

export function saving(deal) {
  return Math.round((deal.was - deal.price) * 100) / 100;
}

export function pctOff(deal) {
  return Math.round(((deal.was - deal.price) / deal.was) * 100);
}

export function verdict(deal) {
  const p = pctOff(deal);
  if (p >= 40) return "HOT";
  if (p >= 25) return "GOOD";
  return "OK";
}

export function money(n) {
  const [int, dec] = n.toFixed(2).split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "$" + (dec === "00" ? grouped : grouped + "." + dec);
}

export function stats() {
  const total = DEALS.length;
  const avgPct = Math.round(DEALS.reduce((a, d) => a + pctOff(d), 0) / total);
  const biggest = DEALS.reduce((a, d) => (saving(d) > saving(a) ? d : a), DEALS[0]);
  const totalSaving = Math.round(DEALS.reduce((a, d) => a + saving(d), 0) * 100) / 100;
  const stores = new Set(DEALS.map((d) => d.store)).size;
  const hottest = DEALS.filter((d) => verdict(d) === "HOT").length;
  return { total, avgPct, biggestSaving: saving(biggest), biggestDeal: biggest, totalSaving, stores, hottest };
}

export function checkedLabel(iso) {
  // "2026-11-27T07:58:15Z" -> "27 Nov 2026, 07:58 UTC"
  const d = new Date(iso);
  const day = String(d.getUTCDate()).padStart(2, "0");
  const hh = String(d.getUTCHours()).padStart(2, "0");
  const mm = String(d.getUTCMinutes()).padStart(2, "0");
  return `${day} Nov 2026, ${hh}:${mm} UTC`;
}
