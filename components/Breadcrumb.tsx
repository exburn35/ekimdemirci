"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Fragment } from "react";
import { motion } from "framer-motion";

const routeMapping: Record<string, string> = {
  "seo-hizmetleri": "SEO Hizmetleri",
  "geo-danismanligi": "GEO Danışmanlığı",
  "yapay-zeka-seo": "Yapay Zeka SEO",
  "teknik-seo": "Teknik SEO",
  "sayfa-ici-seo": "Site İçi SEO",
  "sayfa-disi-seo": "Site Dışı SEO",
  "sektorel-seo-hizmetleri": "Sektörel SEO Hizmetleri",
  "dis-hekimleri-icin-seo-2": "Diş Hekimleri için SEO",
  "e-ticaret-seo": "E-Ticaret SEO",
  "avukatlar-icin-seo-hizmeti": "Avukatlar için SEO",
  "guzellik-merkezleri-icin-seo-2": "Güzellik Merkezleri için SEO",
  "doktorlar-icin-seo-2": "Doktorlar için SEO",
  "hastaneler-icin-seo-2": "Hastaneler için SEO",
  "seo-danismanlik-fiyatlari": "Fiyatlar",
  "icerik-yazimi": "İçerik Yazımı",
  "audit-talebi": "Audit Talebi",
  "basari-hikayeleri": "Başarı Hikayeleri",
  "sikca-sorulan-sorular": "SSS",
  "hakkimda": "Hakkımda",
  "blog": "Blog",
  "iletisim": "İletişim",
  "seo-sozlugu": "SEO Sözlüğü",
};

const formatSegment = (segment: string) => {
  if (routeMapping[segment]) return routeMapping[segment];
  
  // Fallback: Capitalize words and replace hyphens with spaces
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function Breadcrumb() {
  const pathname = usePathname();

  // Hide on homepage
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter((segment) => segment !== "");

  // Generate Schema.org JSON-LD
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Anasayfa",
        "item": "https://ekimdemirci.com"
      },
      ...segments.map((segment, index) => {
        const url = `https://ekimdemirci.com/${segments.slice(0, index + 1).join("/")}`;
        return {
          "@type": "ListItem",
          "position": index + 2,
          "name": formatSegment(segment),
          "item": url
        };
      })
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <nav aria-label="Breadcrumb" className="w-full pt-24 pb-4 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex"
          >
            <ol className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-900/70 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/40 text-xs sm:text-sm">
              <li>
                <Link 
                  href="/" 
                  className="group flex items-center gap-1.5 text-slate-400 hover:text-white transition-all duration-200"
                  title="Anasayfa"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 group-hover:scale-105 transition-all">
                    <Home className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-medium hidden sm:inline text-xs">Anasayfa</span>
                </Link>
              </li>
              
              {segments.map((segment, index) => {
                const href = `/${segments.slice(0, index + 1).join("/")}`;
                const isLast = index === segments.length - 1;
                const title = formatSegment(segment);

                return (
                  <Fragment key={href}>
                    <li className="flex items-center text-purple-400/50">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </li>
                    <li>
                      {isLast ? (
                        <span 
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-200 font-semibold text-xs tracking-wide shadow-sm" 
                          aria-current="page"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                          {title}
                        </span>
                      ) : (
                        <Link 
                          href={href} 
                          className="text-slate-300 hover:text-white font-medium text-xs px-2 py-1 rounded-md hover:bg-white/5 transition-all"
                        >
                          {title}
                        </Link>
                      )}
                    </li>
                  </Fragment>
                );
              })}
            </ol>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
