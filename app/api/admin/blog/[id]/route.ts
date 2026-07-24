import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const blogsDir = path.join(process.cwd(), "data", "blogs");
const indexPath = path.join(blogsDir, "_index.json");

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const slug = params.id;
    const filePath = path.join(blogsDir, `${slug}.json`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    const fileData = fs.readFileSync(filePath, "utf-8");
    const post = JSON.parse(fileData);
    
    // Ensure id is present for frontend compatibility
    post.id = post.slug;

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
    const oldSlug = params.id;
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

    const oldFilePath = path.join(blogsDir, `${oldSlug}.json`);
    if (!fs.existsSync(oldFilePath)) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    const fileData = fs.readFileSync(oldFilePath, "utf-8");
    const oldPost = JSON.parse(fileData);

    const targetSlug = slug || oldPost.slug;

    // Check slug collision if slug changed
    if (targetSlug !== oldSlug) {
      const newFilePath = path.join(blogsDir, `${targetSlug}.json`);
      if (fs.existsSync(newFilePath)) {
        return NextResponse.json(
          { error: "A blog post with this slug already exists" },
          { status: 400 }
        );
      }
      // Delete the old file
      fs.unlinkSync(oldFilePath);
    }

    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = content?.html
      ? content.html.replace(/<[^>]*>/g, "").split(/\s+/).filter((w: string) => w.length > 0).length
      : 0;
    const readTime = content !== undefined ? Math.max(1, Math.ceil(wordCount / 200)) : oldPost.readTime;

    const now = new Date().toISOString();
    const updatedPost = {
      ...oldPost,
      title: title || oldPost.title,
      slug: targetSlug,
      excerpt: excerpt !== undefined ? excerpt : oldPost.excerpt,
      content: content !== undefined ? content : oldPost.content,
      components: components !== undefined ? components : oldPost.components,
      featuredImage: featuredImage !== undefined ? featuredImage : oldPost.featuredImage,
      category: category !== undefined ? category : oldPost.category,
      tags: tags !== undefined ? tags : oldPost.tags,
      published: published !== undefined ? published : oldPost.published,
      readTime,
      metaTitle: metaTitle !== undefined ? metaTitle : oldPost.metaTitle,
      metaDescription: metaDescription !== undefined ? metaDescription : oldPost.metaDescription,
      ogImage: ogImage !== undefined ? ogImage : oldPost.ogImage,
      updatedAt: now,
    };

    // If publishing status changes
    if (published && !oldPost.publishedAt) {
      updatedPost.publishedAt = publishedAt ? new Date(publishedAt).toISOString() : now;
    } else if (!published) {
      updatedPost.publishedAt = null;
    }

    const newFilePath = path.join(blogsDir, `${targetSlug}.json`);
    fs.writeFileSync(newFilePath, JSON.stringify(updatedPost, null, 2), "utf-8");

    // Update _index.json
    let allIndexPosts: any[] = [];
    if (fs.existsSync(indexPath)) {
      try {
        allIndexPosts = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
      } catch (e) {
        console.error("Error reading index file:", e);
      }
    }

    const indexEntry = {
      title: updatedPost.title,
      slug: updatedPost.slug,
      excerpt: updatedPost.excerpt,
      featuredImage: updatedPost.featuredImage,
      ogImage: updatedPost.ogImage,
      metaTitle: updatedPost.metaTitle,
      metaDescription: updatedPost.metaDescription,
      publishedAt: updatedPost.publishedAt,
      updatedAt: updatedPost.updatedAt,
      published: updatedPost.published,
      category: updatedPost.category,
      readTime: updatedPost.readTime,
      tags: updatedPost.tags,
      views: updatedPost.views || 0,
    };

    // Remove old slug entry, and insert the updated one at the top
    allIndexPosts = allIndexPosts.filter((p: any) => p.slug !== oldSlug);
    allIndexPosts.unshift(indexEntry);

    fs.writeFileSync(indexPath, JSON.stringify(allIndexPosts, null, 2), "utf-8");

    return NextResponse.json({
      ...updatedPost,
      id: updatedPost.slug,
    });
  } catch (error) {
    console.error("Error updating blog post:", error);
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
    const slug = params.id;
    const filePath = path.join(blogsDir, `${slug}.json`);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Update _index.json
    let allIndexPosts: any[] = [];
    if (fs.existsSync(indexPath)) {
      try {
        allIndexPosts = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
      } catch (e) {
        console.error("Error reading index file:", e);
      }
    }

    allIndexPosts = allIndexPosts.filter((p: any) => p.slug !== slug);
    fs.writeFileSync(indexPath, JSON.stringify(allIndexPosts, null, 2), "utf-8");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 }
    );
  }
}
