"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, CheckCircle2, ArrowRight, BarChart3, Zap, Target } from "lucide-react";

const auditFeatures = [
  {
    icon: Search,
    title: "Comprehensive Analysis",
    description: "Deep dive into your website's SEO health and performance metrics.",
  },
  {
    icon: BarChart3,
    title: "Technical Audit",
    description: "Identify and fix technical issues affecting your search rankings.",
  },
  {
    icon: Target,
    title: "Keyword Research",
    description: "Discover high-value keywords and optimization opportunities.",
  },
  {
    icon: Zap,
    title: "Action Plan",
    description: "Receive a detailed roadmap with prioritized recommendations.",
  },
];

export default function SEOAuditSection() {
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-blue-400 mb-6">
                  <Search className="w-4 h-4" />
                  Free SEO Audit
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Get Your Free SEO Audit
                </h2>

                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Discover what&apos;s holding your website back from ranking higher. 
                  Get a comprehensive SEO audit that identifies opportunities for improvement 
                  and provides actionable insights to boost your search visibility.
                </p>

                <div className="space-y-4 mb-8">
                  {auditFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <Link
                  href="/contact?audit=true"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 group"
                >
                  Request Free Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                <div className="glass p-8 rounded-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 glass rounded-xl">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                        <span className="text-white font-medium">Site Speed</span>
                      </div>
                      <span className="text-gray-400 text-sm">Analyzing...</span>
                    </div>

                    <div className="flex items-center justify-between p-4 glass rounded-xl">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                        <span className="text-white font-medium">Mobile Friendly</span>
                      </div>
                      <span className="text-gray-400 text-sm">Analyzing...</span>
                    </div>

                    <div className="flex items-center justify-between p-4 glass rounded-xl">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                        <span className="text-white font-medium">On-Page SEO</span>
                      </div>
                      <span className="text-gray-400 text-sm">Analyzing...</span>
                    </div>

                    <div className="flex items-center justify-between p-4 glass rounded-xl">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                        <span className="text-white font-medium">Backlinks</span>
                      </div>
                      <span className="text-gray-400 text-sm">Analyzing...</span>
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
                      <p className="text-sm text-gray-300 text-center">
                        <strong className="text-white">Comprehensive Report</strong> delivered within 48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}





