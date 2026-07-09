"use client";

import { certifications } from "./certificationData";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-6"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-5xl font-black text-white">
          Certifications
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item)=>(
            <div
              key={item}
              className="rounded-2xl border border-cyan-500/20 bg-zinc-900/70 p-6 text-center text-cyan-300 transition hover:border-cyan-400 hover:scale-105"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}