/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolio.ts';

export default function Hero() {
  const { identity, socialLinks } = portfolioData;
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(identity.profileImage);

  // Animated secondary heading loop
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhraseIndex((prev) => (prev + 1) % identity.animatedPhrases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [identity.animatedPhrases.length]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4F7CFF]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9061F9]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Introductory Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#151E30] border border-[#293244] text-xs font-mono tracking-widest text-[#4F7CFF] mb-6 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
              {identity.introLabel}
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F7FB] leading-[1.1] mb-3"
            >
              Hi, I&apos;m <span className="text-[#F5F7FB]">{identity.fullName}</span>.
            </motion.h1>

            {/* Animated Secondary Heading */}
            <div className="h-10 sm:h-12 flex items-center mb-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activePhraseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#4F7CFF] via-[#9061F9] to-[#38BDF8] bg-clip-text text-transparent font-heading"
                >
                  {identity.animatedPhrases[activePhraseIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Professional Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg font-semibold text-[#A6B0C3] tracking-wide mb-5"
            >
              {identity.headline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-[#A6B0C3]/90 leading-relaxed max-w-2xl mb-8"
            >
              {identity.heroDescription}
            </motion.p>

            {/* Action Buttons: Only View My Projects & Get In Touch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-xl bg-[#4F7CFF] hover:bg-[#3D69E6] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:shadow-[#4F7CFF]/25 cursor-pointer whitespace-nowrap"
              >
                View My Projects
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-xl bg-[#151E30] hover:bg-[#1E2B45] text-[#F5F7FB] border border-[#293244] hover:border-[#4F7CFF] font-semibold text-sm transition-all cursor-pointer whitespace-nowrap"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Connect Row: GitHub, LinkedIn, Email */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 border-t border-[#293244]/60 w-full"
            >
              <span className="text-xs font-mono text-[#A6B0C3]/70 uppercase tracking-wider shrink-0">
                Connect:
              </span>

              {/* GitHub */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs font-mono text-[#A6B0C3] hover:text-[#F5F7FB] transition-colors py-1"
                aria-label="GitHub Profile - JahirKhan42"
              >
                <span className="p-1.5 rounded-lg bg-[#151E30] border border-[#293244] group-hover:border-[#4F7CFF] transition-colors">
                  <Github className="w-3.5 h-3.5 text-[#4F7CFF]" />
                </span>
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs font-mono text-[#A6B0C3] hover:text-[#F5F7FB] transition-colors py-1"
                aria-label="LinkedIn Profile - Jahir Ali Khan"
              >
                <span className="p-1.5 rounded-lg bg-[#151E30] border border-[#293244] group-hover:border-[#0A66C2] transition-colors">
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                </span>
                <span>LinkedIn</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${socialLinks.email}`}
                className="group inline-flex items-center gap-2 text-xs font-mono text-[#A6B0C3] hover:text-[#F5F7FB] transition-colors py-1"
                aria-label={`Send Email to ${socialLinks.email}`}
              >
                <span className="p-1.5 rounded-lg bg-[#151E30] border border-[#293244] group-hover:border-[#9061F9] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#9061F9]" />
                </span>
                <span className="truncate max-w-[200px] sm:max-w-none">{socialLinks.email}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Animated Orbital Background with Profile Headshot Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-square flex items-center justify-center"
            >
              {/* Outer decorative orbital ring */}
              <div
                className="absolute inset-0 rounded-full border border-[#4F7CFF]/20 animate-spin"
                style={{ animationDuration: '30s', animationTimingFunction: 'linear' }}
                aria-hidden="true"
              >
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#4F7CFF] shadow-sm shadow-[#4F7CFF]" />
              </div>

              {/* Counter-rotating elliptical science ring */}
              <div
                className="absolute inset-4 rounded-full border border-[#9061F9]/25 animate-spin"
                style={{
                  animationDuration: '24s',
                  animationDirection: 'reverse',
                  animationTimingFunction: 'linear',
                }}
                aria-hidden="true"
              >
                <span className="absolute bottom-2 right-12 w-2 h-2 rounded-full bg-[#9061F9] shadow-sm shadow-[#9061F9]" />
              </div>

              {/* Profile Card with subtle electric-blue/violet frame glow */}
              <div className="relative z-10 w-[280px] sm:w-[320px] aspect-square rounded-3xl bg-[#151E30] border border-[#4F7CFF]/50 p-3 shadow-[0_0_35px_rgba(79,124,255,0.25)] hover:shadow-[0_0_45px_rgba(144,97,249,0.35)] transition-all duration-500 group">
                <div className="w-full h-full rounded-2xl bg-[#101827] overflow-hidden flex flex-col items-center justify-center relative">
                  <img
                    src={imgSrc}
                    alt="Jahir Ali Khan — Professional portrait"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    onError={() => {
                      // Graceful fallback to the vector placeholder if headshot file is pending upload
                      if (imgSrc !== identity.profileImageFallback) {
                        setImgSrc(identity.profileImageFallback);
                      }
                    }}
                  />

                  {/* Corner tech badge */}
                  <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-lg bg-[#080B12]/85 backdrop-blur-md border border-[#293244] flex items-center justify-between text-[11px] font-mono text-[#A6B0C3]">
                    <span className="text-[#4F7CFF]">JAK // DEV</span>
                    <span>WB, INDIA</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom scroll prompt */}
      <button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#A6B0C3]/60 hover:text-[#4F7CFF] transition-colors cursor-pointer"
      >
        <span className="text-[11px] font-mono uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </button>
    </section>
  );
}
