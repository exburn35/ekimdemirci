import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AIVisual from "@/components/AIVisual";
import GoogleAIOverviewSection from "@/components/GoogleAIOverviewSection";
import AILogosSection from "@/components/AILogosSection";

export const metadata: Metadata = {
  title: "Yapay Zeka SEO Uygulama Stratejileri | Ekim Demirci",
  description: "ChatGPT, Perplexity, Claude ve Google AI Overviews için platform bazlı teknik optimizasyonlar, alıntı mekanizmaları ve uygulama stratejileri.",
  alternates: {
    canonical: "/seo-hizmetleri/yapay-zeka-seo",
  },
  openGraph: {
    title: "Yapay Zeka SEO Uygulama Stratejileri | Ekim Demirci",
    description: "Yapay zeka arama motorları için platforma özel somut optimizasyon rehberi.",
  },
};

export default function AISEO() {
  const faqItems = [
    {
      question: "ChatGPT arama yanıtlarında markam nasıl önerilen kaynak olarak yer alır?",
      answer: "ChatGPT Search, internet üzerindeki yüksek otoriteye sahip canlı web dizinlerini tarar. İçeriklerin net Özne-Yüklem-Nesne ilişkisiyle kurgulanması, alıntılanabilir veri tabloları içermesi ve Wikidata gibi dijital varlık grafiklerine bağlı olması markanızı doğrudan önerilen kaynak konumuna getirir."
    },
    {
      question: "Perplexity alıntılarında üst sıralara çıkmak için hangi kaynak türleri tercih edilir?",
      answer: "Perplexity akademik makaleler, sayısal karşılaştırma tabloları ve açıkça kaynağı belirtilmiş araştırma verilerini önceliklendirir. Metin içi rakamsal doğrulamalar ve bağımsız bilgi paragrafları alıntılanma şansını artırır."
    },
    {
      question: "Google AI Overviews özet kartlarına girmek için snippet optimizasyonu nasıl yapılır?",
      answer: "Google AI Overviews, klasik Featured Snippet mantığıyla çalışır. H2 ve H3 başlıklarının hemen altına yerleştirilen 40-50 kelimelik net yanıt paragrafları, JSON-LD şemaları ve HTML liste ögeleri özet kartlarına girişi kolaylaştırır."
    },
    {
      question: "Claude ve büyük dil modelleri için semantik veri yapısı nasıl kurgulanır?",
      answer: "Claude gibi derin semantik modeller, pazarlama jargonu içermeyen ve konusal hiyerarşisi net metinleri tercih eder. E-E-A-T (Deneyim, Uzmanlık, Otorite, Güvenilirlik) sinyalleri taşıyan editoryal yapılar modelin güven skorunu yükseltir."
    }
  ];

  return (
    <ServicePageLayout
      title="Yapay Zeka SEO Uygulama Stratejileri"
      subtitle="Platform Bazlı Optimizasyon Taktikleri"
      description="ChatGPT, Perplexity, Claude ve Google AI Overviews motorlarının çalışma mekanizmalarına göre kurgulanan somut teknik ve taktiksel optimizasyon adımları."
      icon="Brain"
      gradient="from-blue-500 via-cyan-500 to-emerald-500"
      definition={{
        question: "Platform Bazlı Yapay Zeka SEO Yaklaşımı",
        answer: "Bu sayfa, farklı yapay zeka arama motorlarının alıntı mekanizmalarına özel somut uygulama taktiklerini içerir.",
        paragraph: "Generative Engine Optimization alanında şemsiye kavramlar ve genel metodolojiler hakkında bilgi edinmek isterseniz GEO'nun ne olduğu ve nasıl çalıştığı sayfasını ziyaret edebilirsiniz. Burada ise her bir AI platformuna özgü teknik detaylar ele alınmaktadır."
      }}
      scope={[
        {
          title: "ChatGPT (OpenAI) Optimizasyon Taktikleri",
          description: "OpenAI arama dizini için Varlık-İlişki (Entity-Attribute) ağı kurguluyor, metinleri canlı web tarayıcısının en rahat alıntılayacağı soru-cevap formatına getiriyorum."
        },
        {
          title: "Perplexity.ai Alıntı Mekanizması",
          description: "Perplexity'nin indeksleme mantığına uygun sayısal veri tabloları, kaynak atıfları ve araştırma özetleri hazırlayarak citation oranlarını yükseltiyorum."
        },
        {
          title: "Claude (Anthropic) Semantik Derinlik",
          description: "Gereksiz pazarlama jargonundan arındırılmış, doğrudan bilgi odaklı ve konusal hiyerarşisi net editoryal metin yapıları inşa ediyorum."
        },
        {
          title: "Google AI Overviews Snippet Optimizasyonu",
          description: "Google'ın arama özet panellerine girmek için H2/H3 altı doğrudan yanıt paragrafları ve hiyerarşik JSON-LD şemaları kodluyorum."
        }
      ]}
      targetAudience={[
        {
          audience: "Yenilikçi E-Ticaret Markaları",
          benefit: "Ürünlerin ChatGPT Search ve Perplexity sorgularında doğrudan satın alma önerisi olarak listelenmesi."
        },
        {
          audience: "SaaS ve Teknoloji Şirketleri",
          benefit: "Yazılım çözümlerinizin yapay zeka arama motorlarında kategorinin en iyi alternatifi olarak tavsiye edilmesi."
        },
        {
          audience: "Sağlık ve Medikal Kuruluşlar",
          benefit: "Tedavi ve uzmanlık alanlarınızın yapay zeka sağlık özetlerinde doğrulanmış kaynak gösterilmesi."
        },
        {
          audience: "Kurumsal Danışmanlık Firmaları",
          benefit: "Sektörel rapor ve çözümlerinizin yapay zeka yanıtlarında alıntılanarak kurumsal otoritenin pekişmesi."
        }
      ]}
      evidence={[
        {
          projectCode: "PROJE Z-1",
          metric: "+%65 AI Alıntı Artışı",
          detail: "Platform bazlı yapay zeka optimizasyonu yapılan SaaS projesinde Perplexity ve ChatGPT alıntılanma oranındaki artış.",
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
      {/* Platform Comparison Table Section */}
      <section className="py-16 bg-[#0a0f25] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Yapay Zeka Motorları Karşılaştırmalı Optimizasyon Matrisi
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Her bir platformun içerik tercihi, öne çıkan alıntı sinyali ve teknik gereksinimleri farklılık gösterir.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#111836] border-b border-white/10 text-white font-bold text-sm md:text-base">
                  <th className="p-4 md:p-5">Platform</th>
                  <th className="p-4 md:p-5">Tercih Edilen İçerik Formatı</th>
                  <th className="p-4 md:p-5">Öne Çıkan Alıntı Sinyali</th>
                  <th className="p-4 md:p-5">Teknik Gereksinim</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300 text-sm md:text-base bg-[#0d1433]/60">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 md:p-5 font-bold text-cyan-400">ChatGPT (OpenAI)</td>
                  <td className="p-4 md:p-5">Soru-Cevap blokları, Özne-Yüklem ilişkisi barındıran net metinler</td>
                  <td className="p-4 md:p-5">Co-citation (Marka Birlikteliği) ve Wikidata varlık bağlantısı</td>
                  <td className="p-4 md:p-5">Hızlı sunucu yanıt süresi, temiz HTML ve JSON-LD şemaları</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 md:p-5 font-bold text-purple-400">Perplexity.ai</td>
                  <td className="p-4 md:p-5">Sayısal veri tabloları, araştırma özetleri ve karşılaştırmalar</td>
                  <td className="p-4 md:p-5">Açık kaynak atıfları ve metin içi rakamsal doğrulamalar</td>
                  <td className="p-4 md:p-5">İndeksleme engelinin bulunmaması, taranabilir açık URL yapısı</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 md:p-5 font-bold text-emerald-400">Claude (Anthropic)</td>
                  <td className="p-4 md:p-5">Derin semantik bağlamlı, gereksiz dolgu laflardan arındırılmış editoryal içerikler</td>
                  <td className="p-4 md:p-5">E-E-A-T (Uzmanlık ve Otorite) sinyalleri ve konusal bütünlük</td>
                  <td className="p-4 md:p-5">Mantıksal H1-H6 hiyerarşisi ve anlamsal paragraf kırılımları</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 md:p-5 font-bold text-amber-400">Google AI Overviews</td>
                  <td className="p-4 md:p-5">40-50 kelimelik doğrudan yanıt paragrafları ve HTML listeleri</td>
                  <td className="p-4 md:p-5">Geleneksel SERP ilk sayfa sıralaması ve Featured Snippet uyumu</td>
                  <td className="p-4 md:p-5">Search Console doğrulaması ve gelişmiş Schema.org etiketleri</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Visual Component */}
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
