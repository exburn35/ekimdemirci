import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAdminRequest } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const isAuthed = await verifyAdminRequest(request);
    if (!isAuthed) {
      return NextResponse.json(
        { error: "Yetkisiz erişim.", code: "UNAUTHORIZED" },
        { status: 401 }
      );
    }

    const settings = await prisma.siteSetting.findMany({
      orderBy: { category: "asc" },
    });

    return NextResponse.json(settings);
  } catch (error) {
    console.error("Error fetching settings:", error);
    return NextResponse.json(
      { error: "Failed to fetch settings" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const isAuthed = await verifyAdminRequest(request);
    if (!isAuthed) {
      return NextResponse.json(
        { error: "Yetkisiz erişim.", code: "UNAUTHORIZED" },
        { status: 401 }
      );
    }

    const settings = await request.json();

    const updates = await Promise.all(
      settings.map((setting: any) =>
        prisma.siteSetting.upsert({
          where: { key: setting.key },
          update: {
            value: setting.value,
            type: setting.type || "text",
            category: setting.category || "general",
            label: setting.label,
            description: setting.description,
          },
          create: {
            key: setting.key,
            value: setting.value,
            type: setting.type || "text",
            category: setting.category || "general",
            label: setting.label,
            description: setting.description,
          },
        })
      )
    );

    return NextResponse.json(updates);
  } catch (error) {
    console.error("Error updating settings:", error);
    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 500 }
    );
  }
}
