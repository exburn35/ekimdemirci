"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { PageComponent } from "@/components/admin/pages/PageBuilder";
import SEOAuditSection from "@/components/SEOAuditSection";
import ContactForm from "@/components/ContactForm";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: any;
  components?: PageComponent[] | null;
  featuredImage?: string;
  category?: string;
  tags?: string[];
  publishedAt?: string;
  readTime?: number;
  views: number;
}

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        {post.featuredImage && (
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${post.featuredImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {post.category && (
              <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6">
                {post.category}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {post.title}
              </span>
            </h1>

            {post.excerpt && (
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "—"}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime || 5} dk okuma
              </div>
              <div>{post.views} görüntüleme</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert prose-lg max-w-none">
            {post.content?.html && (
              <div
                dangerouslySetInnerHTML={{ __html: post.content.html }}
                className="text-gray-300 leading-relaxed"
              />
            )}

            {/* Render components if any */}
            {post.components && Array.isArray(post.components) && (
              <div className="mt-12 space-y-12">
                {post.components.map((component, index) => (
                  <div key={component.id || index}>
                    {/* Component rendering would go here */}
                    {/* For now, we'll just show a placeholder */}
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                      <p className="text-gray-400 text-sm mb-2">
                        Component: {component.type}
                      </p>
                      <pre className="text-xs text-gray-500 overflow-auto">
                        {JSON.stringify(component.data, null, 2)}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-gray-400" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </section>

      <SEOAuditSection />
      <ContactForm
        title="Sorularınız mı var?"
        description="Blog yazısı hakkında sorularınız varsa bana ulaşabilirsiniz!"
        showTitle={true}
      />
    </>
  );
}

