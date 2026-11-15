"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, Target } from "lucide-react";
import { sectors } from "./sectors";

// Sektör seçici: kullanıcı seçmezse sektörler sırayla döner
export default function SectorPicker() {
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
    const t = setTimeout(() => setIndex((i) => (i + 1) % sectors.length), 3800);
    return () => clearTimeout(t);
  }, [index, userPicked, inView]);

  const sector = sectors[index];
  const Icon = sector.icon;

  return (
    <div ref={rootRef}>
      <p className="mb-3 text-xs font-semibold text-ink-muted">Sektörünüzü seçin</p>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Sektör seçin">
        {sectors.map((s, i) => (
          <button
            key={s.slug}
            role="tab"
            aria-selected={i === index}
            onClick={() => {
              setUserPicked(true);
              setIndex(i);
            }}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              i === index ? "border-brand bg-brand text-white" : "border-line bg-canvas text-ink-soft hover:border-brand/40 hover:text-brand"
            }`}
          >
            {s.short}
          </button>
        ))}
      </div>

      <div key={sector.slug} className="mt-6 animate-fade-in rounded-2xl border border-line bg-canvas p-5" aria-live="polite">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand shadow-card">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="font-bold text-ink">{sector.name}</p>
            <p className="text-sm text-ink-soft">{sector.summary}</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-muted">
              <Search className="h-3.5 w-3.5" /> Müşterilerinizin aradıkları
            </p>
            <ul className="space-y-1.5">
              {sector.searches.map((q) => (
                <li key={q} className="rounded-full border border-line bg-white px-3 py-1.5 text-sm text-ink">{q}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-muted">
              <Target className="h-3.5 w-3.5" /> Odaklandığım alanlar
            </p>
            <ul className="space-y-1.5">
              {sector.focus.map((f) => (
                <li key={f} className="rounded-lg bg-accent-light/60 px-3 py-1.5 text-sm text-ink">{f}</li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href={`/sektorel-seo-hizmetleri/${sector.slug}`}
          className="group mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark"
        >
          {sector.name} sayfasını inceleyin <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
