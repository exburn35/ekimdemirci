import { MetadataRoute } from "next";
import { getAllBlogPosts, getAllCategories } from "../lib/blog";
import { caseStudies } from "../lib/case-studies";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ekimdemirci.com";

  // Static routes map
  const staticRoutes = [
    "",
    "/hakkimda",
    "/iletisim",
    "/blog",
    "/seo-hizmetleri",
    "/seo-hizmetleri/teknik-seo",
    "/seo-hizmetleri/sayfa-ici-seo",
    "/seo-hizmetleri/sayfa-disi-seo",
    "/seo-hizmetleri/yapay-zeka-seo",
    "/geo-danismanligi",
    "/seo-danismanlik-fiyatlari",
    "/seo-sozlugu",
    "/seo-ajanslari",
    "/sektorel-seo-hizmetleri",
    "/sektorel-seo-hizmetleri/e-ticaret-seo",
    "/sektorel-seo-hizmetleri/saglik-ve-klinik-seo",
    "/sektorel-seo-hizmetleri/yerel-isletme-seo",
    "/sektorel-seo-hizmetleri/kurumsal-b2b-seo",
    "/audit-talebi",
    "/basari-hikayeleri",
    "/sikca-sorulan-sorular",
    "/gizlilik-politikasi",
    "/kullanim-kosullari",
    "/cerez-politikasi",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  let blogRoutes: MetadataRoute.Sitemap = [];
  let categoryRoutes: MetadataRoute.Sitemap = [];
  try {
    // 1. Fetch dynamic Blog Posts & Categories from JSON files
    const blogs = getAllBlogPosts();

    blogRoutes = blogs.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

    const categories = getAllCategories();
    categoryRoutes = categories.map((cat) => ({
      url: `${baseUrl}/kategori/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }));
  } catch (error) {
    console.error("Sitemap Blog Error:", error);
  }

  // 2. Dynamic Success Stories
  const successStoryRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/basari-hikayeleri/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...blogRoutes, ...successStoryRoutes];
}

