import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Instagram, 
  Linkedin, 
  Youtube, 
  ArrowRight,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import Logo from "./Logo";

const quickLinks = [
  { name: "Anasayfa", href: "/" },
  { name: "Hakkımda", href: "/hakkimda" },
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/iletisim" },
];

// Updated social links based on user request
const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/ekim-demirci/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/ekimdemircii/", label: "Instagram" },
  { 
    // Custom SVG for Pinterest since it's not in lucide by default, or just use a generic icon (Link). 
    // We will build a small custom SVG inside the map for Pinterest and Medium.
    icon: "Pinterest", href: "https://tr.pinterest.com/ekimdemirciseo/", label: "Pinterest" 
  },
  { icon: Youtube, href: "https://www.youtube.com/@ekimdemirciseo", label: "YouTube" },
  { icon: "Medium", href: "https://medium.com/@ekmdmrci", label: "Medium" },
];

const services = [
  { name: "Yapay Zeka SEO", href: "/seo-hizmetleri/yapay-zeka-seo" },
  { name: "Teknik SEO", href: "/seo-hizmetleri/teknik-seo" },
  { name: "Site İçi SEO", href: "/seo-hizmetleri/sayfa-ici-seo" },
  { name: "Site Dışı SEO", href: "/seo-hizmetleri/sayfa-disi-seo" },
];

const resources = [
  { name: "Vaka Analizleri", href: "/basari-hikayeleri" },
  { name: "SEO Araçları", href: "/tools" },
  { name: "Sıkça Sorulan Sorular", href: "/sikca-sorulan-sorular" },
  { name: "Sözlük", href: "/seo-sozlugu" },
];

const legal = [
  { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { name: "Kullanım Şartları", href: "/kullanim-kosullari" },
  { name: "Çerez Politikası", href: "/cerez-politikasi" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f25] pt-24 pb-12 overflow-hidden relative border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block mb-6">
              <Logo className="h-12 w-auto" textClassName="text-2xl font-bold text-white tracking-tight" />
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Veri odaklı SEO stratejileriyle dijital varlığınızı büyütüyor, 
              sürdürülebilir organik trafik ve artan dönüşüm oranları sağlıyorum.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                    aria-label={social.label}
                  >
                    {social.icon === "Pinterest" ? (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                       <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z"/>
                      </svg>
                    ) : social.icon === "Medium" ? (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                       <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                      </svg>
                    ) : (
                      <social.icon className="w-5 h-5" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Hızlı Bağlantılar</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Hizmetler</h3>
            <ul className="space-y-4">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Kaynaklar</h3>
            <ul className="space-y-4">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 mt-8 lg:mt-0">
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">İletişim</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:ekmdmrci@gmail.com" className="group flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>ekmdmrci@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="group flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>İstanbul, Türkiye</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ekim Demirci. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6">
            <Link href="/gizlilik-politikasi" className="text-gray-500 hover:text-white text-sm transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-kosullari" className="text-gray-500 hover:text-white text-sm transition-colors">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
