/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio.ts';

export default function Footer() {
  const { identity, socialLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Science', href: '#science' },
    { label: 'Social', href: '#social' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
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
    <footer className="bg-[#05080E] border-t border-[#293244] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#293244]/60">
          {/* Brand & Identity */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-lg font-bold font-heading text-[#F5F7FB] hover:text-[#4F7CFF] transition-colors cursor-pointer"
            >
              {identity.brandName}
            </button>
            <p className="text-xs text-[#A6B0C3] mt-1">
              {identity.headline}
            </p>
          </div>

          {/* Quick Anchor Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#A6B0C3]" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="hover:text-[#F5F7FB] transition-colors cursor-pointer py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[#151E30] border border-[#293244] text-[#A6B0C3] hover:text-white hover:border-[#4F7CFF] transition-all cursor-pointer flex items-center gap-2 text-xs font-mono"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright line & social connect */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A6B0C3]/70">
          <p>© {new Date().getFullYear()} {identity.fullName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F7FB] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5 text-[#4F7CFF]" />
              <span>GitHub</span>
            </a>
            <span>·</span>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F7FB] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
            <span>·</span>
            <a
              href={`mailto:${socialLinks.email}`}
              className="hover:text-[#F5F7FB] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#9061F9]" />
              <span>{socialLinks.email}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
