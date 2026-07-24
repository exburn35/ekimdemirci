"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  TrendingUp, 
  ShoppingBag, 
  Stethoscope, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Search, 
  Calendar, 
  BarChart3, 
  CheckCircle2 
} from "lucide-react";

interface CaseMetric {
  id: string;
  projectCode: string;
  categoryName: string;
  durationMonths: number;
  targetKeyword: string;
  initialRank: string;
  currentRank: string;
  trafficGrowth: string;
  summary: string;
  highlights: string[];
  link?: string;
}

const caseData: Record<string, { title: string; icon: any; data: CaseMetric }> = {
  "e-ticaret": {
    title: "E-Ticaret",
    icon: ShoppingBag,
    data: {
      id: "e-ticaret",
      projectCode: "Proje E-1 (Moda E-Ticaret)",
      categoryName: "E-Ticaret SEO",
      durationMonths: 6,
      targetKeyword: "kadın giyim kombinleri & e-ticaret katmanları",
      initialRank: "38. Sıra (Sayfa 4)",
      currentRank: "2. Sıra (Sayfa 1)",
      trafficGrowth: "+%250",
      summary: "Kategori sayfalarının semantik şema mimarisi, facet indeksleme kontrolü ve dinamik filtre optimizasyonu ile 6 ayda %250 organik trafik ve dönüşüm artışı elde edildi.",
      highlights: [
        "Filtre sayfalarında canonical ve noindex optimizasyonu",
        "Product/AggregateRating şeması entegrasyonu",
        "Arama niyetine özel kategori rehber içerikleri"
      ],
      link: "/basari-hikayeleri"
    }
  },
  "saglik-ve-klinik": {
    title: "Sağlık ve Klinik",
    icon: Stethoscope,
    data: {
      id: "saglik-ve-klinik",
      projectCode: "Proje S-1 (Özel Diş & Ağız Sağlığı Polikliniği)",
      categoryName: "Sağlık & Medikal SEO",
      durationMonths: 8,
      targetKeyword: "implant tedavisi fiyatları & zirkonyum kaplama",
      initialRank: "45. Sıra (Sayfa 5)",
      currentRank: "1. Sıra (Sayfa 1)",
      trafficGrowth: "+%310",
      summary: "YMYL (Your Money Your Life) ve E-E-A-T standartlarında doktor uzmanlık profilleri, klinik başarı istatistikleri ve tıbbi içerik doğrulama ağı kuruldu.",
      highlights: [
        "MedicalWebPage & Physician şema yapısı",
        "Hekim onaylı medikal blog ve hasta rehberleri",
        "Hasta niyet odaklı tedavi bilgi mimarisi"
      ],
      link: "/basari-hikayeleri"
    }
  },
  "yerel-isletme": {
    title: "Yerel İşletme",
    icon: MapPin,
    data: {
      id: "yerel-isletme",
      projectCode: "Proje Y-1 (Bölgesel Hukuk & Danışmanlık Bürosu)",
      categoryName: "Yerel (Local) SEO",
      durationMonths: 4,
      targetKeyword: "boşanma avukatı & iş hukuku danışmanlığı",
      initialRank: "29. Sıra (Sayfa 3)",
      currentRank: "İLK 3 (Harita & Organik)",
      trafficGrowth: "+%180",
      summary: "Google İşletme Profili (GMB) optimizasyonu, lokasyon bazlı açılış sayfaları ve yerel alıntı (citation) ağı ile 4 ayda harita paketinde ve aramalarda zirveye yerleşti.",
      highlights: [
        "Google Maps & Local Pack %100 optimizasyon",
        "Geo-targeted semantik hizmet sayfaları",
        "Yerel otorite ve yorum etkileşim stratejisi"
      ],
      link: "/basari-hikayeleri"
    }
  },
  "geo-yapay-zeka": {
    title: "GEO ve Yapay Zeka Görünürlüğü",
    icon: Sparkles,
    data: {
      id: "geo-yapay-zeka",
      projectCode: "Proje G-1 (B2B SaaS & Yazılım Platformu)",
      categoryName: "Generative Engine Optimization (GEO)",
      durationMonths: 5,
      targetKeyword: "yapay zeka verimlilik araçları & SaaS çözümleri",
      initialRank: "Yapay Zeka Yanıtlarında Yoktu",
      currentRank: "ChatGPT & Perplexity 1. Kaynak",
      trafficGrowth: "+%420 AI Alıntılanma",
      summary: "Bilgi grafiği (Knowledge Graph) yapılandırması ve doğrudan varlık (Entity) referanslaması sayesinde ChatGPT, Gemini ve Perplexity yanıtlarında ana referans üretici oldu.",
      highlights: [
        "AI Overviews & Perplexity kaynak alıntılama yapısı",
        "Alıntı ve Consensus tabanlı bilgi mimarisi",
        "Varlık (Entity) eşleme ve veri noktası doğrulama"
      ],
      link: "/basari-hikayeleri"
    }
  }
};

export default function CentralResultsEvidence() {
  const [activeTab, setActiveTab] = useState<string>("e-ticaret");

  const currentCase = caseData[activeTab].data;

  return (
    <section className="py-24 bg-[#0a0f25] relative overflow-hidden border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 mb-6 uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            Şeffaf & Veriye Dayalı Başarı Kanıtları
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Organik Trafiği Nasıl <span className="bg-gradient-to-r from-purple-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">%250+ Artırdım?</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Statik iddialar yerine sektörel bazda kanıtlanmış ölçülebilir sıralama, trafik ve yapay zeka görünürlük verileri.
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(caseData).map((key) => {
            const tab = caseData[key];
            const Icon = tab.icon;
            const isActive = activeTab === key;

            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-purple-600 text-white shadow-[0_0_25px_rgba(147,51,234,0.4)] border border-purple-400/30 scale-105"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <Icon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? "text-white" : "text-gray-400"}`} />
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-[#111836]/90 border border-purple-500/20 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Project Info & Main Growth Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/20 text-purple-300 text-xs font-mono font-semibold border border-purple-500/30">
                  <Calendar className="w-3.5 h-3.5" />
                  {currentCase.projectCode} &bull; {currentCase.durationMonths} Ay Çalışma
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  {currentCase.categoryName}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {currentCase.summary}
                </p>

                {/* Big Metric Box */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/60 to-indigo-950/60 border border-purple-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-purple-300 font-semibold mb-1">
                      Organik Trafik / Görünürlük Artışı
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-emerald-400 tracking-tight">
                      {currentCase.trafficGrowth}
                    </div>
                  </div>
                  <BarChart3 className="w-12 h-12 text-emerald-400/40" />
                </div>
              </div>

              {/* Right Column: Key Details Grid */}
              <div className="lg:col-span-7 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Keyword Box */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      <Search className="w-4 h-4 text-purple-400" />
                      Hedef Odak Sorgu
                    </div>
                    <div className="text-white font-bold text-sm md:text-base">
                      {currentCase.targetKeyword}
                    </div>
                  </div>

                  {/* Duration Box */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      Süreç Süresi
                    </div>
                    <div className="text-white font-bold text-sm md:text-base">
                      {currentCase.durationMonths} Ay Kesintisiz Optimizasyon
                    </div>
                  </div>

                  {/* Initial Rank */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Başlangıç Sırası
                    </div>
                    <div className="text-xl font-bold text-red-400">
                      {currentCase.initialRank}
                    </div>
                  </div>

                  {/* Current Rank */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 bg-emerald-950/20 border-emerald-500/20">
                    <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                      Güncel Sıra (Zirve)
                    </div>
                    <div className="text-xl font-bold text-emerald-300">
                      {currentCase.currentRank}
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                  <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">
                    Uygulanan Kritik Teknik & Semantik Adımlar
                  </div>
                  {currentCase.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Case Study CTA Link */}
                <div className="pt-2 flex justify-end">
                  <Link
                    href={currentCase.link || "/basari-hikayeleri"}
                    className="inline-flex items-center gap-2 text-sm font-bold text-purple-300 hover:text-white transition-colors group"
                  >
                    Detaylı Vaka İncelemesini Gör &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
