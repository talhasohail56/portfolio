export type DeploymentStatus = "shipped" | "iterating" | "archived";

export interface Deployment {
  slug: string;
  codename: string;
  objective: string;
  description: string;
  stack: string[];
  outcomeDelta: string;
  status: DeploymentStatus;
  year: string;
  metrics: {
    performance: number;
    seo: number;
    conversion: number;
    uptime: number;
  };
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    hosting: string;
    ci: string;
  };
  buildLog: string[];
  overview: string;
  challenges: string[];
  results: string[];
}

export const deployments: Deployment[] = [
  {
    slug: "brand-studio",
    codename: "BRAND-STUDIO",
    objective: "Portfolio and brand identity site with cinematic motion design",
    description:
      "Custom-built portfolio experience using Next.js, Framer Motion, and Tailwind. Features cinematic boot sequence, interactive node graph, animated dashboards, and a systems-UI aesthetic.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    outcomeDelta: "100% custom build",
    status: "shipped",
    year: "2025",
    metrics: { performance: 96, seo: 95, conversion: 90, uptime: 99.9 },
    architecture: {
      frontend: "Next.js 14 + App Router + Framer Motion",
      backend: "Static generation + API routes",
      database: "Content driven from local data files",
      hosting: "Vercel Edge Network",
      ci: "GitHub → Vercel auto-deploy on push",
    },
    buildLog: [
      "[00:00] Initializing build pipeline...",
      "[00:02] Resolving dependencies — 312 modules",
      "[00:04] Compiling TypeScript...",
      "[00:06] Building app routes — 7 pages",
      "[00:08] Generating static pages...",
      "[00:10] Optimizing assets — SVG + WebP",
      "[00:12] Bundling complete — 141kB gzipped",
      "[00:13] Running Lighthouse audit...",
      "[00:15] Performance: 96 | SEO: 95 | A11y: 94",
      "[00:16] Deploying to Vercel...",
      "[00:18] ✓ Deployment successful",
    ],
    overview:
      "BRAND-STUDIO is this portfolio itself — designed to feel like an interactive system, not a template. Every component is hand-built with attention to motion, layout, and technical detail.",
    challenges: [
      "Making it feel like a product, not a typical portfolio",
      "Balancing heavy animation with fast load times",
      "Building an interactive node graph from scratch in SVG",
      "Keeping the entire site responsive and accessible",
    ],
    results: [
      "Sub-2s full page load on mobile",
      "96 Lighthouse performance score",
      "Fully responsive across all breakpoints",
      "Reduced-motion safe with automatic fallbacks",
    ],
  },
  {
    slug: "ai-content-engine",
    codename: "AI-CONTENT-ENGINE",
    objective: "Automated content generation pipeline using AI models",
    description:
      "Built an AI-powered content automation system that generates social media posts, blog drafts, and marketing copy. Uses prompt engineering and workflow automation to produce consistent, on-brand content at scale.",
    stack: ["OpenAI API", "Node.js", "n8n", "Canva", "React"],
    outcomeDelta: "10x content output",
    status: "shipped",
    year: "2024",
    metrics: { performance: 90, seo: 80, conversion: 88, uptime: 99.5 },
    architecture: {
      frontend: "React dashboard for managing outputs",
      backend: "Node.js + OpenAI API integration",
      database: "JSON file storage + Google Sheets sync",
      hosting: "Vercel + n8n cloud",
      ci: "Manual deploy + webhook triggers",
    },
    buildLog: [
      "[00:00] Initializing automation pipeline...",
      "[00:02] Connecting to OpenAI API...",
      "[00:04] Loading prompt templates — 8 content types",
      "[00:06] Setting up n8n workflow nodes...",
      "[00:08] Testing content generation — blog post",
      "[00:10] Testing content generation — social captions",
      "[00:12] Output quality check — passed",
      "[00:14] Connecting Canva export pipeline...",
      "[00:16] ✓ Pipeline operational — ready for batch runs",
    ],
    overview:
      "AI-CONTENT-ENGINE solved the bottleneck of content creation. By combining prompt engineering with workflow automation, it produces draft-ready content for multiple platforms in minutes instead of hours.",
    challenges: [
      "Writing prompts that produce consistent brand voice",
      "Handling rate limits and API errors gracefully",
      "Integrating Canva templates for visual content",
      "Quality control — making AI output actually usable",
    ],
    results: [
      "10x increase in content output per week",
      "Content draft time reduced from 2 hours to 10 minutes",
      "Consistent brand voice across all generated content",
      "Used by 3 clients for ongoing content needs",
    ],
  },
  {
    slug: "flavor-house",
    codename: "FLAVOR-HOUSE",
    objective: "Restaurant landing page with online menu and reservation flow",
    description:
      "Modern restaurant website built with Next.js and Tailwind CSS. Features an interactive menu, reservation form, smooth animations, and a fully responsive mobile-first design.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    outcomeDelta: "+180% online bookings",
    status: "shipped",
    year: "2024",
    metrics: { performance: 97, seo: 98, conversion: 92, uptime: 99.9 },
    architecture: {
      frontend: "Next.js + Tailwind + Framer Motion",
      backend: "Static site + form endpoint (Formspree)",
      database: "Menu data from local JSON",
      hosting: "Vercel",
      ci: "GitHub → Vercel auto-deploy",
    },
    buildLog: [
      "[00:00] Initializing build...",
      "[00:02] Compiling pages — 5 routes",
      "[00:04] Optimizing food images — WebP conversion",
      "[00:06] Building menu components...",
      "[00:08] Generating static HTML...",
      "[00:10] Bundle size — 89kB gzipped",
      "[00:11] Lighthouse: 97 | SEO: 98",
      "[00:12] ✓ Deployment successful",
    ],
    overview:
      "FLAVOR-HOUSE replaced an outdated restaurant website with a modern, fast experience. Focus was on beautiful food imagery, easy navigation, and getting customers to book online.",
    challenges: [
      "Optimizing high-quality food images without killing load times",
      "Designing a menu layout that works on mobile",
      "Building a smooth reservation flow with form validation",
      "Meeting the client's brand aesthetic in code",
    ],
    results: [
      "180% increase in online reservation bookings",
      "97 Lighthouse performance score",
      "Average session duration increased by 45%",
      "Client reported direct revenue increase from web traffic",
    ],
  },
  {
    slug: "canva-brand-kit",
    codename: "CANVA-BRAND-KIT",
    objective: "Complete brand identity system designed in Canva for a startup",
    description:
      "Designed a full brand identity package using Canva Pro — logo variations, color palette, typography system, social media templates, pitch deck, and marketing collateral. Delivered as a reusable brand kit.",
    stack: ["Canva Pro", "Brand Kit", "Social Templates", "Pitch Deck"],
    outcomeDelta: "Full brand identity",
    status: "shipped",
    year: "2024",
    metrics: { performance: 0, seo: 0, conversion: 85, uptime: 0 },
    architecture: {
      frontend: "Canva Pro design platform",
      backend: "Template system with brand kit variables",
      database: "Canva cloud storage",
      hosting: "Canva + exported assets (PNG, PDF, SVG)",
      ci: "Version-controlled in Canva folders",
    },
    buildLog: [
      "[00:00] Setting up Canva brand kit...",
      "[00:02] Defining color palette — 5 primary, 3 accent",
      "[00:04] Selecting typography — heading + body fonts",
      "[00:06] Designing logo variations — 4 formats",
      "[00:08] Building social media templates — 12 layouts",
      "[00:10] Creating pitch deck — 18 slides",
      "[00:12] Exporting assets — PNG, PDF, SVG",
      "[00:14] Brand guidelines document compiled",
      "[00:15] ✓ Brand kit delivered to client",
    ],
    overview:
      "CANVA-BRAND-KIT gave a startup a professional brand identity without the agency price tag. Every asset was designed for consistency and easy reuse by the client's team.",
    challenges: [
      "Creating a cohesive visual system within Canva's constraints",
      "Designing templates flexible enough for the client to reuse",
      "Maintaining visual consistency across 30+ asset types",
      "Balancing modern aesthetics with brand professionalism",
    ],
    results: [
      "Complete brand identity delivered in 5 days",
      "30+ reusable templates for social and print",
      "Client self-sufficient for ongoing content creation",
      "Startup secured seed funding using the pitch deck",
    ],
  },
];

export function getDeployment(slug: string): Deployment | undefined {
  return deployments.find((d) => d.slug === slug);
}
