import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET robots.txt content
export async function GET() {
  try {
    let config = await prisma.sEOConfig.findUnique({
      where: { type: "robots" },
    });

    if (!config) {
      // Create default robots.txt
      const defaultContent = `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/

# Sitemap
Sitemap: https://ekimdemirci.com/sitemap.xml`;

      config = await prisma.sEOConfig.create({
        data: {
          type: "robots",
          content: defaultContent,
        },
      });
    }

    return NextResponse.json({ content: config.content });
  } catch (error) {
    console.error("Error fetching robots.txt:", error);
    return NextResponse.json(
      { error: "Failed to fetch robots.txt" },
      { status: 500 }
    );
  }
}

// UPDATE robots.txt content
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { content } = body;

    const config = await prisma.sEOConfig.upsert({
      where: { type: "robots" },
      update: { content },
      create: {
        type: "robots",
        content,
      },
    });

    return NextResponse.json(config);
  } catch (error) {
    console.error("Error updating robots.txt:", error);
    return NextResponse.json(
      { error: "Failed to update robots.txt" },
      { status: 500 }
    );
  }
}

