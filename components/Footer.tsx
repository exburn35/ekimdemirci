import Link from "next/link";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "SEO Services", href: "/services" },
    { name: "Sektörel SEO", href: "/sektorel-seo-hizmetleri" },
    { name: "Fiyatlar", href: "/seo-danismanlik-fiyatlari" },
    { name: "İçerik Yazımı", href: "/icerik-yazimi" },
    { name: "Audit Talebi", href: "/audit-talebi" },
  ],
  sectoral: [
    { name: "Diş Hekimleri için SEO", href: "/sektorel-seo-hizmetleri/dis-hekimleri-icin-seo-2" },
    { name: "E-Ticaret SEO", href: "/sektorel-seo-hizmetleri/e-ticaret-seo" },
    { name: "Avukatlar için SEO", href: "/sektorel-seo-hizmetleri/avukatlar-icin-seo-hizmeti" },
    { name: "Güzellik Merkezleri", href: "/sektorel-seo-hizmetleri/guzellik-merkezleri-icin-seo-2" },
    { name: "Doktorlar için SEO", href: "/sektorel-seo-hizmetleri/doktorlar-icin-seo-2" },
    { name: "Hastaneler için SEO", href: "/sektorel-seo-hizmetleri/hastaneler-icin-seo-2" },
  ],
  resources: [
    { name: "Başarı Hikayeleri", href: "/basari-hikayeleri" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:contact@ekimdemirci.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Ekim Demirci
            </h3>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Expert SEO Specialist helping businesses achieve top search rankings and drive organic growth through data-driven strategies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sektörel SEO */}
          <div>
            <h4 className="text-white font-semibold mb-4">Sektörel SEO</h4>
            <ul className="space-y-2">
              {footerLinks.sectoral.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ekim Demirci. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Türkiye&apos;nin En İyi SEO Uzmanı
          </p>
        </div>
      </div>
    </footer>
  );
}


