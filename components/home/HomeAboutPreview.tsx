import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Instagram, Youtube } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

const tools = [
  { name: "Google Search Console", shortName: "GSC", src: "/google-search-console.webp" },
  { name: "Google Analytics 4", shortName: "GA4", src: "/google-analytics-4-logo.webp" },
  { name: "Ahrefs", shortName: "Ahrefs", src: "/ahrefs-logo.png" },
  { name: "Semrush", shortName: "Semrush", src: "/semrush-logo.png" },
  { name: "Screaming Frog", shortName: "Screaming Frog", src: "/screaming-frog-logo.png" },
  { name: "Python", shortName: "Python", isPython: true },
];

export default function HomeAboutPreview() {
  const photoPath = path.join(process.cwd(), "public", "ekim-demirci.webp");
  const hasPhoto = fs.existsSync(photoPath);

  const defaultBio = "Ben Ekim Demirci; markaların Google arama sonuçlarında ve yeni nesil yapay zeka arama motorlarında organik olarak büyümesini sağlayan bağımsız SEO ve GEO danışmanıyım. 5 yılı aşkın süredir e-ticaretten sağlığa onlarca sektörde veriye dayalı stratejilerle sürdürülebilir trafik ve ciro artışı yönetiyorum. Teknik mükemmellik, semantik içerik mimarisi ve varlık tabanlı optimizasyonu tek elden kurgulayarak doğrudan sonuç odaklı çalışıyorum.";

  return (
    <section className="bg-[#0d153a] border-b border-white/5 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Sol Kolon: Fotoğraf veya Baş Harfli (ED) Şık Avatar Fallback'i */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl flex items-center justify-center">
              {hasPhoto ? (
                <Image
                  src="/ekim-demirci.webp"
                  alt="SEO ve GEO Danışmanı Ekim Demirci"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center select-none">
                  <div className="w-28 h-28 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-1 shadow-[0_0_40px_rgba(139,92,246,0.3)] mb-5 flex items-center justify-center">
                    <div className="w-full h-full rounded-[22px] bg-[#0d153a] flex items-center justify-center">
                      <span className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        ED
                      </span>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-white mb-1">
                    Ekim Demirci
                  </div>
                  <div className="text-xs font-semibold text-purple-300">
                    SEO & GEO Danışmanı
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sağ Kolon: Bio, Araç Logoları ve Sosyal Linkler */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Ekim Demirci Kimdir?
            </h2>

            {/* Biyografi Metni (bioText doluysa onu, boşsa defaultBio'yu gösterir; placeholder yazısı canlıda görünmez) */}
            <div className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              <p>{SITE_CONFIG.bioText || defaultBio}</p>
            </div>

            {/* Araç Logoları (GSC, GA4, Ahrefs, Semrush, Screaming Frog, Python) */}
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                Kullandığım Temel Analiz & Veri Araçları
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-2 group hover:border-purple-500/30 transition-colors"
                    title={tool.name}
                  >
                    {tool.isPython ? (
                      <span className="text-xs font-bold text-amber-400 font-mono">
                        Python
                      </span>
                    ) : tool.src ? (
                      <div className="relative w-full h-6">
                        <Image
                          src={tool.src}
                          alt={tool.name}
                          fill
                          className="object-contain filter grayscale group-hover:grayscale-0 transition-all opacity-75 group-hover:opacity-100"
                        />
                      </div>
                    ) : (
                      <span className="text-xs font-semibold text-gray-300">
                        {tool.shortName}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sosyal Profil Linkleri & Hakkımda Sayfası Butonu */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                {SITE_CONFIG.sameAs.map((url) => {
                  let label = "Sosyal Profil";
                  let IconComponent: any = null;

                  if (url.includes("linkedin")) {
                    label = "LinkedIn";
                    IconComponent = Linkedin;
                  } else if (url.includes("instagram")) {
                    label = "Instagram";
                    IconComponent = Instagram;
                  } else if (url.includes("youtube")) {
                    label = "YouTube";
                    IconComponent = Youtube;
                  }

                  return (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all"
                      aria-label={label}
                    >
                      {IconComponent ? (
                        <IconComponent className="w-4 h-4" />
                      ) : (
                        <span className="text-xs font-bold font-mono">
                          {url.includes("medium") ? "M" : url.includes("pinterest") ? "P" : "•"}
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>

              <Link
                href="/hakkimda"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group"
              >
                <span>Hakkımda Daha Fazla Bilgi Edinin</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
