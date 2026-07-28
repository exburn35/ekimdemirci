"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot, Cpu, LineChart, ShieldCheck, Zap } from "lucide-react";

interface AITool {
  id: number;
  name: string;
  logo: string;
  role: string;
  details: string;
  badge: string;
}

const aiTools: AITool[] = [
  {
    id: 1,
    name: "Peec AI",
    logo: "/peec-ai-logo.webp",
    role: "AI Arama Takibi & LLM Görünürlük Analizi",
    details: "ChatGPT, Perplexity ve Claude aramalarında markanızın kaynak gösterilme sıklığını ve Share of Model Voice (SoMV) oranını gerçek zamanlı ölçümler.",
    badge: "AI Search Tracking",
  },
  {
    id: 2,
    name: "Goodie AI",
    logo: "/goodie-ai-logo.webp",
    role: "Generative Engine & Tavsiye Payı Takibi",
    details: "Yapay zeka motorlarının ürün ve hizmet tavsiyelerinde markanızın sıralama konumunu, rakip kıyaslamalarını ve AEO performansını analiz eder.",
    badge: "Share of Voice",
  },
  {
    id: 3,
    name: "Profound",
    logo: "/profound-ai-logo.jpg",
    role: "LLM Otorite & Semantik Atıf İzleme",
    details: "Büyük dil modellerinin veri tabanında markanıza verilen semantik atıfları, bilgi grafiği doğruluğunu ve yanıt kalitesini derinlemesine denetler.",
    badge: "LLM Analytics",
  },
  {
    id: 4,
    name: "GEOstar AI",
    logo: "/geostar-ai-logo.png",
    role: "GEO Metrikleri & AI Algoritma Denetimi",
    details: "Google AI Overviews ve AI arama tarayıcılarının sitenizi indeksleme, özetleme ve yanıt kartlarına ekleme dinamiklerini anlık olarak raporlar.",
    badge: "GEO Audit",
  },
  {
    id: 5,
    name: "Scrunch",
    logo: "/scrunch-ai-logo.jpeg",
    role: "AI Marka Bahsi & Co-Citation Analitiği",
    details: "Yapay zeka ekosistemindeki dijital PR atıflarını, marka birlikteliklerini (co-citation) ve semantik otorite skorlarını takip etmeye yardımcı olur.",
    badge: "Co-Citation Tracking",
  },
];

export default function GEOAIToolsSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#050814] border-t border-b border-cyan-500/10">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Yapay Zeka Teknoloji Yığını
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Kullandığım AI Görünürlük Araçları
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            ChatGPT, Perplexity, Claude, Gemini ve Google AI Overviews gibi yapay zeka motorlarında markanızın alıntı (citation) performansını, görünürlük skorlarını ve tavsiye payını ölçmek için kullandığım ileri düzey GEO araçları.
          </p>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {aiTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group rounded-2xl bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-400/50 p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Top Bar: Number Badge & Category Tag */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 text-xs font-extrabold">
                    0{tool.id}
                  </span>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                    {tool.badge}
                  </span>
                </div>

                {/* Logo Box */}
                <div className="w-full h-24 bg-white/95 rounded-xl border border-white/20 p-3 mb-5 flex items-center justify-center shadow-md group-hover:bg-white group-hover:scale-[1.02] transition-all duration-300">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} Logo`}
                    className="max-h-14 max-w-[85%] object-contain filter drop-shadow-sm transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 mb-3 leading-snug">
                  {tool.role}
                </p>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {tool.details}
                </p>
              </div>

              {/* Status / Active Indicator */}
              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Aktif GEO Analiz Aracı
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
