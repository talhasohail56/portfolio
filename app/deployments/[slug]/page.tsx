"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { getDeployment, deployments } from "@/lib/data/deployments";
import DeploymentDashboard from "@/components/deployments/DeploymentDashboard";
import { fadeInUp } from "@/lib/motion";

export default function DeploymentDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const deployment = getDeployment(slug);

  if (!deployment) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-mono text-white/10 mb-4">404</div>
          <div className="text-sm font-mono text-white/30 mb-6">
            Deployment not found
          </div>
          <Link
            href="/deployments"
            className="text-xs font-mono text-neon-cyan/60 hover:text-neon-cyan transition-colors"
          >
            ← Return to deployment index
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 mb-8 text-[10px] font-mono"
        >
          <Link
            href="/deployments"
            className="text-white/20 hover:text-white/40 transition-colors"
          >
            DP-02
          </Link>
          <span className="text-white/10">/</span>
          <span className="text-neon-cyan/50">{deployment.codename}</span>
        </motion.div>

        {/* Deployment Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`w-2 h-2 rounded-full ${
                deployment.status === "shipped"
                  ? "bg-neon-green"
                  : deployment.status === "iterating"
                    ? "bg-neon-orange"
                    : "bg-white/20"
              }`}
            />
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-wider">
              {deployment.status} — {deployment.year}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-mono font-bold text-white mb-2">
            {deployment.codename}
          </h1>
          <p className="text-sm text-white/40 max-w-xl">{deployment.objective}</p>
          <div className="glow-line opacity-20 mt-6 max-w-xs" />
        </motion.div>

        {/* Metrics Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {[
            {
              label: "Performance",
              value: deployment.metrics.performance,
              suffix: "",
              color: "#00f0ff",
            },
            {
              label: "SEO Score",
              value: deployment.metrics.seo,
              suffix: "",
              color: "#39ff14",
            },
            {
              label: "Conversion",
              value: deployment.metrics.conversion,
              suffix: "%",
              color: "#ff6a00",
            },
            {
              label: "Uptime",
              value: deployment.metrics.uptime,
              suffix: "%",
              color: "#ff00e5",
            },
          ].map((metric) => (
            <div key={metric.label} className="glass rounded-xl p-4">
              <div className="text-[9px] font-mono text-white/20 uppercase tracking-wider mb-1">
                {metric.label}
              </div>
              <div className="text-2xl font-mono font-bold" style={{ color: metric.color }}>
                {metric.value}
                <span className="text-sm opacity-50">{metric.suffix}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-3">
            Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {deployment.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[10px] font-mono text-neon-cyan/60 border border-neon-cyan/15 rounded-md bg-neon-cyan/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-6"
        >
          <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-6">
            Deployment Dashboard
          </div>
          <DeploymentDashboard deployment={deployment} />
        </motion.div>

        {/* Outcome Delta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-2">
            Outcome Delta
          </div>
          <div className="text-4xl md:text-5xl font-mono font-bold text-gradient-cyan">
            {deployment.outcomeDelta}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
