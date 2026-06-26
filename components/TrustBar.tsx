"use client";

import { motion } from "framer-motion";

// Yer tutucu müşteri logoları - gerçek müşteri logolarıyla değiştirin
const clients = [
  "Enza Home",
  "LTB Jeans",
  "Levis",
  "Vans",
  "Timberland",
  "Dockers",
];

export default function TrustBar() {
  return (
    <section className="py-16 bg-[#0a0f25] border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Sektör Liderleri Tarafından Güvenilen SEO Danışmanı
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center justify-center h-16 bg-white/5 border border-white/10 rounded-lg hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:border-purple-500/20 transition-all duration-300"
            >
              <span className="font-extrabold tracking-widest uppercase text-base md:text-lg bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] bg-clip-text text-transparent">{client}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}






