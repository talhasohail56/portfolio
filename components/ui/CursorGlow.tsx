"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion, useIsMobile } from "@/lib/utils";

export default function CursorGlow() {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const dotRef = useRef<HTMLDivElement>(null);

  // Springs only for ambient glow (lag is fine/desirable)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 20, stiffness: 150, mass: 0.8 };
  const glowX = useSpring(cursorX, springConfig);
  const glowY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (reducedMotion || isMobile) return;

    // Hide native cursor globally
    document.body.style.cursor = "none";

    const handleMove = (e: MouseEvent) => {
      // Feed springs for ambient glow
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Instant positioning for cursor dot (no spring = no lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.style.cursor = "";
    };
  }, [reducedMotion, isMobile, cursorX, cursorY]);

  if (reducedMotion || isMobile) return null;

  return (
    <>
      {/* Large ambient glow — uses springs, slight lag is desirable */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[2]"
        style={{
          x: glowX,
          y: glowY,
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
      {/* Cursor dot — positioned directly via ref, zero lag */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[60]"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "rgba(0, 240, 255, 0.5)",
          boxShadow: "0 0 15px 4px rgba(0, 240, 255, 0.15)",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
    </>
  );
}
