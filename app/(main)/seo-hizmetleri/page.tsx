import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Kapsamlı SEO Hizmetleri | Ekim Demirci",
  description: "Google arama sıralamalarında ve yapay zeka yanıtlarında görünürlüğünüzü artırmak için Teknik SEO, Sayfa İçi SEO, Sayfa Dışı SEO ve Yapay Zeka SEO (GEO) danışmanlık hizmetleri.",
  alternates: {
    canonical: "/seo-hizmetleri",
  },
  openGraph: {
    title: "Kapsamlı SEO Hizmetleri | Ekim Demirci",
    description: "Web siteniz için veri ve yapay zeka odaklı modern SEO danışmanlığı çözümleri.",
  },
};

export default function ServicesPage() {
  const faqItems = [
    {
      question: "SEO hizmetleri ne kadar sürede sonuç verir?",
      answer: "SEO sürdürülebilir bir süreçtir. Teknik hataların düzeltilmesi ve içerik optimizasyonlarının tamamlanmasıyla birlikte ilk belirgin hareketlilik 2-3 ay içinde başlar. 6. aydan itibaren ise hedef kelimelerde kalıcı üst sıra konumlanması ve organik ciro artışı elde edilir."
    },
    {
      question: "Google garantili 1. sıra vaatleri gerçekçi midir?",
      answer: "Google resmi kılavuzlarında hiçbir ajans veya danışmanın 1. sıra garantisi veremeyeceğini açıkça belirtir. Ben 1. sıra garantisi gibi yanıltıcı vaatler yerine, arama niyetine (Search Intent) tam uyum, semantik altyapı ve ölçülebilir organik büyüme garantisi sunuyorum."
    },
    {
      question: "Yapay Zeka SEO (GEO) ile klasik SEO arasındaki fark nedir?",
      answer: "Klasik SEO web sitelerini Google arama sonuç sayfalarında (SERP) sıralamaya odaklanırken; Yapay Zeka SEO (GEO), içeriklerinizi ChatGPT, Perplexity ve Google AI Overviews gibi üretken modellerin doğrudan yanıt kaynağı olarak seçip önermesini sağlar."
    },
    {
      question: "SEO danışmanlık hizmeti Google Ads (PPC) maliyetlerini etkiler mi?",
      answer: "Evet. Başarılı bir SEO çalışması, reklam açılış sayfalarınızın Kalite Puanını (Quality Score) yükselterek tıklama başına maliyetleri (CPC) düşürür. Ayrıca organik kanaldan gelen ücretsiz trafik sayesinde toplam pazarlama bütçenizi optimize eder."
    }
  ];

  return (
    <ServicePageLayout
      title="Kapsamlı SEO Danışmanlığı Hizmetleri"
      subtitle="Arama Motoru & Yapay Zeka Optimizasyonu"
      description="Markanızın arama motorlarında ve yapay zeka yanıtlarında üst sıralara çıkması, nitelikli ziyaretçi çekmesi ve sürdürülebilir ciro büyümesi elde etmesi için uçtan uca uzman danışmanlık."
      icon="Settings"
      gradient="from-blue-600 via-indigo-600 to-purple-600"
      definition={{
        question: "Kapsamlı SEO Hizmetleri Nedir?",
        answer: "SEO hizmetleri; web sitelerinin Google arama sonuçlarında ve yapay zeka yanıt motorlarında (ChatGPT, Perplexity, Gemini) organik görünürlük kazanması, nitelikli ziyaretçi çekmesi ve dönüşüm oranlarını artırması için uygulanan teknik, içerik ve otorite iyileştirme süreçlerinin bütünüdür.",
        paragraph: "Modern arama ekosisteminde SEO artık sadece kelime doldurmakla sınırlı değildir. Kullanıcı niyetine (Search Intent) yanıt veren semantik içerik mimarisi, yüksek Core Web Vitals sayfa hızı ve üretken yapay zeka sistemlerinde önerilme (GEO) süreçlerini kapsayan 360 derece bir büyüme disiplinidir."
      }}
      scope={[
        {
          title: "Teknik SEO & Altyapı Denetimi",
          description: "Google botlarının sitenizi engelsiz taraması için tarama bütçesi (crawl budget), taranabilirlik, indeksleme, SSL, canonical ve Core Web Vitals sayfa hızı optimizasyonları yapıyorum."
        },
        {
          title: "Sayfa İçi (On-Page) & Semantik İçerik",
          description: "Arama niyetini %100 karşılayan başlık etiketleri, semantik üçlüler (entity-attribute-value) ve kullanıcı odağını yüksek tutan zengin içerik mimarisi kurguluyorum."
        },
        {
          title: "Sayfa Dışı (Off-Page) & Otorite İnşası",
          description: "Markanızın dijital dünyadaki algısını güçlendirmek için spam riski taşımayan, sektörünüzle doğrudan ilgili otoriter backlink ve dijital PR stratejileri yürütüyorum."
        },
        {
          title: "Yapay Zeka SEO (GEO) Danışmanlığı",
          description: "Markanızı ve ürünlerinizi ChatGPT, Perplexity ve Google AI Overviews gibi yapay zeka yanıt sistemlerinde önerilen marka konumuna getiriyorum."
        },
        {
          title: "E-Ticaret & Dönüşüm Oranı Optimizasyonu",
          description: "Kategori ve ürün sayfalarında Product/AggregateRating şema kodlaması ve filtre URL optimizasyonu ile doğrudan satış cirolarınızı büyütüyorum."
        },
        {
          title: "Yerel (Local) SEO & Harita Yönetimi",
          description: "Google Business Profile profilinizi optimize ederek bölgesel ve 'yakınımdaki' aramalarda Harita Kutusu'nda (Map Pack) ilk 3 sırada konumlandırıyorum."
        }
      ]}
      process={[
        {
          step: "1",
          title: "Derinlemesine Audit & Teşhis",
          description: "Sitenizin teknik altyapısını, içerik yamyamlaşması risklerini ve rakip stratejilerini Screaming Frog ve Ahrefs verileriyle analiz ediyorum."
        },
        {
          step: "2",
          title: "Semantik Mimari & Yol Haritası",
          description: "Sorgu fan-out mantığıyla anahtar kelime kümelerini kurguluyor ve 6 aylık stratejik öncelik haritasını çıkartıyorum."
        },
        {
          step: "3",
          title: "Teknik Kodlama & Şema Uygulaması",
          description: "JSON-LD şemaları, Core Web Vitals düzeltmeleri ve site içi iç linklenme yapısını eksiksiz entegre ediyorum."
        },
        {
          step: "4",
          title: "Sürekli Ölçüm & Büyüme Raporlaması",
          description: "Organik trafik, kelime sıralamaları ve ciro artışlarını şeffaf aylık raporlarla sunarak stratejiyi sürekli güncelliyorum."
        }
      ]}
      targetAudience={[
        {
          audience: "E-Ticaret Mağazaları",
          benefit: "Kategori ve ürün sayfalarında reklam bağımlılığı olmaksızın organik satış ve ciro artışı."
        },
        {
          audience: "Kurumsal & B2B Şirketler",
          benefit: "Sektörel karar vericilerden doğrudan yüksek kaliteli müşteri teklif talepleri (RFQs) toplama."
        },
        {
          audience: "Sağlık & Medikal Klinikler",
          benefit: "Google YMYL standartlarında hekim otoritesi ve güvenilir hasta randevu hacmi kazanma."
        },
        {
          audience: "Yerel Hizmet İşletmeleri",
          benefit: "Bölgesel harita aramalarında ilk 3 sırada yer alarak telefon aramalarını ve ziyaretçi sayısını artırma."
        }
      ]}
      evidence={[
        {
          projectCode: "PROJE S-1",
          metric: "+%250 Organik Trafik",
          detail: "6 aylık semantik mimari ve teknik SEO çalışması sonucu elde edilen organik ziyaretçi büyümesi.",
          source: "Kaynak: Ekim Demirci Vaka Çalışmaları 2025"
        },
        {
          projectCode: "PAZAR ARAŞTIRMASI",
          metric: "%80 Bilgi Yoğunluğu",
          detail: "Google AI Overviews ve üretken yapay zeka sistemlerinin bilgi içerikli aramalarda ulaştığı kapsama oranı.",
          source: "Kaynak: Semrush 2025 AI Search Study"
        },
        {
          projectCode: "TEKNİK SKOR",
          metric: "95+ Mobile Speed",
          detail: "Core Web Vitals optimizasyonları sonrası mobil performans ve kullanıcı deneyimi skoru.",
          source: "Kaynak: Google PageSpeed Insights"
        }
      ]}
      faqItems={faqItems}
      blogCategory="SEO Hizmetleri"
    />
  );
}
