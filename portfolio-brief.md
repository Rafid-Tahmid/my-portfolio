# Portfolio Brief — Rafid Tahmid

> Purpose: source content for Claude Fable 5 to build a stunning comp-sci-job-focused portfolio website. Goal: land a computer science job (new grad / internship). Prioritize technical/AI/full-stack work; retail/hospitality history is NOT relevant, exclude it.

## Contact / Links
- Email: rafidtahmid.business@gmail.com
- Phone: 0430 047 024
- Location: Gilles Plains, SA, Australia
- LinkedIn: https://www.linkedin.com/in/rafid-tahmid/
- GitHub: https://github.com/Rafid-Tahmid
- Pexels (photography): https://pexels.com/@rafid — 1.7M+ views

## Headline / Profile
Mathematical and Computer Science student at **Adelaide University** (note: renamed from "University of Adelaide" — always use "Adelaide University"), with hands-on experience shipping AI-driven automation and full-stack web apps. Comfortable building full-stack applications, integrating REST APIs/LLM APIs, designing RAG pipelines, and multi-model routing. Turns real operational bottlenecks into working technical solutions.

## Education
**Bachelor of Mathematical and Computer Science** — Adelaide University — Expected 2027
Relevant coursework: Web & Database Computing (full-stack dev, SQL schema design, API integration); Artificial Intelligence (search-based decision-making, logic/inference, AI agent systems).

**42 Adelaide — Intensive Piscine (Selection Program)** — Jan–Feb 2025
One-month peer-based software engineering selection program: C programming, shell scripting, daily peer-reviewed code submissions under strict style requirements.

## Technical Skills
- **Languages:** Python, JavaScript (ES6+), TypeScript, C, C++, SQL
- **AI & Automation:** Claude Code, Cursor, prompt engineering, RAG & multi-source retrieval, multi-model routing, agentic workflows, vector search, multi-provider LLM integration (Anthropic, OpenAI, Google), n8n, Google Apps Script
- **Web & Databases:** Node.js, Express.js, Next.js, React, HTML5, CSS3, Tailwind CSS, MySQL, PostgreSQL (Neon), pgvector, Prisma
- **Tools:** Git, GitHub, Postman, Vitest, Google Workspace, Microsoft 365

## Featured Projects (ordered by impact for a comp-sci job)

### 1. Diagram Learning Tool (Personal Project, 2026)
GitHub: https://github.com/Rafid-Tahmid/Diagram-based-AI-learning-Tool
Type any topic → interactive diagram. Topic expands into an ordered learning path (foundational → advanced); clicking a node generates its explanation on demand. Per-node chat grounded in open sources.
- **Two-model split:** strong reasoning model plans learning-path structure; cheap RAG-grounded model writes node descriptions on demand (recall). Structures cached per topic.
- **Multi-source RAG:** pgvector similarity search before generation; on cache miss, JIT fetch/chunk/embed from six sources (Wikipedia, Wikibooks, arXiv, PubMed, Stack Exchange, MDN), selected per subject domain. Inline numbered citations.
- **Score-based model routing:** similarity score ≥ 0.72 → cheap model; below → escalates to stronger model; root learning-path planning pinned to top tier; low-confidence answers auto-retry on stronger model.
- **Provider-agnostic orchestration:** spans Anthropic, OpenAI, Google behind one interface, automatic promotion/retry on failures.
- **Caching & cost visibility:** live dashboard reports token spend by model, cache savings, % served from DB vs freshly generated.
- Built solo, managed entirely through Claude Code (structure, codegen, debugging, full-stack iteration).
- **Stack:** Next.js 16, React 19, TypeScript, React Flow, Claude (Opus/Sonnet/Haiku), pgvector on Neon Postgres, Prisma, Tailwind CSS v4.

### 2. Track My Subs (Collaborative Project, with friend Shafayet)
GitHub: https://github.com/shafayet98/track_my_subs
Agentic subscription tracker. Connect Gmail; an AI agent (Claude Opus as "brain" + tools) scans the mailbox, identifies subscription receipts, extracts recurring spend into a clean dashboard (monthly spend charts, per-subscription cards: total spent, last month, next payment, overdue/missing).
- **Privacy-first design:** Gmail access read-only; stores parsed facts only, never raw email bodies — agent reads a message in memory during scan and discards it, persists only structured data (amounts, dates, merchant, message id for dedup).
- **Agent pipeline:** cheap heuristic search narrows mailbox to billing-signal candidates, then agent classifies and extracts.
- Has CI pipeline (GitHub Actions).
- **Stack:** Python, Gmail OAuth2 (readonly scope), Claude Opus agent.
- Note: built collaboratively — credit co-author Shafayet.

### 3. Grocery Guru (Group Project, Adelaide University — 96% score)
GitHub: https://github.com/Rafid-Tahmid/Grocery_Guru
Meal planning and recipe management web app: discover recipes, plan weekly meals, generate shopping lists with real-time price comparisons across major Australian supermarkets.
- **Backend Developer role:** designed MySQL schema, built secure backend with Node.js, Express.js, bcrypt authentication.
- **API integration:** TheMealDB, Coles, Woolworths — real-time price comparison, dynamic shopping lists, async data fetching/JSON parsing.
- Responsive design, dark mode support.
- Scored 96% on the assignment.
- **Stack:** HTML5, CSS3, JavaScript, Node.js, Express.js, MySQL, TheMealDB API.

### 4. Research Project — Grand Challenges in Computer Science (Adelaide University coursework)
GitHub: https://github.com/Rafid-Tahmid/Research-Project
Academic research papers for the "Grand Challenges in Comp Sci" course:
- "Blockchain for Secure Online Transaction"
- "Stock price reactions to dividend announcements from major mining companies (BHP, Rio Tinto) on the ASX"
- Present as research/writing samples, not code projects — good for showing analytical/research breadth alongside engineering work.

## Professional Experience (comp-sci relevant only)

**Technical and Operations Assistant** (Remote, Part-Time) — M/S Nahar Enterprise, Bangladesh — 2023–Present
Family-owned import/export business, 30+ employees, annual turnover exceeding USD 2M.
- Engineered an intelligent email automation pipeline integrating the Gemini API to parse client correspondence, extract unstructured data, auto-classify documents (e.g. purchase orders).
- Automated end-to-end quotation and billing workflows using Google Apps Script — cut manual documentation time by 30%, ensured tax compliance.
- Managed client-facing correspondence with international buyers/suppliers across time zones.

**Business Process Automation Intern** — InnovateAI (Startup) — Dec 2025–Feb 2026
- Built no-code automation workflows in n8n orchestrating document intake, data extraction, downstream delivery across CRM/accounting tools.
- Implemented AI + OCR to extract structured data from unstructured client quotation documents.
- Researched data-sync architectures; mapped requirements connecting Zoho CRM with internal accounting software.
- Configured automated workflows to trigger invoice dispatch on order placement.
- Used Claude Code as primary dev environment — project structure, code writing/review, debugging across the automation pipeline.

## Volunteering
**Student Ambassador, IDP Education** — March 2026–Present
Guided prospective/incoming international students through study-abroad process. Produced student-perspective content for IDP's Ambassador Platform (used in marketing campaigns).

## Interests
Photography (1.7M+ views on Pexels — pexels.com/@rafid) | Aquarium & terrarium keeping | Reading | Emerging technology | Debating | Travel

## Excluded from portfolio (not relevant to comp-sci job goal)
Retail/hospitality/security history (Myer application, A Hereford Beefstouw kitchen hand, Infinity Mega Mall retail associate, Nexar Group security officer) — from the "Retail" CV. Not included per comp-sci-job focus.

## Deployment
- Hosting: Vercel (Hobby plan, free).
- Domain: bought via Cloudflare, DNS records point to Vercel (A record @ 76.76.21.21, CNAME www → cname.vercel-dns.com, both DNS-only/grey cloud, not proxied).

## Direction for site build (for Fable 5)
- Target audience: recruiters/hiring managers for comp-sci/software engineering roles (new grad).
- Emphasize: AI/LLM engineering depth (RAG, multi-model routing, agentic workflows), full-stack shipping ability, real business impact (30% time reduction, USD 2M turnover business, 96% uni project score).
- Sections suggested: Hero/intro, About, Projects (featured: Diagram Learning Tool, Track My Subs, Grocery Guru, Research Project), Experience, Skills, Education, Photography/Interests (optional, adds personality), Contact.
- Pull real screenshots/photos from Pexels profile for visual polish where relevant (e.g. hero background, about section).
- Link every project card to its GitHub repo.
- Include links to LinkedIn and GitHub prominently (nav/footer).
