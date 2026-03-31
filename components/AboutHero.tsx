"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-[#0a0f25]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center border-b border-white/5">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f25] via-[#111836] to-[#0a0f25]" />
        
        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />

        <motion.div
          style={{ scale, opacity, y }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-extrabold mb-6 tracking-tighter">
              <span className="text-white block leading-none">
                Ben Kimim?
              </span>
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent block mt-2 pb-4 leading-none">
                Ekim Demirci
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto font-medium mt-8">
              Markaların dijital mükemmelliğe ulaşmasına yardımcı olan, 5+ yıllık deneyime sahip SEO Uzmanı & Danışmanı
            </p>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator overlay */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 text-purple-600 flex flex-col items-center gap-2"
        >
          <span className="text-sm font-semibold uppercase tracking-widest">Aşağı Kaydır</span>
          <div className="w-px h-12 bg-gradient-to-b from-purple-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}






