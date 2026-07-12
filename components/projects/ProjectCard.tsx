"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import type { Project } from "./types";
import { ProjectColors } from "./types";

import ProjectHeader from "./ProjectHeader";
import ProjectMetrics from "./ProjectMetrics";
import ProjectButtons from "./ProjectButtons";
import ProjectBackground from "./ProjectBackground";

import Spotlight from "../ui/Spotlight";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const colors = ProjectColors[project.type];

  /* -------------------------------- */
  /* Motion Values                    */
  /* -------------------------------- */

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 220,
    damping: 20,
  });

  const springY = useSpring(rotateY, {
    stiffness: 220,
    damping: 20,
  });

  const glowX = useSpring(mouseX, {
    stiffness: 350,
    damping: 35,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 350,
    damping: 35,
  });

  const background = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(
      220px circle at ${x}px ${y}px,
      ${colors.glow},
      transparent 70%
    )`
  );

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    rotateY.set(((x - rect.width / 2) / rect.width) * 8);

    rotateX.set(-((y - rect.height / 2) / rect.height) * 8);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        bg-linear-to-br
        from-zinc-900/95
        via-zinc-900/80
        to-black
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        "
      >
        {/* Dynamic Border */}

        <div
          className={`absolute inset-0 rounded-3xl ${colors.border}`}
        />

        {/* Cursor Glow */}

        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background,
          }}
        />

        {/* Glass Reflection */}

        <motion.div
          animate={{
            x: ["-120%", "220%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "linear",
          }}
          className="
          absolute
          top-0
          left-0
          h-full
          w-40
          rotate-12
          bg-linear-to-r
          from-transparent
          via-white/5
          to-transparent
          "
        />

        {/* PCB */}

        <ProjectBackground project={project} />

        {/* Spotlight */}

        <Spotlight />

        {/* Floating LEDs */}

        <div className="absolute right-6 bottom-6 z-30 flex gap-2">
          <div
            className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"
            style={{
              boxShadow: "0 0 12px #22c55e",
            }}
          />

          <div
            className="h-2.5 w-2.5 rounded-full animate-pulse"
            style={{
              background: colors.primary,
              boxShadow: `0 0 12px ${colors.primary}`,
            }}
          />

          <div
            className="h-2.5 w-2.5 rounded-full bg-orange-400 animate-pulse"
            style={{
              boxShadow: "0 0 12px #fb923c",
            }}
          />

        </div>

        {/* Content */}

        <div className="relative z-20">

          <ProjectHeader project={project} />

          <ProjectMetrics project={project} />
                    <p className="mt-6 leading-7 text-gray-400">
            {project.description}
          </p>

          {/* Tech Stack */}

          <div className="mt-8 flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                transition={{
                  duration: 0.2,
                }}
                className={`
                  rounded-xl
                  border
                  px-3
                  py-1.5
                  text-sm
                  font-medium
                  backdrop-blur-md
                  transition-all
                  duration-300
                  ${
                    project.type === "embedded"
                      ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500 hover:text-black"
                      : project.type === "automation"
                      ? "border-orange-500/30 bg-orange-500/10 text-orange-300 hover:bg-orange-500 hover:text-black"
                      : "border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500 hover:text-white"
                  }
                `}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Buttons */}

          <ProjectButtons
            github={project.github}
            live={project.live}
          />
        </div>

        {/* Bottom Glow */}

        <motion.div
          initial={{
            width: 0,
          }}
          whileHover={{
            width: "100%",
          }}
          transition={{
            duration: 0.4,
          }}
          className="absolute bottom-0 left-0 h-0.5"
          style={{
            background: colors.primary,
            boxShadow: `0 0 20px ${colors.primary}`,
          }}
        />

        {/* Outer Glow */}

        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          initial={{
            opacity: 0,
          }}
          whileHover={{
            opacity: 1,
          }}
          transition={{
            duration: 0.35,
          }}
          style={{
            boxShadow: `0 0 70px ${colors.glow}`,
          }}
        />

        {/* Corner Accent */}

        <div
          className="absolute top-0 left-0 h-20 w-20 rounded-br-[60px] opacity-20"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}, transparent)`,
          }}
        />

        {/* Floating Border Highlight */}

        <motion.div
          className="absolute inset-0 rounded-3xl"
          animate={{
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          style={{
            border: `1px solid ${colors.primary}`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}