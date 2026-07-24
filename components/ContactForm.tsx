"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";

interface ContactFormProps {
  title?: string;
  description?: string;
  showTitle?: boolean;
}

export default function ContactForm({
  title = "İletişime Geçin",
  description = "Aşağıdaki formu doldurun, size en kısa sürede döneceğim.",
  showTitle = true,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: "contact",
        }),
      });

      if (!response.ok) {
        throw new Error("Gönderim başarısız");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
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
                placeholder="Projenizden bahsedin..."
              />
            </div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm font-medium shadow-sm"
              >
                Teşekkürler! Mesajınız gönderildi. En kısa sürede size döneceğim.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium shadow-sm"
              >
                Bir şeyler yanlış gitti. Lütfen tekrar deneyin veya benimle doğrudan iletişime geçin.
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
                  Mesajı Gönder
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






