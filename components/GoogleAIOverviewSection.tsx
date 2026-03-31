"use client";

import { motion } from "framer-motion";
import { Sparkles, Search, ChevronDown, CheckCircle2, ThumbsUp, ThumbsDown, Share2, MoreVertical, Link as LinkIcon, ExternalLink } from "lucide-react";

export default function GoogleAIOverviewSection() {
  const features = [
    {
      title: "Sıfırıncı Konum (Position Zero) Hedefleme",
      description: "İçeriğinizi Google'ın yapay zeka tarafından üretilen özetlerinde (GEO) görünecek şekilde optimize ediyoruz."
    },
    {
      title: "Soru-Cevap Optimizasyonu",
      description: "Kullanıcıların doğal dil sorgularına doğrudan yanıt veren, yapılandırılmış içerik stratejileri."
    },
    {
      title: "Varlık (Entity) Tabanlı SEO",
      description: "Arama motorlarının markanızı ve içeriklerinizi birbiriyle ilişkili varlıklar olarak anlamasını sağlıyoruz."
    }
  ];

  return (
    <section className="py-24 bg-[#05091e] border-t border-purple-500/10 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative"
          >
            {/* The Google Search Look */}
            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              
              {/* Search Bar Skeleton */}
              <div className="p-4 border-b border-gray-800 bg-[#161616] flex items-center justify-between">
                <div className="flex items-center space-x-3 w-full max-w-sm">
                  <Search className="w-5 h-5 text-gray-500" />
                  <div className="h-5 bg-gray-700/50 rounded flex-1"></div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
              </div>

              {/* AI Generative Experience Box */}
              <div className="p-4 sm:p-6 bg-[#161616]">
                <div className="relative rounded-2xl overflow-hidden p-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6">
                  <div className="bg-[#1b1f2b] rounded-2xl p-5 relative z-10 h-full">
                    
                    {/* Header: AI Overview */}
                    <div className="flex items-center space-x-2 mb-4">
                      <Sparkles className="w-5 h-5 text-cyan-400" />
                      <span className="text-white font-medium">Yapay zeka özeti</span>
                    </div>

                    {/* Content Text Simulation */}
                    <div className="space-y-3 mb-6">
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        Ekim Demirci SEO ajansı, yapay zeka destekli araçları kullanarak markaların dijital görünürlüğünü organik olarak artırır. Geleneksel SEO stratejilerini makine öğrenimi ile birleştirerek:
                      </p>
                      <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base space-y-2">
                        <li>Gelişmiş veri analizi ile doğru hedef kitle tespiti,</li>
                        <li>GEO (Generative Engine Optimization) için içerik uygunluğu,</li>
                        <li>Arama niyetini (Search Intent) daha net anlayarak dönüşüm optimizasyonu sağlar.</li>
                      </ul>
                    </div>

                    {/* Source Cards */}
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex-shrink-0 w-32 bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition cursor-pointer group">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                              <LinkIcon className="w-2 h-2 text-white" />
                            </div>
                            <div className="h-3 w-16 bg-gray-600 rounded"></div>
                          </div>
                          <div className="h-2 w-full bg-gray-700 rounded mb-1.5"></div>
                          <div className="h-2 w-4/5 bg-gray-700 rounded"></div>
                        </div>
                      ))}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                      <div className="flex gap-3">
                        <button className="p-2 hover:bg-white/10 rounded-full transition text-gray-400 hover:text-white">
                          <ThumbsUp className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-full transition text-gray-400 hover:text-white">
                          <ThumbsDown className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex gap-3">
                        <button className="p-2 hover:bg-white/10 rounded-full transition text-gray-400 hover:text-white">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-full transition text-gray-400 hover:text-white">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Normal Result Skeleton */}
                <div className="space-y-4">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gray-800"></div>
                      <div className="flex flex-col">
                        <div className="h-3 w-24 bg-gray-700 rounded mb-1"></div>
                        <div className="h-2 w-32 bg-gray-800 rounded"></div>
                      </div>
                    </div>
                    <div className="h-5 w-64 bg-[#6ab0f3]/80 rounded mt-2"></div>
                    <div className="h-3 w-full max-w-[90%] bg-gray-700 mt-2 rounded"></div>
                    <div className="h-3 w-full max-w-[80%] bg-gray-700 mt-1 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Overlay Gradient Decorative */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20 -z-10"></div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400 uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              GEO Optimizasyonu
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Arama Sonuçlarının Yeni Yüzü: <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Google AI Overview</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Kullanıcılar artık aradıkları cevapları direkt arama sonuçları sayfasında, yapay zeka özetleri ile alıyor. Doğru strateji ile içeriklerinizi bu özetlerin bir parçası ve kaynağı haline getirerek <strong className="text-white">maksimum görünürlük</strong> elde etmenizi sağlıyorum.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
