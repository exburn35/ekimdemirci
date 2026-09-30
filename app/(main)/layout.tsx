import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <Breadcrumb />
      <main className="min-h-[min(100svh,900px)]">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}


