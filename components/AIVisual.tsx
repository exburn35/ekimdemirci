"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Database, Globe, Network, Search, Zap } from "lucide-react";

export default function AIVisual() {
  const nodeVariants = {
    animate: (i: number) => ({
      y: [0, -15, 0],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2,
      },
    }),
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const reverseOrbitVariants = {
    animate: {
      rotate: -360,
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-[#050B14] rounded-2xl border border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      {/* Pulsing Core Glow */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-purple-600/20 blur-[60px]"
      />
      <motion.div
        variants={pulseVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-blue-500/20 blur-[50px]"
      />

      {/* Central Node */}
      <div className="relative z-20 flex items-center justify-center">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.2)]">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg relative overflow-hidden">
            {/* Shimmer effect inside the core */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />
            <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
        </div>
      </div>

      {/* Outer Orbit 1 */}
      <motion.div
        variants={orbitVariants}
        animate="animate"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] border border-dashed border-white/10 rounded-full z-10"
      >
        <motion.div custom={0} variants={nodeVariants} animate="animate" className="absolute -top-6 left-1/2 -translate-x-1/2">
          <div className="w-12 h-12 rounded-xl bg-[#0a0f25] border border-purple-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.15)] group hover:scale-110 transition-transform cursor-pointer">
            <Search className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
          </div>
        </motion.div>
        
        <motion.div custom={1} variants={nodeVariants} animate="animate" className="absolute -bottom-6 left-1/2 -translate-x-1/2">
          <div className="w-12 h-12 rounded-xl bg-[#0a0f25] border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)] group hover:scale-110 transition-transform cursor-pointer">
            <Database className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
          </div>
        </motion.div>
      </motion.div>

      {/* Outer Orbit 2 */}
      <motion.div
        variants={reverseOrbitVariants}
        animate="animate"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] border border-white/5 rounded-full z-10"
      >
        <motion.div custom={2} variants={nodeVariants} animate="animate" className="absolute top-1/2 -left-5 -translate-y-1/2">
          <div className="w-10 h-10 rounded-full bg-[#0a0f25] border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)] group hover:scale-110 transition-transform cursor-pointer">
            <Network className="w-4 h-4 text-emerald-400" />
          </div>
        </motion.div>

        <motion.div custom={3} variants={nodeVariants} animate="animate" className="absolute top-1/2 -right-5 -translate-y-1/2">
          <div className="w-10 h-10 rounded-full bg-[#0a0f25] border border-pink-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.15)] group hover:scale-110 transition-transform cursor-pointer">
            <Cpu className="w-4 h-4 text-pink-400" />
          </div>
        </motion.div>
      </motion.div>

      {/* Flying Data Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [
              Math.random() * 400 - 200, 
              0, 
            ],
            y: [
              Math.random() * 400 - 200, 
              0, 
            ],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
          className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full z-30 ${i % 2 === 0 ? 'bg-purple-400' : 'bg-blue-400'} shadow-[0_0_10px_currentColor]`}
          style={{
            marginLeft: '-4px',
            marginTop: '-4px'
          }}
        />
      ))}

      {/* Bottom Label overlay */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40">
        <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <p className="text-white text-sm font-semibold flex items-center gap-2">
            <Zap className="w-4 h-4 text-purple-400 fill-purple-400/20" />
            Yapay Zeka SEO Süreci
          </p>
        </div>
      </div>
    </div>
  );
}
