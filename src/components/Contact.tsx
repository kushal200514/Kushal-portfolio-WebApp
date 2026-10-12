"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  FileText,
  Phone,
  Send,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface ContactProps {
  onOpenResume: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${PORTFOLIO_DATA.profile.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _replyto: formData.email,
            _subject: formData.subject || `New Portfolio Inquiry from ${formData.name}`,
            message: formData.message,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const result = await response.json();

      if (response.ok && result.success !== "false") {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(
          result.message || "Failed to transmit message directly. Please try again or use direct mail."
        );
      }
    } catch (err: unknown) {
      console.error("Direct mail send error:", err);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Network error sending email. You can also send directly via your mail client."
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1e2433]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12151e] border border-[#232838] text-[11px] font-mono tracking-widest uppercase text-[#d4ff00] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#d4ff00]" />
              GET IN TOUCH // RECRUITER GATEWAY
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#f8fafc]">
              LET&apos;S TALK OPPORTUNITIES
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mt-2 font-mono">
              Currently seeking Software Engineering &amp; Full Stack Internships for 2025/2026. Reach out directly via email, LinkedIn, or schedule an interview.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Coordinates Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0c0e14] border border-[#1e2433] p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#d4ff00] uppercase tracking-wider block mb-1">
                  DIRECT CONTACT CHANNEL
                </span>
                <h3 className="text-xl font-bold text-[#f8fafc]">
                  Kushal S
                </h3>
                <p className="text-xs font-mono text-[#94a3b8] mt-1">
                  Bengaluru, Karnataka, India
                </p>
              </div>

              {/* Email Box with 1-click Copy */}
              <div className="p-4 bg-[#07080b] border border-[#1e2433] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8]">
                  <span>PRIMARY EMAIL:</span>
                  <span className="text-[#10b981]">VERIFIED</span>
                </div>
                <div className="font-mono text-xs sm:text-sm text-[#f8fafc] font-bold break-all">
                  {PORTFOLIO_DATA.profile.email}
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#171b26] hover:bg-[#232838] text-xs font-mono text-[#cbd5e1] hover:text-[#d4ff00] border border-[#232838] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#10b981]" />
                        <span className="text-[#10b981]">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                    className="flex items-center justify-center gap-1.5 px-4 py-2 bg-[#d4ff00] hover:bg-[#c2ea00] text-[#07080b] font-mono text-xs font-bold uppercase transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Mail</span>
                  </a>
                </div>
              </div>

              {/* Phone info */}
              <div className="p-3 bg-[#07080b] border border-[#1e2433] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-[#cbd5e1]">
                  <Phone className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>{PORTFOLIO_DATA.profile.phone}</span>
                </div>
                <span className="text-[#64748b]">Direct Mobile</span>
              </div>

              {/* Verified Profiles */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider block">
                  Professional Profiles:
                </span>

                <a
                  href={PORTFOLIO_DATA.profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#07080b] border border-[#1e2433] hover:border-[#38bdf8]/50 flex items-center justify-between text-xs font-mono text-[#cbd5e1] hover:text-[#38bdf8] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedInIcon className="w-4 h-4 text-[#38bdf8]" />
                    <span>linkedin.com/in/kushal-s-9483902b8</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748b]" />
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#07080b] border border-[#1e2433] hover:border-[#f8fafc]/50 flex items-center justify-between text-xs font-mono text-[#cbd5e1] hover:text-[#f8fafc] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <GitHubIcon className="w-4 h-4" />
                    <span>github.com/kushal200514</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748b]" />
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#07080b] border border-[#1e2433] hover:border-[#f59e0b]/50 flex items-center justify-between text-xs font-mono text-[#cbd5e1] hover:text-[#f59e0b] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <LeetCodeIcon className="w-4 h-4 text-[#f59e0b]" />
                    <span>leetcode.com/u/kushal1405</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748b]" />
                </a>
              </div>

              {/* Resume Download Callout */}
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#131722] hover:bg-[#1a202e] border border-[#232838] hover:border-[#d4ff00] text-xs font-mono text-[#f8fafc] hover:text-[#d4ff00] transition-colors uppercase font-bold"
                >
                  <FileText className="w-4 h-4 text-[#d4ff00]" />
                  <span>Inspect Complete Resume [PDF]</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-[#0c0e14] border border-[#1e2433] p-6 sm:p-8">
            <div className="flex items-center gap-2 pb-4 mb-6 border-b border-[#1e2433]">
              <MessageSquare className="w-4 h-4 text-[#d4ff00]" />
              <h3 className="text-base font-bold text-[#f8fafc] font-mono uppercase tracking-wider">
                Send Direct Inquiry
              </h3>
            </div>

            {submitStatus === "success" ? (
              <div className="p-8 text-center space-y-4 bg-[#07080b] border border-[#10b981]/40">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#10b981]" />
                </div>
                <h4 className="text-lg font-bold text-[#f8fafc]">
                  Inquiry Dispatched Successfully!
                </h4>
                <p className="text-xs text-[#94a3b8] font-mono max-w-md mx-auto leading-relaxed">
                  Your message has been delivered directly to Kushal&apos;s personal inbox at{" "}
                  <strong className="text-[#d4ff00] font-bold">{PORTFOLIO_DATA.profile.email}</strong>.
                  You should receive a response shortly.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-2 px-5 py-2.5 bg-[#171b26] hover:bg-[#202636] text-xs font-mono text-[#cbd5e1] hover:text-[#d4ff00] border border-[#232838] transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitStatus === "error" && (
                  <div className="p-4 bg-[#ef4444]/10 border border-[#ef4444]/30 space-y-2 text-xs font-mono">
                    <div className="flex items-center gap-2 text-[#ef4444] font-bold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Direct Transmission Notice</span>
                    </div>
                    <p className="text-[#cbd5e1]">{errorMessage}</p>
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171b26] hover:bg-[#202636] text-[#d4ff00] border border-[#232838] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Default Mail Client</span>
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-[#94a3b8] uppercase tracking-wider"
                    >
                      Your Name / Company *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe (Acme Corp)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#07080b] border border-[#1e2433] focus:border-[#d4ff00] text-sm text-[#f8fafc] px-3.5 py-2.5 font-mono placeholder:text-[#475569] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-[#94a3b8] uppercase tracking-wider"
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#07080b] border border-[#1e2433] focus:border-[#d4ff00] text-sm text-[#f8fafc] px-3.5 py-2.5 font-mono placeholder:text-[#475569] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono text-[#94a3b8] uppercase tracking-wider"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Software Engineering Internship / Full Stack Role"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#07080b] border border-[#1e2433] focus:border-[#d4ff00] text-sm text-[#f8fafc] px-3.5 py-2.5 font-mono placeholder:text-[#475569] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-[#94a3b8] uppercase tracking-wider"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="We loved your Khoon and AtmosAi projects and would love to interview you for an engineering role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#07080b] border border-[#1e2433] focus:border-[#d4ff00] text-sm text-[#f8fafc] px-3.5 py-2.5 font-mono placeholder:text-[#475569] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#d4ff00] hover:bg-[#c2ea00] disabled:bg-[#d4ff00]/60 disabled:cursor-not-allowed text-[#07080b] font-mono font-bold text-xs uppercase tracking-wider transition-all duration-150 active:translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message to Kushal&apos;s Email...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] font-mono text-[#64748b] text-center pt-1">
                  Transmits directly to kushalsrinivas883@gmail.com with instant notification.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
