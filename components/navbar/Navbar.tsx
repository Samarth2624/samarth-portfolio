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
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(`#${section.id}`);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-1/2 top-5 z-50 w-[94%] max-w-7xl -translate-x-1/2 rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-cyan-400/20 bg-black/70 backdrop-blur-2xl shadow-[0_0_30px_rgba(0,217,255,.15)]"
            : "border-white/10 bg-black/20 backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}

          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => handleClick(e, "#home")}
            className="gradient-text cursor-pointer text-xl font-black tracking-[6px]"
          >
            ECS
          </motion.a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                whileHover={{ y: -2 }}
                className={`cursor-pointer text-sm uppercase tracking-[2px] transition ${
                  active === item.href
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Resume */}

          <motion.a
            href="/resumes.pdf"
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20 md:flex"
          >
            <Download size={18} />
            <span className="font-semibold">
              Resume
            </span>
          </motion.a>

          {/* Mobile Menu Button */}

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-black/95 backdrop-blur-xl"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer text-3xl font-bold tracking-widest text-white hover:text-cyan-400"
              >
                {item.label}
              </motion.a>
            ))}

            <motion.a
              href="/resumes.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="rounded-full border border-cyan-400 px-8 py-4 text-cyan-400"
            >
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}