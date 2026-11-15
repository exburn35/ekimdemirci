import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getBlogNavigation } from "@/lib/blog";

export default function BlogNavigation({ currentSlug }: { currentSlug: string }) {
  const { prevPost, nextPost } = getBlogNavigation(currentSlug);

  if (!prevPost && !nextPost) return null;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-16 pt-8 border-t border-line gap-6">
      {prevPost ? (
        <Link 
          href={`/blog/${prevPost.slug}`}
          className="flex-1 group flex flex-col items-start p-6 rounded-2xl bg-white border border-line hover:border-blue-500/30 hover:bg-ink/5 transition-all w-full"
        >
          <span className="text-ink-faint text-sm mb-2 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Önceki Yazı
          </span>
          <span className="text-ink font-semibold line-clamp-2 text-left group-hover:text-blue-600 transition-colors">
            {prevPost.title}
          </span>
        </Link>
      ) : <div className="flex-1" />}

      {nextPost ? (
        <Link 
          href={`/blog/${nextPost.slug}`}
          className="flex-1 group flex flex-col items-end p-6 rounded-2xl bg-white border border-line hover:border-purple-500/30 hover:bg-ink/5 transition-all text-right w-full"
        >
          <span className="text-ink-faint text-sm mb-2 flex items-center gap-2">
            Sonraki Yazı <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="text-ink font-semibold line-clamp-2 text-right group-hover:text-purple-600 transition-colors">
            {nextPost.title}
          </span>
        </Link>
      ) : <div className="flex-1" />}
    </div>
  );
}
