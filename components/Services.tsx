"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BarChart3, FileText, Target, Zap, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Search,
    title: "Teknik SEO",
    expandedTitle: "Teknik SEO ile Kusursuz Altyapı",
    description: "Kapsamlı denetimler, site hızı optimizasyonu ve teknik altyapı iyileştirmelerini içeren bu hizmet, web sitenizin arama motorları tarafından mükemmel şekilde taranmasını ve dizine eklenmesini sağlar.",
    href: "/seo-hizmetleri/teknik-seo"
  },
  {
    icon: BarChart3,
    title: "SEO Analitiği",
    expandedTitle: "SEO Analitiği ile Stratejinizi Ölçün",
    description: "Veri odaklı içgörüler ile SEO yarışında öne geçin. Yatırım getirinizi ölçmek ve stratejilerinizi sürekli iyileştirmek için derinlemesine performans takibi sunuyoruz.",
    href: "/seo-hizmetleri"
  },
  {
    icon: FileText,
    title: "İçerik Stratejisi",
    expandedTitle: "İçerik Stratejisiyle Dönüşüm Sağlayın",
    description: "Kullanıcıların ve arama motorlarının sevdiği içerikler oluşturun. Sadece sıralama alan değil, aynı zamanda dönüşüm sağlayan anahtar kelime araştırması ve içerik optimizasyonu yapıyoruz.",
    href: "/seo-hizmetleri/sayfa-ici-seo"
  },
  {
    icon: Target,
    title: "Yerel SEO",
    expandedTitle: "Yerel SEO ile Yakınınızda Bulunun",
    description: "Bölgenizdeki rekabeti geride bırakın. Yerel arama sonuçlarında hakimiyet kurarak yakınınızdaki potansiyel müşterilerin sizi anında bulmasını ve tercih etmesini sağlayın.",
    href: "/sektorel-seo-hizmetleri"
  },
  {
    icon: Zap,
    title: "Link İnşası",
    expandedTitle: "Link İnşasıyla Otoritenizi Artırın",
    description: "Sektörünüzde otorite olun. Yüksek kaliteli, güvenilir kaynaklardan gelen stratejik bağlantılar ile web sitenizin gücünü ve arama görünürlüğünü sürdürülebilir şekilde artırın.",
    href: "/seo-hizmetleri/sayfa-disi-seo"
  },
  {
    icon: TrendingUp,
    title: "SEO Danışmanlığı",
    expandedTitle: "SEO Danışmanlığı ile Şirketinizi Büyütün",
    description: "Mevcut dijital varlığınızı analiz ederek, işletmenize özgü, büyüme odaklı ve kanıtlanmış bir SEO stratejisi için birlikte çalışalım.",
    href: "/iletisim"
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 overflow-hidden relative border-t border-white/5 mt-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent skew-x-12 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            Kapsamlı <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SEO Hizmetleri</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            Arama varlığınızı yükseltmek ve sürdürülebilir büyüme sağlamak için tasarlanmış uçtan uca etkileşimli SEO çözümleri.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Tabs Menu (Left Side) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {services.map((service, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={service.title}
                  onClick={() => setActiveTab(index)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 relative overflow-hidden group border ${
                    isActive 
                      ? "bg-[#111836] shadow-[0_0_20px_rgba(139,92,246,0.15)] border-purple-500/30" 
                      : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-purple-500 to-indigo-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="flex items-center gap-4">
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${isActive ? "text-purple-400" : "text-gray-400 group-hover:text-white"}`}>
                      {service.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display (Right Side) */}
          <div className="lg:col-span-7 bg-[#111836] rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(139,92,246,0.1)] border border-purple-500/20 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl opacity-50 -z-0" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10"
              >
                {(() => {
                  const activeService = services[activeTab];
                  const Icon = activeService.icon;
                  return (
                    <>
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/30">
                        <Icon className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
                        {activeService.expandedTitle}
                      </h3>
                      <p className="text-lg text-gray-400 leading-relaxed mb-8">
                        {activeService.description}
                      </p>
                      
                      <Link 
                        href={activeService.href}
                        className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors group bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-purple-500/30"
                      >
                         Daha fazla bilgi edinin
                         <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}






