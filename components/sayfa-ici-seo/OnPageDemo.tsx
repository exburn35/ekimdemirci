"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

// Temsili sayfa içi optimizasyon: zayıf arama sonucu adım adım güçleniyor
const before = {
  url: "siteniz.com › hizmetler?id=12",
  title: "Hizmetlerimiz - Klinik",
  desc: "Sayfa açıklaması bulunamadı.",
};
const after = {
  url: "siteniz.com › implant-tedavisi",
  title: "İmplant Tedavisi İstanbul | Süreç, Fiyat ve Garanti",
  desc: "İmplant tedavisi kaç seansta biter, fiyatı neye göre belirlenir? Tedavi süreci, iyileşme süresi ve garanti koşulları tek sayfada.",
};

const checks = [
  { label: "Arama niyetine uygun içerik", fixes: "intent" },
  { label: "Anahtar kelimeyi içeren başlık", fixes: "title" },
  { label: "Tıklamaya teşvik eden açıklama", fixes: "desc" },
  { label: "Okunabilir, temiz adres", fixes: "url" },
  { label: "Tek ve net H1 başlığı", fixes: "h1" },
  { label: "İlgili sayfalara iç bağlantılar", fixes: "links" },
];

export default function OnPageDemo() {
  const [fixed, setFixed] = useState(0);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduceMotion(rm);
    if (rm) setFixed(checks.length);
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    const t = fixed < checks.length
      ? setTimeout(() => setFixed((f) => f + 1), fixed === 0 ? 1600 : 1100)
      : setTimeout(() => setFixed(0), 5000);
    return () => clearTimeout(t);
  }, [fixed, inView, reduceMotion]);

  const isFixed = (key: string) => checks.findIndex((c) => c.fixes === key) < fixed;
  const score = 38 + Math.round((fixed / checks.length) * 56);
  const scoreColor = score >= 90 ? "text-accent-dark" : score >= 65 ? "text-amber-600" : "text-red-600";

  return (
    <div ref={rootRef} className="space-y-5" aria-live="polite">
      {/* Arama sonucu önizlemesi */}
      <div className="rounded-2xl border border-line bg-canvas p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-semibold text-ink-muted">Google&apos;daki görünüm</p>
          <p className="text-xs text-ink-muted">
            Sayfa skoru <span className={`text-base font-bold ${scoreColor}`}>{score}</span>
          </p>
        </div>
        <p className="text-xs text-ink-muted transition-all duration-500">{isFixed("url") ? after.url : before.url}</p>
        <p className={`mt-0.5 text-[17px] font-medium leading-snug transition-colors duration-500 ${isFixed("title") ? "text-[#1a0dab]" : "text-[#1a0dab]/60"}`}>
          {isFixed("title") ? after.title : before.title}
        </p>
        <p className={`mt-1 text-sm leading-relaxed transition-colors duration-500 ${isFixed("desc") ? "text-ink-soft" : "italic text-ink-faint"}`}>
          {isFixed("desc") ? after.desc : before.desc}
        </p>
      </div>

      {/* Sayfa iskeleti */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_200px]">
        <div className="rounded-2xl border border-line p-4">
          <p className="mb-2 text-xs font-semibold text-ink-muted">Sayfa yapısı</p>
          <div className="space-y-2">
            <div className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors duration-500 ${isFixed("h1") ? "bg-accent-light/60 text-ink" : "bg-red-50 text-ink-soft"}`}>
              <span className="rounded bg-white px-1.5 text-[10px] font-bold text-ink-muted">H1</span>
              {isFixed("h1") ? "İmplant Tedavisi Nedir, Nasıl Yapılır?" : "Hoş Geldiniz"}
            </div>
            <div className="flex items-center gap-2 px-2 text-sm text-ink-soft">
              <span className="rounded bg-canvas px-1.5 text-[10px] font-bold text-ink-muted">H2</span>
              {isFixed("intent") ? "İmplant tedavisi kaç seansta biter?" : "Hakkımızda"}
            </div>
            <div className="flex items-center gap-2 px-2 text-sm text-ink-soft">
              <span className="rounded bg-canvas px-1.5 text-[10px] font-bold text-ink-muted">H2</span>
              {isFixed("intent") ? "Fiyatı neye göre belirlenir?" : "Neden biz?"}
            </div>
            <div className={`flex flex-wrap gap-1.5 px-2 pt-1 transition-opacity duration-500 ${isFixed("links") ? "opacity-100" : "opacity-0"}`}>
              {["Diş beyazlatma", "Zirkonyum kaplama", "Fiyatlar"].map((l) => (
                <span key={l} className="rounded-full border border-brand/30 bg-brand-light px-2 py-0.5 text-[11px] font-medium text-brand">→ {l}</span>
              ))}
            </div>
          </div>
        </div>

        <ul className="space-y-1.5">
          {checks.map((c, i) => {
            const ok = i < fixed;
            return (
              <li key={c.label} className={`flex items-start gap-2 rounded-lg px-2 py-1.5 text-xs transition-colors duration-500 ${ok ? "text-ink" : "text-ink-muted"}`}>
                {ok ? <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-dark" /> : <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-400" />}
                {c.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
