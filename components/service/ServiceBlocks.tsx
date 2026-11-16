import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/*
 * Hizmet sayfalarında ortak kullanılan bölüm bileşenleri.
 * CLAUDE.md kuralı: başlık ve paragraflara max-w-* verilmez.
 */

export function SectionHead({ eyebrow, title, intro, dark = false }: { eyebrow: string; title: string; intro?: string; dark?: boolean }) {
  return (
    <div className="mb-8 md:mb-10">
      <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-accent" : "text-brand"}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-bold tracking-tight md:text-[40px] md:leading-[1.2] ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {intro ? <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/70" : "text-ink-soft"}`}>{intro}</p> : null}
    </div>
  );
}

/* ---------- Kapsam kartları ---------- */

export interface ScopeItem {
  icon: LucideIcon;
  title: string;
  text: string;
  href?: string;
  link?: string;
}

export function ScopeGrid({ eyebrow = "Kapsam", title, intro, items }: { eyebrow?: string; title: string; intro?: string; items: ScopeItem[] }) {
  return (
    <section className="border-t border-line bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow={eyebrow} title={title} intro={intro} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title: t, text, href, link }) => (
            <article key={t} className="flex flex-col rounded-3xl border border-line bg-canvas p-7">
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand shadow-card">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold leading-snug text-ink">{t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{text}</p>
              {href && link ? (
                <Link href={href} className="group mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-brand hover:text-brand-dark">
                  {link} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Süreç zaman çizelgesi ---------- */

export interface ProcessStep {
  tag: string;
  tone?: "brand" | "accent" | "amber";
  title: string;
  paragraphs: string[];
}

const tagStyles = {
  brand: "bg-brand-light text-brand",
  accent: "bg-accent-light text-accent-dark",
  amber: "bg-amber-100 text-amber-800",
};

export function ProcessTimeline({ title, intro, ctaLabel, steps }: { title: string; intro: string; ctaLabel: string; steps: ProcessStep[] }) {
  return (
    <section className="border-t border-line bg-canvas py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Çalışma süreci</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-[40px] md:leading-[1.2]">{title}</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">{intro}</p>
            <Link
              href="/audit-talebi"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <ol className="relative space-y-6 before:absolute before:bottom-6 before:left-[22px] before:top-6 before:w-px before:bg-line-strong lg:col-span-8">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-5">
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-sm font-bold text-brand shadow-card">
                {i + 1}
              </span>
              <div className="flex-1 rounded-3xl border border-line bg-white p-6 shadow-card md:p-8">
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${tagStyles[step.tone ?? "brand"]}`}>{step.tag}</span>
                <h3 className="mt-3 text-xl font-bold text-ink">{step.title}</h3>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-soft">
                  {step.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Örnek / belirti kartları ---------- */

export interface ExampleItem {
  icon: LucideIcon;
  title: string;
  quote?: string;
  text: string;
}

export function ExampleGrid({ eyebrow = "Kimler için?", title, intro, items, quoteStyle = "search" }: { eyebrow?: string; title: string; intro?: string; items: ExampleItem[]; quoteStyle?: "search" | "speech" }) {
  return (
    <section className="border-t border-line bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow={eyebrow} title={title} intro={intro} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title: t, quote, text }) => (
            <article key={t} className="flex flex-col rounded-3xl border border-line bg-canvas p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-card">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-ink">{t}</h3>
              </div>
              {quote ? (
                quoteStyle === "search" ? (
                  <p className="mt-5 flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-[15px] text-ink">
                    <span className="text-ink-faint">🔍</span> {quote}
                  </p>
                ) : (
                  <p className="mt-5 rounded-2xl rounded-tl-sm border border-line bg-white px-4 py-3 text-[15px] italic text-ink">&ldquo;{quote}&rdquo;</p>
                )
              ) : null}
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Sonuç bandı ---------- */

export interface ResultItem {
  code: string;
  metric: string;
  label: string;
  detail: string;
  source: string;
}

export function ProofBand({ title, results }: { title: string; results: ResultItem[] }) {
  return (
    <section className="bg-night py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="flex-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Sonuçlar</p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-[40px] md:leading-[1.2]">{title}</h2>
          </div>
          <Link href="/basari-hikayeleri" className="group inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-accent">
            Tüm başarı hikâyeleri <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {results.map((r) => (
            <div key={r.code} className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{r.code}</p>
              <p className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">{r.metric}</p>
              <p className="mt-1 font-semibold text-accent">{r.label}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">{r.detail}</p>
              <p className="mt-auto border-t border-white/10 pt-4 text-xs text-white/45">Kaynak: {r.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- İlgili hizmetler kartı ---------- */

export interface RelatedLink {
  icon: LucideIcon;
  title: string;
  href: string;
  text: string;
}

export function RelatedBand({ eyebrow, title, text, links }: { eyebrow: string; title: string; text: string; links: RelatedLink[] }) {
  return (
    <section className="border-t border-line bg-canvas py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 rounded-3xl border border-line bg-white p-7 shadow-card md:p-10 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{title}</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{text}</p>
          </div>
          <div className="grid shrink-0 grid-cols-1 gap-3 lg:w-[380px]">
            {links.map(({ icon: Icon, title: t, href, text: x }) => (
              <Link key={href} href={href} className="group flex items-center gap-3 rounded-2xl border border-line bg-canvas p-4 transition-all hover:border-brand/30">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand shadow-card">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex-1">
                  <span className="block font-semibold text-ink group-hover:text-brand">{t}</span>
                  <span className="block text-xs text-ink-muted">{x}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Rehber kabuğu (içindekiler + CTA + SSS şeması) ---------- */

export interface Faq {
  question: string;
  answer: string;
}

export function GuideH2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 text-2xl font-bold tracking-tight text-ink md:text-[32px] md:leading-[1.25]">
      {children}
    </h2>
  );
}

export function GuideLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-brand underline underline-offset-4">
      {children}
    </Link>
  );
}

export function GuideDefinition({ children }: { children: React.ReactNode }) {
  return <p className="rounded-2xl border-l-4 border-brand bg-brand-light px-5 py-4 font-medium text-ink">{children}</p>;
}

export function GuideShell({
  id,
  eyebrow,
  title,
  intro,
  toc,
  cta,
  faqTitle,
  faqItems,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  toc: { id: string; label: string }[];
  cta: { eyebrow: string; title: string; text: string; label: string };
  faqTitle: string;
  faqItems: Faq[];
  children: React.ReactNode;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section id={id} className="border-t border-line bg-white py-12 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
          <p className="text-3xl font-bold tracking-tight text-ink md:text-[44px] md:leading-[1.18]">{title}</p>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{intro}</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <nav aria-label="Rehber içindekiler" className="rounded-3xl border border-line bg-canvas p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">İçindekiler</p>
                <ol className="space-y-1">
                  {[...toc, { id: "sss", label: "Sıkça sorulan sorular" }].map((item, i) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="flex gap-3 rounded-lg px-2 py-1.5 text-sm text-ink-soft transition-colors hover:bg-white hover:text-brand">
                        <span className="w-5 shrink-0 text-xs font-semibold text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="rounded-3xl bg-night p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{cta.eyebrow}</p>
                <p className="mt-2 text-lg font-bold">{cta.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{cta.text}</p>
                <Link
                  href="/audit-talebi"
                  className="group mt-5 flex items-center justify-between rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  {cta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </aside>

          <article className="space-y-16 text-[17px] leading-[1.8] text-ink-soft lg:col-span-8">
            {children}
            <div className="space-y-5">
              <GuideH2 id="sss">{faqTitle}</GuideH2>
              <div className="divide-y divide-line rounded-2xl border border-line bg-canvas">
                {faqItems.map((faq, i) => (
                  <details key={faq.question} className="group px-5 py-4 md:px-6" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base font-semibold leading-snug text-ink md:text-[17px]">{faq.question}</h3>
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink-muted transition-transform group-open:rotate-45 group-open:text-brand">
                        <Plus className="h-4 w-4" />
                      </span>
                    </summary>
                    <p className="mt-3 pr-8 text-[15px] leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- Demo bölümü kabuğu ---------- */

export function DemoSection({
  id,
  eyebrow,
  title,
  intro,
  window: win,
  side,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  window: React.ReactNode;
  side: React.ReactNode;
}) {
  return (
    <section id={id} className="relative overflow-hidden bg-canvas py-12 md:py-16">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[44px] lg:leading-[1.18]">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{intro}</p>
        </div>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">{win}</div>
          <div className="lg:col-span-5">{side}</div>
        </div>
      </div>
    </section>
  );
}

export function DemoWindow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-lift">
      <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate text-xs font-medium text-ink-muted">{label}</span>
        <span className="ml-auto hidden text-[11px] font-medium text-ink-faint sm:inline">Temsili canlandırma</span>
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </div>
  );
}

export function DemoSide({ title, text, points, ctaTitle, ctaText, ctaLabel }: { title: string; text: string; points: string[]; ctaTitle: string; ctaText: string; ctaLabel: string }) {
  return (
    <>
      <h3 className="text-2xl font-bold text-ink">{title}</h3>
      <p className="mt-3 leading-relaxed text-ink-soft">{text}</p>
      <ul className="mt-6 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-light text-xs font-bold text-accent-dark">✓</span>
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-8 rounded-2xl border border-brand/20 bg-brand-light p-5">
        <p className="font-semibold text-ink">{ctaTitle}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{ctaText}</p>
        <Link
          href="/audit-talebi"
          className="group mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </>
  );
}

/* ---------- Öne çıkan vaka (görsel + hikâye) ---------- */

export function CaseSpotlight({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  stats,
  siteUrl,
  siteLabel,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  stats: { value: string; label: string }[];
  siteUrl?: string;
  siteLabel?: string;
}) {
  return (
    <section className="border-t border-line bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-[40px] md:leading-[1.2]">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{text}</p>
          <dl className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-line bg-canvas p-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-bold tracking-tight text-ink">{s.value}</dd>
                <dd className="mt-0.5 text-xs text-ink-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
          {siteUrl && siteLabel ? (
            <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark">
              {siteLabel} <ArrowRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
        <figure className="lg:col-span-7">
          <div className="overflow-hidden rounded-3xl border border-line bg-white p-2 shadow-lift">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={imageAlt} className="h-auto w-full rounded-2xl" loading="lazy" />
          </div>
        </figure>
      </div>
    </section>
  );
}
