import Link from "next/link";
import { ArrowRight, Server, Target, GitCompare } from "lucide-react";

const factors = [
  {
    icon: Server,
    title: "1. Sitenin Mevcut Durumu",
    desc: "Web sitenizin sayfa sayısı, CMS altyapısı, Core Web Vitals metrikleri, dizinleme geçmişi ve varsa geçmiş algoritma cezaları; ayrılacak teknik denetim ve düzeltme eforunu doğrudan belirler.",
  },
  {
    icon: Target,
    title: "2. Sektörel Rekabet Düzeyi",
    desc: "Hedeflenen anahtar kelimelerin zorluk derecesi, sektördeki rakiplerin alan adı otoritesi ve pazar payı; gerekli içerik hacmini, varlık eşlemelerini ve dış SEO bütçesini şekillendirir.",
  },
  {
    icon: GitCompare,
    title: "3. Hizmet Kapsamı (SEO / GEO / İkisi)",
    desc: "Yalnızca geleneksel Google SEO mu, üretken yapay zeka (ChatGPT, Gemini, Perplexity) GEO optimizasyonu mu yoksa her iki disiplini birleştiren hibrit model mi olacağı ücreti belirler.",
  },
];

export default function HomePricingFactors() {
  return (
    <section className="bg-[#0a0f25] border-b border-white/5 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            SEO Danışmanlık Ücretleri Nasıl Belirlenir?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Sabit ve kalıplaşmış paketler yerine; web sitenizin ihtiyaçlarına ve hedeflerinize göre şekillenen şeffaf 3 temel faktör.
          </p>
        </div>

        {/* 3 Faktör Kartı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {factors.map((factor) => {
            const Icon = factor.icon;
            return (
              <div
                key={factor.title}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {factor.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA: Fiyatları İncele */}
        <div className="text-center">
          <Link
            href="/seo-danismanlik-fiyatlari"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-base transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-[1.02] group"
          >
            <span>SEO & GEO Danışmanlık Fiyatlarını İncele</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
