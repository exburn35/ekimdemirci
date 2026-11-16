import Image from "next/image";
import { Building2, GraduationCap, HeartPulse, Landmark, Shirt, Sofa } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { brands, logoSize, type Brand } from "@/lib/brands";

const groups: { sector: Brand["sector"]; icon: LucideIcon; span: string }[] = [
  { sector: "Moda ve giyim", icon: Shirt, span: "lg:col-span-2" },
  { sector: "Ev ve yaşam", icon: Sofa, span: "" },
  { sector: "Sağlık", icon: HeartPulse, span: "" },
  { sector: "Finans", icon: Landmark, span: "" },
  { sector: "Eğitim", icon: GraduationCap, span: "" },
];

export default function BrandsSection() {
  return (
    <section className="bg-canvas py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Deneyim</p>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[44px]">Danışmanlık verdiğim markalar</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Farklı sektörlerde, farklı büyüklükteki markalarla çalıştım. Her sektörün arama davranışı, rekabeti ve
            kuralları başka; bu çeşitlilik, sizin sitenize bakarken neye öncelik vermem gerektiğini daha hızlı görmemi
            sağlıyor.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ sector, icon: Icon, span }) => {
            const items = brands.filter((b) => b.sector === sector);
            return (
              <div key={sector} className={`rounded-3xl border border-line bg-white p-6 md:p-7 ${span}`}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold text-ink">{sector}</h3>
                  <span className="ml-auto text-xs font-semibold text-ink-faint">{items.length} marka</span>
                </div>
                <ul className={`grid gap-3 ${span ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"}`}>
                  {items.map((b) => {
                    const { width, height } = logoSize(b, 3000, 52);
                    return (
                      <li
                        key={b.file}
                        className="group flex h-24 items-center justify-center rounded-2xl bg-canvas px-4 transition-colors hover:bg-canvas-alt"
                      >
                        <Image
                          src={`/markalar/${b.file}`}
                          alt={b.name}
                          title={b.name}
                          width={width}
                          height={height}
                          style={{ width, height, maxWidth: "100%" }}
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className="flex flex-col gap-5 rounded-3xl bg-night p-6 text-white md:col-span-2 md:p-7 lg:col-span-3 lg:flex-row lg:items-center">
            <Building2 className="h-7 w-7 shrink-0 text-accent-light" />
            <div className="flex-1">
              <p className="text-lg font-bold">Sıradaki marka siz olabilirsiniz</p>
              <p className="mt-1 text-sm leading-relaxed text-white/70">
                Büyük bir marka olmanız gerekmiyor. Sitenize ücretsiz bir ön bakış atayım, ilk adımları birlikte konuşalım.
              </p>
            </div>
            <a
              href="/audit-talebi"
              className="inline-flex shrink-0 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-canvas lg:self-auto"
            >
              Ücretsiz ön analiz isteyin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
