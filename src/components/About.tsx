"use client";

import React from "react";
import Image from "next/image";
import { Terminal, Check, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-[#1e2433] bg-[#07080b] relative tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait Showcase & Identity */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12151e] border border-[#232838] text-[11px] font-mono tracking-widest uppercase text-[#d4ff00]">
              <Terminal className="w-3.5 h-3.5 text-[#d4ff00]" />
              ABOUT // PERSPECTIVE &amp; IDENTITY
            </div>

            {/* Architectural Portrait Frame */}
            <div className="relative bg-[#0c0e14] border border-[#232838] p-3 shadow-2xl group overflow-hidden">
              {/* Corner tech brackets */}
              <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#d4ff00] z-10" />
              <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#d4ff00] z-10" />
              <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#d4ff00] z-10" />
              <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#d4ff00] z-10" />

              <div className="relative aspect-[4/5] w-full bg-[#07080b] overflow-hidden border border-[#1e2433]">
                <Image
                  src="/kushal-portrait.png"
                  alt="Kushal S — Full Stack Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Overlaid coordinate badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0c0e14]/90 backdrop-blur-md border border-[#232838] font-mono text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[#f8fafc] font-bold text-sm tracking-tight">KUSHAL S.</span>
                    <span className="text-[10px] text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 border border-[#10b981]/30">VERIFIED DEV</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#94a3b8]">
                    <MapPin className="w-3 h-3 text-[#ef4444]" />
                    <span>Bengaluru, India · CMR University &apos;28</span>
                  </div>
                  <div className="text-[10px] text-[#d4ff00]">
                    CGPA 8.6/10 · ATS-Technologies Intern
                  </div>
                </div>
              </div>

              {/* Technical status line */}
              <div className="mt-2.5 px-2 py-1.5 bg-[#07080b] border border-[#1e2433] flex items-center justify-between text-[10px] font-mono text-[#64748b]">
                <span>PROFILE AUTHENTICATED</span>
                <span className="text-[#38bdf8]">FULL STACK ENGINEER</span>
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="p-4 bg-[#0c0e14] border-l-2 border-[#d4ff00] border-y border-r border-[#1e2433] text-xs font-mono text-[#cbd5e1] leading-relaxed">
              &ldquo;Software shouldn&apos;t just render well in happy-path screenshots; it has to behave deterministically when the network drops, databases spike, or invalid tokens arrive.&rdquo;
            </div>
          </div>

          {/* Right Column: Grounded narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#94a3b8] text-sm sm:text-base leading-relaxed">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#f8fafc] leading-tight">
              I AM AN ASPIRING AND PASSIONATE DEVELOPER
            </h2>

            <p>
              I am an undergraduate Computer Science student at <strong className="text-[#f8fafc]">CMR University, Bengaluru</strong>,
              focused on full-stack web platforms, backend systems, and predictive cloud pipelines.
            </p>
            <p>
              During my internship at <strong className="text-[#f8fafc]">ATS-Technologies</strong>, I built and organized
              responsive service catalogs and client workflows. That experience reinforced my focus on
              clean component architecture, semantic HTML, and cross-browser accessibility.
            </p>
            <p>
              In hackathons and personal projects, I prefer tackling concrete engineering constraints:
              managing emergency blood inventory with indexed MongoDB queries (<strong className="text-[#f8fafc]">Khoon</strong>),
              structuring deterministic time-series predictions with AWS Bedrock (<strong className="text-[#f8fafc]">AtmosAi</strong>),
              or designing ephemeral zero-storage file relays with cryptographic session codes (<strong className="text-[#f8fafc]">CodeBridge</strong>).
            </p>
            <p>
              My goal is simple: join high-performing engineering teams as a software engineering intern where I can ship clean, production-grade code, absorb senior mentorship, and contribute from day one.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-[#cbd5e1]">
              <div className="flex items-center gap-2 p-3 bg-[#0c0e14] border border-[#1e2433]">
                <Check className="w-4 h-4 text-[#d4ff00] shrink-0" />
                <span>Defense in depth &amp; token security</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#0c0e14] border border-[#1e2433]">
                <Check className="w-4 h-4 text-[#d4ff00] shrink-0" />
                <span>Low-latency REST &amp; WebSocket APIs</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#0c0e14] border border-[#1e2433]">
                <Check className="w-4 h-4 text-[#d4ff00] shrink-0" />
                <span>Accessible, semantic frontend code</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#0c0e14] border border-[#1e2433]">
                <Check className="w-4 h-4 text-[#d4ff00] shrink-0" />
                <span>Continuous algorithmic problem-solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
