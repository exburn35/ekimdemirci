import Link from "next/link";
import Logo from "./Logo";
import NavScrollWrapper from "./navigation/NavScrollWrapper";
import NavDropdown from "./navigation/NavDropdown";
import MobileAccordion from "./navigation/MobileAccordion";

const seoServices = [
  { name: "Tüm Hizmetler", href: "/seo-hizmetleri" },
  { name: "Yapay Zeka SEO", href: "/seo-hizmetleri/yapay-zeka-seo" },
  { name: "Teknik SEO", href: "/seo-hizmetleri/teknik-seo" },
  { name: "Site İçi SEO", href: "/seo-hizmetleri/sayfa-ici-seo" },
  { name: "Site Dışı SEO", href: "/seo-hizmetleri/sayfa-disi-seo" },
  { name: "SEO Danışmanlık Fiyatları", href: "/seo-danismanlik-fiyatlari" },
];

const sectoralServices = [
  { name: "Sektörel SEO Hizmetleri", href: "/sektorel-seo-hizmetleri" },
  { name: "E-Ticaret SEO Danışmanlığı", href: "/sektorel-seo-hizmetleri/e-ticaret-seo" },
  { name: "Sağlık & Klinik SEO Danışmanlığı", href: "/sektorel-seo-hizmetleri/saglik-ve-klinik-seo" },
  { name: "Yerel İşletme SEO Danışmanlığı", href: "/sektorel-seo-hizmetleri/yerel-isletme-seo" },
  { name: "Kurumsal / B2B SEO Danışmanlığı", href: "/sektorel-seo-hizmetleri/kurumsal-b2b-seo" },
];

const otherServices = [
  { name: "İçerik Yazımı", href: "/icerik-yazimi" },
  { name: "SEO Sözlüğü", href: "/seo-sozlugu" },
  { name: "Audit Talebi", href: "/audit-talebi" },
  { name: "Başarı Hikayeleri", href: "/basari-hikayeleri" },
  { name: "SSS", href: "/sikca-sorulan-sorular" },
];

export default function Navigation() {
  const mobileDrawerContent = (
    <>
      {/* Scrollable Nav Area */}
      <div className="px-3 py-4 space-y-1 max-h-[65vh] overflow-y-auto hidden-scrollbar">
        <Link
          href="/"
          className="block text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-white/5"
        >
          Anasayfa
        </Link>
        <Link
          href="/hakkimda"
          className="block text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-white/5"
        >
          Hakkımda
        </Link>
        <Link
          href="/blog"
          className="block text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-white/5"
        >
          Blog
        </Link>
        <Link
          href="/geo-danismanligi"
          className="block text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-white/5"
        >
          GEO Danışmanlığı
        </Link>
        <Link
          href="/seo-danismanlik-fiyatlari"
          className="block text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-white/5"
        >
          SEO & GEO Fiyatları
        </Link>
        <Link
          href="/iletisim"
          className="block text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-white/5"
        >
          İletişim
        </Link>

        <div className="pt-2 pb-1">
          <hr className="border-white/5" />
        </div>

        {/* Mobile SEO Services Accordion */}
        <MobileAccordion id="mobile-seo-services" label="SEO Hizmetleri">
          {seoServices.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="block text-[15px] text-gray-400 hover:text-white bg-transparent hover:bg-purple-500/10 rounded-lg transition-all py-3 px-4"
            >
              {service.name}
            </Link>
          ))}
        </MobileAccordion>

        {/* Mobile Sektörel SEO Accordion */}
        <MobileAccordion id="mobile-sectoral-services" label="Sektörel SEO">
          {sectoralServices.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="block text-[15px] text-gray-400 hover:text-white bg-transparent hover:bg-purple-500/10 rounded-lg transition-all py-3 px-4"
            >
              {service.name}
            </Link>
          ))}
        </MobileAccordion>

        {/* Mobile Other Services Accordion */}
        <MobileAccordion id="mobile-other-services" label="Daha Fazla">
          {otherServices.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="block text-[15px] text-gray-400 hover:text-white bg-transparent hover:bg-purple-500/10 rounded-lg transition-all py-3 px-4"
            >
              {service.name}
            </Link>
          ))}
        </MobileAccordion>
      </div>

      {/* Static Bottom Action Area */}
      <div className="p-4 border-t border-white/10 bg-[#0a0f25] mt-auto">
        <Link
          href="/iletisim"
          className="block w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold text-center hover:from-purple-500 hover:to-indigo-500 shadow-lg active:scale-[0.98] transition-all"
        >
          Projemi Yükselt!
        </Link>
      </div>
    </>
  );

  return (
    <NavScrollWrapper mobileDrawer={mobileDrawerContent}>
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Logo
          className="h-10 w-auto object-contain mr-4"
          textClassName="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-white hover:to-white transition-all duration-300 tracking-tight"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-3.5 xl:space-x-6">
        <Link
          href="/"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
        >
          Anasayfa
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link
          href="/hakkimda"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
        >
          Hakkımda
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link
          href="/blog"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
        >
          Blog
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link
          href="/geo-danismanligi"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
        >
          GEO Danışmanlığı
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link
          href="/seo-danismanlik-fiyatlari"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
        >
          SEO & GEO Fiyatları
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* SEO Services Dropdown */}
        <NavDropdown
          id="seo-services-dropdown"
          label="SEO Hizmetleri"
          widthClass="w-56"
        >
          {seoServices.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              {service.name}
            </Link>
          ))}
        </NavDropdown>

        {/* Sektörel SEO Services Dropdown */}
        <NavDropdown
          id="sectoral-services-dropdown"
          label="Sektörel SEO"
          widthClass="w-64"
        >
          {sectoralServices.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              {service.name}
            </Link>
          ))}
        </NavDropdown>

        {/* Other Services Dropdown */}
        <NavDropdown
          id="other-services-dropdown"
          label="Daha Fazla"
          widthClass="w-56"
        >
          {otherServices.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              {service.name}
            </Link>
          ))}
        </NavDropdown>

        <Link
          href="/iletisim"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
        >
          İletişim
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        <Link
          href="/iletisim"
          className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold text-sm hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(139,92,246,0.4)] whitespace-nowrap"
        >
          Başla
        </Link>
      </div>
    </NavScrollWrapper>
  );
}
