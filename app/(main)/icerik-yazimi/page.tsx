import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "İçerik Yazımı | Ekim Demirci",
  description: "SEO uyumlu, kaliteli içerik yazımı hizmetleri. Blog yazıları, web sayfası içerikleri ve dijital pazarlama içerikleri.",
  openGraph: {
    title: "İçerik Yazımı Hizmetleri | Ekim Demirci",
    description: "SEO uyumlu, kaliteli içerik yazımı ile dijital varlığınızı güçlendirin.",
  },
};

export default function ContentWriting() {
  return (
    <ServicePageLayout
      title="İçerik Yazımı"
      subtitle="İçerik Hizmetleri"
      description="SEO uyumlu, kaliteli içerik yazımı hizmetleri ile dijital varlığınızı güçlendirin. Blog yazıları, web sayfası içerikleri ve dijital pazarlama içerikleri ile hedef kitlenize ulaşın."
      icon="FileText"
      gradient="from-green-500 to-emerald-500"
      features={[
        "SEO Uyumlu İçerik Yazımı",
        "Blog Yazıları",
        "Web Sayfası İçerikleri",
        "Ürün Açıklamaları",
        "Teknik İçerik Yazımı",
        "E-Ticaret İçerikleri",
        "Sektörel İçerikler",
        "İçerik Optimizasyonu",
      ]}
      benefits={[
        {
          title: "SEO Uyumlu İçerik",
          description: "Tüm içerikler SEO best practices'e uygun şekilde yazılır. Anahtar kelime optimizasyonu, meta etiketleri ve içerik yapısı SEO için optimize edilir.",
        },
        {
          title: "Kaliteli ve Orijinal İçerik",
          description: "Her içerik özgün, araştırma tabanlı ve hedef kitleye uygun şekilde hazırlanır. Kopya içerik kullanılmaz, tüm içerikler orijinaldir.",
        },
        {
          title: "Dönüşüm Odaklı",
          description: "İçerikler sadece SEO için değil, aynı zamanda dönüşüm için de optimize edilir. Kullanıcı deneyimi ve dönüşüm oranları göz önünde bulundurulur.",
        },
        {
          title: "Sürekli İçerik Akışı",
          description: "Düzenli içerik yayınlama stratejisi ile web sitenizin otoritesini artırır ve organik trafiğinizi sürekli olarak büyütürsünüz.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "İçerik Stratejisi",
          description: "Hedef kitlenizi, anahtar kelimelerinizi ve içerik hedeflerinizi belirleriz. İçerik takvimi ve yayınlama stratejisi oluştururuz.",
        },
        {
          step: "2",
          title: "Araştırma ve Planlama",
          description: "Konu araştırması yapar, rakip içerikleri analiz eder ve içerik yapısını planlarız. SEO ve kullanıcı deneyimi faktörlerini göz önünde bulundururuz.",
        },
        {
          step: "3",
          title: "İçerik Yazımı",
          description: "SEO uyumlu, kaliteli ve orijinal içerikler yazarız. İçerikler hedef kitleye uygun ton ve stilde hazırlanır.",
        },
        {
          step: "4",
          title: "Optimizasyon ve Yayınlama",
          description: "İçerikleri SEO için optimize eder, görseller ekler ve yayınlarız. Yayın sonrası performans takibi yaparız.",
        },
      ]}
    />
  );
}

