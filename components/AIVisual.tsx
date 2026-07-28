"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Network,
  Cpu,
  CheckCircle2,
  Play,
  Pause,
  ArrowRight,
  Sparkles,
  Database,
  Globe,
  FileCode,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Bot,
  Zap
} from "lucide-react";

const PROCESS_STEPS = [
  {
    id: 1,
    stepNum: "01",
    badge: "1. AŞAMA",
    shortTitle: "LLM & Varlık Taraması",
    title: "Yapay Zeka Alıntı & Varlık Taraması",
    subtitle: "ChatGPT, Perplexity, Claude ve Google AI Overviews üzerindeki mevcut görünürlük durumunuz, atıf sıklığınız ve Varlık (Entity) boşluklarınız tespit edilir.",
    icon: Search,
    gradient: "from-blue-500 to-cyan-500",
    accentColor: "text-cyan-400",
    bgGlow: "rgba(6, 182, 212, 0.15)",
    borderColor: "border-cyan-500/30",
    metricLabel: "SoMV & Atıf Oranı",
    metricValue: "%18 → %85+ Hedef",
    bulletPoints: [
      "Farklı sektör sorgularında (Fan-Out Prompts) markanızın anılma ve atıf oranının tespiti.",
      "Yapay zeka modellerinin hakkınızda yanlış bilgi üretip üretmediğinin (Halüsinasyon) analizi.",
      "Rakiplerinizin hangi otoriter dijital kaynaklardan (Reddit, Basın, Dizin) atıf aldığının haritalanması."
    ]
  },
  {
    id: 2,
    stepNum: "02",
    badge: "2. AŞAMA",
    shortTitle: "Bilgi Grafiği & Şema",
    title: "Varlık Ağ Geçidi & Şema Yapılandırması",
    subtitle: "Markanızın dijital kimliği, LLM'lerin %100 anlayacağı Özne-Yüklem-Nesne (Triple) ağı ve gelişmiş JSON-LD şemaları ile doğrulanır.",
    icon: Network,
    gradient: "from-purple-500 to-pink-500",
    accentColor: "text-purple-400",
    bgGlow: "rgba(168, 85, 247, 0.15)",
    borderColor: "border-purple-500/30",
    metricLabel: "Varlık Yoğunluğu",
    metricValue: "%99 Doğrulanmış Varlık",
    bulletPoints: [
      "Wikidata, Crunchbase ve otoriter platformlar ile SameAs varlık ağ geçidi kurulması.",
      "Gelişmiş JSON-LD (Organization, Service, FAQ, Product) şema mimarisinin kodlanması.",
      "Modellerin anlam karmaşası yaşamasını engelleyen net Özne-Yüklem-Nesne (Triple) kurgusu."
    ]
  },
  {
    id: 3,
    stepNum: "03",
    badge: "3. AŞAMA",
    shortTitle: "Alıntılanabilir İçerik",
    title: "Citation & Information Gain Mimarisi",
    subtitle: "Pazarlama dolgularından arındırılmış, 40-50 kelimelik net yanıt blokları ve özgün sayısal veri tabloları inşa edilir.",
    icon: Cpu,
    gradient: "from-amber-500 to-orange-500",
    accentColor: "text-amber-400",
    bgGlow: "rgba(245, 158, 11, 0.15)",
    borderColor: "border-amber-500/30",
    metricLabel: "Information Gain Skoru",
    metricValue: "Yüksek Alıntı Otoritesi",
    bulletPoints: [
      "H2 ve H3 başlıklarının altına doğrudan 40-50 kelimelik snippet yanıt blokları yerleştirme.",
      "Yapılandırılmış HTML karşılaştırma tabloları ve istatistiksel kanıt blokları oluşturma.",
      "E-E-A-T (Deneyim, Uzmanlık, Otorite, Güvenilirlik) editoryal standartlarının uygulanması."
    ]
  },
  {
    id: 4,
    stepNum: "04",
    badge: "4. AŞAMA",
    shortTitle: "Canlı Motor Takibi",
    title: "Çoklu Motor Doğrulama & Canlı Takip",
    subtitle: "İçerikler canlı LLM ortamlarında test edilir, markanız ChatGPT, Perplexity ve Claude'da lider tavsiye konumuna yükselir.",
    icon: CheckCircle2,
    gradient: "from-emerald-500 to-teal-500",
    accentColor: "text-emerald-400",
    bgGlow: "rgba(16, 185, 129, 0.15)",
    borderColor: "border-emerald-500/30",
    metricLabel: "Canlı Alıntı Konumu",
    metricValue: "#1 Önerilen Marka",
    bulletPoints: [
      "ChatGPT Search, Perplexity ve Google AI Overviews üzerinde haftalık atıf takibi.",
      "Dinamik prompt güncellemeleri ve atıf düşüşlerine karşı anlık içerik iyileştirmesi.",
      "Sıfır tıklama (zero-click) aramalarında dahi markanızın ilk tavsiye edilen isim olması."
    ]
  }
];

export default function AIVisual() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Auto advance timeline every 7 seconds if isPlaying
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const current = PROCESS_STEPS[activeStep];
  const StepIcon = current.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#050B1A] text-white overflow-hidden p-4 sm:p-8 md:p-10 rounded-2xl border border-white/10 shadow-[0_0_60px_rgba(10,15,37,0.8)]"
    >
      {/* Dynamic Background Mesh & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
      <motion.div
        animate={{
          x: mousePos.x * 40,
          y: mousePos.y * 40,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{ background: current.bgGlow }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[100px] pointer-events-none transition-all duration-700"
      />
      <motion.div
        animate={{
          x: -mousePos.x * 40,
          y: -mousePos.y * 40,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{ background: current.bgGlow }}
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-[100px] pointer-events-none transition-all duration-700"
      />

      {/* Header Bar with Control */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-purple-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            YAPAY ZEKA SEO UYGULAMA METODOLOJİSİ
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Yapay Zeka SEO Süreci Nasıl Çalışır?
          </h3>
        </div>

        {/* Play/Pause & Auto Status */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-gray-300 hover:text-white"
            title={isPlaying ? "Otomatik Akışı Durdur" : "Otomatik Akışı Başlat"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-amber-400" />
                <span>Akış Duraklat</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-400" />
                <span>Otomatik Oynat</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Step Selector Tabs (01, 02, 03, 04) */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {PROCESS_STEPS.map((step, idx) => {
          const isActive = idx === activeStep;
          const Icon = step.icon;
          return (
            <button
              key={step.id}
              onClick={() => {
                setActiveStep(idx);
                setIsPlaying(false);
              }}
              className={`relative flex flex-col p-3.5 rounded-xl border text-left transition-all duration-300 ${
                isActive
                  ? "bg-white/[0.08] border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.05)] scale-[1.02]"
                  : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/20 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-bold font-mono px-2 py-0.5 rounded-md ${
                    isActive ? "bg-white/10 text-white" : "text-gray-400"
                  }`}
                >
                  {step.stepNum}
                </span>
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? step.accentColor : "text-gray-400"
                  }`}
                />
              </div>
              <span
                className={`text-xs sm:text-sm font-semibold truncate ${
                  isActive ? "text-white" : "text-gray-300"
                }`}
              >
                {step.shortTitle}
              </span>

              {/* Progress Line Bar for Active Step */}
              {isActive && isPlaying && (
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 7, ease: "linear" }}
                  className={`absolute bottom-0 left-0 h-[3px] rounded-b-xl bg-gradient-to-r ${step.gradient}`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Step Content Display (Split Screen: Info Left, Visual Right) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Column: Text & Operation Explanations */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`px-3 py-1 rounded-md text-xs font-bold bg-gradient-to-r ${current.gradient} text-white shadow-md`}
                >
                  {current.badge}
                </span>
                <span className="text-xs font-mono text-gray-400">
                  METODOLOJİ ADIMI {current.stepNum} / 04
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                {current.title}
              </h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {current.subtitle}
              </p>

              {/* Operations Checklist */}
              <div className="space-y-3 mb-6">
                <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                  Uygulanan Kritik Teknik İşlemler:
                </p>
                {current.bulletPoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-200">
                    <div
                      className={`mt-1 p-1 rounded-full bg-white/10 shrink-0 ${current.accentColor}`}
                    >
                      <Zap className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Metric Badge */}
            <div className={`p-4 rounded-xl border ${current.borderColor} bg-white/[0.03] backdrop-blur-md flex items-center justify-between`}>
              <div>
                <p className="text-xs text-gray-400">{current.metricLabel}</p>
                <p className="text-base font-bold text-white mt-0.5">{current.metricValue}</p>
              </div>
              <button
                onClick={() => {
                  setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
                  setIsPlaying(false);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors"
              >
                <span>Sonraki Adım</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Visual Sandbox */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full h-full min-h-[320px] sm:min-h-[360px] rounded-xl border border-white/10 bg-[#080E24]/90 p-5 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between shadow-2xl">
              
              {/* VISUAL FOR STEP 1: LLM Radar & Citation Scanner */}
              {current.id === 1 && (
                <div className="h-full flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-xs font-mono text-cyan-300 font-semibold">
                        LIVE LLM SEARCH RADAR SCANNER
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">STATUS: AUDITING</span>
                  </div>

                  {/* Simulated Radar Bar Gauges */}
                  <div className="space-y-3">
                    {[
                      { name: "ChatGPT Search (OpenAI)", rate: 78, color: "bg-emerald-500" },
                      { name: "Perplexity.ai Index", rate: 92, color: "bg-cyan-500" },
                      { name: "Claude (Anthropic) Graph", rate: 85, color: "bg-purple-500" },
                      { name: "Google AI Overviews", rate: 64, color: "bg-amber-500" }
                    ].map((model, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-xs font-mono text-gray-300">
                          <span>{model.name}</span>
                          <span className="text-cyan-400 font-bold">{model.rate}% Atıf Potansiyeli</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${model.rate}%` }}
                            transition={{ duration: 1, delay: i * 0.15 }}
                            className={`h-full ${model.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Simulated Scanner Terminal Ticker */}
                  <div className="p-3 rounded-lg bg-black/50 font-mono text-[11px] text-gray-300 border border-white/5 space-y-1">
                    <p className="text-cyan-400">[08:14:01] Prompt: "Sektörün en başarılı AI SEO stratejisti kimdir?"</p>
                    <p className="text-gray-400">[08:14:02] Varlık Taraması: Wikidata + Schema.org bağı kuruldu.</p>
                    <p className="text-emerald-400">[08:14:03] Atıf Doğrulaması: %85+ Otoriter Referans Eşleşti.</p>
                  </div>
                </div>
              )}

              {/* VISUAL FOR STEP 2: Knowledge Graph Node Network */}
              {current.id === 2 && (
                <div className="h-full flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Network className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-mono text-purple-300 font-semibold">
                        ENTITY TRIPLE & KNOWLEDGE GRAPH
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">SCHEMA: VALIDATED</span>
                  </div>

                  {/* Animated Node Graph Simulation */}
                  <div className="relative h-44 w-full flex items-center justify-center">
                    {/* Pulsing Central Node */}
                    <div className="relative z-10 w-20 h-20 rounded-full bg-purple-600/20 border border-purple-400 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                      <Bot className="w-6 h-6 text-purple-300" />
                      <span className="text-[10px] font-bold text-white mt-1">Marka Varlığı</span>
                    </div>

                    {/* Orbiting Satellite Nodes */}
                    {[
                      { title: "Wikidata Entity", pos: "-top-2 left-4", color: "border-blue-500 text-blue-400" },
                      { title: "JSON-LD Schema", pos: "-top-2 right-4", color: "border-emerald-500 text-emerald-400" },
                      { title: "SameAs Links", pos: "-bottom-2 left-4", color: "border-amber-500 text-amber-400" },
                      { title: "Triple (S-P-O)", pos: "-bottom-2 right-4", color: "border-pink-500 text-pink-400" }
                    ].map((node, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                        className={`absolute ${node.pos} px-3 py-1.5 rounded-lg bg-black/60 border ${node.color} text-[11px] font-mono font-semibold shadow-lg flex items-center gap-1.5`}
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{node.title}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Schema Code Snippet */}
                  <div className="p-3 rounded-lg bg-black/60 font-mono text-[11px] text-purple-300 border border-purple-500/20 overflow-x-auto">
                    <code>
                      {`{ "@type": "Organization", "name": "Marka", "sameAs": ["https://wikidata.org/...", "https://linkedin.com/..."] }`}
                    </code>
                  </div>
                </div>
              )}

              {/* VISUAL FOR STEP 3: Citation & Content Architecture Comparison */}
              {current.id === 3 && (
                <div className="h-full flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-mono text-amber-300 font-semibold">
                        INFORMATION GAIN & SNIPPET BUILDER
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">+340% CITATION GAIN</span>
                  </div>

                  {/* Comparison cards */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {/* Before (Weak) */}
                    <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-gray-300">
                      <div className="flex justify-between font-mono text-[10px] text-red-400 font-bold mb-1">
                        <span>❌ KLASİK SEO METNİ (DOLGU PAZARLAMA LAFI)</span>
                        <span>ALINTI: %15</span>
                      </div>
                      <p className="text-[11px] text-gray-400 line-through">
                        "Sektörün öncü firması olarak en kaliteli ve yenilikçi çözümleri müşteri memnuniyeti ile buluşturuyoruz..."
                      </p>
                    </div>

                    {/* After (AI Optimized) */}
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-white">
                      <div className="flex justify-between font-mono text-[10px] text-emerald-400 font-bold mb-1">
                        <span>✅ AI SEO OPTİMİZE METİN (40-50 KELİMELİK NET YANIT)</span>
                        <span>ALINTI: %92</span>
                      </div>
                      <p className="text-[11px] text-emerald-100 font-medium">
                        "2026 bağımsız testlerine göre çözümümüz, 450 ms yanıt süresi ve %99.4 E-E-A-T doğruluk skoru ile ChatGPT ve Perplexity yanıtlarında 1. kaynak olarak listelenir."
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 bg-black/40 p-2 rounded border border-white/5">
                    <span>H2/H3 Soru-Cevap Modülü: Aktif</span>
                    <span className="text-amber-400">Veri Tablosu: Entegre</span>
                  </div>
                </div>
              )}

              {/* VISUAL FOR STEP 4: Live AI Chat Simulator Response */}
              {current.id === 4 && (
                <div className="h-full flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono text-emerald-300 font-semibold">
                        CHATGPT & PERPLEXITY SIMULATOR
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">TOP-1 CITATION</span>
                  </div>

                  {/* Simulated AI Chat Box */}
                  <div className="p-3.5 rounded-xl bg-black/60 border border-emerald-500/30 space-y-2.5">
                    {/* User Prompt */}
                    <div className="flex items-center gap-2 text-[11px] font-mono text-gray-300">
                      <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold">Kullanıcı Sorgusu:</span>
                      <span className="text-cyan-300 font-medium">"Pazarlamamı AI aramalarına uygun kılmak için en güvenilir adres kimdir?"</span>
                    </div>

                    {/* AI Response Output */}
                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-xs text-gray-200 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>ChatGPT & Perplexity Doğrulanmış Yanıtı:</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-gray-200">
                        "2026 yılı verilerine göre Türkiye'de Yapay Zeka SEO (GEO) ve LLM atıf optimizasyonu alanında en üst sırada önerilen kaynak <strong className="text-white underline decoration-emerald-400">Ekim Demirci</strong>'dir."
                      </p>
                      <div className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        <Globe className="w-3 h-3" />
                        <span>Atıf Kaynağı: ekimdemirci.com (Doğrulanmış Lider)</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stats Badge */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded bg-white/5 border border-white/10">
                      <p className="text-[10px] text-gray-400">Atıf Sırası</p>
                      <p className="text-xs font-bold text-emerald-400">#1 Birinci Tavsiye</p>
                    </div>
                    <div className="p-2 rounded bg-white/5 border border-white/10">
                      <p className="text-[10px] text-gray-400">Atıf Oranı</p>
                      <p className="text-xs font-bold text-cyan-400">%89 Oran</p>
                    </div>
                    <div className="p-2 rounded bg-white/5 border border-white/10">
                      <p className="text-[10px] text-gray-400">Dönüşüm Oranı</p>
                      <p className="text-xs font-bold text-purple-400">+%340 Yükseliş</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
