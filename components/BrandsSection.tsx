"use client";

import { motion } from "framer-motion";

const brandGroups = [
  ["Enza Home", "LTB Jeans", "Levis", "Eastpak", "Vans"],
  ["Timberland", "Dockers", "Yatsan", "İyi Uyku İyi Hayat", "Chakra"],
  ["Dünyagöz", "Aktif Bank", "N Kolay", "Atlas Üniversitesi", "Maltepe Üniversitesi Hastanesi"],
];

export default function BrandsSection() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-ink">
               Danışmanlık Verdiğim Markalar
            </span>
          </h2>
          <p className="text-xl text-ink-muted">
             Farklı sektörlerdeki lider markalar tarafından tercih edilen
          </p>
        </motion.div>

        <div className="space-y-8">
          {brandGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.2, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-5 gap-4"
            >
              {group.map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (groupIndex * 0.2) + (index * 0.1), duration: 0.4 }}
                  className="glass p-6 rounded-xl text-center hover:bg-ink/5 transition-all duration-300 hover:scale-105"
                >
                  <span className="font-extrabold tracking-wider uppercase text-sm md:text-base bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">{brand}</span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}






