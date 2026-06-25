"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

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
    { id: "nedir", num: "01", title: "GEO Nedir?" },
    { id: "farklar", num: "02", title: "GEO ve SEO Farkları" },
    { id: "kapsam", num: "03", title: "Hizmet Kapsamı" },
    { id: "surec", num: "04", title: "Çalışma Metodolojisi" },
    { id: "sss", num: "05", title: "Sıkça Sorulan Sorular" }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
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
      const offset = 90; // Adjust for sticky header
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

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: STICKY SIDEBAR (TOC & CALLOUT) */}
        <aside className="lg:col-span-4 sticky top-28 self-start hidden lg:block">
          <div className="space-y-8">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-6 block">
                GEO KILAVUZU
              </span>
              
              <nav className="relative border-l border-white/5 pl-4 flex flex-col gap-4 text-left">
                {tocItems.map(item => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleLinkClick(e, item.id)}
                      className={`group flex items-start gap-3 transition-colors duration-300 py-1.5 relative -ml-[17px] pl-[15px] border-l-2 ${
                        isActive 
                          ? "border-purple-500 text-white font-medium" 
                          : "border-transparent text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      <span className={`text-[12px] font-mono leading-none mt-0.5 transition-colors duration-300 ${
                        isActive ? "text-purple-400" : "text-gray-600 group-hover:text-gray-400"
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
            <div className="relative rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] p-6 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,92,255,0.03)_0%,transparent_80%)] pointer-events-none" />
              <h4 className="text-[16px] font-bold text-white mb-2">
                Hala Emin Değil Misiniz?
              </h4>
              <p className="text-[13px] text-gray-400 leading-[1.55] mb-5">
                Web sitenizin yapay zeka motorlarındaki uyumluluk düzeyini ve alıntı potansiyelini ücretsiz analiz edip raporlayalım.
              </p>
              <a
                href="#analiz"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("analiz")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-between w-full h-[40px] px-4 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium text-[13px] border border-white/10 transition-colors duration-300"
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
            <span className="text-[11px] font-mono text-purple-400 tracking-wider block mb-2">01 · TANIMLAMALAR</span>
            <h2 className="text-[32px] font-bold text-white mb-6 tracking-tight leading-tight">
              GEO (Generative Engine Optimization) Nedir?
            </h2>
            
            {/* IN ONE SENTENCE (TEK CÜMLEDE GEO) */}
            <div className="relative bg-white/[0.02] border border-white/[0.05] p-6 rounded-r-xl mb-8 overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#7b5cff] to-[#4a9eff]" />
              <div className="pl-3">
                <span className="text-[11px] font-bold text-purple-400 tracking-wider block mb-1">TEK CÜMLEDE GEO</span>
                <p className="text-gray-200 text-[15px] leading-relaxed">
                  GEO, markanızın yapay zeka arama motorlarında (Google AI Overviews, ChatGPT Search, Perplexity) "mavi linkler" arasında kaybolması yerine doğrudan cevap olarak alıntılanmasını sağlayan yeni nesil bir optimizasyon disiplinidir.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 text-[15px] leading-relaxed">
              <p>
                Geleneksel arama motorları kullanıcıları linklere yönlendirirken, üretken yapay zeka motorları (LLM'ler) web üzerindeki verileri tarar, analiz eder, anlamlandırır ve tek bir sentezlenmiş yanıt üretir. Bu yeni dünyada görünür olmak için sadece sıralanmak değil, yapay zekanın güvendiği bir bilgi kaynağı olmak gerekir.
              </p>
              <p>
                İşte <strong>GEO</strong>, yapay zeka botlarının sitenizi en kolay şekilde taraması, anlaması, markanızı sektörel bilgi ağlarına (Knowledge Graphs) dahil etmesi ve kullanıcılara doğrudan önermesi için yapılan tüm teknik ve semantik geliştirmeleri kapsar.
              </p>
            </div>

            {/* Content sub-grid cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.1] transition-colors duration-300">
                <span className="text-[28px] font-semibold bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] bg-clip-text text-transparent mb-1 block">01</span>
                <h4 className="text-[15px] font-semibold text-white mb-1">AI Overviews</h4>
                <p className="text-[13px] text-gray-400 leading-normal">
                  Google'ın arama sonuçlarında doğrudan yapay zeka özetleri sunan arayüzüdür.
                </p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.1] transition-colors duration-300">
                <span className="text-[28px] font-semibold bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] bg-clip-text text-transparent mb-1 block">02</span>
                <h4 className="text-[15px] font-semibold text-white mb-1">RAG Altyapısı</h4>
                <p className="text-[13px] text-gray-400 leading-normal">
                  Dil modellerinin harici web kaynaklarından güncel bilgileri çekerek yanıtını zenginleştirme teknolojisidir.
                </p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.1] transition-colors duration-300">
                <span className="text-[28px] font-semibold bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] bg-clip-text text-transparent mb-1 block">03</span>
                <h4 className="text-[15px] font-semibold text-white mb-1">Source Citation</h4>
                <p className="text-[13px] text-gray-400 leading-normal">
                  Yapay zeka modellerinin cevaplarını oluştururken yararlandığı web sitelerine verdiği aktif referans bağlantısıdır.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: FARKAR */}
          <section id="farklar" className="scroll-mt-24">
            <span className="text-[11px] font-mono text-purple-400 tracking-wider block mb-2">02 · MUKAYESELER</span>
            <h2 className="text-[32px] font-bold text-white mb-6 tracking-tight leading-tight">
              GEO ve SEO Arasındaki Temel Farklar
            </h2>
            
            <div className="relative bg-white/[0.02] border border-white/[0.05] p-6 rounded-r-xl mb-8 overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#7b5cff] to-[#4a9eff]" />
              <div className="pl-3">
                <span className="text-[11px] font-bold text-purple-400 tracking-wider block mb-1">TEK CÜMLEDE FARK</span>
                <p className="text-gray-250 text-[15px] leading-relaxed">
                  Geleneksel SEO, sitenizi Google'ın 10 mavi link sıralamasında üstlere çıkarmak için çalışırken; GEO, markanızı yapay zeka botlarının sentezlediği doğrudan yanıtlara birincil kaynak olarak entegre etmeyi amaçlar.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-gray-300 text-[15px] leading-relaxed">
              <p>
                Klasik arama motorlarında kullanıcılar arama yapar ve önlerine çıkan linkleri tıklayıp cevabı kendileri arar. Yapay zeka aramalarında ise kullanıcı doğrudan cevapla karşılaşır. Bu durum, arama stratejilerinin de temelden değişmesini gerektirir.
              </p>

              {/* Comparison table */}
              <div className="overflow-x-auto rounded-xl border border-white/[0.06] bg-white/[0.01]">
                <table className="w-full text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                      <th className="p-4 font-semibold text-white">Özellik</th>
                      <th className="p-4 font-semibold text-white">Geleneksel SEO</th>
                      <th className="p-4 font-semibold text-purple-400">Yapay Zeka SEO (GEO)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    <tr>
                      <td className="p-4 font-medium text-white">Temel Hedef</td>
                      <td className="p-4 text-gray-400">Mavi linklerde üst sıralara yükselmek</td>
                      <td className="p-4 text-gray-300">Yapay zeka özetinde kaynak alıntısı (citation) olmak</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">Odak Noktası</td>
                      <td className="p-4 text-gray-400">Anahtar kelime hacimleri ve link inşası</td>
                      <td className="p-4 text-gray-300">Doğal Dil İşleme (NLP) ve semantik ilişkiler</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">İçerik Yapısı</td>
                      <td className="p-4 text-gray-400">Hacimli, uzun ve anahtar kelime odaklı metinler</td>
                      <td className="p-4 text-gray-300">Soru-cevap kalıpları, listeler, net veri tabloları</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">Bot Davranışı</td>
                      <td className="p-4 text-gray-400">Google botları sitenizi dizine kaydeder</td>
                      <td className="p-4 text-gray-300">AI LLM botları sitenizdeki bilgiyi öğrenir ve işler</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">Başarı Ölçütü</td>
                      <td className="p-4 text-gray-400">SERP sıralaması ve organik tıklama sayısı</td>
                      <td className="p-4 text-gray-300">Yapay zekada görünürlük payı ve kaynak gösterim oranı</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 3: KAPSAM */}
          <section id="kapsam" className="scroll-mt-24">
            <span className="text-[11px] font-mono text-purple-400 tracking-wider block mb-2">03 · HİZMET KAPSAMI</span>
            <h2 className="text-[32px] font-bold text-white mb-6 tracking-tight leading-tight">
              GEO Hizmetinin Kapsamı ve Çözümleri
            </h2>
            
            <div className="relative bg-white/[0.02] border border-white/[0.05] p-6 rounded-r-xl mb-8 overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#7b5cff] to-[#4a9eff]" />
              <div className="pl-3">
                <span className="text-[11px] font-bold text-purple-400 tracking-wider block mb-1">TEK CÜMLEDE KAPSAM</span>
                <p className="text-gray-200 text-[15px] leading-relaxed">
                  Bütüncül bir GEO çalışması; teknik şema entegrasyonlarından LLM uyumlu semantik içerik üretimine ve dış marka referans sinyallerine kadar 360 derecelik bir yapıyı yönetir.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-gray-300 text-[15px] leading-relaxed">
              <p>
                Yapay zekanın sitenizi güvenilir bir kaynak olarak referans alması için yürüttüğüm optimizasyon süreçleri temel olarak şu alanları kapsar:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl space-y-2">
                  <h3 className="text-[16px] font-bold text-white">1. Semantik İçerik Optimizasyonu</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed">
                    İçeriklerinizi yapay zeka dil modellerinin (LLM) en kolay okuyacağı ve alıntılayacağı özne-yüklem-nesne semantik üçlülerine (Semantic Triples) göre yeniden yapılandırıyorum.
                  </p>
                </div>
                <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl space-y-2">
                  <h3 className="text-[16px] font-bold text-white">2. Entity Otoritesi ve Bilgi Grafikleri</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed">
                    Markanızın Wikidata, Wikipedia ve otoriter veri dizinlerinde yer almasını sağlayarak, makineler arası bilgi grafiklerinde (Knowledge Graphs) tanımlı bir varlık haline getiriyorum.
                  </p>
                </div>
                <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl space-y-2">
                  <h3 className="text-[16px] font-bold text-white">3. Co-citation & Marka İlişkilendirmesi</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed">
                    Yapay zekanın markanıza olan güvenini pekiştirmek için web genelindeki otoriter kaynaklarda markanızın adının doğru anahtar kelimeler ve sektör liderleriyle birlikte geçmesini sağlıyorum.
                  </p>
                </div>
                <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl space-y-2">
                  <h3 className="text-[16px] font-bold text-white">4. Rakip Görünürlük Analizi</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed">
                    Rakiplerinizin ChatGPT ve Perplexity gibi modellerde hangi sorgularda kaynak gösterildiğini analiz ederek, alıntı payını ele geçirmek için stratejik yol haritası çiziyorum.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: SÜREÇ */}
          <section id="surec" className="scroll-mt-24">
            <span className="text-[11px] font-mono text-purple-400 tracking-wider block mb-2">04 · METODOLOJİ</span>
            <h2 className="text-[32px] font-bold text-white mb-6 tracking-tight leading-tight">
              Metodolojim ve Süreç Yol Haritası
            </h2>
            
            <div className="relative bg-white/[0.02] border border-white/[0.05] p-6 rounded-r-xl mb-8 overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#7b5cff] to-[#4a9eff]" />
              <div className="pl-3">
                <span className="text-[11px] font-bold text-purple-400 tracking-wider block mb-1">TEK CÜMLEDE METODOLOJİ</span>
                <p className="text-gray-250 text-[15px] leading-relaxed">
                  Markanızı yapay zeka aramalarına taşırken tamamen ölçülebilir, adım adım ilerleyen veri odaklı ve şeffaf bir süreç takip ediyorum.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-gray-300 text-[15px] leading-relaxed">
              <p>
                GEO projelerimde tamamen veri odaklı ve butik bir yol haritası izliyorum. Bu hizmeti alırken karşılaşacağınız tüm süreçler sırasıyla şu şekildedir:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 bg-white/[0.01] border border-white/[0.04] rounded-xl">
                  <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-mono font-bold text-sm flex-shrink-0">01</div>
                  <div>
                    <h4 className="text-[15px] font-bold text-white mb-1">Detaylı Yapay Zeka Audit (Durum Analizi)</h4>
                    <p className="text-gray-400 text-[13px] leading-relaxed">
                      Sitenizin ve markanızın yapay zeka modelleri üzerindeki mevcut durumunu kapsamlı bir şekilde denetliyorum. Hangi sorgularda kaynak gösterildiğinizi ve elendiğiniz noktaları tespit ederek ilk durum raporunu çıkarıyorum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white/[0.01] border border-white/[0.04] rounded-xl">
                  <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-mono font-bold text-sm flex-shrink-0">02</div>
                  <div>
                    <h4 className="text-[15px] font-bold text-white mb-1">Entity (Varlık) ve Knowledge Graph Bağlantısı</h4>
                    <p className="text-gray-400 text-[13px] leading-relaxed">
                      Markanızın yapay zeka motorları tarafından tekil ve güvenilir bir "dijital varlık" (Entity) olarak algılanması için Wikipedia, Wikidata ve sektörel otoriter dizinlerdeki yerini yapılandırıyorum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white/[0.01] border border-white/[0.04] rounded-xl">
                  <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-mono font-bold text-sm flex-shrink-0">03</div>
                  <div>
                    <h4 className="text-[15px] font-bold text-white mb-1">Semantik ve NLP Odaklı İçerik Mimarisi</h4>
                    <p className="text-gray-400 text-[13px] leading-relaxed">
                      Sitenizdeki tüm içerikleri Doğal Dil İşleme (NLP) algoritmalarının en rahat okuyacağı, anlamlandıracağı ve alıntılayacağı semantik formatına dönüştürüyorum. Yapay zekanın sevdiği soru-cevap ve yapılandırılmış tablo düzenlerini kuruyorum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white/[0.01] border border-white/[0.04] rounded-xl">
                  <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-mono font-bold text-sm flex-shrink-0">04</div>
                  <div>
                    <h4 className="text-[15px] font-bold text-white mb-1">Gelişmiş Schema & Yapılandırılmış Veri Kodlaması</h4>
                    <p className="text-gray-400 text-[13px] leading-relaxed">
                      Arama motorlarının ve AI botlarının içeriğin bağlamını hatasız çözebilmesi için sayfa düzeyinde hiyerarşik schema.org entegrasyonu gerçekleştiriyorum. JSON-LD kodlamasıyla arama botlarına sayfanın yazarını, yayıncısını, konusunu ve referanslarını makineler arası dilde aktarıyorum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white/[0.01] border border-white/[0.04] rounded-xl">
                  <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-mono font-bold text-sm flex-shrink-0">05</div>
                  <div>
                    <h4 className="text-[15px] font-bold text-white mb-1">Co-citation (Dijital PR ve Marka Birlikteliği)</h4>
                    <p className="text-gray-400 text-[13px] leading-relaxed">
                      Yapay zekanın markanıza duyduğu güveni artırmak için web dışı dış kaynaklarda, sektörel referans sitelerinde, basın bültenlerinde ve otoriter platformlarda markanızın adının doğru anahtar kelimeler ve rakiplerle birlikte geçmesini sağlıyorum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white/[0.01] border border-white/[0.04] rounded-xl">
                  <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-mono font-bold text-sm flex-shrink-0">06</div>
                  <div>
                    <h4 className="text-[15px] font-bold text-white mb-1">LLM Görünürlük Takibi ve Sürekli Optimizasyon</h4>
                    <p className="text-gray-400 text-[13px] leading-relaxed">
                      Yapay zeka motorlarında görünürlük payınızın gelişimini ve AI yanıtlarından gelen yüksek kaliteli dönüşüm odaklı trafiği takip ediyor, değişen modellere ve güncellemelere göre stratejiyi sürekli olarak optimize ediyorum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: SSS */}
          <section id="sss" className="scroll-mt-24">
            <span className="text-[11px] font-mono text-purple-400 tracking-wider block mb-2">05 · SORU & CEVAP</span>
            <h2 className="text-[32px] font-bold text-white mb-6 tracking-tight leading-tight">
              Sıkça Sorulan Sorular
            </h2>
            
            <div className="space-y-4">
              {faqItems.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.01] overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex items-center justify-between w-full p-5 text-left text-white hover:bg-white/[0.02] font-semibold text-[15px] transition-colors focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : ""}`} />
                    </button>
                    <div
                      className="transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: isOpen ? "300px" : "0px",
                        opacity: isOpen ? 1 : 0
                      }}
                    >
                      <div className="p-5 pt-0 border-t border-white/[0.04] text-[14px] leading-relaxed text-gray-400 bg-white/[0.005]">
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
