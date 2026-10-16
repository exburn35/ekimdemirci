import { MessageSquare, BarChart, ShieldAlert, Cpu } from "lucide-react";

const reasons = [
  {
    icon: MessageSquare,
    title: "Doğrudan İletişim",
    desc: "Ajanslardaki çok katmanlı yapıların ve müşteri temsilcisi aktarımlarının aksine, projenizin teknik analizini ve stratejisini doğrudan kendim yürütürüm. İhtiyaç anında doğrudan uzmanla görüşür, hızlı aksiyon alırsınız.",
  },
  {
    icon: BarChart,
    title: "Şeffaf Aylık Raporlama",
    desc: "Karmaşık ve göz boyayan metrikler yerine; gerçek organik trafik artışını, anahtar kelime sıralamalarını, dönüşüm oranlarını ve yapay zeka alıntılanma verilerini gösteren sade ve net aylık raporlar sunarım.",
  },
  {
    icon: ShieldAlert,
    title: "Sıralama Garantisi Vermeme İlkesi",
    desc: "Google algoritmalarının sahibi olmayan hiçbir dürüst uzman 1. sıra garantisi veremez. Gerçek dışı boş vaatler yerine; Google yönergelerine tam uyumlu, ceza riski barındırmayan ve kanıtlanmış büyüme metodolojileri uygularım.",
  },
  {
    icon: Cpu,
    title: "SEO + GEO Tek Elden",
    desc: "Hem geleneksel Google arama motoru optimizasyonunu hem de ChatGPT, Perplexity ve Gemini gibi üretken yapay zeka motorlarında görünürlük sağlayan GEO stratejisini tek elden, entegre biçimde yönetirim.",
  },
];

export default function HomeWhyIndependent() {
  return (
    <section className="bg-[#0a0f25] border-b border-white/5 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Neden Ajans Yerine Bağımsız Bir SEO Danışmanı?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Hantal süreçler, stajyerlere devredilen hesaplar ve standart paketler yerine; tamamen işletmenize odaklanan butik, şeffaf ve yüksek verimli bir iş ortaklığı modeli.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
