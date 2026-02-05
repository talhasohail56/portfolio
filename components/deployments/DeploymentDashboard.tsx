"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Deployment } from "@/lib/data/deployments";
import TerminalReplay from "@/components/ui/TerminalReplay";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

interface DeploymentDashboardProps {
  deployment: Deployment;
}

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "architecture", label: "Architecture" },
  { id: "performance", label: "Performance" },
  { id: "build", label: "Build Log" },
  { id: "results", label: "Results" },
];

function ArchitectureDiagram({ deployment }: { deployment: Deployment }) {
  const layers = [
    { label: "Frontend", value: deployment.architecture.frontend, color: "#00f0ff" },
    { label: "Backend", value: deployment.architecture.backend, color: "#39ff14" },
    { label: "Database", value: deployment.architecture.database, color: "#ff6a00" },
    { label: "Hosting", value: deployment.architecture.hosting, color: "#ff00e5" },
    { label: "CI/CD", value: deployment.architecture.ci, color: "#00f0ff" },
  ];

  return (
    <div className="space-y-3">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="relative"
        >
          <div className="flex items-start gap-4">
            {/* Connection line */}
            <div className="flex flex-col items-center pt-2">
              <div
                className="w-2.5 h-2.5 rounded-full border-2"
                style={{ borderColor: layer.color }}
              />
              {i < layers.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 32 }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.3 }}
                  className="w-[1px] mt-1"
                  style={{ backgroundColor: `${layer.color}30` }}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-3">
              <div
                className="text-[10px] font-mono uppercase tracking-wider mb-0.5"
                style={{ color: `${layer.color}80` }}
              >
                {layer.label}
              </div>
              <div className="text-xs font-mono text-white/60">
                {layer.value}
              </div>
            </div>
          </div>

          {/* Animated request flow dot */}
          {i < layers.length - 1 && (
            <motion.div
              className="absolute left-[4px] w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: layer.color, opacity: 0.5 }}
              animate={{ y: [0, 36] }}
              transition={{
                duration: 1.5,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

function MetricBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider">
          {label}
        </span>
        <span className="text-[10px] font-mono" style={{ color }}>
          {value}
        </span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="h-full rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}40`,
          }}
        />
      </div>
    </div>
  );
}

export default function DeploymentDashboard({
  deployment,
}: DeploymentDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider rounded transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                : "text-white/30 hover:text-white/50 border border-transparent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "overview" && (
          <div className="space-y-6">
            <p className="text-sm text-white/50 leading-relaxed max-w-2xl">
              {deployment.overview}
            </p>
            <div>
              <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-3">
                Technical Challenges
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-2"
              >
                {deployment.challenges.map((challenge, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="flex items-start gap-2"
                  >
                    <span className="text-neon-orange text-xs mt-0.5">▸</span>
                    <span className="text-xs text-white/40">{challenge}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        )}

        {activeTab === "architecture" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-4">
                Request Flow
              </div>
              <ArchitectureDiagram deployment={deployment} />
            </div>
            <div>
              <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-4">
                Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {deployment.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[10px] font-mono text-neon-cyan/60 border border-neon-cyan/15 rounded bg-neon-cyan/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "performance" && (
          <div className="space-y-4 max-w-md">
            <MetricBar
              label="Performance"
              value={deployment.metrics.performance}
              color="#00f0ff"
            />
            <MetricBar
              label="SEO"
              value={deployment.metrics.seo}
              color="#39ff14"
            />
            <MetricBar
              label="Conversion"
              value={deployment.metrics.conversion}
              color="#ff6a00"
            />
            <MetricBar
              label="Uptime"
              value={deployment.metrics.uptime}
              color="#ff00e5"
            />
          </div>
        )}

        {activeTab === "build" && (
          <TerminalReplay lines={deployment.buildLog} speed={60} />
        )}

        {activeTab === "results" && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {deployment.results.map((result, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="glass rounded-lg p-4 border-l-2 border-neon-green/30"
              >
                <div className="flex items-start gap-2">
                  <span className="text-neon-green text-xs mt-0.5">✓</span>
                  <span className="text-xs text-white/50">{result}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
