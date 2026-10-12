"use client";

import React from "react";
import { Code, ExternalLink, ShieldCheck, Binary, Cpu, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ProblemSolving() {
  const dsaData = PORTFOLIO_DATA.problemSolving;

  return (
    <section id="dsa" className="py-24 border-b border-[#1e2433] bg-[#07080b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1e2433]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12151e] border border-[#232838] text-[11px] font-mono tracking-widest uppercase text-[#f59e0b] mb-3">
              <Code className="w-3.5 h-3.5 text-[#f59e0b]" />
              ALGORITHMIC PRACTICE // TIME &amp; SPACE COMPLEXITY
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#f8fafc]">
              PROBLEM SOLVING &amp; DSA
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mt-2 font-mono">
              Algorithmic problem-solving across LeetCode &amp; CodeChef. Grounded in computational complexity and rigorous data structures.
            </p>
          </div>

          {/* Action Link to LeetCode */}
          <a
            href={dsaData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-[#07080b] font-mono font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Visit LeetCode Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Content Box */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Stat Card & Transparency Policy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0c0e14] border border-[#1e2433] p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-[#1e2433] text-xs font-mono">
                <span className="text-[#94a3b8]">PORTFOLIO PROFILE</span>
                <span className="text-[#f59e0b] font-bold">@kushal1405</span>
              </div>

              <div className="py-6 space-y-1">
                <div className="text-4xl sm:text-5xl font-black text-[#f8fafc]">
                  {dsaData.reportedStats}
                </div>
                <div className="text-xs font-mono text-[#94a3b8]">
                  LeetCode &amp; CodeChef Practice
                </div>
              </div>

              {/* Coursework Cross-link */}
              <div className="p-3 bg-[#07080b] border border-[#1e2433] space-y-1 text-xs font-mono">
                <div className="text-[#38bdf8] font-bold">ACADEMIC / COURSEWORK GROUNDING:</div>
                <div className="text-[#cbd5e1]">
                  Completed -Striver A2Z Sheet For DSA
                </div>
              </div>

              {/* Transparency Notice */}
              <div className="mt-4 p-3 bg-[#131722] border-l-2 border-[#f59e0b] border-y border-r border-[#1e2433] text-[11px] font-mono text-[#cbd5e1] leading-relaxed">
                <span className="text-[#f59e0b] font-bold block mb-0.5">TRANSPARENCY NOTE:</span>
                {dsaData.verificationNote}
              </div>

              <div className="mt-6 pt-4 border-t border-[#1e2433] flex items-center justify-between text-xs font-mono">
                <span className="text-[#64748b]">STATUS:</span>
                <a
                  href={dsaData.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f59e0b] hover:underline flex items-center gap-1"
                >
                  Verify Live on LeetCode <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Key Problem Patterns Practiced */}
          <div className="lg:col-span-7 bg-[#0c0e14] border border-[#1e2433] p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#f8fafc] mb-2">
              Algorithmic Patterns &amp; Paradigms Practiced
            </h3>
            <p className="text-xs font-mono text-[#94a3b8] mb-6">
              Core conceptual focus areas applied during problem-solving sessions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {dsaData.topics.map((topic, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-[#07080b] border border-[#1e2433] hover:border-[#2a3347] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 bg-[#f59e0b]" />
                    <h4 className="text-xs font-mono font-bold text-[#f8fafc]">
                      {topic.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                    {topic.focus}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#1e2433] flex items-center justify-between text-xs font-mono text-[#94a3b8]">
              <span>CORE LANGUAGE FOR DSA:</span>
              <span className="text-[#f8fafc] font-bold">  Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
