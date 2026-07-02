"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/blog-utils";

interface BlogListClientProps {
  initialPosts: BlogPost[];
}

export default function BlogListClient({ initialPosts }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  // Extract unique categories
  const categories = ["Tümü", ...Array.from(new Set(initialPosts.map(post => post.category).filter(Boolean) as string[]))];

  const filteredPosts = selectedCategory === "Tümü" 
    ? initialPosts 
    : initialPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      {/* Categories */}
      <section className="py-8 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full glass text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "text-white bg-white/20"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-strong rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <Link href={`/blog/${post.slug}`}>
                  {post.featuredImage && (
                    <div className="w-full h-48 overflow-hidden relative">
                      <Image
                        src={post.featuredImage}
                        alt={post.title || "Blog görseli"}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {post.category && (
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      )}
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <Calendar className="w-3 h-3" />
                        {post.publishedAt ? formatDate(post.publishedAt) : "—"}
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {(post.title || "Adsız Yazı").replace(/&#8217;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&')}
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Clock className="w-3 h-3" />
                        {post.readTime || 5} dk okuma
                      </div>
                      <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all">
                        Devamını Oku
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
