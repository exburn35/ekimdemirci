import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const filter = searchParams.get("filter") || "all";

    const where: any = {};
    if (filter === "published") {
      where.published = true;
    } else if (filter === "draft") {
      where.published = false;
    }

    const posts = await prisma.blogPost.findMany({
      where,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        category: true,
        published: true,
        publishedAt: true,
        readTime: true,
        views: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(posts);
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

    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = content?.html
      ? content.html.replace(/<[^>]*>/g, "").split(/\s+/).length
      : 0;
    const readTime = Math.ceil(wordCount / 200);

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt: excerpt || null,
        content: content || {},
        components: components || null,
        featuredImage: featuredImage || null,
        category: category || null,
        tags: tags || [],
        published: published || false,
        publishedAt: published && publishedAt ? new Date(publishedAt) : null,
        readTime,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
        ogImage: ogImage || null,
      },
    });

    return NextResponse.json(post);
  } catch (error: any) {
    console.error("Error creating blog post:", error);
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "A blog post with this slug already exists" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}

