"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Mic, Search, Star, TrendingUp } from "lucide-react";

export interface LocalListing {
  name: string;
  category: string;
  rating: number;
  reviews: number;
  brand?: boolean;
}

// Google Haritalar yerel sonuç canlandırması: "siteniz" işletmesi ilk üçe ve sonra ilk sıraya yükseliyor
const climb = [4, 3, 2, 1, 0];

export default function LocalPackDemo({ query, listings }: { query: string; listings: LocalListing[] }) {
  const [typed, setTyped] = useState("");
  const [step, setStep] = useState(-1);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduceMotion(rm);
    if (rm) {
      setTyped(query);
      setStep(climb.length - 1);
    }
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, [query]);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    let t: ReturnType<typeof setTimeout>;
    if (step === -1) {
      t = typed.length < query.length ? setTimeout(() => setTyped(query.slice(0, typed.length + 1)), 55) : setTimeout(() => setStep(0), 800);
    } else if (step < climb.length - 1) {
      t = setTimeout(() => setStep((s) => s + 1), 1100);
    } else {
      t = setTimeout(() => {
        setTyped("");
        setStep(-1);
      }, 4500);
    }
    return () => clearTimeout(t);
  }, [step, typed, inView, reduceMotion, query]);

  const brand = listings.find((l) => l.brand)!;
  const others = listings.filter((l) => !l.brand);
  const pos = step < 0 ? climb[0] : climb[step];
  const ordered = [...others];
  ordered.splice(pos, 0, brand);
  const progress = step < 0 ? 0 : step / (climb.length - 1);
  const brandRating = (brand.rating + (4.9 - brand.rating) * progress).toFixed(1);
  const brandReviews = Math.round(brand.reviews + (186 - brand.reviews) * progress);
  const ROW = 68;
  const atTop = pos === 0 && step >= 0;

  return (
    <div ref={rootRef} className="space-y-4" aria-live="polite">
      <div className="flex items-center gap-3 rounded-full border border-line bg-white px-4 py-3 shadow-card">
        <Search className="h-4 w-4 shrink-0 text-ink-faint" />
        <span className="flex-1 truncate text-[15px] text-ink">
          {typed}
          {step === -1 ? <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-ink" /> : null}
        </span>
        <Mic className="h-4 w-4 shrink-0 text-brand" />
      </div>

      {/* Harita */}
      <div className="relative h-32 overflow-hidden rounded-2xl border border-line bg-[#e8efe6]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff80_2px,transparent_2px),linear-gradient(#ffffff80_2px,transparent_2px)] bg-[size:48px_48px]" />
        <div className="absolute left-0 right-0 top-1/2 h-3 -translate-y-1/2 bg-white/80" />
        <div className="absolute bottom-0 left-1/3 top-0 w-3 bg-white/80" />
        {[
          { l: "18%", t: "30%" },
          { l: "52%", t: "62%" },
          { l: "72%", t: "24%" },
          { l: "36%", t: "70%" },
        ].map((p, i) => (
          <MapPin key={i} className="absolute h-5 w-5 -translate-x-1/2 -translate-y-full text-red-500" style={{ left: p.l, top: p.t }} fill="currentColor" />
        ))}
        <div
          className={`absolute flex -translate-x-1/2 -translate-y-full flex-col items-center transition-all duration-700 ${step >= 0 ? "opacity-100" : "opacity-0"}`}
          style={{ left: "60%", top: "48%" }}
        >
          <span className="mb-1 whitespace-nowrap rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold text-white shadow">{brand.name}</span>
          <MapPin className="h-7 w-7 text-brand" fill="currentColor" />
        </div>
      </div>

      {/* Yerel sonuç listesi */}
      <div className="relative" style={{ height: ROW * 3 }}>
        {ordered.map((l, i) => {
          const isBrand = !!l.brand;
          const visible = i < 3;
          return (
            <div
              key={l.name}
              className={`absolute inset-x-0 flex items-center gap-3 rounded-2xl px-3 py-2 transition-all duration-700 ease-out ${
                isBrand ? (atTop ? "border-2 border-accent bg-accent-light/60" : "border border-brand/30 bg-brand-light/50") : "border border-transparent"
              } ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
              style={{ transform: `translateY(${Math.min(i, 3) * ROW}px)` }}
            >
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${isBrand ? "bg-brand text-white" : "bg-canvas-alt text-ink-muted"}`}>
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[15px] font-medium text-ink">{l.name}</p>
                <p className="flex items-center gap-1 text-xs text-ink-muted">
                  <Star className="h-3 w-3 text-amber-500" fill="currentColor" />
                  {isBrand ? brandRating : l.rating.toFixed(1)} ({isBrand ? brandReviews : l.reviews}) · {l.category}
                </p>
              </div>
              {isBrand && step >= 0 ? (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-accent-dark shadow-card">
                  <TrendingUp className="h-3 w-3" /> {atTop ? "1. sıra" : pos < 3 ? "İlk üçte" : "Yükseliyor"}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
