import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8fafc] flex flex-col items-center justify-center p-6 text-center tech-grid-bg">
      <div className="max-w-md w-full bg-[#0d0f15] border border-[#232838] p-8 space-y-6 shadow-2xl">
        <div className="w-12 h-12 bg-[#ef4444]/10 border border-[#ef4444]/30 flex items-center justify-center mx-auto text-[#ef4444]">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <div className="font-mono text-xs text-[#ef4444] uppercase tracking-widest">
            ERROR 404 // RESOURCE NOT FOUND
          </div>
          <h1 className="text-2xl font-black text-[#f8fafc]">
            ROUTE DOES NOT EXIST
          </h1>
          <p className="text-xs font-mono text-[#94a3b8] leading-relaxed">
            The requested URI path is not mapped to any public endpoint or portfolio section.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#d4ff00] hover:bg-[#c2ea00] text-[#07080b] font-mono font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
