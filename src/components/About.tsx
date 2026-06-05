"use client";

import { motion as m } from "framer-motion";
import { Globe, Compass, GraduationCap, ArrowRight } from "lucide-react";

const aboutCards = [
  {
    title: "Global ACM",
    link: "https://www.acm.org",
    icon: Globe,
    subtitle: "Association for Computing Machinery",
    description: "The world's largest educational and scientific computing society, delivering resources that advance computing as a science and a profession. ACM provides the premier Digital Library and serves its members and the computing profession with leading-edge publications, conferences, and career resources.",
  },
  {
    title: "ACM India",
    link: "https://india.acm.org",
    icon: Compass,
    subtitle: "Empowering Computing in India",
    description: "ACM India focuses on promoting computing research, education, and development across the nation. It facilitates national-level summer and winter schools, ACM distinguished lecture series, research symposiums, and collaborative networks for student developers and academic professionals.",
  },
  {
    title: "Our Chapter (MBU)",
    link: "#join",
    icon: GraduationCap,
    subtitle: "ACM Mohan Babu University Chapter",
    description: "Fostering an ecosystem of innovation, technical excellence, and scientific research at MBU. We prepare students for top-tier opportunities in software engineering, AI/ML, competitive programming, and research through workshops, hackathons, open source contributions, and peer-to-peer mentorship.",
  },
];

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  } as const;

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-navy-dark">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-acm-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4 tracking-tight"
          >
            About <span className="bg-gradient-to-r from-acm-cyan to-acm-blue bg-clip-text text-transparent">ACM</span>
          </m.h2>
          <m.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-acm-cyan to-acm-blue mx-auto rounded-full mb-6"
          />
          <m.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-sm sm:text-base text-soft max-w-2xl mx-auto leading-relaxed"
          >
            Connecting the best minds in computing. From global scientific advancements 
            to localized student initiatives at Mohan Babu University.
          </m.p>
        </div>

        {/* 3-Column Grid */}
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {aboutCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <m.div
                key={card.title}
                variants={cardVariants}
                className="glass-card rounded-2xl p-8 flex flex-col justify-between h-full group relative overflow-hidden"
              >
                {/* Glowing border hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-acm-cyan/0 via-transparent to-acm-blue/0 group-hover:from-acm-cyan/10 group-hover:to-acm-blue/10 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-acm-cyan/30 group-hover:bg-acm-cyan/5 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-acm-cyan group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-2xl font-bold text-white mb-1 group-hover:text-acm-cyan transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs text-soft font-medium tracking-wide uppercase mb-4">
                    {card.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm text-soft leading-relaxed mb-8">
                    {card.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <div>
                  <a
                    href={card.link}
                    target={card.link.startsWith("http") ? "_blank" : "_self"}
                    rel={card.link.startsWith("http") ? "noopener noreferrer" : ""}
                    className="interactive inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-acm-cyan group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
