import {
  ShoppingCart,
  HeartPulse,
  Smile,
  Stethoscope,
  Ambulance,
  Sparkles,
  Scale,
  MapPin,
  Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Sector {
  slug: string;
  name: string;
  short: string;
  icon: LucideIcon;
  summary: string;
  searches: string[];
  focus: string[];
}

// Sektörel SEO sayfalarının ortak verisi (hub sayfası ve sektör seçici kullanır)
export const sectors: Sector[] = [
  {
    slug: "e-ticaret-seo",
    name: "E-ticaret SEO",
    short: "E-ticaret",
    icon: ShoppingCart,
    summary: "Binlerce ürün ve kategori sayfasını aramaya ve satışa göre kurgulamak.",
    searches: ["kadın koşu ayakkabısı", "en iyi kablosuz kulaklık", "bebek arabası fiyatları"],
    focus: ["Kategori ve filtre sayfası yapısı", "Ürün sayfası içerikleri", "Ürün şeması ve hız"],
  },
  {
    slug: "saglik-ve-klinik-seo",
    name: "Sağlık ve Klinik SEO",
    short: "Sağlık ve klinik",
    icon: HeartPulse,
    summary: "Güven ve uzmanlık sinyallerinin belirleyici olduğu sağlık aramalarında görünür olmak.",
    searches: ["tüp mide ameliyatı", "fizik tedavi merkezi ankara", "kolonoskopi nasıl yapılır"],
    focus: ["Hekim uzmanlığı ve güven sinyalleri", "Tedavi rehberi içerikleri", "Yerel görünürlük"],
  },
  {
    slug: "dis-hekimleri-icin-seo-2",
    name: "Diş Hekimleri için SEO",
    short: "Diş hekimleri",
    icon: Smile,
    summary: "Tedavi ve semt aramalarında hasta kazanan bir diş kliniği sitesi kurmak.",
    searches: ["implant fiyatları", "kadıköy diş kliniği", "gülüş tasarımı"],
    focus: ["Tedavi sayfaları", "Google İşletme profili", "Hasta yorumları ve güven"],
  },
  {
    slug: "doktorlar-icin-seo-2",
    name: "Doktorlar için SEO",
    short: "Doktorlar",
    icon: Stethoscope,
    summary: "Uzman hekimlerin kendi adıyla ve branşıyla bulunmasını sağlamak.",
    searches: ["en iyi kardiyolog istanbul", "dr. adı soyadı", "migren tedavisi"],
    focus: ["Hekim profili ve kişisel marka", "Hastalık ve tedavi içerikleri", "Muayenehane görünürlüğü"],
  },
  {
    slug: "hastaneler-icin-seo-2",
    name: "Hastaneler için SEO",
    short: "Hastaneler",
    icon: Ambulance,
    summary: "Çok branşlı yapıları, doktor ve bölüm sayfalarıyla düzenli bir mimariye kavuşturmak.",
    searches: ["özel hastane göz bölümü", "hastane randevu", "check-up paketleri"],
    focus: ["Bölüm ve doktor sayfası mimarisi", "Çok lokasyonlu yerel SEO", "Teknik ölçeklenebilirlik"],
  },
  {
    slug: "guzellik-merkezleri-icin-seo-2",
    name: "Güzellik Merkezleri için SEO",
    short: "Güzellik merkezleri",
    icon: Sparkles,
    summary: "Hizmet ve şehir aramalarında randevu getiren bir görünürlük kurmak.",
    searches: ["lazer epilasyon fiyatları", "yakınımdaki güzellik merkezi", "cilt bakımı nişantaşı"],
    focus: ["Hizmet sayfaları", "Harita sonuçları", "Görsel ve sosyal kanıt"],
  },
  {
    slug: "avukatlar-icin-seo-hizmeti",
    name: "Avukatlar için SEO",
    short: "Avukatlar",
    icon: Scale,
    summary: "Hukuki sorunu olan kişinin ilk aradığı yerde güvenilir bir kaynak olmak.",
    searches: ["boşanma avukatı istanbul", "kira artışı ne kadar", "iş davası nasıl açılır"],
    focus: ["Uzmanlık alanı sayfaları", "Bilgilendirici hukuk içerikleri", "Güven ve itibar"],
  },
  {
    slug: "yerel-isletme-seo",
    name: "Yerel İşletme SEO",
    short: "Yerel işletmeler",
    icon: MapPin,
    summary: "Şehir ve \"yakınımdaki\" aramalarında haritada üst sıralarda yer almak.",
    searches: ["yakınımdaki kuaför", "beşiktaş veteriner", "ankara oto servis"],
    focus: ["Google İşletme profili", "Yerel sinyaller ve yorumlar", "Konum sayfaları"],
  },
  {
    slug: "kurumsal-b2b-seo",
    name: "Kurumsal ve B2B SEO",
    short: "Kurumsal ve B2B",
    icon: Building2,
    summary: "Uzun satış döngüsünde karar vericilere doğru içerikle ulaşmak.",
    searches: ["endüstriyel soğutma sistemleri", "erp yazılımı karşılaştırma", "toptan ambalaj üreticisi"],
    focus: ["Çözüm ve sektör sayfaları", "Karar destek içerikleri", "Teklif odaklı dönüşüm"],
  },
];
