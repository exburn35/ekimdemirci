import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function HomeHero() {
  const photoPath = path.join(process.cwd(), "public", "ekim-demirci.webp");
  const hasPhoto = fs.existsSync(photoPath);

  return (
    <section className="relative bg-[#0a0f25] border-b border-white/5 pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Sol Kolon */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* H1 Headline (En fazla 2 satır, ~56-64px) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-bold text-white tracking-tight leading-[1.12] mb-6">
              SEO ve GEO Danışmanı{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Ekim Demirci
              </span>
            </h1>

            {/* 2 Cümle (freelance SEO uzmanı ifadesi içeren açıklama) */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Arama motorlarında ve üretken yapay zeka yanıtlarında işletmenizin görünürlüğünü kalıcı olarak artıran bağımsız danışmanlık hizmeti sunuyorum. Deneyimli bir freelance SEO uzmanı olarak, veri odaklı semantik stratejiler ve doğrudan iletişimle markanızı dijitalde zirveye taşıyorum.
            </p>

            {/* CTA Butonları: /#analiz ve /#vakalar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <Link
                href="/#analiz"
                className="px-7 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold text-base text-center hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:scale-[1.02] flex items-center justify-center gap-2 group"
              >
                Ücretsiz SEO Analizi Al
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#vakalar"
                className="px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/15 rounded-full font-semibold text-base text-center transition-all duration-300 hover:border-white/30"
              >
                Vaka Analizlerini Gör
              </Link>
            </div>

            {/* 3 Kısa Güven Maddesi (ikonlu, tek satır) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Doğrudan İletişim (Aracı Yok)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <Zap className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Google & AI (GEO) Odaklı</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Şeffaf Aylık Raporlama</span>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Fotoğraf Kartı veya Baş Harfli (ED) Şık Avatar Fallback'i */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl group flex items-center justify-center">
              {hasPhoto ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f25] via-transparent to-transparent z-10 opacity-70" />
                  <Image
                    src="/ekim-demirci.webp"
                    alt="SEO ve GEO Danışmanı Ekim Demirci"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                    priority
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </>
              ) : (
                /* Baş Harfli (ED) Şık Avatar Fallback */
                <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center select-none">
                  <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-1 shadow-[0_0_40px_rgba(139,92,246,0.4)] mb-6 flex items-center justify-center">
                    <div className="w-full h-full rounded-[22px] bg-[#0a0f25] flex items-center justify-center">
                      <span className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        ED
                      </span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    Ekim Demirci
                  </div>
                  <div className="text-sm font-semibold text-purple-300">
                    SEO & GEO Danışmanı
                  </div>
                </div>
              )}

              {/* Fotoğraf kartı üzerindeki alt rozet */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-2xl bg-[#0a0f25]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">Ekim Demirci</div>
                  <div className="text-xs text-gray-400">SEO & GEO Danışmanı</div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
