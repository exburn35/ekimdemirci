"use client";

import { useState, useEffect, useRef, Fragment } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Network,
  Cpu,
  CheckCircle2,
  Play,
  Pause,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Globe,
  FileCode,
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
    accentColor: "text-cyan-600",
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
    accentColor: "text-purple-600",
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
    accentColor: "text-amber-600",
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
    accentColor: "text-emerald-600",
    bgGlow: "rgba(168, 85, 247, 0.15)",
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
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Respect user preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setIsPlaying(false);
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Auto advance timeline every 7 seconds if isPlaying
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const current = PROCESS_STEPS[activeStep];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextIndex = (index + 1) % PROCESS_STEPS.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextIndex = (index - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIndex = PROCESS_STEPS.length - 1;
    } else {
      return;
    }
    setActiveStep(nextIndex);
    setIsPlaying(false);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full bg-white text-ink overflow-hidden p-4 sm:p-8 md:p-10 rounded-2xl border border-line shadow-[0_0_60px_rgba(22,27,46,0.08)]"
    >
      {/* Dynamic Background Mesh & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(22,27,46,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(22,27,46,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
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
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-line pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-line text-purple-700 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            YAPAY ZEKA SEO UYGULAMA METODOLOJİSİ
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Yapay Zeka SEO Süreci Nasıl Çalışır?
          </h3>
        </div>

        {/* Play/Pause & Auto Status */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-white hover:bg-ink/5 border border-line transition-all text-ink-soft hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            title={isPlaying ? "Otomatik Akışı Durdur" : "Otomatik Akışı Başlat"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-amber-600" />
                <span>Akış Duraklat</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-600" />
                <span>Otomatik Oynat</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Step Selector Tabs (01, 02, 03, 04) */}
      <div 
        role="tablist"
        aria-label="Yapay Zeka SEO Metodolojisi Aşamaları"
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
      >
        {PROCESS_STEPS.map((step, idx) => {
          const isActive = idx === activeStep;
          const Icon = step.icon;
          return (
            <button
              key={step.id}
              ref={(el) => { tabRefs.current[idx] = el; }}
              role="tab"
              id={`ai-tab-${step.id}`}
              aria-selected={isActive}
              aria-controls={`ai-panel-${step.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => {
                setActiveStep(idx);
                setIsPlaying(false);
              }}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`relative flex flex-col p-3.5 rounded-xl border text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                isActive
                  ? "bg-white border-line-strong shadow-[0_0_20px_rgba(255,255,255,0.05)] scale-[1.02]"
                  : "bg-white border-line hover:bg-ink/[0.03] hover:border-line-strong opacity-70 hover:opacity-100"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-bold font-mono px-2 py-0.5 rounded-md ${
                    isActive ? "bg-ink/[0.04] text-ink" : "text-ink-muted"
                  }`}
                >
                  {step.stepNum}
                </span>
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? step.accentColor : "text-ink-muted"
                  }`}
                />
              </div>
              <span
                className={`text-xs sm:text-sm font-semibold truncate ${
                  isActive ? "text-ink" : "text-ink-soft"
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

      {/* Step Panels (All rendered in SSR via CSS Grid stacking) */}
      <div className="grid grid-cols-1 grid-rows-1 relative z-10 w-full">
        {PROCESS_STEPS.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <Fragment key={step.id}>
              {"\n"}
              <div
                role="tabpanel"
                id={`ai-panel-${step.id}`}
                aria-labelledby={`ai-tab-${step.id}`}
                tabIndex={isActive ? 0 : -1}
                aria-hidden={!isActive}
                className={`col-start-1 row-start-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-xl ${
                  isActive
                    ? "opacity-100 visible z-10 translate-y-0"
                    : "opacity-0 invisible pointer-events-none -z-10 translate-y-2"
                }`}
              >
              {/* Left Column: Text & Operation Explanations */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-bold bg-gradient-to-r ${step.gradient} text-ink shadow-md`}
                    >
                      {step.badge}
                    </span>
                    <span className="text-xs font-mono text-ink-muted">
                      METODOLOJİ ADIMI {step.stepNum} / 04
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-ink mb-3 flex items-center gap-2">
                    {step.title}
                  </h4>
                  <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
                    {step.subtitle}
                  </p>

                  {/* Operations Checklist */}
                  <div className="space-y-3 mb-6">
                    <p className="text-xs font-semibold text-ink-muted tracking-wider uppercase">
                      Uygulanan Kritik Teknik İşlemler:
                    </p>
                    {step.bulletPoints.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-ink">
                        <div
                          className={`mt-1 p-1 rounded-full bg-ink/[0.04] shrink-0 ${step.accentColor}`}
                        >
                          <Zap className="w-3 h-3" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Metric Badge */}
                <div className={`p-4 rounded-xl border ${step.borderColor} bg-white backdrop-blur-md flex items-center justify-between`}>
                  <div>
                    <p className="text-xs text-ink-muted">{step.metricLabel}</p>
                    <p className="text-base font-bold text-ink mt-0.5">{step.metricValue}</p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
                      setIsPlaying(false);
                    }}
                    tabIndex={isActive ? 0 : -1}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ink/[0.04] hover:bg-ink/5 text-xs font-medium text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                  >
                    <span>Sonraki Adım</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Sandbox for this Step */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="w-full h-full min-h-[320px] sm:min-h-[360px] rounded-xl border border-line bg-canvas-alt/90 p-5 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between shadow-2xl">
                  
                  {/* VISUAL FOR STEP 1: Static Technical Audit Scope Overview (Radar simulation removed) */}
                  {step.id === 1 && (
                    <div className="h-full flex flex-col justify-between space-y-4">
                      <div className="flex items-center justify-between border-b border-line pb-3">
                        <div className="flex items-center gap-2">
                          <Search className="w-4 h-4 text-cyan-600" />
                          <span className="text-xs font-mono text-cyan-700 font-semibold">
                            LLM &amp; VARLIK DENETİM KAPSAMI
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-ink-muted">ANALİZ MODÜLLERİ</span>
                      </div>

                      <div className="space-y-2.5">
                        {[
                          { name: "ChatGPT (OpenAI)", desc: "Fan-out promptlar ile marka anılma ve doğrudan alıntı tespiti", border: "border-cyan-500/30" },
                          { name: "Perplexity.ai", desc: "Dizin taraması ve otoriter kaynak atıf frekansı", border: "border-purple-500/30" },
                          { name: "Claude (Anthropic)", desc: "Bağlamsal bilgi grafiği ve halüsinasyon kontrolü", border: "border-emerald-500/30" },
                          { name: "Google AI Overviews", desc: "Özet bilgi paneli ve web referans eşleşmeleri", border: "border-amber-500/30" }
                        ].map((platform, i) => (
                          <div key={i} className={`p-2.5 rounded-lg bg-white border ${platform.border} text-xs`}>
                            <div className="font-semibold text-ink mb-0.5">{platform.name}</div>
                            <div className="text-ink-muted text-[11px]">{platform.desc}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted bg-canvas-alt p-2 rounded border border-line">
                        <span>Varlık Boşluk Analizi: Kapsamlı</span>
                        <span className="text-cyan-600">Halüsinasyon Riski: Sıfır Tolerans</span>
                      </div>
                    </div>
                  )}

                  {/* VISUAL FOR STEP 2: Knowledge Graph Node Network */}
                  {step.id === 2 && (
                    <div className="h-full flex flex-col justify-between space-y-4">
                      <div className="flex items-center justify-between border-b border-line pb-3">
                        <div className="flex items-center gap-2">
                          <Network className="w-4 h-4 text-purple-600" />
                          <span className="text-xs font-mono text-purple-700 font-semibold">
                            ENTITY TRIPLE &amp; KNOWLEDGE GRAPH
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-ink-muted">SCHEMA: VALIDATED</span>
                      </div>

                      {/* Animated Node Graph Simulation */}
                      <div className="relative h-44 w-full flex items-center justify-center">
                        {/* Pulsing Central Node */}
                        <div className="relative z-10 w-20 h-20 rounded-full bg-purple-600/20 border border-purple-400 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                          <Bot className="w-6 h-6 text-purple-700" />
                          <span className="text-[10px] font-bold text-ink mt-1">Marka Varlığı</span>
                        </div>

                        {/* Orbiting Satellite Nodes */}
                        {[
                          { title: "Wikidata Entity", pos: "-top-2 left-4", color: "border-blue-500 text-blue-600" },
                          { title: "JSON-LD Schema", pos: "-top-2 right-4", color: "border-emerald-500 text-emerald-600" },
                          { title: "SameAs Links", pos: "-bottom-2 left-4", color: "border-amber-500 text-amber-600" },
                          { title: "Triple (S-P-O)", pos: "-bottom-2 right-4", color: "border-pink-500 text-pink-600" }
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
                  {step.id === 3 && (
                    <div className="h-full flex flex-col justify-between space-y-3">
                      <div className="flex items-center justify-between border-b border-line pb-3">
                        <div className="flex items-center gap-2">
                          <FileCode className="w-4 h-4 text-amber-600" />
                          <span className="text-xs font-mono text-amber-700 font-semibold">
                            INFORMATION GAIN &amp; SNIPPET BUILDER
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold">+340% CITATION GAIN</span>
                      </div>

                      {/* Comparison cards */}
                      <div className="grid grid-cols-1 gap-2.5">
                        {/* Before (Weak) */}
                        <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-ink-soft">
                          <div className="flex justify-between font-mono text-[10px] text-red-600 font-bold mb-1">
                            <span>❌ KLASİK SEO METNİ (DOLGU PAZARLAMA LAFI)</span>
                            <span>ALINTI: %15</span>
                          </div>
                          <p className="text-[11px] text-ink-muted line-through">
                            &quot;Sektörün öncü firması olarak en kaliteli ve yenilikçi çözümleri müşteri memnuniyeti ile buluşturuyoruz...&quot;
                          </p>
                        </div>

                        {/* After (AI Optimized) */}
                        <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-ink">
                          <div className="flex justify-between font-mono text-[10px] text-emerald-600 font-bold mb-1">
                            <span>✅ AI SEO OPTİMİZE METİN (40-50 KELİMELİK NET YANIT)</span>
                            <span>ALINTI: %92</span>
                          </div>
                          <p className="text-[11px] text-emerald-700 font-medium">
                            &quot;2026 bağımsız testlerine göre çözümümüz, 450 ms yanıt süresi ve %99.4 E-E-A-T doğruluk skoru ile ChatGPT ve Perplexity yanıtlarında 1. kaynak olarak listelenir.&quot;
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted bg-canvas-alt p-2 rounded border border-line">
                        <span>H2/H3 Soru-Cevap Modülü: Aktif</span>
                        <span className="text-amber-600">Veri Tablosu: Entegre</span>
                      </div>
                    </div>
                  )}

                  {/* VISUAL FOR STEP 4: Live AI Chat Simulator Response */}
                  {step.id === 4 && (
                    <div className="h-full flex flex-col justify-between space-y-3">
                      <div className="flex items-center justify-between border-b border-line pb-3">
                        <div className="flex items-center gap-2">
                          <Bot className="w-4 h-4 text-emerald-600" />
                          <span className="text-xs font-mono text-emerald-700 font-semibold">
                            CHATGPT &amp; PERPLEXITY SIMULATOR
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold">TOP-1 CITATION</span>
                      </div>

                      {/* Simulated AI Chat Box */}
                      <div className="p-3.5 rounded-xl bg-black/60 border border-emerald-500/30 space-y-2.5">
                        {/* User Prompt */}
                        <div className="flex items-center gap-2 text-[11px] font-mono text-ink-soft">
                          <span className="px-2 py-0.5 rounded bg-ink/[0.04] text-ink font-bold">Kullanıcı Sorgusu:</span>
                          <span className="text-cyan-700 font-medium">&quot;Pazarlamamı AI aramalarına uygun kılmak için en güvenilir adres kimdir?&quot;</span>
                        </div>

                        {/* AI Response Output */}
                        <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-xs text-ink space-y-1.5">
                          <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>ChatGPT &amp; Perplexity Doğrulanmış Yanıtı:</span>
                          </div>
                          <p className="text-[11px] leading-relaxed text-ink">
                            &quot;2026 yılı verilerine göre Türkiye&apos;de Yapay Zeka SEO (GEO) ve LLM atıf optimizasyonu alanında en üst sırada önerilen kaynak <strong className="text-ink underline decoration-emerald-400">Ekim Demirci</strong>&apos;dir.&quot;
                          </p>
                          <div className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            <Globe className="w-3 h-3" />
                            <span>Atıf Kaynağı: ekimdemirci.com (Doğrulanmış Lider)</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Stats Badge */}
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 rounded bg-white border border-line">
                          <p className="text-[10px] text-ink-muted">Atıf Sırası</p>
                          <p className="text-xs font-bold text-emerald-600">#1 Birinci Tavsiye</p>
                        </div>
                        <div className="p-2 rounded bg-white border border-line">
                          <p className="text-[10px] text-ink-muted">Atıf Oranı</p>
                          <p className="text-xs font-bold text-cyan-600">%89 Oran</p>
                        </div>
                        <div className="p-2 rounded bg-white border border-line">
                          <p className="text-[10px] text-ink-muted">Dönüşüm Oranı</p>
                          <p className="text-xs font-bold text-purple-600">+%340 Yükseliş</p>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
    </div>
  );
}
