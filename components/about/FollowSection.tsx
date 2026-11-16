import { ArrowUpRight, Instagram, Linkedin, PenLine, Pin, Youtube } from "lucide-react";

const channels = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    handle: "Ekim Demirci",
    href: "https://www.linkedin.com/in/ekim-demirci/",
    tone: "bg-[#0A66C2]",
  },
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@ekimdemircii",
    href: "https://www.instagram.com/ekimdemircii/",
    tone: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  },
  {
    icon: Youtube,
    name: "YouTube",
    handle: "@ekimdemirciseo",
    href: "https://www.youtube.com/@ekimdemirciseo",
    tone: "bg-[#FF0000]",
  },
  {
    icon: PenLine,
    name: "Medium",
    handle: "@ekmdmrci",
    href: "https://medium.com/@ekmdmrci",
    tone: "bg-ink",
  },
  {
    icon: Pin,
    name: "Pinterest",
    handle: "ekimdemirciseo",
    href: "https://tr.pinterest.com/ekimdemirciseo/",
    tone: "bg-[#E60023]",
  },
];

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
            const Icon = c.icon;
            return (
              <li key={c.name}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-3xl border border-line bg-canvas p-6 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${c.tone}`}>
                      <Icon className="h-5 w-5" />
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
