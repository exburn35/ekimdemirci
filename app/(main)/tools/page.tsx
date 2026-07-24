import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ücretsiz SEO Araçları | Ekim Demirci",
  description: "Web sitenizi analiz edebileceğiniz ücretsiz SEO araçları rehberi.",
};

export default function ToolsPage() {
  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Ücretsiz SEO Araçları</h1>
        <div className="prose prose-invert max-w-none text-gray-300">
          <p>
            Ücretsiz SEO araçlarımız yakında burada yerini alacak. Sitemizi takipte kalın.
          </p>
        </div>
      </div>
    </div>
  );
}
