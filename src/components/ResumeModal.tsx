"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  X,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Briefcase,
  Award,
  Mail,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#07080b]/90 backdrop-blur-md p-3 sm:p-6 lg:p-10 flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0d0f15] border border-[#232838] max-w-5xl w-full max-h-[94vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#1e2433] bg-[#090b10]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#12151e] border border-[#232838]">
              <FileText className="w-5 h-5 text-[#d4ff00]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#f8fafc]">
                Kushal S — Official Curriculum Vitae
              </h3>
              <p className="text-xs font-mono text-[#94a3b8]">
                B.Tech CSE · CMR University &apos;28 · CGPA 8.7/10
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Kushal_S_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#d4ff00] hover:bg-[#c2ea00] text-[#07080b] font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171b26] hover:bg-[#202636] text-[#cbd5e1] border border-[#232838] text-xs font-mono transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1a202c] border border-[#1e2433] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content: Split Screen Preview & Key Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden min-h-[480px]">
          {/* Left: Summary Dossier */}
          <div className="lg:col-span-4 p-5 sm:p-6 bg-[#07080b] border-r border-[#1e2433] overflow-y-auto space-y-6 font-mono text-xs">
            <div className="flex items-center gap-3.5 pb-4 border-b border-[#1e2433]">
              <div className="relative w-14 h-16 shrink-0 bg-[#07080b] border border-[#d4ff00] overflow-hidden">
                <Image
                  src="/kushal-portrait.png"
                  alt="Kushal S"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-[#f8fafc]">
                  Kushal S
                </div>
                <div className="text-[11px] text-[#d4ff00]">
                  Full Stack SWE Intern
                </div>
                <div className="text-[10px] text-[#94a3b8]">
                  CMR Univ &apos;28 · CGPA 8.7
                </div>
              </div>
            </div>

            <div>
              <span className="text-[10px] text-[#64748b] uppercase tracking-wider block">
                POSITIONING
              </span>
              <div className="text-sm font-bold text-[#f8fafc] mt-0.5">
                Full Stack Developer
              </div>
              <p className="text-[#94a3b8] text-[11px] font-sans mt-1">
                Seeking Software Engineering &amp; Full Stack Internships for 2025/2026.
              </p>
            </div>

            <div className="space-y-2 border-t border-[#1e2433] pt-4">
              <span className="text-[10px] text-[#64748b] uppercase tracking-wider block">
                VERIFIED HIGHLIGHTS
              </span>
              <div className="flex items-start gap-2 text-[#cbd5e1]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ff00] shrink-0 mt-0.5" />
                <span>CGPA 8.7/10 @ CMR University</span>
              </div>
              <div className="flex items-start gap-2 text-[#cbd5e1]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 mt-0.5" />
                <span>Top 10 Team @ IoTopia Hackathon 2025</span>
              </div>
              <div className="flex items-start gap-2 text-[#cbd5e1]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#a855f7] shrink-0 mt-0.5" />
                <span>ATS-Technologies Full Stack Intern (OnSite)</span>
              </div>
              <div className="flex items-start gap-2 text-[#cbd5e1]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b] shrink-0 mt-0.5" />
                <span>50+ DSA Solved (LeetCode &amp; CodeChef)</span>
              </div>
            </div>

            <div className="space-y-2 border-t border-[#1e2433] pt-4">
              <span className="text-[10px] text-[#64748b] uppercase tracking-wider block">
                CONTACT DETAILS
              </span>
              <div className="text-[#cbd5e1] break-all">
                {PORTFOLIO_DATA.profile.email}
              </div>
              <div className="text-[#94a3b8]">
                {PORTFOLIO_DATA.profile.phone}
              </div>
              <div className="text-[#64748b]">
                Bengaluru, Karnataka, India
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/resume.pdf"
                download="Kushal_S_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#d4ff00] text-[#07080b] font-bold uppercase tracking-wider"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right: PDF Viewer Frame */}
          <div className="lg:col-span-8 bg-[#12151e] relative min-h-[420px] flex flex-col">
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
              title="Kushal S Resume Document"
              className="w-full flex-1 border-0 min-h-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
