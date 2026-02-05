"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  gradient?: string;
}

export default function GradientBorder({
  children,
  className = "",
  borderWidth = 1,
  gradient = "from-neon-cyan via-neon-magenta to-neon-green",
}: GradientBorderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = useReducedMotion();

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current || reducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-xl ${className}`}
      style={{ padding: borderWidth }}
    >
      {/* Animated gradient border */}
      <div
        className="absolute inset-0 rounded-xl overflow-hidden"
        style={{ opacity: isHovered ? 1 : 0.3, transition: "opacity 0.4s ease" }}
      >
        <div
          className={`absolute inset-[-200%] bg-gradient-to-r ${gradient}`}
          style={{
            animation: reducedMotion ? "none" : "spin 4s linear infinite",
          }}
        />
      </div>

      {/* Spotlight on hover */}
      {isHovered && !reducedMotion && (
        <div
          className="absolute inset-0 rounded-xl pointer-events-none z-[1]"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 240, 255, 0.08) 0%, transparent 50%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-[2] bg-surface-1 rounded-xl h-full">
        {children}
      </div>
    </motion.div>
  );
}
