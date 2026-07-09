"use client";

export default function GridBackground() {
  return (
    <div
      className="
      fixed
      inset-0
      pointer-events-none
      opacity-[0.03]
      -z-10
      "
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
        backgroundSize: "45px 45px",
      }}
    />
  );
}