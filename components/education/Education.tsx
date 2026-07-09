"use client";

import { education } from "./educationData";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6"
    >
      <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-700 bg-zinc-900/70 p-10">

        <p className="uppercase tracking-[.4em] text-cyan-400">
          EDUCATION
        </p>

        {education.map((item)=>(
          <div
            key={item.degree}
            className="mt-8"
          >
            <h2 className="text-4xl font-bold text-white">
              {item.degree}
            </h2>

            <p className="mt-3 text-xl text-cyan-300">
              {item.branch}
            </p>

            <p className="mt-2 text-gray-400">
              {item.college}
            </p>

            <p className="mt-1 text-gray-500">
              {item.university}
            </p>

            <p className="mt-4 text-gray-300">
              {item.duration}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}