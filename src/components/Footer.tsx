"use client";

import { ArrowUp } from "lucide-react";
import AcmLogo from "./AcmLogo";

// Custom inline SVG icons for social platforms to bypass missing lucide-react brand icons in older versions
const Github = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-navy-dark pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute bottom-0 right-[15%] w-72 h-72 rounded-full bg-acm-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <a href="#home" className="flex items-center gap-2.5 group w-fit">
              <div className="w-10 h-10 flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(0,114,206,0.25)] group-hover:drop-shadow-[0_0_12px_rgba(0,114,206,0.45)] group-hover:scale-105 transition-all duration-300">
                <AcmLogo className="w-10 h-10" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white tracking-wide text-base leading-none group-hover:text-acm-cyan transition-colors">
                  ACM MBU
                </span>
                <span className="text-[9px] text-soft font-sans tracking-wider uppercase leading-none mt-1">
                  Student Chapter
                </span>
              </div>
            </a>
            <p className="font-sans text-sm text-soft leading-relaxed max-w-sm">
              The premier computing society of Mohan Babu University. Bridging student builders 
              with industry realities and leading-edge computational advancements.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="interactive w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-soft hover:text-white hover:border-white/20 transition-all">
                <Linkedin size={16} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="interactive w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-soft hover:text-white hover:border-white/20 transition-all">
                <Github size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="interactive w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-soft hover:text-white hover:border-white/20 transition-all">
                <Instagram size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="interactive w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-soft hover:text-white hover:border-white/20 transition-all">
                {/* Custom X SVG */}
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">Chapter Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-2">
                <a href="#home" className="font-sans text-sm text-soft hover:text-acm-cyan transition-colors">Home</a>
                <a href="#about" className="font-sans text-sm text-soft hover:text-acm-cyan transition-colors">About</a>
                <a href="#events" className="font-sans text-sm text-soft hover:text-acm-cyan transition-colors">Events</a>
                <a href="#team" className="font-sans text-sm text-soft hover:text-acm-cyan transition-colors">Team</a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="#projects" className="font-sans text-sm text-soft hover:text-acm-cyan transition-colors">Projects</a>
                <a href="#resources" className="font-sans text-sm text-soft hover:text-acm-cyan transition-colors">Resources</a>
                <a href="#opportunities" className="font-sans text-sm text-soft hover:text-acm-cyan transition-colors">Opportunities</a>
                <a href="#blog" className="font-sans text-sm text-soft hover:text-acm-cyan transition-colors">Blog</a>
              </div>
            </div>
          </div>

          {/* Official ACM Links Col */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">Official Relations</h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://www.acm.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-soft hover:text-acm-cyan transition-colors flex items-center justify-between"
              >
                <span>ACM Global HQ</span>
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded">acm.org</span>
              </a>
              <a
                href="https://india.acm.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-soft hover:text-acm-cyan transition-colors flex items-center justify-between"
              >
                <span>ACM India</span>
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded">india.acm.org</span>
              </a>
              <a
                href="https://www.acm.org/chapters/student-chapters"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-soft hover:text-acm-cyan transition-colors flex items-center justify-between"
              >
                <span>Student Chapters Hub</span>
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded">acm.org/chapters</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Sub-bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="font-sans text-xs text-soft">
              Affiliated with ACM India | Part of the Global ACM Community
            </span>
            <span className="font-sans text-[11px] text-soft">
              &copy; {new Date().getFullYear()} ACM MBU Student Chapter. All rights reserved.
            </span>
          </div>

          {/* Scroll back to top */}
          <button
            onClick={scrollToTop}
            className="interactive px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white flex items-center gap-1.5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Back to Top
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
