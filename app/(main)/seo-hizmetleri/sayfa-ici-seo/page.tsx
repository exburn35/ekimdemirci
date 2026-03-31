import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Sayfa İçi SEO (On-Page)",
  description: "Maksimum arama görünürlüğü için sayfalarınızdaki her öğeyi optimize edin. Meta etiketleri, başlıklar, içerik yapısı ve dahili bağlantı stratejileri.",
  openGraph: {
    title: "Sayfa İçi SEO Hizmetleri | Ekim Demirci",
    description: "Daha iyi arama sıralamaları için kapsamlı sayfa içi optimizasyon.",
  },
};

export default function OnPageSEO() {
  return (
    <ServicePageLayout
      title="Sayfa İçi SEO"
      subtitle="İçerik ve Optimizasyon"
      description="Sayfa içi SEO (On-page SEO), arama sıralamalarını ve kullanıcı deneyimini iyileştirmek için web sitenizin sayfalarındaki her bir öğenin optimize edilmesini içerir. Meta etiketlerden içerik yapısına kadar, her sayfanın hem arama motorları hem de kullanıcılar için mükemmel şekilde optimize edilmesini sağlıyoruz."
      icon="FileText"
      gradient="from-green-500 to-emerald-500"
      features={[
        "Meta Etiket Optimizasyonu",
        "Başlık (Title) Etiketi Optimizasyonu",
        "Hiyerarşik Başlık Yapısı (H1-H6)",
        "İçerik Optimizasyonu",
        "Dahili Bağlantı Stratejisi",
        "Görsel Alt Metinleri",
        "URL Yapısı",
        "İçerik Kalitesi İyileştirme",
        "Anahtar Kelime Yerleşimi",
        "Kullanıcı Niyeti Optimizasyonu",
      ]}
      benefits={[
        {
          title: "Daha Yüksek Arama Sıralamaları",
          description: "Doğru şekilde optimize edilmiş sayfa içi öğeler, arama motorlarına içeriğinizin uygunluğu ve kalitesi hakkında net sinyaller göndererek hedef anahtar kelimeleriniz için daha iyi sıralamalar sağlar.",
        },
        {
          title: "Daha İyi Tıklama Oranları (CTR)",
          description: "İçeriğinizi doğru temsil eden ve ilgi çekici eylem çağrıları içeren optimize edilmiş başlık etiketleri ve meta açıklamaları, arama sonuçlarından tıklama oranlarınızı önemli ölçüde artırabilir.",
        },
        {
          title: "Gelişmiş Kullanıcı Deneyimi",
          description: "Uygun başlıklar, dahili bağlantılar ve net bir organizasyon ile iyi yapılandırılmış içerik, kullanıcıların bilgi bulmasını ve sitenizde gezinmesini kolaylaştırarak hemen çıkma oranlarını düşürür.",
        },
        {
          title: "Uzun Vadeli Değer",
          description: "Kaliteli sayfa içi optimizasyon, arama algoritmaları evrilse bile zaman içinde değer sunmaya devam eden güçlü bir temel oluşturur.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Sayfa Bazlı Analiz",
          description: "Web sitenizin her sayfasını analiz ediyor; meta etiketleri, içerik yapısı, anahtar kelime kullanımı ve dahili bağlantılarda optimizasyon fırsatlarını belirliyoruz.",
        },
        {
          step: "2",
          title: "İçerik Optimizasyonu",
          description: "İçeriğinizi kullanıcı niyetine uyacak şekilde optimize ediyor, anahtar kelime uygunluğunu artırıyor, okunabilirliği geliştiriyor ve hedef kitlenize gerçek değer sunmasını sağlıyoruz.",
        },
        {
          step: "3",
          title: "Teknik Öğeler",
          description: "Başlık etiketleri, meta açıklamaları, başlık hiyerarşisi, görsel alt metinleri ve URL yapıları dahil olmak üzere tüm sayfa içi teknik öğeleri optimize ediyoruz.",
        },
        {
          step: "4",
          title: "Dahili Bağlantı Stratejisi",
          description: "Sayfa otoritesini dağıtan, taranabilirliği artıran ve kullanıcı navigasyonunu geliştiren stratejik bir dahili bağlantı yapısı geliştiriyor ve uyguluyoruz.",
        },
      ]}
      blogCategory="sayfa-ici-seo"
    />
  );
}

