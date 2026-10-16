import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Stethoscope, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

interface CaseItem {
  id: string;
  category: string;
  title: string;
  icon: any;
  initialRank: string;
  currentRank: string;
  duration: string;
  method: string;
  imageFileName: string;
}

const cases: CaseItem[] = [
  {
    id: "e-ticaret",
    category: "E-Ticaret SEO",
    title: "Moda E-Ticaret Markası",
    icon: ShoppingBag,
    initialRank: "38. Sıra (Sayfa 4)",
    currentRank: "2. Sıra (Sayfa 1)",
    duration: "6 Ay (+%250 Trafik)",
    method: "Kategori sayfalarının semantik şema mimarisi, facet indeksleme kontrolü ve dinamik filtre optimizasyonuyla tarama bütçesi ve dönüşüm verimi optimize edildi.",
    imageFileName: "e-ticaret.webp",
  },
  {
    id: "saglik",
    category: "Sağlık & Medikal SEO",
    title: "Özel Ağız & Diş Sağlığı Polikliniği",
    icon: Stethoscope,
    initialRank: "45. Sıra (Sayfa 5)",
    currentRank: "1. Sıra (Sayfa 1)",
    duration: "8 Ay (+%310 Trafik)",
    method: "YMYL ve E-E-A-T standartlarında hekim uzmanlık profilleri, tıbbi içerik doğrulama ağı ve hasta niyetine odaklı tedavi bilgi mimarisi kuruldu.",
    imageFileName: "saglik.webp",
  },
  {
    id: "geo",
    category: "GEO & AI Görünürlüğü",
    title: "B2B SaaS & Yazılım Platformu",
    icon: Sparkles,
    initialRank: "AI Yanıtlarında Yoktu",
    currentRank: "ChatGPT & Perplexity 1. Kaynak",
    duration: "5 Ay (+%420 AI Alıntılanma)",
    method: "Bilgi grafiği yapılandırması ve doğrudan varlık (Entity) referanslamasıyla üretken yapay zeka motorlarında birincil otorite kaynak konumuna getirildi.",
    imageFileName: "geo.webp",
  },
];

export default function HomeCaseStudies() {
  const vakalarDir = path.join(process.cwd(), "public", "vakalar");
  const vakalarDirExists = fs.existsSync(vakalarDir);

  return (
    <section id="vakalar" className="bg-[#0a0f25] border-b border-white/5 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Vaka Analizleri
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Farklı sektörlerdeki markalar için gerçekleştirdiğim somut, veriye dayalı ve kanıtlanmış büyüme başarıları.
          </p>
        </div>

        {/* 3 Yan Yana Kart Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {cases.map((c) => {
            const Icon = c.icon;
            const imagePath = path.join(vakalarDir, c.imageFileName);
            const imageExists = vakalarDirExists && fs.existsSync(imagePath);

            return (
              <div
                key={c.id}
                className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300"
              >
                {/* Görsel Alanı (/public/vakalar/*.webp veya Şık İkon Banner) */}
                <div className="relative w-full h-40 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent border-b border-white/10 flex items-center justify-center overflow-hidden">
                  {imageExists ? (
                    <Image
                      src={`/vakalar/${c.imageFileName}`}
                      alt={`${c.title} Vaka Analizi`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-20 h-20 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-purple-500/30 transition-all duration-300">
                        <Icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
                      </div>
                    </div>
                  )}

                  {/* Kategori Etiketi */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0a0f25]/90 border border-white/10 text-xs font-semibold text-purple-300">
                    {c.category}
                  </div>
                </div>

                {/* Kart İçeriği */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">
                      {c.title}
                    </h3>

                    {/* Başlangıç → Güncel Sıra ve Süre */}
                    <div className="space-y-2.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-4 text-xs sm:text-sm">
                      <div className="flex items-center justify-between text-gray-400">
                        <span>Başlangıç:</span>
                        <span className="text-red-400/90 font-medium">
                          {c.initialRank}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-gray-200">
                        <span className="font-medium">Güncel Sıra:</span>
                        <span className="text-emerald-400 font-bold">
                          {c.currentRank}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-gray-400 border-t border-white/5 pt-2">
                        <span>Süre & Sonuç:</span>
                        <span className="text-purple-300 font-semibold">
                          {c.duration}
                        </span>
                      </div>
                    </div>

                    {/* 1 Cümle Yöntem */}
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                      <span className="text-gray-400 font-medium">Yöntem: </span>
                      {c.method}
                    </p>

                    {/* GEO Kartı İçin geoMeasurement doluysa render et, boşsa hiç render etme */}
                    {c.id === "geo" && SITE_CONFIG.geoMeasurement ? (
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono text-center">
                        {SITE_CONFIG.geoMeasurement}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Altta /basari-hikayeleri linki */}
        <div className="text-center">
          <Link
            href="/basari-hikayeleri"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 hover:border-white/25 transition-all group"
          >
            <span>Tüm Vaka Analizlerini ve Metrikleri İncele</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
