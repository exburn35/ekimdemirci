import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { socialChannels as channels } from "@/lib/social";

export default function FollowSection() {
  return (
    <section className="border-t border-line bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Beni takip edin</p>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Paylaştıklarımı kaçırmayın</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            SEO ve yapay zeka aramasıyla ilgili paylaşımlarımı blogun yanı sıra sosyal medyada da bulabilirsiniz. Size en
            uygun kanaldan beni takip edebilirsiniz.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {channels.map((c) => {
            return (
              <li key={c.name}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-3xl border border-line bg-canvas p-6 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-card transition-transform group-hover:scale-105">
                      <Image src={c.logo} alt={`${c.name} logosu`} width={36} height={36} className="h-9 w-9 object-contain" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink-faint transition-colors group-hover:text-brand" />
                  </div>
                  <p className="mt-5 text-lg font-bold text-ink">{c.name}</p>
                  <p className="text-sm font-medium text-brand">{c.handle}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
