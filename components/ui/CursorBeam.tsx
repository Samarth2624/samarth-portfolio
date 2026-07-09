"use client";

import { useEffect, useRef } from "react";

export default function CursorBeam() {
  const glow = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    function move(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    window.addEventListener("mousemove", move);

    function animate() {
      currentX += (mouseX - currentX) * 0.16;
      currentY += (mouseY - currentY) * 0.16;

      if (glow.current) {
        glow.current.style.transform =
          `translate3d(${currentX}px,${currentY}px,0) translate(-50%,-50%)`;
      }

      if (dot.current) {
        dot.current.style.transform =
          `translate3d(${mouseX}px,${mouseY}px,0) translate(-50%,-50%)`;
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        ref={glow}
        className="
        fixed
        pointer-events-none
        z-999
        h-48
        w-48
        rounded-full
        bg-cyan-500/10
        blur-3xl
        will-change-transform
        "
      />

      <div
        ref={dot}
        className="
        fixed
        pointer-events-none
        z-1000
        h-2
        w-2
        rounded-full
        bg-cyan-300
        shadow-[0_0_12px_#00d9ff]
        will-change-transform
        "
      />
    </>
  );
}