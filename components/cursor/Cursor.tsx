"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        animate={{
          x: mouse.x - 4,
          y: mouse.y - 4,
        }}
        transition={{
          stiffness: 700,
          damping: 35,
          type: "spring",
        }}
        className="pointer-events-none fixed z-9999 h-2 w-2 rounded-full bg-cyan-400"
      />

      <motion.div
        animate={{
          x: mouse.x - 20,
          y: mouse.y - 20,
        }}
        transition={{
          stiffness: 300,
          damping: 20,
          type: "spring",
        }}
        className="pointer-events-none fixed z-9998 h-10 w-10 rounded-full border border-cyan-400/60 backdrop-blur-sm"
      />
    </>
  );
}