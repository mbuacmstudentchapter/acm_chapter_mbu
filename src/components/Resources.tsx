"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Binary, Cpu, Globe, Briefcase, Trophy, GitBranch, ArrowRight, X, ExternalLink, Bookmark } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: string | number }>;
  progressStart: string;
  progressEnd: string;
  progressBarWidth: string; // class like w-2/3
  links: { name: string; url: string; note: string }[];
}

const resourcesData: Resource[] = [
  {
    id: "res-dsa",
    title: "DSA Roadmap",
    description: "Master computational complexities, graph theories, dynamic programming architectures, and efficient data organization patterns.",
    icon: Binary,
    progressStart: "Beginner",
    progressEnd: "Advanced",
    progressBarWidth: "w-full",
    links: [
      { name: "NeetCode 150 Practice", url: "https://neetcode.io", note: "Best structured DSA practice roadmap grouped by topics." },
      { name: "Striver's A2Z DSA Sheet", url: "https://takeuforward.org", note: "Detailed video solutions and topic-wise programming challenges." },
      { name: "VisuAlgo - Interactive Viz", url: "https://visualgo.net", note: "Beautiful animated visualizations of complex data structures." },
      { name: "GeeksforGeeks DSA Reference", url: "https://www.geeksforgeeks.org", note: "Standard text definitions and code implementations in C++/Java." },
    ],
  },
  {
    id: "res-aiml",
    title: "AI/ML Resources",
    description: "Explore linear models, deep neural networks, computer vision, natural language fine-tuning, and PyTorch deployments.",
    icon: Cpu,
    progressStart: "Intermediate",
    progressEnd: "Expert",
    progressBarWidth: "w-4/5",
    links: [
      { name: "Andrew Ng's ML Specialization", url: "https://www.coursera.org/specializations/machine-learning-introduction", note: "Gold-standard theoretical and mathematical foundation in ML." },
      { name: "Practical Deep Learning (Fast.ai)", url: "https://www.fast.ai", note: "Top-down approach to coding and training neural networks quickly." },
      { name: "Kaggle Competitions & Notebooks", url: "https://www.kaggle.com", note: "Great datasets, code templates, and global community competitions." },
      { name: "Hugging Face Learn Hub", url: "https://huggingface.co/learn", note: "Official guides to fine-tuning transformers and NLP architectures." },
    ],
  },
  {
    id: "res-web",
    title: "Web Dev Path",
    description: "From layout constructs and modern styling libraries, to scalable React design and Serverless cloud pipelines.",
    icon: Globe,
    progressStart: "Beginner",
    progressEnd: "Intermediate",
    progressBarWidth: "w-3/5",
    links: [
      { name: "The Odin Project Curriculum", url: "https://www.theodinproject.com", note: "Comprehensive, project-based full stack JavaScript path." },
      { name: "Developer Roadmaps (roadmap.sh)", url: "https://roadmap.sh", note: "Interactive visual guides showing modern web career directions." },
      { name: "MDN Web Documentation", url: "https://developer.mozilla.org", note: "The definitive reference for HTML5, CSS3, and core JavaScript APIs." },
      { name: "Frontend Masters Workshops", url: "https://frontendmasters.com", note: "Premium in-depth courses on performance, bundlers, and architecture." },
    ],
  },
  {
    id: "res-prep",
    title: "Interview Prep",
    description: "System design blueprints, algorithmic coding strategies, resume formatting rules, and behavioral interview templates.",
    icon: Briefcase,
    progressStart: "Intermediate",
    progressEnd: "Advanced",
    progressBarWidth: "w-5/6",
    links: [
      { name: "ByteByteGo System Design", url: "https://bytebytego.com", note: "In-depth visual breakdowns of high-scale backend architectures." },
      { name: "Tech Interview Handbook", url: "https://www.techinterviewhandbook.org", note: "Free resume reviews, behavioral templates, and study roadmaps." },
      { name: "Resume.worded Optimizer", url: "https://resumeworded.com", note: "AI tool to optimize resume bullet points for ATS scanners." },
      { name: "Pramp Peer Mock Interviews", url: "https://www.pramp.com", note: "Practice live video peer-to-peer coding sessions for free." },
    ],
  },
  {
    id: "res-cp",
    title: "Competitive Programming",
    description: "Train memory speed and optimal computation. Solve complex optimization problems on Codechef, LeetCode, and Codeforces.",
    icon: Trophy,
    progressStart: "Intermediate",
    progressEnd: "Expert",
    progressBarWidth: "w-11/12",
    links: [
      { name: "Codeforces Competitive Rounds", url: "https://codeforces.com", note: "Worldwide live programming contests and extensive problem sets." },
      { name: "USACO Training Guide", url: "https://usaco.guide", note: "Excellent free algorithmic training portal from USA Computing Olympiad." },
      { name: "LeetCode Code Exercises", url: "https://leetcode.com", note: "Industry-standard code library for tech interview prep." },
      { name: "CP-Algorithms Implementations", url: "https://cp-algorithms.com", note: "Direct explanations and code for hundreds of CP algorithms." },
    ],
  },
  {
    id: "res-os",
    title: "Open Source Path",
    description: "Learn branching models, peer pull-request code reviews, license compliance, and contributing workflows.",
    icon: GitBranch,
    progressStart: "Beginner",
    progressEnd: "Intermediate",
    progressBarWidth: "w-1/2",
    links: [
      { name: "GitHub Interactive Skills", url: "https://skills.github.com", note: "Interactive Git courses developed directly by GitHub team." },
      { name: "First Contributions Repository", url: "https://firstcontributions.github.io", note: "Hands-on simple project to submit your very first GitHub PR." },
      { name: "Hacktoberfest Event Guide", url: "https://hacktoberfest.com", note: "Annual global open-source festival hosted in October." },
      { name: "OSI License Reference", url: "https://opensource.org", note: "Official definitions for MIT, Apache, GPL, and other software licenses." },
    ],
  },
];

export default function Resources() {
  const [activeResource, setActiveResource] = useState<Resource | null>(null);

  return (
    <section id="resources" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-navy-dark">
      {/* Glow backgrounds */}
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-acm-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] rounded-full bg-acm-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4 tracking-tight"
          >
            Resources <span className="bg-gradient-to-r from-acm-cyan to-acm-blue bg-clip-text text-transparent">Hub</span>
          </motion.h2>
          <div className="h-1 bg-gradient-to-r from-acm-cyan to-acm-blue mx-auto rounded-full w-20 mb-6" />
          <p className="font-sans text-sm sm:text-base text-soft max-w-2xl mx-auto leading-relaxed">
            Curated knowledge paths for developers. Accelerate your career with technical roadmaps, learning guides, and tools selected by chapter mentors.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourcesData.map((res, idx) => {
            const IconComponent = res.icon;
            return (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/5 group"
              >
                <div>
                  {/* Glowing Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-acm-cyan/5 group-hover:border-acm-cyan/35 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-acm-cyan group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-acm-cyan transition-colors">
                    {res.title}
                  </h3>
                  <p className="font-sans text-sm text-soft mb-8 leading-relaxed">
                    {res.description}
                  </p>
                </div>

                <div>
                  {/* Progress visual */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center text-[10px] text-soft font-semibold uppercase tracking-wider mb-2">
                      <span>{res.progressStart}</span>
                      <span>{res.progressEnd}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div className={`h-full bg-gradient-to-r from-acm-blue to-acm-cyan rounded-full ${res.progressBarWidth}`} />
                    </div>
                  </div>

                  {/* Explore Button */}
                  <button
                    onClick={() => setActiveResource(res)}
                    className="interactive flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-acm-cyan transition-colors"
                  >
                    Explore Resources
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Side Drawer Panel (Curated Links) */}
      <AnimatePresence>
        {activeResource && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveResource(null)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-navy-light/95 border-l border-white/10 z-50 p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-acm-cyan/10 border border-acm-cyan/25 flex items-center justify-center">
                      <activeResource.icon className="w-5 h-5 text-acm-cyan" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-tight">
                        {activeResource.title}
                      </h3>
                      <span className="text-[10px] text-soft font-semibold uppercase tracking-wider">Curated Resources</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveResource(null)}
                    className="text-soft hover:text-white p-1 rounded-lg hover:bg-white/5 transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>

                <p className="font-sans text-sm text-soft mb-8 leading-relaxed">
                  {activeResource.description}
                </p>

                {/* Curated links lists */}
                <div className="flex flex-col gap-4">
                  {activeResource.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive glass-card rounded-xl p-4 border border-white/5 flex justify-between items-start gap-4 hover:border-acm-cyan/20 transition-all group/link"
                    >
                      <div className="flex-grow">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Bookmark size={13} className="text-acm-cyan" />
                          <h4 className="font-heading text-sm font-bold text-white group-hover/link:text-acm-cyan transition-colors">
                            {link.name}
                          </h4>
                        </div>
                        <p className="font-sans text-xs text-soft leading-relaxed">{link.note}</p>
                      </div>
                      <ExternalLink size={14} className="text-soft group-hover/link:text-white transition-colors mt-0.5 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="border-t border-white/10 pt-6 mt-8">
                <div className="flex justify-between items-center text-xs text-soft font-semibold mb-4 uppercase tracking-wider">
                  <span>Skill Level:</span>
                  <span className="text-white">
                    {activeResource.progressStart} → {activeResource.progressEnd}
                  </span>
                </div>
                <button
                  onClick={() => setActiveResource(null)}
                  className="interactive w-full py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-center font-sans text-xs font-semibold text-white transition-all"
                >
                  Close Drawer
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
