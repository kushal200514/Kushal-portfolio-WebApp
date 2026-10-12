"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  ZoomIn,
  X,
  FileCheck2,
  Calendar,
  Download,
  ShieldCheck,
} from "lucide-react";
import { PORTFOLIO_DATA, CertificateItem } from "@/data/portfolioData";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const filterCategories = ["All", "Hackathon", "Certification", "Course"];

  const filteredCerts = PORTFOLIO_DATA.certificates.filter((cert) => {
    if (filter === "All") return true;
    return cert.type === filter;
  });

  return (
    <section
      id="certificates"
      className="py-24 border-b border-[#1e2433] bg-[#090b10] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1e2433]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12151e] border border-[#232838] text-[11px] font-mono tracking-widest uppercase text-[#38bdf8] mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
              VERIFIED CREDENTIALS &amp; HACKATHONS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#f8fafc]">
              CERTIFICATIONS &amp; COMPETITION HONORS
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mt-2 font-mono">
              Verifiable proof of competitive hackathon participation, algorithmic training, and professional agile certifications. Click any certificate to inspect full resolution.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-[#0d0f15] p-1.5 border border-[#1e2433]">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-mono transition-colors ${
                  filter === cat
                    ? "bg-[#38bdf8] text-[#07080b] font-bold"
                    : "text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#171b26]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="group cursor-pointer bg-[#0c0e14] border border-[#1e2433] hover:border-[#38bdf8]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#38bdf8]/5"
            >
              <div>
                {/* Certificate Thumbnail Preview Container */}
                <div className="relative aspect-[16/11] bg-[#07080b] border-b border-[#1e2433] overflow-hidden">
                  <Image
                    src={cert.imagePath}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    priority={cert.id === "udemy-algorithms"}
                  />
                  <div className="absolute inset-0 bg-[#07080b]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#38bdf8] text-[#07080b] font-mono font-bold text-xs uppercase tracking-wider shadow-lg">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Inspect Credential</span>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase font-bold tracking-wider bg-[#07080b]/90 text-[#38bdf8] border border-[#38bdf8]/30">
                      {cert.type}
                    </span>
                  </div>
                </div>

                {/* Content details */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#94a3b8]">
                    <Calendar className="w-3 h-3 text-[#38bdf8]" />
                    <span>{cert.date}</span>
                    <span className="text-[#64748b]">·</span>
                    <span className="text-[#cbd5e1] truncate">{cert.issuer}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-[#94a3b8] line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 pt-0 border-t border-[#1e2433]/50 flex items-center justify-between text-[11px] font-mono text-[#64748b]">
                <span className="truncate max-w-[180px]">
                  {cert.idNumber || "Verified Badge"}
                </span>
                <span className="text-[#38bdf8] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  View Full →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Certificate Inspection */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#07080b]/90 backdrop-blur-md p-4 sm:p-6 lg:p-10 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative bg-[#0d0f15] border border-[#232838] max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#1e2433] bg-[#0a0c10]">
              <div className="flex items-center gap-3">
                <FileCheck2 className="w-5 h-5 text-[#38bdf8]" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#f8fafc]">
                    {activeCert.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#94a3b8]">
                    {activeCert.issuer} · {activeCert.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {activeCert.verifyUrl && (
                  <a
                    href={activeCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171b26] hover:bg-[#202636] text-[#cbd5e1] border border-[#232838] text-xs font-mono transition-colors"
                  >
                    <span>Verify Online</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                <button
                  onClick={() => setActiveCert(null)}
                  className="p-1.5 text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1a202c] border border-[#1e2433] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: High Resolution Certificate Image */}
            <div className="relative flex-1 overflow-auto bg-[#07080b] p-3 sm:p-6 flex items-center justify-center min-h-[350px]">
              <div className="relative w-full h-[55vh] sm:h-[62vh]">
                <Image
                  src={activeCert.imagePath}
                  alt={activeCert.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-[#1e2433] bg-[#0a0c10] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="text-[#cbd5e1] max-w-xl">
                <span className="text-[#38bdf8] font-bold">ID / Reference: </span>
                <span>{activeCert.idNumber || "Verified Achievement Record"}</span>
                <p className="text-[#94a3b8] text-[11px] mt-1 font-sans">
                  {activeCert.description}
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                {activeCert.pdfPath && (
                  <a
                    href={activeCert.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#d4ff00] text-[#07080b] font-mono font-bold text-xs uppercase"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveCert(null)}
                  className="px-4 py-2 bg-[#171b26] text-[#cbd5e1] hover:text-[#f8fafc] border border-[#232838] text-xs font-mono"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
