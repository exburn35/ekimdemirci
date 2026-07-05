"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Users, Target, Shield } from "lucide-react";
import Link from "next/link";
import { CaseStudy } from "@/lib/case-studies";
import ContactForm from "@/components/ContactForm";

export default function CaseStudyClient({ study, relatedStories }: { study: CaseStudy; relatedStories: CaseStudy[] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero Bölümü */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#0a0f25]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f25] via-[#0d153a] to-[#050814]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/basari-hikayeleri"
            className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors mb-8 uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Başarı Hikayelerine Dön
          </Link>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20 inline-block mb-6 uppercase tracking-widest">
              {study.category.replace("-", " ")}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              {study.company}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
              {study.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proje Özet Bilgileri */}
      <section className="py-12 bg-[#050814] border-y border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold block mb-1">Sektör</span>
              <span className="text-sm text-gray-200 font-light">{study.sector}</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold block mb-1">Proje Süresi</span>
              <span className="text-sm text-gray-200 font-light">{study.duration}</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold block mb-1">Başlangıç Durumu</span>
              <span className="text-sm text-gray-200 font-light line-clamp-2" title={study.initialStatus}>{study.initialStatus}</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold block mb-1">Kaynak</span>
              <span className="text-sm text-purple-400 font-light">Google Search Console</span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrikler ve GSC Grafikleri */}
      <section className="py-24 bg-gradient-to-b from-[#050814] to-[#0a0f25] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-24">
            
            {/* SVG Grafik Karşılaştırma Bloğu */}
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 bg-white/[0.01] border border-white/[0.06] rounded-3xl p-8 backdrop-blur-md"
            >
              <h3 className="text-lg font-bold text-white mb-8 tracking-tight">Performans Grafiği</h3>
              
              <div className="space-y-12">
                {study.chartData.map((chart) => (
                  <div key={chart.label}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-300 font-medium">{chart.label}</span>
                      <span className="text-xs text-purple-400 font-bold">{chart.after}</span>
                    </div>
                    {/* SVG Çubuk Çizimi */}
                    <div className="flex gap-4 items-end h-24 w-full border-b border-white/10 pb-2">
                      <div className="flex-1 flex items-end h-full">
                        <div 
                          className="w-full bg-white/10 rounded-t-md transition-all duration-1000 h-0 animate-[grow_1s_ease-out_forwards]"
                          style={{ height: `${(chart.before / Math.max(chart.before, chart.after)) * 100}%` }}
                        />
                      </div>
                      <div className="flex-1 flex items-end h-full">
                        <div 
                          className="w-full bg-gradient-to-t from-purple-600 to-pink-500 rounded-t-md transition-all duration-1000 h-0 animate-[grow_1.2s_ease-out_forwards]"
                          style={{ height: `${(chart.after / Math.max(chart.before, chart.after)) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-semibold uppercase">
                      <span>Önceki ({chart.before})</span>
                      <span className="text-purple-400">Sonraki ({chart.after})</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gerçek Search Console Görseli */}
              <div className="mt-8 pt-8 border-t border-white/5">
                <span className="text-[10px] text-gray-500 block uppercase tracking-wider font-bold mb-3">Gerçek Arama Konsolu Verisi</span>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 group bg-black/40">
                  <img 
                    src={study.imageUrl} 
                    alt={`${study.company} Google Search Console`}
                    className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </motion.div>

            {/* Metrik Kartları */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Clicks metric card */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/[0.01] border border-white/[0.06] rounded-3xl p-6 backdrop-blur-md"
              >
                <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 text-purple-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1 font-bold">Toplam Tıklama Artışı</span>
                <span className="text-3xl font-extrabold text-white block mb-2">{study.clickIncrease}</span>
                <p className="text-xs text-gray-400 font-light">Google Search Console verilerine göre üç aylık dönem değişimi</p>
              </motion.div>

              {/* Impressions metric card */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-white/[0.01] border border-white/[0.06] rounded-3xl p-6 backdrop-blur-md"
              >
                <div className="w-10 h-10 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4 text-pink-400">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1 font-bold">Gösterim Hacmi Artışı</span>
                <span className="text-3xl font-extrabold text-white block mb-2">{study.impressionIncrease}</span>
                <p className="text-xs text-gray-400 font-light">Arama sonuçlarında hedeflenen görünürlük büyüme oranı</p>
              </motion.div>

              {/* Position metric card */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-white/[0.01] border border-white/[0.06] rounded-3xl p-6 backdrop-blur-md"
              >
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 text-blue-400">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1 font-bold">Ortalama Sıralama</span>
                <span className="text-3xl font-extrabold text-white block mb-2">{study.posChange} Pozisyon</span>
                <p className="text-xs text-gray-400 font-light">Elde edilen nihai ortalama arama motoru sırası</p>
              </motion.div>

              {/* CTR metric card */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white/[0.01] border border-white/[0.06] rounded-3xl p-6 backdrop-blur-md"
              >
                <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 text-cyan-400">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1 font-bold">Tıklama Oranı Seviyesi</span>
                <span className="text-3xl font-extrabold text-white block mb-2">{study.ctrChange}</span>
                <p className="text-xs text-gray-400 font-light">Yeni sorgu hacmiyle dengelenen ortalama tıklanma oranı</p>
              </motion.div>

            </div>

          </div>

          {/* Strateji Anlatısı */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">{study.narrativeTitle}</h2>
              <div className="space-y-6 text-gray-300 font-light text-sm md:text-base leading-relaxed">
                {study.narrativeBody.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1 bg-white/[0.01] border border-white/[0.06] rounded-3xl p-8 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-6 tracking-tight">{study.nextActionsTitle}</h3>
              <ul className="space-y-4">
                {study.nextActions.map((action, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-300 leading-relaxed font-light">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kronolojik Zaman Çizelgesi */}
          <div className="mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center tracking-tight">Uygulanan Strateji Zaman Çizelgesi</h3>
            <div className="relative border-l border-white/10 max-w-3xl mx-auto pl-6 md:pl-8 space-y-12">
              {study.timeline.map((step, idx) => (
                <motion.div
                  key={step.period}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-[#0a0f25] shadow-md" />
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-2">{step.period}</span>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Diğer Başarı Hikayeleri Öneri Bölümü */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 tracking-tight text-center">Diğer Başarı Hikayeleri</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedStories.map((related) => (
                <div
                  key={related.slug}
                  className="bg-white/[0.01] border border-white/[0.06] rounded-3xl p-8 flex flex-col justify-between group transition-all duration-300 hover:border-purple-500/20"
                >
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 inline-block mb-4">
                      {related.sector}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {related.company}
                    </h4>
                    <p className="text-xs text-gray-400 font-light mb-6 line-clamp-2">
                      {related.summary}
                    </p>
                  </div>
                  <Link
                    href={`/basari-hikayeleri/${related.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Hikayeyi Oku
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* İletişim Formu */}
      <ContactForm
        title="Sizin Başarı Hikayenizi Başlatalım"
        description="SEO hedeflerinize ulaşmak ve organik arama performansınızı yükseltmek için benimle iletişime geçin."
        showTitle={true}
      />
    </>
  );
}
