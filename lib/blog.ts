import fs from "fs";
import path from "path";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: any;
  featuredImage?: string;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  category?: string;
  tags?: string[];
  publishedAt?: string;
  updatedAt?: string;
  readTime?: number;
  views: number;
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export function getAllBlogPosts(): BlogPost[] {
  const blogsDir = path.join(process.cwd(), "data", "blogs");
  if (!fs.existsSync(blogsDir)) return [];

  const files = fs.readdirSync(blogsDir);
  return files
    .filter((file) => file.endsWith(".json") && file !== "_index.json")
    .map((file) => {
      try {
        const filePath = path.join(blogsDir, file);
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        return {
          id: file.replace(".json", ""),
          ...data,
        };
      } catch (err) {
        console.error(`Error loading blog file ${file}:`, err);
        return null;
      }
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      return new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime();
    });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  if (slug === "_index") return null;
  try {
    const filePath = path.join(process.cwd(), "data", "blogs", `${slug}.json`);
    if (!fs.existsSync(filePath)) return null;

    const fileData = fs.readFileSync(filePath, "utf-8");
    const post = JSON.parse(fileData);
    return {
      id: slug,
      ...post,
    };
  } catch (err) {
    return null;
  }
}

export function cleanAndProcessHtml(html: string): { cleanHtml: string; headings: Heading[] } {
  if (!html) return { cleanHtml: "", headings: [] };

  // 1. Rewrite internal links
  let processedHtml = html.replace(/<a\s+(?:[^>]*?\s+)?href="https?:\/\/(www\.)?ekimdemirci\.com\/([^"]*)"([^>]*)>/g, (match, www, pathPart, extra) => {
    const slug = pathPart.replace(/\/$/, "");
    let newHref = 'href="/"';
    
    if (slug) {
      const seoServices = ["teknik-seo", "sayfa-ici-seo", "sayfa-disi-seo", "yapay-zeka-seo", "seo-hizmetleri"];
      if (seoServices.includes(slug)) newHref = `href="/seo-hizmetleri/${slug}"`;
      else {
        const sectoralServices = ["sektorel-seo-hizmetleri", "e-ticaret-seo", "avukatlar-icin-seo-hizmeti", "doktorlar-icin-seo-2", "dis-hekimleri-icin-seo-2", "guzellik-merkezleri-icin-seo-2", "hastaneler-icin-seo-2"];
        if (sectoralServices.includes(slug)) newHref = `href="/sektorel-seo-hizmetleri/${slug}"`;
        else if (["iletisim", "hakkimda", "blog", "basari-hikayeleri"].includes(slug)) newHref = `href="/${slug}"`;
        else newHref = `href="/blog/${slug}"`;
      }
    }
    
    const cleanedExtra = extra.replace(/target="_blank"/g, "").replace(/rel="[^"]*"/g, "").trim();
    return `<a ${newHref} ${cleanedExtra}>`;
  });

  // 2. Strip unwanted elements
  processedHtml = processedHtml
    .replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gim, "")
    .replace(/<div[^>]*class="[^"]*(user-info|bs-img|single-info)[^"]*"[^>]*>[\s\S]*?<\/div>/gi, "")
    .replace(/<div[^>]*class="[^"]*(toc|ez-toc|table-of-contents|lwptoc|toc_container)[^"]*"[^>]*>[\s\S]*?<\/div>/gi, "")
    .replace(/<h2[^>]*>İçindekiler<\/h2>\s*<ul[^>]*>[\s\S]*?<\/ul>/i, '');

  // 3. Extract Headings and add IDs
  const headings: Heading[] = [];
  let headingCount = 0;
  
  processedHtml = processedHtml.replace(/<(h2|h3)[^>]*>([\s\S]*?)<\/\1>/gi, (match, tag, content) => {
    const text = content.replace(/<[^>]*>/g, "").trim();
    const id = `heading-${headingCount++}`;
    headings.push({
      id,
      text,
      level: tag.toLowerCase() === "h2" ? 2 : 3
    });
    return `<${tag} id="${id}">${content}</${tag}>`;
  });

  // 4. Rewrite WordPress image paths to /uploads (Handling flat structure by stripping year/month folders)
  processedHtml = processedHtml.replace(/https?:\/\/(www\.)?ekimdemirci\.com\/wp-content\/uploads\/(?:\d{4}\/\d{2}\/)?/g, '/uploads/')
      .replace(/\/wp-content\/uploads\/(?:\d{4}\/\d{2}\/)?/g, '/uploads/');

  return { cleanHtml: processedHtml, headings };
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
