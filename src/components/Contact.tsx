/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolio.ts';

export default function Contact() {
  const { contact, socialLinks } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#080B12] relative border-t border-[#293244]/40">
      {/* Background Soft Glow */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#4F7CFF]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#4F7CFF] uppercase mb-4">
          <span>09</span>
          <span aria-hidden="true">·</span>
          <span>GET IN TOUCH</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F7FB] font-heading mb-4">
          Let&apos;s Build Something Meaningful.
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-[#A6B0C3] max-w-2xl mx-auto mb-10 leading-relaxed">
          {contact.statusText}
        </p>

        {/* Primary Contact Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#151E30] border border-[#293244] max-w-2xl mx-auto shadow-2xl shadow-black/50">
          <div className="w-14 h-14 rounded-2xl bg-[#101827] border border-[#293244] flex items-center justify-center text-[#4F7CFF] mx-auto mb-6">
            <Mail className="w-7 h-7" />
          </div>

          <div className="text-xs font-mono text-[#A6B0C3] uppercase tracking-wider mb-2">
            Direct Personal Email
          </div>

          <a
            href={`mailto:${contact.email}`}
            className="text-xl sm:text-2xl font-bold font-mono text-[#F5F7FB] hover:text-[#4F7CFF] transition-colors break-all inline-block mb-6"
            aria-label={`Send direct email to ${contact.email}`}
          >
            {contact.email}
          </a>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4F7CFF] hover:bg-[#3D69E6] text-white text-xs font-semibold tracking-wide transition-all shadow-md hover:shadow-lg hover:shadow-[#4F7CFF]/25 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Compose Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#101827] hover:bg-[#1E2B45] text-[#F5F7FB] border border-[#293244] hover:border-[#4F7CFF] text-xs font-semibold transition-all cursor-pointer"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#10B981]" />
                  <span className="text-[#10B981]">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#A6B0C3]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Compact Social Icon Row */}
          <div className="mt-8 pt-6 border-t border-[#293244]">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#A6B0C3]/70 mb-3">
              Direct Social Profiles
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* GitHub */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#101827] border border-[#293244] hover:border-[#4F7CFF] text-[#A6B0C3] hover:text-[#F5F7FB] transition-all"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#101827] border border-[#293244] hover:border-[#0A66C2] text-[#A6B0C3] hover:text-[#0A66C2] transition-all"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#101827] border border-[#293244] hover:border-[#E1306C] text-[#A6B0C3] hover:text-[#E1306C] transition-all"
                title="Instagram"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#101827] border border-[#293244] hover:border-[#1877F2] text-[#A6B0C3] hover:text-[#1877F2] transition-all"
                title="Facebook"
                aria-label="Facebook Profile"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Threads */}
              <a
                href={socialLinks.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#101827] border border-[#293244] hover:border-[#F5F7FB] text-[#A6B0C3] hover:text-[#F5F7FB] transition-all"
                title="Threads"
                aria-label="Threads Profile"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.186 24C5.466 24 0 18.574 0 11.905 0 5.236 5.466 0 12.186 0c6.643 0 11.99 5.236 12.186 11.855h-2.585c-.196-5.236-4.524-9.33-9.601-9.33-5.289 0-9.601 4.29-9.601 9.38 0 5.091 4.312 9.381 9.601 9.381 3.524 0 6.643-1.898 8.232-4.786l2.196 1.396C20.446 21.677 16.574 24 12.186 24zm4.185-11.458c-.147-3.064-2.078-4.836-4.622-4.836-2.794 0-4.862 2.147-4.862 5.041 0 3.015 2.019 5.091 4.96 5.091 1.765 0 3.328-.833 4.215-2.255l2.05 1.373c-1.373 2.157-3.676 3.407-6.265 3.407-4.402 0-7.5-3.21-7.5-7.611 0-4.451 3.147-7.612 7.45-7.612 3.922 0 6.863 2.671 7.06 6.955l-2.486.447z" />
                </svg>
              </a>

              {/* Google Search Profile */}
              <a
                href={socialLinks.googleSearchProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#101827] border border-[#293244] hover:border-[#4285F4] text-[#A6B0C3] hover:text-[#4285F4] transition-all"
                title="Google Search Profile"
                aria-label="Google Search Profile"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
