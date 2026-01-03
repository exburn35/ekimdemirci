"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, Globe, Users } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "2020",
    label: "Professional Sector Entry",
    description: "Started my journey in digital marketing",
  },
  {
    icon: Briefcase,
    value: "15+",
    label: "Different Sectors",
    description: "Experience across diverse industries",
  },
  {
    icon: Globe,
    value: "15+",
    label: "Countries Consulted",
    description: "International SEO expertise",
  },
  {
    icon: Users,
    value: "200+",
    label: "Clients Consulted",
    description: "Successful projects delivered",
  },
];

export default function StatsSection() {
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
              Experience & Results
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-strong p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-300 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


