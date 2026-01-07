import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all pages
export async function GET() {
  try {
    // Skip database queries during build
    if (!process.env.DATABASE_URL) {
      return NextResponse.json([]);
    }

    const pages = await prisma.page.findMany({
      orderBy: { updatedAt: "desc" },
    });
    return NextResponse.json(pages);
  } catch (error) {
    console.error("Error fetching pages:", error);
    // Return empty array on error to prevent build failures
    return NextResponse.json([]);
  }
}

// CREATE a new page
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, title, content, metaTitle, metaDescription, ogImage, canonicalUrl } = body;

    const page = await prisma.page.create({
      data: {
        slug,
        title,
        content,
        metaTitle,
        metaDescription,
        ogImage,
        canonicalUrl,
      },
    });

    return NextResponse.json(page, { status: 201 });
  } catch (error) {
    console.error("Error creating page:", error);
    return NextResponse.json(
      { error: "Failed to create page" },
      { status: 500 }
    );
  }
}

