"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ProblemSolving from "@/components/ProblemSolving";
import AchievementsEducation from "@/components/AchievementsEducation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  // Accessible keyboard shortcuts for tech recruiters
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing inside an input or textarea
      if (
        ["input", "textarea"].includes(
          (document.activeElement?.tagName || "").toLowerCase()
        )
      ) {
        return;
      }

      if (e.key === "r" || e.key === "R") {
        setResumeOpen((prev) => !prev);
      } else if (e.key === "w" || e.key === "W") {
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "c" || e.key === "C") {
        document.getElementById("certificates")?.scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "s" || e.key === "S") {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "e" || e.key === "E") {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-[#07080b] text-[#f8fafc] flex flex-col selection:bg-[#d4ff00] selection:text-[#07080b]">
      {/* Interactive Cursor Animations & Flashlight Glow */}
      <CustomCursor />

      {/* Navigation Header */}
      <Header onOpenResume={() => setResumeOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenResume={() => setResumeOpen(true)} />

      {/* Facts & Proof Bar */}
      <ProofBar />

      {/* Selected Work & Case Studies (With Hackathon Live Workspace) */}
      <Projects />

      {/* Verified Certificates & Hackathons (Udemy, Google Cloud, IoTopia, etc.) */}
      <Certificates />

      {/* Technical Stack Matrix */}
      <Skills />

      {/* Experience (ATS-Technologies Internship) */}
      <Experience />

      {/* Problem Solving & DSA Practice (LeetCode & CodeChef) */}
      <ProblemSolving />

      {/* Education & Academic Credentials (CMR University CGPA 8.7) */}
      <AchievementsEducation />

      {/* About & Perspective */}
      <About />

      {/* Contact & Recruiter Gateway */}
      <Contact onOpenResume={() => setResumeOpen(true)} />

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive Resume Lightbox Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </main>
  );
}
