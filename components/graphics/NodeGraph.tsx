"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface NodeData {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  description: string;
  metrics: { label: string; value: string }[];
}

const nodes: NodeData[] = [
  {
    id: "react",
    label: "React",
    x: 300,
    y: 120,
    color: "#00f0ff",
    description: "Building modern, component-driven UIs with React and Next.js. Server rendering, routing, and fast page loads.",
    metrics: [
      { label: "Frameworks", value: "React, Next.js" },
      { label: "Styling", value: "Tailwind, CSS" },
      { label: "Projects", value: "10+" },
    ],
  },
  {
    id: "design",
    label: "Design",
    x: 500,
    y: 80,
    color: "#39ff14",
    description: "Creative design with Canva — brand kits, social media templates, marketing collateral, and pitch decks.",
    metrics: [
      { label: "Tool", value: "Canva Pro" },
      { label: "Assets Made", value: "100+" },
      { label: "Brand Kits", value: "5+" },
    ],
  },
  {
    id: "ai",
    label: "AI",
    x: 520,
    y: 240,
    color: "#ff6a00",
    description: "AI content automation — prompt engineering, batch content generation, and workflow integration with ChatGPT and Claude.",
    metrics: [
      { label: "Models", value: "GPT-4, Claude" },
      { label: "Content 10x", value: "Yes" },
      { label: "Workflows", value: "n8n, Zapier" },
    ],
  },
  {
    id: "node",
    label: "Node",
    x: 300,
    y: 280,
    color: "#ff00e5",
    description: "Node.js for API routes, build tools, and lightweight backend services powering frontend apps.",
    metrics: [
      { label: "Runtime", value: "Node.js" },
      { label: "Framework", value: "Express" },
      { label: "Use", value: "APIs & tooling" },
    ],
  },
  {
    id: "html-css",
    label: "HTML/CSS",
    x: 120,
    y: 240,
    color: "#00f0ff",
    description: "Semantic HTML and modern CSS — Flexbox, Grid, responsive design, and accessibility fundamentals.",
    metrics: [
      { label: "Layout", value: "Grid, Flexbox" },
      { label: "Responsive", value: "Mobile-first" },
      { label: "A11y", value: "Semantic HTML" },
    ],
  },
  {
    id: "deploy",
    label: "Deploy",
    x: 100,
    y: 100,
    color: "#39ff14",
    description: "Deploying and hosting sites on Vercel and Netlify with Git-based workflows and instant previews.",
    metrics: [
      { label: "Platforms", value: "Vercel, Netlify" },
      { label: "CI", value: "GitHub auto-deploy" },
      { label: "SSL", value: "Auto-provisioned" },
    ],
  },
];

const connections = [
  ["react", "html-css"],
  ["react", "node"],
  ["react", "deploy"],
  ["design", "ai"],
  ["ai", "node"],
  ["html-css", "design"],
  ["deploy", "react"],
  ["node", "deploy"],
];

interface NodeGraphProps {
  onNodeSelect?: (node: NodeData | null) => void;
}

export default function NodeGraph({ onNodeSelect }: NodeGraphProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 620, height: 380 });

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current?.parentElement) {
        const rect = svgRef.current.parentElement.getBoundingClientRect();
        setDimensions({
          width: Math.max(rect.width, 300),
          height: Math.max(rect.height, 250),
        });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const scale = Math.min(dimensions.width / 620, dimensions.height / 380);

  const handleNodeClick = useCallback(
    (nodeId: string) => {
      const node = nodes.find((n) => n.id === nodeId);
      if (selectedNode === nodeId) {
        setSelectedNode(null);
        onNodeSelect?.(null);
      } else {
        setSelectedNode(nodeId);
        onNodeSelect?.(node || null);
      }
    },
    [selectedNode, onNodeSelect]
  );

  const getNode = (id: string) => nodes.find((n) => n.id === id);

  return (
    <div className="relative w-full h-full min-h-[300px]">
      <svg
        ref={svgRef}
        viewBox={`0 0 620 380`}
        className="w-full h-full"
        style={{ maxHeight: "380px" }}
      >
        {/* Connections */}
        {connections.map(([from, to], i) => {
          const fromNode = getNode(from);
          const toNode = getNode(to);
          if (!fromNode || !toNode) return null;

          const isActive =
            selectedNode === from ||
            selectedNode === to ||
            hoveredNode === from ||
            hoveredNode === to;

          return (
            <line
              key={i}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke={isActive ? "rgba(0, 240, 255, 0.4)" : "rgba(255, 255, 255, 0.06)"}
              strokeWidth={isActive ? 1.5 : 0.5}
              strokeDasharray={isActive ? "none" : "4 4"}
              style={{ transition: "all 0.3s ease" }}
            />
          );
        })}

        {/* Connection pulse dots */}
        {connections.map(([from, to], i) => {
          const fromNode = getNode(from);
          const toNode = getNode(to);
          if (!fromNode || !toNode) return null;

          const isActive = selectedNode === from || selectedNode === to;
          if (!isActive) return null;

          return (
            <circle key={`pulse-${i}`} r="2" fill="#00f0ff" opacity="0.6">
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                path={`M${fromNode.x},${fromNode.y} L${toNode.x},${toNode.y}`}
              />
            </circle>
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const isSelected = selectedNode === node.id;
          const isHovered = hoveredNode === node.id;
          const isActive = isSelected || isHovered;

          return (
            <g
              key={node.id}
              onClick={() => handleNodeClick(node.id)}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              {/* Outer glow */}
              {isActive && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="32"
                  fill="none"
                  stroke={node.color}
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              )}

              {/* Node background */}
              <circle
                cx={node.x}
                cy={node.y}
                r="24"
                fill={isActive ? `${node.color}15` : "rgba(10, 10, 15, 0.8)"}
                stroke={isActive ? node.color : "rgba(255, 255, 255, 0.1)"}
                strokeWidth={isActive ? 1.5 : 0.5}
                style={{ transition: "all 0.3s ease" }}
              />

              {/* Inner dot */}
              <circle
                cx={node.x}
                cy={node.y}
                r="3"
                fill={node.color}
                opacity={isActive ? 1 : 0.5}
                style={{ transition: "opacity 0.3s ease" }}
              />

              {/* Label */}
              <text
                x={node.x}
                y={node.y + 42}
                textAnchor="middle"
                fill={isActive ? node.color : "rgba(255, 255, 255, 0.4)"}
                fontSize="10"
                fontFamily="monospace"
                letterSpacing="0.1em"
                style={{ transition: "fill 0.3s ease", textTransform: "uppercase" }}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Selected node info overlay (mobile) */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="md:hidden absolute bottom-0 left-0 right-0 glass rounded-t-xl p-4"
          >
            {(() => {
              const node = getNode(selectedNode);
              if (!node) return null;
              return (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: node.color }}
                    />
                    <span className="font-mono text-xs text-white/80 uppercase tracking-wider">
                      {node.label}
                    </span>
                  </div>
                  <p className="text-xs text-white/40 mb-3">
                    {node.description}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {node.metrics.map((m, i) => (
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
                </>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { nodes as nodeData };
