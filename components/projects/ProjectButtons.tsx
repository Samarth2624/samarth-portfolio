"use client";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Magnetic from "../ui/Magnetic";

interface Props {
  github: string;
  live?: string;
}

export default function ProjectButtons({
  github,
  live,
}: Props) {
  return (
    <div className="relative z-20 mt-8 flex flex-wrap gap-4">

      <Magnetic>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-cyan-500/30
          bg-cyan-500/10
          px-5
          py-3
          text-cyan-300
          transition-all
          duration-300
          hover:border-cyan-400
          hover:bg-cyan-500
          hover:text-black
          "
        >
          <FaGithub size={18} />
          Source
        </a>

      </Magnetic>

      {live && (

        <Magnetic>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-white/20
            bg-white/5
            px-5
            py-3
            text-white
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
            "
          >
            <ExternalLink size={18} />
            Demo
          </a>

        </Magnetic>

      )}

    </div>
  );
}