"use client"

import React from "react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/905070474702";

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999]">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center rounded-full"
      >
        {/* Pulsing ring animation */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-[#25D366]/30 pointer-events-none"
        />

        {/* The main button */}
        <motion.div
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgba(37, 211, 102, 0.3), 0 10px 10px -5px rgba(37, 211, 102, 0.2)"
          }}
          className="relative flex items-center gap-3 bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-lg border border-white/20 transition-colors duration-300 hover:bg-[#20bd5a]"
        >
          {/* Tooltip-like label that appears on hover/active */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap font-semibold text-sm transition-all duration-300 group-hover:max-w-xs group-hover:ml-2">
            WhatsApp ile İletişime Geç
          </span>
          <svg 
            viewBox="0 0 24 24" 
            className="w-6 h-6 md:w-7 md:h-7 fill-current shrink-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.445L0 24l7.149-1.875a11.822 11.822 0 005.443 1.334h.005c6.551 0 11.888-5.335 11.89-11.892a11.833 11.833 0 00-3.486-8.412h.001z" />
          </svg>
        </motion.div>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
