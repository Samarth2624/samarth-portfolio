"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title:"AI Fluency: Frameworks & Foumdations",
    issuer:"ANTHROPIC",
    year: "2026",
    file:"/certificates/ai-fluency.pdf"
  },
  {
    title:"Claude 101",
    issuer:"ANTHROPIC",
    year: "2026",
    file:"/certificates/claude-101.pdf"
  },
  {
    title: "ASDC xEV Shiksha",
    issuer: "Automotive Skills Development Council",
    year: "2025",
    file: "/certificates/asdc-xev-shiksha.pdf",
  },
  {
    title: "EV Charging Installation to Activation",
    issuer: "ASDC",
    year: "2025",
    file: "/certificates/ev-charging.pdf",
  },
  {
    title: "Level-1 Charger Certification",
    issuer: "ASDC",
    year: "2025",
    file: "/certificates/level1-charger.pdf",
  },
  {
    title: "ShadowFox Data Science Internship",
    issuer: "ShadowFox",
    year: "2024",
    file: "/certificates/shadowfox.pdf",
  },
  {
    title: "B&R Industrial Automation Internship",
    issuer: "B&R Industrial Automation",
    year: "2025",
    file: "/certificates/br-automation.pdf",
  },
  {
    title:"EV Training Program",
    issuer:"GTT FOUNDATION",
    file:"/certificates/ev-training.pdf"
}
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <p className="mb-3 uppercase tracking-[8px] text-cyan-400">
          Credentials
        </p>

        <h2 className="text-5xl font-black text-white">
          Certifications
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-400">
          Professional certifications earned in Embedded Systems,
          Electric Vehicle Technologies, Industrial Automation,
          and Data Science.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {certificates.map((certificate, index) => (
          <motion.a
            key={certificate.title}
            href={certificate.file}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:shadow-[0_0_35px_rgba(0,217,255,.18)]
            "
          >
            {/* Icon */}

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
              <Award
                size={34}
                className="text-cyan-400 transition group-hover:rotate-6"
              />
            </div>

            {/* Title */}

            <h3 className="mb-3 text-xl font-bold text-white">
              {certificate.title}
            </h3>

            {/* Issuer */}

            <p className="text-gray-400">
              {certificate.issuer}
            </p>

            {/* Year */}

            <p className="mt-2 text-sm text-cyan-400">
              {certificate.year}
            </p>

            {/* Divider */}

            <div className="my-6 h-px bg-white/10" />

            {/* Button */}

            <div className="flex items-center justify-between">
              <span className="font-medium text-cyan-400">
                View Certificate
              </span>

              <ExternalLink
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}