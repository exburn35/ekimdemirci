import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { decodeHtmlEntities, type BreadcrumbItem } from "@/lib/breadcrumbs";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  // Ensure items start with Anasayfa
  const normalizedItems: BreadcrumbItem[] =
    items[0]?.href === "/" || items[0]?.name.toLowerCase() === "anasayfa"
      ? items
      : [{ name: "Anasayfa", href: "/" }, ...items];

  const baseUrl = "https://ekimdemirci.com";

  // Generate Schema.org JSON-LD BreadcrumbList
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": normalizedItems.map((item, index) => {
      const cleanName = decodeHtmlEntities(item.name);
      const url = item.href
        ? (item.href.startsWith("http") ? item.href : `${baseUrl}${item.href === "/" ? "" : item.href}`)
        : undefined;

      const listItem: Record<string, any> = {
        "@type": "ListItem",
        "position": index + 1,
        "name": cleanName,
      };

      if (url) {
        listItem.item = url;
      }

      return listItem;
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav aria-label="Breadcrumb" className="w-full pt-24 pb-4 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex max-w-full">
            <ol className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-900/70 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/40 text-xs sm:text-sm max-w-full overflow-hidden">
              {normalizedItems.map((item, index) => {
                const isFirst = index === 0;
                const isLast = index === normalizedItems.length - 1;
                const cleanName = decodeHtmlEntities(item.name);

                return (
                  <li key={item.href || index} className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                    {!isFirst && (
                      <ChevronRight className="w-3.5 h-3.5 text-purple-400/50 flex-shrink-0" aria-hidden="true" />
                    )}

                    {isFirst ? (
                      <Link
                        href="/"
                        className="group flex items-center gap-1.5 text-slate-400 hover:text-white transition-all duration-200 flex-shrink-0"
                        title="Anasayfa"
                      >
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 group-hover:scale-105 transition-all">
                          <Home className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                        <span className="sr-only">Anasayfa</span>
                        <span className="font-medium hidden sm:inline text-xs ml-1">Anasayfa</span>
                      </Link>
                    ) : isLast ? (
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-200 font-semibold text-xs tracking-wide shadow-sm min-w-0 max-w-[190px] xs:max-w-[240px] sm:max-w-[360px] md:max-w-[500px] lg:max-w-[650px]"
                        aria-current="page"
                        title={cleanName}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse flex-shrink-0" aria-hidden="true"></span>
                        <span className="truncate">{cleanName}</span>
                      </span>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className="text-slate-300 hover:text-white font-medium text-xs px-2 py-1 rounded-md hover:bg-white/5 transition-all whitespace-nowrap flex-shrink-0"
                      >
                        {cleanName}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </nav>
    </>
  );
}
