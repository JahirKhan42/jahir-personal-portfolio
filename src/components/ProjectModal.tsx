/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Layers, AlertCircle } from 'lucide-react';
import { ProjectItem } from '../data/portfolio.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#151E30] border border-[#293244] shadow-2xl p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-[#101827] border border-[#293244] text-[#A6B0C3] hover:text-white hover:border-[#4F7CFF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF] cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Image Banner */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-[#0A0E17] border border-[#293244] mb-6 relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {project.platformType && (
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-[#080B12]/85 backdrop-blur-sm border border-[#293244] text-[11px] font-mono text-[#4F7CFF]">
                {project.platformType}
              </div>
            )}
          </div>

          {/* Category & Title */}
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#4F7CFF]">
              {project.category}
            </span>
            <h3 id="modal-title" className="text-2xl font-extrabold text-[#F5F7FB] mt-1 font-heading">
              {project.title}
            </h3>
          </div>

          {/* Core Description */}
          <div className="space-y-3 text-sm text-[#A6B0C3] leading-relaxed mb-6">
            <p className="text-[#F5F7FB]/95">{project.description}</p>
            {project.extendedDescription && (
              <p>{project.extendedDescription}</p>
            )}
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6 p-4 rounded-xl bg-[#101827] border border-[#293244]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#F5F7FB] mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4F7CFF]" />
                Key Focus &amp; Characteristics
              </div>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-xs text-[#A6B0C3] flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF] shrink-0 mt-1" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Verified Technologies */}
          <div className="mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-[#A6B0C3] mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#9061F9]" />
              Technologies &amp; Approach
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#101827] border border-[#293244] text-xs font-mono text-[#F5F7FB]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#293244] flex flex-wrap items-center gap-3">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4F7CFF] hover:bg-[#3D69E6] text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-md hover:shadow-[#4F7CFF]/20 cursor-pointer"
            >
              <span>{project.actionLabel}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#101827] hover:bg-[#1E2B45] text-[#F5F7FB] border border-[#293244] text-xs font-semibold transition-all cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A6B0C3]/60 px-2 py-1">
                <AlertCircle className="w-3.5 h-3.5" />
                Repository private / not public
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
