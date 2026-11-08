/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { GraduationCap, BookOpen, AlertCircle, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolio.ts';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 bg-[#080B12] relative border-t border-[#293244]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#4F7CFF] uppercase mb-2">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F7FB] mb-3">
            Education &amp; Training
          </h2>
          <p className="text-base text-[#A6B0C3] max-w-xl">
            Formal secondary qualifications, vocational technical skill training, and university coursework.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, idx) => {
            const isDiscontinued = item.status && item.status.includes('Discontinued');

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`p-6 rounded-3xl bg-[#151E30] border transition-all flex flex-col justify-between ${
                  isDiscontinued
                    ? 'border-[#293244] hover:border-[#9061F9]/50'
                    : 'border-[#293244] hover:border-[#4F7CFF]/50'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#101827] border border-[#293244] flex items-center justify-center text-[#4F7CFF]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#A6B0C3] bg-[#101827] px-2.5 py-1 rounded-md border border-[#293244]">
                      <Calendar className="w-3.5 h-3.5 text-[#4F7CFF]" />
                      <span>{item.year}</span>
                    </div>
                  </div>

                  {/* Program Title */}
                  <h3 className="text-lg font-bold text-[#F5F7FB] font-heading mb-2">
                    {item.program}
                  </h3>

                  {/* Institution */}
                  <p className="text-xs sm:text-sm text-[#4F7CFF] font-medium mb-3">
                    {item.institutionOrBoard}
                  </p>

                  {/* Notes */}
                  {item.notes && (
                    <p className="text-xs text-[#A6B0C3] leading-relaxed mb-4">
                      {item.notes}
                    </p>
                  )}
                </div>

                {/* Status indicator */}
                <div className="pt-3 border-t border-[#293244]/80 mt-2">
                  {isDiscontinued ? (
                    <div className="flex items-center gap-1.5 text-xs text-[#F59E0B] font-mono bg-[#101827] px-2.5 py-1.5 rounded-lg border border-[#293244]">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.status}</span>
                    </div>
                  ) : (
                    <div className="text-xs font-mono text-[#A6B0C3]/80">
                      Type: <span className="text-[#F5F7FB]">{item.type}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
