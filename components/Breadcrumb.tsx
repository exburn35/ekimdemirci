"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Fragment } from "react";

const routeMapping: Record<string, string> = {
  "seo-hizmetleri": "SEO Hizmetleri",
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
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                <span className="sr-only">Anasayfa</span>
              </Link>
            </li>
            
            {segments.map((segment, index) => {
              const href = `/${segments.slice(0, index + 1).join("/")}`;
              const isLast = index === segments.length - 1;
              const title = formatSegment(segment);

              return (
                <Fragment key={href}>
                  <li>
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  </li>
                  <li>
                    {isLast ? (
                      <span className="text-white font-medium" aria-current="page">
                        {title}
                      </span>
                    ) : (
                      <Link href={href} className="hover:text-white transition-colors">
                        {title}
                      </Link>
                    )}
                  </li>
                </Fragment>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
