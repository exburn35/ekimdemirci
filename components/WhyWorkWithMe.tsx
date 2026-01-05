"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Settings, Zap } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Strategic Work",
    description: "After preliminary research, I develop strategies that are most suitable for you and allow you to compete in the market.",
    icon: Target,
  },
  {
    number: "02",
    title: "Organic Growth",
    description: "Sustainable, long-term growth strategies that build genuine authority and trust with search engines.",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "Website Optimization",
    description: "Comprehensive technical and on-page optimizations to ensure your site performs at its peak potential.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Organic Traffic Increase",
    description: "Data-driven approaches to significantly boost your organic search visibility and visitor numbers.",
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
              Why Work With Me?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven approach that delivers measurable results
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




