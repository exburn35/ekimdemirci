import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSchema from "@/components/schemas/FAQSchema";
import ProductSchema from "@/components/schemas/ProductSchema";
import GEOPricingSection from "@/components/GEOPricingSection";
import GEOAIToolsSection from "@/components/GEOAIToolsSection";
import GEODetailedContent from "@/components/GEODetailedContent";

export const metadata: Metadata = {
  title: "GEO (Generative Engine Optimization) Danışmanlığı | Ekim Demirci",
  description: "Google'ın 8 patentine ve RAG mimarisine dayalı teknik GEO danışmanlığı. Google AI Overviews, ChatGPT Search ve Perplexity'de birincil kaynak olun.",
  alternates: {
    canonical: "/geo-danismanligi",
  },
  openGraph: {
    title: "GEO (Generative Engine Optimization) Danışmanlığı | Ekim Demirci",
    description: "Yapay zeka arama motorları için patent bazlı GEO danışmanlığı. Markanızı ChatGPT, Gemini ve Perplexity'de önerilen marka yapın.",
  },
};

export default function GEODanismanligi() {
  const faqItems = [
    {
      question: "GEO (Generative Engine Optimization) Danışmanlığı Nedir?",
      answer: "GEO (Generative Engine Optimization), web sitenizin bilgi mimarisini ChatGPT Search, Perplexity, Claude ve Google AI Overviews gibi yapay zeka arama sistemlerinin RAG (Retrieval-Augmented Generation) mekanizmalarına uyarlayarak yanıt metinlerinde güvenilir kaynak (source citation) olarak alıntılanmasını sağlayan patent bazlı danışmanlık disiplinidir."
    },
    {
      question: "GEO danışmanlığının klasik SEO çalışmalarından farkı nedir?",
      answer: "Klasik SEO, arama sonuç sayfasındaki 10 mavi bağlantıda üst sıralara yerleşip tıklama almayı hedefler. GEO ise yapay zekanın ürettiği sentezlenmiş yanıtın tam içinde markanızın birincil tavsiye ve güvenilir referans kartı olarak yer almasını sağlar (US20240289407A1)."
    },
    {
      question: "Semantik Üçlüler (Semantic Triplets - Özne-Yüklem-Nesne) GEO ile nasıl ilişkilidir?",
      answer: "Büyük Dil Modelleri (LLMs) bilgiyi ilişkisel grafikler (Knowledge Graphs) üzerinden işler (US8554769B1). Sitenizdeki verileri Özne-Yüklem-Nesne formatında yapılandırdığımızda, modeller sitenizdeki gerçekleri halüsinasyona düşmeden hatasız anlar ve alıntılar."
    },
    {
      question: "AI Query Fan-Out tekniği GEO stratejisinde neden önemlidir?",
      answer: "Google patentlerine göre (US9916366B1), kullanıcı bir arama yaptığında yapay zeka motoru arka planda bu aramayı onlarca alt sorguya (sub-queries) böler. GEO çalışması ile içeriğinizi bu alt sorgu ağacının tamamını kapsayacak şekilde optimize ederiz."
    },
    {
      question: "Co-Citation (Marka Birlikteliği) AI güven skorunu nasıl etkiler?",
      answer: "Yapay zeka motorları bir markanın yetkinliğini dış web kaynaklarında o markanın adının hangi kavramlar ve sektör liderleriyle birlikte anıldığına bakarak ölçer (US7536408B2). Otoriter mecralarda kurguladığımız co-citation yapısı AI güven skorunuzu doğrudan yükseltir."
    },
    {
      question: "GEO optimizasyonu ne kadar sürede somut sonuç verir?",
      answer: "GEO optimizasyonlarının etkileri, yapay zeka tarayıcılarının (GPTBot, PerplexityBot, ClaudeBot) sitenizi vektörleştirmesine ve Google AI Overviews indeks güncelleme hızına bağlı olarak 2 ila 4 ay içerisinde görünürlük artışı şeklinde kendini gösterir."
    }
  ];

  return (
    <>
      <FAQSchema items={faqItems} />
      <ProductSchema
        name="GEO (Generative Engine Optimization) Danışmanlığı"
        description="Google'ın 8 resmi patenti ve RAG altyapısına dayalı teknik GEO danışmanlık hizmet paketi. ChatGPT Search, Google AI Overviews ve Perplexity'de birincil kaynak olun."
        url="https://ekimdemirci.com/geo-danismanligi"
        image="https://ekimdemirci.com/uploads/geo-visual-semantic-patent-diagram.png"
        lowPrice={25000}
        highPrice={75000}
        ratingValue={4.9}
        reviewCount={48}
      />

      <ServicePageLayout
        title="GEO Danışmanlığı"
        subtitle="Generative Engine Optimization & RAG Mimarisi"
        description="Google'ın 8 resmi patentine ve RAG altyapısına dayalı bilimsel GEO danışmanlığı. ChatGPT, Google AI Overviews, Perplexity ve Claude'da markanızın tavsiye edilen birincil kaynak olmasını sağlıyorum."
        icon="Brain"
        gradient="from-emerald-500 via-teal-500 to-cyan-500"
        definition={{
          question: "GEO Danışmanlığı Nedir?",
          answer: "GEO (Generative Engine Optimization), web sitenizin içerik ve veri yapısını yapay zeka arama motorlarının (ChatGPT Search, Perplexity, Google AI Overviews) RAG vektör arama ve Knowledge Graph indekslerine tam uyumlu hale getiren bilimsel danışmanlık sürecidir.",
          paragraph: "Rakipleriniz geleneksel SEO ile 10 mavi bağlantıda tıklama yarışındayken, patent bazlı GEO stratejimiz ile markanızı yapay zekanın kullanıcıya sunduğu tek doğrudan yanıta birincil otoriter kaynak olarak yerleştiriyoruz."
        }}
        scope={[
          {
            title: "Semantik Varlık (Entity) & Knowledge Graph",
            description: "Markanızı Wikidata, Wikipedia ve otoriter dizinlerde tanımlayarak LLM hafızasında sarsılmaz bir ilişkisel varlık düğümü (US10210256B2) yapıyorum."
          },
          {
            title: "RAG & Source Citation Optimizasyonu",
            description: "İçeriklerinizi yapay zeka botlarının doğrudan yanıt kartlarına çekebileceği yüksek bilgi yoğunluklu soru-cevap ve tablo bloklarına dönüştürüyorum (US20240289407A1)."
          },
          {
            title: "AI Query Fan-Out Kapsama Stratejisi",
            description: "Kullanıcı prompt'larından türeyen tüm alt sorgu ağaçlarını (sub-queries) hedefleyen çok açılı semantik içerik mimarisi inşa ediyorum (US9916366B1)."
          },
          {
            title: "Share of Model Voice (SoMV) Ölçümü",
            description: "ChatGPT ve Perplexity sorgularında markanızın rakiplere kıyasla önerilme oranını gelişmiş AI takip araçlarıyla anlık izleyip optimize ediyorum."
          },
          {
            title: "Co-Citation & AI Otorite Güven Ağları",
            description: "Sektörel basın ve otoriter yayınlarda markanızın doğru kavramlarla anılmasını sağlayarak AI güven skorunu (US7536408B2) üst seviyeye çıkarıyorum."
          },
          {
            title: "AI Crawl & llms.txt Mimari Yönetimi",
            description: "GPTBot, ClaudeBot ve PerplexityBot erişim izinlerini düzenleyip sitenize özel llms.txt ve vektör tarama kurgularını yapılandırıyorum (US7693813B1)."
          }
        ]}
        process={[
          {
            step: "1",
            title: "AI Görünürlük & SoMV Auditi",
            description: "ChatGPT, Perplexity ve Google AI Overviews üzerinde markanızın alıntılanma durumunu ve rakip SoMV oranlarını denetliyorum."
          },
          {
            step: "2",
            title: "Entity & Knowledge Graph Yapılandırması",
            description: "Markanızı dijital dünyada tekil, yetkili ve ilişkisel bir varlık (Entity) olarak tanımlıyorum (US10210256B2)."
          },
          {
            step: "3",
            title: "Semantik Triple & RAG Dönüşümü",
            description: "Sayfalarınızı yapay zekanın en rahat okuduğu Özne-Yüklem-Nesne semantik formatına kavuşturuyorum (US8554769B1)."
          },
          {
            step: "4",
            title: "JSON-LD Şema Kodlaması",
            description: "Organization, Service, Product ve Article şemalarını makineler arası dilde entegre ediyorum."
          },
          {
            step: "5",
            title: "Co-Citation PR & Güven Ağları",
            description: "Dış mecralarda marka birlikteliklerini kurgulayarak yapay zeka otorite katsayısını artırıyorum (US7536408B2)."
          },
          {
            step: "6",
            title: "Sürekli Model Takibi ve Raporlama",
            description: "Yapay zeka modellerinden gelen yüksek kaliteli yönlendirme trafiğini ve tavsiye payını aylık raporlarla sunuyorum."
          }
        ]}
        targetAudience={[
          {
            audience: "E-Ticaret ve Perakende Markaları",
            benefit: "Ürünlerinizin ChatGPT Search ve Perplexity sorgularında birincil satın alma tavsiyesi olarak listelenmesi."
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
        <GEOAIToolsSection />
        <GEODetailedContent faqItems={faqItems} />
      </ServicePageLayout>
    </>
  );
}
