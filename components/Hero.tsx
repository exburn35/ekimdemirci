"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Search, BarChart3 } from "lucide-react";
import Link from "next/link";
import Globe from "./magicui/Globe";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const stats = [
  { label: "Trafik Artışı", value: "+250%", icon: TrendingUp },
  { label: "Ortalama Sıra", value: "İlk 3", icon: Search },
  { label: "ROI İyileşmesi", value: "+180%", icon: BarChart3 },
];

export default function Hero() {
  return (
    <section className="relative min-h-[120vh] flex flex-col items-center pt-24 md:pt-32 overflow-hidden bg-[#0a0f25]">
      {/* Dark Space Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#111836] via-[#0a0f25] to-black z-0" />
      
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)] z-0" />
      
      {/* Animated Gradient Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center w-full max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center px-5 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-xl text-sm font-bold text-blue-200 mb-8 shadow-[0_0_20px_rgba(59,130,246,0.2)] animate-pulse-slow">
              <span className="w-2.5 h-2.5 bg-blue-400 rounded-full mr-3 shadow-[0_0_12px_#60a5fa] animate-ping" />
              Sınırlı Kontenjan ile Yeni Projeler Kabul Ediyorum
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold mb-6 leading-tight text-white tracking-tight"
          >
            Algoritmaların Ötesinde,<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Gerçek Organik Büyüme</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Ben Ekim Demirci. Yapay zeka destekli GEO (Generative Engine Optimization) ve semantik SEO stratejileriyle, web sitenizin arama görünürlüğünü ve dönüşümlerini birinci şahıs uzmanlığıyla sürdürülebilir şekilde artırıyorum.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 relative z-30"
          >
             <Link
              href="/iletisim"
              className="group px-8 py-4 bg-gradient-to-r from-emerald-400 to-green-500 text-black rounded-full font-bold text-lg hover:from-emerald-300 hover:to-green-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] flex items-center gap-2"
            >
              Benimle Başlayın
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/iletisim"
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-semibold text-lg text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              SEO Danışmanlığı Al
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* The Animated Globe overlapping the bottom */}
      <div className="relative w-full flex-grow min-h-[500px] flex items-end justify-center z-10">
         <Globe />
         
         {/* Stats overlapping the globe slightly */}
         <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-32 left-0 right-0 z-30 hidden md:flex justify-center gap-12 px-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex flex-col items-center text-center">
                   <div className="text-3xl font-bold text-white mb-1 shadow-black drop-shadow-lg">{stat.value}</div>
                   <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 flex items-center gap-1">
                     <Icon className="w-3 h-3" />
                     {stat.label}
                   </div>
                </div>
              );
            })}
          </motion.div>
      </div>

      {/* Smooth gradient transition into the dark theme of the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0f25] to-transparent z-20 pointer-events-none" />
    </section>
  );
}

