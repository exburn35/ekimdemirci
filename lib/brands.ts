// Deneyimimde yer alan markalar: logolar public/markalar/ altında (kırpılmış, saydam arka planlı)

export interface Brand {
  name: string;
  file: string;
  w: number;
  h: number;
  sector: "Moda ve giyim" | "Ev ve yaşam" | "Sağlık" | "Finans" | "Eğitim";
}

export const brands: Brand[] = [
  { name: "Levi's", file: "levis.webp", w: 390, h: 160, sector: "Moda ve giyim" },
  { name: "Timberland", file: "timberland.webp", w: 878, h: 160, sector: "Moda ve giyim" },
  { name: "Vans", file: "vans.webp", w: 393, h: 160, sector: "Moda ve giyim" },
  { name: "Dockers", file: "dockers.webp", w: 900, h: 146, sector: "Moda ve giyim" },
  { name: "LTB Jeans", file: "ltb-jeans.webp", w: 160, h: 160, sector: "Moda ve giyim" },
  { name: "Enza Home", file: "enza-home.webp", w: 540, h: 62, sector: "Ev ve yaşam" },
  { name: "Yatsan", file: "yatsan.webp", w: 540, h: 127, sector: "Ev ve yaşam" },
  { name: "İyi Uyku İyi Hayat", file: "iyi-uyku-iyi-hayat.webp", w: 893, h: 160, sector: "Ev ve yaşam" },
  { name: "Chakra", file: "chakra.webp", w: 256, h: 61, sector: "Ev ve yaşam" },
  { name: "Dünyagöz", file: "dunyagoz.webp", w: 800, h: 160, sector: "Sağlık" },
  { name: "TOBB ETÜ Hastanesi", file: "tobb-etu-hastanesi.webp", w: 231, h: 160, sector: "Sağlık" },
  { name: "Aktif Bank", file: "aktif-bank.webp", w: 455, h: 111, sector: "Finans" },
  { name: "N Kolay", file: "nkolay.webp", w: 438, h: 144, sector: "Finans" },
  { name: "Atlas Üniversitesi", file: "atlas-universitesi.webp", w: 161, h: 160, sector: "Eğitim" },
];

// Farklı en-boy oranlarındaki logoları görsel olarak eşit ağırlıkta göstermek için
// aynı alanı kaplayacak genişlik/yükseklik hesaplanır (maksimum yükseklik sınırıyla).
export function logoSize(b: Brand, area = 2600, maxH = 48) {
  const ratio = b.w / b.h;
  let height = Math.sqrt(area / ratio);
  if (height > maxH) height = maxH;
  return { width: Math.round(height * ratio), height: Math.round(height) };
}
