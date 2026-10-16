import Link from "next/link";
import { 
  TrendingUp, 
  Sparkles, 
  Search, 
  FileText, 
  Zap, 
  Layers, 
  ArrowRight 
} from "lucide-react";

const serviceCards = [
  {
    icon: TrendingUp,
    title: "SEO Danışmanlığı",
    desc: "Mevcut dijital varlığınızı uçtan uca analiz ederek işletmenize özel organik büyüme ve dönüşüm yol haritaları oluşturuyorum.",
    href: "/seo-hizmetleri",
  },
  {
    icon: Sparkles,
    title: "GEO Danışmanlığı",
    desc: "Sitenizi ChatGPT, Perplexity ve Gemini gibi üretken yapay zeka arama motorlarının tavsiye ettiği birincil bilgi kaynağı yapıyorum.",
    href: "/geo-danismanligi",
  },
  {
    icon: Search,
    title: "Teknik SEO",
    desc: "Google botlarının kusursuz tarama yapması için Core Web Vitals, site mimarisi, indeksleme ve yapılandırılmış veri optimizasyonu sağlıyorum.",
    href: "/seo-hizmetleri/teknik-seo",
  },
  {
    icon: FileText,
    title: "Site İçi & Semantik İçerik",
    desc: "Kullanıcı arama niyetine odaklı varlık (Entity) haritaları ve semantik içerik kurgusuyla doğrudan dönüşüm getiren sayfalar inşa ediyorum.",
    href: "/seo-hizmetleri/sayfa-ici-seo",
  },
  {
    icon: Zap,
    title: "Site Dışı SEO",
    desc: "Sektörünüzün en saygın otoritelerinden doğal ve stratejik bağlantılar (backlink) kazanarak alan adı güvenilirliğinizi kalıcı olarak yükseltiyorum.",
    href: "/seo-hizmetleri/sayfa-disi-seo",
  },
  {
    icon: Layers,
    title: "Sektörel SEO",
    desc: "E-ticaret, sağlık, kurumsal B2B ve yerel işletmelerin sektörel dinamiklerine ve rekabet koşullarına göre özelleştirilmiş çözümler sunuyorum.",
    href: "/sektorel-seo-hizmetleri",
  },
];

export default function HomeWhatSeoDoes() {
  return (
    <section className="bg-[#0a0f25] border-b border-white/5 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık ve Doğrudan Cevap Paragrafı */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">
            SEO Danışmanı Ne Yapar?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Bir SEO danışmanı; web sitenizin Google, Yandex ve yapay zeka motorlarında üst sıralara çıkması için teknik altyapıyı, semantik içerik mimarisini ve site dışı otoriteyi optimize eder. Hedef kitlenizin arama niyetini analiz ederek organik trafiği nitelikli müşterilere ve doğrudan satışa dönüştüren uçtan uca stratejiler uygular.
          </p>
        </div>

        {/* 3x2 Kart Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5 group-hover:bg-purple-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-6">
                    {card.desc}
                  </p>
                </div>
                <div className="flex items-center text-sm font-semibold text-purple-400 group-hover:text-purple-300 gap-1.5 transition-colors mt-auto pt-2 border-t border-white/5">
                  <span>Detaylı Bilgi</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
