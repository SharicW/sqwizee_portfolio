"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FloatingCard({ children, delay = 0, className = "", noBackground = false, disableHover = false }: { children: ReactNode, delay?: number, className?: string, noBackground?: boolean, disableHover?: boolean }) {
  const bgClasses = noBackground ? "" : "glass-panel pixel-corners p-4 border border-white/5 bg-black/40 backdrop-blur-md hover:border-white/20";
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={disableHover ? {} : { scale: 1.05, zIndex: 10 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ delay: delay * 0.15, duration: 0.25, ease: "easeOut" }}
      className={`${bgClasses} transition-colors duration-300 h-full flex flex-col ${className}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.5,
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
