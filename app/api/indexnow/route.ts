import { NextRequest, NextResponse } from "next/server";
import { pingIndexNow, SITE_HOST } from "@/lib/indexnow";
import { getAllBlogPosts } from "@/lib/blog";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const urls = body.urls || body.url;

    if (!urls) {
      return NextResponse.json(
        { success: false, error: "Please provide 'urls' array or string in JSON body." },
        { status: 400 }
      );
    }

    const result = await pingIndexNow(urls);
    return NextResponse.json(result, { status: result.success ? 200 : 400 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const targetUrl = searchParams.get("url");
    const pingAll = searchParams.get("all") === "true";

    if (pingAll) {
      // Gather all site URLs
      const staticPages = [
        "/",
        "/hakkimda",
        "/blog",
        "/seo-hizmetleri",
        "/seo-hizmetleri/teknik-seo",
        "/seo-hizmetleri/sayfa-ici-seo",
        "/seo-hizmetleri/sayfa-disi-seo",
        "/seo-hizmetleri/yapay-zeka-seo",
        "/geo-danismanligi",
        "/seo-danismanlik-fiyatlari",
        "/sektorel-seo-hizmetleri",
        "/sektorel-seo-hizmetleri/e-ticaret-seo",
        "/sektorel-seo-hizmetleri/saglik-ve-klinik-seo",
        "/sektorel-seo-hizmetleri/yerel-isletme-seo",
        "/sektorel-seo-hizmetleri/kurumsal-b2b-seo",
        "/basari-hikayeleri",
        "/sikca-sorulan-sorular",
        "/iletisim",
      ];

      const blogPosts = getAllBlogPosts();
      const blogUrls = blogPosts.map((post) => `/blog/${post.slug}`);
      
      const allUrls = Array.from(new Set([...staticPages, ...blogUrls]));
      const result = await pingIndexNow(allUrls);

      return NextResponse.json({
        message: `Bulk IndexNow submission triggered for ${allUrls.length} URLs.`,
        ...result,
      });
    }

    if (!targetUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "Usage: GET /api/indexnow?url=/blog/my-slug OR GET /api/indexnow?all=true",
        },
        { status: 400 }
      );
    }

    const result = await pingIndexNow(targetUrl);
    return NextResponse.json(result, { status: result.success ? 200 : 400 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
