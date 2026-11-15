"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUp, Check, Globe, Mic, Search, Sparkles } from "lucide-react";

type Platform = "chatgpt" | "aio";
type Phase = "typing" | "thinking" | "answering" | "done";

interface Scenario {
  query: string;
  answer: string[];
  brandLine: string;
}

// Temsili senaryolar: farklı sektörlerde "siteniz.com" önerilen kaynak olarak çıkıyor
const scenarios: Scenario[] = [
  {
    query: "İstanbul'da implant için güvenilir bir diş kliniği önerir misin?",
    answer: [
      "İmplant tedavisinde klinik seçerken hekimin deneyimi, kullanılan implant markası ve tedavi sonrası takip süreci belirleyicidir.",
      "Bu kriterlere göre öne çıkan seçeneklerden biri:",
    ],
    brandLine: "Uzman kadrosu, şeffaf fiyat bilgisi ve detaylı tedavi rehberleriyle öne çıkıyor.",
  },
  {
    query: "Küçük bir e-ticaret sitesi için en iyi muhasebe yazılımı hangisi?",
    answer: [
      "Küçük ölçekli e-ticaret işletmeleri için e-fatura entegrasyonu, pazaryeri bağlantısı ve stok takibi en önemli özelliklerdir.",
      "Kullanıcı yorumları ve özellik karşılaştırmalarında sık önerilen çözümlerden biri:",
    ],
    brandLine: "Pazaryeri entegrasyonları ve kolay kurulumuyla küçük işletmelere uygun bulunuyor.",
  },
  {
    query: "Kira sözleşmesi uyuşmazlığında hangi avukata danışmalıyım?",
    answer: [
      "Kira uyuşmazlıklarında gayrimenkul ve borçlar hukuku alanında deneyimli bir avukatla çalışmak süreci hızlandırır.",
      "Bu alanda kapsamlı bilgilendirici içerikleriyle öne çıkan bir kaynak:",
    ],
    brandLine: "Kira hukuku rehberleri ve sık sorulan sorulara verdiği net cevaplarla güven veriyor.",
  },
];

const platformCopy: Record<Platform, { title: string; lead: string; points: string[] }> = {
  chatgpt: {
    title: "ChatGPT'de önerilen marka olmak",
    lead: "Ben de dahil olmak üzere hemen hemen herkes artık bir öneri istediğinde ChatGPT'ye soruyor. Cevapta yer almıyorsanız potansiyel müşterinizi kaçırıyor olabilirsiniz.",
    points: [
      "ChatGPT aramasının yararlandığı web dizinlerinde (özellikle Bing) sitenizin sağlam biçimde yer alması",
      "Markanızın web genelinde tutarlı tanımlanması: kurumsal profiller, dizinler, Wikidata ve sosyal hesaplar",
      "Karşılaştırma, \"en iyi\" listeleri ve sektör yayınlarında doğal biçimde anılmanız",
      "OAI-SearchBot ve GPTBot erişiminin robots.txt düzeyinde bilinçli yönetilmesi",
    ],
  },
  aio: {
    title: "Google AI Overview'da kaynak gösterilmek",
    lead: "Google'da bir şey aradığımda artık çoğu zaman önce en üstteki yapay zeka özetini okuyorum; muhtemelen siz de öyle yapıyorsunuz. O özetin altında kaynak olarak gösterilen siteler, ilk sıradaki sonuçtan bile daha çok dikkat çekebiliyor.",
    points: [
      "Soruya ilk paragrafta net, alıntılanabilir bir cevap veren sayfa yapısı",
      "AI Overview kaynaklarının sıklıkla seçildiği üst sıralarda sağlam organik konum",
      "Yapılandırılmış veri, güncel tarih bilgisi ve yazar uzmanlığı sinyalleri",
      "Etkinin Search Console verileri ve düzenli sorgu testleriyle izlenmesi",
    ],
  },
};

const TYPE_MS = 38;
const WORD_MS = 55;

export default function AiAnswerDemo() {
  const [platform, setPlatform] = useState<Platform>("chatgpt");
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [typed, setTyped] = useState("");
  const [words, setWords] = useState(0);
  const [userPicked, setUserPicked] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const scenario = scenarios[scenarioIndex];
  const answerWords = scenario.answer.join(" ").split(" ");

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Hareket azaltma tercihi varsa doğrudan son hali göster
  useEffect(() => {
    if (!reduceMotion) return;
    setTyped(scenario.query);
    setWords(answerWords.length);
    setPhase("done");
  }, [reduceMotion, scenario, answerWords.length]);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    let t: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (typed.length < scenario.query.length) {
        t = setTimeout(() => setTyped(scenario.query.slice(0, typed.length + 1)), TYPE_MS);
      } else {
        t = setTimeout(() => setPhase("thinking"), 450);
      }
    } else if (phase === "thinking") {
      t = setTimeout(() => setPhase("answering"), 1100);
    } else if (phase === "answering") {
      if (words < answerWords.length) {
        t = setTimeout(() => setWords((w) => w + 1), WORD_MS);
      } else {
        t = setTimeout(() => setPhase("done"), 250);
      }
    } else if (phase === "done") {
      t = setTimeout(() => {
        // Kullanıcı sekme seçmediyse platformlar arasında sırayla geç
        if (!userPicked && platform === "chatgpt") {
          setPlatform("aio");
        } else {
          if (!userPicked) setPlatform("chatgpt");
          setScenarioIndex((i) => (i + 1) % scenarios.length);
        }
        restart();
      }, 4200);
    }
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, typed, words, inView, reduceMotion]);

  function restart() {
    setTyped("");
    setWords(0);
    setPhase("typing");
  }

  function pick(p: Platform) {
    setUserPicked(true);
    if (p === platform) return;
    setPlatform(p);
    if (!reduceMotion) restart();
  }

  const shownAnswer = answerWords.slice(0, words).join(" ");
  const showBrand = phase === "done";
  const copy = platformCopy[platform];

  return (
    <section id="chatgpt-ai-overview" className="relative overflow-hidden bg-canvas py-20 md:py-28">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />

      <div ref={rootRef} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">ChatGPT ve Google AI Overview</p>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[44px] lg:leading-[1.18]">
            Müşteriniz soruyor. Yapay zeka sizi öneriyor.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            GEO çalışmasının hedefi tam olarak bu ekran: biri sektörünüzle ilgili bir soru sorduğunda, cevabın içinde
            adınızın ve sitenizin geçmesi.
          </p>
        </div>

        {/* Platform sekmeleri */}
        <div role="tablist" aria-label="Platform seçin" className="mx-auto mb-8 flex w-fit gap-1 rounded-full border border-line bg-white p-1 shadow-card">
          {(
            [
              { id: "chatgpt", label: "ChatGPT", logo: "/chatgpt-logo.png" },
              { id: "aio", label: "Google AI Overview", logo: "/google-ai-mode-logo.webp" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={platform === tab.id}
              onClick={() => pick(tab.id)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5 ${
                platform === tab.id ? "bg-ink text-white" : "text-ink-soft hover:text-ink"
              }`}
            >
              <span className="relative h-5 w-5 overflow-hidden rounded-full bg-white">
                <Image src={tab.logo} alt="" fill sizes="20px" className="object-cover" />
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Canlandırma penceresi */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-lift">
              {/* Pencere çubuğu */}
              <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs text-ink-muted">
                  {platform === "chatgpt" ? "chatgpt.com" : "google.com/search"}
                </span>
                <span className="ml-auto hidden text-[11px] font-medium text-ink-faint sm:inline">Temsili canlandırma</span>
              </div>

              <div className="min-h-[440px] p-5 sm:p-7" aria-live="polite">
                {platform === "chatgpt" ? (
                  <ChatGptView
                    query={typed}
                    phase={phase}
                    answer={shownAnswer}
                    showBrand={showBrand}
                    brandLine={scenario.brandLine}
                  />
                ) : (
                  <AioView
                    query={typed}
                    phase={phase}
                    answer={shownAnswer}
                    showBrand={showBrand}
                    brandLine={scenario.brandLine}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Açıklama + CTA */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold text-ink">{copy.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{copy.lead}</p>
            <ul className="mt-6 space-y-3">
              {copy.points.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent-dark">
                    <Check className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-brand/20 bg-brand-light p-5">
              <p className="font-semibold text-ink">Markanız bugün bu cevaplarda geçiyor mu?</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                Sektörünüzde müşterilerinizin sorduğu sorularla ChatGPT ve Google&apos;ı test edip mevcut durumunuzu
                ücretsiz raporlayayım.
              </p>
              <Link
                href="/audit-talebi"
                className="group mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Yapay zeka görünürlüğümü test et
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ViewProps {
  query: string;
  phase: Phase;
  answer: string;
  showBrand: boolean;
  brandLine: string;
}

function Caret() {
  return <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-ink" />;
}

function ThinkingDots() {
  return (
    <span className="inline-flex gap-1" aria-label="Yanıt hazırlanıyor">
      {[0, 150, 300].map((d) => (
        <span key={d} className="h-2 w-2 animate-bounce rounded-full bg-ink-faint" style={{ animationDelay: `${d}ms` }} />
      ))}
    </span>
  );
}

function BrandCard({ visible, brandLine, compact = false }: { visible: boolean; brandLine: string; compact?: boolean }) {
  return (
    <div
      className={`relative mt-4 rounded-2xl border-2 border-accent bg-accent-light/60 p-4 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span className="absolute -top-3 left-4 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-bold text-white shadow">
        <Sparkles className="h-3 w-3" /> Önerilen
      </span>
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-accent-dark shadow-card">
          <Globe className="h-4 w-4" />
        </span>
        <div>
          <p className="font-bold text-ink">siteniz.com</p>
          {!compact ? <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{brandLine}</p> : null}
        </div>
      </div>
    </div>
  );
}

function ChatGptView({ query, phase, answer, showBrand, brandLine }: ViewProps) {
  const asked = phase !== "typing";
  return (
    <div className="flex h-full min-h-[390px] flex-col">
      <div className="flex-1 space-y-5">
        {asked ? (
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-3xl bg-canvas-alt px-4 py-3 text-[15px] text-ink">{query}</div>
          </div>
        ) : null}

        {phase === "thinking" ? (
          <div className="flex items-center gap-3">
            <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border border-line">
              <Image src="/chatgpt-logo.png" alt="" fill sizes="28px" className="object-cover" />
            </span>
            <ThinkingDots />
          </div>
        ) : null}

        {phase === "answering" || phase === "done" ? (
          <div className="flex gap-3">
            <span className="relative mt-0.5 h-7 w-7 shrink-0 overflow-hidden rounded-full border border-line">
              <Image src="/chatgpt-logo.png" alt="" fill sizes="28px" className="object-cover" />
            </span>
            <div className="flex-1 text-[15px] leading-relaxed text-ink">
              <p>{answer}</p>
              <BrandCard visible={showBrand} brandLine={brandLine} />
              <div className={`mt-3 flex flex-wrap gap-2 transition-opacity duration-500 ${showBrand ? "opacity-100" : "opacity-0"}`}>
                <span className="rounded-full border border-accent/40 bg-white px-2.5 py-1 text-[11px] font-semibold text-accent-dark">siteniz.com</span>
                <span className="rounded-full border border-line bg-white px-2.5 py-1 text-[11px] text-ink-muted">+2 kaynak</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Mesaj kutusu */}
      <div className="mt-6 flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 shadow-card">
        <span className="flex-1 truncate text-[15px] text-ink">
          {phase === "typing" ? (
            <>
              {query || <span className="text-ink-faint">Herhangi bir şey sor</span>}
              <Caret />
            </>
          ) : (
            <span className="text-ink-faint">Herhangi bir şey sor</span>
          )}
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white">
          <ArrowUp className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}

function AioView({ query, phase, answer, showBrand, brandLine }: ViewProps) {
  const searched = phase !== "typing";
  return (
    <div className="space-y-5">
      {/* Arama kutusu */}
      <div className="flex items-center gap-3 rounded-full border border-line bg-white px-4 py-3 shadow-card">
        <Search className="h-4 w-4 shrink-0 text-ink-faint" />
        <span className="flex-1 truncate text-[15px] text-ink">
          {query}
          {phase === "typing" ? <Caret /> : null}
        </span>
        <Mic className="h-4 w-4 shrink-0 text-brand" />
      </div>

      {searched ? (
        <div className="rounded-2xl bg-[#f0f4f9] p-5">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
            <Sparkles className="h-4 w-4 text-brand" /> Yapay zekaya genel bakış
          </p>

          {phase === "thinking" ? (
            <div className="space-y-2">
              <div className="h-3 w-full animate-pulse rounded bg-ink/10" />
              <div className="h-3 w-11/12 animate-pulse rounded bg-ink/10" />
              <div className="h-3 w-3/4 animate-pulse rounded bg-ink/10" />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_180px]">
              <div className="text-[15px] leading-relaxed text-ink">
                <p>{answer}</p>
                <BrandCard visible={showBrand} brandLine={brandLine} />
              </div>
              <div className={`space-y-2 transition-opacity duration-500 ${showBrand ? "opacity-100" : "opacity-0"}`}>
                <div className="rounded-xl border-2 border-accent bg-white p-3">
                  <p className="text-[11px] font-semibold text-accent-dark">siteniz.com</p>
                  <p className="mt-1 line-clamp-2 text-xs text-ink-soft">Kapsamlı rehber ve sık sorulan sorular</p>
                </div>
                <div className="rounded-xl border border-line bg-white p-3">
                  <div className="h-2 w-16 rounded bg-ink/15" />
                  <div className="mt-2 h-2 w-full rounded bg-ink/10" />
                </div>
                <div className="hidden rounded-xl border border-line bg-white p-3 sm:block">
                  <div className="h-2 w-20 rounded bg-ink/15" />
                  <div className="mt-2 h-2 w-full rounded bg-ink/10" />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-3 pt-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-1.5">
              <div className="h-2.5 w-32 rounded bg-ink/10" />
              <div className="h-3 w-3/4 rounded bg-ink/10" />
            </div>
          ))}
        </div>
      )}

      {/* Organik sonuç */}
      {phase === "done" ? (
        <div className="border-t border-line pt-4">
          <p className="text-xs text-ink-muted">https://siteniz.com</p>
          <p className="text-[17px] font-medium text-[#1a0dab]">Siteniz | Aradığınız sorunun net cevabı</p>
          <p className="text-sm text-ink-soft">Organik sonuçlarda da ilk sıralarda yer alan sayfanız...</p>
        </div>
      ) : null}
    </div>
  );
}
