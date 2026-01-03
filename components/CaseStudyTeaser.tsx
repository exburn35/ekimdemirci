"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function CaseStudyTeaser() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 md:p-12 overflow-hidden relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-blue-400 font-semibold uppercase tracking-wider">
                Featured Case Study
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                How We Increased Organic Traffic by 250%
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              Discover how strategic SEO implementation transformed a client&apos;s online presence,
              resulting in significant traffic growth and improved search rankings.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass p-6 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">+250%</div>
                <div className="text-sm text-gray-400">Organic Traffic Growth</div>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">Top 3</div>
                <div className="text-sm text-gray-400">Average Ranking Position</div>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">+180%</div>
                <div className="text-sm text-gray-400">ROI Improvement</div>
              </div>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 group"
            >
              View Full Case Study
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

