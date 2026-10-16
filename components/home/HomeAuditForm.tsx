"use client";

import { useState } from "react";
import { Send, Globe, Mail, Target, CheckCircle2, Clock } from "lucide-react";

export default function HomeAuditForm() {
  const [formData, setFormData] = useState({
    website: "",
    email: "",
    target: "İkisi (SEO + GEO)",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      let cleanWebsite = formData.website.trim();
      if (cleanWebsite && !/^https?:\/\//i.test(cleanWebsite)) {
        cleanWebsite = `https://${cleanWebsite}`;
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Analiz Talebi",
          email: formData.email.trim(),
          website: cleanWebsite,
          message: `Analiz Hedefi: ${formData.target}`,
          formType: "audit",
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Gönderim sırasında bir hata oluştu.");
      }

      setStatus("success");
      setFormData({ website: "", email: "", target: "İkisi (SEO + GEO)" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err?.message || "Talebiniz iletilirken bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="analiz" className="bg-[#0d153a] border-b border-white/5 py-12 md:py-16 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Ücretsiz SEO & GEO Analizi
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Web sitenizin arama motorlarındaki teknik sağlığını ve yapay zeka arama motorlarındaki görünürlüğünü ücretsiz inceleyelim.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs sm:text-sm font-medium">
            <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>48 saat içinde detaylı rapor e-postanıza iletilir</span>
          </div>
        </div>

        <div className="p-6 sm:p-10 rounded-3xl bg-[#0a0f25] border border-white/10 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Site URL */}
            <div>
              <label htmlFor="audit-website" className="block text-sm font-semibold text-gray-200 mb-2">
                <Globe className="w-4 h-4 inline mr-2 text-purple-400" />
                Web Sitesi Adresi *
              </label>
              <input
                type="text"
                id="audit-website"
                name="website"
                required
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="ornek.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/10 transition-all text-sm"
              />
            </div>

            {/* E-posta */}
            <div>
              <label htmlFor="audit-email" className="block text-sm font-semibold text-gray-200 mb-2">
                <Mail className="w-4 h-4 inline mr-2 text-purple-400" />
                E-posta Adresiniz *
              </label>
              <input
                type="email"
                id="audit-email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="adiniz@sirketiniz.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/10 transition-all text-sm"
              />
            </div>

            {/* Hedef (SEO / GEO / İkisi) */}
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                <Target className="w-4 h-4 inline mr-2 text-purple-400" />
                Analiz Hedefiniz *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { value: "SEO", label: "SEO (Google SERP)" },
                  { value: "GEO", label: "GEO (AI Yanıtları)" },
                  { value: "İkisi (SEO + GEO)", label: "İkisi (SEO + GEO)" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, target: opt.value })}
                    className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-medium transition-all text-center ${
                      formData.target === opt.value
                        ? "bg-purple-600/30 border-purple-500 text-white shadow-sm"
                        : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Durum Bildirimleri */}
            {status === "success" && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Talebiniz başarıyla alındı! Analiziniz 48 saat içinde e-posta adresinize iletilecektir.</span>
              </div>
            )}

            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] disabled:opacity-50 flex items-center justify-center gap-2 group cursor-pointer"
            >
              {isSubmitting ? (
                <span>Analiz Talebi Gönderiliyor...</span>
              ) : (
                <>
                  <span>Ücretsiz Analiz Raporunu İste</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
