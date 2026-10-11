"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, ChevronRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-[#1e2433] bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1e2433]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12151e] border border-[#232838] text-[11px] font-mono tracking-widest uppercase text-[#a855f7] mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#a855f7]" />
              PROFESSIONAL BACKGROUND // INDUSTRY TRACK RECORD
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#f8fafc]">
              ENGINEERING EXPERIENCE
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mt-2 font-mono">
              Onsite full-stack development experience building responsive, client-facing business applications.
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-12 space-y-8">
          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0c0e14] border border-[#1e2433] p-6 sm:p-8 lg:p-10 relative overflow-hidden"
            >
              {/* Left Accent indicator */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#a855f7]" />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#1e2433]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 font-mono text-xs">
                    <span className="px-2.5 py-0.5 bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/30 font-bold uppercase">
                      {item.type}
                    </span>
                    <span className="text-[#64748b]">|</span>
                    <div className="flex items-center gap-1.5 text-[#cbd5e1]">
                      <Calendar className="w-3.5 h-3.5 text-[#38bdf8]" />
                      <span>{item.period}</span>
                    </div>
                    <span className="text-[#64748b]">|</span>
                    <div className="flex items-center gap-1.5 text-[#94a3b8]">
                      <MapPin className="w-3.5 h-3.5 text-[#ef4444]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#f8fafc] tracking-tight">
                    {item.role}
                  </h3>
                  <div className="text-base font-mono text-[#cbd5e1] mt-1 flex items-center gap-2">
                    <Building className="w-4 h-4 text-[#a855f7]" />
                    <span>{item.company}</span>
                    <span className="text-xs text-[#64748b]">(Recruitment, Payroll &amp; HR Services)</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 lg:max-w-xs justify-start lg:justify-end">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#131722] border border-[#232838] text-[11px] font-mono text-[#cbd5e1]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities & Verified Outcomes */}
              <div className="pt-6 space-y-4">
                <p className="text-sm text-[#cbd5e1] leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider">
                    Core Technical Responsibilities &amp; Outcomes:
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-3.5 bg-[#07080b] border border-[#1e2433] flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#a855f7] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#cbd5e1] leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
