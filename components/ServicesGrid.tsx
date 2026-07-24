"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Settings, FileText, Link2, ArrowRight } from "lucide-react";

const services = [
  {
    id: "ai-seo",
    title: "Yapay Zeka SEO",
    description: "SEO stratejinizi optimize etmek için yapay zeka ve makine öğreniminden yararlanın. Yapay zeka destekli anahtar kelime araştırması, içerik optimizasyonu ve tahmine dayalı analizler.",
    icon: Brain,
    href: "/seo-hizmetleri/yapay-zeka-seo",
    gradient: "from-blue-500 to-cyan-500",
    features: ["YZ Anahtar Kelime Araştırması", "İçerik Optimizasyonu", "Tahmine Dayalı Analiz"],
  },
  {
    id: "technical-seo",
    title: "Teknik SEO",
    description: "Kapsamlı teknik denetimler ve optimizasyonlar. Arama motorlarının sitenize verimli bir şekilde erişmesini ve anlamasını sağlamak için site hızı, taranabilirlik, dizine eklenebilirlik ve önemli web verileri.",
    icon: Settings,
    href: "/seo-hizmetleri/teknik-seo",
    gradient: "from-purple-500 to-pink-500",
    features: ["Site Denetimleri", "Önemli Web Verileri", "Şema İşaretlemesi"],
  },
  {
    id: "on-page",
    title: "Site İçi SEO",
    description: "Maksimum arama görünürlüğü için sayfalarınızdaki her bir öğeyi optimize edin. Meta etiketler, başlıklar, içerik yapısı ve site içi linkleme stratejileri.",
    icon: FileText,
    href: "/seo-hizmetleri/sayfa-ici-seo",
    gradient: "from-green-500 to-emerald-500",
    features: ["İçerik Optimizasyonu", "Meta Etiketler", "Site İçi Linkleme"],
  },
  {
    id: "off-page",
    title: "Site Dışı SEO",
    description: "Stratejik link inşası, marka bahsetmeleri ve ilişki geliştirme yoluyla otorite ve güvenilirlik oluşturun. Sıralamaları artıran kaliteli geri bağlantılar.",
    icon: Link2,
    href: "/seo-hizmetleri/sayfa-disi-seo",
    gradient: "from-orange-500 to-red-500",
    features: ["Link İnşası", "Marka Bahsetmeleri", "Otorite Oluşturma"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              SEO Hizmetlerim
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            İşinizin ihtiyaçlarına özel kapsamlı çözümler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={service.href}>
                  <div className="glass-strong p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 h-full group cursor-pointer">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 glass text-xs font-medium text-gray-300 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-blue-400 font-semibold group-hover:gap-3 transition-all">
                      Daha Fazla Bilgi
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}






