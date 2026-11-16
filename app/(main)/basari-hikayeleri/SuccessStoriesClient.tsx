"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Clock, EyeOff, LineChart, MousePointerClick, Search } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SEOAuditSection from "@/components/SEOAuditSection";
import RelatedPages from "@/components/RelatedPages";
import ContactForm from "@/components/ContactForm";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";

// "yüzde 38.81" → 38.81
function toNumber(raw: string) {
  const n = parseFloat(raw.replace(/[^\d.]/g, ""));
  return Number.isNaN(n) ? 0 : n;
}

// 38.81 → "+%38,8"
function pct(raw: string) {
  return `+%${toNumber(raw).toLocaleString("tr-TR", { maximumFractionDigits: 1 })}`;
}

function fmt(n: number) {
  return n.toLocaleString("tr-TR");
}

const filters = [
  { id: "all", label: "Tümü" },
  { id: "E-ticaret", label: "E-ticaret" },
  { id: "Eğitim Platformları", label: "Eğitim" },
  { id: "Kurumsal ve Hizmet Siteleri", label: "Kurumsal ve hizmet" },
  { id: "Yeni Açılan Siteler", label: "Yeni açılan siteler" },
];

// Öne çıkan vaka: gösterimde en büyük artış
const featured = [...caseStudies].sort((a, b) => toNumber(b.impressionIncrease) - toNumber(a.impressionIncrease))[0];

function BeforeAfter({ study, label }: { study: CaseStudy; label: "Tıklama" | "Gösterim" }) {
  const row = study.chartData.find((d) => d.label === label);
  if (!row) return null;
  const ratio = Math.max(8, Math.round((row.before / row.after) * 100));
  const tone = label === "Tıklama" ? "bg-accent" : "bg-brand";
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between text-xs">
        <span className="font-semibold text-ink-soft">{label}</span>
        <span className="text-ink-muted">
          {fmt(row.before)} → <span className="font-semibold text-ink">{fmt(row.after)}</span>
        </span>
      </div>
      <div className="relative h-2.5 overflow-hidden rounded-full bg-canvas-alt">
        <div className={`absolute inset-y-0 left-0 rounded-full ${tone}`} style={{ width: "100%" }} />
        <div className="absolute inset-y-0 left-0 rounded-full bg-ink/25" style={{ width: `${ratio}%` }} />
      </div>
    </div>
  );
}

export default function SuccessStoriesClient() {
  const [active, setActive] = useState("all");
  const list = active === "all" ? caseStudies : caseStudies.filter((s) => s.category === active);

  return (
    <>
      <div className="bg-canvas">
        <Breadcrumb items={[{ name: "Başarı Hikayeleri", href: "/basari-hikayeleri" }]} />

        {/* Hero */}
        <section className="relative overflow-hidden pb-12 pt-6 md:pb-16">
          <div className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[620px] rounded-full bg-brand/10 blur-[120px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Başarı hikâyeleri</p>
            <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
              Söz yerine Search Console verisi
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Burada yürüttüğüm projelerden bazılarını, başladığım noktadan vardığım yere kadar anlatıyorum. Her vakada
              hangi sorunu gördüğümü, sırayla hangi adımları attığımı ve tıklama ile gösterimin nasıl değiştiğini
              görebilirsiniz. Rakamların tamamı sitelerin kendi Google Search Console hesaplarından alındı.
            </p>

            {/* Vakalardan hızlı özet */}
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
              {caseStudies.map((s) => (
                <Link
                  key={s.slug}
                  href={`/basari-hikayeleri/${s.slug}`}
                  className="group rounded-2xl border border-line bg-white p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <p className="text-xs font-medium text-ink-muted">{s.company}</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-accent-dark">{pct(s.clickIncrease)}</p>
                  <p className="text-[11px] text-ink-faint">tıklama · {s.duration.toLocaleLowerCase("tr-TR")}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Öne çıkan vaka */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-line bg-canvas lg:grid-cols-12">
            <div className="p-6 md:p-10 lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Öne çıkan vaka</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{featured.company}</h2>
              <p className="mt-4 leading-relaxed text-ink-soft">{featured.initialStatus}. {featured.summary}.</p>

              <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { k: "Tıklama", v: pct(featured.clickIncrease), c: "text-accent-dark" },
                  { k: "Gösterim", v: pct(featured.impressionIncrease), c: "text-brand" },
                  { k: "Süre", v: featured.duration, c: "text-ink" },
                  { k: "Alan", v: featured.category, c: "text-ink" },
                ].map((m) => (
                  <div key={m.k} className="rounded-2xl bg-white p-4 shadow-card">
                    <dt className="text-xs text-ink-muted">{m.k}</dt>
                    <dd className={`mt-1 text-lg font-bold tracking-tight ${m.c}`}>{m.v}</dd>
                  </div>
                ))}
              </dl>

              <ol className="mt-8 space-y-3">
                {featured.timeline.map((t) => (
                  <li key={t.period} className="flex gap-4">
                    <span className="mt-0.5 shrink-0 rounded-full bg-brand-light px-2.5 py-1 text-xs font-semibold text-brand">
                      {t.period}
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-soft">
                      <span className="font-semibold text-ink">{t.title}.</span> {t.desc}.
                    </span>
                  </li>
                ))}
              </ol>

              <Link
                href={`/basari-hikayeleri/${featured.slug}`}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Vakanın tamamını okuyun
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative flex items-center bg-canvas-alt p-6 md:p-10 lg:col-span-6">
              <div className="w-full overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
                <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-xs font-medium text-ink-muted">Search Console · dönem karşılaştırması</span>
                </div>
                <Image
                  src={featured.imageUrl}
                  alt={`${featured.company} Search Console tıklama ve gösterim karşılaştırması`}
                  width={1200}
                  height={700}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tüm vakalar */}
      <section id="vakalar" className="scroll-mt-24 bg-canvas py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-6 md:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Tüm vakalar</p>
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[44px]">
                Sektörünüze yakın bir örnek seçin
              </h2>
            </div>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Vaka filtresi">
              {filters.map((f) => {
                const on = active === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(f.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      on ? "bg-ink text-white" : "border border-line bg-white text-ink-soft hover:border-line-strong hover:text-ink"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <Link
                key={s.slug}
                href={`/basari-hikayeleri/${s.slug}`}
                className="group flex flex-col rounded-3xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lift md:p-7"
              >
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="rounded-full bg-canvas px-3 py-1 text-ink-soft">{s.category}</span>
                  <span className="inline-flex items-center gap-1 text-ink-faint">
                    <Clock className="h-3.5 w-3.5" /> {s.duration}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{s.company}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.summary}.</p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-accent-light/60 p-3">
                    <p className="text-xs text-ink-muted">Tıklama</p>
                    <p className="text-2xl font-bold tracking-tight text-accent-dark">{pct(s.clickIncrease)}</p>
                  </div>
                  <div className="rounded-2xl bg-brand-light p-3">
                    <p className="text-xs text-ink-muted">Gösterim</p>
                    <p className="text-2xl font-bold tracking-tight text-brand">{pct(s.impressionIncrease)}</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 border-t border-line pt-5">
                  <BeforeAfter study={s} label="Tıklama" />
                  <BeforeAfter study={s} label="Gösterim" />
                </div>

                <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-brand">
                  Vakayı inceleyin <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          {list.length === 0 ? (
            <p className="mt-6 text-ink-soft">Bu alanda henüz yayınladığım bir vaka yok.</p>
          ) : null}
        </div>
      </section>

      {/* Nasıl ölçüyorum */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Rakamları nasıl okumalı?</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[44px]">
              Bu sonuçları nasıl ölçtüğümü açıkça yazıyorum
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Bir başarı hikâyesinin değeri, rakamın nereden geldiğini bilmenize bağlı. O yüzden her vakada aynı
              kuralları uyguluyorum ve neyi göstermediğimi de söylüyorum.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Search,
                title: "Kaynak: Search Console",
                text: "Tıklama ve gösterim rakamlarını sitenin kendi Google Search Console hesabından alıyorum. Yani gördüğünüz rakamlar bir aracın tahmini değil, Google'ın kendi ölçümü.",
              },
              {
                icon: BarChart3,
                title: "Eşit dönem karşılaştırması",
                text: "Çalışmaya başlamadan önceki dönemi, çalışmanın ardından gelen dönemle Search Console'un karşılaştırma görünümünde yan yana koyuyorum. Böylece tek bir iyi güne değil, döneme bakıyoruz.",
              },
              {
                icon: MousePointerClick,
                title: "Tıklama oranını gizlemiyorum",
                text: "Gösterim hızla arttığında tıklama oranı geçici olarak düşebiliyor. Bunu vakalarda saklamak yerine nedenini açıklıyorum.",
              },
              {
                icon: EyeOff,
                title: "Müşteri adları gizli",
                text: "Müşterilerimin adlarını ve sitelerini gizlilik gereği paylaşmıyorum. Sektörü, süreyi ve sonuçları ise olduğu gibi aktarıyorum.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-line bg-canvas p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand shadow-card">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-canvas pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-night p-8 text-white md:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/40 blur-[100px]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <LineChart className="h-8 w-8 text-accent-light" />
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Sıradaki vaka sizin siteniz olabilir</h2>
                <p className="mt-4 text-lg leading-relaxed text-white/70">
                  Sitenize ücretsiz bir ön bakış atayım; en önemli birkaç sorunu ve ilk adımda neyi değiştirirdim, size
                  açıkça yazayım. Sonra birlikte çalışıp çalışmamak tamamen sizin kararınız.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/audit-talebi"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-canvas"
                >
                  Ücretsiz ön analiz isteyin
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/seo-danismanlik-fiyatlari"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Fiyatları inceleyin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SEOAuditSection />
      <RelatedPages />
      <ContactForm
        title="Sitenizi birlikte büyütelim"
        description="Kısaca sitenizden ve hedefinizden bahsedin; size en kısa sürede kendim dönüş yapıyorum."
        showTitle={true}
      />
    </>
  );
}
