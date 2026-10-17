"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  Menu,
  X,
  ExternalLink,
  Award,
  Code2,
  Terminal,
  Sun,
  Moon,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";
import { useTheme } from "@/context/ThemeContext";

interface HeaderProps {
  onOpenResume: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "work",
        "certificates",
        "skills",
        "experience",
        "dsa",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#work", id: "work" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "Tech Stack", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Problem Solving", href: "#dsa", id: "dsa" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07080b]/90 backdrop-blur-md border-b border-[#1e2433] py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Kushal S Portfolio Home"
          >
            {/* Custom KS Monogram */}
            <div className="relative w-10 h-10 flex items-center justify-center bg-[#0d0f15] border border-[#232838] group-hover:border-[#d4ff00] transition-colors rounded-none">
              <svg
                viewBox="0 0 40 40"
                className="w-7 h-7 text-[#f8fafc] group-hover:text-[#d4ff00] transition-colors"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Architectural KS monogram */}
                <path
                  d="M10 8V32M10 20H15M24 8L15 20L25 32"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
                <circle cx="28" cy="11" r="2" fill="#d4ff00" />
              </svg>
              <div className="absolute -inset-0.5 bg-[#d4ff00] opacity-0 group-hover:opacity-10 transition-opacity blur-sm pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-tight text-[#f8fafc] group-hover:text-[#d4ff00] transition-colors">
                KUSHAL S.
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#94a3b8] uppercase">
                 Full Stack/Ai Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-[#0d0f15]/80 border border-[#1e2433] px-3 py-1.5 rounded-none"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-mono transition-colors rounded-none ${
                  activeSection === link.id
                    ? "text-[#07080b] bg-[#d4ff00] font-bold"
                    : "text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#171b26]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode (Shortcut: T)`}
              className="p-2 text-[#94a3b8] hover:text-[#d4ff00] hover:bg-[#12151e] border border-[#1e2433] hover:border-[#d4ff00]/60 transition-colors flex items-center gap-1.5"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-4 h-4 text-[#d4ff00]" />
                  <span className="hidden xl:inline font-mono text-[10px] tracking-widest text-[#94a3b8] uppercase">LIGHT</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-[#0284c7]" />
                  <span className="hidden xl:inline font-mono text-[10px] tracking-widest text-[#334155] uppercase">DARK</span>
                </>
              )}
            </button>

            {/* LinkedIn verified link */}
            <a
              href="https://www.linkedin.com/in/kushal-s-9483902b8/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kushal's LinkedIn Profile"
              className="p-2 text-[#94a3b8] hover:text-[#38bdf8] hover:bg-[#12151e] border border-[#1e2433] hover:border-[#38bdf8]/40 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            {/* GitHub verified link */}
            <a
              href="https://github.com/kushal200514"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kushal's GitHub Profile"
              className="p-2 text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#12151e] border border-[#1e2433] hover:border-[#f8fafc]/40 transition-colors"
              title="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            {/* Resume Action */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-[#d4ff00] hover:bg-[#bce400] text-[#07080b] text-xs font-mono font-bold tracking-wider transition-all duration-150 uppercase active:translate-y-0.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              className="p-2 text-[#94a3b8] hover:text-[#d4ff00] hover:bg-[#12151e] border border-[#1e2433] transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[#d4ff00]" />
              ) : (
                <Moon className="w-4 h-4 text-[#0284c7]" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#f8fafc] hover:text-[#d4ff00] hover:bg-[#12151e] border border-[#1e2433] transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Desktop/Tablet Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hidden sm:inline-flex lg:hidden p-2 text-[#f8fafc] hover:text-[#d4ff00] hover:bg-[#12151e] border border-[#1e2433] transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#07080b] border-b border-[#1e2433] p-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-mono transition-colors border-l-2 ${
                  activeSection === link.id
                    ? "border-[#d4ff00] text-[#d4ff00] bg-[#12151e]"
                    : "border-transparent text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#0d0f15]"
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-[#1e2433] flex flex-col gap-3">
              {/* Mobile Drawer Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-[#0d0f15] border border-[#1e2433] font-mono text-xs uppercase text-[#cbd5e1]"
              >
                <span className="flex items-center gap-2">
                  {theme === "dark" ? <Sun className="w-4 h-4 text-[#d4ff00]" /> : <Moon className="w-4 h-4 text-[#0284c7]" />}
                  <span>Active Theme: {theme.toUpperCase()}</span>
                </span>
                <span className="text-[10px] text-[#94a3b8]">SWITCH</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#d4ff00] text-[#07080b] font-mono font-bold text-xs uppercase"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume [PDF]</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://www.linkedin.com/in/kushal-s-9483902b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 bg-[#0d0f15] border border-[#1e2433] text-xs font-mono text-[#cbd5e1] hover:text-[#38bdf8]"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#38bdf8]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/kushal200514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 bg-[#0d0f15] border border-[#1e2433] text-xs font-mono text-[#cbd5e1] hover:text-[#f8fafc]"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
