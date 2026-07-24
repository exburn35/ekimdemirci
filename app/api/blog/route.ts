import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");
    const limit = parseInt(searchParams.get("limit") || "10");
    const offset = parseInt(searchParams.get("offset") || "0");

    // Read index data
    const indexPath = path.join(process.cwd(), "data", "blogs", "_index.json");
    let allPosts: any[] = [];
    
    try {
      if (fs.existsSync(indexPath)) {
        const fileData = fs.readFileSync(indexPath, "utf-8");
        allPosts = JSON.parse(fileData);
      }
    } catch (e) {
      console.error("Failed to read blog index", e);
    }

    // Sort by date (descending)
    allPosts.sort((a: any, b: any) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    // Filter by category
    let filteredPosts = allPosts;
    if (category && category !== "Tümü") {
      filteredPosts = allPosts.filter((post: any) => post.category === category);
    }

    // Apply pagination
    const total = filteredPosts.length;
    const posts = filteredPosts.slice(offset, offset + limit);

    return NextResponse.json({ posts, total });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

