"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "./skillsData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-20 text-center"
        >
          <p className="tracking-[.4em] text-cyan-400 uppercase">
            ENGINEERING CAPABILITIES
          </p>

          <h2 className="mt-5 text-6xl font-black text-white">
            Skills Dashboard
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Technologies and engineering tools that I have worked
            with across embedded systems, industrial automation,
            software development, and AI.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              skill={skill}
            />
          ))}
        </div>

      </div>
    </section>
  );
}