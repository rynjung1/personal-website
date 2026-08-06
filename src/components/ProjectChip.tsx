"use client";

import { motion } from "framer-motion";

interface ProjectChipProps {
  text: string;
  color: string;
}

export default function ProjectChip({ text, color }: ProjectChipProps) {
  return (
    <motion.div
      className="relative w-fit overflow-hidden rounded-md px-2.5 py-1 text-xs font-medium"
      style={{ border: `1px solid #${color}` }}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        boxShadow: [
          "0 0 0 0 rgba(0,0,0,0)",
          `0 0 10px 2px #${color}40`,
          "0 0 0 0 rgba(0,0,0,0)",
        ],
      }}
      transition={{
        duration: 0.6,
        boxShadow: {
          duration: 3,
          repeat: Infinity,
          repeatDelay: 4,
        },
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 20px 4px #${color}55`,
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        className="absolute inset-0 -skew-x-12"
        style={{
          background: `linear-gradient(135deg, transparent, #${color}75, transparent)`,
        }}
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      />

      <span className="relative font-semibold" style={{ color: `#${color}` }}>
        {text}
      </span>
    </motion.div>
  );
}
