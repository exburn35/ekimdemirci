import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

interface ComparisonRow {
  factor: string;
  seo: string;
  geo: string;
}

const comparisonData: ComparisonRow[] = [
  {
    factor: "Hedef",
    seo: "Google ve arama motorlarının sonuç sayfalarında (SERP) ilk sıralarda yer almak.",
    geo: "ChatGPT, Gemini, Perplexity ve Google AI Overviews yanıtlarında kaynak ve tavsiye gösterilmek.",
  },
  {
    factor: "Başarı Ölçüsü",
    seo: "Organik tıklama sayısı, anahtar kelime sıralamaları (SERP) ve web sitesi oturum hacmi.",
    geo: "Yapay zeka yanıtlarında alıntılanma sıklığı, marka referans oranı ve AI kaynak yönlendirmeleri.",
  },
  {
    factor: "İçerik Yapısı",
    seo: "Arama niyetine (Search Intent) uygun kapsamlı makaleler, rehberler ve anahtar kelime yerleşimi.",
    geo: "Doğrudan yanıt veren (Direct Answer), varlık (Entity) odaklı, kanıt ve istatistik içeren bilgi mimarisi.",
  },
  {
    factor: "Teknik Gereksinim",
    seo: "Core Web Vitals, site hızı, taranabilirlik, indekslenebilirlik ve mobil uyumluluk.",
    geo: "Gelişmiş JSON-LD şemaları (Schema.org), Bilgi Grafiği (Knowledge Graph) ve varlık doğrulaması.",
  },
  {
    factor: "Sonuç Süresi",
    seo: "Sektörel rekabete bağlı olarak 3 ila 6 ay arasında kalıcı ve kararlı yükseliş.",
    geo: "Yapay zeka modellerinin canlı arama ve dizinleme hızına göre 1 ila 3 ay içinde hızlı alıntılanma.",
  },
  {
    factor: "Birlikte Nasıl Çalışır?",
    seo: "Teknik temel ve kullanıcı trafiği sağlayarak sitenin otoritesini ve güven sinyallerini inşa eder.",
    geo: "İnşa edilen bu otoriteyi üretken yapay zekaya tanıtarak arama ekosisteminin geleceğinde liderlik sağlar.",
  },
];

export default function HomeSeoVsGeo() {
  return (
    <section className="bg-[#0d153a] border-b border-white/5 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            SEO ile GEO Arasındaki Fark
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Geleneksel arama motoru optimizasyonu (SEO) ile üretken yapay zeka optimizasyonu (GEO) arasındaki temel farklar ve birlikte çalışma prensipleri.
          </p>
        </div>

        {/* Desktop Semantic Table (md ve üzeri) */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f25]/60 shadow-xl mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04]">
                <th scope="col" className="py-4 px-6 text-sm font-semibold text-gray-300 w-1/4">
                  Karşılaştırma Kriteri
                </th>
                <th scope="col" className="py-4 px-6 text-sm font-bold text-blue-400 w-[37.5%]">
                  Klasik SEO (Google & SERP)
                </th>
                <th scope="col" className="py-4 px-6 text-sm font-bold text-emerald-400 w-[37.5%]">
                  GEO (ChatGPT, Gemini, Perplexity)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonData.map((row) => (
                <tr key={row.factor} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-sm font-semibold text-white align-top">
                    {row.factor}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-300 leading-relaxed align-top">
                    {row.seo}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-300 leading-relaxed align-top bg-emerald-500/[0.02]">
                    {row.geo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View (md altı) */}
        <div className="md:hidden space-y-4 mb-8">
          {comparisonData.map((row) => (
            <div
              key={row.factor}
              className="p-5 rounded-2xl bg-[#0a0f25] border border-white/10 space-y-3"
            >
              <div className="font-bold text-white text-base border-b border-white/10 pb-2">
                {row.factor}
              </div>
              <div>
                <div className="text-xs font-semibold text-blue-400 mb-1">
                  Klasik SEO (SERP):
                </div>
                <div className="text-sm text-gray-300 leading-relaxed">
                  {row.seo}
                </div>
              </div>
              <div className="pt-2 border-t border-white/5">
                <div className="text-xs font-semibold text-emerald-400 mb-1">
                  GEO (AI Yanıtları):
                </div>
                <div className="text-sm text-gray-300 leading-relaxed">
                  {row.geo}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Link: /geo-danismanligi */}
        <div className="text-center">
          <Link
            href="/geo-danismanligi"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            <span>GEO Danışmanlığı Hizmetini ve Metodolojisini Keşfedin</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
