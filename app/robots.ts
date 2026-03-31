import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // İzin verilen genel dizinler
      allow: "/",
      // Admin paneli ve parametreli URL'lerin (/bilmemne?q=merhaba) indexlenmesini engelle
      disallow: [
        "/admin", 
        "/admin/*", 
        "/api/*", 
        "/*?*" // Parametre alan (örneğin arama veya filtreleme result) sayfalarını botlara kapatır
      ],
    },
    // Sitemap URL'sini arama motorlarına bildirin
    sitemap: "https://ekimdemirci.com/sitemap.xml",
  };
}
