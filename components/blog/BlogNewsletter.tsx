"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          formType: "newsletter",
        }),
      });

      if (!response.ok) {
        throw new Error("Abonelik başarısız");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Yeni Makalelerden Haberdar Olun
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            SEO ve dijital pazarlama hakkında en güncel içerikleri e-posta adresinize gönderelim.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl max-w-md mx-auto text-green-400 text-sm font-semibold shadow-sm"
            >
              🎉 Başarıyla abone oldunuz! Harika içerikler yakında gelen kutunuzda olacak.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto items-stretch">
              <div className="flex-1 flex flex-col items-stretch">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresiniz"
                  className="w-full px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {status === "error" && (
                  <span className="text-red-400 text-xs mt-2 text-left px-4">
                    Bir hata oluştu. Lütfen tekrar deneyin.
                  </span>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2 self-center sm:self-auto min-h-[46px]"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : (
                  "Abone Ol"
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
