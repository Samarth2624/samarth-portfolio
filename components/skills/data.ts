import {
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFastapi,
  SiMysql,
  SiGit,
  SiGithub,
  SiArduino,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";

import { Cpu, Database } from "lucide-react";
export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "SQL", icon: Database, color: "#4DB33D" },
    ],
  },

  {
    title: "Web Development",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "FastAPI", icon: SiFastapi, color: "#00C7B7" },
    ],
  },

  {
    title: "Embedded Systems",
    skills: [
      { name: "ESP32", icon: Cpu, color: "#00D9FF" },
      { name: "Arduino", icon: SiArduino, color: "#00979D" },
      { name: "PLC", icon: Cpu, color: "#9AE6B4" },
      { name: "Automation Studio", icon: Cpu, color: "#FF4D4D" },
    ],
  },

  {
    title: "AI & Data Science",
    skills: [
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "VS Code", icon: Cpu, color: "#007ACC" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
];