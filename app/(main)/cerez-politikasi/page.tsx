import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası | Ekim Demirci",
  description: "Ekim Demirci web sitesi çerez kullanımı ve politikası.",
};

export default function CookiesPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Çerez Politikası</h1>
        <div className="prose prose-invert max-w-none text-gray-300">
          <p>
            Bu sayfa henüz hazırlık aşamasında. Çok yakında buraya ekimdemirci.com çerez politikası eklenecektir.
          </p>
        </div>
      </div>
    </div>
  );
}
