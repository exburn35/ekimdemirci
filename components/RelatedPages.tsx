"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Settings, FileText, Link2, TrendingUp, Users, Target, Award, Search, HelpCircle, FileEdit } from "lucide-react";

const allPages = [
  // Ana Hizmetler
  {
    title: "Yapay Zeka SEO",
    path: "/seo-hizmetleri/yapay-zeka-seo",
    category: "Hizmetler",
    icon: Brain,
    description: "Yapay zeka araçları ile rakiplerinizi geride bırakacak modern SEO teknikleri.",
    gradient: "from-blue-500 to-cyan-500",
    className: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    title: "Teknik SEO",
    path: "/seo-hizmetleri/teknik-seo",
    category: "Hizmetler",
    icon: Settings,
    description: "Sitenizin arama motorları tarafından kusursuz taranması için teknik altyapı iyileştirmeleri.",
    gradient: "from-purple-500 to-pink-500",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "Sayfa İçi SEO",
    path: "/seo-hizmetleri/sayfa-ici-seo",
    category: "Hizmetler",
    icon: FileText,
    description: "İçeriklerinizi ve anahtar kelimelerinizi optimize ederek sıralamanızı yükseltin.",
    gradient: "from-orange-500 to-red-500",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "Sayfa Dışı SEO",
    path: "/seo-hizmetleri/sayfa-disi-seo",
    category: "Hizmetler",
    icon: Link2,
    description: "Kaliteli backlinkler ile alan adı otoritenizi güvenli bir şekilde artırın.",
    gradient: "from-green-500 to-emerald-500",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
  
  // Sektörel Sayfalar
  {
    title: "E-Ticaret SEO",
    path: "/sektorel-seo-hizmetleri/e-ticaret-seo",
    category: "Sektörel",
    icon: TrendingUp,
    description: "Online mağazanızın trafiğini ve satışlarını artıracak e-ticaret odaklı stratejiler.",
    gradient: "from-blue-600 to-indigo-600",
    className: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    title: "Sektörel SEO",
    path: "/sektorel-seo-hizmetleri", 
    category: "Kurumsal",
    icon: Target,
    description: "Farklı sektörlere özel niş SEO çalışmaları.",
    gradient: "from-slate-500 to-slate-700",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
  
  // Diğer Sayfalar
  {
    title: "Başarı Hikayeleri",
    path: "/basari-hikayeleri",
    category: "Kurumsal",
    icon: Award,
    description: "Geçmiş projelerimizdeki başarılarımız ve elde ettiğimiz sonuçlar.",
    gradient: "from-yellow-500 to-orange-500",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    title: "SEO Fiyatları",
    path: "/seo-danismanlik-fiyatlari",
    category: "Kurumsal",
    icon: Search,
    description: "Bütçenize ve hedeflerinize uygun şeffaf SEO paketleri.",
    gradient: "from-pink-500 to-rose-500",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "İçerik Yazımı",
    path: "/icerik-yazimi",
    category: "Hizmetler",
    icon: FileEdit,
    description: "SEO uyumlu, uzman yazar kadromuzdan profesyonel metinler.",
    gradient: "from-indigo-500 to-purple-500",
    className: "col-span-1 md:col-span-1 row-span-2",
  },
  {
    title: "Sıkça Sorulan Sorular",
    path: "/sikca-sorulan-sorular",
    category: "Bilgi",
    icon: HelpCircle,
    description: "Süreçlerimiz ve SEO hakkında aklınıza takılan soruların cevapları.",
    gradient: "from-teal-500 to-green-500",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
];

export default function RelatedPages() {
  const pathname = usePathname();

  // Mevcut sayfayı hariç tut
  const filteredPages = allPages.filter(page => page.path !== pathname);
  
  const currentCategory = allPages.find(p => p.path === pathname)?.category;
  
  let relatedPages = [];
  
  if (currentCategory === "Hizmetler") {
    relatedPages = [
      filteredPages.find(p => p.category === "Sektörel"),
      filteredPages.find(p => p.path === "/seo-hizmetleri/sayfa-ici-seo"),
      filteredPages.find(p => p.path === "/seo-danismanlik-fiyatlari"),
      filteredPages.find(p => p.path === "/basari-hikayeleri"),
    ].filter(Boolean);
  } else if (currentCategory === "Sektörel") {
    relatedPages = [
      filteredPages.find(p => p.path === "/seo-hizmetleri/yapay-zeka-seo"),
      filteredPages.find(p => p.path === "/seo-hizmetleri/teknik-seo"),
      filteredPages.find(p => p.path === "/icerik-yazimi"),
      filteredPages.find(p => p.path === "/seo-danismanlik-fiyatlari"),
    ].filter(Boolean);
  } else {
    // Karma
    relatedPages = filteredPages.slice(0, 4);
  }

  // Eksik varsa tamamla
  while (relatedPages.length < 4) {
    const randomPage = filteredPages[Math.floor(Math.random() * filteredPages.length)];
    if (!relatedPages.includes(randomPage)) {
      relatedPages.push(randomPage);
    }
  }

  // Bento grid css classes based on index to create an interesting layout
  const bentoClasses = [
    "col-span-1 md:col-span-2 row-span-2",
    "col-span-1 md:col-span-1 row-span-1",
    "col-span-1 md:col-span-1 row-span-1",
    "col-span-1 md:col-span-2 row-span-1"
  ];

  return (
    <section className="py-24 bg-[#0a0f25] relative overflow-hidden border-t border-white/5 mt-16">
      {/* Magic UI Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white"
          >
            Yolculuğunuza <span className="text-purple-400">Devam Edin</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-medium"
          >
            Sizin için özenle seçilmiş diğer sayfalara göz atarak SEO stratejinizi derinleştirin.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-6">
          {relatedPages.map((page, index) => {
            const Icon = page?.icon || Link2;
            if (!page) return null;

            return (
              <motion.div
                key={page.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`${bentoClasses[index % bentoClasses.length]} group relative`}
              >
                <Link 
                  href={page.path}
                  className="block w-full h-full p-8 rounded-3xl bg-[#111836] border border-white/5 shadow-sm hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:border-purple-500/30 transition-all duration-500 overflow-hidden relative flex flex-col justify-between"
                >
                  {/* Subtle Magic UI Glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${page.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/30 group-hover:-translate-y-1 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
                      </div>
                    </div>
                    
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2 block">
                      {page.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                      {page.title}
                    </h3>
                    
                    {bentoClasses[index % bentoClasses.length].includes("row-span-2") && (
                      <p className="text-gray-400 leading-relaxed mt-4">
                        {page.description}
                      </p>
                    )}
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
