"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { formatDateShort } from "@/lib/blog-utils";

interface PreviewData {
  title: string;
  excerpt?: string;
  featuredImage?: string;
  publishedAt?: string;
  readTime?: number;
  slug: string;
}

export default function BlogLinkPreview() {
  const [data, setData] = useState<PreviewData | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMouseOverCard, setIsMouseOverCard] = useState(false);
  
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const currentAnchorRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor) {
        const href = anchor.getAttribute("href") || "";
        const isInternal = href.startsWith("/") || href.includes("ekimdemirci.com");
        
        if (isInternal) {
          const parts = href.replace(/https?:\/\/(www\.)?ekimdemirci\.com/, "").split("/").filter(Boolean);
          const slug = parts[parts.length - 1];
          const currentPath = window.location.pathname.split("/").filter(Boolean).pop();
          
          if (slug && slug !== currentPath && slug !== "blog" && slug !== "seo-hizmetleri") {
            if (data?.slug === slug && isVisible) {
              if (closeTimeout.current) clearTimeout(closeTimeout.current);
              return;
            }

            if (closeTimeout.current) clearTimeout(closeTimeout.current);
            if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
            
            hoverTimeout.current = setTimeout(async () => {
              currentAnchorRef.current = anchor;
              
              if (data?.slug !== slug) {
                try {
                  const res = await fetch(`/api/blog/${slug}`);
                  if (res.ok) {
                    const blog = await res.json();
                    setData({
                      title: blog.title.replace(/&#8217;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&'),
                      excerpt: blog.excerpt,
                      featuredImage: blog.featuredImage,
                      publishedAt: blog.publishedAt,
                      readTime: blog.readTime,
                      slug: slug,
                    });
                  } else return;
                } catch (err) { return; }
              }

              const rect = anchor.getBoundingClientRect();
              setPosition({
                x: rect.left + rect.width / 2 + window.scrollX,
                y: rect.top + window.scrollY - 15,
              });
              setIsVisible(true);
            }, 250);
          }
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor === currentAnchorRef.current) {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        
        closeTimeout.current = setTimeout(() => {
          if (!isMouseOverCard) {
            setIsVisible(false);
          }
        }, 300);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [data?.slug, isVisible, isMouseOverCard]);

  // Handle auto-close when leaving card
  useEffect(() => {
    if (!isMouseOverCard && isVisible) {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isMouseOverCard, isVisible]);

  return (
    <AnimatePresence>
      {isVisible && data && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: "-50%", y: 0 }}
          animate={{ opacity: 1, scale: 1, x: "-50%", y: "-100%" }}
          exit={{ opacity: 0, scale: 0.9, x: "-50%", y: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 400 }}
          onMouseEnter={() => {
            setIsMouseOverCard(true);
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
          }}
          onMouseLeave={() => {
            setIsMouseOverCard(false);
          }}
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            zIndex: 9999,
          }}
          className="hidden md:block w-80 pointer-events-none"
        >
          <Link href={`/blog/${data.slug}`} className="block relative pointer-events-auto">
            <div className="glass-strong rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10 hover:border-blue-500/50 hover:bg-white/15 transition-all duration-300">
              {data.featuredImage && (
                <div className="w-full h-40 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10" />
                  <Image 
                    src={data.featuredImage} 
                    alt={data.title} 
                    fill
                    className="object-cover transform scale-100 hover:scale-105 transition-transform duration-1000" 
                  />
                </div>
              )}
              <div className="p-5 relative">
                <div className="flex items-center gap-2 text-[10px] text-blue-400 font-medium mb-3 uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  {data.publishedAt && formatDateShort(data.publishedAt)}
                  <span className="mx-1 text-gray-600">•</span>
                  <Clock className="w-3.5 h-3.5" />
                  {data.readTime || 5} dk okuma
                </div>
                <h4 className="text-base font-bold text-white mb-2 leading-tight">
                  {data.title}
                </h4>
                {data.excerpt && (
                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed mb-4">
                    {data.excerpt}
                  </p>
                )}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-blue-400 font-bold group">
                  <span className="text-xs font-bold bg-blue-500/10 px-2 py-1 rounded">Makaleyi Oku</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0a0f25] border-r border-b border-white/10 rotate-45 -z-10 shadow-lg" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
