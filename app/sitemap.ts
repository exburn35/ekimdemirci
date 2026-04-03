import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma"; // Assuming you have a prisma instance configured here, adjust if needed

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ekimdemirci.com";

  // Static routes map
  const staticRoutes = [
    "",
    "/hakkimda",
    "/iletisim",
    "/blog",
    "/seo-hizmetleri",
    "/seo-danismanlik-fiyatlari",
    "/sektorel-seo-hizmetleri",
    "/audit-talebi",
    "/basari-hikayeleri",
    "/sikca-sorulan-sorular",
    "/icerik-yazimi",
    "/seo-hizmetleri/yapay-zeka-seo",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  try {
    // 1. Fetch dynamic Blog Posts from JSON files
    const { getAllBlogPosts } = await import("@/lib/blog");
    const blogs = getAllBlogPosts();

    const blogRoutes = blogs.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

    // 2. Fetch standard Pages (Dynamically Generated Pages)
    // Optional depending on if you use the Page model for frontend rendering
    const customPages = await prisma.page.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    const pageRoutes = customPages.map((page) => ({
      // Handle cases where slug might be something like '/about' or 'about'
      url: `${baseUrl}${page.slug.startsWith("/") ? page.slug : "/" + page.slug}`,
      lastModified: page.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    return [...staticRoutes, ...blogRoutes, ...pageRoutes];
  } catch (error) {
    // Fallback if DB fails during build Phase or runtime
    return staticRoutes;
  }
}
