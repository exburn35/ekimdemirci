"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, CheckCircle2, ArrowRight, BarChart3, Zap, Target } from "lucide-react";

const auditFeatures = [
  {
    icon: Search,
    title: "Kapsamlı Analiz",
    description: "Web sitenizin SEO sağlığı ve performans metriklerine derinlemesine bakış.",
  },
  {
    icon: BarChart3,
    title: "Teknik Denetim",
    description: "Arama sıralamalarınızı etkileyen teknik sorunları tespit edin ve düzeltin.",
  },
  {
    icon: Target,
    title: "Anahtar Kelime Araştırması",
    description: "Yüksek değerli anahtar kelimeleri ve optimizasyon fırsatlarını keşfedin.",
  },
  {
    icon: Zap,
    title: "Eylem Planı",
    description: "Önceliklendirilmiş öneriler içeren detaylı bir yol haritası alın.",
  },
];

export default function SEOAuditSection() {
  return (
    <section className="py-24 bg-[#0a0f25] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111836] rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-[0_0_40px_rgba(139,92,246,0.1)] border border-purple-500/20"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl opacity-50 -z-0" />

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm font-semibold text-purple-400 mb-6 shadow-sm">
                  <Search className="w-4 h-4" />
                  Ücretsiz SEO Analizi
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
                  Ücretsiz SEO Analizinizi Alın
                </h2>

                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Web sitenizin Google sıralamalarında daha üst sıralara çıkmasını engelleyen kritik hataları ve büyüme fırsatlarını birlikte keşfedelim. Sitenize özel hazırlayacağım detaylı bir analiz raporuyla arama görünürlüğünüzü nasıl artırabileceğinizi gösteriyorum.
                </p>

                <div className="space-y-4 mb-8">
                  {auditFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner border border-purple-500/30">
                          <Icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <Link
                  href="/iletisim?audit=true"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-full font-bold text-lg hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  Ücretsiz Analiz Talep Edin
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="relative">
                <div className="bg-[#0a0f25]/50 border border-white/5 p-8 rounded-3xl shadow-inner">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                        <span className="text-white font-semibold">Site Hızı</span>
                      </div>
                      <span className="text-purple-400 text-sm font-medium bg-purple-500/20 px-3 py-1 rounded-full">Analiz ediliyor...</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                        <span className="text-white font-semibold">Mobil Uyumluluk</span>
                      </div>
                      <span className="text-purple-400 text-sm font-medium bg-purple-500/20 px-3 py-1 rounded-full">Analiz ediliyor...</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                        <span className="text-white font-semibold">Sayfa İçi SEO</span>
                      </div>
                      <span className="text-purple-400 text-sm font-medium bg-purple-500/20 px-3 py-1 rounded-full">Analiz ediliyor...</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                        <span className="text-white font-semibold">Backlinkler</span>
                      </div>
                      <span className="text-purple-400 text-sm font-medium bg-purple-500/20 px-3 py-1 rounded-full">Analiz ediliyor...</span>
                    </div>

                    <div className="mt-6 p-5 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl border border-purple-500/20 shadow-sm">
                      <p className="text-sm text-gray-300 text-center font-medium">
                        48 saat içinde teslim edilen <strong className="text-purple-400 text-base block mt-1">Kapsamlı Rapor</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}






