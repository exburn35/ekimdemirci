import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic'

// UPDATE page SEO
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { metaTitle, metaDescription, ogImage, canonicalUrl } = body;

    const page = await prisma.page.update({
      where: { id: params.id },
      data: {
        metaTitle,
        metaDescription,
        ogImage,
        canonicalUrl,
      },
    });

    return NextResponse.json(page);
  } catch (error) {
    console.error("Error updating page SEO:", error);
    return NextResponse.json(
      { error: "Failed to update page SEO" },
      { status: 500 }
    );
  }
}

