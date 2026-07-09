"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-9999 h-1 origin-left bg-cyan-400"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}