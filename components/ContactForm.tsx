"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, Globe } from "lucide-react";

interface ContactFormProps {
  title?: string;
  description?: string;
  showTitle?: boolean;
  showWebsite?: boolean;
  formType?: string;
  buttonText?: string;
}

export default function ContactForm({
  title = "İletişime Geçin",
  description = "Aşağıdaki formu doldurun, size en kısa sürede döneceğim.",
  showTitle = true,
  showWebsite = false,
  formType = "contact",
  buttonText = "Mesajı Gönder",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Auto-format website if provided
      let cleanWebsite = formData.website.trim();
      if (cleanWebsite && !/^https?:\/\//i.test(cleanWebsite)) {
        cleanWebsite = `https://${cleanWebsite}`;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          website: cleanWebsite,
          message: formData.message.trim(),
          formType,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Gönderim sırasında bir hata oluştu.");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", website: "", message: "" });
    } catch (error: any) {
      setSubmitStatus("error");
      setErrorMessage(error?.message || "Bir şeyler yanlış gitti. Lütfen tekrar deneyin veya doğrudan iletişime geçin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-[#0a0f25] border-t border-white/5 relative z-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111836] rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(139,92,246,0.1)] border border-purple-500/20 relative"
        >
          {showTitle && (
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">
                {title}
              </h2>
              <p className="text-gray-400 text-lg font-medium">{description}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                <User className="w-4 h-4 inline mr-2 text-purple-400" />
                Ad Soyad *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/10 transition-all shadow-sm"
                placeholder="Adınız Soyadınız"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                <Mail className="w-4 h-4 inline mr-2 text-purple-400" />
                E-posta Adresi *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/10 transition-all shadow-sm"
                placeholder="ornek@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                Telefon Numarası
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/10 transition-all shadow-sm"
                placeholder="+90 555 123 4567"
              />
            </div>

            {showWebsite && (
              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-gray-300 mb-2">
                  <Globe className="w-4 h-4 inline mr-2 text-purple-400" />
                  Web Sitesi (Opsiyonel)
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/10 transition-all shadow-sm"
                  placeholder="ekimdemirci.com"
                />
              </div>
            )}

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                <MessageSquare className="w-4 h-4 inline mr-2 text-purple-400" />
                Mesajınız *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/10 transition-all shadow-sm resize-none"
                placeholder="Projenizden veya talebinizden bahsedin..."
              />
            </div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm font-medium shadow-sm"
              >
                Teşekkürler! Mesajınız başarıyla iletildi. En kısa sürede size geri dönüş yapacağım.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium shadow-sm"
              >
                {errorMessage || "Bir şeyler yanlış gitti. Lütfen tekrar deneyin veya doğrudan iletişime geçin."}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-purple-600 text-white rounded-xl font-bold text-lg hover:bg-purple-700 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Gönderiliyor...
                </>
              ) : (
                <>
                  {buttonText}
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
