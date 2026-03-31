import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { BlogPost, Heading, formatDate } from "@/lib/blog";
import SEOAuditSection from "@/components/SEOAuditSection";
import ContactForm from "@/components/ContactForm";
import BlogSidebar from "./BlogSidebar";
import TableOfContents from "./TableOfContents";
import BlogNavigation from "./BlogNavigation";
import BlogLinkPreview from "./BlogLinkPreview";
import BlogMotionWrapper from "./BlogMotionWrapper";

interface BlogPostContentProps {
  post: BlogPost;
  processedHtml: string;
  headings: Heading[];
}

export default function BlogPostContent({ post, processedHtml, headings }: BlogPostContentProps) {
  return (
    <>
      <BlogLinkPreview />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
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
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
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
              <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
                {post.category}
              </div>
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
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                {post.readTime || 5} dk okuma
              </div>
              <div className="hidden sm:block text-gray-600">|</div>
              <div 
                className="bg-white/5 px-3 py-1 rounded-lg border border-white/10 italic font-medium"
                suppressHydrationWarning
              >
                {post.views} görüntüleme
              </div>
            </div>
          </BlogMotionWrapper>
        </div>
      </section>

      {/* Content Layout */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative w-full">
            
            {/* Left Sidebar - Table of Contents */}
            <div className="hidden lg:block lg:col-span-3 self-start">
              <TableOfContents headings={headings} />
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-6 min-w-0 w-full">
              <article className="blog-content w-full">
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
