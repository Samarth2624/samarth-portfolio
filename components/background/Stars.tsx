"use client";

export default function Stars() {

  const stars = [...Array(120)];

  return (
    <div className="fixed inset-0 -z-40">

      {stars.map((_, i) => (

        <span
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
            animationDuration: `${2 + Math.random() * 5}s`,
          }}
        />

      ))}

    </div>
  );
}