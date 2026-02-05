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
    slug: "tiktok-automation",
    codename: "TIKTOK-AUTO",
    objective: "Automated TikTok content pipeline with AI-generated avatars at scale",
    description:
      "Built an end-to-end TikTok automation system — AI avatar generation, script writing, video assembly, and scheduled posting. Hundreds of posts published, driving 5M+ cumulative views across accounts.",
    stack: ["AI Avatars", "TikTok API", "Automation Scripts", "Canva", "CapCut"],
    outcomeDelta: "5M+ views",
    status: "iterating",
    year: "2024",
    metrics: { performance: 92, seo: 0, conversion: 88, uptime: 99.5 },
    architecture: {
      frontend: "Content dashboard + scheduling interface",
      backend: "Automation scripts + AI avatar generation",
      database: "Content library + analytics tracking",
      hosting: "Cloud-based automation pipeline",
      ci: "Batch processing → Review → Scheduled publish",
    },
    buildLog: [
      "[00:00] Initializing content pipeline...",
      "[00:02] Loading AI avatar models...",
      "[00:04] Generating script batch — 30 variations",
      "[00:06] Rendering AI avatar videos...",
      "[00:08] Assembling video edits — captions + hooks",
      "[00:10] Quality check — 28/30 passed",
      "[00:12] Scheduling posts — optimal time slots",
      "[00:14] Publishing batch to TikTok...",
      "[00:16] Analytics tracking enabled",
      "[00:18] ✓ Batch deployed — 28 videos live",
    ],
    overview:
      "TIKTOK-AUTO is a content machine. AI-generated avatars deliver scripted content at scale — no filming, no editing bottleneck. The system handles everything from script to publish, letting content velocity drive views.",
    challenges: [
      "Making AI avatars feel natural and engaging, not robotic",
      "Writing hooks that stop the scroll in the first 2 seconds",
      "Maintaining content quality at high volume",
      "Adapting to TikTok algorithm changes in real-time",
    ],
    results: [
      "5M+ cumulative views across managed accounts",
      "Hundreds of posts published through the pipeline",
      "Consistent posting schedule without manual filming",
      "Multiple viral posts exceeding 500K views each",
    ],
  },
  {
    slug: "apex-vision",
    codename: "APEX-VISION",
    objective: "Modern business website for ApexVision with strong brand presence",
    description:
      "Designed and developed the ApexVision website — clean layout, responsive design, and smooth interactions. Built to establish a professional online presence and drive client inquiries.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    outcomeDelta: "Professional brand launch",
    status: "shipped",
    year: "2024",
    metrics: { performance: 96, seo: 94, conversion: 90, uptime: 99.9 },
    architecture: {
      frontend: "Next.js + Tailwind CSS + Framer Motion",
      backend: "Static generation + contact form endpoint",
      database: "Content from local data files",
      hosting: "Vercel",
      ci: "GitHub → Vercel auto-deploy",
    },
    buildLog: [
      "[00:00] Initializing build...",
      "[00:02] Compiling pages — 6 routes",
      "[00:04] Optimizing assets — image compression",
      "[00:06] Building component library...",
      "[00:08] Generating static HTML...",
      "[00:10] Bundle size — 112kB gzipped",
      "[00:11] Lighthouse: 96 | SEO: 94 | A11y: 95",
      "[00:12] Deploying to Vercel...",
      "[00:14] ✓ Deployment successful — apexvision live",
    ],
    overview:
      "APEX-VISION needed a website that matched their ambition. Clean design, fast performance, and a layout that communicates credibility from the first scroll.",
    challenges: [
      "Translating the client's brand identity into a modern web design",
      "Building a layout that works for both B2B and B2C audiences",
      "Optimizing for fast load times with rich visual content",
      "Creating smooth interactions without heavy JS bundles",
    ],
    results: [
      "96 Lighthouse performance score",
      "Fully responsive across all devices",
      "Client reported increase in inbound inquiries post-launch",
      "Clean codebase handed off for future maintenance",
    ],
  },
  {
    slug: "hydra-pool-services",
    codename: "HYDRA-POOL",
    objective: "Service-based website for HydraPool Services with booking integration",
    description:
      "Built the HydraPool Services website — a service-focused site with clear pricing, service breakdowns, and a contact flow designed to convert visitors into booked clients.",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    outcomeDelta: "+200% client inquiries",
    status: "shipped",
    year: "2024",
    metrics: { performance: 97, seo: 96, conversion: 93, uptime: 99.9 },
    architecture: {
      frontend: "Next.js + Tailwind CSS",
      backend: "Static site + form handling",
      database: "Service data from structured JSON",
      hosting: "Vercel",
      ci: "GitHub → Vercel auto-deploy",
    },
    buildLog: [
      "[00:00] Initializing build...",
      "[00:02] Compiling pages — 5 routes",
      "[00:04] Building service card components...",
      "[00:06] Optimizing hero images — WebP conversion",
      "[00:08] Generating static HTML...",
      "[00:10] Bundle size — 85kB gzipped",
      "[00:11] Lighthouse: 97 | SEO: 96",
      "[00:12] ✓ Deployment successful — hydrapoolservices live",
    ],
    overview:
      "HYDRA-POOL turned a local pool services business into a professional online presence. Service pages structured for clarity, pricing laid out simply, and every page designed to push visitors toward booking.",
    challenges: [
      "Making a service business look premium online",
      "Structuring service tiers in a way that's easy to scan",
      "Building trust signals for a local business audience",
      "SEO optimization for local service searches",
    ],
    results: [
      "200% increase in client inquiries after launch",
      "97 Lighthouse performance score",
      "Ranking for local pool service keywords",
      "Client fully self-sufficient with content updates",
    ],
  },
  {
    slug: "clay-culture",
    codename: "CLAY-CULTURE",
    objective: "Creative brand website for Clay Culture with visual storytelling",
    description:
      "Designed and developed the Clay Culture website — an artisan brand site with rich visuals, smooth scroll animations, and a layout that tells the brand story through design.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    outcomeDelta: "Brand identity online",
    status: "shipped",
    year: "2024",
    metrics: { performance: 95, seo: 93, conversion: 88, uptime: 99.9 },
    architecture: {
      frontend: "Next.js + Tailwind CSS + Framer Motion",
      backend: "Static generation",
      database: "Product and brand data from local files",
      hosting: "Vercel",
      ci: "GitHub → Vercel auto-deploy",
    },
    buildLog: [
      "[00:00] Initializing build...",
      "[00:02] Compiling pages — 5 routes",
      "[00:04] Optimizing product photography — WebP + AVIF",
      "[00:06] Building gallery components...",
      "[00:08] Adding scroll animations...",
      "[00:10] Generating static HTML...",
      "[00:12] Bundle size — 105kB gzipped",
      "[00:13] Lighthouse: 95 | SEO: 93 | A11y: 94",
      "[00:14] ✓ Deployment successful — clay-culture live",
    ],
    overview:
      "CLAY-CULTURE is an artisan brand that needed a website as intentional as their craft. Every section is designed to let the products breathe — large imagery, minimal text, smooth transitions.",
    challenges: [
      "Balancing heavy product imagery with fast load times",
      "Creating scroll animations that enhance, not distract",
      "Capturing an artisan aesthetic in a modern web framework",
      "Responsive image galleries that look good on every screen size",
    ],
    results: [
      "95 Lighthouse performance score",
      "Visual-first design that elevated the brand online",
      "Smooth scroll animations on all pages",
      "Client using the site as their primary sales channel",
    ],
  },
  {
    slug: "brand-studio",
    codename: "BRAND-STUDIO",
    objective: "Portfolio and brand identity site with cinematic motion design",
    description:
      "Custom-built portfolio experience using Next.js, Framer Motion, and Tailwind. Features cinematic boot sequence, interactive node graph, animated dashboards, and a systems-UI aesthetic.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Three.js"],
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
];

export function getDeployment(slug: string): Deployment | undefined {
  return deployments.find((d) => d.slug === slug);
}
