export function decodeHtmlEntities(str: string): string {
  if (!str) return "";
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lsquo;|&#8216;/g, "‘")
    .replace(/&rsquo;|&#8217;/g, "’")
    .replace(/&ldquo;|&#8220;/g, "“")
    .replace(/&rdquo;|&#8221;/g, "”")
    .replace(/&ndash;|&#8211;/g, "–")
    .replace(/&mdash;|&#8212;/g, "—")
    .replace(/&middot;|&#183;/g, "·")
    .replace(/&quot;|&#34;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&nbsp;|&#160;/g, "\u00a0");
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "";
    return new Intl.DateTimeFormat("tr-TR", {
      timeZone: "Europe/Istanbul",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(d);
  } catch (e) {
    return "";
  }
}

export function formatDateShort(dateStr: string): string {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "";
    return new Intl.DateTimeFormat("tr-TR", {
      timeZone: "Europe/Istanbul",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(d);
  } catch (e) {
    return "";
  }
}

export function isSameDay(dateStr1: string, dateStr2: string): boolean {
  if (!dateStr1 || !dateStr2) return false;
  try {
    const d1 = new Date(dateStr1);
    const d2 = new Date(dateStr2);
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return false;
    const format = (d: Date) => 
      new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Istanbul",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(d);
    return format(d1) === format(d2);
  } catch (e) {
    return false;
  }
}

export function slugifyCategory(category: string): string {
  if (!category) return "";
  return category
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
