import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Güzellik Merkezleri için SEO | Ekim Demirci",
  description: "Güzellik ve estetik merkezleriniz için SEO ile müşteri portföyünüzü genişletin. Yerel SEO, görsel optimizasyon ve randevu odaklı stratejiler.",
  openGraph: {
    title: "Güzellik Merkezleri için SEO Hizmetleri | Ekim Demirci",
    description: "Güzellik ve estetik merkezleriniz için özelleştirilmiş SEO çözümleri.",
  },
};

export default function BeautyCentersSEO() {
  return (
    <ServicePageLayout
      title="Güzellik Merkezleri için SEO"
      subtitle="Sektörel SEO"
      description="Güzellik ve estetik merkezleriniz için SEO ile müşteri portföyünüzü genişletin. Yerel arama sonuçlarında üst sıralarda yer alın, randevu sayılarınızı artırın ve dijital varlığınızı güçlendirin."
      icon="Settings"
      gradient="from-pink-500 to-rose-500"
      features={[
        "Yerel SEO Optimizasyonu",
        "Google My Business Yönetimi",
        "Görsel SEO ve Görsel Optimizasyonu",
        "Randevu Odaklı İçerik Stratejisi",
        "Müşteri Yorumları ve Değerlendirmeleri",
        "Sosyal Medya Entegrasyonu",
        "Mobil Uyumlu Web Sitesi",
        "Teknik SEO İyileştirmeleri",
      ]}
      benefits={[
        {
          title: "Daha Fazla Randevu",
          description: "Yerel arama sonuçlarında üst sıralarda yer alarak, bölgenizdeki potansiyel müşterilerin sizi bulmasını sağlayın. SEO optimizasyonu ile randevu sayılarınızı önemli ölçüde artırabilirsiniz.",
        },
        {
          title: "Görsel Vurgu",
          description: "Güzellik merkezleri için görsel içerik çok önemlidir. SEO ile görsellerinizin arama sonuçlarında görünürlüğünü artırır ve müşteri çekiciliğinizi güçlendiririz.",
        },
        {
          title: "Rekabet Avantajı",
          description: "Güzellik ve estetik sektöründe yoğun rekabet var, ancak doğru SEO stratejisi ile dijital pazarda lider konuma gelebilirsiniz.",
        },
        {
          title: "Uzun Vadeli Büyüme",
          description: "SEO, sürekli ve organik trafik sağlar. Reklam bütçeniz olmadan bile, doğru SEO stratejisi ile uzun vadede büyüyen bir müşteri portföyü oluşturabilirsiniz.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Güzellik Merkezi Analizi",
          description: "Güzellik merkezinizin mevcut durumunu analiz eder, hizmet alanlarınızı belirler ve rakip analizi yaparız. Güzellik sektörüne özel anahtar kelimeleri araştırırız.",
        },
        {
          step: "2",
          title: "Yerel SEO ve Görsel Stratejisi",
          description: "Google My Business optimizasyonu, yerel dizinlere kayıt ve görsel SEO ile bölgenizdeki aramalarda görünürlüğünüzü artırırız.",
        },
        {
          step: "3",
          title: "İçerik ve Teknik Optimizasyon",
          description: "Randevu odaklı içerikler oluşturur, görsel optimizasyonu yapar ve web sitenizin hızını ve kullanıcı deneyimini optimize ederiz.",
        },
        {
          step: "4",
          title: "Sürekli Takip ve İyileştirme",
          description: "Performans metriklerini takip eder, müşteri geri bildirimlerini analiz eder ve SEO stratejinizi sürekli olarak iyileştiririz.",
        },
      ]}
    />
  );
}

