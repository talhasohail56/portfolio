"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  once = true,
}: TextRevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={`inline ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0, rotateX: -80 },
              visible: {
                y: "0%",
                opacity: 1,
                rotateX: 0,
                transition: {
                  duration: 0.6,
                  delay: delay + i * 0.04,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              },
            }}
            style={{ transformOrigin: "bottom", perspective: 800 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
