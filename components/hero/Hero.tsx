"use client";

import { motion } from "framer-motion";
import AnimatedRoles from "./AnimatedRoles";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .3 }}
        className="mb-5 tracking-[8px] text-gray-500 uppercase"
      >
        Embedded Control System
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
       className="gradient-text text-center text-7xl font-black md:text-[10rem] drop-shadow-[0_0_40px_rgba(0,217,255,0.35)]"
      >
        SAMARTH
        <div
  className="
  absolute
  h-175
  w-175
  rounded-full
  bg-cyan-500/20
  blur-[180px]
  -z-10
"
/>
      </motion.h1>

      <AnimatedRoles />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 max-w-3xl text-center text-lg leading-8 text-gray-400"
      >
        Building intelligent embedded systems, IoT solutions,
        industrial automation, and AI-powered applications that
        bridge hardware and software.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="mt-12 flex flex-wrap justify-center gap-6"
      >
        <button className="glass glow rounded-full px-8 py-4 font-semibold">
          Initialize Interface
        </button>

        <button className="rounded-full border border-cyan-400 px-8 py-4 text-cyan-400 hover:bg-cyan-400 hover:text-black">
          Download Firmware
        </button>
      </motion.div>
    </section>
  );
}