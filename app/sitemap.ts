import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { getAllBlogPosts } from "../lib/blog";
import { caseStudies } from "../lib/case-studies";

export const dynamic = "force-dynamic";

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

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    // 1. Fetch dynamic Blog Posts from JSON files
    const blogs = getAllBlogPosts();

    blogRoutes = blogs.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Sitemap Blog Error:", error);
  }

  let pageRoutes: MetadataRoute.Sitemap = [];
  try {
    // 2. Fetch standard Pages (Dynamically Generated Pages)
    const customPages = await prisma.page.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    pageRoutes = customPages.map((page: any) => ({
      url: `${baseUrl}${page.slug.startsWith("/") ? page.slug : "/" + page.slug}`,
      lastModified: page.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Sitemap Page Error:", error);
  }

  // 3. Dynamic Success Stories
  const successStoryRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/basari-hikayeleri/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...pageRoutes, ...successStoryRoutes];
}

