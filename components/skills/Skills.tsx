"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillCategories } from "./data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <p className="mb-3 uppercase tracking-[8px] text-cyan-400">
          Tech Stack
        </p>

        <h2 className="text-5xl font-black text-white">
          Technologies I Work With
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-400">
          A collection of technologies, tools, and platforms I use to build
          embedded systems, automation solutions, AI applications, and modern web experiences.
        </p>
      </motion.div>

      <div className="space-y-16">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="mb-8 text-2xl font-bold text-white">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
              {category.skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}