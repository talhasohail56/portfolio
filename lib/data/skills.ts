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
        proficiency: 97,
        tools: ["React 18+", "Next.js 14", "RSC", "Server Actions"],
        usage: "Primary framework for all production web applications",
      },
      {
        name: "TypeScript",
        category: "Frontend",
        proficiency: 95,
        tools: ["Strict mode", "Zod", "tRPC", "Type-level programming"],
        usage: "Every project. Zero tolerance for any.",
      },
      {
        name: "Motion & Animation",
        category: "Frontend",
        proficiency: 92,
        tools: ["Framer Motion", "GSAP", "CSS Animations", "Lottie"],
        usage:
          "Interaction design, page transitions, scroll-driven animations",
      },
      {
        name: "CSS / Tailwind",
        category: "Frontend",
        proficiency: 96,
        tools: ["Tailwind CSS", "CSS Modules", "PostCSS", "CSS Grid"],
        usage: "Responsive layouts, design systems, component styling",
      },
      {
        name: "Three.js / WebGL",
        category: "Frontend",
        proficiency: 78,
        tools: ["Three.js", "R3F", "Drei", "Shader programming"],
        usage: "Signature 3D experiences, product visualizations",
      },
    ],
  },
  {
    name: "Backend & Infrastructure",
    code: "BE",
    skills: [
      {
        name: "Node.js",
        category: "Backend",
        proficiency: 94,
        tools: ["Express", "Fastify", "tRPC", "Edge Runtime"],
        usage: "API development, serverless functions, real-time systems",
      },
      {
        name: "Python",
        category: "Backend",
        proficiency: 85,
        tools: ["FastAPI", "Celery", "Pandas", "scikit-learn"],
        usage: "ML pipelines, data processing, automation scripts",
      },
      {
        name: "Databases",
        category: "Backend",
        proficiency: 90,
        tools: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse"],
        usage: "Schema design, query optimization, caching strategies",
      },
      {
        name: "DevOps & CI/CD",
        category: "Backend",
        proficiency: 88,
        tools: ["Docker", "GitHub Actions", "Vercel", "AWS"],
        usage: "Automated pipelines, containerization, infrastructure as code",
      },
    ],
  },
  {
    name: "Growth & Analytics",
    code: "GR",
    skills: [
      {
        name: "SEO Engineering",
        category: "Growth",
        proficiency: 93,
        tools: [
          "Schema markup",
          "Core Web Vitals",
          "Sitemap automation",
          "Internal linking",
        ],
        usage:
          "Technical SEO implementation, programmatic optimization, ranking systems",
      },
      {
        name: "Analytics & Instrumentation",
        category: "Growth",
        proficiency: 90,
        tools: ["Custom analytics", "GA4", "Mixpanel", "PostHog"],
        usage: "Event tracking, funnel analysis, attribution modeling",
      },
      {
        name: "Conversion Optimization",
        category: "Growth",
        proficiency: 88,
        tools: ["A/B testing", "Heatmaps", "Session replay", "Funnel analysis"],
        usage: "Landing page optimization, checkout flow engineering",
      },
      {
        name: "AI & Automation",
        category: "Growth",
        proficiency: 86,
        tools: ["OpenAI API", "LangChain", "n8n", "Custom agents"],
        usage:
          "Content automation, workflow orchestration, intelligent routing",
      },
    ],
  },
];
