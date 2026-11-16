import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Açık ve sıcak tema token'ları
        canvas: { DEFAULT: "#F7F6F2", alt: "#EFEDE6" },
        ink: {
          DEFAULT: "#161B2E",
          soft: "#4A5068",
          muted: "#6B7088",
          faint: "#8D91A4",
        },
        line: { DEFAULT: "#E6E3DA", strong: "#D3CFC2" },
        brand: { DEFAULT: "#3D3DD6", dark: "#2E2EB0", light: "#ECECFB" },
        accent: { DEFAULT: "#0F9D8A", dark: "#0B7A6B", light: "#E3F4F1" },
        night: { DEFAULT: "#161B2E", soft: "#1F2540" },
      },
      // Büyük başlıklarda Türkçe noktalı harflerin (İ, Ö, Ü) üst satıra değmemesi için
      // varsayılan 1.0–1.1 satır yükseklikleri gevşetildi.
      fontSize: {
        "3xl": ["1.875rem", { lineHeight: "1.25" }],
        "4xl": ["2.25rem", { lineHeight: "1.2" }],
        "5xl": ["3rem", { lineHeight: "1.16" }],
        "6xl": ["3.75rem", { lineHeight: "1.12" }],
        "7xl": ["4.5rem", { lineHeight: "1.1" }],
        "8xl": ["6rem", { lineHeight: "1.05" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(22,27,46,0.04), 0 4px 16px rgba(22,27,46,0.05)",
        lift: "0 2px 4px rgba(22,27,46,0.05), 0 12px 32px rgba(22,27,46,0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        marquee: "marquee 45s linear infinite",
        "marquee-reverse": "marquee 45s linear infinite reverse",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
