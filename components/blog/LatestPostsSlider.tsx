"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/blog-utils";

interface LatestPostsSliderProps {
  posts: BlogPost[];
}

export default function LatestPostsSlider({ posts }: LatestPostsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive items count update
  useEffect(() => {
    setIsMounted(true);
    const updateVisibleItems = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const totalPosts = posts.length;
  const maxIndex = Math.max(0, totalPosts - visibleItems);

  // Automatically wrap-around if items per view change
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleItems, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(Math.min(maxIndex, index));
  };

  // Drag-to-swipe handling
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  // Generate page dots count
  const dotsCount = maxIndex + 1;

  return (
    <section className="py-24 bg-[#0a0f25] relative z-10 overflow-hidden border-t border-white/5">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Outer container spanning 90% page width */}
      <div className="w-[90%] mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 mb-6 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              Blog
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Son <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Yazılar</span>
            </h2>
            <p className="text-gray-400 mt-3 text-sm md:text-base max-w-xl leading-relaxed">
              SEO, semantik web ve yapay zeka entegrasyonu (GEO) hakkında en son güncellemeleri ve stratejik analizlerimi paylaştığım güncel yazılarım.
            </p>
          </motion.div>

          {/* Slider Controls (Desktop Layout) */}
          {isMounted && totalPosts > visibleItems && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="hidden md:flex items-center gap-3 z-20"
            >
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-purple-500/20 hover:border-purple-500/30 text-white transition-all disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:border-white/10 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Önceki yazılar"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-purple-500/20 hover:border-purple-500/30 text-white transition-all disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:border-white/10 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Sonraki yazılar"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </div>

        {/* Carousel Container */}
        <div ref={containerRef} className="relative w-full">
          {!isMounted ? (
            // SSR Fallback (Static Grid/Flex scrollable)
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {posts.slice(0, 3).map((post) => (
                <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-2">
                  <div className="bg-[#111836]/40 rounded-2xl border border-white/5 overflow-hidden h-full flex flex-col">
                    {post.featuredImage && (
                      <div className="w-full h-52 relative">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                        <p className="text-gray-400 text-sm line-clamp-3">{post.excerpt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Interactive Framer Motion Carousel
            <div className="overflow-hidden cursor-grab active:cursor-grabbing -mx-4 px-4 py-2">
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                animate={{ x: `-${currentIndex * (100 / visibleItems)}%` }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                className="flex"
                style={{ width: `${(totalPosts / visibleItems) * 100}%` }}
              >
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="shrink-0 px-4"
                    style={{ width: `${100 / totalPosts}%` }}
                  >
                    <article className="bg-[#111836]/30 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden hover:border-purple-500/30 hover:bg-[#111836]/60 transition-all duration-300 group flex flex-col h-full shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
                      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                        {post.featuredImage && (
                          <div className="w-full h-52 overflow-hidden relative">
                            <Image
                              src={post.featuredImage}
                              alt={post.title || "Blog görseli"}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            {post.category && (
                              <div className="absolute top-4 left-4 z-10">
                                <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-md text-white rounded-full text-xs font-semibold uppercase tracking-wider border border-purple-400/30">
                                  {post.category}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                        <div className="p-6 flex-grow flex flex-col justify-between">
                          <div>
                            {/* Meta Info */}
                            <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                                {post.publishedAt ? formatDate(post.publishedAt) : "—"}
                              </div>
                              <span className="text-gray-600">•</span>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                                {post.readTime || 5} dk okuma
                              </div>
                            </div>

                            {/* Title & Excerpt */}
                            <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2 leading-tight">
                              {(post.title || "").replace(/&#8217;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&')}
                            </h3>
                            {post.excerpt && (
                              <p className="text-gray-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                                {post.excerpt}
                              </p>
                            )}
                          </div>

                          {/* Footer Action */}
                          <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                            <span className="text-sm font-semibold text-purple-400 group-hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5">
                              Devamını Oku
                              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </div>

        {/* Mobile & Dot Navigation Controls */}
        {isMounted && dotsCount > 1 && (
          <div className="flex flex-col items-center gap-6 mt-12">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: dotsCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index
                      ? "w-8 bg-gradient-to-r from-purple-500 to-cyan-500"
                      : "w-2 bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Slayt ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile Arrows (Visible only on small mobile viewports) */}
            <div className="flex md:hidden items-center gap-6">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-purple-500/20 text-white transition-all disabled:opacity-30 cursor-pointer"
                aria-label="Önceki yazılar"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-purple-500/20 text-white transition-all disabled:opacity-30 cursor-pointer"
                aria-label="Sonraki yazılar"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
