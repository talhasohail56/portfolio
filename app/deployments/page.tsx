"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { deployments } from "@/lib/data/deployments";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";
import TiltCard from "@/components/ui/TiltCard";
import BorderTrace from "@/components/graphics/BorderTrace";

export default function DeploymentsPage() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-glow-pulse" />
            <span className="text-[10px] font-mono text-white/30 tracking-[0.3em] uppercase">
              Module DP-02 / Deployments
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-2">
            Deployment Index
          </h1>
          <p className="text-sm text-white/30 font-mono max-w-lg">
            Production systems built, shipped, and measured. Each deployment
            represents a complete engineering engagement with measurable
            outcomes.
          </p>
          <div className="glow-line opacity-20 mt-6 max-w-xs" />
        </motion.div>

        {/* Deployment Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {deployments.map((deployment) => (
            <motion.div key={deployment.slug} variants={staggerItem}>
              <Link href={`/deployments/${deployment.slug}`}>
                <TiltCard>
                  <div
                    className="relative glass rounded-xl p-6 group cursor-pointer overflow-hidden"
                    onMouseEnter={() => setHoveredSlug(deployment.slug)}
                    onMouseLeave={() => setHoveredSlug(null)}
                  >
                    {/* Border trace */}
                    <BorderTrace active={hoveredSlug === deployment.slug} />

                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              deployment.status === "shipped"
                                ? "bg-neon-green"
                                : deployment.status === "iterating"
                                  ? "bg-neon-orange"
                                  : "bg-white/20"
                            }`}
                          />
                          <span className="text-[10px] font-mono text-white/20 uppercase tracking-wider">
                            {deployment.status}
                          </span>
                        </div>
                        <h2 className="text-lg font-mono font-bold text-white/80 group-hover:text-white transition-colors">
                          {deployment.codename}
                        </h2>
                      </div>
                      <span className="text-[10px] font-mono text-white/15">
                        {deployment.year}
                      </span>
                    </div>

                    {/* Objective */}
                    <p className="text-xs text-white/40 mb-4 leading-relaxed">
                      {deployment.objective}
                    </p>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {deployment.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[9px] font-mono text-white/30 border border-white/8 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Outcome */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div>
                        <div className="text-[9px] font-mono text-white/15 uppercase tracking-wider">
                          Outcome Delta
                        </div>
                        <div className="text-sm font-mono text-neon-cyan font-bold">
                          {deployment.outcomeDelta}
                        </div>
                      </div>
                      <div className="text-[10px] font-mono text-white/20 group-hover:text-neon-cyan/50 transition-colors">
                        View deployment →
                      </div>
                    </div>

                    {/* Hover log overlay */}
                    {hoveredSlug === deployment.slug && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute bottom-0 right-0 w-48 p-3 pointer-events-none"
                      >
                        <div className="space-y-0.5">
                          {deployment.buildLog.slice(-3).map((line, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-[8px] font-mono text-neon-cyan/20 truncate"
                            >
                              {line}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
