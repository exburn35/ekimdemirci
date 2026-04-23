"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const seoServices = [
  { name: "Tüm Hizmetler", href: "/seo-hizmetleri" },
  { name: "Yapay Zeka SEO", href: "/seo-hizmetleri/yapay-zeka-seo" },
  { name: "Teknik SEO", href: "/seo-hizmetleri/teknik-seo" },
  { name: "Site İçi SEO", href: "/seo-hizmetleri/sayfa-ici-seo" },
  { name: "Site Dışı SEO", href: "/seo-hizmetleri/sayfa-disi-seo" },
];

const sectoralServices = [
  { name: "Sektörel SEO Hizmetleri", href: "/sektorel-seo-hizmetleri" },
  {
    name: "Diş Hekimleri için SEO",
    href: "/sektorel-seo-hizmetleri/dis-hekimleri-icin-seo-2",
  },
  { name: "E-Ticaret SEO", href: "/sektorel-seo-hizmetleri/e-ticaret-seo" },
  {
    name: "Avukatlar için SEO",
    href: "/sektorel-seo-hizmetleri/avukatlar-icin-seo-hizmeti",
  },
  {
    name: "Güzellik Merkezleri için SEO",
    href: "/sektorel-seo-hizmetleri/guzellik-merkezleri-icin-seo-2",
  },
  {
    name: "Doktorlar için SEO",
    href: "/sektorel-seo-hizmetleri/doktorlar-icin-seo-2",
  },
  {
    name: "Hastaneler için SEO",
    href: "/sektorel-seo-hizmetleri/hastaneler-icin-seo-2",
  },
];

const otherServices = [
  { name: "Fiyatlar", href: "/seo-danismanlik-fiyatlari" },
  { name: "İçerik Yazımı", href: "/icerik-yazimi" },
  { name: "SEO Sözlüğü", href: "/seo-sozlugu" },
  { name: "Audit Talebi", href: "/audit-talebi" },
  { name: "Başarı Hikayeleri", href: "/basari-hikayeleri" },
  { name: "SSS", href: "/sikca-sorulan-sorular" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSectoralOpen, setIsSectoralOpen] = useState(false);
  const [isOtherOpen, setIsOtherOpen] = useState(false);
  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSectoralOpen, setMobileSectoralOpen] = useState(false);
  const [mobileOtherOpen, setMobileOtherOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const sectoralRef = useRef<HTMLDivElement>(null);
  const otherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
      if (
        sectoralRef.current &&
        !sectoralRef.current.contains(event.target as Node)
      ) {
        setIsSectoralOpen(false);
      }
      if (
        otherRef.current &&
        !otherRef.current.contains(event.target as Node)
      ) {
        setIsOtherOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-1/2 z-50 w-full max-w-7xl transition-all duration-300 px-4`}
    >
      <div className={`mx-auto px-6 py-3.5 rounded-full border transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0a0f25]/90 backdrop-blur-lg border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.25)]" 
          : "bg-[#0a0f25]/70 backdrop-blur-md border-purple-500/20 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo 
              className="h-10 w-auto object-contain mr-4"
              textClassName="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-white hover:to-white transition-all duration-300 tracking-tight"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
            >
              Anasayfa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/hakkimda"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
            >
              Hakkımda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* SEO Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group flex items-center gap-1"
              >
                SEO Hizmetleri
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl"
                  >
                    <div className="py-2">
                      {seoServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sektörel SEO Services Dropdown */}
            <div ref={sectoralRef} className="relative">
              <button
                onMouseEnter={() => setIsSectoralOpen(true)}
                onMouseLeave={() => setIsSectoralOpen(false)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group flex items-center gap-1"
              >
                Sektörel SEO
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isSectoralOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </button>

              <AnimatePresence>
                {isSectoralOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsSectoralOpen(true)}
                    onMouseLeave={() => setIsSectoralOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl"
                  >
                    <div className="py-2">
                      {sectoralServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Services Dropdown */}
            <div ref={otherRef} className="relative">
              <button
                onMouseEnter={() => setIsOtherOpen(true)}
                onMouseLeave={() => setIsOtherOpen(false)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group flex items-center gap-1"
              >
                Daha Fazla
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isOtherOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </button>

              <AnimatePresence>
                {isOtherOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsOtherOpen(true)}
                    onMouseLeave={() => setIsOtherOpen(false)}
                    className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl"
                  >
                    <div className="py-2">
                      {otherServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/iletisim"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
            >
              İletişim
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="/iletisim"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold text-sm hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(139,92,246,0.4)]"
            >
              Başla
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Menüyü aç/kapa"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0f25]/98 backdrop-blur-2xl border border-white/10 rounded-2xl mt-2 overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Scrollable Nav Area */}
            <div className="px-3 py-4 space-y-1 max-h-[65vh] overflow-y-auto hidden-scrollbar">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-white/5">
                Anasayfa
              </Link>
              <Link href="/hakkimda" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-white/5">
                Hakkımda
              </Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-white/5">
                Blog
              </Link>
              <Link href="/iletisim" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all p-3.5 font-medium border border-transparent hover:border-white/5">
                İletişim
              </Link>

              <div className="pt-2 pb-1">
                <hr className="border-white/5" />
              </div>

              {/* Mobile SEO Services Accordion */}
              <div className="rounded-xl overflow-hidden border border-white/5 bg-white/[0.01]">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-gray-300 hover:text-white transition-all p-4 font-medium"
                >
                  SEO Hizmetleri
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-purple-400" : "text-gray-500"}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-black/20"
                    >
                      <div className="p-2 flex flex-col gap-1 border-t border-white/5">
                        {seoServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-[15px] text-gray-400 hover:text-white bg-transparent hover:bg-purple-500/10 rounded-lg transition-all py-3 px-4"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Sektörel SEO Accordion */}
              <div className="rounded-xl overflow-hidden border border-white/5 bg-white/[0.01]">
                <button
                  onClick={() => setMobileSectoralOpen(!mobileSectoralOpen)}
                  className="w-full flex items-center justify-between text-gray-300 hover:text-white transition-all p-4 font-medium"
                >
                  Sektörel SEO
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileSectoralOpen ? "rotate-180 text-purple-400" : "text-gray-500"}`} />
                </button>
                <AnimatePresence>
                  {mobileSectoralOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-black/20"
                    >
                      <div className="p-2 flex flex-col gap-1 border-t border-white/5">
                        {sectoralServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-[15px] text-gray-400 hover:text-white bg-transparent hover:bg-purple-500/10 rounded-lg transition-all py-3 px-4"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Other Accordion */}
              <div className="rounded-xl overflow-hidden border border-white/5 bg-white/[0.01]">
                <button
                  onClick={() => setMobileOtherOpen(!mobileOtherOpen)}
                  className="w-full flex items-center justify-between text-gray-300 hover:text-white transition-all p-4 font-medium"
                >
                  Daha Fazla
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileOtherOpen ? "rotate-180 text-purple-400" : "text-gray-500"}`} />
                </button>
                <AnimatePresence>
                  {mobileOtherOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-black/20"
                    >
                      <div className="p-2 flex flex-col gap-1 border-t border-white/5">
                        {otherServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-[15px] text-gray-400 hover:text-white bg-transparent hover:bg-purple-500/10 rounded-lg transition-all py-3 px-4"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Static Bottom Action Area */}
            <div className="p-4 border-t border-white/10 bg-[#0a0f25] mt-auto">
              <Link
                href="/iletisim"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold text-center hover:from-purple-500 hover:to-indigo-500 shadow-lg active:scale-[0.98] transition-all"
              >
                Projemi Yükselt!
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
