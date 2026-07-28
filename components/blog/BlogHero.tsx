"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#211b39]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#211b39] via-[#1a152e] to-[#211b39]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-blue-400 mb-6 border border-blue-500/20">
            <FileText className="w-4 h-4" />
            Blog
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              SEO Blogu
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            SEO, dijital pazarlama ve web geliştirme hakkında güncel makaleler, ipuçları ve rehberler.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
