import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Avukatlar için SEO | Ekim Demirci",
  description: "Hukuk bürolarınız için yerel ve ulusal SEO hizmetleri ile potansiyel müvekkillerinize ulaşın. Hukuk alanında uzmanlaşmış SEO çözümleri.",
  openGraph: {
    title: "Avukatlar için SEO Hizmetleri | Ekim Demirci",
    description: "Hukuk bürolarınız için özelleştirilmiş SEO çözümleri.",
  },
};

export default function LawyersSEO() {
  return (
    <ServicePageLayout
      title="Avukatlar için SEO"
      subtitle="Sektörel SEO"
      description="Hukuk bürolarınız için yerel ve ulusal SEO hizmetleri ile potansiyel müvekkillerinize ulaşın. Hukuk alanında uzmanlaşmış SEO stratejileri ile dijital varlığınızı güçlendirin."
      icon="Settings"
      gradient="from-green-500 to-emerald-500"
      features={[
        "Hukuk Alanına Özel Anahtar Kelime Araştırması",
        "Yerel ve Ulusal SEO Stratejisi",
        "Hukuk Blog İçerikleri",
        "Google My Business Optimizasyonu",
        "Müvekkil Yorumları ve Referanslar",
        "Teknik SEO İyileştirmeleri",
        "Sosyal Medya Entegrasyonu",
        "Rakip Analizi ve Benchmarking",
      ]}
      benefits={[
        {
          title: "Daha Fazla Müvekkil",
          description: "Yerel ve ulusal arama sonuçlarında üst sıralarda yer alarak, potansiyel müvekkillerin sizi bulmasını sağlayın. SEO optimizasyonu ile müvekkil portföyünüzü genişletebilirsiniz.",
        },
        {
          title: "Uzmanlık Alanınızda Otorite",
          description: "Hukuk alanınızda uzman olduğunuzu gösterin. SEO ile web siteniz arama motorlarında güvenilir bir kaynak olarak görülür ve otoriteniz artar.",
        },
        {
          title: "Rekabet Avantajı",
          description: "Hukuk sektöründe yoğun rekabet var, ancak doğru SEO stratejisi ile dijital pazarda rakiplerinizden öne çıkabilirsiniz.",
        },
        {
          title: "Uzun Vadeli Büyüme",
          description: "SEO, sürekli ve organik trafik sağlar. Reklam bütçeniz olmadan bile, doğru SEO stratejisi ile uzun vadede büyüyen bir müvekkil portföyü oluşturabilirsiniz.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Hukuk Bürosu Analizi",
          description: "Hukuk büronuzun mevcut durumunu analiz eder, uzmanlık alanlarınızı belirler ve rakip analizi yaparız. Hukuk sektörüne özel anahtar kelimeleri araştırırız.",
        },
        {
          step: "2",
          title: "İçerik ve SEO Stratejisi",
          description: "Hukuk blog içerikleri, hizmet sayfaları ve anahtar kelime optimizasyonu ile web sitenizin içeriğini SEO için optimize ederiz.",
        },
        {
          step: "3",
          title: "Yerel ve Teknik Optimizasyon",
          description: "Google My Business optimizasyonu, yerel dizinlere kayıt ve teknik SEO iyileştirmeleri ile görünürlüğünüzü artırırız.",
        },
        {
          step: "4",
          title: "Sürekli Takip ve İyileştirme",
          description: "Performans metriklerini takip eder, müvekkil geri bildirimlerini analiz eder ve SEO stratejinizi sürekli olarak iyileştiririz.",
        },
      ]}
    />
  );
}

