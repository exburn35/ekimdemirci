import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Diş Hekimleri için SEO | Ekim Demirci",
  description: "Diş hekimi klinikleriniz için özelleştirilmiş SEO stratejileri ile daha fazla hasta kazanın. Yerel SEO, teknik SEO ve içerik optimizasyonu.",
  openGraph: {
    title: "Diş Hekimleri için SEO Hizmetleri | Ekim Demirci",
    description: "Diş hekimi klinikleriniz için özelleştirilmiş SEO çözümleri.",
  },
};

export default function DentistsSEO() {
  return (
    <ServicePageLayout
      title="Diş Hekimleri için SEO"
      subtitle="Sektörel SEO"
      description="Diş hekimi klinikleriniz için özelleştirilmiş SEO stratejileri ile daha fazla hasta kazanın. Yerel arama sonuçlarında üst sıralarda yer alın, randevu sayılarınızı artırın ve dijital varlığınızı güçlendirin."
      icon="Settings"
      gradient="from-blue-500 to-cyan-500"
      features={[
        "Yerel SEO Optimizasyonu",
        "Google My Business Yönetimi",
        "Diş Hekimliği Anahtar Kelime Araştırması",
        "Randevu Odaklı İçerik Stratejisi",
        "Mobil Uyumlu Web Sitesi Optimizasyonu",
        "Hasta Yorumları ve Değerlendirmeleri",
        "Teknik SEO İyileştirmeleri",
        "Sosyal Medya Entegrasyonu",
      ]}
      benefits={[
        {
          title: "Daha Fazla Randevu",
          description: "Yerel arama sonuçlarında üst sıralarda yer alarak, bölgenizdeki potansiyel hastaların sizi bulmasını sağlayın. SEO optimizasyonu ile randevu sayılarınızı önemli ölçüde artırabilirsiniz.",
        },
        {
          title: "Rekabet Avantajı",
          description: "Rakiplerinizden öne çıkın. Diş hekimliği sektöründe yoğun rekabet var, ancak doğru SEO stratejisi ile dijital pazarda lider konuma gelebilirsiniz.",
        },
        {
          title: "Güvenilirlik ve Otorite",
          description: "SEO optimizasyonu ile web siteniz arama motorlarında güvenilir bir kaynak olarak görülür. Bu, potansiyel hastaların size olan güvenini artırır.",
        },
        {
          title: "Uzun Vadeli Büyüme",
          description: "SEO, sürekli ve organik trafik sağlar. Reklam bütçeniz olmadan bile, doğru SEO stratejisi ile uzun vadede büyüyen bir hasta portföyü oluşturabilirsiniz.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Klinik Analizi ve Araştırma",
          description: "Kliniklerinizin mevcut durumunu analiz eder, hedef kitlenizi belirler ve rakip analizi yaparız. Diş hekimliği sektörüne özel anahtar kelimeleri araştırırız.",
        },
        {
          step: "2",
          title: "Yerel SEO Stratejisi",
          description: "Google My Business optimizasyonu, yerel dizinlere kayıt ve yerel anahtar kelime optimizasyonu ile bölgenizdeki aramalarda görünürlüğünüzü artırırız.",
        },
        {
          step: "3",
          title: "İçerik ve Teknik Optimizasyon",
          description: "Randevu odaklı içerikler oluşturur, teknik SEO iyileştirmeleri yapar ve web sitenizin hızını ve kullanıcı deneyimini optimize ederiz.",
        },
        {
          step: "4",
          title: "Sürekli Takip ve İyileştirme",
          description: "Performans metriklerini takip eder, hasta geri bildirimlerini analiz eder ve SEO stratejinizi sürekli olarak iyileştiririz.",
        },
      ]}
    />
  );
}

