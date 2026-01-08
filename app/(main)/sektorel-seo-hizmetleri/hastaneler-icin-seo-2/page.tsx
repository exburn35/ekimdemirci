import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Hastaneler için SEO | Ekim Demirci",
  description: "Hastaneler ve sağlık kuruluşları için kapsamlı SEO çözümleri. Yerel SEO, hasta kazanımı ve dijital varlık güçlendirme.",
  openGraph: {
    title: "Hastaneler için SEO Hizmetleri | Ekim Demirci",
    description: "Hastaneler ve sağlık kuruluşları için kapsamlı SEO çözümleri.",
  },
};

export default function HospitalsSEO() {
  return (
    <ServicePageLayout
      title="Hastaneler için SEO"
      subtitle="Sektörel SEO"
      description="Hastaneler ve sağlık kuruluşları için kapsamlı SEO çözümleri. Yerel ve ulusal arama sonuçlarında üst sıralarda yer alın, hasta sayılarınızı artırın ve dijital varlığınızı güçlendirin."
      icon="Settings"
      gradient="from-indigo-500 to-blue-500"
      features={[
        "Yerel ve Ulusal SEO Stratejisi",
        "Google My Business Yönetimi",
        "Sağlık Alanına Özel Anahtar Kelime Araştırması",
        "Hasta Odaklı İçerik Stratejisi",
        "Hasta Yorumları ve Değerlendirmeleri",
        "Çok Sayfalı Site Optimizasyonu",
        "Teknik SEO İyileştirmeleri",
        "Sosyal Medya Entegrasyonu",
      ]}
      benefits={[
        {
          title: "Daha Fazla Hasta",
          description: "Yerel ve ulusal arama sonuçlarında üst sıralarda yer alarak, potansiyel hastaların sizi bulmasını sağlayın. SEO optimizasyonu ile hasta sayılarınızı önemli ölçüde artırabilirsiniz.",
        },
        {
          title: "Güvenilirlik ve Otorite",
          description: "SEO optimizasyonu ile web siteniz arama motorlarında güvenilir bir kaynak olarak görülür. Bu, potansiyel hastaların size olan güvenini artırır.",
        },
        {
          title: "Rekabet Avantajı",
          description: "Sağlık sektöründe yoğun rekabet var, ancak doğru SEO stratejisi ile dijital pazarda rakiplerinizden öne çıkabilirsiniz.",
        },
        {
          title: "Uzun Vadeli Büyüme",
          description: "SEO, sürekli ve organik trafik sağlar. Reklam bütçeniz olmadan bile, doğru SEO stratejisi ile uzun vadede büyüyen bir hasta portföyü oluşturabilirsiniz.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Hastane ve Kuruluş Analizi",
          description: "Hastanenizin mevcut durumunu analiz eder, hizmet alanlarınızı belirler ve rakip analizi yaparız. Sağlık sektörüne özel anahtar kelimeleri araştırırız.",
        },
        {
          step: "2",
          title: "Yerel ve Ulusal SEO Stratejisi",
          description: "Google My Business optimizasyonu, yerel dizinlere kayıt ve ulusal anahtar kelime optimizasyonu ile görünürlüğünüzü artırırız.",
        },
        {
          step: "3",
          title: "İçerik ve Teknik Optimizasyon",
          description: "Hasta odaklı içerikler oluşturur, çok sayfalı site optimizasyonu yapar ve web sitenizin hızını ve kullanıcı deneyimini optimize ederiz.",
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

