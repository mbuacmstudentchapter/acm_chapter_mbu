"use client";

import { motion } from "framer-motion";
import { Sun, Snowflake, Mic, ArrowRight, ShieldCheck, Calendar } from "lucide-react";

interface Opportunity {
  title: string;
  description: string;
  url: string;
  icon: React.ComponentType<{ className?: string; size?: string | number }>;
  iconColor: string; // Tailwind class
  deadline: string;
  isExclusive: boolean;
}

const opportunitiesData: Opportunity[] = [
  {
    title: "ACM India Summer Schools",
    description: "Deep-dive theoretical workshops focusing on core computing topics, algorithms, AI, and systems hosted by top Indian research institutes and laboratories.",
    url: "https://india.acm.org/education/summer-schools",
    icon: Sun,
    iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/25",
    deadline: "July 05, 2026",
    isExclusive: true,
  },
  {
    title: "ACM India Winter Schools",
    description: "High-intensity academic programs designed for advanced undergraduates, focusing on database architectures, cryptography, blockchain, and cloud computing paradigms.",
    url: "https://india.acm.org/education/winter-schools",
    icon: Snowflake,
    iconColor: "text-sky-400 bg-sky-500/10 border-sky-500/25",
    deadline: "November 10, 2026",
    isExclusive: true,
  },
  {
    title: "ACM Distinguished Speaker Program",
    description: "Invited keynote lectures delivering cutting-edge computer science research directly to MBU classrooms from global industry leaders and premier academicians.",
    url: "https://india.acm.org/distinguished-speaker-program",
    icon: Mic,
    iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
    deadline: "Year-Round Program",
    isExclusive: false,
  },
];

export default function Opportunities() {
  return (
    <section id="opportunities" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-navy-light/10">
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-acm-blue/5 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-acm-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4 tracking-tight"
          >
            ACM India <span className="bg-gradient-to-r from-acm-cyan to-acm-blue bg-clip-text text-transparent">Opportunities</span>
          </motion.h2>
          <div className="h-1 bg-gradient-to-r from-acm-cyan to-acm-blue mx-auto rounded-full w-20 mb-6" />
          <p className="font-sans text-sm sm:text-base text-soft max-w-2xl mx-auto leading-relaxed">
            Gain a competitive edge. Tap into premium national computing schools, research fellowships, and global lecture circuits organized by ACM India.
          </p>
        </div>

        {/* Opportunities Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {opportunitiesData.map((opp, idx) => {
            const IconComponent = opp.icon;
            return (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/5 group relative overflow-hidden"
              >
                {/* Highlight line decoration on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-acm-cyan/0 via-transparent to-acm-blue/0 group-hover:from-acm-cyan/5 group-hover:to-acm-blue/5 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Badges */}
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${opp.iconColor}`}>
                      <IconComponent className="w-6 h-6 group-hover:scale-115 transition-transform" />
                    </div>

                    {opp.isExclusive && (
                      <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-acm-cyan px-2.5 py-1 rounded-full bg-acm-cyan/10 border border-acm-cyan/20">
                        <ShieldCheck size={11} />
                        Member Exclusive
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-acm-cyan transition-colors">
                    {opp.title}
                  </h3>
                  <p className="font-sans text-sm text-soft mb-8 leading-relaxed">
                    {opp.description}
                  </p>
                </div>

                <div>
                  {/* Deadline information */}
                  <div className="flex items-center gap-2 mb-6 text-xs text-soft font-semibold bg-white/5 border border-white/5 rounded-xl px-4 py-2.5 w-fit">
                    <Calendar size={13} className="text-acm-cyan" />
                    <span>Deadline:</span>
                    <span className="text-white font-medium">{opp.deadline}</span>
                  </div>

                  {/* Apply Action Link */}
                  <a
                    href={opp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive w-full py-3 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-acm-blue hover:to-acm-cyan hover:border-transparent border border-white/10 text-center font-sans text-xs font-semibold text-white transition-all duration-300 flex items-center justify-center gap-1.5 group/btn"
                  >
                    Apply & Learn More
                    <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
