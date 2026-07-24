import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSchema from "@/components/schemas/FAQSchema";
import GEOPricingSection from "@/components/GEOPricingSection";
import GEODetailedContent from "@/components/GEODetailedContent";

export const metadata: Metadata = {
  title: "GEO (Generative Engine Optimization) Danışmanlığı | Ekim Demirci",
  description: "Google AI Overviews, ChatGPT, Claude ve Perplexity gibi yapay zeka motorlarında markanızın alıntılanması ve önerilmesi için profesyonel GEO danışmanlığı.",
  alternates: {
    canonical: "/geo-danismanligi",
  },
  openGraph: {
    title: "GEO (Generative Engine Optimization) Danışmanlığı | Ekim Demirci",
    description: "Yapay zeka arama motorları için web sitenizi optimize edin. Generative Engine Optimization (GEO) çözümleri.",
  },
};

export default function GEODanismanligi() {
  const faqItems = [
    {
      question: "GEO (Generative Engine Optimization) Nedir?",
      answer: "GEO, web sitelerinin ChatGPT, Gemini, Perplexity ve Google AI Overviews gibi yapay zeka tabanlı üretken arama motorlarında kaynak gösterilmesi, alıntılanması ve doğrudan önerilmesi amacıyla yapılan yeni nesil şemsiye optimizasyon sürecidir."
    },
    {
      question: "GEO'nun klasik SEO'dan farkı nedir?",
      answer: "Klasik SEO, anahtar kelimelere ve arama motoru sıralamalarına odaklanarak mavi bağlantılardan tıklama çekmeyi hedefler. GEO ise yapay zekanın ürettiği sentezlenmiş yanıtlarda markanızın güvenilir bir kaynak olarak referans gösterilmesini sağlar."
    },
    {
      question: "Semantik Triple (Özne-Yüklem-Nesne) yapısının GEO ile ilişkisi nedir?",
      answer: "Yapay zeka modelleri bilgiyi ilişkisel grafikler (Knowledge Graphs) üzerinden işler. Semantik Triple kullanarak sitenizdeki verileri özne-yüklem-nesne şeklinde yapılandırdığımızda, modeller sitenizi çok daha kolay anlar ve önerir."
    },
    {
      question: "GEO optimizasyonu ne kadar sürede sonuç verir?",
      answer: "GEO çalışmaları, yapay zeka modellerinin veri setlerini güncelleme sıklığına ve Google'ın AI Overviews indeksleme hızına bağlı olarak genellikle 3 ila 6 ay arasında etkisini göstermeye başlar."
    }
  ];

  return (
    <>
      <FAQSchema items={faqItems} />

      <ServicePageLayout
        title="GEO Danışmanlığı"
        subtitle="Generative Engine Optimization"
        description="Yapay zeka arama motorları çağında yerinizi alın. Google AI Overviews, Perplexity, ChatGPT ve Claude gibi üretken yapay zeka motorlarında markanızın güvenilir bir kaynak olarak önerilmesini, alıntılanmasını ve organik trafiğini artırmasını sağlıyorum."
        icon="Brain"
        gradient="from-emerald-500 via-teal-500 to-cyan-500"
        definition={{
          question: "GEO Danışmanlığı Nedir?",
          answer: "GEO (Generative Engine Optimization), web sitenizin bilgi yapısını ChatGPT, Perplexity, Claude ve Google AI Overviews gibi yapay zeka arama sistemlerinin doğrudan yanıtlarına kaynak olarak girecek şekilde yapılandıran temel şemsiye danışmanlık sürecidir.",
          paragraph: "Geleneksel SEO arama sonuç sayfasındaki 10 mavi bağlantıda yer almaya odaklanırken, GEO yapay zeka yanıtının tam içinde güvenilir marka olarak tavsiye edilmenizi sağlar. Kavramsal metodolojiyi kavradıktan sonra, platform bazlı yapay zeka motorlarına özel uygulama stratejileri sayfasını inceleyerek somut teknik adımları öğrenebilirsiniz."
        }}
        scope={[
          {
            title: "Semantik Varlık ve Knowledge Graph Bağlantısı",
            description: "Markanızı ve ürünlerinizi Büyük Dil Modellerinin (LLMs) hafızasında birbiriyle ilişkili güvenilir bir bilgi düğümü (Entity) olarak kurguluyorum."
          },
          {
            title: "Alıntı Yapılabilir Bilgi Blokları (Source Citation)",
            description: "İçeriklerinizi yapay zeka botlarının doğrudan özetleyebileceği net, yanıt odaklı soru-cevap ve tablo formatlarına dönüştürüyorum."
          },
          {
            title: "Model Sesi Payı (Share of Model Voice) Analizi",
            description: "Sektörel aramalarda ChatGPT ve Perplexity'nin rakipleriniz yerine sizin markanızı önerme oranını düzenli olarak ölçüp optimize ediyorum."
          },
          {
            title: "Google AI Overviews Optimizasyonu",
            description: "Arama sonuçlarının tepesinde çıkan Google AI Overviews özet kartlarında ürün ve hizmetlerinizin birincil referans kartı olarak yer almasını sağlıyorum."
          },
          {
            title: "NLP ve Doğal Dil Uyumlu İçerik Mimarisi",
            description: "Karmaşık teknik terimleri Doğal Dil İşleme (NLP) kurallarına uyarlayarak yapay zekanın içeriğinizi hatasız çözümlemesini temin ediyorum."
          },
          {
            title: "Dijital PR ve Marka Birlikteliği (Co-citation)",
            description: "Dış mecralarda ve sektörel yayınlarda markanızın adının doğru kavramlarla birlikte anılmasını sağlayarak AI güven skorunuzu yükseltiyorum."
          }
        ]}
        process={[
          {
            step: "1",
            title: "Yapay Zeka Görünürlük Denetimi",
            description: "ChatGPT, Perplexity ve Google AI Overviews üzerinde markanızın alıntılanma durumunu ve rakip SoMV oranlarını analiz ediyorum."
          },
          {
            step: "2",
            title: "Entity ve Knowledge Graph Yapılandırması",
            description: "Markanızın dijital dünyadaki varlığını tekil ve yetkili bir nesne (Entity) olarak tanımlıyorum."
          },
          {
            step: "3",
            title: "Semantik İçerik Dönüşümü",
            description: "Sayfalarınızı yapay zekanın en rahat okuduğu soru-cevap ve tablo formatlı bilgi bloklarıyla güncelliyorum."
          },
          {
            step: "4",
            title: "JSON-LD Şema Kodlaması",
            description: "Organization, Product ve Article şemalarını makineler arası dilde entegre ediyorum."
          },
          {
            step: "5",
            title: "Sürekli AI Model Takibi ve Raporlama",
            description: "Yapay zeka modellerinden gelen yönlendirme trafiğini ve marka tavsiye oranlarını aylık raporlarla sunuyorum."
          }
        ]}
        targetAudience={[
          {
            audience: "E-Ticaret ve Perakende Markaları",
            benefit: "Ürünlerin ChatGPT Search ve Perplexity sorgularında doğrudan satın alma önerisi olarak listelenmesi."
          },
          {
            audience: "SaaS ve Teknoloji Girişimleri",
            benefit: "Yazılım çözümlerinizin yapay zeka arama motorlarında kategorinin en iyi alternatifi olarak tavsiye edilmesi."
          },
          {
            audience: "Sağlık ve Medikal Kuruluşlar",
            benefit: "Tedavi ve uzmanlık alanlarınızın yapay zeka sağlık özetlerinde doğrulanmış kaynak gösterilmesi."
          },
          {
            audience: "B2B ve Kurumsal Şirketler",
            benefit: "Sektörel rapor ve çözümlerinizin yapay zeka yanıtlarında alıntılanarak kurumsal otoritenin pekişmesi."
          }
        ]}
        evidence={[
          {
            projectCode: "PROJE G-1",
            metric: "+%340 AI Alıntı Artışı",
            detail: "GEO danışmanlığı yürütülen markanın Perplexity ve ChatGPT yanıtlarında kaynak gösterilme oranındaki artış.",
            source: "Kaynak: Ekim Demirci Vaka Çalışmaları 2025"
          },
          {
            projectCode: "DOĞRULANMIŞ İSTATİSTİK",
            metric: "250M+ Haftalık Kullanıcı",
            detail: "ChatGPT'nin haftalık aktif kullanıcı hacmi ve arama alışkanlıklarındaki dönüşüm.",
            source: "Kaynak: OpenAI Resmi 2024 Raporu"
          },
          {
            projectCode: "PAZAR ARAŞTIRMASI",
            metric: "%13 - %80 AI Overviews",
            detail: "Google AI Overviews'ın bilgi yoğunluklu kategorilerdeki arama sonuçlarını doğrudan kapsama oranı.",
            source: "Kaynak: Semrush 2025 AI Search Study"
          }
        ]}
        faqItems={faqItems}
        blogCategory="yapay-zeka-seo"
      >
        {/* Contextual Internal Link Banner to Sub-Page */}
        <section className="py-12 bg-[#0d1433] border-t border-b border-cyan-500/20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Platform Bazlı Uygulama Taktiklerini Keşfedin
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Generative Engine Optimization'ın ne olduğunu ve genel metodolojisini kavradıktan sonra, her bir platform için özel kurgulanan{" "}
              <a 
                href="/seo-hizmetleri/yapay-zeka-seo" 
                className="text-cyan-400 font-semibold underline hover:text-cyan-300 transition-colors"
              >
                yapay zeka motorlarına özel uygulama stratejileri
              </a>{" "}
              sayfamızı inceleyebilir, ChatGPT, Perplexity, Claude ve Google AI Overviews optimizasyon adımlarını uygulayabilirsiniz.
            </p>
          </div>
        </section>

        <GEOPricingSection showGeoInfoBox={false} />
        <GEODetailedContent faqItems={faqItems} />
      </ServicePageLayout>
    </>
  );
}
