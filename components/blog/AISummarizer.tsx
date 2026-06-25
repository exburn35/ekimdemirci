"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { BlogPost } from "@/lib/blog";

interface AISummarizerProps {
  post: BlogPost;
}

interface ModelOption {
  id: string;
  name: string;
  label: string;
  color: string;
  icon: React.ReactNode;
}

export default function AISummarizer({ post }: AISummarizerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("chatgpt");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const models: ModelOption[] = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      label: "Summarize this article with ChatGPT",
      color: "text-[#10a37f]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#10a37f]">
          <path d="M21.74 11.9a3.86 3.86 0 0 0-.17-2.6 3.82 3.82 0 0 0-1.85-2.02 3.86 3.86 0 0 0-1.63-2.93 3.82 3.82 0 0 0-2.68-.4 3.86 3.86 0 0 0-2.93-1.63 3.82 3.82 0 0 0-2.43.98 3.86 3.86 0 0 0-2.93.17 3.82 3.82 0 0 0-2.02 1.85A3.86 3.86 0 0 0 2.2 7.15a3.82 3.82 0 0 0-.4 2.68 3.86 3.86 0 0 0-1.63 2.93 3.82 3.82 0 0 0 .98 2.43 3.86 3.86 0 0 0 .17 2.93 3.82 3.82 0 0 0 1.85 2.02 3.86 3.86 0 0 0 1.63 2.93c.9.23 1.84.1 2.68-.4a3.86 3.86 0 0 0 2.93 1.63 3.82 3.82 0 0 0 2.43-.98 3.86 3.86 0 0 0 2.93-.17 3.82 3.82 0 0 0 2.02-1.85 3.86 3.86 0 0 0 2.93-1.82 3.82 3.82 0 0 0 .4-2.68 3.86 3.86 0 0 0 1.63-2.93 3.82 3.82 0 0 0-.98-2.43zM12 14.82a2.82 2.82 0 1 1 2.82-2.82A2.82 2.82 0 0 1 12 14.82zm5.7-1.12a5.2 5.2 0 0 1-.22.68l-4.52-2.6v-5.2a5.2 5.2 0 0 1 2.13.9 5.17 5.17 0 0 1 2.61 6.22zm-4.3-7.56v3.25L8.9 6.83a5.17 5.17 0 0 1 4.5-1.54zm-6.62 1.9l2.78 1.6-2.78 4.82a5.17 5.17 0 0 1-2.1-4.22 5.17 5.17 0 0 1 2.1-2.2zm-.22 8.08a5.2 5.2 0 0 1-.68-.22l2.6-4.52h5.2a5.2 5.2 0 0 1-.9 2.13 5.17 5.17 0 0 1-6.22 2.61zm6.06 1.82L9.84 14.7l2.78-4.82a5.17 5.17 0 0 1 2.1 4.22 5.17 5.17 0 0 1-2.1 2.2zm5.66-2.13l-2.78-1.6 2.78-4.82a5.17 5.17 0 0 1 2.1 4.22 5.17 5.17 0 0 1-2.1 2.2z"/>
        </svg>
      )
    },
    {
      id: "perplexity",
      name: "Perplexity",
      label: "with Perplexity",
      color: "text-[#19C37D]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#19C37D]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
        </svg>
      )
    },
    {
      id: "aimode",
      name: "AI Mode",
      label: "with AI Mode",
      color: "text-[#4285F4]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
          <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.05-5.636 4.05-3.834 0-6.966-3.132-6.966-6.966s3.132-6.966 6.966-6.966c1.782 0 3.39.648 4.653 1.821l3.24-3.24C18.89 1.012 15.752 0 12.24 0 5.482 0 0 5.482 0 12.24s5.482 12.24 12.24 12.24c6.887 0 12.24-5.482 12.24-12.24 0-.853-.081-1.685-.24-2.455H12.24z"/>
        </svg>
      )
    },
    {
      id: "claude",
      name: "Claude",
      label: "with Claude",
      color: "text-[#d97706]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#d97706]">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.5 13.5a1.5 1.5 0 1 1-3 0V11h-1v4.5a1.5 1.5 0 0 1-3 0V9.5A1.5 1.5 0 0 1 10 8h4a1.5 1.5 0 0 1 1.5 1.5z"/>
        </svg>
      )
    },
    {
      id: "grok",
      name: "Grok",
      label: "with Grok",
      color: "text-white",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      id: "gemini",
      name: "Gemini",
      label: "with Gemini",
      color: "text-[#8E75FF]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[#8E75FF]">
          <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9 12 2" />
        </svg>
      )
    }
  ];

  // Specific high-quality summaries for the "semantic-triple-nedir" article
  const getSemanticTripleSummary = (modelId: string) => {
    switch (modelId) {
      case "chatgpt":
        return (
          <p className="text-gray-300 text-[14px] leading-relaxed">
            Bu makale, Google'ın web metinlerini anlamlandırmak için kullandığı ve Knowledge Graph (Bilgi Grafiği) altyapısının temelini oluşturan <strong>Semantic Triple (Semantik Üçleme)</strong> sistemini açıklamaktadır. Sistem, karmaşık bilgileri <strong>[Özne] → [Yüklem/İlişki] → [Nesne]</strong> şeklinde 3 temel bileşene ayırarak makinelerin okuyabileceği hale getirir. Entity SEO ve Schema.org gibi yapıların bu sistemle olan ilişkisini ele alırken, web sitelerinde bilgi tutarlılığının önemini vurgular.
          </p>
        );
      case "perplexity":
        return (
          <div className="text-gray-300 text-[14px] leading-relaxed space-y-2">
            <p className="font-semibold text-white">Arama motorlarının ve yapay zeka botlarının web verilerini nasıl işlediğine dair temel bulgular:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
              <li><strong>Semantic Triple:</strong> Bilgiyi Özne-Yüklem-Nesne ilişkisiyle temsil eden en küçük anlam birimidir.</li>
              <li><strong>Bilgi Grafiği:</strong> Google'ın milyarlarca düğümden oluşan bilgi ağı bu üçlemelerden beslenir.</li>
              <li><strong>Entity Authority:</strong> Wikidata, Wikipedia ve Schema.org entegrasyonlarıyla güçlenen dijital varlık gücüdür.</li>
              <li><strong>Temel Sorun:</strong> Farklı kaynaklardaki bilgi tutarsızlıkları yapay zekanın markaya olan güvenini zedeler.</li>
            </ul>
          </div>
        );
      case "aimode":
        return (
          <p className="text-gray-300 text-[14px] leading-relaxed italic">
            "Google'ın aramayı kelimelerden ilişkilere taşıyan Semantic Triple sistemini keşfedin. Bilgiyi üç kelimelik (Özne-İlişki-Nesne) kalıplarla işleyen bu yapı, modern Entity SEO ve Schema.org markup'larının özünü oluşturur."
          </p>
        );
      case "claude":
        return (
          <p className="text-gray-300 text-[14px] leading-relaxed">
            Semantik Ağ (Semantic Web) teknolojilerinin arama motoru optimizasyonuna yansımasını inceleyen bu makale, RDF ve JSON-LD gibi formatların arka planındaki mantığı irdeliyor. Makineden-makineye bilgi aktarımında Semantic Triples yapısının (Özne → İlişki → Nesne) önemini analiz eden yazar, marka otoritesinin (Entity Authority) inşasında tutarlı veri setlerinin kullanılmasını ve yapılandırılmış veri işaretlemelerinin (Schema) doğru kurgulanmasını tavsiye ediyor.
          </p>
        );
      case "grok":
        return (
          <p className="text-gray-300 text-[14px] leading-relaxed">
            Makineler kelimeleri saymayı bıraktı, artık kim kiminle nerede ne yapıyor onu öğreniyorlar! Google'ın her şeyi 3 kelimeyle anladığı Semantic Triples sisteminin özeti: Özne, Yüklem ve Nesne. Eğer markanızın internette kaybolmasını istemiyorsanız, Wikipedia'dan schema kodlarınıza kadar her yerde aynı tutarlı bilgiyi vermelisiniz. Aksi halde yapay zeka çelişkileri görür ve sizi listesinden eler. Net ve temiz bilgi kazanır!
          </p>
        );
      case "gemini":
        return (
          <div className="text-gray-300 text-[14px] leading-relaxed space-y-2">
            <p className="font-semibold text-white">Google Bilgi Grafiği ve modern arama mimarisinin temel yapı taşını ele alan analiz. Öne çıkan başlıklar:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
              <li><strong>Anlamsal İlişkilendirme:</strong> Verilerin düz metin yerine anlamsal üçlemelerle (Triple) ilişkilendirilmesi.</li>
              <li><strong>Yapısal Veri (JSON-LD):</strong> Web sayfalarının arama botlarına doğrudan anlamsal veri sunma yöntemi.</li>
              <li><strong>Marka Otoritesi:</strong> Otoriter platformlarda (Wikidata vb.) tutarlı marka kimliğiyle güven skoru oluşturma.</li>
              <li><strong>Öneri:</strong> İçerik üretiminde ve teknik SEO'da anlamsal üçleme mantığına uygun bir hiyerarşi kurun.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  // Fallback summary template for other posts
  const getFallbackSummary = (modelId: string) => {
    const topic = post.title.replace(/&#8217;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&');
    const excerpt = post.excerpt || "makale detayları";

    switch (modelId) {
      case "chatgpt":
        return (
          <p className="text-gray-300 text-[14px] leading-relaxed">
            Bu makale, <strong>{topic}</strong> konusunu kapsamlı bir şekilde ele almaktadır. İçerikte, {excerpt.toLowerCase()} konularına değinilerek okuyucuların bu alandaki temel prensipleri kavraması amaçlanmaktadır. Teknik ve pratik SEO süreçlerine dair önemli yönergeler sunar.
          </p>
        );
      case "perplexity":
        return (
          <div className="text-gray-300 text-[14px] leading-relaxed space-y-2">
            <p className="font-semibold text-white">Konuya dair hızlı arama ve araştırma verileri:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
              <li><strong>Ana Konu:</strong> {topic}</li>
              <li><strong>Kapsam:</strong> {excerpt}</li>
              <li><strong>Hedef:</strong> Okuyucuya ölçülebilir, kanıtlanmış arama motoru optimizasyonu metotlarını sunmak.</li>
            </ul>
          </div>
        );
      case "aimode":
        return (
          <p className="text-gray-300 text-[14px] leading-relaxed italic">
            "{topic} konusunu anlatan özet rehber. Arama motorları ve yapay zeka çağında bu başlığın neden kritik öneme sahip olduğunu açıklar."
          </p>
        );
      case "claude":
        return (
          <p className="text-gray-300 text-[14px] leading-relaxed">
            Analitik bir yaklaşımla kaleme alınan bu çalışmada, <strong>{topic}</strong> konusu irdeleniyor. Yazar, {excerpt.toLowerCase()} ekseninde gelişen dijital trendleri ve teknik SEO gereksinimlerini derinlemesine analiz ederek, sektörel standartlara uygun pratik bir yol haritası sunuyor.
          </p>
        );
      case "grok":
        return (
          <p className="text-gray-300 text-[14px] leading-relaxed">
            Gereksiz detayları bir kenara bırakırsak, olay tamamen {topic} etrafında dönüyor. Makalenin özü şu: {excerpt} Eğer dijitalde büyümek istiyorsanız bu konuya kesinlikle hakim olmalısınız.
          </p>
        );
      case "gemini":
        return (
          <div className="text-gray-300 text-[14px] leading-relaxed space-y-2">
            <p className="font-semibold text-white">Google Gemini tarafından hazırlanan yapılandırılmış özet:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
              <li><strong>Temel Başlık:</strong> {topic}</li>
              <li><strong>Öne Çıkan Detaylar:</strong> {excerpt}</li>
              <li><strong>Eylem Planı:</strong> Makalede belirtilen adımları uygulayarak web sitenizin anlamsal yapısını ve otoritesini artırın.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  const isSemanticTriple = post.slug === "semantic-triple-nedir";
  const activeModelObj = models.find((m) => m.id === selectedModel) || models[0];

  return (
    <div className="mb-12 rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden p-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,92,255,0.02)_0%,transparent_80%)] pointer-events-none" />
      
      {/* Dropdown Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06] relative z-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-white leading-tight">Yapay Zeka Özeti</h4>
            <p className="text-[11px] text-gray-500">Farklı AI modellerinin bakış açısıyla makale</p>
          </div>
        </div>

        {/* Dropdown Selector */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between gap-3 px-4 h-[40px] rounded-xl bg-white/[0.04] border border-white/10 text-white text-[13px] font-medium hover:bg-white/[0.08] transition-colors duration-300 w-full sm:w-[280px]"
          >
            <div className="flex items-center gap-2.5">
              {activeModelObj.icon}
              <span>{activeModelObj.id === "chatgpt" ? activeModelObj.label : `with ${activeModelObj.name}`}</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-full sm:w-[280px] rounded-xl bg-[#0f0f18] border border-white/10 shadow-2xl overflow-hidden py-1.5 z-50">
              {models.map((model) => {
                const isSelected = model.id === selectedModel;
                return (
                  <button
                    key={model.id}
                    onClick={() => {
                      setSelectedModel(model.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-left text-[13px] transition-colors duration-300 ${
                      isSelected 
                        ? "bg-white/[0.06] text-white font-medium" 
                        : "text-gray-400 hover:bg-white/[0.02] hover:text-white"
                    }`}
                  >
                    <span className="flex-shrink-0">{model.icon}</span>
                    <span>with {model.name}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Summary Content display */}
      <div className="pt-6 relative z-10 min-h-[100px] flex items-center">
        <div className="w-full transition-all duration-300 ease-in-out">
          {isSemanticTriple ? getSemanticTripleSummary(selectedModel) : getFallbackSummary(selectedModel)}
        </div>
      </div>
    </div>
  );
}
