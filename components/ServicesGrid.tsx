"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Settings, FileText, Link2, ArrowRight } from "lucide-react";

const services = [
  {
    id: "ai-seo",
    title: "AI SEO",
    description: "Leverage artificial intelligence and machine learning to optimize your SEO strategy. AI-powered keyword research, content optimization, and predictive analytics.",
    icon: Brain,
    href: "/services/ai-seo",
    gradient: "from-blue-500 to-cyan-500",
    features: ["AI Keyword Research", "Content Optimization", "Predictive Analytics"],
  },
  {
    id: "technical-seo",
    title: "Technical SEO",
    description: "Comprehensive technical audits and optimizations. Site speed, crawlability, indexability, and core web vitals to ensure search engines can efficiently access and understand your site.",
    icon: Settings,
    href: "/services/technical-seo",
    gradient: "from-purple-500 to-pink-500",
    features: ["Site Audits", "Core Web Vitals", "Schema Markup"],
  },
  {
    id: "on-page",
    title: "On-Page SEO",
    description: "Optimize every element on your pages for maximum search visibility. Meta tags, headings, content structure, and internal linking strategies.",
    icon: FileText,
    href: "/services/on-page",
    gradient: "from-green-500 to-emerald-500",
    features: ["Content Optimization", "Meta Tags", "Internal Linking"],
  },
  {
    id: "off-page",
    title: "Off-Page SEO",
    description: "Build authority and credibility through strategic link building, brand mentions, and relationship building. Quality backlinks that drive rankings.",
    icon: Link2,
    href: "/services/off-page",
    gradient: "from-orange-500 to-red-500",
    features: ["Link Building", "Brand Mentions", "Authority Building"],
  },
];

export default function ServicesGrid() {
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
              Our SEO Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={service.href}>
                  <div className="glass-strong p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 h-full group cursor-pointer">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 glass text-xs font-medium text-gray-300 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-blue-400 font-semibold group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}






