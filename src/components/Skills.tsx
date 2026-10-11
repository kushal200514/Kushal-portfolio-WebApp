"use client";

import React, { useState } from "react";
import {
  Code2,
  Server,
  Layout,
  Database,
  Wrench,
  Layers,
  Sparkles,
  Terminal,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoryIcons: Record<string, React.ElementType> = {
    "Programming Languages": Code2,
    "Frontend Engineering": Layout,
    "Backend & Systems Architecture": Server,
    "Databases & Cloud Infrastructure": Database,
    "Engineering Tools & Libraries": Wrench,
  };

  const filteredCategories = PORTFOLIO_DATA.skills.filter((cat) => {
    if (selectedCategory === "All") return true;
    return cat.title.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <section id="skills" className="py-24 border-b border-[#1e2433] bg-[#07080b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1e2433]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12151e] border border-[#232838] text-[11px] font-mono tracking-widest uppercase text-[#d4ff00] mb-3">
              <Terminal className="w-3.5 h-3.5 text-[#d4ff00]" />
              TECHNICAL STACK // ENGINEERING ARSENAL
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#f8fafc]">
              SKILLS &amp; ARCHITECTURAL TOOLS
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mt-2 font-mono">
              Practical competencies grounded in production codebases, hackathon prototypes, and coursework. No arbitrary percentage bars.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-[#0d0f15] p-1.5 border border-[#1e2433]">
            {["All", "Languages", "Frontend", "Backend", "Databases", "Tools"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                className={`px-3 py-1.5 text-xs font-mono transition-colors ${
                  selectedCategory === tab
                    ? "bg-[#d4ff00] text-[#07080b] font-bold"
                    : "text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#171b26]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.title] || Layers;

            return (
              <div
                key={cat.title}
                className="bg-[#0c0e14] border border-[#1e2433] hover:border-[#2a3347] transition-all p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1e2433]">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-[#12151e] border border-[#232838] group-hover:border-[#d4ff00]/50 transition-colors">
                        <Icon className="w-4 h-4 text-[#d4ff00]" />
                      </div>
                      <h3 className="font-bold text-sm text-[#f8fafc] tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-[#64748b]">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs text-[#94a3b8] mb-5 font-mono leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 bg-[#07080b] border border-[#1e2433] hover:border-[#38bdf8]/40 transition-colors flex flex-col gap-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#f8fafc]">
                            {skill.name}
                          </span>
                        </div>
                        {skill.context && (
                          <span className="text-[11px] text-[#94a3b8] leading-tight">
                            {skill.context}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#1e2433]/60 flex items-center justify-between text-[10px] font-mono text-[#64748b]">
                  <span>APPLIED IN REAL CODE</span>
                  <span className="text-[#d4ff00]">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
