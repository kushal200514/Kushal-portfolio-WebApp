"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, FileText } from "lucide-react";
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#1e2433] bg-[#07080b] py-12 font-mono text-xs text-[#94a3b8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#1e2433]">
          {/* Logo & positioning */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-[#0d0f15] border border-[#232838]">
              <span className="font-bold text-[#d4ff00]">KS</span>
            </div>
            <div>
              <span className="font-bold text-[#f8fafc] text-sm block">
                KUSHAL S.
              </span>
              <span className="text-[10px] text-[#64748b]">
                Full Stack Developer // CMR University &apos;28
              </span>
            </div>
          </div>

          {/* Socials & Verified Links */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PORTFOLIO_DATA.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cbd5e1] hover:text-[#38bdf8] flex items-center gap-1.5 transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PORTFOLIO_DATA.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cbd5e1] hover:text-[#f8fafc] flex items-center gap-1.5 transition-colors"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={PORTFOLIO_DATA.profile.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cbd5e1] hover:text-[#f59e0b] flex items-center gap-1.5 transition-colors"
            >
              <LeetCodeIcon className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>LeetCode</span>
            </a>

            <button
              onClick={onOpenResume}
              className="text-[#d4ff00] hover:underline flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume [PDF]</span>
            </button>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2 bg-[#0d0f15] hover:bg-[#161a24] text-[#cbd5e1] hover:text-[#d4ff00] border border-[#1e2433] transition-colors"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#64748b]">
          <div>
            <span>© 2026 Kushal S. All rights reserved.</span>
            <span className="mx-2">·</span>
            <span>Target Domain: <strong className="text-[#94a3b8]">kushalcreates.online</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#d4ff00] inline-block" />
            <span>Built with Next.js 16, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
