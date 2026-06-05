"use client";

import { motion } from "framer-motion";
import { Globe, Mail } from "lucide-react";

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

interface Member {
  name: string;
  role: string;
  deptBadge: string;
  deptColor: string; // Tailwind bg class
  avatar: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
  email?: string;
}

const facultyCoordinators: Member[] = [
  {
    name: "Dr. S. Murali Krishna",
    role: "Faculty Advisor & Professor",
    deptBadge: "Faculty Advisory",
    deptColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
    linkedin: "https://linkedin.com",
    email: "muralikrishna.s@mbu.edu",
  },
  {
    name: "Dr. P. Radhika",
    role: "Faculty Co-Advisor & Assoc. Professor",
    deptBadge: "Faculty Advisory",
    deptColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80",
    linkedin: "https://linkedin.com",
    email: "radhika.p@mbu.edu",
  },
];

const executiveBoard: Member[] = [
  {
    name: "Sai Kiran Reddy",
    role: "Chapter Chair",
    deptBadge: "Executive",
    deptColor: "bg-red-500/20 text-red-300 border-red-500/30",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    portfolio: "https://example.com",
  },
  {
    name: "Amrutha Varshini",
    role: "Chapter Vice-Chair",
    deptBadge: "Executive",
    deptColor: "bg-red-500/20 text-red-300 border-red-500/30",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    portfolio: "https://example.com",
  },
];

const leads: Member[] = [
  {
    name: "Tarun Kumar",
    role: "Technical Lead",
    deptBadge: "Dev & Cloud",
    deptColor: "bg-acm-blue/20 text-white border-acm-blue/30",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Nikhil Chowdary",
    role: "Competitive Programming Lead",
    deptBadge: "Algorithms",
    deptColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&h=300&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Preethi Sen",
    role: "AI & ML Research Lead",
    deptBadge: "Data Science",
    deptColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Megha Shridhar",
    role: "PR & Relations Lead",
    deptBadge: "Public Relations",
    deptColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80",
    linkedin: "https://linkedin.com",
  },
];

const coreContributors: Member[] = [
  {
    name: "Harish K.",
    role: "Core Web Developer",
    deptBadge: "Technical",
    deptColor: "bg-acm-blue/20 text-white border-acm-blue/30",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&h=300&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Shreya Nair",
    role: "UI/UX Designer",
    deptBadge: "Design",
    deptColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80",
    linkedin: "https://linkedin.com",
    portfolio: "https://figma.com",
  },
  {
    name: "Rohit Sharma",
    role: "Technical Writer & Blogger",
    deptBadge: "Content",
    deptColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&h=300&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];

export default function Team() {
  // Pure React Custom Tilt Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    const rotateX = -(y / (box.height / 2)) * 8; // Max 8 degrees tilt
    const rotateY = (x / (box.width / 2)) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <section id="team" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-navy-dark">
      {/* Background glow grids */}
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-acm-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[450px] h-[450px] rounded-full bg-acm-cyan/5 blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4 tracking-tight"
          >
            Meet the <span className="bg-gradient-to-r from-acm-cyan to-acm-blue bg-clip-text text-transparent">Team</span>
          </motion.h2>
          <div className="h-1 bg-gradient-to-r from-acm-cyan to-acm-blue mx-auto rounded-full w-20 mb-6" />
          <p className="font-sans text-sm sm:text-base text-soft max-w-2xl mx-auto leading-relaxed">
            The visionary faculty and dedicated student developers, builders, and organizers pioneering the technology hub at MBU.
          </p>
        </div>

        {/* SECTION 4.1: Faculty Advisors */}
        <div className="mb-20">
          <h3 className="font-heading text-lg font-semibold tracking-wider text-center text-acm-cyan uppercase mb-10">
            Faculty Advisors
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {facultyCoordinators.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="glass-card rounded-2xl p-6 w-full max-w-sm flex items-center gap-6 border border-white/5 transition-all duration-300"
              >
                <div className="relative group">
                  <div className="absolute inset-0 rounded-full bg-acm-cyan/20 blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-white/10 group-hover:border-acm-cyan transition-colors duration-300"
                  />
                </div>
                <div>
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border mb-2 ${member.deptColor}`}>
                    {member.deptBadge}
                  </span>
                  <h4 className="font-heading text-lg font-bold text-white leading-tight">{member.name}</h4>
                  <p className="font-sans text-xs text-soft mb-3">{member.role}</p>
                  
                  <div className="flex gap-3">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="interactive text-soft hover:text-white transition-colors">
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="interactive text-soft hover:text-white transition-colors">
                        <Mail size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 4.2: Chair + Vice Chair Spotlight */}
        <div className="mb-20">
          <h3 className="font-heading text-lg font-semibold tracking-wider text-center text-acm-cyan uppercase mb-10">
            Executive Leadership
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            {executiveBoard.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="glass-card rounded-2xl p-8 w-full max-w-md border border-white/10 flex flex-col items-center text-center relative overflow-hidden group shadow-glow"
              >
                {/* Glowing Aura */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-acm-cyan to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="relative mb-6">
                  {/* Glowing ring */}
                  <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-acm-cyan to-acm-blue opacity-0 group-hover:opacity-100 transition-opacity blur-[2px]" />
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white/5 relative z-10"
                  />
                </div>

                <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border mb-3 ${member.deptColor}`}>
                  {member.deptBadge}
                </span>

                <h4 className="font-heading text-2xl font-bold text-white mb-1 group-hover:text-acm-cyan transition-colors">{member.name}</h4>
                <p className="font-sans text-sm text-soft mb-6">{member.role}</p>

                <div className="flex gap-4">
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="interactive text-soft hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="interactive text-soft hover:text-white transition-colors">
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.portfolio && (
                    <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="interactive text-soft hover:text-white transition-colors">
                      <Globe size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 4.3: Leads Grid */}
        <div className="mb-20">
          <h3 className="font-heading text-lg font-semibold tracking-wider text-center text-acm-cyan uppercase mb-10">
            Department Leads
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leads.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col items-center text-center group"
              >
                <div className="relative mb-5">
                  <div className="absolute inset-[-3px] rounded-full bg-acm-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity blur-[1px]" />
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-white/5 relative z-10"
                  />
                </div>

                <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border mb-2.5 ${member.deptColor}`}>
                  {member.deptBadge}
                </span>

                <h4 className="font-heading text-lg font-bold text-white mb-1 group-hover:text-acm-cyan transition-colors">{member.name}</h4>
                <p className="font-sans text-xs text-soft mb-5">{member.role}</p>

                <div className="flex gap-3 mt-auto">
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="interactive text-soft hover:text-white transition-colors">
                      <Github size={16} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="interactive text-soft hover:text-white transition-colors">
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 4.4: Core Contributors Row */}
        <div>
          <h3 className="font-heading text-lg font-semibold tracking-wider text-center text-acm-cyan uppercase mb-10">
            Core Contributors
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {coreContributors.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="glass-card rounded-2xl p-5 w-full max-w-xs border border-white/5 flex items-center gap-4 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-acm-cyan/20 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-acm-cyan relative z-10 transition-colors"
                  />
                </div>
                <div>
                  <span className={`inline-block text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded border mb-1 ${member.deptColor}`}>
                    {member.deptBadge}
                  </span>
                  <h4 className="font-heading text-base font-bold text-white group-hover:text-acm-cyan transition-colors">{member.name}</h4>
                  <p className="font-sans text-[11px] text-soft mb-2">{member.role}</p>

                  <div className="flex gap-2.5">
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="interactive text-soft hover:text-white transition-colors">
                        <Github size={14} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="interactive text-soft hover:text-white transition-colors">
                        <Linkedin size={14} />
                      </a>
                    )}
                    {member.portfolio && (
                      <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="interactive text-soft hover:text-white transition-colors">
                        <Globe size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
