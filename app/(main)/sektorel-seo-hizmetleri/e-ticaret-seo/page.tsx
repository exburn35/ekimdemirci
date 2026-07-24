import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSchema from "@/components/schemas/FAQSchema";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShoppingBag, TrendingUp, Search, Shield, Sparkles } from "lucide-react";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";

export const metadata: Metadata = {
  title: "E-Ticaret SEO Danışmanlığı | Ekim Demirci",
  description: "Online satışlarınızı ve organik cironuzu artırmak için ürün/kategori şemaları, facet optimizasyonu ve semantik içerik odaklı E-Ticaret SEO danışmanlığı.",
  alternates: {
    canonical: "/sektorel-seo-hizmetleri/e-ticaret-seo",
  },
  openGraph: {
    title: "E-Ticaret SEO Danışmanlığı | Ekim Demirci",
    description: "E-ticaret siteleri için kurguladığım semantik şema ve dönüşüm odaklı SEO çözümleri.",
  },
};

export default function ECommerceSEOPage() {
  const faqItems = [
    {
      question: "E-Ticaret SEO Danışmanlığı nedir?",
      answer: "E-ticaret SEO danışmanlığı, online satış yapan mağazaların kategori, ürün ve filtre sayfalarının Google arama sonuçlarında üst sıralara çıkması ve organik satış cirolarının artırılması için uygulanan teknik ve semantik optimizasyon sürecidir."
    },
    {
      question: "Kategori ve filtre (facet) sayfaları nasıl optimize edilir?",
      answer: "Çok kombinasyonlu filtre sayfalarında indeksleme bütçesini korumak için noindex/canonical stratejisi uygulanır. Yüksek aranma hacmine sahip filtre kombinasyonlarına ise özel semantik URL ve şema işaretlemeleri kurgulanır."
    },
    {
      question: "Product ve AggregateRating şeması e-ticarete ne kazandırır?",
      answer: "Google arama sonuçlarında ürün fiyatı, stok durumu, yıldız puanı ve değerlendirme sayısının zengin sonuç (Rich Snippet) olarak görünmesini sağlayarak tıklama oranını (CTR) %35'e kadar artırır."
    },
    {
      question: "E-Ticaret SEO çalışmalarının ciroya etkisi ne zaman görülür?",
      answer: "Kategori yapısının ve teknik altyapının iyileştirilmesiyle birlikte ilk 3 ay içinde organik görünürlük artışı başlar; 6. aydan itibaren sürekli ve belirgin ciro büyümesi elde edilir."
    }
  ];

  return (
    <>
      <FAQSchema items={faqItems} />

      <ServicePageLayout
        title="E-Ticaret SEO Danışmanlığı"
        subtitle="Sektörel SEO Çözümleri"
        description="Online mağazanızın ürün ve kategori sayfalarını Google ve yapay zeka arama motorlarında zirveye taşıyın. Semantik kategori mimarisi, ürün şema entegrasyonu ve dönüşüm odaklı içerik stratejisiyle organik satış cirolarınızı büyütüyorum."
        icon="Settings"
        gradient="from-purple-500 to-pink-500"
        features={[
          "Kategori & Koleksiyon Mimarısı Optimizasyonu",
          "Facet & Filtre İndeksleme Yönetimi",
          "Product & AggregateRating Rich Snippet Şemaları",
          "Core Web Vitals & E-Ticaret Hız İyileştirmesi",
          "Arama Niyetine Uygun Ürün İçerik Rehberleri",
          "Dönüşüm Oranı (CRO) & Sepet Terk Optimizasyonu"
        ]}
        benefits={[
          {
            title: "Organik Ciro & Satış Artışı",
            description: "Arama niyeti yüksek satın alma sorgularında görünür olarak reklam maliyeti olmaksızın sürdürülebilir satış hacmi kazandırıyorum."
          },
          {
            title: "Yüksek Tıklama Oranı (Rich Snippets)",
            description: "Fiyat, yıldız puanı ve stok durumunu arama sonuçlarına taşıyarak SERP üzerinde rakiplerinizin önüne geçmenizi sağlıyorum."
          },
          {
            title: "Verimli Tarama Bütçesi (Crawl Budget)",
            description: "Binlerce filtrelenmiş ürün sayfasının arama motoru botlarını yormasını engelliyor, sadece en değerli kategorilerin taranmasını sağlıyorum."
          },
          {
            title: "Yapay Zeka Aramalarında Önerilme",
            description: "Ürünlerinizi ChatGPT, Perplexity ve Google AI Overviews yanıtlarına doğrudan satın alma seçeneği olarak entegre ediyorum."
          }
        ]}
        process={[
          {
            step: "1",
            title: "E-Ticaret Depo & Altyapı Denetimi",
            description: "Mevcut e-ticaret yazılımınızın (Shopify, WooCommerce, Ticimax, IdeaSoft vb.) teknik tarama engellerini ve şema açıklarını tespit ediyorum."
          },
          {
            step: "2",
            title: "Kategori & Filtre Mimarisi Yapılandırması",
            description: "Kullanıcıların arama alışkanlıklarına göre katmanlı kategori ve filtre URL haritası kurguluyor, indeks çöplüğünü engelliyorum."
          },
          {
            step: "3",
            title: "Ürün & Marka Şema Kodlaması",
            description: "JSON-LD formatında fiyat, para birimi, stok ve değerlendirme verilerini doğrudan arama botlarına sunacak yapıyı entegre ediyorum."
          },
          {
            step: "4",
            title: "Semantik İçerik & Dönüşüm Optimizasyonu",
            description: "Ürün açıklamalarını ve kategori alt rehberlerini arama niyetine uygun semantik üçlülerle zenginleştirip dönüşüm oranlarını artırıyorum."
          }
        ]}
      >
        {/* Direct Definition & Concrete Evidence Section */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                E-Ticaret SEO Danışmanlığı Nedir?
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                E-Ticaret SEO Danışmanlığı, online satış yapan markaların kategorilerini ve ürünlerini arama motorlarında doğru kitleyle buluşturan uçtan uca altyapı yönetimidir. Mağazanız için <a href="/seo-hizmetleri/teknik-seo" className="text-purple-400 underline font-semibold">Teknik SEO</a> ve <a href="/seo-hizmetleri/sayfa-ici-seo" className="text-purple-400 underline font-semibold">Sayfa İçi SEO</a> mimarisini kurarak geleneksel reklam bütçelerine bağımlılığı azaltır, kesintisiz bir organik ciro kanalı inşa ederim.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-5 bg-[#111836] border border-purple-500/20 rounded-2xl">
                  <div className="text-xs text-purple-400 font-mono font-semibold mb-1">PROJE KODU: Proje E-1</div>
                  <div className="text-3xl font-extrabold text-emerald-400 mb-2">+%250 Organik Trafik</div>
                  <p className="text-xs text-gray-400">6 aylık çalışma sonucunda kategori optimizasyonu ile elde edilen ciro ve trafik artışı. (Kaynak: Ekim Demirci Vaka Çalışmaları 2025)</p>
                </div>
                <div className="p-5 bg-[#111836] border border-purple-500/20 rounded-2xl">
                  <div className="text-xs text-purple-400 font-mono font-semibold mb-1">HEDEF</div>
                  <div className="text-3xl font-extrabold text-white mb-2">İlk 3 Sıra</div>
                  <p className="text-xs text-gray-400">Satın alma niyetli hedef anahtar kelimelerde organik arama sonuçlarında zirve konumlanması.</p>
                </div>
                <div className="p-5 bg-[#111836] border border-purple-500/20 rounded-2xl">
                  <div className="text-xs text-purple-400 font-mono font-semibold mb-1">ZENGİN SONUÇ</div>
                  <div className="text-3xl font-extrabold text-purple-400 mb-2">%35 CTR Artışı</div>
                  <p className="text-xs text-gray-400">Product ve Yıldız Puanı Şemaları (Rich Snippet) sayesinde arama sonuçlarında tıklama artışı.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Relevant Blog Posts Link Section */}
        <div className="border-t border-white/5">
          <RelatedBlogPosts category="E-Ticaret SEO" currentPostId="e-ticaret-seo-nasil-yapilir" />
        </div>
      </ServicePageLayout>
    </>
  );
}
