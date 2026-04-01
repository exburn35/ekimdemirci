import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogPostingSchema from "@/components/schemas/BlogPostingSchema";
import { getBlogPostBySlug, cleanAndProcessHtml } from "@/lib/blog";

export const dynamic = "force-dynamic";




export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Makale Bulunamadı",
    };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt || undefined,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt || undefined,
      images: post.ogImage || post.featuredImage ? [post.ogImage || post.featuredImage!] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { cleanHtml, headings } = cleanAndProcessHtml(typeof post.content === 'string' ? post.content : (post.content.html || ""));

  return (
    <>
      <BlogPostingSchema post={{
        title: post.title.replace(/&#8217;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&'),
        description: post.excerpt,
        publishedAt: post.publishedAt,
        updatedAt: post.updatedAt,
        slug: post.slug,
        featuredImage: post.featuredImage
      }} />
      <BlogPostContent post={post} processedHtml={cleanHtml} headings={headings} />
    </>
  );
}

