import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquareText, Search, UserRound, Sparkles, LineChart } from "lucide-react";

const promises = [
  { icon: UserRound, text: "Tek muhatap: doğrudan benimle" },
  { icon: Sparkles, text: "Google ve yapay zeka görünürlüğü birlikte" },
  { icon: LineChart, text: "Her ay sade, anlaşılır rapor" },
];

const quickLinks = [
  { label: "Organik trafiğim düşüyor", href: "/seo-hizmetleri" },
  { label: "ChatGPT'de görünmek istiyorum", href: "/geo-danismanligi" },
  { label: "Sitem teknik olarak sorunlu", href: "/seo-hizmetleri/teknik-seo" },
  { label: "Sektörüme özel strateji", href: "/sektorel-seo-hizmetleri" },
  { label: "Bütçemi planlamak istiyorum", href: "/seo-danismanlik-fiyatlari" },
];

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-28 pb-14 md:pt-36 md:pb-20">
      {/* Yumuşak arka plan dokusu */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#161b2e0f_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[520px] rounded-full bg-brand/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 left-[-12%] h-[320px] w-[420px] rounded-full bg-accent/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h1 className="tracking-tight">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-ink-soft shadow-card">
                <span className="h-2 w-2 rounded-full bg-accent" />
                SEO ve GEO Danışmanı Ekim Demirci
              </span>
              <span className="block text-[40px] font-bold leading-[1.18] text-ink sm:text-5xl lg:text-[60px]">
                Aranan değil,{" "}
                <span className="relative whitespace-nowrap text-brand">
                  önerilen
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 200 12"
                    className="absolute -bottom-2 left-0 h-3 w-full text-accent/60"
                    preserveAspectRatio="none"
                  >
                    <path d="M2 9c40-6 120-8 196-3" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                marka olun.
              </span>
            </h1>

            <p className="mt-7 text-lg leading-relaxed text-ink-soft">
              Müşterileriniz artık yalnızca Google&apos;a yazmıyor; aynı soruyu ChatGPT&apos;ye, Gemini&apos;ye,
              Perplexity&apos;ye de soruyor. Ben sitenizi bu iki dünyada da doğru anlaşılan, güven veren ve kaynak
              gösterilen bir yapıya kavuşturuyorum. Arada ajans katmanı yok: stratejiyi kuran da, uygulamayı takip eden
              de, sonucu size anlatan da benim.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#analiz"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-[0_8px_24px_-8px_rgba(61,61,214,0.6)] transition-all hover:bg-brand-dark"
              >
                Ücretsiz ön analiz iste
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#surec"
                className="inline-flex items-center justify-center rounded-full border border-line-strong bg-white px-7 py-3.5 font-semibold text-ink transition-colors hover:border-ink/30"
              >
                Nasıl çalıştığımı görün
              </Link>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-3 border-t border-line pt-6 sm:grid-cols-3">
              {promises.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
                    <Icon className="h-4 w-4" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Fotoğraf + hedef kartları */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line bg-canvas-alt shadow-lift">
                <Image
                  src="/ekim.jpg"
                  alt="SEO ve GEO Danışmanı Ekim Demirci"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover object-top"
                />
                <div className="absolute left-4 top-4 rounded-xl bg-ink/55 px-3 py-2 text-white backdrop-blur-md">
                  <p className="text-sm font-bold leading-tight">Ekim Demirci</p>
                  <p className="text-xs text-white/80">Bağımsız SEO &amp; GEO Danışmanı · İstanbul</p>
                </div>
              </div>

              <div className="absolute -left-8 bottom-28 hidden w-52 rounded-2xl border border-line bg-white p-4 shadow-lift sm:block">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-ink-muted">
                  <Search className="h-3.5 w-3.5 text-brand" /> Google sonuçları
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 w-24 rounded bg-accent/70" />
                  <div className="h-2 w-full rounded bg-ink/10" />
                  <div className="h-2 w-4/5 rounded bg-ink/10" />
                </div>
                <p className="mt-3 text-[11px] font-medium text-ink-muted">Hedef: ilk sayfada, doğru sorguda</p>
              </div>

              <div className="absolute -right-6 bottom-6 hidden w-56 rounded-2xl border border-line bg-white p-4 shadow-lift sm:block">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-ink-muted">
                  <MessageSquareText className="h-3.5 w-3.5 text-accent" /> Yapay zeka cevabı
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 w-full rounded bg-ink/10" />
                  <div className="h-2 w-5/6 rounded bg-ink/10" />
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent-light px-2.5 py-1 text-[11px] font-semibold text-accent-dark">
                  Kaynak: siteniz.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* İhtiyaca göre hızlı yönlendirme */}
        <div className="mt-14 rounded-2xl border border-line bg-white/80 p-4 shadow-card backdrop-blur sm:p-5">
          <p className="mb-3 text-sm font-semibold text-ink">Sizi buraya ne getirdi?</p>
          <div className="flex flex-wrap gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-brand/40 hover:bg-brand-light hover:text-brand"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5 opacity-50 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
