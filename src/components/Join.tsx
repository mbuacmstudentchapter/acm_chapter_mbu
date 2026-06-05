"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck, User, Mail, GraduationCap, Code, Heart, ArrowRight } from "lucide-react";

const domainOptions = [
  "Web Development",
  "Artificial Intelligence / ML",
  "Mobile Apps",
  "Cyber Security",
  "Competitive Programming",
  "Cloud Computing / DevOps",
  "UI/UX Design",
  "Scientific Research",
];

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNumber: "",
    branch: "Computer Science & Engineering",
    year: "1st Year",
  });
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleDomain = (domain: string) => {
    if (selectedDomains.includes(domain)) {
      setSelectedDomains(selectedDomains.filter((d) => d !== domain));
    } else {
      setSelectedDomains([...selectedDomains, domain]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.rollNumber) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="join" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-navy-light/10">
      {/* Background glow meshes */}
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-acm-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] rounded-full bg-acm-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4 tracking-tight"
          >
            Become a <span className="bg-gradient-to-r from-acm-cyan to-acm-blue bg-clip-text text-transparent text-glow">Member</span>
          </motion.h2>
          <div className="h-1 bg-gradient-to-r from-acm-cyan to-acm-blue mx-auto rounded-full w-20 mb-6" />
          <p className="font-sans text-sm sm:text-base text-soft max-w-xl mx-auto leading-relaxed">
            Apply to join the MBU ACM Student Chapter. Participate in exclusive hackathons, access peer resources, and build real-world products.
          </p>
        </div>

        {/* Join Panel Form */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-soft font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <User size={13} className="text-acm-cyan" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sai Kiran Reddy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/5 border border-white/10 hover:border-white/20 focus:border-acm-cyan rounded-xl px-4 py-3 text-sm text-white placeholder-soft outline-none transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-soft font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Mail size={13} className="text-acm-cyan" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. saikiran@mbu.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/5 border border-white/10 hover:border-white/20 focus:border-acm-cyan rounded-xl px-4 py-3 text-sm text-white placeholder-soft outline-none transition-all"
                    />
                  </div>

                  {/* Roll Number Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-soft font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <GraduationCap size={13} className="text-acm-cyan" />
                      MBU Roll Number
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 23121A0501"
                      value={formData.rollNumber}
                      onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                      className="bg-white/5 border border-white/10 hover:border-white/20 focus:border-acm-cyan rounded-xl px-4 py-3 text-sm text-white placeholder-soft outline-none transition-all"
                    />
                  </div>

                  {/* Branch Select */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-soft font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Code size={13} className="text-acm-cyan" />
                      Department / Branch
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="bg-navy-light border border-white/10 hover:border-white/20 focus:border-acm-cyan rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                    >
                      <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="CSE (AI & ML)">CSE (AI & ML)</option>
                      <option value="CSE (Data Science)">CSE (Data Science)</option>
                      <option value="Electronics & Communication">Electronics & Communication</option>
                    </select>
                  </div>
                </div>

                {/* Academic Year Radio */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-soft font-semibold uppercase tracking-wider">Academic Year</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["1st Year", "2nd Year", "3rd Year", "4th Year"].map((yr) => (
                      <button
                        type="button"
                        key={yr}
                        onClick={() => setFormData({ ...formData, year: yr })}
                        className={`py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                          formData.year === yr
                            ? "bg-acm-blue/20 border-acm-blue text-white shadow-glow"
                            : "bg-white/5 border-white/10 text-soft hover:text-white"
                        }`}
                      >
                        {yr}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tech Interests Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-soft font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Heart size={13} className="text-acm-cyan" />
                    Domains of Interest (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {domainOptions.map((domain) => {
                      const isSelected = selectedDomains.includes(domain);
                      return (
                        <button
                          type="button"
                          key={domain}
                          onClick={() => toggleDomain(domain)}
                          className={`px-3.5 py-2 rounded-lg border text-xs font-semibold transition-all flex items-center gap-1 ${
                            isSelected
                              ? "bg-gradient-to-r from-acm-cyan/25 to-acm-blue/25 border-acm-cyan text-white shadow-glow-cyan"
                              : "bg-white/5 border-white/10 text-soft hover:text-white hover:border-white/20"
                          }`}
                        >
                          {isSelected ? "+" : null} {domain}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="interactive w-full py-4 rounded-xl bg-gradient-to-r from-acm-blue to-acm-blue/80 hover:from-acm-cyan hover:to-acm-blue disabled:from-acm-blue/40 disabled:to-acm-blue/30 text-white font-sans font-semibold text-base shadow-glow hover:shadow-glow-strong transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                {/* Security footer note */}
                <p className="text-[10px] text-center text-soft mt-2 flex items-center justify-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  Applications are verified using official MBU credentials. Exclusive for active MBU students.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-6 shadow-glow">
                  <CheckCircle2 size={36} className="text-emerald-400" />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                  Application Submitted!
                </h3>
                <p className="font-sans text-sm sm:text-base text-soft max-w-md mb-8 leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. 
                  Our chapter executive board will verify your details ({formData.rollNumber}) and send further onboarding steps to your email.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      rollNumber: "",
                      branch: "Computer Science & Engineering",
                      year: "1st Year",
                    });
                    setSelectedDomains([]);
                  }}
                  className="interactive px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all"
                >
                  Apply for another member
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
