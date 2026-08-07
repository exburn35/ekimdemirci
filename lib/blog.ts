import fs from "fs";
import path from "path";
import { decodeHtmlEntities, slugifyCategory } from "./blog-utils";
import { processSourceBadgesInHtml } from "./source-badges";
export { slugifyCategory };

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

export interface CategoryDetails {
  name: string;
  slug: string;
  description: string;
}

export const CATEGORY_DESCRIPTIONS: Record<string, CategoryDetails> = {
  "google-patentler": {
    name: "Google Patentler",
    slug: "google-patentler",
    description: "Google'ın arama algoritmasının temelini oluşturan patentleri tek tek ele alan, teknik derinlikli bir SEO inceleme serisi.",
  },
  "geo": {
    name: "GEO",
    slug: "geo",
    description: "Generative Engine Optimization, yapay zeka arama motorları ve AEO görünürlük stratejileri rehberi.",
  },
  "seo": {
    name: "SEO",
    slug: "seo",
    description: "Arama motoru optimizasyonu, sıralama algoritmaları ve organik büyüme stratejileri.",
  },
};



export function getCategoryBySlug(slug: string): CategoryDetails | null {
  const normalizedSlug = slug.toLowerCase();
  if (CATEGORY_DESCRIPTIONS[normalizedSlug]) {
    return CATEGORY_DESCRIPTIONS[normalizedSlug];
  }
  const allPosts = getAllBlogPosts();
  const matchedPost = allPosts.find(p => p.category && slugifyCategory(p.category) === normalizedSlug);
  if (matchedPost && matchedPost.category) {
    return {
      name: matchedPost.category,
      slug: normalizedSlug,
      description: `${matchedPost.category} alanında teknik derinlikli rehberler, incelemeler ve stratejiler.`,
    };
  }
  return null;
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  const normalizedSlug = categorySlug.toLowerCase();
  const allPosts = getAllBlogPosts();
  return allPosts.filter(p => p.category && slugifyCategory(p.category) === normalizedSlug);
}

export function getAllCategories(): CategoryDetails[] {
  const allPosts = getAllBlogPosts();
  const categoryNames = Array.from(new Set(allPosts.map(p => p.category).filter(Boolean) as string[]));
  
  return categoryNames.map(name => {
    const slug = slugifyCategory(name);
    return getCategoryBySlug(slug) || {
      name,
      slug,
      description: `${name} alanında teknik derinlikli rehberler ve incelemeler.`,
    };
  });
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

function stripElementByPattern(html: string, pattern: RegExp): string {
  let match = pattern.exec(html);
  while (match) {
    const matchIndex = match.index;
    const matchedText = match[0];
    
    let startTagPos = html.lastIndexOf("<", matchIndex);
    if (startTagPos === -1) {
      pattern.lastIndex = matchIndex + matchedText.length;
      match = pattern.exec(html);
      continue;
    }
    
    let tagMatch = html.substring(startTagPos + 1).match(/^[a-zA-Z0-9]+/);
    if (!tagMatch) {
      pattern.lastIndex = matchIndex + matchedText.length;
      match = pattern.exec(html);
      continue;
    }
    const tagName = tagMatch[0];
    const openTagStr = `<${tagName}`;
    const closeTagStr = `</${tagName}>`;
    
    let openingTagEnd = html.indexOf(">", startTagPos);
    if (openingTagEnd === -1) {
      pattern.lastIndex = matchIndex + matchedText.length;
      match = pattern.exec(html);
      continue;
    }
    
    let depth = 1;
    let pos = openingTagEnd + 1;
    let endTagPos = -1;
    
    while (pos < html.length) {
      if (html.substring(pos, pos + openTagStr.length) === openTagStr && !/[a-zA-Z0-9]/.test(html.charAt(pos + openTagStr.length))) {
        depth++;
        pos += openTagStr.length;
      } else if (html.substring(pos, pos + closeTagStr.length) === closeTagStr) {
        depth--;
        if (depth === 0) {
          endTagPos = pos;
          break;
        }
        pos += closeTagStr.length;
      } else {
        pos++;
      }
    }
    
    if (endTagPos !== -1) {
      html = html.substring(0, startTagPos) + html.substring(endTagPos + closeTagStr.length);
      pattern.lastIndex = 0;
    } else {
      pattern.lastIndex = matchIndex + matchedText.length;
    }
    match = pattern.exec(html);
  }
  return html;
}

function stripFirstElementByPattern(html: string, pattern: RegExp): string {
  let match = pattern.exec(html);
  if (match) {
    const matchIndex = match.index;
    const matchedText = match[0];
    
    let startTagPos = html.lastIndexOf("<", matchIndex);
    if (startTagPos !== -1) {
      let tagMatch = html.substring(startTagPos + 1).match(/^[a-zA-Z0-9]+/);
      if (tagMatch) {
        const tagName = tagMatch[0];
        const openTagStr = `<${tagName}`;
        const closeTagStr = `</${tagName}>`;
        
        let openingTagEnd = html.indexOf(">", startTagPos);
        if (openingTagEnd !== -1) {
          let depth = 1;
          let pos = openingTagEnd + 1;
          let endTagPos = -1;
          
          while (pos < html.length) {
            if (html.substring(pos, pos + openTagStr.length) === openTagStr && !/[a-zA-Z0-9]/.test(html.charAt(pos + openTagStr.length))) {
              depth++;
              pos += openTagStr.length;
            } else if (html.substring(pos, pos + closeTagStr.length) === closeTagStr) {
              depth--;
              if (depth === 0) {
                endTagPos = pos;
                break;
              }
              pos += closeTagStr.length;
            } else {
              pos++;
            }
          }
          
          if (endTagPos !== -1) {
            html = html.substring(0, startTagPos) + html.substring(endTagPos + closeTagStr.length);
          }
        }
      }
    }
  }
  return html;
}


export function cleanAndProcessHtml(html: string): { cleanHtml: string; headings: Heading[] } {
  if (!html) return { cleanHtml: "", headings: [] };

  try {
    // 1. Rewrite internal links
    let processedHtml = html.replace(/<a\s+(?:[^>]*?\s+)?href="https?:\/\/(www\.)?ekimdemirci\.com\/([^"]*)"([^>]*)>/g, (match, www, pathPart, extra) => {
      const slug = pathPart.replace(/\/$/, "");
      let newHref = 'href="/"';
      
      if (slug) {
        const seoServices = ["teknik-seo", "sayfa-ici-seo", "sayfa-disi-seo", "yapay-zeka-seo", "seo-hizmetleri"];
        if (slug === "on-page-seo" || slug === "sayfa-ici-seo") newHref = 'href="/seo-hizmetleri/sayfa-ici-seo"';
        else if (slug === "off-page-seo" || slug === "sayfa-disi-seo") newHref = 'href="/seo-hizmetleri/sayfa-disi-seo"';
        else if (seoServices.includes(slug)) newHref = `href="/seo-hizmetleri/${slug}"`;
        else {
          const sectoralServices = ["sektorel-seo-hizmetleri", "e-ticaret-seo", "saglik-ve-klinik-seo", "yerel-isletme-seo", "kurumsal-b2b-seo", "avukatlar-icin-seo-hizmeti", "doktorlar-icin-seo-2", "dis-hekimleri-icin-seo-2", "guzellik-merkezleri-icin-seo-2", "hastaneler-icin-seo-2"];
          if (sectoralServices.includes(slug)) newHref = `href="/sektorel-seo-hizmetleri/${slug}"`;
          else if (["iletisim", "hakkimda", "blog", "basari-hikayeleri", "geo-danismanligi", "audit-talebi", "cerez-politikasi", "gizlilik-politikasi", "kullanim-kosullari", "seo-danismanlik-fiyatlari", "sikca-sorulan-sorular", "tools"].includes(slug) || slug.startsWith("kategori/")) newHref = `href="/${slug}"`;
          else newHref = `href="/blog/${slug}"`;
        }
      }
      
      const cleanedExtra = extra.replace(/target="_blank"/g, "").replace(/rel="[^"]*"/g, "").trim();
      return `<a ${newHref} ${cleanedExtra}>`;
    });

    // 2. Strip unwanted elements using safe balance parser
    processedHtml = processedHtml.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gim, "");
    
    try { processedHtml = stripElementByPattern(processedHtml, /class="[^"]*user-info[^"]*"/g); } catch (e) {}
    try { processedHtml = stripFirstElementByPattern(processedHtml, /class="[^"]*bs-img[^"]*"/g); } catch (e) {}
    try { processedHtml = stripElementByPattern(processedHtml, /class="[^"]*single-info[^"]*"/g); } catch (e) {}
    try { processedHtml = stripElementByPattern(processedHtml, /id="ez-toc-container"/g); } catch (e) {}
    try { processedHtml = stripElementByPattern(processedHtml, /class="[^"]*ez-toc-container[^"]*"/g); } catch (e) {}
    try { processedHtml = stripElementByPattern(processedHtml, /class="[^"]*(toc|table-of-contents|lwptoc|toc_container)[^"]*"/g); } catch (e) {}
    
    processedHtml = processedHtml.replace(/<h2[^>]*>İçindekiler<\/h2>\s*<ul[^>]*>[\s\S]*?<\/ul>/i, '');

    // 3. Extract Headings and add IDs
    const headings: Heading[] = [];
    let headingCount = 0;
    
    processedHtml = processedHtml.replace(/<(h2|h3)[^>]*>([\s\S]*?)<\/\1>/gi, (match, tag, content) => {
      const text = content.replace(/<[^>]*>/g, "").trim();
      const id = `heading-${headingCount++}`;
      headings.push({
        id,
        text: decodeHtmlEntities(text),
        level: tag.toLowerCase() === "h2" ? 2 : 3
      });
      return `<${tag} id="${id}">${content}</${tag}>`;
    });

    // 4. Rewrite WordPress image paths to /uploads
    processedHtml = processedHtml.replace(/https?:\/\/(www\.)?ekimdemirci\.com\/wp-content\/uploads\/(?:\d{4}\/\d{2}\/)?/g, '/uploads/')
        .replace(/\/wp-content\/uploads\/(?:\d{4}\/\d{2}\/)?/g, '/uploads/');

    // 5. Process Source Badges for Kaynaklar section
    processedHtml = processSourceBadgesInHtml(processedHtml);

    return { cleanHtml: decodeHtmlEntities(processedHtml), headings };
  } catch (error) {
    console.error("Error processing blog HTML:", error);
    return { cleanHtml: decodeHtmlEntities(html), headings: [] };
  }
}

export { decodeHtmlEntities, formatDate, formatDateShort, isSameDay } from "./blog-utils";
