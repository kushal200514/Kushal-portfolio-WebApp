"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Layers,
  Shield,
  Activity,
  Terminal,
  Server,
  Database,
  Cpu,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  FolderGit2,
} from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProject, setExpandedProject] = useState<string | null>("khoon");

  const categories = ["All", "Featured Systems", "Hackathon", "Full Stack", "AI & Cloud"];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Featured Systems") return project.featured;
    if (selectedCategory === "Hackathon") return project.isHackathon || project.category === "Hackathon";
    if (selectedCategory === "Full Stack") return project.category === "Full Stack";
    if (selectedCategory === "AI & Cloud") return project.category === "AI & Cloud";
    return true;
  });

  return (
    <section id="work" className="py-24 border-b border-[#1e2433] bg-[#07080b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1e2433]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12151e] border border-[#232838] text-[11px] font-mono tracking-widest uppercase text-[#d4ff00] mb-3">
              <span className="w-1.5 h-1.5 bg-[#d4ff00]" />
              CASE STUDIES // PRODUCTION ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#f8fafc]">
              SELECTED WORK &amp; ENGINEERING SYSTEMS
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mt-2 font-mono">
              Deep-dive case studies into actual applications, event-driven pipelines, and security-tested codebases.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-[#0d0f15] p-1.5 border border-[#1e2433]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#d4ff00] text-[#07080b] font-bold"
                    : "text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#171b26]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Hackathon Workspace Notice / Reserved Live Space */}
        <div className="mt-8 p-4 bg-[#0d0f15] border-l-4 border-l-[#d4ff00] border border-[#1e2433] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#d4ff00] shrink-0 mt-0.5" />
            <div>
              <span className="text-[#f8fafc] font-bold">HACKATHON LIVE SHOWCASE WORKSPACE:</span>
              <p className="text-[#94a3b8] mt-0.5">
                Active dedicated slot configured for hackathon submissions (IoTopia 2025 Smart Cities, Google Cloud Gen AI Demystifier, and AWS Environmental Hacks AtmosAi).
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="px-2.5 py-1 bg-[#171b26] text-[#38bdf8] border border-[#38bdf8]/30 text-[11px]">
              LIVE SLOTS ALLOCATED
            </span>
          </div>
        </div>

        {/* Project Case Studies List */}
        <div className="mt-12 space-y-12">
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedProject === project.id;

            return (
              <article
                key={project.id}
                className="bg-[#0c0e14] border border-[#1e2433] hover:border-[#2b3447] transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent Top Bar */}
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: project.accentColor || "#d4ff00" }}
                />

                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Top Metadata Line */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-[#1e2433]/80 font-mono text-xs">
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-black text-[#64748b]">
                        0{index + 1} {"//"}
                      </span>
                      <span className="text-[#f8fafc] font-bold text-sm">
                        {project.title.toUpperCase()}
                      </span>
                      {project.badge && (
                        <span
                          className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider"
                          style={{
                            color: project.accentColor || "#d4ff00",
                            backgroundColor: `${project.accentColor}18`,
                            border: `1px solid ${project.accentColor}40`,
                          }}
                        >
                          {project.badge}
                        </span>
                      )}
                      {project.isHackathon && (
                        <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/30">
                          {project.hackathonName || "Hackathon Project"}
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#d4ff00] hover:bg-[#c2ea00] text-[#07080b] font-bold text-xs uppercase tracking-wider transition-colors"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171b26] hover:bg-[#202636] text-[#f8fafc] border border-[#232838] hover:border-[#3f4d6b] text-xs uppercase tracking-wider transition-colors"
                      >
                        <GitHubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3 h-3 text-[#94a3b8]" />
                      </a>
                    </div>
                  </div>

                  {/* Main Grid: Info + Technical Preview */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Problem, Solution, Scope */}
                    <div className="lg:col-span-7 space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc] tracking-tight">
                          {project.tagline}
                        </h3>
                      </div>

                      {/* Problem Statement Card */}
                      <div className="p-4 bg-[#07080b] border-l-2 border-[#ef4444] border-y border-r border-[#1e2433]">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#ef4444] font-bold mb-1 uppercase">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>The Engineering Problem</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* Engineered Solution */}
                      <div className="p-4 bg-[#07080b] border-l-2 border-[#d4ff00] border-y border-r border-[#1e2433]">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#d4ff00] font-bold mb-1 uppercase">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>The Architectural Solution</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      {/* Verifiable Contributions */}
                      <div>
                        <div className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider mb-2.5">
                          Verified Implementation Highlights:
                        </div>
                        <ul className="space-y-2">
                          {project.contributions.map((item, cIdx) => (
                            <li
                              key={cIdx}
                              className="flex items-start gap-2.5 text-xs text-[#cbd5e1] leading-normal"
                            >
                              <span className="w-1.5 h-1.5 rounded-none bg-[#38bdf8] shrink-0 mt-1.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      <div>
                        <div className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider mb-2">
                          Technology Stack:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 bg-[#131722] border border-[#232838] text-[11px] font-mono text-[#cbd5e1]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Architectural Simulation / Interactive Visualization */}
                    <div className="lg:col-span-5 bg-[#07080b] border border-[#1e2433] p-5 font-mono text-xs space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-[#1e2433]">
                        <span className="text-[11px] text-[#94a3b8] uppercase tracking-wider">
                          ARCHITECTURE BLUEPRINT
                        </span>
                        <span className="text-[10px] text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 border border-[#10b981]/20">
                          COMPILED
                        </span>
                      </div>

                      {/* Custom visualizer tailored per project */}
                      {project.id === "khoon" && (
                        <div className="space-y-3">
                          <div className="p-3 bg-[#0d0f15] border border-[#1e2433] space-y-2">
                            <div className="text-[10px] text-[#ef4444] font-bold">FLOW: CLIENT → API → ATLAS</div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Auth Method:</span>
                              <span className="text-[#f8fafc]">JWT Token in Headers</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>API Endpoints:</span>
                              <span className="text-[#38bdf8]">/api/blood-bank/search</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Database Cluster:</span>
                              <span className="text-[#f8fafc]">MongoDB Atlas (M0/M10)</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Hosting Target:</span>
                              <span className="text-[#10b981]">Netlify CDN (Production)</span>
                            </div>
                          </div>

                          <div className="p-2.5 bg-[#12151e] border border-[#232838] text-[11px] text-[#94a3b8]">
                            &ldquo;Emergency workflows prioritize critical blood groups (O-, AB-) with indexed availability queries, minimizing latency under load.&rdquo;
                          </div>
                        </div>
                      )}

                      {project.id === "atmosai" && (
                        <div className="space-y-3">
                          <div className="p-3 bg-[#0d0f15] border border-[#1e2433] space-y-2">
                            <div className="text-[10px] text-[#38bdf8] font-bold">AWS BEDROCK SURGE ENGINE</div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Model Pipeline:</span>
                              <span className="text-[#f8fafc]">LightGBM → Claude 3.5 Sonnet</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Telemetry Inputs:</span>
                              <span className="text-[#f8fafc]">OpenAQ + Open-Meteo REST</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Storage Engine:</span>
                              <span className="text-[#38bdf8]">AWS DynamoDB (Time Series)</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Deterministic Schema:</span>
                              <span className="text-[#d4ff00]">Structured JSON output</span>
                            </div>
                          </div>

                          <div className="p-2.5 bg-[#12151e] border border-[#232838] text-[11px] text-[#94a3b8]">
                            &ldquo;Transforms passive AQI indices into 3-hour advance warning cards tailored for schools, transit workers, and respiratory patients.&rdquo;
                          </div>
                        </div>
                      )}

                      {project.id === "codebridge" && (
                        <div className="space-y-3">
                          <div className="p-3 bg-[#0d0f15] border border-[#1e2433] space-y-2">
                            <div className="text-[10px] text-[#d4ff00] font-bold">EPHEMERAL RELAY HANDSHAKE</div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Session Key:</span>
                              <span className="text-[#f8fafc]">CSPRNG 6-Digit Code</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Pairing QR:</span>
                              <span className="text-[#f8fafc]">Dynamic SVG QR Matrix</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Transfer Token:</span>
                              <span className="text-[#38bdf8]">Single-Use Cryptographic Nonce</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Retention Policy:</span>
                              <span className="text-[#ef4444]">Zero Persistence / Shred on Complete</span>
                            </div>
                          </div>

                          <div className="p-2.5 bg-[#12151e] border border-[#232838] text-[11px] text-[#94a3b8]">
                            &ldquo;Sender approval required prior to byte transfer. Strict per-IP rate-limiting eliminates brute-force pairing vectors.&rdquo;
                          </div>
                        </div>
                      )}

                      {project.id === "twix-agent" && (
                        <div className="space-y-3">
                          <div className="p-3 bg-[#0d0f15] border border-[#1e2433] space-y-2">
                            <div className="text-[10px] text-[#a855f7] font-bold">PIPELINE: RAW LOG → X POST</div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Inference:</span>
                              <span className="text-[#f8fafc]">OpenAI Responses API</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Audit Store:</span>
                              <span className="text-[#f8fafc]">Supabase PostgreSQL</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>API Target:</span>
                              <span className="text-[#38bdf8]">Twitter / X API v2</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Safety Gate:</span>
                              <span className="text-[#10b981]">Human-in-the-Loop Review UI</span>
                            </div>
                          </div>

                          <div className="p-2.5 bg-[#12151e] border border-[#232838] text-[11px] text-[#94a3b8]">
                            &ldquo;Extracts verified engineering accomplishments from unstructured scratchpad notes without hallucinations or fabricated claims.&rdquo;
                          </div>
                        </div>
                      )}

                      {project.id === "legal-demystifier" && (
                        <div className="space-y-3">
                          <div className="p-3 bg-[#0d0f15] border border-[#1e2433] space-y-2">
                            <div className="text-[10px] text-[#f59e0b] font-bold">GOOGLE CLOUD GEN AI PIPELINE</div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Problem Statement:</span>
                              <span className="text-[#f8fafc]">Demystifying Legal Documents</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Event:</span>
                              <span className="text-[#38bdf8]">Gen AI Exchange Hackathon 2025</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Partner:</span>
                              <span className="text-[#f8fafc]">Google Cloud × Hack2skill</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Result:</span>
                              <span className="text-[#10b981]">Certificate of Participation</span>
                            </div>
                          </div>

                          <div className="p-2.5 bg-[#12151e] border border-[#232838] text-[11px] text-[#94a3b8]">
                            &ldquo;Breaks down dense clauses, indemnity risks, and statutory commitments into human-actionable summaries.&rdquo;
                          </div>
                        </div>
                      )}

                      {project.id === "campus-connect" && (
                        <div className="space-y-3">
                          <div className="p-3 bg-[#0d0f15] border border-[#1e2433] space-y-2">
                            <div className="text-[10px] text-[#10b981] font-bold">CAMPUS ITEM RECOVERY SYSTEM</div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Workflow:</span>
                              <span className="text-[#f8fafc]">Post → Match → Claim → Verify</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Verification:</span>
                              <span className="text-[#38bdf8]">Ownership Proof Validation</span>
                            </div>
                            <div className="flex justify-between text-[#cbd5e1] text-[11px]">
                              <span>Stack:</span>
                              <span className="text-[#f8fafc]">React + Node.js + Express</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Technical repository commit link */}
                      <div className="pt-2 border-t border-[#1e2433] flex items-center justify-between text-[10px] text-[#64748b]">
                        <span className="flex items-center gap-1.5">
                          <FolderGit2 className="w-3.5 h-3.5 text-[#d4ff00]" />
                          <span>kushal200514/{project.id}</span>
                        </span>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#d4ff00] hover:underline"
                        >
                          View Code →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
