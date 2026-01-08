import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Doktorlar için SEO | Ekim Demirci",
  description: "Tıp doktorları ve uzman hekimler için özelleştirilmiş SEO hizmetleri. Yerel SEO, hasta kazanımı ve dijital varlık güçlendirme.",
  openGraph: {
    title: "Doktorlar için SEO Hizmetleri | Ekim Demirci",
    description: "Tıp doktorları ve uzman hekimler için özelleştirilmiş SEO çözümleri.",
  },
};

export default function DoctorsSEO() {
  return (
    <ServicePageLayout
      title="Doktorlar için SEO"
      subtitle="Sektörel SEO"
      description="Tıp doktorları ve uzman hekimler için özelleştirilmiş SEO hizmetleri. Yerel arama sonuçlarında üst sıralarda yer alın, hasta sayılarınızı artırın ve dijital varlığınızı güçlendirin."
      icon="Settings"
      gradient="from-orange-500 to-red-500"
      features={[
        "Yerel SEO Optimizasyonu",
        "Google My Business Yönetimi",
        "Tıp Alanına Özel Anahtar Kelime Araştırması",
        "Randevu Odaklı İçerik Stratejisi",
        "Hasta Yorumları ve Değerlendirmeleri",
        "Mobil Uyumlu Web Sitesi Optimizasyonu",
        "Teknik SEO İyileştirmeleri",
        "Sosyal Medya Entegrasyonu",
      ]}
      benefits={[
        {
          title: "Daha Fazla Hasta",
          description: "Yerel arama sonuçlarında üst sıralarda yer alarak, bölgenizdeki potansiyel hastaların sizi bulmasını sağlayın. SEO optimizasyonu ile hasta sayılarınızı önemli ölçüde artırabilirsiniz.",
        },
        {
          title: "Uzmanlık Alanınızda Otorite",
          description: "Tıp alanınızda uzman olduğunuzu gösterin. SEO ile web siteniz arama motorlarında güvenilir bir kaynak olarak görülür ve otoriteniz artar.",
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
          title: "Doktor ve Klinik Analizi",
          description: "Pratiklerinizin mevcut durumunu analiz eder, uzmanlık alanlarınızı belirler ve rakip analizi yaparız. Tıp sektörüne özel anahtar kelimeleri araştırırız.",
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

