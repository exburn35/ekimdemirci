import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Teknik SEO Hizmetleri",
  description: "Kapsamlı teknik SEO denetimleri ve optimizasyonları. Arama motorlarının sitenize verimli bir şekilde erişmesini sağlayan site hızı, taranabilirlik ve Core Web Vitals iyileştirmeleri.",
  alternates: {
    canonical: "/seo-hizmetleri/teknik-seo",
  },
  openGraph: {
    title: "Teknik SEO Hizmetleri | Ekim Demirci",
    description: "Maksimum arama motoru görünürlüğü için uzman teknik SEO optimizasyonu.",
  },
};

export default function TechnicalSEO() {
  return (
    <ServicePageLayout
      title="Teknik SEO"
      subtitle="Temel ve Altyapı"
      description="Teknik SEO, tüm başarılı SEO kampanyalarının temelidir. Kapsamlı denetimler, optimizasyonlar ve kritik teknik unsurların izlenmesi yoluyla arama motorlarının web sitenizi verimli bir şekilde tarayabilmesini, dizine ekleyebilmesini ve anlayabilmesini sağlıyor."
      icon="Settings"
      gradient="from-purple-500 to-pink-500"
      features={[
        "Site Hızı Optimizasyonu",
        "Core Web Vitals",
        "Mobile-First Indexing",
        "Schema Markup",
        "XML Site Haritaları",
        "Robots.txt Optimizasyonu",
        "Canonical Etiketleri",
        "HTTPS & Güvenlik",
        "Taranabilirlik",
        "Index Analizi",
      ]}
      benefits={[
        {
          title: "Crawl Budget Optimizasyonu",
          description: "Arama motorlarının tüm önemli sayfalarınızı verimli bir şekilde keşfedip dizine ekleyebilmesini sağlayın. Tarama hatalarını düzeltiyor, site yapısını optimize ediyor ve arama motorlarının içeriğinize erişmesini engelleyen bariyerleri kaldırıyorum.",
        },
        {
          title: "Daha Hızlı Sayfa Yükleme Süreleri",
          description: "Hız, kritik bir sıralama faktörüdür. Sitenizin yükleme hızını önemli ölçüde artırmak için görselleri optimize ediyor, kodu küçültüyor, tarayıcı önbelleklemesini kullanıyor ve CDN çözümleri uyguluyorum.",
        },
        {
          title: "Daha İyi Kullanıcı Deneyimi",
          description: "Teknik SEO iyileştirmeleri, kullanıcı deneyimini doğrudan geliştirir. Daha hızlı siteler, daha iyi mobil performans ve gelişmiş erişilebilirlik, daha düşük hemen çıkma oranlarına ve daha yüksek etkileşime yol açar.",
        },
        {
          title: "Rekabet Avantajı",
          description: "Birçok web sitesi teknik SEO'yu ihmal ediyor. Teknik sorunları ele alarak, rakiplerinize karşı önemli bir avantaj elde edersiniz ve uzun vadeli SEO başarısı için sağlam bir temel oluşturursunuz.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Kapsamlı Teknik Denetim",
          description: "Sektör lideri araçları kullanarak site hızı, mobil kullanılabilirlik, taranabilirlik, indeksleme ve Core Web Vitals ile ilgili sorunları tanımlayan derinlemesine teknik denetimler gerçekleştiriyorum.",
        },
        {
          step: "2",
          title: "Öncelikli Sorun Giderme",
          description: "Sitenizin iyi sıralanmasını engelleyen kritik teknik sorunları önceliklendiriyor ve en etkili olanlardan başlayarak çözüme kavuşturuyorum.",
        },
        {
          step: "3",
          title: "Performans Optimizasyonu",
          description: "Performansı maksimuma çıkarmak için sunucu yapılandırması, kod optimizasyonu, görsel sıkıştırma ve önbellekleme stratejileri dahil olmak üzere sitenizin teknik altyapısını optimize ediyorum.",
        },
        {
          step: "4",
          title: "Sürekli İzleme",
          description: "Teknik sorunları erkenden yakalamak, Core Web Vitals metriklerini takip etmek ve sitenizin optimal teknik durumunu korumasını sağlamak için sürekli izleme sistemleri kuruyorum.",
        },
      ]}
      blogCategory="teknik-seo"
    />
  );
}

