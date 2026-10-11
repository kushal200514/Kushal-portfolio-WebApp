"use client";

import React from "react";
import { Terminal, Shield, Cpu, Code2, Check, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-[#1e2433] bg-[#07080b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Engineering Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12151e] border border-[#232838] text-[11px] font-mono tracking-widest uppercase text-[#d4ff00]">
              <Terminal className="w-3.5 h-3.5 text-[#d4ff00]" />
              ABOUT // PERSPECTIVE
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#f8fafc]">
              ENGINEERING FOR RELIABILITY OVER NOISE.
            </h2>
            <div className="p-4 bg-[#0c0e14] border-l-2 border-[#d4ff00] border-y border-r border-[#1e2433] text-xs font-mono text-[#cbd5e1] leading-relaxed">
              &ldquo;Software shouldn&apos;t just render well in happy-path screenshots; it has to behave deterministically when the network drops, databases spike, or invalid tokens arrive.&rdquo;
            </div>
          </div>

          {/* Right Column: Grounded narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#94a3b8] text-sm sm:text-base leading-relaxed">
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
