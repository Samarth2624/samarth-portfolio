"use client";

import { useState } from "react";

import BootLoader from "@/components/loader/BootLoader";

import ScrollProgress from "@/components/effects/ScrollProgress";

import Navbar from "@/components/navbar/Navbar";

import GridBackground from "@/components/background/GridBackground";

import Scene from "@/components/three/Scene";

import Hero from "@/components/hero/Hero";

import Stats from "@/components/sections/Stats";

import SystemOverview from "@/components/sections/SystemOverview";

import Projects from "@/components/projects/Projects";

import Terminal from "@/components/terminal/Terminal";

import Skills from "@/components/skills/Skills";

import Experience from "@/components/experience/Experience";

import Education from "@/components/education/Education";

import Certifications from "@/components/certifications/Certifications";

import Resume from "@/components/resume/Resume";

import Contact from "@/components/contact/Contact";

import Footer from "@/components/footer/Footer";
import Cursor from "@/components/cursor/Cursor";

export default function Home() {

const [loaded,setLoaded]=useState(false);

return(

<>

{

!loaded?

<BootLoader onComplete={()=>setLoaded(true)}/>

:

<>

<ScrollProgress/>

<GridBackground/>

<Scene/>

<Navbar/>
<Cursor/>

<main className="relative z-10">

<Hero/>

<Stats/>

<SystemOverview/>

<Projects/>

<Terminal/>

<Skills/>

<Experience/>

<Education/>

<Certifications/>

<Resume/>

<Contact/>

<Footer/>

</main>

</>

}

</>

);

}
