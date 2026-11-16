import Image from "next/image";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { brands, logoSize, type Brand } from "@/lib/brands";

const stats = [
  { value: "+%250", label: "Organik trafik artışı" },
  { value: "İlk 3", label: "Ortalama sıra hedefi" },
  { value: "+%180", label: "Yatırım getirisi iyileşmesi" },
];

const sectors = ["Moda ve giyim", "Ev ve yaşam", "Sağlık", "Finans", "Eğitim"];

function LogoTile({ brand }: { brand: Brand }) {
  const { width, height } = logoSize(brand, 3400, 56);
  return (
    <li className="group flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-line bg-white px-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift sm:w-56">
      <Image
        src={`/markalar/${brand.file}`}
        alt={brand.name}
        width={width}
        height={height}
        style={{ width, height, maxWidth: "100%" }}
        className="max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </li>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Brand[]; reverse?: boolean }) {
  return (
    <div className="group/row relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul
        className={`flex w-max gap-4 py-2 motion-reduce:animate-none group-hover/row:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...items, ...items].map((b, i) => (
          <LogoTile key={`${b.file}-${i}`} brand={b} />
        ))}
      </ul>
    </div>
  );
}

export default function HomeProofBand() {
  const half = Math.ceil(brands.length / 2);
  const rowA = brands.slice(0, half);
  const rowB = brands.slice(half);

  return (
    <section className="overflow-hidden border-y border-line bg-canvas py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Deneyimimde yer alan markalar</p>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Modadan sağlığa, finanstan eğitime: büyük markaların arama sorunlarını yakından tanıyorum
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {sectors.map((s) => (
                <li key={s} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink-soft">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <dl className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-line bg-white p-4 text-center shadow-card">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-bold tracking-tight text-brand sm:text-3xl">{stat.value}</dd>
                  <dd className="mt-1 text-xs font-medium leading-snug text-ink-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
            {SITE_CONFIG.proofNote ? (
              <p className="mt-3 text-center text-xs text-ink-faint">{SITE_CONFIG.proofNote}</p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </section>
  );
}
