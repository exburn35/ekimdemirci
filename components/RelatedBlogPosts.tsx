"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/blog-utils";
import LatestPostsSlider from "./blog/LatestPostsSlider";

interface RelatedBlogPostsProps {
  category?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  variant?: "slider" | "sidebar";
}

export default function RelatedBlogPosts({
  category,
  title = "İlgili",
  titleHighlight = "Blog İçerikleri",
  subtitle = "Bu konuyla ilgili ilginizi çekebilecek stratejik rehberler, derinlemesine vaka analizleri ve uzman görüşleri.",
  variant = "slider",
}: RelatedBlogPostsProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRelatedPosts() {
      try {
        let fetchUrl = `/api/blog?limit=9`;
        if (category && category !== "Tümü") {
          fetchUrl += `&category=${encodeURIComponent(category)}`;
        }

        const res = await fetch(fetchUrl);
        if (res.ok) {
          const data = await res.json();
          let fetchedPosts: BlogPost[] = data.posts || [];

          // Fallback: If less than 3 category posts exist, fetch general posts to fill
          if (fetchedPosts.length < 3 && category && category !== "Tümü") {
            const fallbackRes = await fetch(`/api/blog?limit=9`);
            if (fallbackRes.ok) {
              const fallbackData = await fallbackRes.json();
              const allPosts: BlogPost[] = fallbackData.posts || [];
              const categoryPostSlugs = new Set(fetchedPosts.map((p) => p.slug));
              const remaining = allPosts.filter((p) => !categoryPostSlugs.has(p.slug));
              fetchedPosts = [...fetchedPosts, ...remaining].slice(0, 9);
            }
          }

          setPosts(fetchedPosts);
        }
      } catch (error) {
        console.error("Error fetching related posts:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRelatedPosts();
  }, [category]);

  if (isLoading) {
    return (
      <div className="py-6 text-center text-gray-500 text-sm">
        İçerikler yükleniyor...
      </div>
    );
  }

  if (!posts || posts.length === 0) return null;

  // Sidebar compact list variant
  if (variant === "sidebar") {
    const displayPosts = posts.slice(0, 3);
    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-white mb-2 pb-2 border-b border-white/10">
            İlgili Blog Yazıları
          </h3>
        </motion.div>

        <div className="flex flex-col gap-4">
          {displayPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="glass-strong border border-white/5 p-4 rounded-xl hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300 group cursor-pointer flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    <time>{formatDate(post.publishedAt)}</time>
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
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-4"
        >
          <Link
            href="/blog"
            className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 glass border border-white/10 rounded-xl font-semibold text-white hover:bg-white/5 transition-all duration-300 text-xs"
          >
            Tüm Yazıları Gör
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
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
