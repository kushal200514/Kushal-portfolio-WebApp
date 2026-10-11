"use client";

import React from "react";
import { Award, GraduationCap, BookOpen, Calendar, CheckCircle2, Trophy, Star } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function AchievementsEducation() {
  const { education, achievements } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 border-b border-[#1e2433] bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12151e] border border-[#232838] text-[11px] font-mono tracking-widest uppercase text-[#38bdf8] mb-3">
                <GraduationCap className="w-3.5 h-3.5 text-[#38bdf8]" />
                ACADEMIC FOUNDATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#f8fafc]">
                EDUCATION &amp; DEGREE
              </h2>
            </div>

            <div className="bg-[#0c0e14] border border-[#1e2433] p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#38bdf8]" />

              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc]">
                    {education.institution}
                  </h3>
                  <div className="text-sm font-mono text-[#cbd5e1] mt-1">
                    {education.degree}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-mono font-black text-[#d4ff00]">
                    {education.cgpa}
                  </div>
                  <div className="text-[10px] font-mono text-[#94a3b8]">
                    CUMULATIVE GPA
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#94a3b8] py-2 border-y border-[#1e2433]">
                <Calendar className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>{education.period}</span>
                <span className="text-[#64748b]">·</span>
                <span className="text-[#10b981]">{education.status}</span>
              </div>

              <div>
                <div className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider mb-3">
                  Core Computer Science Coursework:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {education.coursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-[#07080b] border border-[#1e2433] flex items-center gap-2 text-xs text-[#cbd5e1]"
                    >
                      <BookOpen className="w-3 h-3 text-[#38bdf8] shrink-0" />
                      <span className="truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Achievements */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12151e] border border-[#232838] text-[11px] font-mono tracking-widest uppercase text-[#d4ff00] mb-3">
                <Trophy className="w-3.5 h-3.5 text-[#d4ff00]" />
                COMPETITIVE PEDIGREE
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#f8fafc]">
                HONORS &amp; ACHIEVEMENTS
              </h2>
            </div>

            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="bg-[#0c0e14] border border-[#1e2433] p-5 hover:border-[#2a3347] transition-all space-y-2"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-[#d4ff00] shrink-0" />
                      <h3 className="text-sm font-bold text-[#f8fafc]">
                        {ach.title}
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 bg-[#171b26] border border-[#232838] text-[10px] font-mono text-[#d4ff00] shrink-0">
                      {ach.highlight}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#94a3b8]">
                    <span>{ach.issuer}</span>
                    <span className="text-[#64748b]">·</span>
                    <span>{ach.date}</span>
                  </div>

                  <p className="text-xs text-[#cbd5e1] leading-relaxed pt-1">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
