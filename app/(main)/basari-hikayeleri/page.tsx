"use client";

import { useState } from "react";
// scroll reveal ve kategori filtre animasyonu kancaları
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { TrendingUp, Users, Target, Award, ArrowRight, Sparkles, BookOpen, Building2, Zap, Gem } from "lucide-react";
import Link from "next/link";
import SEOAuditSection from "@/components/SEOAuditSection";
import RelatedPages from "@/components/RelatedPages";
import ContactForm from "@/components/ContactForm";
import { caseStudies } from "@/lib/case-studies";

// Kategori filtre listesi
const categories = [
  { id: "all", name: "Tümü", icon: Sparkles },
  { id: "E-ticaret", name: "E Ticaret", icon: Gem },
  { id: "Eğitim Platformları", name: "Eğitim Platformları", icon: BookOpen },
  { id: "Kurumsal ve Hizmet Siteleri", name: "Kurumsal ve Hizmet Siteleri", icon: Building2 },
  { id: "Yeni Açılan Siteler", name: "Yeni Açılan Siteler", icon: Zap }
];

export default function SuccessStories() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const shouldReduceMotion = useReducedMotion();

  // kategori filtresine göre projeleri filtreleme
  const filteredStudies = selectedCategory === "all"
    ? caseStudies
    : caseStudies.filter((study) => study.category === selectedCategory);

  // genel istatistik metrikleri
  const stats = [
    { label: "Mutlu Danışan", value: "50+", icon: Users },
    { label: "Tamamlanan Proje", value: "100+", icon: Award },
    { label: "Trafik Artışı", value: "%200+", icon: TrendingUp },
    { label: "Dönüşüm Artışı", value: "%150+", icon: Target },
  ];

  return (
    <>
      {/* Hero Bölümü */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#0a0f25]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f25] via-[#0d153a] to-[#050814]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Başarı Hikayeleri
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Danışanlarımın SEO çalışmaları ile elde ettiği başarılar ve ölçülebilir gerçek sonuçlar. 
              Siz de bu başarıların bir parçası olun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* İstatistik Metrikleri Bölümü */}
      <section className="py-16 bg-[#050814] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white/[0.02] border border-white/[0.08] p-6 rounded-2xl text-center backdrop-blur-md"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-500/20">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-xs font-light tracking-wide">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Başarı Hikayeleri Filtreleme ve Listeleme Bölümü */}
      <section className="py-24 bg-gradient-to-b from-[#050814] to-[#0a0f25] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Kategori Filtresi */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                    isSelected
                      ? "bg-purple-600 text-white shadow-[0_4px_20px_rgba(168,85,247,0.3)]"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Proje Kartları Listesi (layout geçiş animasyonuyla) */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((study) => (
                <motion.div
                  key={study.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
                  whileHover={shouldReduceMotion ? {} : { y: -8, borderColor: "rgba(168, 85, 247, 0.4)", backgroundColor: "rgba(255,255,255,0.03)" }}
                  className="relative rounded-3xl p-8 border border-white/[0.08] bg-white/[0.01] backdrop-blur-md flex flex-col justify-between group transition-all duration-500"
                >
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20 inline-block mb-4">
                      {study.sector}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 min-h-[56px]">
                      {study.company}
                    </h3>
                    <p className="text-gray-400 text-xs font-light mb-6 line-clamp-3 min-h-[54px] leading-relaxed">
                      {study.summary}
                    </p>
                    
                    {/* Dikkat çekici tek metrik gösterimi */}
                    <div className="mb-8 p-4 bg-purple-500/5 rounded-2xl border border-purple-500/10">
                      <span className="text-[10px] text-gray-500 block uppercase tracking-wider font-bold mb-1">Öne Çıkan Sonuç</span>
                      <span className="text-lg md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        {study.slug === "cevrimici-egitim-platformu" || study.slug === "motosiklet-aksesuarlari-magazasi"
                          ? `Gösterimde ${study.impressionIncrease} artış`
                          : `Tıklamada ${study.clickIncrease} artış`}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/basari-hikayeleri/${study.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors self-start mt-auto"
                  >
                    Detayları İncele
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Sıradaki Proje CTA Bölümü */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-950/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.01] border border-white/[0.08] rounded-3xl p-8 md:p-12 text-center backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
                Sıradaki Başarı Hikayesi Sizin Olsun
              </h2>
              <p className="text-sm md:text-base text-gray-400 mb-8 max-w-xl mx-auto font-light leading-relaxed">
                Bireysel SEO danışmanlığı hizmetlerimle dijital dünyadaki görünürlüğünüzü artırın ve rakiplerinizin önüne geçin.
              </p>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="inline-block"
              >
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-base shadow-[0_4px_25px_rgba(168,85,247,0.3)] hover:shadow-[0_4px_35px_rgba(168,85,247,0.5)] transition-all duration-300"
                >
                  Benimle İletişime Geçin
                  <ArrowRight className="w-5 h-5 animate-pulse" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Audit Bölümü */}
      <SEOAuditSection />

      <RelatedPages />

      <ContactForm
        title="Yeni Başarı Hikayenizi Birlikte İnşa Edelim"
        description="Bireysel SEO çözümlerimle web sitenizin arama sonuçlarındaki performansını zirveye taşıyalım."
        showTitle={true}
      />
    </>
  );
}

