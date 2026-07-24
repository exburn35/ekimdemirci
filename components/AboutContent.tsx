"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutContent() {
  return (
    <section className="py-24 bg-[#0a0f25] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] rounded-t-[3rem] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-square relative bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl p-2">
               <div className="relative w-full h-full rounded-2xl overflow-hidden">
                 <Image 
                   src="/pp.jpg"
                   alt="Ekim Demirci"
                   fill
                   className="object-cover"
                   sizes="(max-width: 768px) 100vw, 50vw"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
               </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-400 leading-relaxed">
              Merhaba, ben <strong className="text-purple-400">Ekim Demirci</strong>. 34 yaşındayım, <strong className="text-white">SEO & GEO Uzmanı ve Danışmanıyım</strong> ve <strong className="text-white">5 yılı aşkın süredir</strong>, markaların dijital dünyada öne çıkmasına yardımcı oluyorum. 
              Türkiye&apos;nin önde gelen dijital ajanslarında çalışma fırsatı buldum, burada hem müşterilerim için değer yarattım hem de kendimi sürekli geliştirdim.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              SEO benim için sadece bir meslek değil, aynı zamanda bir tutku. Her projede, bir web sitesini sıfırdan zirveye taşımanın heyecanını yaşıyorum. Teknik SEO&apos;dan içerik stratejilerine, backlink yönetiminden veri analizine kadar geniş bir yelpazede uzmanlığa sahibim ve tüm bilgimi sizin için harekete geçirmeye hazırım.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Eğer <strong className="text-purple-400">web sitenizin görünürlüğünü artırmak</strong> ve <strong className="text-purple-400">organik trafiğinizi maksimize etmek</strong> istiyorsanız, birlikte çalışarak hedeflerinizi gerçeğe dönüştürebiliriz.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed font-semibold">
              Sizi bu yolculuğa davet ediyorum! Daha fazla bilgi almak veya hizmetlerimi incelemek için benimle iletişime geçebilirsiniz.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
