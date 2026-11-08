/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio.ts';

const navItems = [
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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['about', 'experience', 'skills', 'projects', 'certifications', 'education', 'science', 'social', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Skip to Content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#4F7CFF] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080B12]/85 backdrop-blur-md border-b border-[#293244]/80 py-3.5 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand wordmark */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 text-lg font-bold tracking-tight text-[#F5F7FB] hover:text-[#4F7CFF] transition-colors"
              aria-label="JAHIR.DEV - Return to top"
            >
              <span className="w-8 h-8 rounded-lg bg-[#151E30] border border-[#293244] group-hover:border-[#4F7CFF] flex items-center justify-center text-xs font-mono font-bold text-[#4F7CFF] transition-colors">
                JK
              </span>
              <span className="font-heading tracking-wider">{portfolioData.identity.brandName}</span>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#A6B0C3]" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer relative ${
                      isActive
                        ? 'text-[#F5F7FB] font-semibold'
                        : 'text-[#A6B0C3] hover:text-[#F5F7FB]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#4F7CFF] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action & Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleNavClick('#contact')}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#4F7CFF] hover:bg-[#3D69E6] rounded-lg transition-all shadow-sm hover:shadow-md hover:shadow-[#4F7CFF]/20 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Get In Touch
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-[#151E30] border border-[#293244] text-[#A6B0C3] hover:text-white hover:border-[#4F7CFF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF]"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#080B12]/95 backdrop-blur-xl border-b border-[#293244] px-6 py-6 shadow-2xl transition-all">
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center justify-between text-left py-3 px-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#151E30] text-[#4F7CFF] font-semibold'
                        : 'text-[#A6B0C3] hover:text-[#F5F7FB] hover:bg-[#101827]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />}
                  </button>
                );
              })}
              <div className="pt-4 mt-2 border-t border-[#293244]">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#4F7CFF] hover:bg-[#3D69E6] rounded-lg transition-all"
                >
                  Get In Touch
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
