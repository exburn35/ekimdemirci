"use client";

import { motion } from "framer-motion";
import { Search, CheckCircle2, BarChart3, FileText, Clock, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const auditFeatures = [
  {
    icon: Search,
    title: "Kapsamlı Analiz",
    description: "Web sitenizin tüm SEO faktörlerini detaylı şekilde analiz ediyoruz",
  },
  {
    icon: BarChart3,
    title: "Teknik SEO Kontrolü",
    description: "Site hızı, mobil uyumluluk ve teknik SEO sorunlarını tespit ediyoruz",
  },
  {
    icon: FileText,
    title: "Detaylı Rapor",
    description: "48 saat içinde kapsamlı bir SEO audit raporu hazırlıyoruz",
  },
  {
    icon: Clock,
    title: "Hızlı Sonuç",
    description: "Hızlı analiz ve öncelikli öneriler ile hemen harekete geçin",
  },
];

const auditChecklist = [
  "Teknik SEO analizi",
  "Site hızı ve performans kontrolü",
  "Mobil uyumluluk testi",
  "Anahtar kelime araştırması",
  "İçerik kalitesi değerlendirmesi",
  "Backlink analizi",
  "Rakip analizi",
  "Core Web Vitals kontrolü",
  "Schema markup kontrolü",
  "Yerel SEO değerlendirmesi",
];

export default function AuditRequest() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-blue-400 mb-6">
              <Search className="w-4 h-4" />
              Ücretsiz SEO Audit
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                SEO Audit Talebi
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Web sitenizin SEO durumunu ücretsiz analiz edin. Detaylı rapor ve öncelikli öneriler 
              ile iyileştirme fırsatlarını keşfedin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
                Audit Kapsamı
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Web sitenizi kapsamlı şekilde analiz ediyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {auditFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-strong p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Audit Raporunda Yer Alan Analizler
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {auditChecklist.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {[
              {
                step: "1",
                title: "Formu Doldurun",
                description: "Aşağıdaki formu doldurarak SEO audit talebinizi oluşturun. Web sitenizin URL'sini ve temel bilgilerinizi paylaşın.",
              },
              {
                step: "2",
                title: "Analiz Yapıyoruz",
                description: "Web sitenizi kapsamlı şekilde analiz ediyoruz. Teknik SEO, içerik, backlink ve performans metriklerini inceliyoruz.",
              },
              {
                step: "3",
                title: "Rapor Hazırlanıyor",
                description: "48 saat içinde detaylı bir SEO audit raporu hazırlıyoruz. Rapor, bulgular, öncelikli öneriler ve iyileştirme planını içerir.",
              },
              {
                step: "4",
                title: "Raporu Alıyorsunuz",
                description: "Hazırlanan raporu e-posta adresinize gönderiyoruz. Raporu inceleyebilir ve önerileri uygulamaya başlayabilirsiniz.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-strong p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-white text-lg">
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

      {/* Contact Form Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Audit Talebinizi Oluşturun
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Formu doldurun, 48 saat içinde detaylı SEO audit raporunuzu alın
            </p>
          </motion.div>
          <ContactForm
            title=""
            description=""
            showTitle={false}
          />
        </div>
      </section>
    </>
  );
}

