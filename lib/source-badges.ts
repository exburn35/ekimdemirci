/**
 * Utility module for detecting and rendering Source Badges in blog "Kaynaklar" sections.
 */

export interface SourceBadgeCategory {
  type: "patent" | "academic" | "official" | "news" | "analysis";
  label: string;
  bgColor: string;
  textColor: string;
  svgIcon: string;
}

export function detectSourceCategory(url: string, text: string = ""): SourceBadgeCategory {
  const lowerUrl = (url || "").toLowerCase();
  const lowerText = (text || "").toLowerCase();

  // 1. PATENT
  if (
    lowerUrl.includes("patents.google.com") ||
    lowerUrl.includes("google.com/patents") ||
    lowerText.includes("us patent") ||
    lowerText.includes("patent no") ||
    lowerText.includes("patent başvurusu")
  ) {
    return {
      type: "patent",
      label: "Patent",
      bgColor: "#1a237e",
      textColor: "#ffffff",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>`
    };
  }

  // 2. AKADEMİK MAKALE
  if (
    lowerUrl.includes("arxiv.org") ||
    lowerUrl.includes("dl.acm.org") ||
    lowerUrl.includes("doi.org") ||
    lowerUrl.includes("researchgate.net") ||
    lowerUrl.includes("springer.com") ||
    lowerUrl.includes("sciencedirect.com") ||
    lowerUrl.includes("ieee.org") ||
    lowerText.includes("kdd") ||
    lowerText.includes("acm") ||
    lowerText.includes("ieee") ||
    lowerText.includes("proceedings") ||
    lowerText.includes("conference") ||
    lowerText.includes("arxiv") ||
    lowerText.includes("journal") ||
    lowerText.includes("makale")
  ) {
    return {
      type: "academic",
      label: "Akademik Makale",
      bgColor: "#6a1b9a",
      textColor: "#ffffff",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`
    };
  }

  // 3. RESMİ DOKÜMANTASYON
  if (
    lowerUrl.includes("developers.google.com") ||
    lowerUrl.includes("blog.google") ||
    lowerUrl.includes("support.google.com") ||
    lowerUrl.includes("search.google.com") ||
    lowerUrl.includes("w3.org") ||
    lowerUrl.includes("schema.org") ||
    lowerUrl.includes("github.com/google") ||
    lowerUrl.includes("google.com/search")
  ) {
    return {
      type: "official",
      label: "Resmi Kaynak",
      bgColor: "#2e7d32",
      textColor: "#ffffff",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
    };
  }

  // 4. HABER / GAZETECİLİK
  if (
    lowerUrl.includes("searchengineland.com") ||
    lowerUrl.includes("bloomberg.com") ||
    lowerUrl.includes("digiday.com") ||
    lowerUrl.includes("reuters.com") ||
    lowerUrl.includes("nytimes.com") ||
    lowerUrl.includes("wsj.com") ||
    lowerUrl.includes("forbes.com") ||
    lowerUrl.includes("techcrunch.com") ||
    lowerUrl.includes("wired.com") ||
    lowerUrl.includes("bbc.com") ||
    lowerUrl.includes("theverge.com") ||
    lowerUrl.includes("businessinsider.com")
  ) {
    return {
      type: "news",
      label: "Haber Kaynağı",
      bgColor: "#e65100",
      textColor: "#ffffff",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8z"/></svg>`
    };
  }

  // 5. SEKTÖR ANALİZİ / ARAÇ SİTESİ (Default)
  return {
    type: "analysis",
    label: "Sektör Analizi",
    bgColor: "#546e7a",
    textColor: "#ffffff",
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
  };
}

export function createSourceBadgeHtml(cat: SourceBadgeCategory): string {
  return `<span class="source-badge inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide border border-white/10 shadow-sm shrink-0 select-none transition-transform hover:scale-105" style="background-color: ${cat.bgColor}; color: ${cat.textColor};">${cat.svgIcon}<span>${cat.label}</span></span>`;
}

/**
 * Transforms blog HTML content to inject source badges ONLY in the "Kaynaklar" section list items.
 */
export function processSourceBadgesInHtml(html: string): string {
  if (!html) return html;

  // Match the exact Kaynaklar heading section (handles any id like id="kaynaklar" or id="heading-12")
  const kaynaklarHeaderMatch = html.match(/<h2\b[^>]*>(?:\s*<[^>]+>)*\s*Kaynaklar\s*(?:<[^>]+>)*\s*<\/h2>/i);
  if (!kaynaklarHeaderMatch || kaynaklarHeaderMatch.index === undefined) {
    return html;
  }

  const kaynaklarIndex = kaynaklarHeaderMatch.index;
  const beforeKaynaklar = html.substring(0, kaynaklarIndex);
  let kaynaklarSection = html.substring(kaynaklarIndex);

  // Replace <li> items ONLY within the Kaynaklar section
  kaynaklarSection = kaynaklarSection.replace(
    /<li\b([^>]*)>([\s\S]*?)<\/li>/gi,
    (match, liAttrs, liContent) => {
      // Don't re-process if already processed
      if (liContent.includes('class="source-badge') || liContent.includes("source-badge")) {
        return match;
      }

      // Extract href from link if available
      const hrefMatch = liContent.match(/href="([^"]+)"/i);
      const url = hrefMatch ? hrefMatch[1] : "";
      
      const cat = detectSourceCategory(url, liContent);
      const badgeHtml = createSourceBadgeHtml(cat);

      // Check if there is an <a href=...> link element
      if (liContent.includes("<a ")) {
        // Wrap link & badge together in a flex gap container for responsiveness
        const transformedLiContent = liContent.replace(
          /<a\b([^>]*)>([\s\S]*?)<\/a>/i,
          (aMatch: string, aAttrs: string, aText: string) => {
            return `<div class="flex items-center gap-2 shrink-0 self-end sm:self-start flex-wrap">${badgeHtml}<a ${aAttrs}>${aText}</a></div>`;
          }
        );
        return `<li ${liAttrs}>${transformedLiContent}</li>`;
      } else {
        return `<li ${liAttrs}>${liContent} ${badgeHtml}</li>`;
      }
    }
  );

  return beforeKaynaklar + kaynaklarSection;
}
