import { Metadata } from "next";
import PageBuilder from "@/components/admin/pages/PageBuilder";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Edit Page",
  robots: {
    index: false,
    follow: false,
  },
};

async function getPage(id: string) {
  try {
    const page = await prisma.page.findUnique({
      where: { id },
    });
    return page;
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
}

export default async function EditPagePage({
  params,
}: {
  params: { id: string };
}) {
  const page = await getPage(params.id);

  if (!page) {
    return (
      <div className="space-y-6">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
          <p className="text-red-600 dark:text-red-400">
            Page not found. Please check the URL and try again.
          </p>
        </div>
      </div>
    );
  }

  const initialComponents =
    typeof page.content === "object" && Array.isArray(page.content)
      ? (page.content as any[])
      : [];

  const handleSave = async (components: any[]) => {
    "use server";
    try {
      await prisma.page.update({
        where: { id: params.id },
        data: {
          content: components,
        },
      });
    } catch (error) {
      console.error("Error saving page:", error);
      throw error;
    }
  };

  return (
    <PageBuilder
      pageId={params.id}
      initialComponents={initialComponents}
      onSave={handleSave}
    />
  );
}

