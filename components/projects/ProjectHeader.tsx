"use client";

import { Cpu, Factory, BrainCircuit, Webhook } from "lucide-react";
import type { Project } from "./types";

interface Props {
  project: Project;
}

export default function ProjectHeader({ project }: Props) {
  const getIcon = () => {
    switch (project.type) {
      case "embedded":
        return <Cpu size={22} className="text-cyan-400" />;

      case "automation":
        return <Factory size={22} className="text-orange-400" />;

      case "ai":
        return <BrainCircuit size={22} className="text-purple-400" />;
      
        case "web":
        return <Webhook size={22} className="text-red-400" />;
    }
  };

  return (
    <div className="relative z-10 mb-8">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">
          {getIcon()}

          <div>
            <h2 className="text-2xl font-bold text-white">
              {project.title}
            </h2>

            <p className="text-sm text-gray-400">
              {project.category}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-green-500/30 px-3 py-1">
          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

          <span className="text-xs font-semibold text-green-400">
            {project.status}
          </span>
        </div>

      </div>
    </div>
  );
}