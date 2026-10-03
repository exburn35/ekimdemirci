import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { BlogPost, getRelatedBlogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/blog-utils";
import LatestPostsSlider from "./blog/LatestPostsSlider";

interface RelatedBlogPostsProps {
  category?: string;
  currentSlug?: string;
  tags?: string[];
  excludeSlugs?: string[];
  posts?: BlogPost[];
  limit?: number;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  variant?: "slider" | "sidebar";
}

export default function RelatedBlogPosts({
  category,
  currentSlug,
  tags,
  excludeSlugs,
  posts: propPosts,
  limit,
  title = "İlgili",
  titleHighlight = "Blog İçerikleri",
  subtitle = "Bu konuyla ilgili ilginizi çekebilecek stratejik rehberler, derinlemesine vaka analizleri ve uzman görüşleri.",
  variant = "slider",
}: RelatedBlogPostsProps) {
  const posts = propPosts || getRelatedBlogPosts({
    currentSlug,
    category,
    tags,
    limit: variant === "sidebar" ? 3 : (limit || 9),
    excludeSlugs,
  });

  if (!posts || posts.length === 0) return null;

  // Sidebar compact list variant
  if (variant === "sidebar") {
    const displayPosts = posts.slice(0, 3);
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 pb-2 border-b border-white/10">
            İlgili Blog Yazıları
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          {displayPosts.map((post) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div className="glass-strong border border-white/5 p-4 rounded-xl hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300 group cursor-pointer flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    <time>{formatDate(post.publishedAt || "")}</time>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                    {(post.title || "").replace(/&#8217;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&')}
                  </h4>
                  <div className="flex items-center text-blue-400 text-xs font-semibold group-hover:gap-2 transition-all mt-1">
                    Devamını Oku
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 glass border border-white/10 rounded-xl font-semibold text-white hover:bg-white/5 transition-all duration-300 text-xs"
          >
            Tüm Yazıları Gör
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  // Full-width horizontal slider variant (Default)
  return (
    <LatestPostsSlider
      posts={posts}
      title={title}
      titleHighlight={titleHighlight}
      subtitle={subtitle}
      badgeText="İLGİLİ REHBERLER"
    />
  );
}
