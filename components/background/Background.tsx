"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-50 overflow-hidden bg-black">

        {/* Top Glow */}
        <motion.div
          animate={{
            opacity: [0.25, 0.5, 0.25],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
          }}
          className="absolute -top-72 left-1/2 h-175 w-175 -translate-x-1/2 rounded-full bg-cyan-500 blur-[180px]"
        />

        {/* Bottom Glow */}
        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
          }}
          className="absolute -bottom-87.5 -right-37.5 h-162.5 w-162.5 rounded-full bg-blue-700 blur-[200px]"
        />

      </div>
    </>
  );
}