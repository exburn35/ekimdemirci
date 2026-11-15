import fs from "fs";
import path from "path";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/siteConfig";

const stats = [
  { value: "+%250", label: "Organik trafik artışı" },
  { value: "İlk 3", label: "Ortalama sıra hedefi" },
  { value: "+%180", label: "Yatırım getirisi iyileşmesi" },
];

const brands = [
  { name: "Enza Home", file: "enza-home.svg" },
  { name: "LTB Jeans", file: "ltb-jeans.svg" },
  { name: "Levi's", file: "levis.svg" },
  { name: "Vans", file: "vans.svg" },
  { name: "Timberland", file: "timberland.svg" },
  { name: "Dockers", file: "dockers.svg" },
];

export default function HomeProofBand() {
  const logosDir = path.join(process.cwd(), "public", "logos");

  return (
    <section className="border-y border-line bg-white py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <dl className="grid grid-cols-3 divide-x divide-line">
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 text-center first:pl-0 last:pr-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{stat.value}</dd>
                <dd className="mt-1 text-xs font-medium text-ink-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
          {SITE_CONFIG.proofNote ? (
            <p className="mt-3 text-center text-xs text-ink-faint">{SITE_CONFIG.proofNote}</p>
          ) : null}
        </div>

        <div className="lg:col-span-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint lg:text-right">
            Deneyimimde yer alan markalar
          </p>
          <ul className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {brands.map((brand) => {
              const hasLogo = fs.existsSync(path.join(logosDir, brand.file));
              return (
                <li
                  key={brand.name}
                  className="flex h-12 items-center justify-center rounded-xl border border-line bg-canvas px-2"
                >
                  {hasLogo ? (
                    <div className="relative h-6 w-full opacity-60 grayscale transition-opacity hover:opacity-100">
                      <Image src={`/logos/${brand.file}`} alt={brand.name} fill className="object-contain" />
                    </div>
                  ) : (
                    <span className="truncate text-xs font-semibold tracking-wide text-ink-muted">{brand.name}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
