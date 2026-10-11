# Kushal S — Production Developer Portfolio Documentation

**Target Domain:** `kushalcreates.online`  
**Status:** Production Ready (Next.js 16.4 App Router, TypeScript, Tailwind CSS v4)  
**Compilation:** Passed in Turbopack (`npm run build`)  

---

## 1. Design Direction & Art Direction

- **Deep Ink & Charcoal Palette:** Implemented deep midnight black (`#07080B`) surfaces paired with carbon card backgrounds (`#0C0E14`), razor-sharp borders (`#1E2433`), and a fine technical architectural grid background.
- **Electric Lime (`#D4FF00`) & Cobalt (`#38BDF8`) Accents:** High-contrast, memorable primary accent inspired by high-performance systems engineering.
- **Custom KS Architectural Monogram:** Scalable SVG monogram featuring sharp geometric strokes, an offset alignment, and hover glow states.
- **Interactive Telemetry Console:** System monitor in the Hero section displaying real-time Bengaluru timezone clock (`Asia/Kolkata`), stack status, system vitals, and engineering philosophy.
- **Strictly Verifiable Facts:** No placeholder text, fake testimonials, circular percentage bars, or fabricated metrics.

---

## 2. Selected Projects & Case Studies

1. **Khoon** — Centralized Emergency Blood Bank Management Platform
   - *Stack:* React.js, Node.js, Express.js, MongoDB, JWT, REST APIs
   - *Live Demo:* https://khoonai.netlify.app/
   - *Source Code:* https://github.com/kushal200514/Khoon
   - *Why Selected:* Demonstrates complete full-stack mastery, role-based authorization, emergency database queries, and live production deployment.

2. **AtmosAi** — Environmental Early-Warning Predictive Engine
   - *Stack:* Python, FastAPI, LightGBM, AWS Bedrock (Claude 3.5 Sonnet), DynamoDB, AWS IoT Core, React
   - *Context:* Built for AWS Environmental Hacks 2026 (Air Track)
   - *Source Code:* https://github.com/kushal200514/AtmosAI-main
   - *Why Selected:* Showcases machine learning time-series trend extraction, cloud-native serverless architecture, and deterministic LLM schema orchestration.

3. **CodeBridge** — Ephemeral Zero-Install Peer File Transfer Relay
   - *Stack:* Node.js, Express, WebSockets, Vanilla JS, CSPRNG Security
   - *Source Code:* https://github.com/kushal200514/Code-Bridge
   - *Why Selected:* Demonstrates low-level networking, security handshakes, one-time token lifetimes, per-IP brute-force protection, and zero-storage memory shredding.

4. **TwiX (Daily X Post Agent)** — Autonomous Worklog-to-Insight Synthesis Agent
   - *Stack:* Python, FastAPI, OpenAI Responses API, Supabase Postgres, X API v2
   - *Source Code:* https://github.com/kushal200514/TwiX--An-agent
   - *Why Selected:* Illustrates multi-stage autonomous agent pipelines, fact extraction, and human-in-the-loop validation before automated API publishing.

5. **Legal Demystifier App** — Google Cloud Gen AI Exchange Hackathon 2025 Prototype
   - *Stack:* Google Cloud Gen AI, Python, FastAPI, React
   - *Source Code:* https://github.com/kushal200514/legal-demystifier-app
   - *Why Selected:* Verified national hackathon prototype submission breaking down complex legal documents into plain-language summaries.

6. **Dedicated Hackathon Live Workspace:**
   - Active dedicated slot in the Projects section with blueprint architecture and reserved space for future live deployments.

---

## 3. Verified Credentials & Certificates Showcase

All uploaded certificates have been integrated with full-resolution previews, verification IDs, and an interactive Lightbox Modal:
1. **Udemy:** *Design And Analysis of Algorithms* (Dr. Johnson Kolluri, 10 Hours, April 5, 2026, Cert: `UC-ea5dc0cb-8a9f-458a-ac1c-5e9ad`). Includes direct link to PDF and online verification.
2. **Google Cloud × Hack2skill:** *Gen AI Exchange Hackathon 2025* — Certificate of Participation for "Generative AI for Demystifying Legal Documents" (ID: `2025H2S08GH-P801317`, Jan 14, 2026).
3. **REVA University:** *IOTOPIA 2025 National Hackathon* — Top 10 Team Finalist Certificate (Sept 12–13, 2025).
4. **Simplilearn SkillUp:** *Agile Scrum Master* — Certificate of Completion (Code: `9069862`, Sept 29, 2025).
5. **Outskill:** *Generative AI Mastermind* — Certificate of Completion by Vaibhav Sisinty (2025).

---

## 4. Local Execution & Validation

### Run Dev Server
```bash
npm run dev
```
Accessible at: `http://localhost:3000`

### Run Production Build
```bash
npm run build
npm start
```
- Build Result: Successfully compiled via Next.js Turbopack in ~713ms.
- TypeScript: Passed (0 errors).
- Static Prerender: 100% successful for `/` and `/_not-found`.

---

## 5. Deployment Instructions for `kushalcreates.online`

### Option A: Vercel (Recommended for Next.js)
1. Push your repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/kushal200514/portfolio-v2.git
   git branch -M main
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Next.js App Router will be auto-detected with default build settings (`npm run build`).
4. Click **Deploy**.
5. Once deployed, navigate to **Project Settings > Domains** in Vercel:
   - Add `kushalcreates.online` and `www.kushalcreates.online`.
   - Update your DNS records in your domain registrar (e.g. Hostinger, GoDaddy, Cloudflare):
     - `A` Record: `@` pointing to `76.76.21.21`
     - `CNAME` Record: `www` pointing to `cname.vercel-dns.com`

### Option B: Netlify
1. Connect repository on Netlify.
2. Set Build command to `npm run build` and Publish directory to `.next`.
3. Add custom domain `kushalcreates.online` under **Domain management**.
