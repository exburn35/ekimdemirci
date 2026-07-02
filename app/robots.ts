import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/_next/",
        "/_next/*",
        "/api/blog",
        "/api/blog/*"
      ],
      disallow: [
        "/admin",
        "/admin/*",
        "/api/admin",
        "/api/admin/*",
        "/api/contact"
      ],
    },
    sitemap: "https://ekimdemirci.com/sitemap.xml",
  };
}
