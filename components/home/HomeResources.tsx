import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, BookA, Building2, HelpCircle } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { slugifyCategory } from "@/lib/blog";
import SectionHeading from "./SectionHeading";

const guides = [
  { icon: BookA, title: "SEO Sözlüğü", text: "Canonical'dan E-E-A-T'ye, sık karşılaşılan terimlerin sade açıklamaları.", href: "/seo-sozlugu" },
  { icon: Building2, title: "SEO Ajansları Rehberi", text: "Türkiye'deki ajansları karşılaştırırken nelere bakmanız gerektiği.", href: "/seo-ajanslari" },
  { icon: HelpCircle, title: "Sıkça Sorulan Sorular", text: "Süreç, süre, ölçüm ve sözleşme hakkında merak edilenler.", href: "/sikca-sorulan-sorular" },
];

export default function HomeResources({ posts }: { posts: BlogPost[] }) {
  const latest = posts.slice(0, 3);
  const categoryCounts = posts.reduce<Record<string, number>>((acc, post) => {
    if (post.category) acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <section id="kaynaklar" className="bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ücretsiz kaynaklar"
          title="Önce kendiniz öğrenmek isterseniz"
          intro={`Bildiğim her şeyi bir danışmanlık paketinin arkasına saklamıyorum. Blogda ${posts.length} rehber, bir terim sözlüğü ve sektörü tanımanıza yardımcı olacak karşılaştırmalar var.`}
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="relative aspect-[16/9] bg-canvas-alt">
                {post.featuredImage ? (
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs font-medium text-ink-muted">
                  {post.category ? <span className="rounded-full bg-brand-light px-2.5 py-1 text-brand">{post.category}</span> : null}
                  {post.readTime ? <span>{post.readTime} dk okuma</span> : null}
                </div>
                <h3 className="mt-3 line-clamp-2 font-bold leading-snug text-ink">{post.title}</h3>
                {post.excerpt ? <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p> : null}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-line bg-white p-7 shadow-card">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-ink">Blog kategorileri</h3>
            <ul className="mt-4 divide-y divide-line">
              {Object.entries(categoryCounts).map(([name, count]) => (
                <li key={name}>
                  <Link
                    href={`/kategori/${slugifyCategory(name)}`}
                    className="flex items-center justify-between py-2.5 text-sm font-medium text-ink-soft transition-colors hover:text-brand"
                  >
                    {name}
                    <span className="rounded-full bg-canvas px-2 py-0.5 text-xs text-ink-muted">{count} yazı</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/blog" className="group mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
              Tüm yazılar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-1">
            {guides.map(({ icon: Icon, title, text, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-5 rounded-3xl border border-line bg-white p-6 shadow-card transition-all hover:border-brand/30"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent-dark">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{text}</p>
                </div>
                <ArrowRight className="hidden h-5 w-5 shrink-0 text-ink-faint transition-all group-hover:translate-x-1 group-hover:text-brand lg:block" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
