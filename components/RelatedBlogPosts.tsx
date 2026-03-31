"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  category: string;
}

interface RelatedBlogPostsProps {
  category: string;
}

export default function RelatedBlogPosts({ category }: RelatedBlogPostsProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRelatedPosts() {
      try {
        const res = await fetch(`/api/blog?category=${encodeURIComponent(category)}&limit=3`);
        if (res.ok) {
          const data = await res.json();
          // Filter out empty results and use fetched payload
          if (data.posts && data.posts.length > 0) {
            setPosts(data.posts);
          }
        }
      } catch (error) {
        console.error("Error fetching related posts:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRelatedPosts();
  }, [category]);

  // Don't render if we have no posts and aren't loading
  if (!isLoading && posts.length === 0) return null;

  const displayPosts = posts;

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

      <div className="flex flex-col gap-6">
        {displayPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="glass-strong border border-white/5 p-5 rounded-2xl hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300 group cursor-pointer flex flex-col">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <Calendar className="w-3 h-3" />
                  <time>{new Date(post.publishedAt).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}</time>
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title.replace(/&#8217;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&')}
                </h4>
                <div className="flex items-center text-blue-400 text-xs font-semibold group-hover:gap-2 transition-all mt-2">
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
        className="text-center mt-6"
      >
        <Link
          href="/blog"
          className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 glass border border-white/10 rounded-xl font-semibold text-white hover:bg-white/5 transition-all duration-300 text-sm"
        >
          Tüm Yazıları Gör
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
}
