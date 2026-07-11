import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const blogsDir = path.join(process.cwd(), "data", "blogs");
const indexPath = path.join(blogsDir, "_index.json");

// Ensure directory exists
function ensureBlogsDir() {
  if (!fs.existsSync(blogsDir)) {
    fs.mkdirSync(blogsDir, { recursive: true });
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const filter = searchParams.get("filter") || "all";

    ensureBlogsDir();

    let posts: any[] = [];
    if (fs.existsSync(indexPath)) {
      try {
        const fileData = fs.readFileSync(indexPath, "utf-8");
        posts = JSON.parse(fileData);
      } catch (e) {
        console.error("Error reading blog index:", e);
      }
    } else {
      // Fallback: Scan files
      const files = fs.readdirSync(blogsDir);
      posts = files
        .filter((file) => file.endsWith(".json") && file !== "_index.json")
        .map((file) => {
          try {
            const fileData = fs.readFileSync(path.join(blogsDir, file), "utf-8");
            const data = JSON.parse(fileData);
            const { content, components, ...meta } = data;
            return {
              id: file.replace(".json", ""),
              ...meta,
            };
          } catch (e) {
            return null;
          }
        })
        .filter((p): p is any => p !== null);
    }

    // Map id to slug for front-end compatibility
    let mappedPosts = posts.map((post: any) => ({
      ...post,
      id: post.slug,
      createdAt: post.publishedAt || post.updatedAt || new Date().toISOString(),
      updatedAt: post.updatedAt || post.publishedAt || new Date().toISOString(),
    }));

    // Apply filter
    if (filter === "published") {
      mappedPosts = mappedPosts.filter((post) => post.published);
    } else if (filter === "draft") {
      mappedPosts = mappedPosts.filter((post) => !post.published);
    }

    // Sort by date (descending)
    mappedPosts.sort((a, b) => {
      const dateA = new Date(a.publishedAt || a.createdAt || 0).getTime();
      const dateB = new Date(b.publishedAt || b.createdAt || 0).getTime();
      return dateB - dateA;
    });

    return NextResponse.json(mappedPosts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      slug,
      excerpt,
      content,
      components,
      featuredImage,
      category,
      tags,
      published,
      metaTitle,
      metaDescription,
      ogImage,
      publishedAt,
    } = body;

    if (!slug) {
      return NextResponse.json(
        { error: "Slug is required" },
        { status: 400 }
      );
    }

    ensureBlogsDir();

    // Check if post already exists
    const filePath = path.join(blogsDir, `${slug}.json`);
    if (fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "A blog post with this slug already exists" },
        { status: 400 }
      );
    }

    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = content?.html
      ? content.html.replace(/<[^>]*>/g, "").split(/\s+/).filter((w: string) => w.length > 0).length
      : 0;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    const now = new Date().toISOString();
    const post = {
      title: title || "Başlıksız",
      slug,
      excerpt: excerpt || null,
      content: content || { html: "" },
      components: components || null,
      featuredImage: featuredImage || null,
      category: category || "SEO",
      tags: tags || [],
      published: published || false,
      publishedAt: published ? (publishedAt ? new Date(publishedAt).toISOString() : now) : null,
      createdAt: now,
      updatedAt: now,
      readTime,
      metaTitle: metaTitle || title || null,
      metaDescription: metaDescription || excerpt || null,
      ogImage: ogImage || featuredImage || null,
      views: 0,
    };

    // Save individual file
    fs.writeFileSync(filePath, JSON.stringify(post, null, 2), "utf-8");

    // Update index.json
    let allIndexPosts: any[] = [];
    if (fs.existsSync(indexPath)) {
      try {
        allIndexPosts = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
      } catch (e) {
        console.error("Error reading index file:", e);
      }
    }

    const indexEntry = {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      featuredImage: post.featuredImage,
      ogImage: post.ogImage,
      metaTitle: post.metaTitle,
      metaDescription: post.metaDescription,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      published: post.published,
      category: post.category,
      readTime: post.readTime,
      tags: post.tags,
      views: post.views,
    };

    allIndexPosts = allIndexPosts.filter((p: any) => p.slug !== slug);
    allIndexPosts.unshift(indexEntry); // Put new post at the beginning

    fs.writeFileSync(indexPath, JSON.stringify(allIndexPosts, null, 2), "utf-8");

    // Return with id set for client compatibility
    return NextResponse.json({
      ...post,
      id: post.slug,
    });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
