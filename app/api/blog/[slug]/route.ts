import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const filePath = path.join(process.cwd(), "data", "blogs", `${params.slug}.json`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    const fileData = fs.readFileSync(filePath, "utf-8");
    const post = JSON.parse(fileData);

    // Provide default fallback values for ID
    const responsePost = {
      id: params.slug,
      ...post
    };

    return NextResponse.json(responsePost);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}

