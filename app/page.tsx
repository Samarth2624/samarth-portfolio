"use client";

import { useState } from "react";

import Background from "@/components/background/Background";
import Stars from "@/components/background/Stars";
import Scene from "@/components/three/Scene";

import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

import Cursor from "@/components/cursor/Cursor";
import ScrollProgress from "@/components/effects/ScrollProgress";

import BootLoader from "@/components/loader/BootLoader";
import SystemOverview from "@/components/sections/SystemOverview";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/projects/Projects";
import CursorBeam from "@/components/ui/CursorBeam";
import GridBackground from "@/components/background/GridBackground";
import Terminal from "@/components/terminal/Terminal";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Education from "@/components/education/Education";
import Certifications from "@/components/certifications/Certifications";
import Resume from "@/components/resume/Resume";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
<>
    <CursorBeam />
    <GridBackground />

    <Navbar />

    <Background />

    <Hero />

    <Projects />
    <Terminal />
    <Skills />
    <Experience />
   <Education />
   <Certifications />
   <Resume />
   <Contact />
   <Footer />
</>

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded ? (
        <BootLoader onComplete={() => setLoaded(true)} />
      ) : (
        <>
          <ScrollProgress />

          <Background />

          <Scene />

          <Stars />

          <Cursor />

          <Navbar />

         <main className="relative z-10">
  <Hero />

<Stats />

<SystemOverview />

<Projects />
</main>
        </>
      )}
    </>
  );
}