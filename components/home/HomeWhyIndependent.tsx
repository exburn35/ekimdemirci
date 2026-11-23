import Link from "next/link";
import { ArrowRight, Building2, Check, Minus, UserRound, X } from "lucide-react";
import SectionHeading from "./SectionHeading";

const comparison = [
  { label: "Muhatabınız", agency: "Bir hesap yöneticisi; bazen her ay farklı biri", me: "Projeyi baştan sona yürüten kişi: ben" },
  { label: "Stratejiyi kim kuruyor?", agency: "Kıdemli biri kurar, uygulamayı genellikle daha deneyimsiz ekip üyeleri yapar", me: "Stratejiyi kuran ile uygulamayı takip eden aynı kişi" },
  { label: "Karar hızı", agency: "Talepler sıraya girer, birkaç onay katmanından geçer", me: "Sorunu gördüğüm gün konuşur, aynı hafta harekete geçeriz" },
  { label: "Raporlama", agency: "Uzun, şablon raporlar", me: "Ne yaptım, ne değişti, sırada ne var: sade bir özet" },
  { label: "Bütçenin gittiği yer", agency: "Ofis, kadro ve satış maliyetleri de fiyata dahil", me: "Doğrudan işin kendisine" },
];

const notFor = [
  "Bir ayda birinci sıra garantisi arıyorsanız",
  "Yüzlerce bağlantıyı ucuza satın almak istiyorsanız",
  "Sitenize dokunulmadan sonuç bekliyorsanız",
];

export default function HomeWhyIndependent() {
  return (
    <section className="bg-canvas-alt py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Neden benimle çalışmalı?"
          title="Ajansla çalışmak ile benimle çalışmak arasındaki fark"
          intro="Ajansların da doğru tercih olduğu durumlar var; özellikle aynı anda pek çok kanalı yönetmeniz gerekiyorsa. Ama hedefiniz arama ve yapay zeka görünürlüğüyse, tek bir uzmanın derinliği çoğu zaman daha hızlı sonuç getirir. Aşağıda iki çalışma modelini aynı başlıklar altında yan yana görebilirsiniz."
        />

        <div className="relative grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
          {/* Ajans modeli */}
          <div className="rounded-3xl border border-line bg-canvas p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-line pb-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink/[0.06] text-ink-muted">
                <Building2 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">Seçenek 1</p>
                <h3 className="text-xl font-bold text-ink-soft">Tipik bir ajansla çalıştığınızda</h3>
              </div>
            </div>
            <dl className="space-y-5">
              {comparison.map((row) => (
                <div key={row.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-faint">{row.label}</dt>
                  <dd className="mt-1.5 flex gap-2.5 text-[15px] leading-relaxed text-ink-muted">
                    <Minus className="mt-1 h-4 w-4 shrink-0 text-ink-faint" />
                    {row.agency}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Ortadaki VS rozeti (masaüstü) */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-sm font-bold text-ink-muted shadow-card lg:flex"
          >
            VS
          </span>

          {/* Benimle çalışmak */}
          <div className="rounded-3xl border-2 border-brand bg-white p-6 shadow-lift md:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-brand/15 pb-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                <UserRound className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Seçenek 2</p>
                <h3 className="text-xl font-bold text-ink">Benimle çalıştığınızda</h3>
              </div>
            </div>
            <dl className="space-y-5">
              {comparison.map((row) => (
                <div key={row.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brand">{row.label}</dt>
                  <dd className="mt-1.5 flex gap-2.5 text-[15px] font-medium leading-relaxed text-ink">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    {row.me}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              href="/hakkimda"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              Beni daha yakından tanıyın <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Kimler için değil */}
        <div className="mt-6 rounded-3xl bg-night p-6 text-white md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="lg:w-1/3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Dürüst olmak gerekirse</p>
              <h3 className="mt-2 text-xl font-bold">Şu durumlarda doğru kişi ben değilim</h3>
            </div>
            <ul className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-3">
              {notFor.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-white/[0.06] p-4 text-[15px] leading-relaxed text-white/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <X className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
