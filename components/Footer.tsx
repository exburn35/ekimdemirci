import Link from "next/link";
import { 
  ArrowRight,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import Image from "next/image";
import Logo from "./Logo";
import { socialChannels } from "@/lib/social";
import { SITE_CONFIG } from "@/lib/siteConfig";

const quickLinks = [
  { name: "Anasayfa", href: "/" },
  { name: "Hakkımda", href: "/hakkimda" },
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/iletisim" },
];

const socialLinks = socialChannels;

const services = [
  { name: "GEO Danışmanlığı", href: "/geo-danismanligi" },
  { name: "SEO Danışmanlığı", href: "/seo-danismanligi" },
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
  { name: "SEO Ajansları", href: "/seo-ajanslari" },
];

const legal = [
  { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { name: "Kullanım Şartları", href: "/kullanim-kosullari" },
  { name: "Çerez Politikası", href: "/cerez-politikasi" },
];

export default function Footer() {
  return (
    <footer className="bg-night pt-24 pb-12 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-3">
            <Link href="/" className="mb-6 inline-block rounded-2xl bg-white px-4 py-2">
              <Logo className="h-10 w-auto" textClassName="text-2xl font-bold tracking-tight text-[#392F67]" />
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Veri odaklı SEO stratejileriyle dijital varlığınızı büyütüyor, 
              sürdürülebilir organik trafik ve artan dönüşüm oranları sağlıyorum.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <Image src={social.logo} alt="" width={22} height={22} className="h-[22px] w-[22px] object-contain" />
                </a>
              ))}
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
                <a href={`mailto:${SITE_CONFIG.email}`} className="group flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <div className="group flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>{SITE_CONFIG.address}</span>
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
