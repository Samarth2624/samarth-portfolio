"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "./data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        <h1 className="gradient-text mb-6 text-center text-6xl font-black">
          SYSTEM MODULES
        </h1>

        <p className="mx-auto mb-20 max-w-3xl text-center text-lg leading-8 text-gray-400">
          Embedded systems, automation platforms and AI-powered engineering
          projects.
        </p>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">

    <div
        className="h-full w-full"
        style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
        }}
    />

</div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}