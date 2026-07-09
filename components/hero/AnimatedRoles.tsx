"use client";

import { Typewriter } from "react-simple-typewriter";

export default function AnimatedRoles() {
  return (
    <div className="mt-6 text-center text-2xl font-medium text-cyan-400 md:text-4xl">
      <Typewriter
        words={[
          "Embedded Systems Engineer",
          "IoT Developer",
          "PLC Programmer",
          "Automation Engineer",
          "AI Enthusiast",
        ]}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={40}
        delaySpeed={1800}
      />
    </div>
  );
}