export interface ExperienceEntry {
  version: string;
  date: string;
  title: string;
  org: string;
  type: "feature" | "fix" | "refactor" | "init";
  changes: string[];
}

export const experience: ExperienceEntry[] = [
  {
    version: "4.2.0",
    date: "2024 — Present",
    title: "Senior Full Stack Engineer",
    org: "Independent / Contract",
    type: "feature",
    changes: [
      "Architecting end-to-end web products for growth-stage startups",
      "Building AI-powered automation systems reducing manual ops by 80%",
      "Delivering sub-100ms TTFB across all client deployments",
      "Implementing conversion engineering frameworks with measurable ROI",
    ],
  },
  {
    version: "3.5.0",
    date: "2023 — 2024",
    title: "Growth Engineer",
    org: "Series A Startup",
    type: "feature",
    changes: [
      "Led technical SEO overhaul — 520% organic traffic increase",
      "Built custom analytics platform replacing GA360",
      "Designed and shipped headless CMS with automated SEO pipeline",
      "Reduced page load time by 65% through edge caching strategy",
    ],
  },
  {
    version: "2.0.0",
    date: "2022 — 2023",
    title: "Full Stack Developer",
    org: "Digital Agency",
    type: "refactor",
    changes: [
      "Shipped 12 client projects across e-commerce, SaaS, and media",
      "Established component library used across all agency projects",
      "Introduced CI/CD pipelines reducing deployment time by 90%",
      "Mentored junior developers on TypeScript and React patterns",
    ],
  },
  {
    version: "1.0.0",
    date: "2021 — 2022",
    title: "Frontend Developer",
    org: "Tech Consultancy",
    type: "init",
    changes: [
      "Built responsive web applications using React and Next.js",
      "Implemented pixel-perfect designs from Figma specifications",
      "Learned performance optimization and Core Web Vitals",
      "Contributed to open-source component libraries",
    ],
  },
];

export const principles = [
  {
    name: "Craft",
    description:
      "Every pixel, every animation, every line of code is deliberate. No shortcuts.",
    icon: "◆",
  },
  {
    name: "Performance",
    description:
      "Speed is a feature. Sub-second loads, minimal bundles, edge-first architecture.",
    icon: "⚡",
  },
  {
    name: "Clarity",
    description:
      "Clean interfaces, readable code, clear communication. Complexity hidden, simplicity shown.",
    icon: "◇",
  },
  {
    name: "Velocity",
    description:
      "Ship fast, measure everything, iterate with data. Momentum over perfection.",
    icon: "→",
  },
];
