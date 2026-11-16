import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import SectionHeading from "./SectionHeading";

// "yüzde 38.81" → "+%38,8"
function formatPercent(raw: string) {
  const n = parseFloat(raw.replace(/[^\d.]/g, ""));
  if (Number.isNaN(n)) return raw;
  return `+%${n.toLocaleString("tr-TR", { maximumFractionDigits: 1 })}`;
}

export default function HomeCaseStudies() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section id="vakalar" className="scroll-mt-24 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Sonuçlar"
            title="Gerçek projelerden ölçülebilir sonuçlar"
            intro="Her vakada başlangıç noktasını, hangi adımı neden attığımı ve ortaya çıkan sonucu tıklama ve gösterim gibi somut metriklerle anlatıyorum. Müşteri adlarını gizlilik gereği paylaşmıyorum."
          />
          <Link
            href="/basari-hikayeleri"
            className="mb-10 inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/30 md:mb-10 lg:self-auto"
          >
            Tüm başarı hikâyeleri <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {featured.map((study) => (
            <Link
              key={study.slug}
              href={`/basari-hikayeleri/${study.slug}`}
              className="group flex flex-col rounded-3xl border border-line bg-canvas p-7 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-lift"
            >
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="rounded-full bg-white px-3 py-1 text-ink-soft shadow-card">{study.category}</span>
                <span className="inline-flex items-center gap-1 text-ink-faint">
                  <Clock className="h-3.5 w-3.5" /> {study.duration}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{study.company}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{study.summary}</p>

              <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-5">
                <div>
                  <dt className="text-xs text-ink-muted">Tıklama</dt>
                  <dd className="text-2xl font-bold tracking-tight text-accent-dark">{formatPercent(study.clickIncrease)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-ink-muted">Gösterim</dt>
                  <dd className="text-2xl font-bold tracking-tight text-brand">{formatPercent(study.impressionIncrease)}</dd>
                </div>
              </dl>

              <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-brand">
                Vakayı incele <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
