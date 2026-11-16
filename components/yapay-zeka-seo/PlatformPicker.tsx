"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Globe, Search, Target } from "lucide-react";

interface Platform {
  id: string;
  name: string;
  logo: string;
  summary: string;
  sources: string[];
  priorities: string[];
  focus: string[];
}

const platforms: Platform[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    logo: "/chatgpt-logo.png",
    summary: "Web araması açık olduğunda cevabını güncel sayfalarla destekliyor.",
    sources: [
      "Web aramasında Bing sonuçlarından da yararlanıyor",
      "OAI-SearchBot adlı kendi tarayıcısıyla sayfaları ziyaret ediyor",
      "Modelin eğitimden gelen genel bilgisi de cevaba karışıyor",
    ],
    priorities: [
      "Soruya doğrudan ve net cevap veren sayfalar",
      "Markanın başka sitelerde nasıl anıldığı",
      "Güncel ve kolay okunan içerik",
    ],
    focus: [
      "OAI-SearchBot erişimini robots.txt'de kontrol etmek",
      "Bing Webmaster Tools'ta sitenin durumunu izlemek",
      "Sık sorulan soruları açık cevaplı bölümlere dönüştürmek",
    ],
  },
  {
    id: "ai-overview",
    name: "Google AI Overview",
    logo: "/google-ai-mode-logo.webp",
    summary: "Google arama sonuçlarının en üstünde çıkan yapay zeka özeti.",
    sources: [
      "Kaynaklarını çoğunlukla ilgili aramada üst sıralardaki sayfalardan seçiyor",
      "Google'ın kendi dizinindeki sayfaları kullanıyor",
      "Bir soruyu alt sorulara bölüp farklı sayfalardan cevap toplayabiliyor",
    ],
    priorities: [
      "Klasik SEO'da güçlü, iyi sıralanan sayfalar",
      "Başlığın hemen altında verilen kısa, net cevaplar",
      "Güvenilir ve konusunda derin içerik",
    ],
    focus: [
      "Hedef aramalarda ilk sayfaya çıkmak",
      "Sayfaları soru-cevap düzenine göre kurgulamak",
      "Yapılandırılmış veriyi (schema) eksiksiz tutmak",
    ],
  },
  {
    id: "perplexity",
    name: "Perplexity",
    logo: "/perplexity-logo.avif",
    summary: "Her cevapta kaynaklarını numaralı olarak gösteren bir arama aracı.",
    sources: [
      "Cevabın altında numaralı kaynak listesi gösteriyor",
      "PerplexityBot adlı tarayıcısıyla sayfaları geziyor",
      "Soru anında web'de arama yapıp güncel sayfaları tarıyor",
    ],
    priorities: [
      "Belirli bir iddiayı tek başına destekleyebilen paragraflar",
      "Kaynağı belli veriler ve karşılaştırmalar",
      "Taranabilir, engelsiz sayfalar",
    ],
    focus: [
      "PerplexityBot'un siteye erişebildiğinden emin olmak",
      "Önemli bilgileri bağımsız okunabilen bölümlere ayırmak",
      "Verileri tablo ve listelerle net sunmak",
    ],
  },
  {
    id: "gemini",
    name: "Gemini",
    logo: "/gemini-logo.jpg",
    summary: "Google'ın kendi yapay zeka modeli ve sohbet asistanı.",
    sources: [
      "Google'ın modeli olduğu için Google aramasından yararlanabiliyor",
      "Google aramasında görünür olan sayfalar burada da öne çıkma eğiliminde",
      "Cevabını bazen kaynak bağlantılarıyla destekliyor",
    ],
    priorities: [
      "Google'da güçlü olan siteler ve sayfalar",
      "Markanın tutarlı ve doğru bilgilerle tanınması",
      "Açık, sade ve güncel içerik",
    ],
    focus: [
      "Google tarafındaki SEO temelini sağlam tutmak",
      "Markanın Google İşletme Profili'ni açmasına ve bilgileri tutarlı tutmasına yol göstermek",
      "Markayı bir varlık (entity) olarak netleştirmek",
    ],
  },
  {
    id: "claude",
    name: "Claude",
    logo: "/claude-logo.png",
    summary: "Anthropic'in asistanı; web araması açıkken güncel kaynaklara bakıyor.",
    sources: [
      "Web araması açık olduğunda güncel kaynaklardan yararlanıyor",
      "ClaudeBot adlı bir tarayıcısı var",
      "Arama kapalıyken modelin genel bilgisiyle cevap veriyor",
    ],
    priorities: [
      "Konuyu dolgusuz ve net anlatan içerik",
      "Mantıklı başlık düzeni olan sayfalar",
      "Güvenilir kaynaklarda tutarlı anılan markalar",
    ],
    focus: [
      "Anthropic tarayıcılarına erişim kararını bilinçli vermek",
      "İçerikteki gereksiz pazarlama dilini sadeleştirmek",
      "Markanın güvenilir sitelerde anılmasını desteklemek",
    ],
  },
];

// Platform seçici: kullanıcı seçmezse platformlar sırayla döner
export default function PlatformPicker() {
  const [index, setIndex] = useState(0);
  const [userPicked, setUserPicked] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (userPicked || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % platforms.length), 4500);
    return () => clearTimeout(t);
  }, [index, userPicked, inView]);

  const p = platforms[index];

  const columns = [
    { icon: Globe, title: "Kaynaklarını nereden buluyor?", items: p.sources, style: "border border-line bg-white" },
    { icon: Search, title: "Neye önem veriyor?", items: p.priorities, style: "border border-line bg-white" },
    { icon: Target, title: "Benim odaklandığım işler", items: p.focus, style: "bg-accent-light/60" },
  ];

  return (
    <div ref={rootRef}>
      <p className="mb-3 text-xs font-semibold text-ink-muted">Bir platform seçin</p>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Yapay zeka platformu seçin">
        {platforms.map((pl, i) => (
          <button
            key={pl.id}
            role="tab"
            aria-selected={i === index}
            onClick={() => {
              setUserPicked(true);
              setIndex(i);
            }}
            className={`inline-flex items-center gap-2 rounded-full border py-1 pl-1 pr-3.5 text-sm font-medium transition-colors ${
              i === index ? "border-brand bg-brand text-white" : "border-line bg-canvas text-ink-soft hover:border-brand/40 hover:text-brand"
            }`}
          >
            <Image src={pl.logo} alt="" width={24} height={24} className="h-6 w-6 rounded-full bg-white object-cover" />
            {pl.name}
          </button>
        ))}
      </div>

      <div key={p.id} className="mt-6 animate-fade-in rounded-2xl border border-line bg-canvas p-5" aria-live="polite">
        <div className="flex items-center gap-3">
          <Image src={p.logo} alt={`${p.name} logosu`} width={40} height={40} className="h-10 w-10 rounded-full bg-white object-cover shadow-card" />
          <div>
            <p className="font-bold text-ink">{p.name}</p>
            <p className="text-sm text-ink-soft">{p.summary}</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {columns.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title}>
                <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  <Icon className="h-3.5 w-3.5" /> {c.title}
                </p>
                <ul className="space-y-1.5">
                  {c.items.map((it) => (
                    <li key={it} className={`rounded-lg px-3 py-1.5 text-sm leading-snug text-ink ${c.style}`}>{it}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-xs text-ink-muted">
          Platformlar kaynak seçme yöntemlerini ayrıntılı açıklamıyor ve sık sık değiştiriyor; buradakiler genel
          gözlemler ve platformların kendi duyurularına dayanıyor.
        </p>
      </div>
    </div>
  );
}
