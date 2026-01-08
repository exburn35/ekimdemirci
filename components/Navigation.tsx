"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const seoServices = [
  { name: "All Services", href: "/services" },
  { name: "AI SEO", href: "/services/ai-seo" },
  { name: "Technical SEO", href: "/services/technical-seo" },
  { name: "On-Page SEO", href: "/services/on-page" },
  { name: "Off-Page SEO", href: "/services/off-page" },
];

const sectoralServices = [
  { name: "Sektörel SEO Hizmetleri", href: "/sektorel-seo-hizmetleri" },
  { name: "Diş Hekimleri için SEO", href: "/sektorel-seo-hizmetleri/dis-hekimleri-icin-seo-2" },
  { name: "E-Ticaret SEO", href: "/sektorel-seo-hizmetleri/e-ticaret-seo" },
  { name: "Avukatlar için SEO", href: "/sektorel-seo-hizmetleri/avukatlar-icin-seo-hizmeti" },
  { name: "Güzellik Merkezleri için SEO", href: "/sektorel-seo-hizmetleri/guzellik-merkezleri-icin-seo-2" },
  { name: "Doktorlar için SEO", href: "/sektorel-seo-hizmetleri/doktorlar-icin-seo-2" },
  { name: "Hastaneler için SEO", href: "/sektorel-seo-hizmetleri/hastaneler-icin-seo-2" },
];

const otherServices = [
  { name: "Fiyatlar", href: "/seo-danismanlik-fiyatlari" },
  { name: "İçerik Yazımı", href: "/icerik-yazimi" },
  { name: "Audit Talebi", href: "/audit-talebi" },
  { name: "Başarı Hikayeleri", href: "/basari-hikayeleri" },
  { name: "FAQ", href: "/faq" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSectoralOpen, setIsSectoralOpen] = useState(false);
  const [isOtherOpen, setIsOtherOpen] = useState(false);
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
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (sectoralRef.current && !sectoralRef.current.contains(event.target as Node)) {
        setIsSectoralOpen(false);
      }
      if (otherRef.current && !otherRef.current.contains(event.target as Node)) {
        setIsOtherOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong py-3" : "glass py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:from-white hover:to-white transition-all duration-300"
          >
            Ekim Demirci
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            
            {/* SEO Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group flex items-center gap-1"
              >
                SEO Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
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
                    className="absolute top-full left-0 mt-2 w-56 glass-strong rounded-xl overflow-hidden shadow-xl"
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
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSectoralOpen ? "rotate-180" : ""}`} />
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
                    className="absolute top-full left-0 mt-2 w-64 glass-strong rounded-xl overflow-hidden shadow-xl"
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
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOtherOpen ? "rotate-180" : ""}`} />
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
                    className="absolute top-full left-0 mt-2 w-56 glass-strong rounded-xl overflow-hidden shadow-xl"
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
              href="/contact"
              className="px-6 py-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-200 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile SEO Services */}
              <div className="space-y-2">
                <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider px-2 py-1">
                  SEO Services
                </div>
                {seoServices.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 py-2 pl-4"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Sektörel SEO Services */}
              <div className="space-y-2">
                <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider px-2 py-1">
                  Sektörel SEO
                </div>
                {sectoralServices.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 py-2 pl-4"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Other Services */}
              <div className="space-y-2">
                <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider px-2 py-1">
                  Daha Fazla
                </div>
                {otherServices.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 py-2 pl-4"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-2 bg-white text-black rounded-full font-semibold text-sm text-center hover:bg-gray-200 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

