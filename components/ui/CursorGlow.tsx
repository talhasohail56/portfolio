"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion, useIsMobile } from "@/lib/utils";

export default function CursorGlow() {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (reducedMotion || isMobile) return;

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reducedMotion, isMobile, cursorX, cursorY]);

  if (reducedMotion || isMobile) return null;

  return (
    <>
      {/* Large ambient glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[2]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(0, 240, 255, 0.04) 0%, rgba(0, 240, 255, 0.01) 30%, transparent 70%)",
          filter: "blur(1px)",
        }}
        aria-hidden="true"
      />
      {/* Small focused dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[60]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "rgba(0, 240, 255, 0.5)",
          boxShadow: "0 0 15px 4px rgba(0, 240, 255, 0.15)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
