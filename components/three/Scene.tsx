"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Particles from "./Particles";
import MouseLight from "./MouseLight";

import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-30">

      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>

        <ambientLight intensity={0.35} />

        <MouseLight />

        <Particles />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.08}
        />

        <EffectComposer>
          <Bloom
            intensity={1}
            luminanceThreshold={0.2}
            mipmapBlur
          />
        </EffectComposer>

      </Canvas>

    </div>
  );
}