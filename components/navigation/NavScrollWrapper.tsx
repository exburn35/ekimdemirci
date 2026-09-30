"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

interface NavScrollWrapperProps {
  children: React.ReactNode;
  mobileDrawer: React.ReactNode;
}

export default function NavScrollWrapper({
  children,
  mobileDrawer,
}: NavScrollWrapperProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile drawer when any link inside is clicked
  const handleMobileDrawerClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1400px] transition-all duration-300 px-4"
    >
      <div
        className={`mx-auto px-6 py-3.5 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0f25]/90 backdrop-blur-lg border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.25)]"
            : "bg-[#0a0f25]/70 backdrop-blur-md border-purple-500/20 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
        }`}
      >
        <div className="flex items-center justify-between">
          {children}

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-drawer"
            aria-label="Menüyü aç/kapa"
          >
            {isMobileMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer - Always in DOM for SEO crawlers, toggled via CSS */}
      <div
        id="mobile-menu-drawer"
        role="region"
        aria-label="Mobil Navigasyon Menüsü"
        data-open={isMobileMenuOpen ? "true" : "false"}
        onClick={handleMobileDrawerClick}
        className={`lg:hidden bg-[#0a0f25]/98 backdrop-blur-2xl border border-white/10 rounded-2xl mt-2 overflow-hidden shadow-2xl flex flex-col transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-[85vh] opacity-100 visible translate-y-0"
            : "max-h-0 opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        {mobileDrawer}
      </div>
    </nav>
  );
}
