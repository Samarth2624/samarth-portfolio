"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "04",
    label: "Projects",
  },
  {
    value: "02",
    label: "Internships",
  },
  {
    value: "05",
    label: "Certificates",
  },
  {
    value: "25+",
    label: "LeetCode Problems",
  },
];

export default function Stats() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        {stats.map((item) => (
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
            key={item.label}
            className="glass glow rounded-3xl p-10 text-center"
          >
            <h2 className="text-5xl font-black text-cyan-400">
              {item.value}
            </h2>

            <p className="mt-4 text-gray-400">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}