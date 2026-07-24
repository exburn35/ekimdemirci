"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavPost {
  title: string;
  slug: string;
}

export default function BlogNavigation({ currentSlug }: { currentSlug: string }) {
  const [prevPost, setPrevPost] = useState<NavPost | null>(null);
  const [nextPost, setNextPost] = useState<NavPost | null>(null);

  useEffect(() => {
    async function fetchNav() {
      try {
        const res = await fetch("/api/blog?limit=50");
        if (res.ok) {
          const data = await res.json();
          const posts = data.posts || [];
          const currentIndex = posts.findIndex((p: any) => p.slug === currentSlug);
          
          if (currentIndex !== -1) {
            // "Next" is the newer post (index - 1), "Prev" is older post (index + 1)
            // since posts are sorted descending by date
            if (currentIndex > 0) {
              setNextPost({
                title: posts[currentIndex - 1].title.replace(/&#8217;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&'),
                slug: posts[currentIndex - 1].slug,
              });
            }
            if (currentIndex < posts.length - 1) {
              setPrevPost({
                title: posts[currentIndex + 1].title.replace(/&#8217;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&'),
                slug: posts[currentIndex + 1].slug,
              });
            }
          }
        }
      } catch (error) {
        console.error("Error fetching blog navigation", error);
      }
    }
    fetchNav();
  }, [currentSlug]);

  if (!prevPost && !nextPost) return null;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-16 pt-8 border-t border-white/10 gap-6">
      {prevPost ? (
        <Link 
          href={`/blog/${prevPost.slug}`}
          className="flex-1 group flex flex-col items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all w-full"
        >
          <span className="text-gray-500 text-sm mb-2 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Önceki Yazı
          </span>
          <span className="text-white font-semibold line-clamp-2 text-left group-hover:text-blue-400 transition-colors">
            {prevPost.title}
          </span>
        </Link>
      ) : <div className="flex-1" />}

      {nextPost ? (
        <Link 
          href={`/blog/${nextPost.slug}`}
          className="flex-1 group flex flex-col items-end p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all text-right w-full"
        >
          <span className="text-gray-500 text-sm mb-2 flex items-center gap-2">
            Sonraki Yazı <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="text-white font-semibold line-clamp-2 text-right group-hover:text-purple-400 transition-colors">
            {nextPost.title}
          </span>
        </Link>
      ) : <div className="flex-1" />}
    </div>
  );
}
