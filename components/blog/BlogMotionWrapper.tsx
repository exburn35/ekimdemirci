"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function BlogMotionWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
