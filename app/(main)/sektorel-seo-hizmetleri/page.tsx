import { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Stethoscope, 
  ShoppingCart, 
  Scale, 
  Sparkles, 
  UserMd, 
  Building2,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import SEOAuditSection from "@/components/SEOAuditSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Sektörel SEO Hizmetleri | Ekim Demirci",
  description: "Sektörünüze özel SEO hizmetleri. Diş hekimleri, avukatlar, doktorlar, hastaneler, e-ticaret ve güzellik merkezleri için özelleştirilmiş SEO çözümleri.",
  openGraph: {
    title: "Sektörel SEO Hizmetleri | Ekim Demirci",
    description: "Sektörünüze özel SEO hizmetleri ile dijital varlığınızı güçlendirin.",
  },
};

const sectors = [
  {
    title: "Diş Hekimleri için SEO",
    description: "Diş hekimi klinikleriniz için özelleştirilmiş SEO stratejileri ile daha fazla hasta kazanın.",
    icon: Stethoscope,
    href: "/sektorel-seo-hizmetleri/dis-hekimleri-icin-seo-2",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "E-Ticaret SEO",
    description: "Online mağazanız için teknik ve içerik SEO optimizasyonu ile satışlarınızı artırın.",
    icon: ShoppingCart,
    href: "/sektorel-seo-hizmetleri/e-ticaret-seo",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Avukatlar için SEO",
    description: "Hukuk bürolarınız için yerel ve ulusal SEO hizmetleri ile potansiyel müvekkillerinize ulaşın.",
    icon: Scale,
    href: "/sektorel-seo-hizmetleri/avukatlar-icin-seo-hizmeti",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Güzellik Merkezleri için SEO",
    description: "Güzellik ve estetik merkezleriniz için SEO ile müşteri portföyünüzü genişletin.",
    icon: Sparkles,
    href: "/sektorel-seo-hizmetleri/guzellik-merkezleri-icin-seo-2",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Doktorlar için SEO",
    description: "Tıp doktorları ve uzman hekimler için özelleştirilmiş SEO hizmetleri.",
    icon: UserMd,
    href: "/sektorel-seo-hizmetleri/doktorlar-icin-seo-2",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Hastaneler için SEO",
    description: "Hastaneler ve sağlık kuruluşları için kapsamlı SEO çözümleri.",
    icon: Building2,
    href: "/sektorel-seo-hizmetleri/hastaneler-icin-seo-2",
    gradient: "from-indigo-500 to-blue-500",
  },
];

const benefits = [
  "Sektöre özel anahtar kelime araştırması",
  "Rakip analizi ve benchmarking",
  "Yerel SEO optimizasyonu",
  "Teknik SEO iyileştirmeleri",
  "İçerik stratejisi ve optimizasyonu",
  "Sürekli performans takibi",
];

export default function SectoralSEOServices() {
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
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Sektörel SEO Hizmetleri
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              Her sektörün kendine özgü ihtiyaçları vardır. Sektörünüze özel SEO stratejileri ile 
              dijital varlığınızı güçlendirin ve hedef kitlenize daha etkili şekilde ulaşın.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sectors Grid */}
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
                Hizmet Verdiğimiz Sektörler
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Sektörünüze özel SEO çözümleri ile dijital pazarda öne çıkın
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={sector.href}
                    className="block glass-strong p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${sector.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {sector.description}
                    </p>
                    <div className="flex items-center gap-2 text-blue-400 font-medium">
                      Detayları Gör
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Neden Sektörel SEO?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Her sektörün kendine özgü SEO ihtiyaçları vardır
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-strong p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Audit Section */}
      <SEOAuditSection />

      {/* Contact Form */}
      <ContactForm
        title="Sektörünüze Özel SEO Çözümleri İçin İletişime Geçin"
        description="Hangi sektörde hizmet veriyorsanız verin, size özel SEO stratejisi geliştirelim."
        showTitle={true}
      />
    </>
  );
}

