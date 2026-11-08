/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Atom, Compass, Cpu, BookOpen, Sparkles, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio.ts';

const scienceIcons = [
  Atom,      // Physics
  Compass,   // Astronomy
  Cpu,       // Emerging Tech
  BookOpen,  // Science Education
];

export default function ScienceCreator() {
  const { scienceInitiative } = portfolioData;

  return (
    <section id="science" className="py-24 bg-[#080B12] relative border-t border-[#293244]/40">
      {/* Subtle orbital background motif */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#9061F9]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#9061F9] uppercase mb-2">
            <span>07</span>
            <span aria-hidden="true">·</span>
            <span>SCIENCE COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F7FB] mb-3">
            {scienceInitiative.title}
          </h2>
          <p className="text-lg text-[#9061F9] font-medium mb-3">
            {scienceInitiative.subtitle}
          </p>
          <p className="text-base text-[#A6B0C3] max-w-2xl leading-relaxed">
            {scienceInitiative.description}
          </p>
        </div>

        {/* 4 Science Interest Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {scienceInitiative.focusAreas.map((area, idx) => {
            const Icon = scienceIcons[idx] || Sparkles;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-[#151E30] border border-[#293244] hover:border-[#9061F9]/60 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg hover:shadow-[#9061F9]/5"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#101827] border border-[#293244] group-hover:border-[#9061F9] flex items-center justify-center text-[#9061F9] mb-5 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F7FB] font-heading mb-2">
                    {area.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A6B0C3] leading-relaxed mb-6">
                    {area.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#293244]/80">
                  <div className="text-[11px] font-mono text-[#A6B0C3]/70 uppercase mb-2">
                    Topics Covered:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {area.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#101827] border border-[#293244] text-[#F5F7FB]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Domain Under Development Notice (Respects constraint to not show inactive domain as clickable) */}
        <div className="p-4 rounded-2xl bg-[#101827] border border-[#293244] flex items-center gap-3 max-w-2xl text-xs text-[#A6B0C3]">
          <AlertCircle className="w-4 h-4 text-[#9061F9] shrink-0" />
          <span>{scienceInitiative.domainNotice}</span>
        </div>
      </div>
    </section>
  );
}
