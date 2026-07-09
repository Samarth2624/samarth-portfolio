"use client";

import { motion } from "framer-motion";

export default function Contact() {

return(

<section

id="contact"

className="py-32 px-6"

>

<div className="mx-auto max-w-5xl">

<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.8}}

className="text-center"

>

<p className="uppercase tracking-[.4em] text-cyan-400">

CONTACT HQ

</p>

<h2 className="mt-5 text-6xl font-black text-white">

Let's Build Something Amazing

</h2>

</motion.div>

<form

className="mt-16 grid gap-6"

>

<input

placeholder="Name"

className="rounded-xl bg-zinc-900 p-5 outline-none border border-zinc-700 focus:border-cyan-400"

/>

<input

placeholder="Email"

className="rounded-xl bg-zinc-900 p-5 outline-none border border-zinc-700 focus:border-cyan-400"

/>

<textarea

rows={7}

placeholder="Message"

className="rounded-xl bg-zinc-900 p-5 outline-none border border-zinc-700 focus:border-cyan-400"

/>

<button

className="
rounded-xl
bg-cyan-500
text-black
font-bold
py-5
hover:scale-105
transition
"

>

SEND TRANSMISSION

</button>

</form>

</div>

</section>

);

}