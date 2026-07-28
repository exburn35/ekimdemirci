"use client";

import { useState, useEffect } from "react";
import type { BlogPost } from "@/lib/blog";
import LatestPostsSlider from "./blog/LatestPostsSlider";

interface RelatedBlogPostsProps {
  category?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
}

export default function RelatedBlogPosts({
  category,
  title = "İlgili",
  titleHighlight = "Blog İçerikleri",
  subtitle = "Bu konuyla ilgili ilginizi çekebilecek stratejik rehberler, derinlemesine vaka analizleri ve uzman görüşleri.",
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

          // Fallback: If less than 3 category posts exist, fetch general posts to fill the slider
          if (fetchedPosts.length < 3 && category && category !== "Tümü") {
            const fallbackRes = await fetch(`/api/blog?limit=9`);
            if (fallbackRes.ok) {
              const fallbackData = await fallbackRes.json();
              const allPosts: BlogPost[] = fallbackData.posts || [];
              
              // Merge category posts with latest general posts without duplicates
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
      <div className="py-16 bg-[#0a0f25] text-center text-gray-500 text-sm">
        Blog içerikleri yükleniyor...
      </div>
    );
  }

  if (!posts || posts.length === 0) return null;

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
