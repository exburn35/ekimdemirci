import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Tag, Zap, CheckCircle2 } from "lucide-react";
import type { BlogPost, Heading } from "@/lib/blog";
import { formatDate, isSameDay, slugifyCategory } from "@/lib/blog-utils";
import BlogScrollProgress from "./BlogScrollProgress";
import SEOAuditSection from "@/components/SEOAuditSection";
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

export default function BlogPostContent({ post, processedHtml, headings }: BlogPostContentProps) {
  return (
    <>
      <BlogScrollProgress />
      <BlogLinkPreview />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex items-center bg-[#211b39]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#211b39] via-[#1a152e] to-[#211b39]" />
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#211b39] via-[#211b39]/70 to-transparent" />
          </div>
        )}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left">
          <BlogMotionWrapper>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              <span>Blog Yazılarına Dön</span>
            </Link>

            {post.category && (
              <Link
                href={`/kategori/${slugifyCategory(post.category)}`}
                className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 hover:text-white transition-colors rounded-full text-xs font-bold mb-8 uppercase tracking-widest"
              >
                {post.category}
              </Link>
            )}

            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent">
                {post.title.replace(/&#8217;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&')}
              </span>
            </h1>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-400" />
                <time dateTime={post.publishedAt}>
                  {post.publishedAt ? formatDate(post.publishedAt) : "—"}
                </time>
              </div>
              {post.updatedAt && post.publishedAt && !isSameDay(post.updatedAt, post.publishedAt) && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Son Güncelleme: {formatDate(post.updatedAt)}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                {post.readTime || 5} dk okuma
              </div>
              <div className="hidden sm:block text-gray-600">|</div>
              <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold select-none">
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
      <section className="py-20 bg-[#211b39] relative">
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
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#7b5cff] to-[#4a9eff]" />
                    
                    <div className="text-xl md:text-2xl font-extrabold tracking-tight mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-[#7b5cff] animate-pulse flex-shrink-0" />
                      <span className="bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] bg-clip-text text-transparent">
                        TL;DR & Önemli Çıkarımlar
                      </span>
                    </div>

                    {/* Introductory Summary (Excerpt) */}
                    {post.excerpt && (
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Bullet Points / Key Takeaways */}
                    {(post as any).tldr ? (
                      <>
                        <div className="my-4 border-t border-white/5" />
                        <ul className="space-y-2.5 text-gray-300 text-sm md:text-base">
                          {Array.isArray((post as any).tldr) ? (
                            (post as any).tldr.map((item: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#4a9eff] mt-1 flex-shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))
                          ) : (
                            <li className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#4a9eff] mt-1 flex-shrink-0" />
                              <span className="leading-relaxed">{(post as any).tldr}</span>
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
                            <div className="my-4 border-t border-white/5" />
                            <div className="text-xs font-semibold text-purple-400/80 uppercase tracking-wider mb-3">Yazıda Ele Alınan Önemli Konular</div>
                            <ul className="space-y-2.5 text-gray-300 text-sm md:text-base">
                              {keyPoints.map((item) => (
                                <li key={item.id} className="flex items-start gap-2.5">
                                  <CheckCircle2 className="w-4 h-4 text-[#4a9eff] mt-1 flex-shrink-0" />
                                  <span className="leading-relaxed font-medium">{item.text}</span>
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
                  <div className="mt-16 pt-10 border-t border-white/10">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Tag className="w-4 h-4 text-blue-400" />
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 bg-white/5 text-gray-300 rounded-full text-xs font-medium border border-white/5 hover:border-white/20 transition-colors"
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
              <BlogSidebar category={post.category} />
            </div>

          </div>
        </div>
      </section>

      <SEOAuditSection />
      
      <div className="max-w-7xl mx-auto px-4 py-20 border-t border-white/5">
        <ContactForm
          title="Konuyla İlgili Sorun mu Var?"
          description="Ekim Demirci olarak tüm dijital büyüme süreçlerinizde yanınızdayız."
          showTitle={true}
        />
      </div>
    </>
  );
}
