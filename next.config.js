/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ekimdemirci.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
    ];
  },
  async redirects() {
    const blogSlugs = [
      "yapay-zeka-gorunurlugunuzu-olcmek-icin-en-iyi-araclar",
      "2026-yilinda-kullanabileceginiz-en-iyi-10-yapay-zeka-seo-araclari",
      "anahtar-kelime-nedir",
      "arama-motoru-nedir-en-cok-hangisi-kullaniliyor",
      "artificial-intelliegence-optimization-nedir",
      "aso-nedir",
      "backlink-nedir",
      "breadcrumb-nedir",
      "chatgpt-nedir-nasil-kullanilir",
      "chatgptde-nasil-gorunur-olunur",
      "client-side-rendering-csr-nedir",
      "dis-klinigi-seo-nedir-dis-hekimleri-icin-neden-onemlidir",
      "e-ticaret-seo-nasil-yapilir",
      "generative-engine-optimization-geo-nedir",
      "google-algoritma-guncellemeleri",
      "google-analytics-4-nedir-nasil-kullanilir",
      "google-ban-kontrolu-nedir-ve-nasil-yapilir",
      "google-gemini-nedir",
      "google-guncellemelerinden-en-cok-etkilenen-sektorler-ve-ayakta-kalma-rehberi",
      "google-lighthouse-nedir-neden-onemlidir",
      "google-my-business-nedir",
      "google-raters-guideline-nedir",
      "google-search-console-nedir",
      "google-trends-nedir",
      "googlein-yeni-algoritmasi-muvera-nedir",
      "gtmetrix-nedir-nasil-kullanilir",
      "http-yonlendirme-kodlari-nelerdir",
      "kullanicilarin-yaptigi-diger-aramalar-ozelligi-nedir",
      "nlp-seo-nedir",
      "pagespeed-insight-nedir-nasil-kullanilir",
      "pdf-dosyalari-icin-seo-nasil-optimize-edilir",
      "pop-up-nedir-pop-upin-seodaki-yeri",
      "robots-txt-nedir-ve-nasil-kullanilir",
      "semrush-nedir",
      "seo-analizi-nedir",
      "seo-nasil-ogrenilir",
      "seo-nasil-yapilir",
      "seo-nedir",
      "seo-uzmani-kimdir",
      "seoda-dogru-bilinen-yanlislar-artik-gercekleri-ogrenmenin-zamani-geldi",
      "seoda-otorite-nedir",
      "server-side-rendering-nedir",
      "turkiyenin-en-iyi-15-seo-ajansi",
      "yapilandirilmis-veri-nedir",
      "yazar-otoritesi-nedir-seodaki-onemi-nedir",
      "yerel-seo-nedir"
    ];

    return blogSlugs.map((slug) => ({
      source: `/${slug}`,
      destination: `/blog/${slug}`,
      permanent: true,
    }));
  },
}

module.exports = nextConfig





