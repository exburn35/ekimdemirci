"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

          <div className="relative z-10">
            <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Arama Sıralamalarınızı Artırmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              SEO hizmetlerimizin çevrimiçi varlığınızı nasıl dönüştürebileceğini ve işletmeniz için ölçülebilir sonuçlar sağlayabileceğini konuşalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Hemen Başlayın
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/basari-hikayeleri"
                className="px-8 py-4 glass rounded-full font-semibold text-lg text-white hover:bg-white/10 transition-all duration-300"
              >
                Başarı Hikayelerini İncele
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}






