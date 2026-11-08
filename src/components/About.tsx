/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Cpu, Code, Atom, Sparkles, MapPin, Target, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolio.ts';

const iconMap = {
  Cpu: Cpu,
  Code: Code,
  Atom: Atom,
  Sparkles: Sparkles,
};

export default function About() {
  const { about, identity } = portfolioData;

  return (
    <section id="about" className="py-24 bg-[#080B12] relative border-t border-[#293244]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#4F7CFF] uppercase mb-2">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F7FB] mb-3">
            About Me
          </h2>
          <p className="text-base text-[#A6B0C3] max-w-xl">
            A little about my journey.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Authentic Biography & Key Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="space-y-4 text-base sm:text-lg text-[#A6B0C3] leading-relaxed">
              {about.biography.map((paragraph, idx) => (
                <p key={idx} className="text-[#F5F7FB]/90">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Context Strip */}
            <div className="pt-6 border-t border-[#293244] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#101827] border border-[#293244]/80">
                <MapPin className="w-5 h-5 text-[#4F7CFF] shrink-0" />
                <div>
                  <div className="text-xs font-mono text-[#A6B0C3]">Location</div>
                  <div className="text-sm font-semibold text-[#F5F7FB]">{identity.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#101827] border border-[#293244]/80">
                <Target className="w-5 h-5 text-[#9061F9] shrink-0" />
                <div>
                  <div className="text-xs font-mono text-[#A6B0C3]">Core Focus</div>
                  <div className="text-sm font-semibold text-[#F5F7FB]">AI Evaluation &amp; Web Dev</div>
                </div>
              </div>
            </div>

            {/* Guiding Principle Quote */}
            <div className="p-5 rounded-2xl bg-[#151E30]/70 border border-[#293244] relative overflow-hidden">
              <div className="text-xs font-mono text-[#4F7CFF] uppercase tracking-wider mb-1">
                Guiding Principle
              </div>
              <p className="text-sm text-[#F5F7FB] italic">
                &ldquo;Focus on real understanding, rigorous evaluation, and building practical digital tools that communicate ideas clearly.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Clean Professional Interest Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.interestCards.map((card, idx) => {
              const IconComponent = iconMap[card.iconName as keyof typeof iconMap] || BookOpen;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-[#151E30] border border-[#293244] hover:border-[#4F7CFF]/60 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md hover:shadow-black/40"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#101827] border border-[#293244] group-hover:border-[#4F7CFF] flex items-center justify-center text-[#4F7CFF] mb-4 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#F5F7FB] mb-2 font-heading">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A6B0C3] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
