"use client";

import { useEffect, useRef, useState } from "react";
import { Newspaper, BookOpen, ListChecks, Mic2, Trash2, Link2 } from "lucide-react";

// Temsili otorite çalışması: zararlı bağlantılar temizlenir, kaliteli bağlantılar eklenir
const events = [
  { kind: "remove", domain: "ucuz-link-paketi.xyz", note: "Zararlı bağlantı reddedildi" },
  { kind: "remove", domain: "spam-dizin-123.info", note: "Zararlı bağlantı reddedildi" },
  { kind: "add", domain: "sektorhaber.com", note: "Haber · editoryal bağlantı", icon: Newspaper },
  { kind: "add", domain: "uzmanrehber.net", note: "Rehber içerik · kaynak gösterimi", icon: BookOpen },
  { kind: "add", domain: "enbuyukliste.com", note: "Karşılaştırma listesi · öneri", icon: ListChecks },
  { kind: "add", domain: "girisimpodcast.com", note: "Röportaj · marka anılması", icon: Mic2 },
  { kind: "add", domain: "yerelrehber.com.tr", note: "Yerel dizin · işletme kaydı", icon: BookOpen },
] as const;

export default function AuthorityDemo() {
  const [step, setStep] = useState(0);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduceMotion(rm);
    if (rm) setStep(events.length);
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    const t = step < events.length
      ? setTimeout(() => setStep((s) => s + 1), step === 0 ? 1200 : 1000)
      : setTimeout(() => setStep(0), 5000);
    return () => clearTimeout(t);
  }, [step, inView, reduceMotion]);

  const done = events.slice(0, step);
  const added = done.filter((e) => e.kind === "add").length;
  const removed = done.filter((e) => e.kind === "remove").length;
  const authority = 18 + added * 5 + removed * 1;
  const referring = 24 - removed * 6 + added * 9;
  const toxic = Math.max(0, 31 - removed * 16);

  return (
    <div ref={rootRef} className="space-y-5" aria-live="polite">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Otorite skoru", value: authority, tone: authority >= 40 ? "text-accent-dark" : "text-ink" },
          { label: "Bağlantı veren site", value: referring, tone: "text-ink" },
          { label: "Zararlı bağlantı oranı", value: `%${toxic}`, tone: toxic === 0 ? "text-accent-dark" : "text-red-600" },
        ].map((m) => (
          <div key={m.label} className="rounded-2xl border border-line bg-canvas p-3 text-center">
            <p className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${m.tone}`}>{m.value}</p>
            <p className="mt-0.5 text-[11px] leading-tight text-ink-muted">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Otorite çubuğu */}
      <div>
        <div className="mb-1.5 flex justify-between text-xs text-ink-muted">
          <span>siteniz.com otoritesi</span>
          <span>{authority}/100</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-canvas-alt">
          <div className="h-full rounded-full bg-gradient-to-r from-brand to-accent transition-all duration-700" style={{ width: `${authority}%` }} />
        </div>
      </div>

      {/* Bağlantı akışı */}
      <ul className="space-y-2">
        {events.map((e, i) => {
          const visible = i < step;
          const Icon = e.kind === "remove" ? Trash2 : e.icon ?? Link2;
          return (
            <li
              key={e.domain}
              className={`flex items-center gap-3 rounded-xl border px-3.5 py-2.5 text-sm transition-all duration-500 ${
                visible
                  ? e.kind === "remove"
                    ? "border-red-200 bg-red-50 opacity-100"
                    : "border-accent/30 bg-accent-light/50 opacity-100"
                  : "border-line bg-canvas opacity-30"
              }`}
            >
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white shadow-card ${e.kind === "remove" ? "text-red-500" : "text-accent-dark"}`}>
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className={`flex-1 truncate font-medium ${e.kind === "remove" && visible ? "text-ink-muted line-through" : "text-ink"}`}>{e.domain}</span>
              <span className="hidden truncate text-xs text-ink-muted sm:inline">{visible ? e.note : "Bekliyor"}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
