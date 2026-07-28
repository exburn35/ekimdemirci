import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Folder } from "lucide-react";
import { getCategoryBySlug, getPostsByCategory, slugifyCategory } from "@/lib/blog";
import { formatDate } from "@/lib/blog-utils";
import SEOAuditSection from "@/components/SEOAuditSection";
import BlogNewsletter from "@/components/blog/BlogNewsletter";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return {
      title: "Kategori Bulunamadı",
    };
  }

  return {
    title: `${category.name} - SEO Makaleleri & Rehberler | Ekim Demirci`,
    description: category.description,
    alternates: {
      canonical: `/kategori/${params.slug}`,
    },
    openGraph: {
      title: `${category.name} - SEO Makaleleri & Rehberler | Ekim Demirci`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(params.slug);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#211b39]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#211b39] via-[#1a152e] to-[#211b39]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-blue-400 mb-6 border border-blue-500/20">
              <Folder className="w-4 h-4" />
              Kategori
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                {category.name}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#211b39] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              Bu kategoride henüz yazı bulunmuyor.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const catSlug = post.category ? slugifyCategory(post.category) : null;
                return (
                  <article
                    key={post.id}
                    className="glass-strong rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      {post.featuredImage && (
                        <Link href={`/blog/${post.slug}`} className="block w-full h-48 overflow-hidden relative">
                          <Image
                            src={post.featuredImage}
                            alt={post.title || "Blog görseli"}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </Link>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          {post.category && catSlug ? (
                            <Link
                              href={`/kategori/${catSlug}`}
                              className="px-3 py-1 bg-blue-500/20 text-blue-400 hover:bg-blue-600/30 hover:text-blue-300 transition-colors rounded-full text-xs font-medium"
                            >
                              {post.category}
                            </Link>
                          ) : post.category ? (
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                          ) : null}
                          <div className="flex items-center gap-2 text-gray-400 text-xs">
                            <Calendar className="w-3 h-3" />
                            {post.publishedAt ? formatDate(post.publishedAt) : "—"}
                          </div>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                            {(post.title || "Adsız Yazı").replace(/&#8217;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&')}
                          </h2>
                        </Link>
                        {post.excerpt && (
                          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Clock className="w-3 h-3" />
                        {post.readTime || 5} dk okuma
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all"
                      >
                        Devamını Oku
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <BlogNewsletter />
      <SEOAuditSection />
    </>
  );
}
