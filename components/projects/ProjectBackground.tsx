"use client";

import { motion } from "framer-motion";
import { Project, ProjectColors } from "./types";

interface Props{
project:Project;
}

export default function ProjectBackground({project}:Props){

const color=ProjectColors[project.type].primary;

return(

<div className="absolute inset-0 overflow-hidden rounded-3xl">

{/* PCB */}

<svg
viewBox="0 0 500 500"
className="absolute inset-0 h-full w-full opacity-15"
>

<motion.path

d="M40 80H180V190H320"

stroke={color}

strokeWidth="2"

fill="none"

initial={{pathLength:0}}

whileInView={{pathLength:1}}

transition={{duration:2}}

 />

<motion.path

d="M430 150H260V330"

stroke={color}

strokeWidth="2"

fill="none"

initial={{pathLength:0}}

whileInView={{pathLength:1}}

transition={{duration:2.6}}

 />

<motion.path

d="M70 390H250V250H420"

stroke={color}

strokeWidth="2"

fill="none"

initial={{pathLength:0}}

whileInView={{pathLength:1}}

transition={{duration:3}}

 />

{/* Electricity */}

<motion.circle

cx="40"

cy="80"

r="4"

fill={color}

animate={{

cx:[40,180,320],

cy:[80,190,190]

}}

transition={{

repeat:Infinity,

duration:3,

ease:"linear"

}}

/>

<motion.circle

cx="430"

cy="150"

r="4"

fill={color}

animate={{

cx:[430,260],

cy:[150,330]

}}

transition={{

repeat:Infinity,

duration:2.5,

ease:"linear"

}}

/>

</svg>

{/* Scan */}

<motion.div

animate={{

x:["-120%","220%"]

}}

transition={{

repeat:Infinity,

duration:5,

ease:"linear"

}}

className="absolute inset-y-0 w-32 bg-linear-to-r from-transparent via-white/10 to-transparent blur-xl"

/>

</div>

);

}