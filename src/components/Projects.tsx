/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Info, Sparkles } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolio.ts';
import ProjectModal from './ProjectModal.tsx';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#080B12] relative border-t border-[#293244]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#4F7CFF] uppercase mb-2">
              <span>04</span>
              <span aria-hidden="true">·</span>
              <span>PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F7FB] mb-3">
              Featured Projects
            </h2>
            <p className="text-base text-[#A6B0C3] max-w-xl">
              Practical web applications, custom AI workflows, and interactive science experiments.
            </p>
          </div>

          <div className="text-xs font-mono text-[#A6B0C3] bg-[#151E30] px-3.5 py-2 rounded-lg border border-[#293244] shrink-0 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#4F7CFF]" />
            <span>4 Real Projects Documented</span>
          </div>
        </div>

        {/* 2-Column Desktop Grid / 1-Column Mobile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group rounded-3xl bg-[#151E30] border border-[#293244] hover:border-[#4F7CFF]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg shadow-black/30 hover:shadow-2xl hover:shadow-[#4F7CFF]/5"
              >
                {/* Visual Media Header */}
                <div className="relative w-full aspect-[16/10] bg-[#0A0E17] overflow-hidden border-b border-[#293244]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Platform overlay tag */}
                  {project.platformType && (
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-[#080B12]/85 backdrop-blur-md border border-[#293244] text-[11px] font-mono text-[#4F7CFF]">
                      {project.platformType}
                    </div>
                  )}

                  {/* Detail trigger overlay button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-4 right-4 p-2 rounded-xl bg-[#080B12]/80 backdrop-blur-md border border-[#293244] text-[#A6B0C3] hover:text-white hover:border-[#4F7CFF] transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                    title="View Project Details"
                    aria-label={`View details for ${project.title}`}
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Project Information */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category unboxed text */}
                    <div className="text-xs font-mono uppercase tracking-wider text-[#4F7CFF] mb-2">
                      {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FB] font-heading mb-3 group-hover:text-[#4F7CFF] transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#A6B0C3] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Verified Technology labels */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-[#293244]/80">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-[#101827] border border-[#293244] text-xs font-mono text-[#F5F7FB]/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#4F7CFF] hover:bg-[#3D69E6] text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-md hover:shadow-[#4F7CFF]/20 cursor-pointer"
                      >
                        <span>{project.actionLabel}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#101827] hover:bg-[#1E2B45] text-[#A6B0C3] hover:text-white border border-[#293244] text-xs font-semibold transition-all cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-[#101827] hover:bg-[#1E2B45] text-[#A6B0C3] hover:text-white border border-[#293244] transition-all cursor-pointer"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Detail Lightbox / Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
