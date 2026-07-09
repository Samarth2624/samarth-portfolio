"use client";

import type { Project } from "./types";

interface Props {
  project: Project;
}

export default function ProjectMetrics({ project }: Props) {
  return (
    <div className="relative z-10 mb-8 grid grid-cols-2 gap-4">
      {project.metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-xl border border-zinc-700 bg-black/20 p-3"
        >
          <p className="text-xs uppercase tracking-wider text-gray-500">
            {metric.label}
          </p>

          <p className="mt-2 font-semibold text-cyan-300">
            {metric.value}
          </p>
        </div>
      ))}
    </div>
  );
}