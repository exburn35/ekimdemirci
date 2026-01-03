"use client";

import { motion } from "framer-motion";

const brandGroups = [
  ["Enza Home", "LTB Jeans", "Levis", "Eastpak", "Vans"],
  ["Timberland", "Dockers", "Yatsan", "İyi Uyku İyi Hayat", "Chakra"],
  ["Dünyagöz", "Aktif Bank", "N Kolay", "Atlas Üniversitesi", "Maltepe Üniversitesi Hastanesi"],
];

export default function BrandsSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Brands I&apos;ve Consulted
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by leading brands across multiple industries
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
                  className="glass p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-gray-300 font-medium text-sm">{brand}</span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


