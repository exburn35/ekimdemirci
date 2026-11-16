"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Mic, Search, TrendingUp } from "lucide-react";

interface Result {
  id: string;
  domain: string;
  title: string;
  snippet: string;
  brand?: boolean;
}

// Temsili senaryolar: "siteniz.com" alt sıralardan ilk sıraya yükseliyor
const scenarios: { query: string; results: Result[] }[] = [
  {
    query: "istanbul implant tedavisi fiyatları",
    results: [
      { id: "a", domain: "saglikrehberi.com", title: "İmplant Tedavisi Nedir? Süreç ve Fiyatlar", snippet: "İmplant tedavisinin aşamaları, iyileşme süresi ve 2026 güncel ortalama fiyatları..." },
      { id: "b", domain: "dentforum.net", title: "İstanbul'daki Diş Klinikleri Listesi", snippet: "Semtlere göre diş kliniklerini karşılaştırın, yorumları inceleyin..." },
      { id: "c", domain: "klinikara.com", title: "En Uygun İmplant Fiyatları 2026", snippet: "Farklı klinik ve implant markalarına göre fiyat karşılaştırması..." },
      { id: "d", domain: "agizsagligi.org", title: "İmplant Sonrası Dikkat Edilmesi Gerekenler", snippet: "Tedavi sonrası beslenme, bakım ve kontrol önerileri..." },
      { id: "brand", domain: "siteniz.com", title: "İmplant Tedavisi | Şeffaf Fiyat ve Uzman Hekim", snippet: "Tedavi süreci, garanti koşulları ve fiyat aralığı tek sayfada. Ücretsiz muayene randevusu...", brand: true },
    ],
  },
  {
    query: "kadın koşu ayakkabısı",
    results: [
      { id: "a", domain: "buyukmagaza.com", title: "Kadın Koşu Ayakkabısı Modelleri", snippet: "Yüzlerce kadın koşu ayakkabısı modeli, hızlı kargo ve kolay iade..." },
      { id: "b", domain: "kosudunyasi.com", title: "Koşu Ayakkabısı Nasıl Seçilir?", snippet: "Ayak tipinize göre doğru koşu ayakkabısını seçmenin püf noktaları..." },
      { id: "c", domain: "sporpazari.net", title: "İndirimli Kadın Spor Ayakkabıları", snippet: "Sezon sonu fırsatlarıyla kadın koşu ve yürüyüş ayakkabıları..." },
      { id: "d", domain: "fitrehber.com", title: "2026'nın En İyi Koşu Ayakkabıları", snippet: "Editörlerimizin test ettiği en iyi koşu ayakkabısı modelleri..." },
      { id: "brand", domain: "siteniz.com", title: "Kadın Koşu Ayakkabısı | Hafif ve Esnek Modeller", snippet: "Ayak tipine göre filtreleyin, beden rehberiyle doğru numarayı seçin. Aynı gün kargo...", brand: true },
    ],
  },
];

const climb = [4, 3, 2, 1, 0]; // marka satırının sırayla ulaştığı konumlar (0 = ilk sıra)

export default function SerpClimbDemo() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [step, setStep] = useState(-1); // -1: yazılıyor, 0..climb.length-1: yükseliş
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const scenario = scenarios[scenarioIndex];

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setTyped(scenario.query);
      setStep(climb.length - 1);
    }
  }, [reduceMotion, scenario.query]);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    let t: ReturnType<typeof setTimeout>;
    if (step === -1) {
      if (typed.length < scenario.query.length) {
        t = setTimeout(() => setTyped(scenario.query.slice(0, typed.length + 1)), 45);
      } else {
        t = setTimeout(() => setStep(0), 900);
      }
    } else if (step < climb.length - 1) {
      t = setTimeout(() => setStep((s) => s + 1), 1100);
    } else {
      t = setTimeout(() => {
        setScenarioIndex((i) => (i + 1) % scenarios.length);
        setTyped("");
        setStep(-1);
      }, 4200);
    }
    return () => clearTimeout(t);
  }, [step, typed, inView, reduceMotion, scenario.query]);

  const brandPos = step < 0 ? climb[0] : climb[step];
  const others = scenario.results.filter((r) => !r.brand);
  // Marka dışındaki sonuçların sırasını koruyup markayı hedef konuma yerleştir
  const ordered = [...others];
  ordered.splice(brandPos, 0, scenario.results.find((r) => r.brand)!);
  const atTop = brandPos === 0 && step >= 0;

  const ROW = 92;

  return (
    <section id="google-siralama" className="relative overflow-hidden bg-canvas py-12 md:py-16">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />

      <div ref={rootRef} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Google sıralamaları</p>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[44px] lg:leading-[1.18]">
            Müşteriniz arıyor. İlk gördüğü siz olun.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Google&apos;da ilk sayfanın alt sıralarında olmakla en üstte olmak arasında, aldığınız ziyaretçi sayısında
            büyük bir fark var. SEO danışmanlığında hedefim sitenizi, müşterinizin aradığı kelimelerde adım adım yukarı
            taşımak.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-lift">
              <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs text-ink-muted">google.com/search</span>
                <span className="ml-auto hidden text-[11px] font-medium text-ink-faint sm:inline">Temsili canlandırma</span>
              </div>

              <div className="p-5 sm:p-7" aria-live="polite">
                <div className="flex items-center gap-3 rounded-full border border-line bg-white px-4 py-3 shadow-card">
                  <Search className="h-4 w-4 shrink-0 text-ink-faint" />
                  <span className="flex-1 truncate text-[15px] text-ink">
                    {typed}
                    {step === -1 ? <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-ink" /> : null}
                  </span>
                  <Mic className="h-4 w-4 shrink-0 text-brand" />
                </div>

                <div className="relative mt-5" style={{ height: ROW * ordered.length }}>
                  {ordered.map((r, i) => (
                    <div
                      key={`${scenarioIndex}-${r.id}`}
                      className={`absolute inset-x-0 rounded-2xl px-3 py-2.5 transition-all duration-700 ease-out ${
                        r.brand ? (atTop ? "border-2 border-accent bg-accent-light/60" : "border border-brand/30 bg-brand-light/50") : "border border-transparent"
                      } ${step === -1 && !reduceMotion ? "opacity-40" : "opacity-100"}`}
                      style={{ transform: `translateY(${i * ROW}px)` }}
                    >
                      <div className="flex items-center gap-2 text-xs text-ink-muted">
                        <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${r.brand ? "bg-brand text-white" : "bg-canvas-alt text-ink-muted"}`}>
                          {i + 1}
                        </span>
                        {r.domain}
                        {r.brand && step >= 0 ? (
                          <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-accent-dark shadow-card">
                            <TrendingUp className="h-3 w-3" /> {atTop ? "1. sıra" : "Yükseliyor"}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 truncate text-[16px] font-medium text-[#1a0dab]">{r.title}</p>
                      <p className="truncate text-sm text-ink-soft">{r.snippet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold text-ink">Arama sonuçlarında yükselmek bir süreç</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Ben de bir ürün ya da hizmet ararken çoğu zaman ilk birkaç sonuçtan birine tıklıyorum; aşağılara nadiren
              iniyorum. Müşterileriniz de büyük ihtimalle öyle. Bu yüzden asıl mesele sitenin yalnızca Google&apos;da
              olması değil, doğru kelimelerde üst sıralarda olması.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Müşterinizin gerçekten aradığı kelimeleri bulmak",
                "Sitenin Google tarafından sorunsuz taranmasını sağlamak",
                "Her kelimeye en iyi cevabı veren sayfayı hazırlamak",
                "Markanızın otoritesini başka sitelerdeki bağlantılarla güçlendirmek",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent-dark">
                    <Check className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-brand/20 bg-brand-light p-5">
              <p className="font-semibold text-ink">Siteniz bugün hangi kelimelerde, kaçıncı sırada?</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                Sitenizi ücretsiz inceleyip en hızlı yükselebileceğiniz kelimeleri ve önündeki engelleri raporlayayım.
              </p>
              <Link
                href="/audit-talebi"
                className="group mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Ücretsiz SEO analizi iste
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
