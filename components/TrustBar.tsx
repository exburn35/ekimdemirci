"use client";

import { motion } from "framer-motion";

// Placeholder client logos - replace with actual client logos
const clients = [
  "Client A",
  "Client B",
  "Client C",
  "Client D",
  "Client E",
  "Client F",
];

export default function TrustBar() {
  return (
    <section className="py-16 bg-black/30 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
            Trusted By Industry Leaders
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
              className="flex items-center justify-center h-16 glass rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-gray-400 text-sm font-medium">{client}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


