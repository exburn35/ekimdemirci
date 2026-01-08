"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import SEOAuditSection from "@/components/SEOAuditSection";
import ContactForm from "@/components/ContactForm";

const successStories = [
  {
    company: "E-Ticaret Mağazası",
    sector: "E-Ticaret",
    period: "6 Ay",
    results: [
      "Organik trafik %250 arttı",
      "Dönüşüm oranı %180 arttı",
      "Anahtar kelime sıralamaları %300 iyileşti",
      "Aylık gelir %200 arttı",
    ],
    gradient: "from-purple-500 to-pink-500",
    icon: TrendingUp,
  },
  {
    company: "Diş Hekimi Kliniği",
    sector: "Sağlık",
    period: "4 Ay",
    results: [
      "Yerel aramalarda 1. sıraya çıktı",
      "Randevu sayısı %150 arttı",
      "Google My Business görünürlüğü %300 arttı",
      "Hasta yorumları %200 arttı",
    ],
    gradient: "from-blue-500 to-cyan-500",
    icon: Users,
  },
  {
    company: "Hukuk Bürosu",
    sector: "Hukuk",
    period: "8 Ay",
    results: [
      "Organik trafik %180 arttı",
      "Müvekkil başvuruları %120 arttı",
      "Anahtar kelime sıralamaları %250 iyileşti",
      "Web sitesi otoritesi %200 arttı",
    ],
    gradient: "from-green-500 to-emerald-500",
    icon: Target,
  },
  {
    company: "Güzellik Merkezi",
    sector: "Güzellik & Estetik",
    period: "5 Ay",
    results: [
      "Yerel aramalarda üst sıralarda",
      "Randevu sayısı %130 arttı",
      "Sosyal medya entegrasyonu ile trafik %100 arttı",
      "Müşteri memnuniyeti %150 arttı",
    ],
    gradient: "from-pink-500 to-rose-500",
    icon: Award,
  },
];

const stats = [
  { label: "Mutlu Müşteri", value: "50+", icon: Users },
  { label: "Başarılı Proje", value: "100+", icon: Award },
  { label: "Trafik Artışı", value: "%200+", icon: TrendingUp },
  { label: "Dönüşüm Artışı", value: "%150+", icon: Target },
];

export default function SuccessStories() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Başarı Hikayeleri
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Müşterilerimizin SEO hizmetlerimiz ile elde ettiği başarılar ve gerçek sonuçlar. 
              Siz de bu başarıların bir parçası olun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-strong p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
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
                Gerçek Sonuçlar
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Müşterilerimizin elde ettiği başarılar ve ölçülebilir sonuçlar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => {
              const Icon = story.icon;
              return (
                <motion.div
                  key={story.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-strong rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${story.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{story.company}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{story.sector}</span>
                        <span>•</span>
                        <span>{story.period}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {story.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Siz de Bu Başarıların Bir Parçası Olun
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                SEO hizmetlerimiz ile dijital varlığınızı güçlendirin ve ölçülebilir sonuçlar elde edin.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                Hemen Başlayın
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Audit Section */}
      <SEOAuditSection />

      {/* Contact Form */}
      <ContactForm
        title="Başarı Hikayenizi Birlikte Yazalım"
        description="SEO hizmetlerimiz ile dijital varlığınızı güçlendirin ve ölçülebilir sonuçlar elde edin."
        showTitle={true}
      />
    </>
  );
}

