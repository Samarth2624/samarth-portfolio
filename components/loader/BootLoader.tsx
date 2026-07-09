"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "Loading Kernel...",
  "Initializing Portfolio...",
  "Connecting ESP32...",
  "Loading Embedded Modules...",
  "Starting Interface...",
  "System Ready.",
];

export default function BootLoader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < messages.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 600);
      return () => clearTimeout(timer);
    }

    const done = setTimeout(() => {
      onComplete();
    }, 1200);

    return () => clearTimeout(done);
  }, [index, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-99999 flex items-center justify-center bg-black"
      >
        <div className="w-[90%] max-w-xl rounded-xl border border-cyan-500/20 bg-zinc-950 p-8 shadow-[0_0_80px_rgba(0,217,255,.15)]">
          <h1 className="mb-8 text-center text-2xl font-bold text-cyan-400">
            SYSTEM BOOT
          </h1>

          {messages.map((message, i) => (
            <motion.p
              key={message}
              initial={{ opacity: 0 }}
              animate={{
                opacity: i <= index ? 1 : 0.15,
              }}
              className={`mb-2 font-mono ${
                i === index ? "text-cyan-300" : "text-zinc-500"
              }`}
            >
              {i <= index ? "✔ " : "• "}
              {message}
            </motion.p>
          ))}

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-zinc-800">
            <motion.div
              className="h-full bg-cyan-400"
              animate={{
                width: `${((index + 1) / messages.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}