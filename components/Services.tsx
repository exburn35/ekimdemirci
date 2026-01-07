"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, FileText, Target, Zap, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Technical SEO",
    description: "Comprehensive audits, site speed optimization, and technical infrastructure improvements.",
  },
  {
    icon: BarChart3,
    title: "SEO Analytics",
    description: "Data-driven insights and performance tracking to measure and improve your SEO ROI.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description: "Keyword research and content optimization that ranks and converts.",
  },
  {
    icon: Target,
    title: "Local SEO",
    description: "Dominate local search results and attract customers in your area.",
  },
  {
    icon: Zap,
    title: "Link Building",
    description: "Strategic outreach and relationship building for high-quality backlinks.",
  },
  {
    icon: TrendingUp,
    title: "SEO Consulting",
    description: "Expert guidance and strategy development tailored to your business goals.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
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
              Comprehensive SEO Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            End-to-end SEO solutions designed to elevate your search presence and drive sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-strong p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}





