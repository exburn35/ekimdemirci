"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Check, CheckCircle2, Loader2 } from "lucide-react";

// Temsili teknik denetim: sorunlar bulunur, sonra tek tek düzeltilir
const issues = [
  { label: "Google'ın göremediği 214 sayfa (noindex / engellenmiş)", fixed: "Tüm önemli sayfalar indekslenebilir" },
  { label: "38 kırık bağlantı ve 404 hatası", fixed: "Kırık bağlantılar düzeltildi" },
  { label: "Yönlendirme zincirleri (3+ adım)", fixed: "Yönlendirmeler tek adıma indirildi" },
  { label: "Aynı içerik 4 farklı adreste", fixed: "Canonical düzeni kuruldu" },
  { label: "Yapılandırılmış veri eksik", fixed: "Organization, Product ve SSS şemaları eklendi" },
];

const vitals = [
  { name: "LCP", desc: "Yüklenme", before: "4,1 sn", after: "1,9 sn" },
  { name: "INP", desc: "Tepki", before: "380 ms", after: "150 ms" },
  { name: "CLS", desc: "Kayma", before: "0,27", after: "0,04" },
];

type Phase = "typing" | "crawling" | "found" | "fixing" | "done";
const URL_TEXT = "siteniz.com";

export default function TechAuditDemo() {
  const [phase, setPhase] = useState<Phase>("typing");
  const [typed, setTyped] = useState("");
  const [pages, setPages] = useState(0);
  const [fixedCount, setFixedCount] = useState(0);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!reduceMotion) return;
    setTyped(URL_TEXT);
    setPages(1248);
    setFixedCount(issues.length);
    setPhase("done");
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      t = typed.length < URL_TEXT.length
        ? setTimeout(() => setTyped(URL_TEXT.slice(0, typed.length + 1)), 90)
        : setTimeout(() => setPhase("crawling"), 500);
    } else if (phase === "crawling") {
      t = pages < 1248 ? setTimeout(() => setPages((p) => Math.min(1248, p + 64)), 45) : setTimeout(() => setPhase("found"), 300);
    } else if (phase === "found") {
      t = setTimeout(() => setPhase("fixing"), 1800);
    } else if (phase === "fixing") {
      t = fixedCount < issues.length ? setTimeout(() => setFixedCount((c) => c + 1), 900) : setTimeout(() => setPhase("done"), 400);
    } else {
      t = setTimeout(() => {
        setTyped("");
        setPages(0);
        setFixedCount(0);
        setPhase("typing");
      }, 5000);
    }
    return () => clearTimeout(t);
  }, [phase, typed, pages, fixedCount, inView, reduceMotion]);

  const showIssues = phase === "found" || phase === "fixing" || phase === "done";
  const progress = Math.round((pages / 1248) * 100);
  const score = phase === "done" ? 96 : showIssues ? 52 + Math.round((fixedCount / issues.length) * 40) : null;
  const scoreColor = score === null ? "text-ink-faint" : score >= 90 ? "text-accent-dark" : score >= 70 ? "text-amber-600" : "text-red-600";

  return (
    <section id="teknik-tarama" className="relative overflow-hidden bg-canvas py-20 md:py-28">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />

      <div ref={rootRef} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Teknik denetim</p>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[44px] lg:leading-[1.18]">
            Sitenizi Google&apos;ın gözüyle tarıyorum.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Ziyaretçinin fark etmediği ama Google&apos;ın her gün takıldığı sorunlar sıralamanızı sessizce aşağı çekiyor.
            Teknik SEO çalışmasının ilk adımı, bu sorunların hepsini tek tek bulup önem sırasına göre düzeltmek.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-lift">
              <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs font-medium text-ink-muted">Teknik SEO denetimi</span>
                <span className="ml-auto hidden text-[11px] font-medium text-ink-faint sm:inline">Temsili canlandırma</span>
              </div>

              <div className="space-y-5 p-5 sm:p-7" aria-live="polite">
                {/* Adres ve tarama */}
                <div className="flex items-center gap-3">
                  <div className="flex flex-1 items-center rounded-xl border border-line bg-canvas px-4 py-2.5 text-[15px] text-ink">
                    https://{typed}
                    {phase === "typing" ? <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-ink" /> : null}
                  </div>
                  <div className="text-center">
                    <p className={`text-3xl font-bold tracking-tight ${scoreColor}`}>{score ?? "—"}</p>
                    <p className="text-[11px] text-ink-muted">Sağlık skoru</p>
                  </div>
                </div>

                <div>
                  <div className="mb-1.5 flex justify-between text-xs text-ink-muted">
                    <span className="inline-flex items-center gap-1.5">
                      {phase === "crawling" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : null}
                      {phase === "typing" ? "Hazırlanıyor" : phase === "crawling" ? "Sayfalar taranıyor" : "Tarama tamamlandı"}
                    </span>
                    <span>{pages.toLocaleString("tr-TR")} sayfa</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-canvas-alt">
                    <div className="h-full rounded-full bg-brand transition-all duration-200" style={{ width: `${progress}%` }} />
                  </div>
                </div>

                {/* Sorunlar */}
                <ul className={`space-y-2 transition-opacity duration-500 ${showIssues ? "opacity-100" : "opacity-30"}`}>
                  {issues.map((issue, i) => {
                    const fixed = i < fixedCount;
                    return (
                      <li
                        key={issue.label}
                        className={`flex items-center gap-3 rounded-xl border px-3.5 py-2.5 text-sm transition-colors duration-500 ${
                          fixed ? "border-accent/30 bg-accent-light/60 text-ink" : showIssues ? "border-red-200 bg-red-50 text-ink" : "border-line bg-canvas text-ink-faint"
                        }`}
                      >
                        {fixed ? (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-dark" />
                        ) : (
                          <AlertTriangle className={`h-4 w-4 shrink-0 ${showIssues ? "text-red-500" : "text-ink-faint"}`} />
                        )}
                        <span className="truncate">{fixed ? issue.fixed : issue.label}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Core Web Vitals */}
                <div className="grid grid-cols-3 gap-2">
                  {vitals.map((v) => {
                    const good = phase === "done";
                    return (
                      <div key={v.name} className={`rounded-xl border p-3 text-center transition-colors duration-500 ${good ? "border-accent/30 bg-accent-light/50" : "border-line bg-canvas"}`}>
                        <p className="text-xs font-semibold text-ink-muted">{v.name} · {v.desc}</p>
                        <p className={`mt-1 text-lg font-bold ${good ? "text-accent-dark" : showIssues ? "text-red-600" : "text-ink-faint"}`}>
                          {good ? v.after : showIssues ? v.before : "—"}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold text-ink">Görünmeyen sorunlar, görünür kayıplar</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Pek çok sitede, sahibinin haberi olmadığı teknik sorunlar bulunuyor: Google&apos;a kapatılmış
              sayfalar, kırık bağlantılar, aynı içeriğin farklı adreslerde tekrar etmesi, mobilde yavaş açılan sayfalar.
              Bunların her biri tek başına küçük görünse de toplamda sitenin sıralama gücünü ciddi şekilde düşürüyor.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Google'ın sitenizi sorunsuz taramasını sağlamak",
                "Önemli sayfaların dizine eklenmesini garantilemek",
                "Sayfa hızını ve mobil deneyimi iyileştirmek",
                "Değişiklikleri Search Console'da doğrulamak",
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
              <p className="font-semibold text-ink">Sitenizde hangi teknik sorunlar var?</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                Sitenizi ücretsiz tarayıp en kritik teknik sorunları ve nasıl çözüleceklerini size raporlayayım.
              </p>
              <Link
                href="/audit-talebi"
                className="group mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Ücretsiz teknik SEO kontrolü iste
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
