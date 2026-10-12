export interface Project {
  id: string;
  title: string;
  category: "Full Stack" | "AI & Cloud" | "Systems & Security" | "Hackathon";
  tagline: string;
  problem: string;
  solution: string;
  contributions: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  isHackathon?: boolean;
  hackathonName?: string;
  accentColor: string;
  featured: boolean;
  badge?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  idNumber?: string;
  imagePath: string;
  pdfPath?: string;
  verifyUrl?: string;
  type: "Hackathon" | "Certification" | "Course";
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; context?: string }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Kushal S",
    role: "Full Stack Developer / Software Engineer",
    tagline: "My Introduction.",
    bio: "Full Stack Developer and Computer Science undergraduate at CMR University, Bengaluru. Experienced in building production web applications, secure REST APIs, and event-driven architectures. Former Full Stack Developer Intern at ATS-Technologies with competitive hackathon pedigree.",
    location: "Bengaluru, India",
    university: "CMR University, Bengaluru",
    degree: "B.Tech in Computer Science and Engineering",
    educationDates: "September 2024 – July 2028",
    cgpa: "8.6 / 10",
    email: "kushalsrinivas883@gmail.com",
    phone: "+91 8660031165",
    domain: "kushalcreates.online",
    githubUrl: "https://github.com/kushal200514",
    linkedinUrl: "https://www.linkedin.com/in/kushal-s-9483902b8/",
    leetcodeUrl: "https://leetcode.com/u/kushal1405/",
    resumeUrl: "/resume.pdf",
    availability: "Available for Any Technical Roles",
  },

  metrics: [
    { label: "IoTopia Hackathon 2025", value: "Top 10 Team", sub: "REVA University Finalist" },
    { label: "Academic Standing", value: "8.6 CGPA", sub: "CMR University (B.Tech CSE)" },
    { label: "Professional Experience", value: "Full Stack Intern", sub: "ATS-Technologies" },
    { label: "Algorithmic Practice", value: "100+ Solved", sub: "LeetCode & CodeChef (Reported)" },
    { label: "Active Codebases", value: "5+ Systems", sub: "Public GitHub Repositories" },
  ],

  projects: [
    {
      id: "khoon",
      title: "Khoon",
      category: "Full Stack",
      tagline: "Centralized emergency blood bank management & procurement network",
      problem:
        "Emergency blood shortages are exacerbated by fragmented hospital communication and disjointed donor lists, costing crucial minutes during critical patient care.",
      solution:
        "Engineered a centralized, responsive blood bank management platform with real-time inventory tracking, donor-patient matching, and emergency blood request workflows.",
      contributions: [
        "Architected full-stack application using React.js, Node.js, Express.js, and MongoDB.",
        "Implemented secure JWT-based authentication and role-authorized REST API routes.",
        "Structured emergency query pipelines to match urgent blood group requests with available donor pools.",
        "Deployed production frontend to Netlify with low-latency backend integration.",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
      githubUrl: "https://github.com/kushal200514/Khoon",
      liveUrl: "https://khoonai.netlify.app/",
      accentColor: "#ef4444",
      featured: true,
      badge: "Production Live",
    },
    {
      id: "atmosai",
      title: "AtmosAi",
      category: "AI & Cloud",
      tagline: "Environmental early-warning engine forecasting localized air pollution surges",
      problem:
        "Standard AQI apps passively report historical readings without predictive lead time, giving vulnerable demographics no opportunity to take preventative health measures before pollution peaks.",
      solution:
        "Built a predictive early-warning platform for AWS Environmental Hacks 2026. Evaluates rolling 3-hour meteorological and PM2.5 trends with LightGBM, then uses Anthropic Claude 3.5 Sonnet on AWS Bedrock to synthesize location-specific protective actions for schools, riders, and patients.",
      contributions: [
        "Designed serverless ingestion pipeline integrating OpenAQ and Open-Meteo REST APIs.",
        "Implemented rolling time-series trend extraction using LightGBM classification for acute surge detection.",
        "Orchestrated AWS Bedrock (Claude 3.5 Sonnet) with strict JSON schema constraints for deterministic, hallucination-free action guidance.",
        "Built high-performance responsive frontend dashboard with dynamic hazard alerts.",
      ],
      techStack: [
        "Python",
        "FastAPI",
        "LightGBM",
        "AWS Bedrock",
        "Claude 3.5 Sonnet",
        "DynamoDB",
        "AWS IoT Core",
        "React",
      ],
      githubUrl: "https://github.com/kushal200514/AtmosAI-main",
      isHackathon: true,
      hackathonName: "AWS Environmental Hacks 2026",
      accentColor: "#38bdf8",
      featured: true,
      badge: "AWS Hackathon System",
    },
    {
      id: "codebridge",
      title: "CodeBridge",
      category: "Systems & Security",
      tagline: "Zero-install ephemeral file transfer relay with cryptographic session pairing",
      problem:
        "Commercial file sharing tools demand user registration, mobile application installation, and retain user files on persistent third-party storage.",
      solution:
        "Engineered an ephemeral, server-mediated relay supporting instant browser-to-browser file transfers without accounts or software installs.",
      contributions: [
        "Generated CSPRNG 6-digit session codes and dynamic SVG QR codes for instant device pairing.",
        "Designed two-way sender authorization handshake preventing unauthorized inbound file drops.",
        "Implemented one-time cryptographically validated download tokens with per-IP rate-limiting.",
        "Built automated ephemeral memory garbage collection and instant server-side file shredding upon transfer completion.",
      ],
      techStack: ["Node.js", "Express", "WebSockets", "Vanilla JS", "CSPRNG Security", "CSS3"],
      githubUrl: "https://github.com/kushal200514/Code-Bridge",
      accentColor: "#d4ff00",
      featured: true,
      badge: "Security & Networking",
    },
    {
      id: "twix-agent",
      title: "TwiX (Daily X Post Agent)",
      category: "AI & Cloud",
      tagline: "Autonomous developer worklog synthesis & entity-extraction publishing agent",
      problem:
        "Developers take unstructured, fragmented daily scratch notes that rarely get transformed into high-signal public technical logs or social updates.",
      solution:
        "Constructed an AI pipeline agent that ingests raw engineering worklogs, extracts key factual achievements, synthesizes concise X posts, and automates publishing through human approval.",
      contributions: [
        "Architected multi-stage agent pipeline: raw log -> entity extraction -> post generation -> human-in-the-loop review -> X API v2 publishing.",
        "Integrated FastAPI backend with OpenAI Responses API and Supabase Postgres for immutable post auditing.",
        "Built lightweight local review interface for editing and 1-click tokenized publishing.",
      ],
      techStack: ["Python", "FastAPI", "OpenAI Responses API", "Supabase Postgres", "X API v2", "OAuth2"],
      githubUrl: "https://github.com/kushal200514/TwiX--An-agent",
      accentColor: "#a855f7",
      featured: true,
      badge: "Autonomous Agent",
    },
    {
      id: "legal-demystifier",
      title: "Legal Demystifier App",
      category: "Hackathon",
      tagline: "Generative AI prototype transforming dense legal jargon into plain-language summaries",
      problem:
        "Complex legal documents, contracts, and regulatory filings are impenetrable to ordinary citizens and small businesses, resulting in high legal consultation overhead.",
      solution:
        "Developed prototype submission for the Google Cloud Gen AI Exchange Hackathon 2025. Utilizes Generative AI to break down complex legal documents into structured clause breakdowns, obligations, and risk markers.",
      contributions: [
        "Formulated prompt pipelines and document parsing for structured legal clause extraction.",
        "Submitted as verified prototype under problem statement 'Generative AI for Demystifying Legal Documents'.",
        "Recognized by Google Cloud and Hack2skill with National Platform Certificate of Participation.",
      ],
      techStack: ["Google Cloud Gen AI", "Python", "FastAPI", "React", "REST APIs"],
      githubUrl: "https://github.com/kushal200514/legal-demystifier-app",
      isHackathon: true,
      hackathonName: "Google Cloud Gen AI Exchange Hackathon 2025",
      accentColor: "#f59e0b",
      featured: true,
      badge: "Google Cloud Hackathon",
    },
    {
      id: "campus-connect",
      title: "Campus Connect",
      category: "Full Stack",
      tagline: "Gamified campus lost & found platform with ownership claim verification",
      problem:
        "University bulletin boards and WhatsApp groups are disordered, making the process of reuniting students with lost belongings slow and insecure.",
      solution:
        "Engineered a full-stack campus item recovery application with photo categorization, geo-tagged locations, and proof-of-ownership claim verification workflows.",
      contributions: [
        "Built responsive React frontend with category filters and photo upload previews.",
        "Implemented structured claim review pipeline requiring verifiable evidence before item release.",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
      githubUrl: "https://github.com/kushal200514/campus-connect",
      accentColor: "#10b981",
      featured: false,
      badge: "Campus Platform",
    },
  ] as Project[],

  certificates: [
    {
      id: "udemy-algorithms",
      title: "Design And Analysis of Algorithms",
      issuer: "Udemy",
      date: "April 5, 2026",
      idNumber: "UC-ea5dc0cb-8a9f-458a-ac1c-5e9ad",
      verifyUrl: "https://ude.my/UC-ea5dc0cb-8a9f-458a-ac1c-5e9ad",
      imagePath: "/certificates/udemy-algorithms-certificate.png",
      pdfPath: "/certificates/udemy-algorithms-certificate.pdf",
      type: "Course",
      description:
        "Comprehensive 10-hour curriculum covering algorithmic complexity, dynamic programming, divide-and-conquer, greedy algorithms, and graph theory instructed by Dr. Johnson Kolluri.",
    },
    {
      id: "google-cloud-genai",
      title: "Gen AI Exchange Hackathon 2025",
      issuer: "Google Cloud × Hack2skill",
      date: "January 14, 2026",
      idNumber: "2025H2S08GH-P801317",
      imagePath: "/certificates/google-cloud-genai-hackathon.png",
      type: "Hackathon",
      description:
        "Prototype submission under the problem statement 'Generative AI for Demystifying Legal Documents'. Recognized on the national platform for AI innovation driving India's Viksit Bharat initiative.",
    },
    {
      id: "iotopia-hackathon",
      title: "IOTOPIA 2025 National Hackathon",
      issuer: "REVA University (Dept of CSE - IoT & Cybersecurity)",
      date: "September 12–13, 2025",
      imagePath: "/certificates/iotopia-hackathon-2025.png",
      type: "Hackathon",
      description:
        "Recognized among the Top 10 teams at IOTOPIA 2025 for developing an innovative technology solution addressing sustainable and smart cities challenges.",
    },
    {
      id: "vyuhatech-hackathon",
      title: "VYUHATECH 2.0 National Level Hackathon",
      issuer: "CMR Institute of Technology (CMRIT, Bengaluru)",
      date: "October 8–9, 2025",
      idNumber: "Certificate ID: V25CMR494",
      imagePath: "/certificates/vyuhatech-hackathon-2025.png",
      type: "Hackathon",
      description:
        "24-Hour National Level Hackathon organized at CMRIT under Maker Space and MHRD Innovation Cell. Awarded Certificate of Participation for dedication, innovative ideas, and collaborative development towards sustainable solutions.",
    },
    {
      id: "agile-scrum-master",
      title: "Agile Scrum Master",
      issuer: "Simplilearn SkillUp",
      date: "September 29, 2025",
      idNumber: "Code: 9069862",
      imagePath: "/certificates/agile-scrum-master-simplilearn.png",
      type: "Certification",
      description:
        "Mastery of Agile principles, sprint planning, backlog grooming, cross-functional engineering workflows, and team delivery velocity.",
    },
    {
      id: "generative-ai-mastermind",
      title: "Generative AI Mastermind",
      issuer: "Outskill (Vaibhav Sisinty)",
      date: "2025",
      imagePath: "/certificates/generative-ai-mastermind-outskill.png",
      type: "Certification",
      description:
        "Practical engineering applications of Large Language Models, prompt orchestration, agentic workflows, and AI product integration.",
    },
    {
      id: "udemy-python-bootcamp",
      title: "Complete 2026 Python Bootcamp: Learn Python from Scratch",
      issuer: "Udemy",
      date: "May 16, 2026",
      idNumber: "UC-500768a0-3260-43fb-a92e-474744a8f7b6",
      verifyUrl: "https://ude.my/UC-500768a0-3260-43fb-a92e-474744a8f7b6",
      imagePath: "/certificates/udemy-python-bootcamp.png",
      type: "Course",
      description:
        "17.5 total hours of in-depth training covering Python fundamentals, object-oriented architecture, data manipulation, and modern automation scripting instructed by Haris Ali Khan.",
    },
    {
      id: "infosys-python-advanced",
      title: "Python Advanced Training: 2022",
      issuer: "Infosys Springboard",
      date: "July 30, 2025",
      verifyUrl: "https://verify.onwingspan.com",
      imagePath: "/certificates/infosys-springboard-python-advanced.png",
      type: "Course",
      description:
        "Enterprise-grade Python advanced curriculum certified by Infosys Springboard under Education, Training & Assessment (ETA), covering functional programming, efficiency, and modular code design.",
    },
    {
      id: "be10x-ai-tools",
      title: "AI Tools and ChatGPT Workshop",
      issuer: "be10x",
      date: "March 15, 2026",
      idNumber: "Verified Certification",
      imagePath: "/certificates/be10x-ai-tools-workshop.png",
      type: "Certification",
      description:
        "Hands-on workshop certification in generative AI workflows: rapid presentation generation, analytical data processing with AI, and AI-assisted software debugging.",
    },
  ] as CertificateItem[],

  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "ATS-Technologies",
      location: "Bengaluru, India (OnSite)",
      period: "June 2026 – July 2026",
      type: "Internship",
      description:
        "Architected and deployed a modern, responsive business website for an enterprise HR, staffing, payroll outsourcing, and recruitment services company.",
      highlights: [
        "Designed and built a responsive web interface from scratch with service-focused catalog navigation, call-to-action components, and modern typography.",
        "Structured clear content architecture showcasing recruitment, payroll outsourcing, and executive staffing offerings to improve client conversion.",
        "Implemented cross-browser compatible layouts with mobile-first design, semantic HTML, and accessible form interactions.",
        "Collaborated onsite with leadership to streamline business presentation and strengthen the company's digital presence.",
      ],
      technologies: ["React.js", "JavaScript (ES6+)", "Responsive CSS", "HTML5", "UI/UX Architecture"],
    },
  ] as ExperienceItem[],

  problemSolving: {
    title: "Algorithmic Rigor & Data Structures",
    summary:
      "Consistent problem-solving across LeetCode and CodeChef, focusing on optimal time and space complexity, algorithmic correctness, and pattern recognition.",
    profileUrl: "https://leetcode.com/u/kushal1405/",
    reportedStats: "100+ DSA Problems Solved",
    verificationNote:
      "Stat is a resume-reported achievement across LeetCode & CodeChef. Real-time statistics, contest activity, and solution submissions can be verified directly on my public LeetCode profile.",
    topics: [
      { name: "Arrays & Two Pointers", focus: "In-place modifications, sliding window, prefix sums" },
      { name: "Hash Maps & Sets", focus: "O(1) lookups, frequency counting, anagram groupings" },
      { name: "Binary Search", focus: "Rotated arrays, search space reduction, boundary conditions" },
      { name: "Linked Lists & Pointers", focus: "Fast/slow pointers, cycle detection, list reversal" },
      { name: "Trees & Recursion", focus: "DFS/BFS traversals, lowest common ancestor, height validation" },
      { name: "Dynamic Programming", focus: "Memoization, tabulation, subproblem recurrence relations" },
    ],
  },

  skills: [
    {
      title: "Programming Languages",
      description: "Core languages used across system programming, backends, and frontend scripts.",
      skills: [
        { name: "Java", context: "Object-oriented modeling, DSA" },
        { name: "Python", context: "FastAPI, ML pipelines, scripts" },
        { name: "JavaScript (ES6+)", context: "Full-stack web logic" },
        { name: "C", context: "Memory fundamentals & systems" },
        { name: "SQL", context: "Relational queries, joins, indexes" },
        { name: "HTML5 / CSS3", context: "Semantic architecture & responsive layouts" },
      ],
    },
    {
      title: "Frontend Engineering",
      description: "Modern, component-driven user interfaces built for speed and accessibility.",
      skills: [
        { name: "React.js", context: "Used in Khoon, ATS-Technologies, Campus Connect" },
        { name: "Next.js", context: "App Router, SSR, Server Components" },
        { name: "Tailwind CSS", context: "Rapid utility-first responsive styling" },
        { name: "Modern CSS & Subgrid", context: "Custom tokens, micro-animations, glassmorphism" },
        { name: "Web Accessibility (WCAG)", context: "Focus rings, aria landmarks, screen readers" },
      ],
    },
    {
      title: "Backend & Systems Architecture",
      description: "APIs, microservices, authentication protocols, and asynchronous workloads.",
      skills: [
        { name: "Node.js & Express.js", context: "REST APIs in Khoon, CodeBridge, Campus Connect" },
        { name: "FastAPI (Python)", context: "Asynchronous APIs in AtmosAi, TwiX Agent" },
        { name: "REST APIs", context: "Resource contracts, HTTP status codes, routing" },
        { name: "JWT Authentication", context: "Role-based token validation & sessions" },
        { name: "OAuth2", context: "Provider integrations (X API, third-party auth)" },
        { name: "Django", context: "Python enterprise backend architecture" },
      ],
    },
    {
      title: "Databases & Cloud Infrastructure",
      description: "Persistent storage engines, caching, serverless cloud, and containerization.",
      skills: [
        { name: "MongoDB", context: "Document datastore in Khoon" },
        { name: "PostgreSQL", context: "Relational schemas, Supabase Postgres in TwiX" },
        { name: "MySQL", context: "Relational modeling, indexing" },
        { name: "AWS Bedrock", context: "Claude 3.5 Sonnet integration in AtmosAi" },
        { name: "AWS DynamoDB & IoT Core", context: "Time-series persistence in AtmosAi" },
        { name: "Docker", context: "Containerization & predictable environments" },
      ],
    },
    {
      title: "Engineering Tools & Libraries",
      description: "Development environments, API testing, version control, and data tools.",
      skills: [
        { name: "Git & GitHub", context: "Branching, PRs, version control" },
        { name: "Postman", context: "API endpoint debugging & testing" },
        { name: "VS Code & Cursor", context: "Primary development IDEs" },
        { name: "Antigravity", context: "Agentic AI development workflows" },
        { name: "NumPy & Pandas", context: "Data manipulation & numerical arrays" },
        { name: "Matplotlib", context: "Data visualization & charting" },
        { name: "Flutter", context: "Cross-platform mobile interfaces" },
      ],
    },
  ] as SkillCategory[],

  achievements: [
    {
      title: "Top 10 Teams Finalist — IoTopia Hackathon 2025",
      issuer: "REVA University, Bangalore",
      date: "September 2025",
      description:
        "Selected into the Top 10 teams out of competing teams at the national-level IoT & Smart Cities Hackathon organized by the School of Computer Science & Engineering.",
      highlight: "National-Level Top 10",
    },
    {
      title: "Gen AI Exchange Hackathon Prototype Contributor",
      issuer: "Google Cloud × Hack2skill",
      date: "January 2026",
      description:
        "Built prototype submission under 'Generative AI for Demystifying Legal Documents' advancing India's Viksit Bharat AI platform.",
      highlight: "Google Cloud Platform",
    },
    {
      title: "AWS Environmental Hacks 2026 Contributor",
      issuer: "WeMakeDevs × AWS Bharat Builds",
      date: "October 2026",
      description:
        "Architected AtmosAi early-warning pollution predictor using AWS Bedrock Claude 3.5 Sonnet and serverless event-driven infrastructure.",
      highlight: "AWS Cloud & AI",
    },
    {
      title: "VYUHATECH 2.0 24hr National Hackathon Participant",
      issuer: "CMRIT Bengaluru (MHRD Innovation Cell)",
      date: "October 2025",
      description:
        "Participated in the 24-hour national-level hackathon organized at CMRIT under Maker Space and MHRD Innovation Cell towards sustainable development.",
      highlight: "24-Hour National Hackathon",
    },
    {
      title: "100+ DSA Problems Solved",
      issuer: "LeetCode & CodeChef",
      date: "Ongoing",
      description:
        "Consistent algorithmic problem-solving across core computer science paradigms including dynamic programming, graphs, trees, and pointers.",
      highlight: "Algorithmic Foundation",
    },
  ],

  education: {
    institution: "CMR University, Bengaluru",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "September 2024 – July 2028",
    cgpa: "8.6/ 10",
    status: "Currently Enrolled (Undergraduate)",
    coursework: [
      "Data Structures & Algorithms",
      "Design & Analysis of Algorithms",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (Java/Python)",
      "Computer Networks",
      "Operating Systems Fundamentals",
      "Software Engineering & Agile Methodologies",
    ],
  },
};
