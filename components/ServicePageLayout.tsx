"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Brain, Settings, FileText, Link2, Sparkles } from "lucide-react";
import SEOAuditSection from "./SEOAuditSection";
import ContactForm from "./ContactForm";
import RelatedBlogPosts from "./RelatedBlogPosts";
import RelatedPages from "./RelatedPages";
import ServiceSchema from "./schemas/ServiceSchema";
import ServiceLeadForm from "./ServiceLeadForm";

const iconMap = {
  Brain,
  Settings,
  FileText,
  Link2,
};

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: keyof typeof iconMap;
  gradient: string;
  features: string[];
  benefits: { title: string; description: string }[];
  process?: { step: string; title: string; description: string }[];
  blogCategory?: string;
  children?: ReactNode;
  afterHeroNode?: ReactNode;
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  icon,
  gradient,
  features,
  benefits,
  process,
  blogCategory,
  children,
  afterHeroNode,
}: ServicePageLayoutProps) {
  const Icon = iconMap[icon];
  const pathname = usePathname();
  const fullUrl = `https://ekimdemirci.com${pathname || ""}`;

  return (
    <>
      <ServiceSchema name={title} description={description} url={fullUrl} />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#020617]">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(2,6,23,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" 
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Link
                href="/seo-hizmetleri"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 text-gray-400 hover:text-white mb-8 transition-all duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Hizmetlere Dön
              </Link>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-blue-400 uppercase tracking-widest mb-6"
              >
                <Sparkles className="w-3 h-3" />
                {subtitle}
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                  {title}
                </span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-xl">
                {description}
              </p>

              <div className="flex flex-wrap gap-4">
                {features.slice(0, 3).map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-500/50" />
                    {feature}
                  </div>
                ))}
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

      {afterHeroNode}

      {/* Features Section */}
      <section className="py-24 bg-[#0a0f25] border-t border-white/5">
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
                Özellikler
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#111836] border border-white/5 p-6 rounded-xl hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#0a0f25] border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none" />
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
                Avantajlar
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Bu hizmetten neler kazanacaksınız?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#111836] border border-white/5 p-8 rounded-2xl hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {process && (
        <section className="py-24 bg-[#0a0f25] border-t border-white/5">
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
                  Süreç Nasıl İşliyor?
                </span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-[#111836] border border-white/5 p-8 rounded-2xl hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-white text-lg`}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom Content */}
      {children}

      {/* SEO Audit Section */}
      <SEOAuditSection />

      {/* Contact Form Section */}
      <ContactForm
        title="SEO'nuzu Dönüştürmeye Hazır mısınız?"
        description="Arama sıralamalarınızı nasıl iyileştirebileceğimizi ve daha fazla organik trafik çekebileceğimizi konuşmak için aşağıdaki formu doldurun."
        showTitle={true}
      />

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0f25] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#111836] border border-purple-500/20 shadow-[0_0_30px_rgba(139,92,246,0.1)] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Hemen Başlamaya Hazır mısınız?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                {title} hizmetimiz ile arama görünürlüğünüzü nasıl dönüştürebileceğimizi konuşalım.
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                İletişime Geçin
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Related Blog Posts */}
      {blogCategory && <RelatedBlogPosts category={blogCategory} />}

      {/* Related Pages */}
      <RelatedPages />

      {/* CTA Section */}
    </>
  );
}

