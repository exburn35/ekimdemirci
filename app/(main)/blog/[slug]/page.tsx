import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogPostingSchema from "@/components/schemas/BlogPostingSchema";
import { getBlogPostBySlug, cleanAndProcessHtml } from "@/lib/blog";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
      return {
        title: "Makale Bulunamadı",
      };
    }

    return {
      title: post.metaTitle || post.title || "Makale",
      description: post.metaDescription || post.excerpt || undefined,
      alternates: {
        canonical: `/blog/${params.slug}`,
      },
      openGraph: {
        title: post.metaTitle || post.title || "Makale",
        description: post.metaDescription || post.excerpt || undefined,
        images: post.ogImage || post.featuredImage ? [post.ogImage || post.featuredImage!] : undefined,
      },
    };
  } catch (error) {
    return {
      title: "Makale",
    };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
      notFound();
    }

    const postTitle = (post.title || "Makale")
      .replace(/&#8217;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&');

    const rawContent = typeof post.content === 'string' ? post.content : (post.content?.html || "");
    const { cleanHtml, headings } = cleanAndProcessHtml(rawContent, postTitle);

    const breadcrumbItems = [
      { name: "Blog", href: "/blog" },
      { name: postTitle, href: `/blog/${post.slug}` }
    ];

    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <BlogPostingSchema post={{
          title: postTitle,
          description: post.excerpt,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          slug: post.slug,
          featuredImage: post.featuredImage
        }} />
        <BlogPostContent post={post} processedHtml={cleanHtml} headings={headings} />
      </>
    );
  } catch (error) {
    console.error("Error rendering blog post page:", error);
    notFound();
  }
}
