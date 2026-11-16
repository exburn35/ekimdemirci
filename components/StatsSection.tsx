import { Briefcase, Calendar, Globe, Users } from "lucide-react";

const stats = [
  { icon: Calendar, value: "2020", label: "Sektöre giriş yılım", text: "Dijital pazarlama yolculuğum o yıl başladı." },
  { icon: Briefcase, value: "15+", label: "Farklı sektör", text: "Moda ve perakendeden sağlığa, finanstan eğitime." },
  { icon: Globe, value: "15+", label: "Danışmanlık verdiğim ülke", text: "Farklı pazarlarda ve dillerde SEO deneyimi." },
  { icon: Users, value: "200+", label: "Danışmanlık verdiğim müşteri", text: "Küçük işletmelerden tanınmış markalara." },
];

export default function StatsSection() {
  return (
    <section className="bg-canvas py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-card md:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-[90px]" />
          <div className="relative mb-8 md:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Rakamlarla</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Deneyimim, kısaca</h2>
          </div>
          <dl className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="rounded-2xl bg-canvas p-6">
                  <Icon className="h-5 w-5 text-brand" />
                  <dd className="mt-4 text-5xl font-bold tracking-tight text-ink">{s.value}</dd>
                  <dt className="mt-2 font-semibold text-ink">{s.label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink-muted">{s.text}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
