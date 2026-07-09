"use client";

import { motion } from "framer-motion";

interface Props {
  value: number;
  color: string;
}

export default function CircularProgress({
  value,
  color,
}: Props) {
  const radius = 52;

  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (value / 100) * circumference;

  return (
    <div className="relative flex h-36 w-36 items-center justify-center">

      <svg
        className="-rotate-90"
        width="130"
        height="130"
      >
        <circle
          cx="65"
          cy="65"
          r={radius}
          stroke="#1e293b"
          strokeWidth="10"
          fill="none"
        />

        <motion.circle
          cx="65"
          cy="65"
          r={radius}
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference,
          }}
          whileInView={{
            strokeDashoffset: offset,
          }}
          transition={{
            duration: 1.5,
          }}
        />
      </svg>

      <span
        className="absolute text-2xl font-bold"
        style={{
          color,
        }}
      >
        {value}%
      </span>

    </div>
  );
}