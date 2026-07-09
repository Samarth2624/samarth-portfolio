"use client";

import { motion } from "framer-motion";

interface Props {
  item: any;
  index: number;
}

export default function TimelineItem({
  item,
  index,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="rounded-3xl border border-zinc-700 bg-zinc-900/70 p-8 backdrop-blur-xl hover:border-cyan-400 transition">

        <p className="text-cyan-400 text-sm uppercase tracking-widest">
          {item.duration}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {item.company}
        </h3>

        <p className="text-lg text-gray-300 mt-1">
          {item.role}
        </p>

        <p className="mt-5 text-gray-400 leading-7">
          {item.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.technologies.map((tech: string) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}