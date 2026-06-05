"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Award, ExternalLink, Image as ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  speaker: string;
  type: "Hackathon" | "Workshop" | "Talk" | "Code-along";
  description: string;
  image: string;
  tags: string[];
}

const upcomingEvents: Event[] = [
  {
    id: "up-1",
    title: "DECODED: 36-Hour National Hackathon",
    date: "2026-07-24", // Future date (current is June 05, 2026)
    time: "09:00 AM IST",
    speaker: "Industry Jury & Tech Experts",
    type: "Hackathon",
    description: "MBU's biggest hackathon of the year. Build scalable web, mobile, AI, or web3 projects within 36 hours. Mentorship from industry veterans and total prizes worth INR 1,50,000.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "AI/ML", "Web3", "Cloud"],
  },
  {
    id: "up-2",
    title: "Generative AI Foundations & LLM Fine-Tuning",
    date: "2026-08-12",
    time: "10:00 AM IST",
    speaker: "Dr. K. Srinivas (Senior Scientist)",
    type: "Workshop",
    description: "A comprehensive hands-on workshop focused on fine-tuning large language models using HuggingFace, quantization techniques (QLoRA), and integrating custom datasets.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "PyTorch", "LLMs", "HuggingFace"],
  },
];

const pastEvents: Event[] = [
  {
    id: "past-1",
    title: "Algorithmic Masterclass: Advance DSA Patterns",
    date: "2026-05-15",
    time: "02:00 PM IST",
    speaker: "Suhasini Rao (Google SWE)",
    type: "Workshop",
    description: "Deep dive into Graph algorithms, Dynamic Programming optimization patterns, and advanced techniques required for cracking tier-1 software engineering interviews.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    tags: ["DSA", "Competitive Programming", "C++"],
  },
  {
    id: "past-2",
    title: "Web 3.0 & Self-Sovereign Identity Systems",
    date: "2026-04-10",
    time: "11:00 AM IST",
    speaker: "Nikhil Kamath (Solana Ecosystem Lead)",
    type: "Talk",
    description: "Exploring decentralized identifiers (DIDs), verifiable credentials, smart contracts, and how decentralized protocols are redefining web privacy and digital trust.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    tags: ["Web3", "Cryptography", "Solana"],
  },
  {
    id: "past-3",
    title: "DevOps BootCamp: Scaling Infrastructure on AWS",
    date: "2026-03-05",
    time: "09:30 AM IST",
    speaker: "ACM MBU Devops Lead",
    type: "Workshop",
    description: "A solid introduction to containerization using Docker, orchestration via Kubernetes, and establishing fully automated CI/CD pipelines with GitHub Actions on AWS.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    tags: ["Docker", "Kubernetes", "AWS", "CI/CD"],
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80", caption: "Audience engaging at the DSA Masterclass" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", caption: "Students collaborating during the 36-Hour Hackathon" },
  { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80", caption: "Keynote address on Web 3.0 architectures" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", caption: "ACM chapter leads brainstorming next projects" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", caption: "Hands-on coding during AI/ML session" },
  { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80", caption: "Q&A round with the DevOps mentor" },
];

export default function Events() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past" | "gallery">("upcoming");
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Countdown calculations
  useEffect(() => {
    if (upcomingEvents.length === 0) return;
    const targetDate = new Date(`${upcomingEvents[0].date}T${upcomingEvents[0].time.substring(0, 5)}:00`).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setCountdown({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="events" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-navy-light/20">
      {/* Background glow elements */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-acm-blue/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-acm-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4 tracking-tight"
          >
            Chapter <span className="bg-gradient-to-r from-acm-cyan to-acm-blue bg-clip-text text-transparent">Events</span>
          </motion.h2>
          <div className="h-1 bg-gradient-to-r from-acm-cyan to-acm-blue mx-auto rounded-full w-20 mb-6" />
          <p className="font-sans text-sm sm:text-base text-soft max-w-2xl mx-auto leading-relaxed">
            Upskilling the computing community. Check out our upcoming hackathons, past technical workshops, and chapter milestones.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {(["upcoming", "past", "gallery"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full font-sans text-sm font-semibold tracking-wide transition-all duration-300 capitalize ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-acm-blue to-acm-blue/80 text-white shadow-glow"
                    : "text-soft hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Panels */}
        <AnimatePresence mode="wait">
          {activeTab === "upcoming" && (
            <motion.div
              key="upcoming"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-10"
            >
              {/* Live Countdown on Nearest Event */}
              {upcomingEvents.length > 0 && (
                <div className="w-full glass-card rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="absolute top-0 right-0 px-4 py-1 bg-acm-cyan/20 border-l border-b border-white/10 rounded-bl-xl">
                    <span className="text-xs font-semibold text-acm-cyan uppercase tracking-wider animate-pulse">Nearest Event</span>
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-acm-cyan tracking-wider uppercase mb-4">
                      <Clock size={14} />
                      Starts In:
                    </div>

                    {/* Countdown Timer Display */}
                    <div className="flex gap-4 sm:gap-6 mb-6">
                      {[
                        { label: "days", value: countdown.days },
                        { label: "hours", value: countdown.hours },
                        { label: "min", value: countdown.minutes },
                        { label: "sec", value: countdown.seconds },
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-heading text-2xl sm:text-4xl font-bold text-white text-glow shadow-glow-cyan">
                            {String(item.value).padStart(2, "0")}
                          </div>
                          <span className="text-[10px] sm:text-xs text-soft uppercase tracking-wider mt-2 font-medium">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                      {upcomingEvents[0].title}
                    </h3>
                    <p className="font-sans text-sm text-soft mb-6 leading-relaxed">
                      {upcomingEvents[0].description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-xs text-soft mb-6 font-medium">
                      <div className="flex items-center gap-1.5"><Calendar size={14} className="text-acm-cyan" /> {upcomingEvents[0].date}</div>
                      <div className="flex items-center gap-1.5"><Clock size={14} className="text-acm-cyan" /> {upcomingEvents[0].time}</div>
                      <div className="flex items-center gap-1.5"><MapPin size={14} className="text-acm-cyan" /> CSE Seminar Hall, MBU</div>
                    </div>

                    <a
                      href="#register"
                      className="interactive inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-acm-cyan to-acm-blue text-white font-sans font-semibold text-sm shadow-glow hover:shadow-glow-strong hover:translate-y-[-1px] transition-all duration-300 w-fit"
                    >
                      Register Now
                    </a>
                  </div>

                  <div className="lg:col-span-5 h-64 sm:h-80 rounded-xl overflow-hidden relative border border-white/10 group">
                    <img
                      src={upcomingEvents[0].image}
                      alt={upcomingEvents[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  </div>
                </div>
              )}

              {/* Other Upcoming Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingEvents.slice(1).map((event) => (
                  <div key={event.id} className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-white/5">
                    <div className="h-48 overflow-hidden relative">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 right-4 bg-acm-blue/90 border border-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                        {event.type}
                      </div>
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col flex-grow">
                      <h4 className="font-heading text-xl font-bold text-white mb-2">{event.title}</h4>
                      <p className="font-sans text-xs text-acm-cyan font-semibold mb-4">Speaker: {event.speaker}</p>
                      <p className="font-sans text-sm text-soft mb-6 leading-relaxed flex-grow">{event.description}</p>
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center text-xs text-soft font-medium">
                          <span className="flex items-center gap-1"><Calendar size={13} /> {event.date}</span>
                          <span className="flex items-center gap-1"><Clock size={13} /> {event.time}</span>
                        </div>
                        <a
                          href="#register"
                          className="interactive w-full py-2.5 rounded-full bg-white/5 hover:bg-acm-cyan/20 border border-white/10 hover:border-acm-cyan/40 text-center font-sans text-sm font-semibold transition-all duration-300"
                        >
                          Register Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "past" && (
            <motion.div
              key="past"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="glass-card rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between group relative"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    {/* Hover Blur Overlay */}
                    <div className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                      <span className="interactive px-5 py-2.5 rounded-full bg-gradient-to-r from-acm-blue to-acm-blue/80 text-white font-sans text-xs font-bold shadow-glow flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        View Recap
                        <ExternalLink size={12} />
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md border border-white/10 text-white px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                      {event.type}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="font-heading text-lg font-bold text-white mb-2 line-clamp-2">{event.title}</h4>
                    <p className="font-sans text-xs text-soft mb-4">Led by: <span className="text-white">{event.speaker}</span></p>
                    <p className="font-sans text-sm text-soft mb-6 leading-relaxed line-clamp-3 flex-grow">{event.description}</p>
                    
                    <div className="flex flex-col gap-4 border-t border-white/5 pt-4 mt-auto">
                      <div className="flex items-center justify-between text-[11px] text-soft font-semibold tracking-wider">
                        <span>Completed on {event.date}</span>
                      </div>
                      <button className="interactive w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-sans text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1">
                        <Award size={13} />
                        Get Certificate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "gallery" && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {galleryImages.map((image, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="h-48 sm:h-64 rounded-xl overflow-hidden border border-white/5 cursor-pointer relative group"
                >
                  <img src={image.src} alt={image.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4 transition-all duration-300">
                    <div className="flex items-center gap-2 text-white">
                      <ImageIcon size={16} className="text-acm-cyan" />
                      <span className="font-sans text-xs font-medium line-clamp-1">{image.caption}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-center items-center p-4 backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-soft hover:text-white p-2 z-50"
            >
              <X size={28} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 text-soft hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-3 z-50"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 text-soft hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-3 z-50"
            >
              <ChevronRight size={24} />
            </button>

            {/* Active Image Box */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[75vh] relative flex flex-col items-center"
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].caption}
                className="max-w-full max-h-[70vh] object-contain rounded-lg border border-white/15"
              />
              <p className="font-sans text-sm sm:text-base text-soft mt-4 text-center max-w-xl">
                {galleryImages[lightboxIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
