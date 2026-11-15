import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Tag, Zap, CheckCircle2 } from "lucide-react";
import type { BlogPost, Heading } from "@/lib/blog";
import { getRelatedBlogPosts } from "@/lib/blog";
import { formatDate, isSameDay, slugifyCategory, decodeHtmlEntities } from "@/lib/blog-utils";
import BlogScrollProgress from "./BlogScrollProgress";
import SEOAuditSection from "@/components/SEOAuditSection";
import RelatedPages from "@/components/RelatedPages";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import ContactForm from "@/components/ContactForm";
import BlogSidebar from "./BlogSidebar";
import TableOfContents from "./TableOfContents";
import BlogNavigation from "./BlogNavigation";
import BlogLinkPreview from "./BlogLinkPreview";
import BlogMotionWrapper from "./BlogMotionWrapper";
import AISummarizer from "./AISummarizer";
import BlogSocialShare from "./BlogSocialShare";

interface BlogPostContentProps {
  post: BlogPost;
  processedHtml: string;
  headings: Heading[];
}

function formatTldrText(text: string) {
  if (!text || typeof text !== "string") return text;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  if (parts.length === 1) return text;
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="text-ink font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function BlogPostContent({ post, processedHtml, headings }: BlogPostContentProps) {
  const sidebarPosts = getRelatedBlogPosts({
    currentSlug: post.slug,
    category: post.category,
    tags: post.tags,
    limit: 3,
  });
  const sidebarSlugs = sidebarPosts.map((p) => p.slug);
  const sliderPosts = getRelatedBlogPosts({
    currentSlug: post.slug,
    category: post.category,
    tags: post.tags,
    limit: 9,
    excludeSlugs: sidebarSlugs,
  });
  return (
    <>
      <BlogScrollProgress />
      <BlogLinkPreview />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[min(60vh,640px)] flex items-center bg-canvas-alt">
        <div className="absolute inset-0 bg-gradient-to-br from-canvas-alt via-canvas-alt to-canvas-alt" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {post.featuredImage && (
          <div className="absolute inset-0 opacity-30 select-none pointer-events-none">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover transition-opacity duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas-alt via-canvas-alt/70 to-transparent" />
          </div>
        )}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left">
          <BlogMotionWrapper>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-ink-muted hover:text-ink transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              <span>Blog Yazılarına Dön</span>
            </Link>

            {post.category && (
              <Link
                href={`/kategori/${slugifyCategory(post.category)}`}
                className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-600 hover:bg-blue-500/20 hover:text-ink transition-colors rounded-full text-xs font-bold mb-8 uppercase tracking-widest"
              >
                {post.category}
              </Link>
            )}

            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.18] tracking-tight">
              <span className="text-ink">
                {decodeHtmlEntities(post.title)}
              </span>
            </h1>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-ink-muted text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <time dateTime={post.publishedAt}>
                  {post.publishedAt ? formatDate(post.publishedAt) : "—"}
                </time>
              </div>
              {post.updatedAt && post.publishedAt && !isSameDay(post.updatedAt, post.publishedAt) && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span>Son Güncelleme: {formatDate(post.updatedAt)}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-600" />
                {post.readTime || 5} dk okuma
              </div>
              <div className="hidden sm:block text-ink-faint">|</div>
              <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold select-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Güncel İçerik</span>
              </div>
            </div>
          </BlogMotionWrapper>
        </div>
      </section>

      {/* Content Layout */}
      <section className="py-20 bg-canvas-alt relative">
        <div className="max-w-7xl lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative w-full">
            
            {/* Left Sidebar - Table of Contents & Sharing */}
            <div className="hidden lg:block lg:col-span-3 sticky top-28 self-start space-y-6">
              <AISummarizer post={post} />
              <TableOfContents headings={headings} />
              <BlogSocialShare title={post.title} slug={post.slug} />
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-6 min-w-0 w-full">
              <article className="blog-content w-full">
                {/* TL;DR Section */}
                {((post as any).tldr || post.excerpt) && (
                  <div className="mb-10 p-6 bg-purple-500/[0.03] backdrop-blur-md rounded-2xl border border-purple-500/20 relative overflow-hidden group">
                    {/* Visual Accent */}
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-brand to-accent" />
                    
                    <div className="text-xl md:text-2xl font-extrabold tracking-tight mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-[#7b5cff] animate-pulse flex-shrink-0" />
                      <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                        TL;DR & Önemli Çıkarımlar
                      </span>
                    </div>

                    {/* Introductory Summary (Excerpt) */}
                    {post.excerpt && (
                      <p className="text-ink-soft text-sm md:text-base leading-relaxed mb-4">
                        {decodeHtmlEntities(post.excerpt)}
                      </p>
                    )}

                    {/* Bullet Points / Key Takeaways */}
                    {(post as any).tldr ? (
                      <>
                        <div className="my-4 border-t border-line" />
                        <ul className="space-y-2.5 text-ink-soft text-sm md:text-base">
                          {Array.isArray((post as any).tldr) ? (
                            (post as any).tldr.map((item: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
                                <span className="leading-relaxed">{formatTldrText(item)}</span>
                              </li>
                            ))
                          ) : (
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
                              <span className="leading-relaxed">{formatTldrText((post as any).tldr)}</span>
                            </li>
                          )}
                        </ul>
                      </>
                    ) : (
                      (() => {
                        const keyPoints = headings.filter(h => h.level === 2).slice(0, 4);
                        if (keyPoints.length === 0) return null;
                        return (
                          <>
                            <div className="my-4 border-t border-line" />
                            <div className="text-xs font-semibold text-purple-400/80 uppercase tracking-wider mb-3">Yazıda Ele Alınan Önemli Konular</div>
                            <ul className="space-y-2.5 text-ink-soft text-sm md:text-base">
                              {keyPoints.map((item) => (
                                <li key={item.id} className="flex items-start gap-2.5">
                                  <CheckCircle2 className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
                                  <a
                                    href={`#${item.id}`}
                                    className="leading-relaxed font-medium hover:text-brand transition-colors"
                                  >
                                    {item.text}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </>
                        );
                      })()
                    )}
                  </div>
                )}

                {processedHtml && (
                  <div
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: processedHtml }}
                  />
                )}

                {/* Tags Section */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-16 pt-10 border-t border-line">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Tag className="w-4 h-4 text-blue-600" />
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 bg-white text-ink-soft rounded-full text-xs font-medium border border-line hover:border-line-strong transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
              
              <BlogNavigation currentSlug={post.slug} />
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-3 self-start space-y-8">
              <div className="lg:hidden">
                <TableOfContents headings={headings} />
              </div>
              <BlogSidebar category={post.category} posts={sidebarPosts} />
            </div>

          </div>
        </div>
      </section>

      {/* Related Blog Posts Full Slider */}
      <RelatedBlogPosts posts={sliderPosts} category={post.category} variant="slider" />

      <SEOAuditSection />
      
      <div className="max-w-7xl mx-auto px-4 py-20 border-t border-line">
        <ContactForm
          title="Konuyla İlgili Sorun mu Var?"
          description="Tüm dijital büyüme süreçlerinizde yanınızdayım."
          showTitle={true}
        />
      </div>
    </>
  );
}
