"use client";

import { Download, FileText } from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative py-32 px-6"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: .7 }}
          className="
          rounded-[40px]
          border
          border-cyan-500/20
          bg-zinc-900/60
          backdrop-blur-xl
          p-14
          "
        >

          <p className="uppercase tracking-[.4em] text-cyan-400">

            PROFESSIONAL PROFILE

          </p>

          <h2 className="mt-6 text-5xl font-black text-white">

            Resume Control Center

          </h2>

          <p className="mt-5 max-w-3xl text-lg text-gray-400">

            Download my resume, explore my projects and
            connect through professional platforms.

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <a

              href="/samarth_resume.pdf"

              className="
              rounded-xl
              bg-cyan-500
              px-6
              py-4
              text-black
              font-semibold
              flex
              items-center
              gap-3
              hover:scale-105
              transition
              "

            >

              <Download size={20}/>

              Download Resume

            </a>

            <a

              href="/samarth_resume.pdf"

              target="_blank"

              className="
              rounded-xl
              border
              border-zinc-700
              px-6
              py-4
              text-white
              flex
              items-center
              gap-3
              hover:border-cyan-400
              transition
              "

            >

              <FileText size={20}/>

              View Resume

            </a>

          </div>

          <div className="mt-12 flex gap-5">

            <a

              href="https://github.com/Samarth2624"

              target="_blank"

              className="text-gray-300 hover:text-cyan-400"

            >

              <FaGithub size={32} />

            </a>

            <a

              href="https://www.linkedin.com/in/samarth-phakatkar-377677294"

              target="_blank"

              className="text-gray-300 hover:text-cyan-400"

            >

              <FaLinkedin size={32}/>

            </a>

            <a

              href="https://leetcode.com/u/Samarth26/"

              target="_blank"

              className="text-gray-300 hover:text-cyan-400"

            >

              <SiLeetcode size={30}/>

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}