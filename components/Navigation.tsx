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
              className="block text-[15px] text-ink-soft hover:text-ink bg-transparent hover:bg-ink/[0.03] rounded-lg transition-all py-2.5 px-3"
            >
              <div className="font-medium text-ink">{service.name}</div>
              <div className="text-xs text-ink-muted mt-0.5">{service.desc}</div>
            </Link>
          ))}
        </MobileAccordion>

        <Link
          href="/basari-hikayeleri"
          className="block text-ink-soft hover:text-ink hover:bg-ink/[0.03] active:bg-ink/5 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-line"
        >
          Vaka Analizleri
        </Link>
        <Link
          href="/seo-danismanlik-fiyatlari"
          className="block text-ink-soft hover:text-ink hover:bg-ink/[0.03] active:bg-ink/5 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-line"
        >
          Fiyatlar
        </Link>
        <Link
          href="/seo-ajanslari"
          className="block text-ink-soft hover:text-ink hover:bg-ink/[0.03] active:bg-ink/5 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-line"
        >
          SEO Ajansları
        </Link>
        <Link
          href="/blog"
          className="block text-ink-soft hover:text-ink hover:bg-ink/[0.03] active:bg-ink/5 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-line"
        >
          Blog
        </Link>
        <Link
          href="/seo-sozlugu"
          className="block text-ink-soft hover:text-ink hover:bg-ink/[0.03] active:bg-ink/5 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-line"
        >
          SEO Sözlüğü
        </Link>
        <Link
          href="/hakkimda"
          className="block text-ink-soft hover:text-ink hover:bg-ink/[0.03] active:bg-ink/5 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-line"
        >
          Hakkımda
        </Link>
      </div>

      {/* Static Bottom Action Area */}
      <div className="p-4 border-t border-line bg-canvas mt-auto">
        <Link
          href="/#analiz"
          className="block w-full py-3.5 bg-brand text-white rounded-xl font-semibold text-center hover:bg-brand-dark shadow-lg active:scale-[0.98] transition-all"
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
          textClassName="text-2xl font-bold tracking-tight text-[#392F67]"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-3.5 xl:space-x-6 text-[13px] xl:text-sm">
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
                className="group block p-2.5 rounded-lg hover:bg-ink/5 transition-colors duration-150"
              >
                <div className="text-sm font-medium text-ink group-hover:text-purple-700 transition-colors">
                  {service.name}
                </div>
                <div className="text-xs text-ink-muted group-hover:text-ink-soft transition-colors line-clamp-1">
                  {service.desc}
                </div>
              </Link>
            ))}
          </div>
        </NavDropdown>

        <Link
          href="/basari-hikayeleri"
          className="font-medium text-ink-soft hover:text-ink transition-colors duration-200 relative group whitespace-nowrap"
        >
          Vaka Analizleri
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        <Link
          href="/seo-danismanlik-fiyatlari"
          className="font-medium text-ink-soft hover:text-ink transition-colors duration-200 relative group whitespace-nowrap"
        >
          Fiyatlar
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        <Link
          href="/seo-ajanslari"
          className="font-medium text-ink-soft hover:text-ink transition-colors duration-200 relative group whitespace-nowrap"
        >
          SEO Ajansları
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        <Link
          href="/blog"
          className="font-medium text-ink-soft hover:text-ink transition-colors duration-200 relative group whitespace-nowrap"
        >
          Blog
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        <Link
          href="/seo-sozlugu"
          className="font-medium text-ink-soft hover:text-ink transition-colors duration-200 relative group whitespace-nowrap"
        >
          SEO Sözlüğü
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        <Link
          href="/hakkimda"
          className="font-medium text-ink-soft hover:text-ink transition-colors duration-200 relative group whitespace-nowrap"
        >
          Hakkımda
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Tek CTA: "Ücretsiz Analiz" (#analiz) */}
        <Link
          href="/#analiz"
          className="px-4 xl:px-5 py-2 xl:py-2.5 bg-brand text-white rounded-full font-semibold text-xs xl:text-sm hover:bg-brand-dark transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(139,92,246,0.4)] whitespace-nowrap"
        >
          Ücretsiz Analiz
        </Link>
      </div>
    </NavScrollWrapper>
  );
}
