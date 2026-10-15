import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ messages: [], total: 0 }, { status: 200 });
    }

    const { searchParams } = new URL(request.url);
    const filter = searchParams.get("filter");

    const where: any = {};
    if (filter && filter !== "all") {
      where.formType = filter;
    }

    const messages = await prisma.contactMessage.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: 200,
    });

    const total = await prisma.contactMessage.count({ where });

    return NextResponse.json({ messages, total }, { status: 200 });
  } catch (error: any) {
    console.error("[Admin Messages API] Error fetching messages:", error);
    return NextResponse.json(
      { error: "Mesajlar yüklenirken bir hata oluştu.", details: error?.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Mesaj kimliği belirtilmedi." }, { status: 400 });
    }

    await prisma.contactMessage.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Mesaj silindi." }, { status: 200 });
  } catch (error: any) {
    console.error("[Admin Messages API] Error deleting message:", error);
    return NextResponse.json(
      { error: "Mesaj silinirken bir hata oluştu.", details: error?.message },
      { status: 500 }
    );
  }
}
