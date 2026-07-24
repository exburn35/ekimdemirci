import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const blocks = await prisma.contentBlock.findMany({
      orderBy: { updatedAt: "desc" },
      select: {
        id: true,
        name: true,
        slug: true,
        type: true,
        location: true,
        published: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(blocks);
  } catch (error) {
    console.error("Error fetching content blocks:", error);
    return NextResponse.json(
      { error: "Failed to fetch content blocks" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, slug, content, type, location, published } = body;

    const block = await prisma.contentBlock.create({
      data: {
        name,
        slug,
        content: content || {},
        type: type || "html",
        location,
        published: published !== undefined ? published : true,
      },
    });

    return NextResponse.json(block);
  } catch (error) {
    console.error("Error creating content block:", error);
    return NextResponse.json(
      { error: "Failed to create content block" },
      { status: 500 }
    );
  }
}

