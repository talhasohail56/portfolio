"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/data/site";
import { deployments } from "@/lib/data/deployments";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/motion";
import NodeGraph, { NodeData } from "@/components/graphics/NodeGraph";
import MagneticButton from "@/components/ui/MagneticButton";
import { useReducedMotion, useIsMobile } from "@/lib/utils";
import Link from "next/link";

const HeroR3FScene = dynamic(
  () => import("@/components/graphics/HeroR3FScene"),
  { ssr: false }
);

// Simulated telemetry data
function useTelemetry() {
  const [data, setData] = useState({
    latency: Array.from({ length: 20 }, () => Math.random() * 40 + 20),
    throughput: Array.from({ length: 8 }, () => Math.random() * 80 + 20),
    successRate: 99.7,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => ({
        latency: [...prev.latency.slice(1), Math.random() * 40 + 20],
        throughput: prev.throughput.map(() => Math.random() * 80 + 20),
        successRate: 99 + Math.random() * 0.9,
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return data;
}

// Mini sparkline component
function Sparkline({
  data,
  color = "#00f0ff",
  height = 40,
  width = 200,
}: {
  data: number[];
  color?: string;
  height?: number;
  width?: number;
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * (height - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      {/* Glow effect */}
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.1"
        filter="url(#glow)"
      />
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

export default function CommandCenter() {
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const telemetry = useTelemetry();
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const handleNodeSelect = useCallback((node: NodeData | null) => {
    setSelectedNode(node);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section — Command Center */}
      <section
        ref={heroRef}
        data-section="COMMAND_CENTER"
        className="relative min-h-screen flex items-center pt-20 md:pt-24"
      >
        {/* R3F Background (desktop only) */}
        {!isMobile && !reducedMotion && <HeroR3FScene />}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-12">
          {/* Module header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-glow-pulse" />
              <span className="text-[10px] font-mono text-white/30 tracking-[0.3em] uppercase">
                Module CC-01 / Command Center
              </span>
            </div>
            <div className="glow-line opacity-20 max-w-xs" />
          </motion.div>

          {/* Three column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left Column: System Status */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              className="lg:col-span-3 space-y-4"
            >
              {/* Identity */}
              <div className="glass rounded-xl p-5">
                <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-3">
                  System Identity
                </div>
                <h1 className="text-xl font-bold text-white mb-1">
                  {siteConfig.name}
                </h1>
                <p className="text-xs font-mono text-neon-cyan/70 leading-relaxed">
                  {siteConfig.role}
                </p>
              </div>

              {/* Status Chips */}
              <div className="glass rounded-xl p-5">
                <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-3">
                  Status
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Availability", value: siteConfig.status, color: "bg-neon-green" },
                    { label: "Mode", value: siteConfig.workMode, color: "bg-neon-cyan" },
                    { label: "Timezone", value: siteConfig.timezone, color: "bg-neon-cyan" },
                    { label: "Response SLA", value: siteConfig.responseSLA, color: "bg-neon-orange" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-[10px] font-mono text-white/30">
                        {item.label}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${item.color} opacity-60`} />
                        <span className="text-[11px] font-mono text-white/60">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities */}
              <div className="glass rounded-xl p-5">
                <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-3">
                  Capabilities
                </div>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate={isHeroInView ? "visible" : "hidden"}
                  className="space-y-1.5"
                >
                  {siteConfig.capabilities.map((cap, i) => (
                    <motion.div
                      key={cap}
                      variants={staggerItem}
                      className="flex items-center gap-2"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                        className="text-neon-green text-[10px]"
                      >
                        ✓
                      </motion.span>
                      <span className="text-[11px] font-mono text-white/50">
                        {cap}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Center Column: Node Graph */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              className="lg:col-span-5"
            >
              <div className="glass rounded-xl p-5 h-full">
                <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-4">
                  Node Graph / Capability Map
                </div>
                <NodeGraph onNodeSelect={handleNodeSelect} />

                {/* Selected node detail (desktop) */}
                {selectedNode && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hidden md:block mt-4 p-4 rounded-lg bg-surface-2 border border-white/5"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: selectedNode.color }}
                      />
                      <span className="font-mono text-xs text-white/80 uppercase tracking-wider">
                        {selectedNode.label}
                      </span>
                    </div>
                    <p className="text-xs text-white/40 mb-3 leading-relaxed">
                      {selectedNode.description}
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {selectedNode.metrics.map((m, i) => (
                        <div key={i}>
                          <div className="text-[9px] font-mono text-white/20 uppercase">
                            {m.label}
                          </div>
                          <div className="text-xs font-mono text-neon-cyan">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Right Column: Live Telemetry */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              className="lg:col-span-4 space-y-4"
            >
              {/* Latency Chart */}
              <div className="glass rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase">
                    Latency (ms)
                  </div>
                  <span className="text-[10px] font-mono text-neon-cyan">
                    {telemetry.latency[telemetry.latency.length - 1].toFixed(1)}ms
                  </span>
                </div>
                <Sparkline data={telemetry.latency} width={260} height={50} />
              </div>

              {/* Throughput Bars */}
              <div className="glass rounded-xl p-5">
                <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-3">
                  Throughput
                </div>
                <div className="flex items-end gap-1.5 h-12">
                  {telemetry.throughput.map((v, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-neon-cyan/30 rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: `${v}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      style={{
                        boxShadow: "0 0 6px rgba(0, 240, 255, 0.1)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Success Rate */}
              <div className="glass rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase">
                    Deployment Success
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-glow-pulse" />
                </div>
                <div className="text-3xl font-mono text-white font-bold">
                  {telemetry.successRate.toFixed(1)}
                  <span className="text-lg text-white/30">%</span>
                </div>
                <div className="text-[10px] font-mono text-white/20 mt-1">
                  Last 30 days — {deployments.length} deployments tracked
                </div>
              </div>

              {/* Recent Deployments */}
              <div className="glass rounded-xl p-5">
                <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-3">
                  Recent Deployments
                </div>
                <div className="space-y-2">
                  {deployments.slice(0, 3).map((d) => (
                    <Link
                      key={d.slug}
                      href={`/deployments/${d.slug}`}
                      className="flex items-center justify-between group py-1"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            d.status === "shipped"
                              ? "bg-neon-green"
                              : d.status === "iterating"
                                ? "bg-neon-orange"
                                : "bg-white/20"
                          }`}
                        />
                        <span className="text-[11px] font-mono text-white/40 group-hover:text-white/70 transition-colors">
                          {d.codename}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-neon-cyan/40">
                        {d.outcomeDelta}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Module */}
              <MagneticButton href="/handshake">
                <div className="glass rounded-xl p-4 w-full flex items-center justify-between group hover:border-glow-hover transition-all cursor-pointer">
                  <div>
                    <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase">
                      Module HS-04
                    </div>
                    <div className="text-xs font-mono text-white/60 group-hover:text-neon-cyan transition-colors">
                      Initiate Handshake →
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg border border-neon-cyan/20 flex items-center justify-center group-hover:border-neon-cyan/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-neon-cyan/40 group-hover:bg-neon-cyan animate-glow-pulse" />
                  </div>
                </div>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description section */}
      <section
        data-section="OVERVIEW"
        className="relative py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="text-[10px] font-mono text-white/20 tracking-[0.3em] uppercase mb-4">
              System Overview
            </div>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
              {siteConfig.description}
            </p>
            <div className="glow-line opacity-20 mt-8 max-w-xs" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
