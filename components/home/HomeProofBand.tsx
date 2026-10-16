import fs from "fs";
import path from "path";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/siteConfig";

interface BrandItem {
  name: string;
  file: string;
}

const brands: BrandItem[] = [
  { name: "Enza Home", file: "enza-home.svg" },
  { name: "LTB Jeans", file: "ltb-jeans.svg" },
  { name: "Levis", file: "levis.svg" },
  { name: "Vans", file: "vans.svg" },
  { name: "Timberland", file: "timberland.svg" },
  { name: "Dockers", file: "dockers.svg" },
];

export default function HomeProofBand() {
  const logosDir = path.join(process.cwd(), "public", "logos");
  const logosDirExists = fs.existsSync(logosDir);

  return (
    <section className="bg-[#0d153a] border-b border-white/5 py-8 md:py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sol Kısım: Önceki İstatistikler (+%250 Trafik Artışı, İlk 3 Ortalama Sıra, +%180 ROI İyileşmesi) */}
          <div className="lg:col-span-5 lg:border-r lg:border-white/10 lg:pr-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  +%250
                </div>
                <div className="text-xs text-gray-400 mt-1 font-medium">
                  Trafik Artışı
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight">
                  İlk 3
                </div>
                <div className="text-xs text-gray-400 mt-1 font-medium">
                  Ortalama Sıra
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">
                  +%180
                </div>
                <div className="text-xs text-gray-400 mt-1 font-medium">
                  ROI İyileşmesi
                </div>
              </div>
            </div>

            {/* proofNote doluysa render et, boşsa hiç render etme */}
            {SITE_CONFIG.proofNote ? (
              <p className="text-[11px] sm:text-xs text-gray-400 text-center mt-3 font-mono tracking-tight">
                {SITE_CONFIG.proofNote}
              </p>
            ) : null}
          </div>

          {/* Sağ Kısım: Marka Logoları / Metin Alanı */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 items-center">
              {brands.map((brand) => {
                const logoFilePath = path.join(logosDir, brand.file);
                const hasLogoFile = logosDirExists && fs.existsSync(logoFilePath);

                return (
                  <div
                    key={brand.name}
                    className="h-12 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 px-2 hover:border-white/15 transition-all duration-300"
                  >
                    {hasLogoFile ? (
                      <div className="relative w-full h-7 grayscale opacity-60 hover:opacity-100 transition-opacity">
                        <Image
                          src={`/logos/${brand.file}`}
                          alt={`${brand.name} Logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 text-center truncate">
                        {brand.name}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
