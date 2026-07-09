"use client";

import { experiences } from "./experienceData";
import  TimelineItem from "./TimelineItem";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[.4em] text-cyan-400">
            EXPERIENCE
          </p>

          <h2 className="mt-5 text-6xl font-black text-white">
            Career Timeline
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            My internship journey across Industrial Automation,
            Embedded Systems and Data Science.
          </p>

        </motion.div>

        <div className="relative">

          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-cyan-500/20"/>

          <div className="space-y-10">
            {experiences.map((exp,index)=>(
              <TimelineItem
                key={exp.company}
                item={exp}
                index={index}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}