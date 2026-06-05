"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AcmLogo from "./AcmLogo";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "#team" },
  { name: "Projects", href: "#projects" },
  { name: "Resources", href: "#resources" },
  { name: "Opportunities", href: "#opportunities" },
  { name: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Sync theme on mount
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section on scroll
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section occupies the viewport center
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-navy-dark/70 backdrop-blur-md border-b border-white/10"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(0,114,206,0.25)] group-hover:drop-shadow-[0_0_12px_rgba(0,114,206,0.45)] group-hover:scale-105 transition-all duration-300">
                <AcmLogo className="w-10 h-10" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white tracking-wide text-sm sm:text-base leading-none group-hover:text-acm-cyan transition-colors">
                  ACM MBU
                </span>
                <span className="text-[9px] text-soft font-sans tracking-wider uppercase leading-none mt-1">
                  Student Chapter
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`font-sans text-sm tracking-wide transition-colors relative py-1 ${
                      activeSection === link.href.substring(1)
                        ? "text-acm-cyan font-medium"
                        : "text-soft hover:text-white"
                    }`}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-acm-cyan rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                ))}
              </div>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="interactive p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <a
                href="#join"
                className="interactive px-5 py-2.5 rounded-full bg-gradient-to-r from-acm-blue to-acm-blue/80 hover:from-acm-cyan hover:to-acm-blue text-white font-sans text-sm font-semibold shadow-glow hover:shadow-glow-strong transition-all duration-300 flex items-center gap-1.5 hover:translate-x-0.5"
              >
                Join ACM
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center gap-2.5">
              <button
                onClick={toggleTheme}
                className="interactive p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-acm-cyan transition-colors p-1"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Mobile Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="absolute right-0 top-0 bottom-0 w-72 max-w-full bg-navy-light/95 border-l border-white/10 p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-8 mt-16">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-heading text-lg tracking-wide py-2 border-b border-white/5 transition-colors ${
                        activeSection === link.href.substring(1)
                          ? "text-acm-cyan"
                          : "text-soft hover:text-white"
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mb-8 flex flex-col gap-4">
                <a
                  href="#join"
                  onClick={() => setIsOpen(false)}
                  className="w-full justify-center px-5 py-3 rounded-full bg-gradient-to-r from-acm-blue to-acm-blue/80 text-white font-sans text-center font-semibold shadow-glow flex items-center gap-2"
                >
                  Join ACM
                  <ArrowRight size={16} />
                </a>
                <span className="text-[11px] text-center text-soft">
                  Mohan Babu University Chapter
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
