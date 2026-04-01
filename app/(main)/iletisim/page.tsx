import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Ekim Demirci",
  description: "SEO hizmetlerimiz hakkında bilgi almak ve projenizi konuşmak için bizimle iletişime geçin. Ücretsiz ön analiz ve strateji görüşmesi için formu doldurun.",
  alternates: {
    canonical: "/iletisim",
  },
  openGraph: {
    title: "İletişim | Ekim Demirci - SEO Uzmanı",
    description: "SEO hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçin.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                İletişime Geçin
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Dijital varlığınızı güçlendirmek ve SEO hedeflerinize ulaşmak için 
              hemen bir görüşme planlayalım.
            </p>
          </div>
        </div>
      </section>

      <ContactForm
        title="Projenizi Anlatın"
        description="Aşağıdaki formu doldurarak projeniz hakkında detaylı bilgi verebilirsiniz. En kısa sürede size dönüş yapacağız."
        showTitle={true}
      />
    </>
  );
}
