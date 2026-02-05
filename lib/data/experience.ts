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
    title: "Frontend Developer & AI Automation Specialist",
    org: "Freelance / Independent",
    type: "feature",
    changes: [
      "Building modern frontend sites with React, Next.js, and Tailwind",
      "Designing AI-powered content automation workflows for clients",
      "Creating brand visuals and marketing collateral with Canva",
      "Deploying performant web projects on Vercel with optimized SEO",
    ],
  },
  {
    version: "2.0.0",
    date: "2023 — 2024",
    title: "Frontend Developer",
    org: "Freelance / Agency Work",
    type: "refactor",
    changes: [
      "Shipped multiple client websites using Next.js and React",
      "Built responsive, mobile-first layouts with Tailwind CSS",
      "Integrated AI tools into content production pipelines",
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
