/**
 * ============================================================
 *  SITE CONTENT — sirf yahi file edit karni hai
 * ============================================================
 *  Neeche "PLACEHOLDER" wala text apni details se replace kijiye.
 *  Design/layout ko chhune ki zarurat nahi hai.
 * ============================================================
 */

export const site = {
  name: "Aapka Naam", // TODO: apna naam
  role: "Full-Stack Developer & AI Enthusiast", // TODO
  tagline:
    "Main fast, accessible aur detail-obsessed web products banata hoon — idea se production tak.",
  location: "Jaipur, India",
  availability: "Naye projects ke liye available",
  email: "aap@example.com", // TODO
  resumeUrl: "#", // TODO: resume PDF ka link
  socials: [
    { label: "GitHub", href: "https://github.com/", handle: "@username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/", handle: "in/username" },
    { label: "X", href: "https://x.com/", handle: "@username" },
    { label: "Email", href: "mailto:aap@example.com", handle: "aap@example.com" },
  ],
  stats: [
    { value: "4+", label: "Saal experience" },
    { value: "30+", label: "Projects shipped" },
    { value: "12", label: "Open-source PRs" },
    { value: "99", label: "Lighthouse score" },
  ],
};

export const about = {
  heading: "Namaste, main developer hoon.",
  paragraphs: [
    "Pichle kuch saalon se main web applications banata hoon — startups ke liye MVPs se lekar scale karne wale dashboards tak. Mera focus hamesha ek hi rehta hai: clean architecture aur ek aisa UI jo bina soche samajh aaye.",
    "Jab main code nahi likh raha hota, to open-source mein contribute karta hoon, AI tooling experiment karta hoon, aur design systems ke bare mein padhta hoon.",
  ],
  highlights: [
    { title: "Product thinking", text: "Sirf tickets nahi — problem samajhkar solution design karta hoon." },
    { title: "Performance first", text: "Core Web Vitals aur bundle size par shuru se nazar." },
    { title: "Design aware", text: "Figma se pixel-perfect implementation, motion ke saath." },
  ],
};

export const skills = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    group: "Backend",
    items: ["Node.js", "PostgreSQL", "Prisma", "Redis", "REST", "tRPC"],
  },
  {
    group: "AI / Data",
    items: ["Python", "LLM APIs", "LangChain", "Vector DBs", "Pandas"],
  },
  {
    group: "Tooling",
    items: ["Git", "Docker", "Vercel", "Figma", "Playwright", "CI/CD"],
  },
];

export const projects = [
  {
    title: "DroidCraft AI",
    blurb:
      "AI-powered code review companion jo pull requests ko review karke actionable suggestions deta hai.",
    tags: ["Next.js", "TypeScript", "OpenAI"],
    year: "2025",
    href: "https://github.com/",
    accent: "from-violet-500/25 to-cyan-400/10",
    featured: true,
  },
  {
    title: "Nebula Analytics",
    blurb:
      "Real-time analytics dashboard — 1M+ events/day, sub-second queries aur customizable widgets.",
    tags: ["React", "Node.js", "PostgreSQL"],
    year: "2024",
    href: "#",
    accent: "from-cyan-400/25 to-emerald-400/10",
  },
  {
    title: "Kisan Market",
    blurb:
      "Farmers ke liye multilingual marketplace — offline-first PWA with regional language support.",
    tags: ["PWA", "Firebase", "i18n"],
    year: "2024",
    href: "#",
    accent: "from-amber-400/25 to-rose-400/10",
  },
  {
    title: "MotionKit",
    blurb:
      "Headless animation primitives ka open-source library — 2k+ GitHub stars.",
    tags: ["Library", "TypeScript", "OSS"],
    year: "2023",
    href: "#",
    accent: "from-rose-400/25 to-violet-500/10",
  },
];

export const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "Company Name",
    period: "2023 — Present",
    text: "Design system banaya jo 40+ engineers use karte hain; page load time 38% kam kiya.",
  },
  {
    role: "Full-Stack Developer",
    company: "Startup Name",
    period: "2021 — 2023",
    text: "0 se 50k users tak product scale kiya — auth, billing aur dashboard end-to-end.",
  },
  {
    role: "Freelance Developer",
    company: "Independent",
    period: "2019 — 2021",
    text: "12+ clients ke liye websites aur internal tools deliver kiye.",
  },
];

export const testimonials = [
  {
    quote:
      "Bahut hi polished kaam — deadline se pehle deliver kiya aur code quality outstanding thi.",
    author: "Client Name",
    title: "Founder, Startup",
  },
  {
    quote:
      "Design ko code mein utarte hue unhone har detail ka khayal rakha. Team ka go-to frontend guy.",
    author: "Team Lead",
    title: "Product Company",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
