"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, FileText } from "lucide-react";
import SEOAuditSection from "@/components/SEOAuditSection";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  featuredImage?: string;
  publishedAt?: string;
  readTime?: number;
  views: number;
  tags?: string[];
}
  {
    id: 1,
    title: "SEO'da Otorite Nedir?",
    excerpt: "SEO'da otorite, web sitenizin arama motorları tarafından ne kadar güvenilir ve değerli görüldüğünü ifade eder. Bu makalede otoriteyi nasıl artırabileceğinizi öğreneceksiniz.",
    date: "2024-01-15",
    readTime: "5 dk",
    category: "SEO",
    slug: "seoda-otorite-nedir",
  },
  {
    id: 2,
    title: "HTTP Yönlendirme (Redirect) Kodları Nelerdir?",
    excerpt: "HTTP yönlendirme kodları, web sitelerinde URL yönlendirmeleri yaparken kullanılan önemli araçlardır. Bu makalede farklı redirect kodlarını ve ne zaman kullanılacağını öğreneceksiniz.",
    date: "2024-01-10",
    readTime: "7 dk",
    category: "Teknik SEO",
    slug: "http-yonlendirme-redirect-kodlari",
  },
  {
    id: 3,
    title: "Yerel SEO Stratejileri: 2024 Rehberi",
    excerpt: "Yerel SEO, fiziksel bir konumu olan işletmeler için kritik öneme sahiptir. Bu rehberde 2024'ün en etkili yerel SEO stratejilerini bulacaksınız.",
    date: "2024-01-05",
    readTime: "10 dk",
    category: "Yerel SEO",
    slug: "yerel-seo-stratejileri-2024",
  },
  {
    id: 4,
    title: "Core Web Vitals: Site Hızınızı Artırın",
    excerpt: "Google'ın Core Web Vitals metrikleri, kullanıcı deneyimini ölçen önemli faktörlerdir. Bu makalede bu metrikleri nasıl iyileştirebileceğinizi öğreneceksiniz.",
    date: "2023-12-28",
    readTime: "8 dk",
    category: "Teknik SEO",
    slug: "core-web-vitals-site-hizi",
  },
  {
    id: 5,
    title: "E-Ticaret SEO: Ürün Sayfalarınızı Optimize Edin",
    excerpt: "E-ticaret siteleri için SEO stratejileri, organik trafik ve satışları artırmada kritik rol oynar. Bu makalede ürün sayfalarınızı nasıl optimize edeceğinizi öğreneceksiniz.",
    date: "2023-12-20",
    readTime: "12 dk",
    category: "E-Ticaret SEO",
    slug: "e-ticaret-seo-urun-sayfalari",
  },
  {
    id: 6,
    title: "Backlink Stratejisi: Kaliteli Linkler Nasıl Alınır?",
    excerpt: "Backlinkler, SEO'nun en önemli faktörlerinden biridir. Bu makalede kaliteli backlinkler nasıl alınacağını ve link building stratejilerini öğreneceksiniz.",
    date: "2023-12-15",
    readTime: "9 dk",
    category: "Off-Page SEO",
    slug: "backlink-stratejisi-kaliteli-linkler",
  },
];

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(["Tümü"]);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadBlogPosts();
  }, [selectedCategory]);

  const loadBlogPosts = async () => {
    try {
      setIsLoading(true);
      const categoryParam =
        selectedCategory === "Tümü" ? "" : `?category=${selectedCategory}`;
      const response = await fetch(`/api/blog${categoryParam}`);
      if (response.ok) {
        const data = await response.json();
        setBlogPosts(data.posts || []);

        // Extract unique categories
        const uniqueCategories = new Set<string>(["Tümü"]);
        data.posts?.forEach((post: BlogPost) => {
          if (post.category) {
            uniqueCategories.add(post.category);
          }
        });
        setCategories(Array.from(uniqueCategories));
      }
    } catch (error) {
      console.error("Error loading blog posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-blue-400 mb-6">
              <FileText className="w-4 h-4" />
              Blog
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                SEO ve Dijital Pazarlama Blogu
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              SEO, dijital pazarlama ve web geliştirme hakkında güncel makaleler, ipuçları ve rehberler.
            </p>
          </motion.div>
        </div>
      </section>

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
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-strong rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="p-6">
                    {post.featuredImage && (
                      <div className="w-full h-48 overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                          {post.publishedAt
                            ? new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            : "—"}
                        </div>
                      </div>
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {post.title}
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

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Yeni Makalelerden Haberdar Olun
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              SEO ve dijital pazarlama hakkında en güncel içerikleri e-posta adresinize gönderelim.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                Abone Ol
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* SEO Audit Section */}
      <SEOAuditSection />
    </>
  );
}

