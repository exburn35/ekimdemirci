import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get("type") || "main";

    const items = await prisma.navigationItem.findMany({
      where: { menuType: type },
      orderBy: { order: "asc" },
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error("Error fetching navigation:", error);
    return NextResponse.json(
      { error: "Failed to fetch navigation" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { label, href, icon, order, parentId, target, menuType, published } = body;

    // Get max order if not provided
    const maxOrder = order !== undefined ? order : await prisma.navigationItem.count({
      where: { menuType, parentId: parentId || null },
    });

    const item = await prisma.navigationItem.create({
      data: {
        label,
        href,
        icon,
        order: maxOrder,
        parentId: parentId || null,
        target: target || "_self",
        menuType: menuType || "main",
        published: published !== undefined ? published : true,
      },
    });

    return NextResponse.json(item);
  } catch (error) {
    console.error("Error creating navigation item:", error);
    return NextResponse.json(
      { error: "Failed to create navigation item" },
      { status: 500 }
    );
  }
}

