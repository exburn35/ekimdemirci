"use client";

import { motion } from "framer-motion";
import { Search, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import ServiceLeadForm from "./ServiceLeadForm";

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#020617]">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(2,6,23,1)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Animated Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/25 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.3, 1, 1.3],
          opacity: [0.1, 0.25, 0.1],
          x: [0, -100, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/25 rounded-full blur-[120px]" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-blue-400 mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Kapsamlı SEO Çözümleri
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent block">
                Sonuç Odaklı
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block mt-2">
                SEO Hizmetleri
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed mb-10">
              Yapay zeka destekli optimizasyondan teknik mükemmelliğe kadar, arama görünürlüğünüzü artırmak için uzman stratejiler sunuyorum.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                <span className="text-sm">Veri Odaklı</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-500" />
                <span className="text-sm">Yapay Zeka Destekli</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-pink-500" />
                <span className="text-sm">Global Standartlar</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ServiceLeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}






