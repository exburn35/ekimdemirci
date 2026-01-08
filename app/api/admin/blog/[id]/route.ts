import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { id: params.id },
    });

    if (!post) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Calculate reading time if content changed
    const wordCount = content?.html
      ? content.html.replace(/<[^>]*>/g, "").split(/\s+/).length
      : 0;
    const readTime = Math.ceil(wordCount / 200);

    // If publishing for the first time, set publishedAt
    const existingPost = await prisma.blogPost.findUnique({
      where: { id: params.id },
    });

    const updateData: any = {
      title,
      slug,
      excerpt: excerpt || null,
      content: content || {},
      components: components || null,
      featuredImage: featuredImage || null,
      category: category || null,
      tags: tags || [],
      published: published || false,
      readTime,
      metaTitle: metaTitle || null,
      metaDescription: metaDescription || null,
      ogImage: ogImage || null,
    };

    // Set publishedAt if publishing for the first time
    if (published && !existingPost?.publishedAt) {
      updateData.publishedAt = publishedAt
        ? new Date(publishedAt)
        : new Date();
    } else if (!published) {
      updateData.publishedAt = null;
    }

    const post = await prisma.blogPost.update({
      where: { id: params.id },
      data: updateData,
    });

    return NextResponse.json(post);
  } catch (error: any) {
    console.error("Error updating blog post:", error);
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "A blog post with this slug already exists" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to update blog post" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.blogPost.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 }
    );
  }
}

