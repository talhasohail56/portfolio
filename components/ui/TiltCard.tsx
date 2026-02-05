"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion, useIsMobile } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const handleMouse = (e: React.MouseEvent) => {
    if (reducedMotion || isMobile || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    setTilt({
      rotateX: (y - 0.5) * -12,
      rotateY: (x - 0.5) * 12,
    });
    setGlarePos({ x: x * 100, y: y * 100 });
  };

  const reset = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={reset}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}

      {/* Glare overlay */}
      {isHovered && !reducedMotion && !isMobile && (
        <div
          className="absolute inset-0 rounded-xl pointer-events-none z-10 opacity-20"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(0, 240, 255, 0.15), transparent 60%)`,
          }}
        />
      )}

      {/* Border glow */}
      {isHovered && !reducedMotion && !isMobile && (
        <div
          className="absolute inset-0 rounded-xl pointer-events-none z-10"
          style={{
            boxShadow:
              "0 0 0 1px rgba(0, 240, 255, 0.2), 0 0 30px rgba(0, 240, 255, 0.08)",
          }}
        />
      )}
    </motion.div>
  );
}
