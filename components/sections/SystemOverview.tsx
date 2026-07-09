"use client";

import { motion } from "framer-motion";

const systems = [
  { name: "CPU", status: "ONLINE" },
  { name: "ESP32", status: "ACTIVE" },
  { name: "PLC", status: "READY" },
  { name: "IoT", status: "CONNECTED" },
  { name: "AI", status: "LOADED" },
];

export default function SystemOverview() {
  return (
    <section
      id="about"
      className="relative z-10 flex min-h-screen items-center justify-center px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass w-full max-w-6xl rounded-3xl border border-cyan-400/20 p-10"
      >
        <h2 className="mb-10 text-center text-5xl font-black gradient-text">
          SYSTEM OVERVIEW
        </h2>

        <div className="space-y-6">
          {systems.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-4"
            >
              <span className="font-mono text-lg text-gray-300">
                {item.name}
              </span>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
                <span className="font-semibold text-cyan-300">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}