"use client";

import { motion } from "framer-motion";
import CircularProgress from "./CircularProgress";

interface Props {
  skill: {
    title: string;
    percentage: number;
    color: string;
    icon: string;
    category: string;
  };
}

export default function SkillCard({ skill }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
      rounded-3xl
      border
      border-zinc-700
      bg-zinc-900/70
      p-8
      backdrop-blur-xl
      transition-all
      hover:border-cyan-400
      hover:shadow-[0_0_40px_rgba(0,217,255,.25)]
      "
    >
      <div className="mb-5 text-5xl">
        {skill.icon}
      </div>

      <CircularProgress
        value={skill.percentage}
        color={skill.color}
      />

      <h3 className="mt-6 text-2xl font-bold text-white">
        {skill.title}
      </h3>

      <p className="mt-2 text-gray-400">
        {skill.category}
      </p>
    </motion.div>
  );
}