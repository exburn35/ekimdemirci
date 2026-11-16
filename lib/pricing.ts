// Fiyatlar için tek kaynak: fiyat sayfası ve GEO sayfası buradan okur.

export interface PricePlan {
  name: string;
  price: number;
  description: string;
  profile?: string;
  features: string[];
  popular: boolean;
}

export const seoPlans: PricePlan[] = [
  {
    name: "Başlangıç",
    price: 20000,
    description: "Küçük işletmeler ve SEO'ya yeni başlayan siteler için",
    profile: "En fazla 50 sayfalık, yerel odaklı butik siteler",
    features: [
      "Detaylı site analizi",
      "Anahtar kelime araştırması",
      "Site içi optimizasyon",
      "Teknik hataların giderilmesi",
      "Aylık performans raporu",
      "E-posta desteği",
    ],
    popular: false,
  },
  {
    name: "Profesyonel",
    price: 30000,
    description: "Büyüyen işletmeler için kapsamlı çalışma",
    profile: "150 sayfaya kadar büyüyen e-ticaret siteleri ve orta ölçekli şirketler",
    features: [
      "Kapsamlı site analizi",
      "Geniş kapsamlı anahtar kelime çalışması",
      "Site içi ve site dışı optimizasyon",
      "Teknik hataların düzenli takibi",
      "İçerik stratejisi planlaması",
      "Aylık otorite artırıcı çalışmalar",
      "Aylık rapor ve değerlendirme toplantısı",
      "Haftalık ilerleme değerlendirmesi",
      "Öncelikli destek",
    ],
    popular: true,
  },
  {
    name: "Kapsamlı",
    price: 40000,
    description: "Büyük siteler ve rekabeti yüksek sektörler için",
    profile: "Geniş ürün yelpazesine sahip büyük siteler ve yüksek rekabetli sektörler",
    features: [
      "Size özel SEO stratejisi",
      "Genişletilmiş anahtar kelime çalışması",
      "Tüm SEO hizmetleri tek pakette",
      "Özel içerik planlaması",
      "Gelişmiş otorite artırma çalışmaları",
      "Detaylı rakip analizi",
      "Haftalık detaylı raporlama",
      "Kesintisiz destek",
      "Ekibinize özel SEO eğitimleri",
    ],
    popular: false,
  },
];

export const geoPlans: PricePlan[] = [
  {
    name: "Radar",
    price: 25000,
    description: "Yapay zeka araçlarında ilk görünürlüğünü başlatmak isteyen markalar için",
    features: [
      "ChatGPT, Perplexity ve Gemini'de marka görünürlüğü analizi",
      "Temel varlık (entity) yapılandırması",
      "Organization, Article ve FAQPage şema kodlaması",
      "10 içeriğin yapay zekanın kolay alıntılayacağı biçimde düzenlenmesi",
      "llms.txt ve yapay zeka tarayıcılarının (GPTBot, ClaudeBot) erişim ayarları",
      "Aylık yapay zeka görünürlük ve alıntı raporu",
    ],
    popular: false,
  },
  {
    name: "Referans",
    price: 45000,
    description: "Yapay zeka cevaplarında önerilen ve kaynak gösterilen marka olmak isteyenler için",
    features: [
      "Kapsamlı yapay zeka görünürlüğü ve rakiplere göre pay analizi",
      "Varlık otoritesi ve bilgi grafiği (Knowledge Graph) çalışması",
      "Yapay zekanın kolay anlayacağı içerik mimarisi",
      "25 içeriğin alıntılanabilir biçimde kurgulanması",
      "Dijital PR ve markanızın doğru bağlamlarda anılması",
      "Yapay zeka tarayıcıları için erişim ve görüntüleme iyileştirmeleri",
      "Aylık detaylı rapor ve strateji toplantısı",
      "Öncelikli destek ve doğrudan danışmanlık",
    ],
    popular: true,
  },
  {
    name: "Otorite",
    price: 75000,
    description: "Çok dilli ve yüksek rekabetli pazarlarda öne çıkmak isteyen markalar için",
    features: [
      "Türkçe ve İngilizce GEO stratejisi",
      "Yapay zeka tarama denetimi ve takip otomasyonları",
      "Wikipedia, Wikidata ve bilgi grafiği çalışmaları",
      "Sınırsız içerik ve şema mimarisi yönetimi",
      "Sektörel basında atıf ve anılma yönetimi",
      "Haftalık ilerleme raporu ve kesintisiz danışmanlık",
    ],
    popular: false,
  },
];

// SEO + GEO birlikte: SEO fiyatı + GEO fiyatının yarısı
export const comboPlans = seoPlans.map((seo, i) => {
  const geo = geoPlans[i];
  const geoShare = geo.price / 2;
  return {
    name: `${seo.name} + ${geo.name}`,
    seo,
    geo,
    geoShare,
    total: seo.price + geoShare,
    separate: seo.price + geo.price,
    saving: geo.price - geoShare,
    popular: seo.popular,
  };
});

export function tl(n: number) {
  return `₺${n.toLocaleString("tr-TR")}`;
}
