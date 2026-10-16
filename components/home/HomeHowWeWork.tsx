import { Search, Compass, Cog, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analiz",
    desc: "Mevcut web sitenizin teknik altyapısını, Core Web Vitals metriklerini, dizinleme hatalarını ve yapay zeka motorlarındaki ilk görünürlük durumunu derinlemesine denetliyorum.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Strateji & Yol Haritası",
    desc: "Sektörel rekabet, arama niyetine uygun anahtar kelimeler ve semantik varlık (Entity) haritası doğrultusunda ilk 3-6 aylık somut eylem planını çıkarıyorum.",
  },
  {
    number: "03",
    icon: Cog,
    title: "Uygulama",
    desc: "Sayfa içi semantik içerik kurgusu, teknik kod ve şema (Schema.org) entegrasyonları, bilgi grafiği yapılandırması ve doğal otorite inşasını hayata geçiriyorum.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Ölçüm & Aylık Rapor",
    desc: "Google Search Console, GA4 ve yapay zeka yanıt araçları üzerinden organik sıralama, tıklama ve AI alıntılanma verilerini her ay şeffaf biçimde raporluyorum.",
  },
];

export default function HomeHowWeWork() {
  return (
    <section className="bg-[#0d153a] border-b border-white/5 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Birlikte Nasıl Çalışıyoruz?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Belirsizlikleri ortadan kaldıran, adım adım kurgulanmış şeffaf ve sonuç odaklı SEO & GEO çalışma süreci.
          </p>
        </div>

        {/* 4 Adımlık Timeline (Desktop Yatay, Mobil Dikey) */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-purple-500/20 via-blue-500/40 to-emerald-500/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="p-6 rounded-2xl bg-[#0a0f25]/80 border border-white/10 flex flex-col justify-start relative group hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-2xl font-black text-gray-500/60 font-mono">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
