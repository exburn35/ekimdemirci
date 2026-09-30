import { getAllBlogPosts } from "@/lib/blog";
import Breadcrumb from "@/components/Breadcrumb";
import SEOAuditSection from "@/components/SEOAuditSection";
import BlogHero from "@/components/blog/BlogHero";
import BlogListClient from "@/components/blog/BlogListClient";
import BlogNewsletter from "@/components/blog/BlogNewsletter";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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
