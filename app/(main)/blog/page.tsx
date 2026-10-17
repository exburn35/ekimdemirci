import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import Breadcrumb from "@/components/Breadcrumb";
import SEOAuditSection from "@/components/SEOAuditSection";
import BlogHero from "@/components/blog/BlogHero";
import BlogListClient from "@/components/blog/BlogListClient";
import BlogNewsletter from "@/components/blog/BlogNewsletter";

export const metadata: Metadata = {
  title: "SEO ve Dijital Pazarlama Blogu",
  description: "SEO, dijital pazarlama ve web geliştirme hakkında güncel makaleler, ipuçları ve rehberler.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "SEO ve Dijital Pazarlama Blogu | Ekim Demirci",
    description: "SEO, dijital pazarlama ve web geliştirme hakkında güncel makaleler, ipuçları ve rehberler.",
  },
  twitter: {
    title: "SEO ve Dijital Pazarlama Blogu | Ekim Demirci",
    description: "SEO, dijital pazarlama ve web geliştirme hakkında güncel makaleler, ipuçları ve rehberler.",
  },
};


export default async function BlogPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <>
      <Breadcrumb items={[{ name: "Blog", href: "/blog" }]} />
      <BlogHero />
      <BlogListClient initialPosts={blogPosts} />
      <BlogNewsletter />
      <SEOAuditSection />
    </>
  );
}
