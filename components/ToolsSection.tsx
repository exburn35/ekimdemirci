"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, FileSearch, TrendingUp, Activity } from "lucide-react";

const tools = [
  { name: "SEMrush", logo: "/semrush-logo.png", description: "Kapsamlı SEO araç seti" },
  { name: "Screaming Frog", logo: "/screaming-frog-logo.png", description: "Teknik SEO tarayıcısı" },
  { name: "Ahrefs", logo: "/ahrefs-logo.png", description: "Backlink analizi & araştırması" },
  { name: "Google Search Console", logo: "/google-search-console.webp", description: "Arama performansı içgörüleri" },
  { name: "Google Analytics 4", logo: "/google-analytics-4-logo.webp", description: "Gelişmiş veri analitiği" },
];

export default function ToolsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-canvas to-canvas-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-ink">
              Kullandığım Araçlar
            </span>
          </h2>
          <p className="text-xl text-ink-muted">
            Olağanüstü SEO sonuçları sunmak için sektör lideri araçlar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => {
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-strong p-6 rounded-2xl text-center hover:bg-ink/5 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white border border-line rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`} 
                    className="w-10 h-10 object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{tool.name}</h3>
                <p className="text-sm text-ink-muted">{tool.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}






