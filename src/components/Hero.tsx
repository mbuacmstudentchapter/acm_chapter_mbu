"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, ArrowDown } from "lucide-react";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden mesh-gradient pt-16 pb-24"
    >
      {/* Decorative Radial Lights */}
      <div className="absolute top-[20%] left-[15%] w-72 h-72 rounded-full bg-acm-blue/10 blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[15%] w-96 h-96 rounded-full bg-acm-cyan/10 blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Affiliation Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:border-acm-cyan/30 transition-colors duration-300"
        >
          <span className="w-2 h-2 rounded-full bg-acm-cyan animate-pulse" />
          <span className="text-xs sm:text-sm font-sans tracking-wide text-soft">
            Affiliated with <span className="text-white font-medium">ACM India</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-6"
        >
          <span className="bg-gradient-to-r from-white via-acm-cyan to-acm-blue bg-clip-text text-transparent text-glow">
            Build. Connect.
          </span>
          <br />
          <span className="text-white">Innovate.</span>
        </motion.h1>

        {/* Subtitle & Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-lg sm:text-2xl text-acm-cyan/90 tracking-wide mb-4 font-semibold"
        >
          ACM Student Chapter — Mohan Babu University
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-sm sm:text-base text-soft max-w-2xl mb-10 leading-relaxed"
        >
          We are the heartbeat of MBU&apos;s computing ecosystem. Part of the global ACM community, 
          empowering aspiring computer scientists and engineers through high-impact workshops, 
          tech challenges, and collaborative coding initiatives.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center mb-20"
        >
          <a
            href="#join"
            className="interactive w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-acm-blue to-acm-blue/80 hover:from-acm-cyan hover:to-acm-blue text-white font-sans font-semibold text-base shadow-glow hover:shadow-glow-strong hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Join ACM Chapter
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#events"
            className="interactive w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-sans font-semibold text-base hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2"
          >
            Explore Events
            <Calendar size={18} />
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-4xl glass-card rounded-2xl py-6 px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative overflow-hidden"
        >
          {/* Subtle line decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-acm-blue/5 via-transparent to-acm-cyan/5 pointer-events-none" />
          
          <div className="flex flex-col items-center justify-center border-r border-white/5 last:border-0">
            <span className="font-heading text-3xl sm:text-4xl font-bold text-white mb-1 tracking-tight">
              <CountUp end={120} suffix="+" />
            </span>
            <span className="font-sans text-xs sm:text-sm text-soft uppercase tracking-wider">Members</span>
          </div>

          <div className="flex flex-col items-center justify-center md:border-r border-white/5 last:border-0">
            <span className="font-heading text-3xl sm:text-4xl font-bold text-acm-cyan mb-1 tracking-tight">
              <CountUp end={30} suffix="+" />
            </span>
            <span className="font-sans text-xs sm:text-sm text-soft uppercase tracking-wider">Events</span>
          </div>

          <div className="flex flex-col items-center justify-center border-r border-white/5 last:border-0">
            <span className="font-heading text-3xl sm:text-4xl font-bold text-white mb-1 tracking-tight">
              <CountUp end={15} suffix="+" />
            </span>
            <span className="font-sans text-xs sm:text-sm text-soft uppercase tracking-wider">Workshops</span>
          </div>

          <div className="flex flex-col items-center justify-center last:border-0">
            <span className="font-heading text-3xl sm:text-4xl font-bold text-acm-cyan mb-1 tracking-tight">
              <CountUp end={10} suffix="+" />
            </span>
            <span className="font-sans text-xs sm:text-sm text-soft uppercase tracking-wider">Projects Built</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 z-10 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="font-sans text-xs text-soft tracking-widest uppercase">Scroll Down</span>
        <ArrowDown size={14} className="text-acm-cyan" />
      </motion.div>
    </section>
  );
}
