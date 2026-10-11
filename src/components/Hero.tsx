"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowDownRight,
  FileText,
  Code,
  Layers,
  Cpu,
  Activity,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [bengaluruTime, setBengaluruTime] = useState("");
  const [activeTab, setActiveTab] = useState<"runtime" | "doctrine" | "vitals">("runtime");
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setBengaluruTime(new Intl.DateTimeFormat("en-IN", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[#1e2433] tech-grid-bg overflow-hidden"
    >
      {/* Background radial accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4ff00]/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top telemetry status line */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 mb-8 border-b border-[#1e2433]/70 font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4ff00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d4ff00]"></span>
            </span>
            <span className="text-[#f8fafc] font-semibold tracking-wide">
              SYSTEM ONLINE
            </span>
            <span className="text-[#64748b] hidden sm:inline">|</span>
            <span className="text-[#94a3b8] hidden sm:inline">
              {PORTFOLIO_DATA.profile.availability}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#94a3b8]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>BENGALURU: {bengaluruTime || "17:30 IST"}</span>
            </div>
            <span className="text-[#64748b] hidden md:inline">|</span>
            <span className="hidden md:inline text-[#d4ff00]">
              CMR UNIV · CGPA 8.7
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12151e] border border-[#232838] text-[11px] font-mono tracking-widest uppercase text-[#cbd5e1]">
              <span className="w-1.5 h-1.5 bg-[#d4ff00]" />
              FULL STACK DEVELOPER // SOFTWARE ENGINEER
            </div>

            {/* Oversized editorial headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.03] text-[#f8fafc]">
              I BUILD <br />
              <span className="text-[#d4ff00]">DIGITAL SYSTEMS</span> <br />
              THAT ACTUALLY WORK.
            </h1>

            {/* Authentic, human description */}
            <p className="text-base sm:text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
              Hey, I&apos;m <span className="text-[#f8fafc] font-semibold">Kushal S</span>.
              A Computer Science undergraduate at CMR University, Bengaluru (&apos;28) and former
              Full Stack Intern at <span className="text-[#f8fafc]">ATS-Technologies</span>.
              I engineer end-to-end web applications, resilient REST APIs, and predictive AI pipelines
              with high attention to system security and performance.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#d4ff00] hover:bg-[#c2ea00] text-[#07080b] font-mono font-bold text-xs uppercase tracking-wider transition-all duration-150 shadow-lg shadow-[#d4ff00]/10 active:translate-y-0.5"
              >
                <span>Explore Selected Work</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#0d0f15] hover:bg-[#161a24] text-[#f8fafc] hover:text-[#d4ff00] border border-[#232838] hover:border-[#d4ff00]/60 font-mono text-xs uppercase tracking-wider transition-colors active:translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-[#d4ff00]" />
                <span>View Resume [PDF]</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-[#0d0f15] hover:bg-[#161a24] text-[#94a3b8] hover:text-[#f8fafc] border border-[#1e2433] font-mono text-xs transition-colors"
                title="Copy Kushal's email to clipboard"
              >
                <span>{copiedEmail ? "✓ Copied Email!" : "Copy Email"}</span>
              </button>
            </div>

            {/* Direct Verified Profile Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#94a3b8]">
              <span className="text-[#64748b]">VERIFIED LINKS:</span>

              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#cbd5e1] hover:text-[#38bdf8] transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 text-[#64748b]" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#cbd5e1] hover:text-[#f8fafc] transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 text-[#64748b]" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#cbd5e1] hover:text-[#f59e0b] transition-colors"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span>LeetCode</span>
                <ExternalLink className="w-2.5 h-2.5 text-[#64748b]" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Portrait & Architectural Telemetry Showcase */}
          <div className="lg:col-span-5 space-y-4">
            {/* Engineer Profile Card */}
            <div className="p-3.5 bg-[#0d0f15] border border-[#232838] flex items-center gap-4 relative overflow-hidden group">
              <div className="relative w-16 h-20 sm:w-20 sm:h-24 shrink-0 bg-[#07080b] border border-[#d4ff00] overflow-hidden">
                <Image
                  src="/kushal-portrait.png"
                  alt="Kushal S — Software Engineer"
                  fill
                  sizes="96px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              <div className="flex-1 min-w-0 font-mono">
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                  </span>
                  <span className="text-xs font-bold text-[#f8fafc] truncate">
                    KUSHAL S.
                  </span>
                  <span className="text-[10px] text-[#d4ff00] bg-[#d4ff00]/10 px-1.5 py-0.5 border border-[#d4ff00]/30 ml-auto shrink-0">
                    CMR &apos;28
                  </span>
                </div>

                <div className="text-[11px] text-[#cbd5e1] truncate">
                  Full Stack Developer // SWE
                </div>

                <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-[#94a3b8] mt-1.5">
                  <span className="text-[#38bdf8]">CGPA 8.7/10</span>
                  <span className="text-[#64748b]">·</span>
                  <span>ATS-Tech Intern</span>
                  <span className="text-[#64748b]">·</span>
                  <span className="text-[#f59e0b]">IoTopia Top 10</span>
                </div>
              </div>
            </div>

            <div className="relative bg-[#0d0f15] border border-[#232838] p-5 shadow-2xl">
              {/* Header bar */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#1e2433]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#ef4444] inline-block" />
                  <span className="w-2.5 h-2.5 bg-[#f59e0b] inline-block" />
                  <span className="w-2.5 h-2.5 bg-[#10b981] inline-block" />
                  <span className="ml-2 font-mono text-[11px] text-[#94a3b8] tracking-wider uppercase">
                    KS // CORE MONITOR
                  </span>
                </div>
                <div className="font-mono text-[10px] text-[#38bdf8] bg-[#38bdf8]/10 px-2 py-0.5 border border-[#38bdf8]/20">
                  HTTP/2 200 OK
                </div>
              </div>

              {/* Tab Selector */}
              <div className="grid grid-cols-3 gap-1 mb-4 bg-[#07080b] p-1 border border-[#1e2433]">
                <button
                  onClick={() => setActiveTab("runtime")}
                  className={`py-1.5 text-[11px] font-mono transition-colors ${
                    activeTab === "runtime"
                      ? "bg-[#171b26] text-[#d4ff00] font-bold"
                      : "text-[#94a3b8] hover:text-[#f8fafc]"
                  }`}
                >
                  [TELEMETRY]
                </button>
                <button
                  onClick={() => setActiveTab("doctrine")}
                  className={`py-1.5 text-[11px] font-mono transition-colors ${
                    activeTab === "doctrine"
                      ? "bg-[#171b26] text-[#d4ff00] font-bold"
                      : "text-[#94a3b8] hover:text-[#f8fafc]"
                  }`}
                >
                  [PHILOSOPHY]
                </button>
                <button
                  onClick={() => setActiveTab("vitals")}
                  className={`py-1.5 text-[11px] font-mono transition-colors ${
                    activeTab === "vitals"
                      ? "bg-[#171b26] text-[#d4ff00] font-bold"
                      : "text-[#94a3b8] hover:text-[#f8fafc]"
                  }`}
                >
                  [VITALS]
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "runtime" && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-[#07080b] border border-[#1e2433] space-y-2">
                    <div className="flex justify-between text-[#94a3b8]">
                      <span>Primary Stack:</span>
                      <span className="text-[#f8fafc]">React · Node · FastAPI · Mongo</span>
                    </div>
                    <div className="flex justify-between text-[#94a3b8]">
                      <span>Database Engines:</span>
                      <span className="text-[#f8fafc]">MongoDB · PostgreSQL · DynamoDB</span>
                    </div>
                    <div className="flex justify-between text-[#94a3b8]">
                      <span>Cloud & Infra:</span>
                      <span className="text-[#38bdf8]">AWS Bedrock · IoT Core · Docker</span>
                    </div>
                    <div className="flex justify-between text-[#94a3b8]">
                      <span>Security Primitives:</span>
                      <span className="text-[#d4ff00]">JWT · CSPRNG Tokens · OAuth2</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 bg-[#07080b] border border-[#1e2433]">
                      <div className="text-[10px] text-[#64748b]">BLOOD LOGISTICS</div>
                      <div className="text-xs font-bold text-[#f8fafc] mt-0.5">Khoon Live Platform</div>
                      <div className="text-[10px] text-[#10b981] mt-1">✓ Netlify + REST APIs</div>
                    </div>
                    <div className="p-2.5 bg-[#07080b] border border-[#1e2433]">
                      <div className="text-[10px] text-[#64748b]">SURGE PREDICTOR</div>
                      <div className="text-xs font-bold text-[#f8fafc] mt-0.5">AtmosAi Engine</div>
                      <div className="text-[10px] text-[#38bdf8] mt-1">✓ LightGBM + Bedrock</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "doctrine" && (
                <div className="space-y-2.5 font-mono text-xs text-[#cbd5e1] p-1">
                  <div className="flex items-start gap-2 p-2 bg-[#07080b] border border-[#1e2433]">
                    <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0 mt-0.5" />
                    <p className="text-[11px] leading-relaxed">
                      <strong className="text-[#f8fafc]">Deterministic Logic:</strong> Clean, tested
                      APIs and predictable schema contracts over buzzword-heavy bloat.
                    </p>
                  </div>
                  <div className="flex items-start gap-2 p-2 bg-[#07080b] border border-[#1e2433]">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <p className="text-[11px] leading-relaxed">
                      <strong className="text-[#f8fafc]">Zero-Assumption Security:</strong> Always validate
                      tokens, sanitize payloads, and minimize persistent sensitive storage.
                    </p>
                  </div>
                  <div className="flex items-start gap-2 p-2 bg-[#07080b] border border-[#1e2433]">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                    <p className="text-[11px] leading-relaxed">
                      <strong className="text-[#f8fafc]">User-Centered Speed:</strong> Sub-second response
                      times, semantic HTML accessibility, and responsive layouts across all viewports.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "vitals" && (
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-3 bg-[#07080b] border border-[#1e2433] space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-[#64748b]">Institution:</span>
                      <span className="text-[#f8fafc]">CMR University, Bengaluru</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748b]">Degree:</span>
                      <span className="text-[#f8fafc]">B.Tech in CSE (2024–2028)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748b]">Cumulative GPA:</span>
                      <span className="text-[#d4ff00] font-bold">8.7 / 10.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748b]">Past Internship:</span>
                      <span className="text-[#cbd5e1]">ATS-Technologies (Full Stack)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748b]">Hackathon Rank:</span>
                      <span className="text-[#38bdf8]">Top 10 Team @ IoTopia 2025</span>
                    </div>
                  </div>

                  <a
                    href="mailto:kushalsrinivas883@gmail.com"
                    className="block text-center p-2.5 bg-[#12151e] hover:bg-[#1a202e] border border-[#232838] hover:border-[#d4ff00] text-xs text-[#d4ff00] font-bold tracking-wider transition-colors"
                  >
                    Direct: kushalsrinivas883@gmail.com
                  </a>
                </div>
              )}

              {/* Terminal footer status */}
              <div className="mt-4 pt-3 border-t border-[#1e2433] flex items-center justify-between text-[10px] font-mono text-[#64748b]">
                <span>kushalcreates.online</span>
                <span className="text-[#d4ff00]">VERIFIED REPOSITORY CODES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
