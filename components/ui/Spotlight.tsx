"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
      style={{
        background: useMotionTemplate`
          radial-gradient(
            260px circle at ${mouseX}px ${mouseY}px,
            rgba(0,217,255,.15),
            transparent 80%
          )
        `,
      }}
    />
  );
}