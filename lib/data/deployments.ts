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
    slug: "nexus-commerce",
    codename: "NEXUS-COMMERCE",
    objective: "High-conversion e-commerce platform with sub-second page loads",
    description:
      "End-to-end commerce platform engineered for conversion. Server-side rendered product pages, edge-cached API routes, and real-time inventory sync. Instrumented every interaction for growth analytics.",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "Vercel"],
    outcomeDelta: "+340% conversion rate",
    status: "shipped",
    year: "2024",
    metrics: { performance: 98, seo: 100, conversion: 94, uptime: 99.97 },
    architecture: {
      frontend: "Next.js 14 + React Server Components",
      backend: "Edge Functions + tRPC",
      database: "PostgreSQL + Prisma + Redis Cache",
      hosting: "Vercel Edge Network",
      ci: "GitHub Actions → Preview → Staging → Production",
    },
    buildLog: [
      "[00:00] Initializing build pipeline...",
      "[00:02] Resolving dependencies — 847 modules",
      "[00:05] Compiling TypeScript — strict mode enabled",
      "[00:08] Tree-shaking unused exports...",
      "[00:10] Generating static pages — 24/24 routes",
      "[00:12] Optimizing images — WebP + AVIF fallback",
      "[00:14] Building API routes — edge runtime",
      "[00:16] Bundling complete — 142kB gzipped",
      "[00:17] Running Lighthouse audit...",
      "[00:20] Performance: 98 | SEO: 100 | A11y: 96",
      "[00:21] Deploying to edge network — 34 regions",
      "[00:24] SSL certificates provisioned",
      "[00:25] Cache invalidation complete",
      "[00:26] ✓ Deployment successful — nexus-commerce.vercel.app",
    ],
    overview:
      "NEXUS-COMMERCE was built to prove that e-commerce platforms don't need to be slow. Every architectural decision optimized for conversion velocity — from server-rendered product pages to edge-cached checkout flows.",
    challenges: [
      "Reducing TTFB below 100ms across all product pages",
      "Real-time inventory sync without websocket complexity",
      "Stripe webhook reliability at scale",
      "SEO schema generation for 2000+ products",
    ],
    results: [
      "340% increase in conversion rate post-launch",
      "Sub-100ms TTFB on 95th percentile",
      "99.97% uptime over 6 months",
      "$2.3M GMV processed in first quarter",
    ],
  },
  {
    slug: "signal-analytics",
    codename: "SIGNAL-ANALYTICS",
    objective: "Real-time analytics dashboard with predictive growth signals",
    description:
      "Custom analytics platform replacing Google Analytics with privacy-first, real-time event tracking. Built predictive models for churn and conversion signals.",
    stack: [
      "React",
      "D3.js",
      "Python",
      "FastAPI",
      "ClickHouse",
      "WebSocket",
    ],
    outcomeDelta: "+67% prediction accuracy",
    status: "shipped",
    year: "2024",
    metrics: { performance: 95, seo: 88, conversion: 91, uptime: 99.99 },
    architecture: {
      frontend: "React + D3.js + WebSocket streams",
      backend: "FastAPI + Celery workers",
      database: "ClickHouse + Redis pub/sub",
      hosting: "AWS ECS + CloudFront",
      ci: "GitLab CI → Docker → ECS Blue/Green",
    },
    buildLog: [
      "[00:00] Docker build initiated...",
      "[00:03] Installing Python dependencies — pip freeze",
      "[00:06] Compiling frontend assets — Vite",
      "[00:08] Building D3 visualization modules...",
      "[00:10] Running unit tests — 342/342 passed",
      "[00:12] Building Docker image — multi-stage",
      "[00:15] Pushing to ECR registry...",
      "[00:18] ECS task definition updated",
      "[00:20] Blue/green deployment initiated",
      "[00:24] Health checks passing — all targets healthy",
      "[00:25] ✓ Deployment successful — signal.internal",
    ],
    overview:
      "SIGNAL-ANALYTICS replaced expensive third-party analytics with a purpose-built system. Real-time event ingestion, custom dashboards, and ML-powered prediction models — all privacy-compliant.",
    challenges: [
      "Ingesting 50M+ events per day without data loss",
      "Sub-second dashboard query latency on large datasets",
      "Building accurate churn prediction with limited training data",
      "GDPR-compliant data pipeline architecture",
    ],
    results: [
      "67% improvement in churn prediction accuracy",
      "90% reduction in analytics costs vs Google Analytics 360",
      "Real-time dashboards with < 200ms query latency",
      "Zero data compliance incidents",
    ],
  },
  {
    slug: "velocity-cms",
    codename: "VELOCITY-CMS",
    objective: "Headless CMS with built-in SEO automation and content velocity",
    description:
      "Custom headless CMS designed for content teams that need speed. Automated SEO schema, internal linking, and content performance tracking out of the box.",
    stack: [
      "Next.js",
      "Sanity",
      "TypeScript",
      "OpenAI API",
      "Vercel",
      "Algolia",
    ],
    outcomeDelta: "+520% organic traffic",
    status: "iterating",
    year: "2023",
    metrics: { performance: 96, seo: 100, conversion: 87, uptime: 99.95 },
    architecture: {
      frontend: "Next.js ISR + Edge Middleware",
      backend: "Sanity Studio + Custom Plugins",
      database: "Sanity Content Lake + Algolia Index",
      hosting: "Vercel + Sanity Cloud",
      ci: "GitHub Actions → Sanity Deploy → Vercel",
    },
    buildLog: [
      "[00:00] Fetching content from Sanity...",
      "[00:02] Generating SEO schemas — 156 pages",
      "[00:04] Building internal link graph...",
      "[00:06] Optimizing content images — CDN pipeline",
      "[00:08] Generating sitemap.xml — 156 URLs",
      "[00:09] Indexing content to Algolia...",
      "[00:11] Building ISR pages...",
      "[00:14] Bundle analysis — 98kB gzipped",
      "[00:15] ✓ Deployment successful — velocity-cms.app",
    ],
    overview:
      "VELOCITY-CMS was built for content teams drowning in manual SEO work. Automated schema generation, intelligent internal linking, and real-time content performance signals.",
    challenges: [
      "Automating SEO schema generation for diverse content types",
      "Building intelligent internal linking without manual curation",
      "Maintaining ISR freshness with high content velocity",
      "Integrating AI-powered content suggestions without latency",
    ],
    results: [
      "520% increase in organic traffic in 6 months",
      "Content publication time reduced from 45min to 8min",
      "98% of pages achieving Core Web Vitals thresholds",
      "AI suggestions adopted in 73% of published content",
    ],
  },
  {
    slug: "forge-automation",
    codename: "FORGE-AUTO",
    objective: "End-to-end business process automation with AI orchestration",
    description:
      "Automation platform connecting CRM, email, billing, and support systems. AI-powered workflow orchestration reduced manual operations by 80%.",
    stack: ["Node.js", "Python", "n8n", "OpenAI", "PostgreSQL", "Docker"],
    outcomeDelta: "-80% manual operations",
    status: "shipped",
    year: "2024",
    metrics: { performance: 92, seo: 0, conversion: 96, uptime: 99.98 },
    architecture: {
      frontend: "React Admin Dashboard",
      backend: "Node.js Orchestrator + Python ML Services",
      database: "PostgreSQL + Message Queue (RabbitMQ)",
      hosting: "AWS ECS + RDS",
      ci: "GitHub Actions → Docker Compose → ECS",
    },
    buildLog: [
      "[00:00] Building orchestration engine...",
      "[00:03] Compiling workflow definitions — 47 flows",
      "[00:05] Connecting service integrations — 12 APIs",
      "[00:07] Running integration tests...",
      "[00:10] All 89 integration tests passed",
      "[00:12] Building Docker containers — 4 services",
      "[00:16] Deploying to ECS cluster...",
      "[00:20] Service mesh configured",
      "[00:22] ✓ Deployment successful — forge.internal",
    ],
    overview:
      "FORGE-AUTO connected 12 disparate business systems into a unified automation platform. AI-powered decision routing, automated escalation, and self-healing workflows.",
    challenges: [
      "Integrating 12 APIs with different auth models and rate limits",
      "Building reliable workflow execution with retry and rollback",
      "AI-powered routing with explainable decision logic",
      "Zero-downtime deployment of workflow engine updates",
    ],
    results: [
      "80% reduction in manual operations",
      "Average workflow completion time: 4.2 seconds (was 23 minutes)",
      "99.98% workflow execution reliability",
      "$340K annual savings in operational costs",
    ],
  },
];

export function getDeployment(slug: string): Deployment | undefined {
  return deployments.find((d) => d.slug === slug);
}
