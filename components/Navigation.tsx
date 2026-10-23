import Link from "next/link";
import Logo from "./Logo";
import NavScrollWrapper from "./navigation/NavScrollWrapper";
import NavDropdown from "./navigation/NavDropdown";
import MobileAccordion from "./navigation/MobileAccordion";

const servicesList = [
  { 
    name: "SEO Danışmanlığı", 
    href: "/seo-hizmetleri", 
    desc: "Organik görünürlük ve sıralama artışı" 
  },
  { 
    name: "GEO Danışmanlığı", 
    href: "/geo-danismanligi", 
    desc: "ChatGPT, Gemini ve AI yanıt optimizasyonu" 
  },
  { 
    name: "Teknik SEO", 
    href: "/seo-hizmetleri/teknik-seo", 
    desc: "Core Web Vitals, tarama ve indeksleme" 
  },
  { 
    name: "Site İçi SEO", 
    href: "/seo-hizmetleri/sayfa-ici-seo", 
    desc: "Semantik içerik ve sayfa optimizasyonu" 
  },
  { 
    name: "Site Dışı SEO", 
    href: "/seo-hizmetleri/sayfa-disi-seo", 
    desc: "Otorite, backlink ve dijital PR" 
  },
  { 
    name: "Sektörel SEO", 
    href: "/sektorel-seo-hizmetleri", 
    desc: "E-ticaret, B2B, klinik ve yerel çözümler" 
  },
];

export default function Navigation() {
  const mobileDrawerContent = (
    <>
      {/* Scrollable Nav Area */}
      <div className="px-3 py-4 space-y-1 max-h-[65vh] overflow-y-auto hidden-scrollbar">
        {/* Mobile Hizmetler Accordion */}
        <MobileAccordion id="mobile-services" label="Hizmetler">
          {servicesList.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="block text-[15px] text-gray-300 hover:text-white bg-transparent hover:bg-white/5 rounded-lg transition-all py-2.5 px-3"
            >
              <div className="font-medium text-white">{service.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">{service.desc}</div>
            </Link>
          ))}
        </MobileAccordion>

        <Link
          href="/basari-hikayeleri"
          className="block text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-white/5"
        >
          Vaka Analizleri
        </Link>
        <Link
          href="/seo-danismanlik-fiyatlari"
          className="block text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-white/5"
        >
          Fiyatlar
        </Link>
        <Link
          href="/blog"
          className="block text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-white/5"
        >
          Blog
        </Link>
        <Link
          href="/seo-sozlugu"
          className="block text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-white/5"
        >
          SEO Sözlüğü
        </Link>
        <Link
          href="/hakkimda"
          className="block text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-white/5"
        >
          Hakkımda
        </Link>
      </div>

      {/* Static Bottom Action Area */}
      <div className="p-4 border-t border-white/10 bg-[#0a0f25] mt-auto">
        <Link
          href="/#analiz"
          className="block w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold text-center hover:from-purple-500 hover:to-indigo-500 shadow-lg active:scale-[0.98] transition-all"
        >
          Ücretsiz Analiz
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
      <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
        {/* Mega Menu: Hizmetler */}
        <NavDropdown
          id="services-mega-dropdown"
          label="Hizmetler"
          widthClass="w-80"
        >
          <div className="p-2 space-y-1">
            {servicesList.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group block p-2.5 rounded-lg hover:bg-white/10 transition-colors duration-150"
              >
                <div className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                  {service.name}
                </div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors line-clamp-1">
                  {service.desc}
                </div>
              </Link>
            ))}
          </div>
        </NavDropdown>

        <Link
          href="/basari-hikayeleri"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
        >
          Vaka Analizleri
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        <Link
          href="/seo-danismanlik-fiyatlari"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
        >
          Fiyatlar
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
          href="/seo-sozlugu"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
        >
          SEO Sözlüğü
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        <Link
          href="/hakkimda"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
        >
          Hakkımda
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Tek CTA: "Ücretsiz Analiz" (#analiz) */}
        <Link
          href="/#analiz"
          className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold text-sm hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(139,92,246,0.4)] whitespace-nowrap"
        >
          Ücretsiz Analiz
        </Link>
      </div>
    </NavScrollWrapper>
  );
}
