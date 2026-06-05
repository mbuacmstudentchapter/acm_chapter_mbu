"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";

interface Post {
  id: string;
  title: string;
  tag: "DSA" | "AI" | "Hackathon" | "Tutorial" | "Event Recap";
  description: string;
  image: string;
  author: { name: string; avatar: string };
  readTime: string;
  date: string;
}

const featuredPost: Post = {
  id: "blog-feat",
  title: "Behind the Scenes of DECODED: Building Student Utility Software at Scale",
  tag: "Hackathon",
  description: "An in-depth technical retrospective on how our student dev team designed, provisioned, and monitored cloud-native testing architectures to evaluate 120+ teams concurrently during the 36-hour sprint.",
  image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  author: { name: "Sai Kiran Reddy", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80" },
  readTime: "7 min read",
  date: "June 02, 2026",
};

const gridPosts: Post[] = [
  {
    id: "blog-1",
    title: "Mastering Graph Traversals for Competitive Coding",
    tag: "DSA",
    description: "An advanced algorithmic walkthrough implementing Tarjan's bridge-finding algorithms, Eulerian path traversals, and dynamic heavy-light decompositions in C++.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
    author: { name: "Nikhil Chowdary", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=80&h=80&q=80" },
    readTime: "5 min read",
    date: "May 28, 2026",
  },
  {
    id: "blog-2",
    title: "How to Fine-Tune LLMs locally: A Hands-on Guide",
    tag: "Tutorial",
    description: "Step-by-step setup guides to fine-tune LLaMA-3 models using HuggingFace AutoTrain, PEFT quantization techniques, and cost-effective local GPU setups.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    author: { name: "Preethi Sen", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" },
    readTime: "8 min read",
    date: "May 14, 2026",
  },
  {
    id: "blog-3",
    title: "Architecting React Applications for Clean Code in 2026",
    tag: "Tutorial",
    description: "Exploring advanced component composition, Server Actions in Next.js 14, memory management optimizations with useMemo, and handling large global client states.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
    author: { name: "Tarun Kumar", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=80&h=80&q=80" },
    readTime: "6 min read",
    date: "Apr 29, 2026",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-navy-dark">
      <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] rounded-full bg-acm-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-acm-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4 tracking-tight"
          >
            Blog & <span className="bg-gradient-to-r from-acm-cyan to-acm-blue bg-clip-text text-transparent">Articles</span>
          </motion.h2>
          <div className="h-1 bg-gradient-to-r from-acm-cyan to-acm-blue mx-auto rounded-full w-20 mb-6" />
          <p className="font-sans text-sm sm:text-base text-soft max-w-2xl mx-auto leading-relaxed">
            Sharing technical insights and research. Explore engineering retrospectives, competitive coding guides, and tutorials written by MBU ACM members.
          </p>
        </div>

        {/* Magazine Featured Post Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl overflow-hidden border border-white/10 mb-16 group grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Image */}
          <div className="lg:col-span-7 h-64 sm:h-96 relative overflow-hidden">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-4 left-4 bg-acm-cyan/20 border border-acm-cyan/25 backdrop-blur-md text-acm-cyan px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {featuredPost.tag}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 text-xs text-soft font-semibold mb-4">
                <span className="flex items-center gap-1"><Calendar size={13} /> {featuredPost.date}</span>
                <span className="flex items-center gap-1"><Clock size={13} /> {featuredPost.readTime}</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-acm-cyan transition-colors duration-300 group-hover:text-glow">
                {featuredPost.title}
              </h3>
              
              <p className="font-sans text-sm sm:text-base text-soft leading-relaxed mb-8">
                {featuredPost.description}
              </p>
            </div>

            {/* Author + Link */}
            <div className="flex justify-between items-center border-t border-white/5 pt-6">
              <div className="flex items-center gap-3">
                <img
                  src={featuredPost.author.avatar}
                  alt={featuredPost.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">{featuredPost.author.name}</h4>
                  <span className="text-[10px] text-soft font-semibold uppercase tracking-wider">Chapter Writer</span>
                </div>
              </div>

              <a
                href={`#blog/${featuredPost.id}`}
                className="interactive inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-acm-cyan transition-colors group/link"
              >
                Read Article
                <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gridPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/10 border border-white/15 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {post.tag}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-soft font-semibold mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>

                  <h4 className="font-heading text-lg font-bold text-white mb-3 leading-snug group-hover:text-acm-cyan transition-colors duration-300 group-hover:text-glow">
                    {post.title}
                  </h4>

                  <p className="font-sans text-sm text-soft mb-6 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-white/5 pt-4 mt-auto">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-white/10"
                    />
                    <span className="font-heading text-xs font-semibold text-white">{post.author.name}</span>
                  </div>

                  <a
                    href={`#blog/${post.id}`}
                    className="interactive inline-flex items-center gap-1 text-[11px] font-bold text-white group-hover:text-acm-cyan transition-colors"
                  >
                    Read
                    <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
