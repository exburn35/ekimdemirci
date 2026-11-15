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
  const targets = [
    { value: "SEO", label: "Google sıralamaları" },
    { value: "GEO", label: "Yapay zeka görünürlüğü" },
    { value: "İkisi (SEO + GEO)", label: "İkisi birden" },
  ];

  return (
    <section id="analiz" className="scroll-mt-24 bg-night py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-light/80">Ücretsiz ön analiz</p>
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[44px]">
            Sitenizin bugün nerede durduğunu birlikte görelim.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Adresinizi bırakın; sitenizin teknik sağlığına, içerik fırsatlarına ve yapay zeka asistanlarında markanızın
            nasıl anıldığına bakayım. Bulguları satış konuşması olmadan, açık bir dille iletirim.
          </p>
          <ul className="mt-8 space-y-3">
            {["Teknik sağlık ve indeksleme kontrolü", "En hızlı kazanılabilecek içerik fırsatları", "ChatGPT, Gemini ve Perplexity'de marka durumu"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/85">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
            <Clock className="h-4 w-4" /> 48 saat içinde e-postanıza iletilir
          </p>
        </div>

        <div className="lg:col-span-6">
          <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl bg-white p-6 shadow-lift sm:p-9">
            <div>
              <label htmlFor="audit-website" className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
                <Globe className="h-4 w-4 text-brand" /> Web sitenizin adresi
              </label>
              <input
                type="text"
                id="audit-website"
                name="website"
                required
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="ornek.com"
                className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder-ink-faint transition-all focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10"
              />
            </div>

            <div>
              <label htmlFor="audit-email" className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
                <Mail className="h-4 w-4 text-brand" /> E-posta adresiniz
              </label>
              <input
                type="email"
                id="audit-email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="adiniz@sirketiniz.com"
                className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder-ink-faint transition-all focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10"
              />
            </div>

            <fieldset>
              <legend className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
                <Target className="h-4 w-4 text-brand" /> En çok neyi merak ediyorsunuz?
              </legend>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {targets.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    aria-pressed={formData.target === opt.value}
                    onClick={() => setFormData({ ...formData, target: opt.value })}
                    className={`rounded-xl border px-3 py-3 text-center text-sm font-medium transition-all ${
                      formData.target === opt.value
                        ? "border-brand bg-brand-light text-brand"
                        : "border-line bg-white text-ink-soft hover:border-line-strong"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </fieldset>

            {status === "success" && (
              <div className="flex items-center gap-2 rounded-xl border border-accent/20 bg-accent-light p-4 text-sm text-accent-dark">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span>Talebiniz bana ulaştı. Ön analizinizi 48 saat içinde e-posta adresinize göndereceğim.</span>
              </div>
            )}

            {status === "error" && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{errorMessage}</div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand py-4 text-base font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Gönderiliyor...</span>
              ) : (
                <>
                  <span>Ücretsiz ön analizimi iste</span>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-ink-faint">
              Bilgileriniz yalnızca bu talep için kullanılır.{" "}
              <a href="/gizlilik-politikasi" className="underline underline-offset-2 hover:text-ink-muted">Gizlilik politikası</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
