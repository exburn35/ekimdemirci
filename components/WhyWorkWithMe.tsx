"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Settings, Zap } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Stratejik Çalışma",
    description: "Ön araştırmaların ardından size en uygun ve sizi pazarda rekabet edebilir duruma getirecek stratejiler geliştiriyorum.",
    icon: Target,
  },
  {
    number: "02",
    title: "Organik Büyüme",
    description: "Arama motorlarında gerçek otorite ve güven oluşturan sürdürülebilir, uzun vadeli büyüme stratejileri.",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "Web Sitesi Optimizasyonu",
    description: "Sitenizin en yüksek potansiyelinde performans göstermesini sağlamak için kapsamlı teknik ve sayfa içi optimizasyonlar.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Organik Trafik Artışı",
    description: "Organik arama görünürlüğünüzü ve ziyaretçi sayılarınızı önemli ölçüde artırmak için veri odaklı yaklaşımlar.",
    icon: Zap,
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
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
              Neden Benimle Çalışmalısınız?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ölçülebilir sonuçlar veren kanıtlanmış bir yaklaşım
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-strong p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-blue-400">{reason.number}</span>
                      <h3 className="text-2xl font-bold text-white">{reason.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}






