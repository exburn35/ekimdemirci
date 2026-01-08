import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "E-Ticaret SEO | Ekim Demirci",
  description: "Online mağazanız için teknik ve içerik SEO optimizasyonu ile satışlarınızı artırın. Ürün sayfaları, kategori optimizasyonu ve teknik SEO.",
  openGraph: {
    title: "E-Ticaret SEO Hizmetleri | Ekim Demirci",
    description: "E-ticaret siteniz için kapsamlı SEO çözümleri ile satışlarınızı artırın.",
  },
};

export default function ECommerceSEO() {
  return (
    <ServicePageLayout
      title="E-Ticaret SEO"
      subtitle="Sektörel SEO"
      description="Online mağazanız için teknik ve içerik SEO optimizasyonu ile satışlarınızı artırın. Ürün sayfalarınızı optimize edin, kategori yapınızı iyileştirin ve arama motorlarında üst sıralarda yer alın."
      icon="Settings"
      gradient="from-purple-500 to-pink-500"
      features={[
        "Ürün Sayfası SEO Optimizasyonu",
        "Kategori ve Koleksiyon Optimizasyonu",
        "Teknik SEO İyileştirmeleri",
        "Schema Markup ve Rich Snippets",
        "Site Hızı Optimizasyonu",
        "Mobil E-Ticaret SEO",
        "İçerik Pazarlama Stratejisi",
        "Dönüşüm Oranı Optimizasyonu",
      ]}
      benefits={[
        {
          title: "Daha Fazla Organik Trafik",
          description: "SEO optimizasyonu ile organik arama trafiğinizi artırın. Ürünleriniz ve kategorileriniz arama sonuçlarında üst sıralarda yer alsın.",
        },
        {
          title: "Yüksek Dönüşüm Oranları",
          description: "SEO optimizasyonu sadece trafik getirmez, aynı zamanda doğru kitleye ulaşmanızı sağlar. Bu da daha yüksek dönüşüm oranları demektir.",
        },
        {
          title: "Rekabet Avantajı",
          description: "Rakiplerinizden öne çıkın. E-ticaret sektöründe SEO, dijital pazarda başarılı olmanın en önemli faktörlerinden biridir.",
        },
        {
          title: "Uzun Vadeli Büyüme",
          description: "SEO, sürekli ve organik trafik sağlar. Reklam bütçeniz olmadan bile, doğru SEO stratejisi ile uzun vadede büyüyen bir müşteri tabanı oluşturabilirsiniz.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "E-Ticaret Site Analizi",
          description: "Mevcut e-ticaret sitenizin teknik ve içerik durumunu analiz eder, rakip analizi yapar ve iyileştirme fırsatlarını belirleriz.",
        },
        {
          step: "2",
          title: "Ürün ve Kategori Optimizasyonu",
          description: "Ürün sayfalarınızı ve kategorilerinizi SEO için optimize eder, meta etiketlerini iyileştirir ve schema markup ekleriz.",
        },
        {
          step: "3",
          title: "Teknik SEO İyileştirmeleri",
          description: "Site hızı, mobil uyumluluk, URL yapısı ve teknik SEO faktörlerini optimize ederiz. Core Web Vitals skorlarınızı iyileştiririz.",
        },
        {
          step: "4",
          title: "İçerik ve Link Stratejisi",
          description: "Blog içerikleri, ürün açıklamaları ve backlink stratejisi ile organik trafiğinizi artırır ve otoritenizi güçlendiririz.",
        },
      ]}
    />
  );
}

