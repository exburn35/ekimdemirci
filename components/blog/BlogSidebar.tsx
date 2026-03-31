import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "../Logo";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";

interface BlogSidebarProps {
  category?: string;
}

export default function BlogSidebar({ category }: BlogSidebarProps) {
  return (
    <aside className="space-y-8 sticky top-24 pb-12">
      {/* Author Box */}
      <div className="glass-strong rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Yazar Hakkında</h3>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5">
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">ED</span>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">Ekim Demirci</h4>
            <p className="text-sm text-blue-400">SEO Uzmanı</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Organik büyüme ve arama motoru optimizasyonu uzmanı. Markaların dijital görünürlüğünü artırmak için veri odaklı stratejiler geliştiriyorum.
        </p>
        <Link href="/hakkimda" className="text-sm text-blue-400 hover:text-white transition-colors inline-flex items-center gap-1">
          Daha fazla bilgi <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Service Banner Embed */}
      <div className="relative rounded-2xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-90 transition-opacity group-hover:opacity-100" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:12px_12px]" />
        
        <div className="relative p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">SEO Hizmetleri</h3>
          <p className="text-gray-200 text-sm mb-6 leading-relaxed">
            Sıralamalarınızı yükseltmek ve organik trafiğinizi artırmak için profesyonel SEO hizmetlerimizle tanışın.
          </p>
          <Link
            href="/seo-hizmetleri"
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full text-sm hover:scale-105 transition-transform"
          >
            Hizmetleri İncele
          </Link>
        </div>
      </div>



      {/* Related Posts in Sidebar */}
      <div className="mt-8">
        <RelatedBlogPosts category={category || "SEO"} />
      </div>
    </aside>
  );
}
