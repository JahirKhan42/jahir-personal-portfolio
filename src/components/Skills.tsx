/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Cpu, Terminal, Sparkles, CheckSquare, Languages, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolio.ts';

const categoryIcons = [
  Cpu,          // AI Training
  Terminal,     // Development
  Sparkles,     // Science & Creative
  CheckSquare,  // Professional Skills
];

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 bg-[#080B12] relative border-t border-[#293244]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#4F7CFF] uppercase mb-2">
            <span>03</span>
            <span aria-hidden="true">·</span>
            <span>CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F7FB] mb-3">
            Skills &amp; Competencies
          </h2>
          <p className="text-base text-[#A6B0C3] max-w-2xl">
            Categorized overview of evaluation workflows, learning-stage software tools, science communication, and workplace capabilities.
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skills.categories.map((category, idx) => {
            const Icon = categoryIcons[idx] || Cpu;
            const isDevelopment = category.title.includes('Development');

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#151E30] border border-[#293244] hover:border-[#4F7CFF]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#101827] border border-[#293244] flex items-center justify-center text-[#4F7CFF]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#F5F7FB] font-heading">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[#A6B0C3]">{category.description}</p>
                    </div>
                  </div>

                  {/* Explicit learning-stage advisory banner for development skills */}
                  {isDevelopment && (
                    <div className="mb-4 py-1.5 px-3 rounded-lg bg-[#101827] border border-[#293244] text-[11px] font-mono text-[#4F7CFF] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
                      <span>Actively learning modern foundations through hands-on project building</span>
                    </div>
                  )}

                  {/* Skill Items List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="py-2 px-3 rounded-lg bg-[#101827] border border-[#293244]/80 text-xs text-[#F5F7FB] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]/70 shrink-0" />
                        <span className="font-medium truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-[#101827] border border-[#293244] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#151E30] border border-[#293244] flex items-center justify-center text-[#9061F9]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#F5F7FB] font-heading">
                Language Proficiencies
              </h4>
              <p className="text-xs text-[#A6B0C3]">
                Multilingual capabilities for regional annotation, communication, and educational content
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {skills.languages.map((lang) => (
              <div
                key={lang.language}
                className="py-1.5 px-3.5 rounded-xl bg-[#151E30] border border-[#293244] flex items-center gap-2 text-xs"
              >
                <span className="font-semibold text-[#F5F7FB]">{lang.language}</span>
                <span className="text-[#A6B0C3]">/</span>
                <span className="text-[#4F7CFF] font-mono">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
