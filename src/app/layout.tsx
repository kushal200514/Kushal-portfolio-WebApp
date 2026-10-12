import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kushalcreates.online"),
  title: "Kushal S — Full Stack Developer & Software Engineer",
  description:
    "Portfolio of Kushal S, Full Stack Developer and CS undergrad at CMR University, Bengaluru. Experienced in React, Node.js, Express, FastAPI, and cloud systems.",
  keywords: [
    "Kushal S",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Portfolio",
    "React.js",
    "Node.js",
    "Express.js",
    "FastAPI",
    "ATS-Technologies",
    "CMR University",
    "Bengaluru Software Engineer",
  ],
  authors: [{ name: "Kushal S", url: "https://kushalcreates.online" }],
  creator: "Kushal S",
  openGraph: {
    title: "Kushal S — Full Stack Developer & Software Engineer",
    description:
      "Full Stack Developer based in Bengaluru. Explore verified projects (Khoon, AtmosAi, CodeBridge, TwiX), ATS-Technologies internship experience, and hackathon credentials.",
    url: "https://kushalcreates.online",
    siteName: "Kushal S Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushal S — Full Stack Developer & Software Engineer",
    description:
      "Full Stack Developer based in Bengaluru. Building resilient web systems, backend APIs, and distributed architectures.",
  },
  alternates: {
    canonical: "https://kushalcreates.online",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#07080b] text-[#f8fafc] font-sans selection:bg-[#d4ff00] selection:text-[#07080b]"
      >
        {children}
      </body>
    </html>
  );
}
