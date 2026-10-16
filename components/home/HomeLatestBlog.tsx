import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { formatDate, decodeHtmlEntities } from "@/lib/blog-utils";

interface HomeLatestBlogProps {
  posts: BlogPost[];
}

export default function HomeLatestBlog({ posts }: HomeLatestBlogProps) {
  const latest3Posts = posts.slice(0, 3);

  return (
    <section className="bg-[#0d153a] border-b border-white/5 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Son Yazılar
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              SEO, GEO, arama algoritmaları ve dijital büyüme üzerine en güncel analizler ve rehberler.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors shrink-0 group"
          >
            <span>Tüm Yazıları Gör</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Yazı Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {latest3Posts.map((post) => {
            const cleanTitle = decodeHtmlEntities(post.title || "Adsız Yazı");
            const cleanExcerpt = decodeHtmlEntities(post.excerpt || "");

            return (
              <article
                key={post.slug || post.id}
                className="group rounded-2xl bg-[#0a0f25] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300"
              >
                <div>
                  {/* Görsel Alanı */}
                  <div className="relative w-full h-48 bg-white/5 overflow-hidden">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={cleanTitle}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                        <span className="text-xs text-gray-500 font-mono">
                          {post.category || "Blog"}
                        </span>
                      </div>
                    )}
                    {post.category && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0a0f25]/90 border border-white/10 text-xs font-semibold text-purple-300">
                        {post.category}
                      </div>
                    )}
                  </div>

                  {/* İçerik */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.publishedAt ? formatDate(post.publishedAt) : "—"}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime || 5} dk</span>
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                        {cleanTitle}
                      </h3>
                    </Link>

                    {cleanExcerpt && (
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {cleanExcerpt}
                      </p>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors"
                  >
                    <span>Yazıyı Oku</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
