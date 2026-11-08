/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Briefcase, CheckCircle2, Calendar, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio.ts';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-[#080B12] relative border-t border-[#293244]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#4F7CFF] uppercase mb-2">
            <span>02</span>
            <span aria-hidden="true">·</span>
            <span>TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F7FB] mb-3">
            Professional Experience
          </h2>
          <p className="text-base text-[#A6B0C3] max-w-xl">
            A documented record of customer support, AI model training evaluation, and independent educational content creation.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#293244] ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
          {experience.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative group"
              >
                {/* Timeline node marker */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#151E30] border-2 border-[#4F7CFF] flex items-center justify-center group-hover:scale-125 transition-transform">
                  {item.isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
                  )}
                </div>

                {/* Period label positioned for desktop */}
                <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono text-[#A6B0C3] md:w-28 md:text-right mb-2 md:mb-0">
                  {item.period}
                </div>

                {/* Experience Card */}
                <div className="p-6 rounded-2xl bg-[#151E30] border border-[#293244] hover:border-[#4F7CFF]/50 transition-all shadow-sm">
                  {/* Top Bar inside card */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#F5F7FB] font-heading">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[#4F7CFF] font-medium mt-0.5">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <span>{item.company}</span>
                        {item.project && (
                          <>
                            <span className="text-[#A6B0C3]">·</span>
                            <span className="text-xs font-mono text-[#9061F9] bg-[#101827] px-2 py-0.5 rounded border border-[#293244]">
                              Project: {item.project}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="text-xs font-mono text-[#A6B0C3] flex items-center gap-1.5 bg-[#101827] px-2.5 py-1 rounded-md border border-[#293244]">
                      <Calendar className="w-3.5 h-3.5 text-[#4F7CFF]" />
                      <span>{item.type}</span>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <div className="mt-4 pt-4 border-t border-[#293244]/80">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#A6B0C3] mb-3">
                      Key Responsibilities &amp; Focus:
                    </div>
                    <ul className="space-y-2.5">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-sm text-[#A6B0C3]">
                          <CheckCircle2 className="w-4 h-4 text-[#4F7CFF] shrink-0 mt-0.5" />
                          <span className="leading-snug text-[#F5F7FB]/90">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
