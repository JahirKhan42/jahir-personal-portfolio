/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio.ts';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 bg-[#080B12] relative border-t border-[#293244]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#4F7CFF] uppercase mb-2">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F7FB] mb-3">
            Certifications
          </h2>
          <p className="text-base text-[#A6B0C3] max-w-xl">
            Verified professional certifications in artificial intelligence and foundational technologies.
          </p>
        </div>

        {/* Certifications Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {certifications.map((cert, idx) => {
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-[#151E30] border border-[#293244] hover:border-[#4F7CFF]/50 transition-all shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#101827] border border-[#293244] flex items-center justify-center text-[#4F7CFF]">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#4F7CFF] bg-[#101827] px-3 py-1 rounded-full border border-[#293244]">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F7FB] font-heading mb-1.5">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-[#A6B0C3] mb-4">
                    <span className="text-[#F5F7FB] font-medium">{cert.issuer}</span>
                    <span aria-hidden="true">·</span>
                    <span>Platform: {cert.platform}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A6B0C3] leading-relaxed mb-6">
                    Professional curriculum covering artificial intelligence foundational paradigms, machine learning concepts, prompt engineering, and modern AI deployment workflows.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#293244]/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#10B981] font-mono">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Completion</span>
                  </div>

                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4F7CFF] hover:text-[#3D69E6] transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-[#A6B0C3]/60">
                      Credential record on file
                    </span>
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
