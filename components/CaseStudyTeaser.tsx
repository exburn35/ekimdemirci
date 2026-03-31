"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function CaseStudyTeaser() {
  return (
    <section className="py-24 bg-[#0a0f25] relative z-10 overflow-hidden border-t border-white/5 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111836] rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-[0_0_40px_rgba(139,92,246,0.1)] border border-purple-500/20"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-indigo-900/10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-10 -z-0" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-purple-400 font-semibold uppercase tracking-wider">
                Öne Çıkan Başarı Hikayesi
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">
              Organik Trafiği Nasıl <span className="text-purple-400">%250 Artırdık</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl leading-relaxed">
              Stratejik SEO uygulamasının bir müşterinin çevrimiçi varlığını nasıl dönüştürdüğünü, 
              önemli trafik büyümesi ve iyileştirilmiş arama sıralamaları sağladığını keşfedin.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-sm hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:border-purple-500/20 transition-all">
                <div className="text-4xl font-black text-purple-400 mb-2">+250%</div>
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Organik Trafik Artışı</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-sm hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:border-purple-500/20 transition-all">
                <div className="text-4xl font-black text-purple-400 mb-2">İlk 3</div>
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Ortalama Sıralama</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-sm hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:border-purple-500/20 transition-all">
                <div className="text-4xl font-black text-purple-400 mb-2">+180%</div>
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">ROI İyileştirmesi</div>
              </div>
            </div>

            <Link
              href="/basari-hikayeleri"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] group"
            >
              Tüm Başarı Hikayesini İncele
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

