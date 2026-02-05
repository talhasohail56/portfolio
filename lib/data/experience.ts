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
    version: "3.0.0",
    date: "2024 — Present",
    title: "Frontend Developer & TikTok Automation Operator",
    org: "Freelance / Independent",
    type: "feature",
    changes: [
      "Built client sites for ApexVision, HydraPool Services, and Clay Culture",
      "Running TikTok automation with AI avatars — 5M+ cumulative views",
      "Hundreds of AI-generated posts published across managed accounts",
      "Designing brand visuals and marketing collateral with Canva",
    ],
  },
  {
    version: "2.0.0",
    date: "2023 — 2024",
    title: "Frontend Developer & Content Creator",
    org: "Freelance",
    type: "refactor",
    changes: [
      "Shipped client websites using Next.js, React, and Tailwind CSS",
      "Started building AI content automation pipelines",
      "Began experimenting with AI avatars for social media content",
      "Managed project deployments on Vercel and Netlify",
    ],
  },
  {
    version: "1.0.0",
    date: "2022 — 2023",
    title: "Web Developer",
    org: "Self-taught / Early Projects",
    type: "init",
    changes: [
      "Learned HTML, CSS, and JavaScript fundamentals from scratch",
      "Built first React and Next.js applications",
      "Started using Node.js for basic API development",
      "Developed design skills with Canva for client projects",
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
      "Speed is a feature. Fast loads, minimal bundles, clean code that works.",
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
      "Ship fast, learn constantly, iterate with feedback. Progress over perfection.",
    icon: "→",
  },
];
