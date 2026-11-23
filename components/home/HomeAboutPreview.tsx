import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { socialChannels } from "@/lib/social";
import { SITE_CONFIG } from "@/lib/siteConfig";

const defaultBio =
  "Markaların hem Google'da hem de yapay zeka asistanlarının cevaplarında bulunabilir olması için çalışan bir SEO ve GEO danışmanıyım. Beş yılı aşkın süredir e-ticaretten sağlığa farklı sektörlerdeki sitelerin organik görünürlüğünü büyütüyorum. Teknik altyapıyı, içerik mimarisini ve marka otoritesini ayrı işler olarak değil, birbirini besleyen tek bir sistem olarak ele alıyorum.";

const facts = [
  { value: "5+ yıl", label: "SEO deneyimi" },
  { value: "9", label: "Sektöre özel yol haritası" },
  { value: "60+", label: "Yayımlanmış rehber" },
];

const tools = [
  { name: "Google Search Console", src: "/google-search-console.webp" },
  { name: "Google Analytics 4", src: "/google-analytics-4-logo.webp" },
  { name: "Ahrefs", src: "/ahrefs-logo.png" },
  { name: "Semrush", src: "/semrush-logo.png" },
  { name: "Screaming Frog", src: "/screaming-frog-logo.png" },
];

const socials = socialChannels;

export default function HomeAboutPreview() {
  return (
    <section id="hakkimda" className="bg-canvas py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-square max-w-[440px] overflow-hidden rounded-[32px] border border-line bg-canvas-alt shadow-lift">
            <Image
              src="/ekim.jpg"
              alt="Ekim Demirci"
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Ben kimim?</p>
          <h2 className="text-3xl font-bold leading-[1.22] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
            Merhaba, ben Ekim Demirci.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{SITE_CONFIG.bioText || defaultBio}</p>

          <dl className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-line bg-white p-5 shadow-card">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="sr-only">{fact.label}</dt>
                <dd className="text-2xl font-bold tracking-tight text-ink">{fact.value}</dd>
                <dd className="text-xs font-medium text-ink-muted">{fact.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">Her gün kullandığım araçlar</p>
            <ul className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li key={tool.name} className="flex items-center gap-2 rounded-full border border-line bg-white py-1.5 pl-1.5 pr-3.5 text-sm font-medium text-ink-soft">
                  <span className="relative h-6 w-6 overflow-hidden rounded-full bg-canvas">
                    <Image src={tool.src} alt="" fill sizes="24px" className="object-contain p-0.5" />
                  </span>
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/hakkimda"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-night-soft"
            >
              Hikâyemin tamamı <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="flex gap-2">
              {socials.map(({ name, href, logo }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <Image src={logo} alt="" width={20} height={20} className="h-5 w-5 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
