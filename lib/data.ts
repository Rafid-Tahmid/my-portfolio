export const links = {
  email: "rafidtahmid.business@gmail.com",
  phone: "0430 047 024",
  location: "Gilles Plains, SA, Australia",
  linkedin: "https://www.linkedin.com/in/rafid-tahmid/",
  github: "https://github.com/Rafid-Tahmid",
  pexels: "https://pexels.com/@rafid",
};

export type Project = {
  title: string;
  subtitle: string;
  github: string;
  description: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
  credit?: string;
};

export const projects: Project[] = [
  {
    title: "Diagram Learning Tool",
    subtitle: "AI-powered visual learning paths",
    github: "https://github.com/Rafid-Tahmid/Diagram-based-AI-learning-Tool",
    featured: true,
    description:
      "Type any topic and get an interactive diagram: an ordered learning path from foundational to advanced, where clicking a node generates its explanation on demand, with per-node chat grounded in open sources.",
    highlights: [
      "Two-model split — a strong reasoning model plans the learning-path structure while a cheap RAG-grounded model writes node descriptions on demand; structures cached per topic",
      "Multi-source RAG — pgvector similarity search before generation; on cache miss, just-in-time fetch/chunk/embed from six sources (Wikipedia, Wikibooks, arXiv, PubMed, Stack Exchange, MDN) with inline numbered citations",
      "Score-based model routing — similarity ≥ 0.72 routes to the cheap model, below escalates to the stronger model; low-confidence answers auto-retry on a stronger model",
      "Provider-agnostic orchestration across Anthropic, OpenAI, and Google behind one interface with automatic promotion and retry on failures",
      "Live cost dashboard — token spend by model, cache savings, and % served from DB vs freshly generated",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "React Flow",
      "Claude (Opus/Sonnet/Haiku)",
      "pgvector",
      "Neon Postgres",
      "Prisma",
      "Tailwind CSS v4",
    ],
  },
  {
    title: "Track My Subs",
    subtitle: "Agentic subscription tracker",
    github: "https://github.com/shafayet98/track_my_subs",
    credit: "Built collaboratively with Shafayet",
    description:
      "Connect Gmail and an AI agent (Claude Opus as the brain, plus tools) scans the mailbox, identifies subscription receipts, and extracts recurring spend into a clean dashboard — monthly spend charts and per-subscription cards with total spent, next payment, and overdue alerts.",
    highlights: [
      "Privacy-first — read-only Gmail access; stores parsed facts only, never raw email bodies. Messages are read in memory during a scan and discarded",
      "Agent pipeline — a cheap heuristic search narrows the mailbox to billing-signal candidates before the agent classifies and extracts",
      "CI pipeline with GitHub Actions",
    ],
    stack: ["Python", "Gmail OAuth2 (read-only)", "Claude Opus agent", "GitHub Actions"],
  },
  {
    title: "Grocery Guru",
    subtitle: "Meal planning with live price comparison — scored 96%",
    github: "https://github.com/Rafid-Tahmid/Grocery_Guru",
    description:
      "Meal planning and recipe management web app: discover recipes, plan weekly meals, and generate shopping lists with real-time price comparisons across major Australian supermarkets. University group project — scored 96%.",
    highlights: [
      "Backend developer role — designed the MySQL schema and built a secure backend with Node.js, Express.js, and bcrypt authentication",
      "API integration with TheMealDB, Coles, and Woolworths for real-time price comparison and dynamic shopping lists",
      "Responsive design with dark mode support",
    ],
    stack: ["Node.js", "Express.js", "MySQL", "JavaScript", "HTML5", "CSS3", "TheMealDB API"],
  },
  {
    title: "Research Project",
    subtitle: "Grand Challenges in Computer Science",
    github: "https://github.com/Rafid-Tahmid/Research-Project",
    description:
      "Academic research papers written for the Grand Challenges in Computer Science course — research and writing samples showing analytical breadth alongside engineering work.",
    highlights: [
      "“Blockchain for Secure Online Transaction”",
      "“Stock price reactions to dividend announcements from major mining companies (BHP, Rio Tinto) on the ASX”",
    ],
    stack: ["Research", "Technical writing", "Financial analysis"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Technical and Operations Assistant",
    company: "M/S Nahar Enterprise — Remote, Part-Time",
    period: "2023 — Present",
    points: [
      "Engineered an intelligent email automation pipeline integrating the Gemini API to parse client correspondence, extract unstructured data, and auto-classify documents such as purchase orders",
      "Automated end-to-end quotation and billing workflows with Google Apps Script — cut manual documentation time by 30% and ensured tax compliance",
      "Managed client-facing correspondence with international buyers and suppliers across time zones, for an import/export business with 30+ employees and USD 2M+ annual turnover",
    ],
  },
  {
    role: "Business Process Automation Intern",
    company: "InnovateAI (Startup)",
    period: "Dec 2025 — Feb 2026",
    points: [
      "Built no-code automation workflows in n8n orchestrating document intake, data extraction, and downstream delivery across CRM and accounting tools",
      "Implemented AI + OCR to extract structured data from unstructured client quotation documents",
      "Researched data-sync architectures and mapped requirements connecting Zoho CRM with internal accounting software",
      "Used Claude Code as the primary dev environment — project structure, code writing, review, and debugging across the automation pipeline",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "JavaScript (ES6+)", "TypeScript", "C", "C++", "SQL"],
  },
  {
    group: "AI & Automation",
    items: [
      "Claude Code",
      "Cursor",
      "Prompt engineering",
      "RAG & multi-source retrieval",
      "Multi-model routing",
      "Agentic workflows",
      "Vector search",
      "LLM APIs (Anthropic, OpenAI, Google)",
      "n8n",
      "Google Apps Script",
    ],
  },
  {
    group: "Web & Databases",
    items: [
      "Node.js",
      "Express.js",
      "Next.js",
      "React",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "MySQL",
      "PostgreSQL (Neon)",
      "pgvector",
      "Prisma",
    ],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Postman", "Vitest", "Google Workspace", "Microsoft 365"],
  },
];

export const education = [
  {
    title: "Bachelor of Mathematical and Computer Science",
    place: "Adelaide University",
    period: "Expected 2027",
    detail:
      "Relevant coursework: Web & Database Computing (full-stack development, SQL schema design, API integration); Artificial Intelligence (search-based decision-making, logic and inference, AI agent systems).",
  },
  {
    title: "Intensive Piscine (Selection Program)",
    place: "42 Adelaide",
    period: "Jan — Feb 2025",
    detail:
      "One-month peer-based software engineering selection program: C programming, shell scripting, and daily peer-reviewed code submissions under strict style requirements.",
  },
];

export const photos: { src: string; alt: string }[] = [
  {
    src: "https://images.pexels.com/photos/37813391/pexels-photo-37813391.jpeg",
    alt: "Ethereal jellyfish floating in tranquil waters",
  },
  {
    src: "https://images.pexels.com/photos/37373252/pexels-photo-37373252.jpeg",
    alt: "Coastal road reflected in a car mirror",
  },
  {
    src: "https://images.pexels.com/photos/37208027/pexels-photo-37208027.jpeg",
    alt: "Sunlight through a tree canopy over a green valley at sunset",
  },
  {
    src: "https://images.pexels.com/photos/36745085/pexels-photo-36745085.jpeg",
    alt: "Forest at dawn with a beautiful sunrise",
  },
  {
    src: "https://images.pexels.com/photos/38344169/pexels-photo-38344169.jpeg",
    alt: "Photography by Rafid Tahmid",
  },
  {
    src: "https://images.pexels.com/photos/37434605/pexels-photo-37434605.jpeg",
    alt: "Photography by Rafid Tahmid",
  },
];

export const interests = [
  "Photography — 1.8M+ views on Pexels",
  "Aquarium & terrarium keeping",
  "Reading",
  "Emerging technology",
  "Debating",
  "Travel",
];
