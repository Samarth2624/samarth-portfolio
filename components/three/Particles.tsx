"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Particles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const array = new Float32Array(5000 * 3);

    for (let i = 0; i < 8000; i++) {
      array[i * 3] = (Math.random() - 0.5) * 65;
      array[i * 3 + 1] = (Math.random() - 0.5) * 65;
      array[i * 3 + 2] = (Math.random() - 0.5) * 65;
    }

    return array;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y = state.clock.elapsedTime * 0.008;
    ref.current.rotation.x = state.clock.elapsedTime * 0.003;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.018}
        color="#00d9ff"
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}