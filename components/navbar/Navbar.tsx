"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  {
    label: "System",
    href: "#about",
  },
  {
    label: "Capabilities",
    href: "#skills",
  },
  {
    label: "Modules",
    href: "#projects",
  },
  {
    label: "Logs",
    href: "#experience",
  },
  {
    label: "Transmission",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed left-1/2 top-5 z-50 w-[94%] max-w-7xl -translate-x-1/2 rounded-full border transition-all duration-500
        ${
          scrolled
            ? "border-cyan-400/20 bg-black/70 backdrop-blur-2xl shadow-[0_0_35px_rgba(0,217,255,.15)]"
            : "border-white/10 bg-white/5 backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-4">

          {/* Logo */}

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="gradient-text text-xl font-black tracking-[6px]"
          >
            ECS
          </motion.a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{
                  y: -2,
                }}
                className="text-sm uppercase tracking-[2px] text-gray-300 transition hover:text-cyan-400"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Resume */}

          <motion.a
            href="/resume.pdf"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="glass glow hidden items-center gap-2 rounded-full px-6 py-3 md:flex"
          >
            <Download size={18} />

            <span className="font-semibold">
              Firmware
            </span>
          </motion.a>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-black"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{
                  scale: 1.08,
                }}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-bold tracking-widest text-white"
              >
                {item.label}
              </motion.a>
            ))}

            <motion.a
              href="/resume.pdf"
              className="rounded-full border border-cyan-400 px-8 py-4 text-cyan-400"
            >
              Download Firmware
            </motion.a>
          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}