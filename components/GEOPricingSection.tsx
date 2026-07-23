"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, Brain, Bot, Zap } from "lucide-react";
import Link from "next/link";

const geoPlans = [
  {
    name: "GEO Başlangıç",
    price: "₺25.000",
    period: "aylık",
    description: "Yapay zeka motorlarında ilk görünürlüğünü başlatmak isteyen markalar için.",
    features: [
      "AI Görünürlük & Mention Analizi (ChatGPT, Perplexity, Gemini)",
      "Temel Entity (Varlık) Yapılandırması",
      "Schema.org (Organization, Article, FAQPage) Kodlaması",
      "10 Adet NLP & AEO Uyumlu İçerik Optimizasyonu",
      "llms.txt ve AI Bot Erişim Kurguları (GPTBot, ClaudeBot)",
      "Aylık AI Görünürlük & Alıntı (Citation) Raporu",
    ],
    popular: false,
    border: "border-white/10",
  },
  {
    name: "GEO Profesyonel",
    price: "₺45.000",
    period: "aylık",
    description: "Yapay zeka yanıtlarında birincil kaynak ve önerilen marka olmak isteyen işletmeler için.",
    features: [
      "Kapsamlı LLM Görünürlük & Share of Model Voice Analizi",
      "Derin Entity Otoritesi & Knowledge Graph İnşası",
      "Semantik Triple (Özne-Yüklem-Nesne) İçerik Mimarisi",
      "25 Adet AEO & NLP Uyumlu İçerik Kurgusu",
      "Dijital PR & Co-Citation (Marka Birlikteliği Atıfları)",
      "Özel AI Bot Erişim & Rendering Optimizasyonları",
      "Aylık Detaylı Mention Artış Raporu ve Strateji Toplantısı",
      "Öncelikli Destek & Doğrudan Danışmanlık",
    ],
    popular: true,
    border: "border-purple-500/40 shadow-purple-500/10",
  },
  {
    name: "GEO Kurumsal",
    price: "₺75.000",
    period: "aylık",
    description: "Çok dilli, uluslararası ve yüksek rekabetli pazarlarda AI liderliği hedefleyen markalar için.",
    features: [
      "Çok Dilli (İngilizce / Türkçe) GEO ve AEO Stratejisi",
      "Özel AI Crawl Audit & Algoritma Takip Otomasyonları",
      "Wikipedia / Wikidata & Global Knowledge Graph Entegrasyonu",
      "Sınırsız Semantik İçerik & Schema.org Mimari Yönetimi",
      "İleri Düzey Co-Citation & Sektörel Basın Atıf Yönetimi",
      "Haftalık İlerleme Raporu ve Kesintisiz Danışmanlık",
    ],
    popular: false,
    border: "border-white/10",
  },
];

interface GEOPricingSectionProps {
  showGeoInfoBox?: boolean;
}

export default function GEOPricingSection({ showGeoInfoBox = true }: GEOPricingSectionProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-[#070b19]">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Yapay Zeka SEO (GEO) Fiyatlandırması
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            GEO Danışmanlık Fiyatları
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            ChatGPT, Google AI Overviews, Perplexity ve Gemini gibi yapay zeka motorlarında markanızın güvenilir bir kaynak olarak önerilmesi ve alıntılanması için özel kurgulanmış paketler.
          </p>
        </div>

        {/* Informational Banner Box */}
        {showGeoInfoBox && (
          <div className="mb-16">
            <div className="relative rounded-2xl bg-gradient-to-r from-purple-900/40 via-slate-900/90 to-emerald-900/40 border border-purple-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500 pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 shrink-0 mt-1 sm:mt-0">
                    <Brain className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">
                      <Bot className="w-3.5 h-3.5" />
                      Yapay Zeka Görünürlük Rehberi
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      GEO Danışmanlığı Hakkında Bilgi Almak İçin Tıklayın
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                      Generative Engine Optimization (GEO) metodolojisi, yapay zeka botlarının sitenizi nasıl okuduğu, entity otoritesi inşası ve tüm teknik detaylar hakkında kapsamlı bilgi edinin.
                    </p>
                  </div>
                </div>

                <Link
                  href="/geo-danismanligi"
                  className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] transition-all duration-200"
                >
                  GEO Danışmanlığı Sayfasına Git
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {geoPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl bg-slate-900/80 border ${plan.border} p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between shadow-xl hover:border-purple-500/50 transition-all duration-300 ${
                plan.popular ? "ring-2 ring-purple-500/50 shadow-purple-900/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 fill-white" />
                  En Çok Tercih Edilen
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed min-h-[36px]">{plan.description}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{plan.price}</span>
                    <span className="text-gray-400 text-sm font-medium">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href="#analiz"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/30"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                >
                  GEO Teklifi Al
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
