import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AIVisual from "@/components/AIVisual";
import GoogleAIOverviewSection from "@/components/GoogleAIOverviewSection";
import AILogosSection from "@/components/AILogosSection";

export const metadata: Metadata = {
  title: "Yapay Zeka SEO & GEO Danışmanlığı | Ekim Demirci",
  description: "ChatGPT, Perplexity ve Google AI Overviews gibi yapay zeka arama sistemlerinde markanızın kaynak gösterilmesini ve önerilmesini sağlayan Yapay Zeka SEO çözümleri.",
  alternates: {
    canonical: "/seo-hizmetleri/yapay-zeka-seo",
  },
  openGraph: {
    title: "Yapay Zeka SEO & GEO Danışmanlığı | Ekim Demirci",
    description: "Yapay zeka yanıt sistemlerinde üst sıralarda ve doğrudan cevaplarda yer alma stratejileri.",
  },
};

export default function AISEO() {
  const faqItems = [
    {
      question: "Yapay Zeka SEO (GEO) Nedir ve Klasik SEO'dan farkı nedir?",
      answer: "Yapay Zeka SEO (Generative Engine Optimization), içeriği arama sonuçlarında link olarak sıralamaktan ziyade ChatGPT, Perplexity ve Google AI Overviews gibi üretken yapay zeka modellerinin doğrudan yanıtında kaynak olarak seçilmesini ve önerilmesini sağlayan semantik optimizasyon disiplinidir."
    },
    {
      question: "Yapay zeka arama motorlarında markam nasıl önerilen kaynak haline gelir?",
      answer: "Yapay zeka modelleri metinleri kelime kelime değil, Vektör/Embedding ve Varlık-İlişki (Entity-Attribute-Value) düğümleri üzerinden okur. Metindeki ilişkilerin net kurgulanması, alıntı yapılabilir bağımsız bilgi blokları ve otoriter kaynak atıfları sayesinde markanız önerilen seçenek konumuna gelir."
    },
    {
      question: "Yapay Zeka Aramalarında Sıralama ve Trafik Nasıl Ölçülür?",
      answer: "Geleneksel Search Console tıklamalarına ek olarak Share of Model Voice (SoMV), ChatGPT Search referans yönlendirmeleri (referral traffic) ve Perplexity citation oranları gibi yapay zeka özelinde metriklerle görünürlük ölçülür."
    },
    {
      question: "Sitemdeki içerikleri Yapay Zeka SEO'ya uyumlu hale getirmek ne kadar sürer?",
      answer: "Mevcut içeriklerin semantik üçlülerle zenrichleştirilmesi, alıntı yapılabilir bloklara dönüştürülmesi ve JSON-LD şemalarıyla desteklenmesi 4-6 hafta içinde yapay zeka motorlarının bilgi havuzuna yansır."
    }
  ];

  return (
    <ServicePageLayout
      title="Yapay Zeka SEO & GEO Danışmanlığı"
      subtitle="Üretken Yapay Zeka & Arama Optimizasyonu"
      description="Markanızı ve ürünlerinizi ChatGPT, Perplexity, Claude ve Google AI Overviews gibi üretken yapay zeka motorlarının doğrudan yanıtlarına entegre eden geleceğin arama optimizasyonu."
      icon="Brain"
      gradient="from-blue-500 via-cyan-500 to-emerald-500"
      definition={{
        question: "Yapay Zeka SEO (GEO) Nedir?",
        answer: "Yapay Zeka SEO (Generative Engine Optimization - GEO); web sitenizdeki içerik ve verilerin ChatGPT, Perplexity, Claude ve Google AI Overviews gibi üretken yapay zeka sistemleri tarafından 'güvenilir bilgi kaynağı' olarak tanınmasını, alıntılanmasını ve kullanıcı sorularına doğrudan öneri olarak sunulmasını sağlayan yeni nesil SEO disiplinidir.",
        paragraph: "Arama alışkanlıkları klasik Mavi Bağlantılar'dan (Blue Links) yapay zeka sohbet motorlarına kayıyor. Semrush 2025 verilerine göre bilgi odaklı aramaların %80'inden fazlası yapay zeka özet panelleriyle yanıtlanıyor. Yapay Zeka SEO, markanızın bu dönüşümde pazar lideri kalmasını temin eder."
      }}
      scope={[
        {
          title: "Varlık & Şema Mimarisi (Entity SEO)",
          description: "Markanızı ve ürünlerinizi yapay zeka modellerinin bilgi grafiğinde (Knowledge Graph) tekil ve yetkili bir nesne (Entity) olarak tanımlıyorum."
        },
        {
          title: "Alıntı Yapılabilir Bilgi Blokları (Information Gain)",
          description: "İçeriklerinizi yapay zeka botlarının rahatça özetleyip alıntılayabileceği bağımsız, doğrudan yanıt veren semantik bilgi yapılarına dönüştürüyorum."
        },
        {
          title: "Model Sesi Payı (Share of Model Voice)",
          description: "Sektörünüzle ilgili sorularda ChatGPT ve Perplexity'nin rakipleriniz yerine sizin markanızı önerme oranını ölçüyor ve sürekli artırıyorum."
        },
        {
          title: "İki Yönlü SEO & GEO Entegrasyonu",
          description: "Klasik Google organik sıralamaları ile yapay zeka yanıt alıntılarını senkronize ederek hem SERP'te hem AI yanıtlarında görünürlük sağlıyorum."
        }
      ]}
      process={[
        {
          step: "1",
          title: "AI Varlık & Model Analizi",
          description: "Markanızın ChatGPT, Perplexity ve Google AI Overviews üzerindeki mevcut alıntılanma durumunu ve rakiplerin SoMV oranlarını tespit ediyorum."
        },
        {
          step: "2",
          title: "Semantik Üçlü Kodlaması",
          description: "İçeriklerde Özne-Eylem-Nesne ilişkilerini kuruyor, metinleri yapay zeka vektör alanına (Vector Embedding) tam uyumlu hale getiriyorum."
        },
        {
          step: "3",
          title: "JSON-LD & Varlık Şemaları",
          description: "Organization, Product ve MedicalWebPage gibi gelişmiş şemalarla yapay zeka tarayıcılarına doğrudan yapılandırılmış veri sunuyorum."
        },
        {
          step: "4",
          title: "Yapay Zeka Trafik Ölçümleme",
          description: "Yapay zeka motorlarından gelen yönlendirme trafiğini ve marka anılma oranlarını özel analitik panelleri üzerinden raporluyorum."
        }
      ]}
      targetAudience={[
        {
          audience: "Yenilikçi E-Ticaret Markaları",
          benefit: "Ürünlerinin ChatGPT Search ve Perplexity yanıtlarında doğrudan satın alma önerisi olarak sunulması."
        },
        {
          audience: "SaaS & Teknoloji Şirketleri",
          benefit: "Yapay zeka arama motorlarında yazılım çözümlerinin en iyi alternatif olarak tavsiye edilmesi."
        },
        {
          audience: "Sağlık & Medikal Kuruluşlar",
          benefit: "Tedavi ve kliniğinizin yapay zeka sağlık yanıtlarında güvenilir referans gösterilmesi."
        },
        {
          audience: "Kurumsal Danışmanlık Firmaları",
          benefit: "Sektörel analiz ve raporlarınızın yapay zeka tarafından doğrudan alıntılanarak marka otoritesinin pekiştirilmesi."
        }
      ]}
      evidence={[
        {
          projectCode: "PROJE Z-1",
          metric: "%65 AI Alıntı Artışı",
          detail: "Yapay Zeka SEO optimizasyonu yapılan SaaS projesinde Perplexity ve ChatGPT alıntılanma oranındaki artış.",
          source: "Kaynak: Ekim Demirci Vaka Çalışmaları 2025"
        },
        {
          projectCode: "GÜNCEL PAZAR VERİSİ",
          metric: "250M+ Haftalık Kullanıcı",
          detail: "ChatGPT ve üretken yapay zeka arama sistemlerinin haftalık aktif kullanıcı hacmi.",
          source: "Kaynak: OpenAI Resmi 2024 Raporu"
        },
        {
          projectCode: "TRAFİK ÖNGÖRÜSÜ",
          metric: "2027 Kesişim Noktası",
          detail: "Yapay zeka aramalarının geleneksel Google arama trafiğini aşacağı öngörülen dönüm noktası.",
          source: "Kaynak: Semrush AI Search Traffic Study"
        }
      ]}
      faqItems={faqItems}
      blogCategory="yapay-zeka-seo"
      afterHeroNode={<GoogleAIOverviewSection />}
    >
      <section className="py-12 bg-[#0a0f25]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden glass-strong shadow-[0_0_50px_rgba(139,92,246,0.1)] border border-purple-500/20 group transition-all duration-300">
            <AIVisual />
          </div>
        </div>
      </section>
      <AILogosSection />
    </ServicePageLayout>
  );
}
