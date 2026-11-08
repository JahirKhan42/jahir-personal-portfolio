/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight, Linkedin, Globe } from 'lucide-react';
import { portfolioData, SocialCardItem } from '../data/portfolio.ts';

// Crisp inline SVGs for Instagram, Facebook, Threads, Google, and LinkedIn
function PlatformIcon({ type }: { type: SocialCardItem['iconType'] }) {
  switch (type) {
    case 'instagram':
      return (
        <svg
          className="w-5 h-5 text-[#E1306C]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case 'facebook':
      return (
        <svg
          className="w-5 h-5 text-[#1877F2]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case 'threads':
      return (
        <svg
          className="w-5 h-5 text-[#F5F7FB]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.186 24C5.466 24 0 18.574 0 11.905 0 5.236 5.466 0 12.186 0c6.643 0 11.99 5.236 12.186 11.855h-2.585c-.196-5.236-4.524-9.33-9.601-9.33-5.289 0-9.601 4.29-9.601 9.38 0 5.091 4.312 9.381 9.601 9.381 3.524 0 6.643-1.898 8.232-4.786l2.196 1.396C20.446 21.677 16.574 24 12.186 24zm4.185-11.458c-.147-3.064-2.078-4.836-4.622-4.836-2.794 0-4.862 2.147-4.862 5.041 0 3.015 2.019 5.091 4.96 5.091 1.765 0 3.328-.833 4.215-2.255l2.05 1.373c-1.373 2.157-3.676 3.407-6.265 3.407-4.402 0-7.5-3.21-7.5-7.611 0-4.451 3.147-7.612 7.45-7.612 3.922 0 6.863 2.671 7.06 6.955l-2.486.447z" />
        </svg>
      );
    case 'google':
      return (
        <svg
          className="w-5 h-5 text-[#4285F4]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
        </svg>
      );
    case 'linkedin':
      return <Linkedin className="w-5 h-5 text-[#0A66C2]" />;
    default:
      return <Globe className="w-5 h-5 text-[#4F7CFF]" />;
  }
}

export default function SocialMedia() {
  const { socialCards } = portfolioData;

  return (
    <section id="social" className="py-24 bg-[#080B12] relative border-t border-[#293244]/40">
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#4F7CFF]/5 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#4F7CFF] uppercase mb-2">
            <span>08</span>
            <span aria-hidden="true">·</span>
            <span>CONNECTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F7FB] mb-3">
            Find Me Across the Web
          </h2>
          <p className="text-base text-[#A6B0C3] max-w-xl">
            Explore my science content, creative projects, and professional journey.
          </p>
        </div>

        {/* Responsive Grid: 3 columns on large desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialCards.map((card, idx) => {
            return (
              <motion.a
                key={card.id}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group p-6 rounded-3xl bg-[#151E30] border border-[#293244] hover:border-[#4F7CFF]/60 hover:shadow-xl hover:shadow-[#4F7CFF]/10 transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF]"
                aria-label={`Visit Jahir Ali Khan on ${card.platform} (${card.displayName})`}
              >
                <div>
                  {/* Top Bar with platform icon & external link indicator */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#101827] border border-[#293244] group-hover:border-[#4F7CFF]/50 flex items-center justify-center transition-colors shadow-inner">
                      <PlatformIcon type={card.iconType} />
                    </div>

                    <div className="flex items-center gap-2">
                      {card.badgeLabel && (
                        <span className="text-[11px] font-mono text-[#A6B0C3] bg-[#101827] px-2.5 py-1 rounded-md border border-[#293244]">
                          {card.badgeLabel}
                        </span>
                      )}
                      <div className="w-8 h-8 rounded-lg bg-[#101827] border border-[#293244] group-hover:border-[#4F7CFF] group-hover:bg-[#4F7CFF] text-[#A6B0C3] group-hover:text-white flex items-center justify-center transition-all">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Platform & Display Name */}
                  <div className="text-xs font-mono uppercase tracking-wider text-[#4F7CFF] mb-1">
                    {card.platform}
                  </div>
                  <h3 className="text-xl font-bold text-[#F5F7FB] font-heading mb-2 group-hover:text-[#4F7CFF] transition-colors">
                    {card.displayName}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A6B0C3] leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                {/* Bottom link preview */}
                <div className="pt-4 border-t border-[#293244]/70 flex items-center justify-between text-xs font-mono text-[#A6B0C3]/80 group-hover:text-[#F5F7FB] transition-colors">
                  <span className="truncate max-w-[220px]">
                    {card.url.replace('https://', '')}
                  </span>
                  <span className="text-[#4F7CFF] font-semibold text-[11px] uppercase tracking-wide shrink-0">
                    Visit &rarr;
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
