"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, FileSearch, TrendingUp, Activity } from "lucide-react";

const tools = [
  { name: "SEMrush", icon: Search, description: "Comprehensive SEO toolkit" },
  { name: "Screaming Frog", icon: FileSearch, description: "Technical SEO crawler" },
  { name: "Ahrefs", icon: TrendingUp, description: "Backlink analysis & research" },
  { name: "Google Search Console", icon: BarChart3, description: "Search performance insights" },
  { name: "Google Analytics 4", icon: Activity, description: "Advanced data analytics" },
];

export default function ToolsSection() {
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
              Tools I Use
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Industry-leading tools to deliver exceptional SEO results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-strong p-6 rounded-2xl text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-400">{tool.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}






