export interface Skill {
  name: string;
  category: string;
  proficiency: number;
  tools: string[];
  usage: string;
}

export interface SkillCategory {
  name: string;
  code: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Engineering",
    code: "FE",
    skills: [
      {
        name: "React / Next.js",
        category: "Frontend",
        proficiency: 90,
        tools: ["React 18+", "Next.js 14", "App Router", "SSR / SSG"],
        usage: "Primary framework for building fast, modern web applications",
      },
      {
        name: "HTML / CSS",
        category: "Frontend",
        proficiency: 95,
        tools: ["Semantic HTML", "Flexbox", "CSS Grid", "Responsive Design"],
        usage: "Foundation of every project — clean markup, pixel-perfect layouts",
      },
      {
        name: "Tailwind CSS",
        category: "Frontend",
        proficiency: 92,
        tools: ["Tailwind CSS", "Custom themes", "Component styling", "Dark mode"],
        usage: "Rapid UI development, design systems, responsive layouts",
      },
      {
        name: "Motion & Animation",
        category: "Frontend",
        proficiency: 80,
        tools: ["Framer Motion", "CSS Animations", "GSAP"],
        usage: "Page transitions, hover effects, scroll-driven animations",
      },
      {
        name: "TypeScript",
        category: "Frontend",
        proficiency: 75,
        tools: ["Type safety", "Interfaces", "Generics"],
        usage: "Improving code reliability and developer experience",
      },
    ],
  },
  {
    name: "Backend & Tooling",
    code: "BE",
    skills: [
      {
        name: "Node.js",
        category: "Backend",
        proficiency: 78,
        tools: ["Express", "REST APIs", "npm scripts", "Serverless functions"],
        usage: "API endpoints, build tooling, lightweight backend services",
      },
      {
        name: "Git & GitHub",
        category: "Backend",
        proficiency: 85,
        tools: ["Git", "GitHub", "Version control", "Collaboration"],
        usage: "Source control, branch management, open-source contributions",
      },
      {
        name: "Vercel / Deployment",
        category: "Backend",
        proficiency: 82,
        tools: ["Vercel", "Netlify", "GitHub Pages", "CI/CD basics"],
        usage: "Deploying and hosting frontend projects with zero-config",
      },
    ],
  },
  {
    name: "AI, Automation & Design",
    code: "AI",
    skills: [
      {
        name: "TikTok Automation",
        category: "AI",
        proficiency: 92,
        tools: ["AI Avatars", "Batch posting", "CapCut", "Scheduling tools"],
        usage: "End-to-end TikTok content pipeline — 5M+ cumulative views, hundreds of posts",
      },
      {
        name: "AI Avatar Creation",
        category: "AI",
        proficiency: 88,
        tools: ["AI video generators", "Voice synthesis", "Script writing", "CapCut"],
        usage: "Creating realistic AI avatars for TikTok content at scale",
      },
      {
        name: "AI Content Automation",
        category: "AI",
        proficiency: 85,
        tools: ["ChatGPT", "Claude", "OpenAI API", "Prompt engineering"],
        usage: "Automating scripts, captions, blog drafts, and marketing copy",
      },
      {
        name: "Canva Design",
        category: "AI",
        proficiency: 90,
        tools: ["Canva Pro", "Brand kits", "Templates", "Social media design"],
        usage: "Marketing graphics, social content, presentations, brand collateral",
      },
    ],
  },
];
