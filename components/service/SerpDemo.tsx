"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, Search, TrendingUp } from "lucide-react";

export interface SerpResult {
  domain: string;
  title: string;
  snippet: string;
  brand?: boolean;
}

// Google sonuç sayfası canlandırması: marka sonucu alt sıralardan ilk sıraya yükseliyor
const climb = [4, 3, 2, 1, 0];

export default function SerpDemo({ query, results }: { query: string; results: SerpResult[] }) {
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
      t = typed.length < query.length ? setTimeout(() => setTyped(query.slice(0, typed.length + 1)), 50) : setTimeout(() => setStep(0), 900);
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

  const brand = results.find((r) => r.brand)!;
  const others = results.filter((r) => !r.brand);
  const pos = step < 0 ? climb[0] : climb[step];
  const ordered = [...others];
  ordered.splice(pos, 0, brand);
  const atTop = pos === 0 && step >= 0;
  const ROW = 92;

  return (
    <div ref={rootRef} aria-live="polite">
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
            key={r.domain}
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
  );
}
