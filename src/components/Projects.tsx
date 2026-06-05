"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Filter, Code } from "lucide-react";

// Custom inline SVG for Github icon to bypass missing lucide-react brand icons in older versions
const Github = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  id: string;
  name: string;
  tag: "AI" | "Web" | "Mobile" | "Research";
  description: string;
  techStack: string[];
  contributors: { name: string; avatar: string }[];
  githubUrl: string;
  demoUrl?: string;
  gridSize: "large" | "normal"; // Bento grid classes
}

const projectsData: Project[] = [
  {
    id: "proj-1",
    name: "DevScope AI",
    tag: "Web",
    description: "An intelligent developer analytics dashboard that connects with GitHub to track commit velocity, pull request turnaround times, and automated test suite performance with regression forecasting.",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
    contributors: [
      { name: "Tarun Kumar", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=80&h=80&q=80" },
      { name: "Harish K.", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&h=80&q=80" },
      { name: "Shreya Nair", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    gridSize: "large",
  },
  {
    id: "proj-2",
    name: "Neuromap 3D",
    tag: "AI",
    description: "A real-time WebGL visualization engine that renders CNN and Transformer layers, showing neural activations dynamically during runtime execution.",
    techStack: ["Python", "TensorFlow", "React", "Three.js"],
    contributors: [
      { name: "Preethi Sen", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" },
      { name: "Tarun Kumar", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=80&h=80&q=80" },
    ],
    githubUrl: "https://github.com",
    gridSize: "normal",
  },
  {
    id: "proj-3",
    name: "MBU CampusNav",
    tag: "Mobile",
    description: "Cross-platform mobile application providing indoor navigation, lecture hall booking, and campus telemetry data using BLE beacons.",
    techStack: ["Flutter", "Dart", "Firebase", "Node.js"],
    contributors: [
      { name: "Harish K.", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&h=80&q=80" },
      { name: "Sai Kiran Reddy", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    gridSize: "normal",
  },
  {
    id: "proj-4",
    name: "Solidity Audit Engine",
    tag: "Research",
    description: "An automated static analysis tool that compiles Ethereum smart contracts to inspect for reentrancy, arithmetic overflow, and consensus vulnerability patterns.",
    techStack: ["Solidity", "Rust", "Python", "Docker"],
    contributors: [
      { name: "Sai Kiran Reddy", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80" },
      { name: "Nikhil Chowdary", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=80&h=80&q=80" },
    ],
    githubUrl: "https://github.com",
    gridSize: "normal",
  },
  {
    id: "proj-5",
    name: "Athena PeerLearn",
    tag: "Web",
    description: "A secure, peer-to-peer classroom system designed for MBU students, featuring live collaborative whiteboard sessions, real-time shared compilers, and localized chat systems.",
    techStack: ["Next.js", "WebRTC", "WebSocket", "PostgreSQL"],
    contributors: [
      { name: "Amrutha Varshini", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80" },
      { name: "Tarun Kumar", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=80&h=80&q=80" },
      { name: "Shreya Nair", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    gridSize: "large",
  },
];

// Helper to render high-tech branding SVGs inline
function renderTechIcon(tech: string) {
  switch (tech) {
    case "React":
      return (
        <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="8"/>
          <ellipse cx="50" cy="50" rx="45" ry="16" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(0 50 50)"/>
          <ellipse cx="50" cy="50" rx="45" ry="16" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(60 50 50)"/>
          <ellipse cx="50" cy="50" rx="45" ry="16" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(120 50 50)"/>
        </svg>
      );
    case "TypeScript":
      return (
        <span className="text-[10px] font-bold text-blue-400 font-mono">TS</span>
      );
    case "Python":
      return (
        <svg className="w-3.5 h-3.5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.928 0c-2.62 0-2.457 1.134-2.457 1.134l.006 1.176h2.511v.364H8.472s-1.996-.218-1.996 2.012v1.545h1.228s.023-1.42 1.34-1.42h5.45c1.196 0 1.256 1.026 1.256 1.026v1.942H10.15c-2.316 0-2.227 1.954-2.227 1.954v2.795s-.167 2.073 2.07 2.073h1.365v-1.637s-.06-1.503 1.488-1.503h5.36s1.846.012 1.846-1.854v-3.784c0-2.584-2.186-2.42-2.186-2.42h-1.127V3.535S15.938 0 11.928 0z" />
          <path d="M12.072 24c2.62 0 2.457-1.134 2.457-1.134l-.006-1.176H12.01v-.364h3.518s1.996.218 1.996-2.012v-1.545h-1.228s-.023 1.42-1.34 1.42h-5.45c-1.196 0-1.256-1.026-1.256-1.026v-1.942H13.85c2.316 0 2.227-1.954 2.227-1.954v-2.795s.167-2.073-2.07-2.073H12.64v1.637s.06 1.503-1.488 1.503h-5.36S3.95 12.022 3.95 13.888v3.784c0 2.584 2.186 2.42 2.186 2.42h1.127v1.373S8.062 24 12.072 24z" />
        </svg>
      );
    case "Rust":
      return (
        <span className="text-[10px] font-bold text-orange-400 font-mono">RS</span>
      );
    default:
      return <Code className="w-3.5 h-3.5 text-acm-cyan" />;
  }
}

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "AI" | "Web" | "Mobile" | "Research">("All");

  const filteredProjects = projectsData.filter(
    (proj) => filter === "All" || proj.tag === filter
  );

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-navy-light/10">
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-acm-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-acm-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4 tracking-tight"
          >
            Projects <span className="bg-gradient-to-r from-acm-cyan to-acm-blue bg-clip-text text-transparent">Showcase</span>
          </motion.h2>
          <div className="h-1 bg-gradient-to-r from-acm-cyan to-acm-blue mx-auto rounded-full w-20 mb-6" />
          <p className="font-sans text-sm sm:text-base text-soft max-w-2xl mx-auto leading-relaxed">
            Engineering products that deliver real utility. Check out the open-source software, AI platforms, and research modules engineered by chapter builders.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {(["All", "AI", "Web", "Mobile", "Research"] as const).map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`interactive px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-300 flex items-center gap-1.5 ${
                filter === category
                  ? "bg-gradient-to-r from-acm-blue to-acm-blue/80 text-white border-transparent shadow-glow"
                  : "bg-white/5 border-white/10 text-soft hover:text-white hover:border-white/20"
              }`}
            >
              {category === "All" ? <Filter size={13} /> : null}
              {category}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/5 group relative overflow-hidden ${
                  project.gridSize === "large" ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                {/* Decorative glowing gradient aura on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-acm-cyan/0 via-transparent to-acm-blue/0 group-hover:from-acm-cyan/5 group-hover:to-acm-blue/5 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Category Tag & Top Border indicator */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-acm-cyan px-2.5 py-1 rounded-full bg-acm-cyan/10 border border-acm-cyan/20">
                      {project.tag}
                    </span>
                    <span className="text-soft text-xs font-mono font-medium">0{project.id.slice(-1)}</span>
                  </div>

                  {/* Name + Description */}
                  <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-acm-cyan transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-soft mb-8 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white hover:border-white/20 transition-all"
                      >
                        {renderTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Contributors + Actions */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t border-white/5 pt-6">
                    {/* Contributor Avatar Stack */}
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2.5 overflow-hidden">
                        {project.contributors.map((contrib, idx) => (
                          <div
                            key={idx}
                            className="relative group/avatar"
                          >
                            <img
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-navy object-cover"
                              src={contrib.avatar}
                              alt={contrib.name}
                            />
                            {/* Hover Tooltip */}
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-0.5 rounded bg-black text-[10px] text-white whitespace-nowrap opacity-0 group-hover/avatar:opacity-100 transition-opacity pointer-events-none z-50">
                              {contrib.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      <span className="text-[11px] text-soft font-semibold uppercase tracking-wider">Contributors</span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all"
                      >
                        <Github size={13} />
                        GitHub
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="interactive flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-acm-blue to-acm-blue/80 hover:from-acm-cyan hover:to-acm-blue text-xs font-semibold text-white shadow-glow hover:shadow-glow-strong transition-all"
                        >
                          <ExternalLink size={13} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
