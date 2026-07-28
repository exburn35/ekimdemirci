"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, CheckCircle2, Cpu, ShieldCheck, Sparkles, BookOpen, Layers, Zap, Database, Terminal, FileCode2 } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface GEODetailedContentProps {
  faqItems: FAQItem[];
}

export default function GEODetailedContent({ faqItems }: GEODetailedContentProps) {
  const [activeSection, setActiveSection] = useState("nedir");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const tocItems = [
    { id: "nedir", num: "01", title: "GEO Nedir & LLM Mantığı" },
    { id: "patentler", num: "02", title: "8 Google Patenti ve GEO" },
    { id: "farklar", num: "03", title: "SEO vs GEO Mukayesesi" },
    { id: "platformlar", num: "04", title: "Platform Bazlı Stratejiler" },
    { id: "surec", num: "05", title: "6 Adımlı GEO Metodolojisi" },
    { id: "sss", num: "06", title: "Patent Referanslı SSS" }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0
    };

    const observers = tocItems.map(item => {
      const el = document.getElementById(item.id);
      if (!el) return null;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(item.id);
        }
      }, observerOptions);

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach(obs => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const googlePatents = [
    {
      id: "US6615209B1",
      title: "Query-Specific Duplicate Documents",
      focus: "Contextual Information Density",
      description: "Arama motoru ve LLM RAG hatlarının sorgu niyetine göre tekrarlanan bilgileri eleme algoritması. GEO optimizasyonu ile içeriğin sorgu özelindeki veri yoğunluğunu artırarak filtreleri aşmasını sağlıyorum.",
      badge: "Contextual Pruning"
    },
    {
      id: "US7693813B1",
      title: "Tiered & Sharded Phrase Posting Lists",
      focus: "RAG & Vector Tiering",
      description: "Vektör indeksleme sunucularının bilgiyi Tier 1 (Birincil Güvenilir Bilgi) ve alt kademelere bölme mimarisi. Sayfalarınızı Tier 1 sunucu gruplarında indekslenecek yetkinlikte kurguluyorum.",
      badge: "Index Architecture"
    },
    {
      id: "US9916366B1",
      title: "Query Augmentation & Fan-Out",
      focus: "AI Sub-Query Trees",
      description: "ChatGPT ve AI Overviews'ın tek bir kullanıcı prompt'undan onlarca alt sorgu (query fan-out) türetme mekanizması. İçeriği tüm alt sorgu ağacını yanıtlayacak çok açılı bilgi bloklarına dönüştürüyorum.",
      badge: "Query Expansion"
    },
    {
      id: "US20240289407A1",
      title: "Generative Answer & Context Retrieval",
      focus: "RAG Answer Generation",
      description: "Google AI Overviews'ın web sayfalarından doğrulanmış paragraf ve verileri çekerek yanıt kartı oluşturma patenti. Doğrudan alıntı yapılabilir soru-cevap ve tablo formatları entegre ediyorum.",
      badge: "Generative Search"
    },
    {
      id: "US10210256B2",
      title: "Phrase-Based Indexing & Entity Linking",
      focus: "Knowledge Graph Nodes",
      description: "LLM'lerin metinlerdeki varlıkları (Entity) ve ilişkileri tespit etme patenti. Markanızı ve ürünlerinizi Büyük Dil Modellerinin hafızasında sarsılmaz bir nesne düğümü (Entity Node) olarak işliyorum.",
      badge: "Entity Extraction"
    },
    {
      id: "US8554769B1",
      title: "Information Extraction & Semantic Triplets",
      focus: "Özne-Yüklem-Nesne Mimarisi",
      description: "Modellerin sıfır halüsinasyonla gerçek bilgi çıkarmasını sağlayan semantik üçlüler (Semantic Triplets). Sayfa metinlerini makineler arası dilde hatasız işlenebilir yapıya kavuşturuyorum.",
      badge: "Semantic Triples"
    },
    {
      id: "US7536408B2",
      title: "Document Ranking & Authority Scoring",
      focus: "Co-Citation & AI Trust",
      description: "Yapay zeka motorlarının web sitelerine atadığı otorite ve semantik güven skoru. Dış mecralarda marka birliktelikleri (co-citation) kurgulayarak AI güven katsayısını yükseltiyorum.",
      badge: "Authority Score"
    },
    {
      id: "US12393768B2",
      title: "Generative Engine Citation Selection",
      focus: "Source Link Selection",
      description: "Üretken arama motorlarının yanıt metninin yanına ekleyeceği tıklanabilir kaynak bağlantı kartlarını seçme algoritması. Sitenizin alıntı önceliğini üst seviyeye taşıyorum.",
      badge: "Source Citation"
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: STICKY SIDEBAR (TOC & CALLOUT) */}
        <aside className="lg:col-span-4 sticky top-28 self-start hidden lg:block">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6">
                <BookOpen className="w-4 h-4" />
                GEO TEKNİK REHBERİ
              </div>
              
              <nav className="relative border-l border-white/10 pl-4 flex flex-col gap-3 text-left">
                {tocItems.map(item => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleLinkClick(e, item.id)}
                      className={`group flex items-start gap-3 transition-colors duration-300 py-1.5 relative -ml-[17px] pl-[15px] border-l-2 ${
                        isActive 
                          ? "border-cyan-400 text-white font-medium" 
                          : "border-transparent text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      <span className={`text-[12px] font-mono leading-none mt-0.5 transition-colors duration-300 ${
                        isActive ? "text-cyan-400 font-bold" : "text-gray-600 group-hover:text-gray-400"
                      }`}>
                        {item.num}
                      </span>
                      <span className="text-[14px] leading-tight">
                        {item.title}
                      </span>
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Sidebar Callout Card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900/90 to-purple-950/40 border border-cyan-500/30 p-6 overflow-hidden shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_80%)] pointer-events-none" />
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                <Sparkles className="w-4 h-4" />
                Ücretsiz AI Audit
              </div>
              <h4 className="text-[17px] font-bold text-white mb-2 leading-snug">
                Sitenizin AI Görünürlük Skorunu Ölçelim
              </h4>
              <p className="text-[13px] text-gray-300 leading-relaxed mb-5">
                ChatGPT, Perplexity ve Google AI Overviews'taki alıntı (citation) potansiyelinizi ve entity uyumluluğunuzu ücretsiz analiz edelim.
              </p>
              <a
                href="#iletisim"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("iletisim")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-between w-full h-[44px] px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-[13px] transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                <span>Ücretsiz GEO Analizi Alın</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN: DETAILED SECTIONS */}
        <div className="lg:col-span-8 space-y-24 scroll-mt-24">
          
          {/* Section 1: NEDİR */}
          <section id="nedir" className="scroll-mt-24">
            <span className="text-[11px] font-mono text-cyan-400 tracking-wider block mb-2">01 · TANIM VE MİMARİ</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-white mb-6 tracking-tight leading-tight">
              GEO (Generative Engine Optimization) Nedir?
            </h2>
            
            {/* IN ONE SENTENCE (TEK CÜMLEDE GEO) */}
            <div className="relative bg-slate-900/80 border border-cyan-500/30 p-6 rounded-2xl mb-8 overflow-hidden backdrop-blur-xl shadow-xl">
              <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-gradient-to-b from-cyan-400 via-teal-400 to-purple-500" />
              <div className="pl-3">
                <span className="text-[11px] font-bold text-cyan-400 tracking-wider block mb-1 uppercase">TEK CÜMLEDE GEO</span>
                <p className="text-gray-100 text-[16px] leading-relaxed font-medium">
                  GEO, markanızın yapay zeka arama motorlarında (Google AI Overviews, ChatGPT Search, Perplexity, Claude) geleneksel "mavi bağlantılar" arasında kaybolması yerine doğrudan üretilen yanıtlara güvenilir kaynak olarak dahil edilmesini ve alıntılanmasını sağlayan bilimsel optimizasyon disiplinidir.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
              <p>
                Geleneksel arama motorları kullanıcıya link listesi sunup tıklama beklerken, üretken yapay zeka sistemleri (Büyük Dil Modelleri / LLMs) web üzerindeki verileri **RAG (Retrieval-Augmented Generation)** mimarisiyle anlık olarak tarar, doğrular, sentezler ve kullanıcıya tek bir nihai cevap üretir.
              </p>
              <p>
                Bu yeni arama ekosisteminde var olmak için web sitenizin sadece indekslenmesi yetmez; yapay zeka modellerinin **Knowledge Graph (Bilgi Grafiği)** veritabanlarında tanımlı, semantik triple yapısıyla doğrulanmış bir **Entity (Varlık)** haline gelmesi gerekir.
              </p>
            </div>

            {/* Content sub-grid cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-[16px] font-bold text-white mb-2">AI Overviews (AEO)</h4>
                <p className="text-[13px] text-gray-300 leading-relaxed">
                  Google arama sonuçlarının en tepesinde çıkan üretken özet kartlarında birincil referans web sitesi olarak yer alma.
                </p>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="text-[16px] font-bold text-white mb-2">RAG Altyapısı</h4>
                <p className="text-[13px] text-gray-300 leading-relaxed">
                  LLM'lerin dış web kaynaklarından gerçek zamanlı bilgi çekerken sitenizi ilk tercih edilen vektör veri bloğu yapması.
                </p>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-[16px] font-bold text-white mb-2">Source Citation</h4>
                <p className="text-[13px] text-gray-300 leading-relaxed">
                  Yapay zeka yanıtlarının dipnotlarında ve referans kartlarında markanıza ait tıklanabilir kaynak bağlantısının çıkması.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: PATENTLER */}
          <section id="patentler" className="scroll-mt-24">
            <span className="text-[11px] font-mono text-cyan-400 tracking-wider block mb-2">02 · BİLİMSEL TEMELLENDİRME</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-white mb-4 tracking-tight leading-tight">
              Google'ın 8 Resmi Patenti İle GEO Mimarisi
            </h2>
            <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed mb-8">
              Piyasadaki yüzeysel GEO anlatılarının aksine, sunduğum danışmanlık hizmeti doğrudan Google'ın yapay zeka arama, vektör indeksleme, RAG ve bilgi grafiği sistemleri için tescillediği 8 temel patente dayanmaktadır:
            </p>

            {/* Patent Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {googlePatents.map((patent) => (
                <div 
                  key={patent.id}
                  className="rounded-2xl bg-slate-900/70 border border-cyan-500/20 hover:border-cyan-400/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                        {patent.id}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                        {patent.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {patent.title}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400 mb-3">
                      {patent.focus}
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {patent.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Patent Sample Code / Schema Box */}
            <div className="mt-8 rounded-2xl bg-slate-950 border border-slate-800 p-6 overflow-hidden">
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <FileCode2 className="w-4 h-4" />
                  Semantic Triplet & JSON-LD Entity Grounding (US8554769B1 & US10210256B2)
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Valid Schema.org
                </span>
              </div>
              <pre className="text-xs font-mono text-gray-300 leading-relaxed overflow-x-auto p-2">
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "GEO Danışmanlığı",
  "provider": {
    "@type": "Person",
    "name": "Ekim Demirci",
    "sameAs": ["https://wikidata.org/wiki/Q12345", "https://linkedin.com/in/ekimdemirci"]
  },
  "knowsAbout": [
    "Generative Engine Optimization",
    "Retrieval-Augmented Generation",
    "LLM Source Citation"
  ]
}`}
              </pre>
            </div>
          </section>

          {/* Section 3: FARKLAR */}
          <section id="farklar" className="scroll-mt-24">
            <span className="text-[11px] font-mono text-cyan-400 tracking-wider block mb-2">03 · MUKAYESELER</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-white mb-6 tracking-tight leading-tight">
              Geleneksel SEO vs Yapay Zeka SEO (GEO)
            </h2>
            
            <div className="relative bg-slate-900/80 border border-cyan-500/30 p-6 rounded-2xl mb-8 overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-gradient-to-b from-cyan-400 to-purple-500" />
              <div className="pl-3">
                <span className="text-[11px] font-bold text-cyan-400 tracking-wider block mb-1 uppercase">TEK CÜMLEDE FARK</span>
                <p className="text-gray-100 text-[15px] sm:text-[16px] leading-relaxed">
                  Geleneksel SEO, web sitenizi Google'ın "10 mavi bağlantı" listesinde üst sıralara taşımayı hedeflerken; GEO, markanızı yapay zeka motorlarının sentezlediği doğrudan yanıtlara sarsılmaz birincil kaynak olarak yerleştirir.
                </p>
              </div>
            </div>

            {/* Comparison table */}
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
              <table className="w-full text-left text-[14px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-4 sm:p-5 font-bold text-white">Karşılaştırma Kriteri</th>
                    <th className="p-4 sm:p-5 font-bold text-gray-400">Geleneksel SEO</th>
                    <th className="p-4 sm:p-5 font-bold text-cyan-400">GEO (Yapay Zeka SEO)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-white">Birincil Hedef</td>
                    <td className="p-4 sm:p-5 text-gray-400">Mavi bağlantılarda ilk 3'e girmek</td>
                    <td className="p-4 sm:p-5 text-gray-200">AI yanıt özetinde tıklanabilir kaynak (citation) olmak</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-white">Hedef Algoritma</td>
                    <td className="p-4 sm:p-5 text-gray-400">PageRank, Anahtar Kelime Hacmi, Backlink</td>
                    <td className="p-4 sm:p-5 text-gray-200">RAG Vector Search, Entity Graph, Co-Citation Score</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-white">İçerik Mimarisi</td>
                    <td className="p-4 sm:p-5 text-gray-400">Uzun metinler, anahtar kelime yoğunluğu</td>
                    <td className="p-4 sm:p-5 text-gray-200">Semantik Üçlüler, Soru-Cevap blokları, Veri Tabloları</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-white">Tarama & İndeksleme</td>
                    <td className="p-4 sm:p-5 text-gray-400">Googlebot indeks kaydı</td>
                    <td className="p-4 sm:p-5 text-gray-200">GPTBot, ClaudeBot, PerplexityBot RAG vektörleştirme</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-white">Başarı Ölçütü</td>
                    <td className="p-4 sm:p-5 text-gray-400">SERP sıralaması & Toplam Tıklama</td>
                    <td className="p-4 sm:p-5 text-gray-200">Share of Model Voice (SoMV) & Tavsiye Oranı</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: PLATFORMLAR */}
          <section id="platformlar" className="scroll-mt-24">
            <span className="text-[11px] font-mono text-cyan-400 tracking-wider block mb-2">04 · MOTOR UYUMLULUĞU</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-white mb-6 tracking-tight leading-tight">
              Yapay Zeka Motorlarına Özel Optimizasyon
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Google AI Overviews & Gemini</h3>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">US20240289407A1</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Google'ın kendi Knowledge Graph ve RAG altyapısıyla çalışır. Sayfa içi Schema.org mimarisi ve semantik triple yapısıyla doğrudan AI yanıt kartlarına kaynak olarak yerleştirilir.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">ChatGPT Search & OpenAI</h3>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">US9916366B1</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  GPTBot ve O1 mimarisinin canlı web aramalarını hedefler. Sitenizdeki llms.txt yapılandırması ve marka co-citation atıfları ile ürün/hizmet tavsiyelerinde ilk sırada yer alması sağlanır.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Perplexity AI & Sonar</h3>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">US7693813B1</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Canlı web taraması ve akademik/sektörel kaynak atıflarına odaklanır. Perplexity'nin tercih ettiği tablo ve rakamsal veri formatlarıyla doğrudan alıntı oranı yükseltilir.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Claude (Anthropic)</h3>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">US8554769B1</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Derin semantik bağlam ve etik bilgi kurgularını önemser. ClaudeBot erişim izinleri ve yüksek otoriteli marka varlık (Entity) tanımlamalarıyla uyumlandırılır.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: SÜREÇ */}
          <section id="surec" className="scroll-mt-24">
            <span className="text-[11px] font-mono text-cyan-400 tracking-wider block mb-2">05 · UYGULAMA METODOLOJİSİ</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-white mb-6 tracking-tight leading-tight">
              6 Adımlı Patent Uyumlu GEO Yol Haritası
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-slate-900/60 border border-white/10 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-base flex-shrink-0">01</div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">AI Mention & Share of Model Voice (SoMV) Auditi</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    ChatGPT, Perplexity ve Google AI Overviews üzerinde markanızın ve rakiplerinizin mevcut alıntılanma oranlarını, kaçırılan tavsiye alanlarını denetliyorum.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-900/60 border border-white/10 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-base flex-shrink-0">02</div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Semantik Varlık (Entity) & Knowledge Graph Yapılandırması</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Markanızı Wikipedia, Wikidata ve sektörel yetkili veri dizinlerinde tanımlayarak LLM hafızasında bağımsız bir nesne düğümü (Entity) olarak kurguluyorum (US10210256B2).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-900/60 border border-white/10 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-base flex-shrink-0">03</div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Direct Answer Chunking & RAG Optimizasyonu</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Sayfa metinlerinizi yapay zeka botlarının doğrudan yanıt olarak çekebileceği soru-cevap ve tablo formatlı veri bloklarına bölümlendiriyorum (US20240289407A1).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-900/60 border border-white/10 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-base flex-shrink-0">04</div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Hiyerarşik Schema.org Entegrasyonu</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Organization, Product, Service ve Article şemalarını JSON-LD formatında entegre ederek makineler arası veri anlaşılırlığını maksimuma çıkarıyorum.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-900/60 border border-white/10 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-base flex-shrink-0">05</div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Co-Citation & Basın/Dijital PR Güven Ağları</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Dış mecralarda markanızın adının doğru anahtar kelimeler ve sektör liderleriyle birlikte geçmesini sağlayarak AI güven katsayısını yükseltiyorum (US7536408B2).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-900/60 border border-white/10 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-base flex-shrink-0">06</div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">AI Bot Erişim & llms.txt Yönetimi</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    GPTBot, ClaudeBot, PerplexityBot tarayıcılarının erişim kurgularını optimize ediyor, sitenize özel llms.txt mimarisini yayına alıyorum (US7693813B1).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: SSS */}
          <section id="sss" className="scroll-mt-24">
            <span className="text-[11px] font-mono text-cyan-400 tracking-wider block mb-2">06 · SORU & CEVAP</span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-white mb-6 tracking-tight leading-tight">
              Sıkça Sorulan Sorular
            </h2>
            
            <div className="space-y-4">
              {faqItems.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex items-center justify-between w-full p-5 sm:p-6 text-left text-white hover:bg-white/5 font-bold text-[15px] sm:text-[16px] transition-colors focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-white" : ""}`} />
                    </button>
                    <div
                      className="transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: isOpen ? "400px" : "0px",
                        opacity: isOpen ? 1 : 0
                      }}
                    >
                      <div className="p-5 sm:p-6 pt-0 border-t border-white/5 text-[14px] leading-relaxed text-gray-300 bg-white/[0.01]">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
