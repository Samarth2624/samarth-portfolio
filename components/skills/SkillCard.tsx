"use client";

import { motion } from "framer-motion";

interface Props {
  name: string;
  icon: any;
  color: string;
}

export default function SkillCard({
  name,
  icon: Icon,
  color,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="
      group
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-6
      backdrop-blur-md
      transition-all
      duration-300
      hover:border-cyan-400/40
      hover:shadow-[0_0_25px_rgba(0,217,255,.18)]
      "
    >
      <div className="flex flex-col items-center gap-4">
        <Icon
          size={48}
          color={color}
          className="transition duration-300 group-hover:scale-110"
        />

        <h3 className="text-center text-sm font-semibold text-white">
          {name}
        </h3>
      </div>
    </motion.div>
  );
}