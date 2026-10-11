"use client";

import React from "react";
import { Award, GraduationCap, Briefcase, Code, Sparkles, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ProofBar() {
  const highlights = [
    {
      icon: Award,
      title: "TOP 10 FINALIST",
      detail: "IoTopia 2025 National Hackathon",
      accent: "text-[#d4ff00]",
    },
    {
      icon: GraduationCap,
      title: "8.7 / 10 CGPA",
      detail: "CMR University (B.Tech CSE '28)",
      accent: "text-[#38bdf8]",
    },
    {
      icon: Briefcase,
      title: "FULL STACK INTERN",
      detail: "ATS-Technologies (HR/Staffing Portal)",
      accent: "text-[#a855f7]",
    },
    {
      icon: Code,
      title: "50+ DSA PROBLEMS",
      detail: "LeetCode & CodeChef (Reported)",
      accent: "text-[#f59e0b]",
    },
    {
      icon: Sparkles,
      title: "GOOGLE CLOUD GEN AI",
      detail: "Hack2skill Hackathon Prototype",
      accent: "text-[#38bdf8]",
    },
    {
      icon: ShieldCheck,
      title: "VERIFIED PORTFOLIO",
      detail: "Live Demo & Source Code on GitHub",
      accent: "text-[#10b981]",
    },
  ];

  return (
    <div className="border-b border-[#1e2433] bg-[#090b10] py-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-3 bg-[#0d0f15] border border-[#1e2433] hover:border-[#2a3347] transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <Icon className={`w-4 h-4 ${item.accent}`} />
                  <span className="text-[9px] font-mono text-[#64748b]">FACT #{idx + 1}</span>
                </div>
                <div>
                  <div className={`text-xs font-mono font-bold tracking-tight ${item.accent}`}>
                    {item.title}
                  </div>
                  <div className="text-[11px] text-[#94a3b8] truncate mt-0.5" title={item.detail}>
                    {item.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
