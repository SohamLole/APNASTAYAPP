"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export default function Card3D({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{ perspective: 1200 }}
      className={clsx(
        "bg-card",
        "border",
        "border-[var(--border)]",
        "rounded-2xl",
        "p-6",
        "shadow-[0_20px_40px_rgba(0,0,0,0.08)]",
        "hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]",
        "transition-shadow"
      )}
    >
      {children}
    </motion.div>
  );
}
