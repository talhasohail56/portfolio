"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { formatTime, useIsMobile } from "@/lib/utils";

export default function RightHUD() {
  const isMobile = useIsMobile();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState("INIT");
  const [time, setTime] = useState("");
  const [perfScore, setPerfScore] = useState(97);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));

      // Determine current section
      const sections = document.querySelectorAll("[data-section]");
      let found = "INIT";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          found = section.getAttribute("data-section") || "INIT";
        }
      });
      setCurrentSection(found);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const update = () => setTime(formatTime(new Date()));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPerfScore(95 + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-end gap-4"
    >
      {/* Scroll Progress */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-[2px] h-24 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-neon-cyan rounded-full"
            style={{ height: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <span className="text-[9px] font-mono text-white/30">
          {Math.round(scrollProgress)}%
        </span>
      </div>

      {/* Section Label */}
      <div className="glass-subtle rounded px-2 py-1">
        <span className="text-[9px] font-mono text-neon-cyan/60 tracking-wider">
          {currentSection}
        </span>
      </div>

      {/* Clock */}
      <div className="glass-subtle rounded px-2 py-1">
        <span className="text-[9px] font-mono text-white/30">{time}</span>
      </div>

      {/* Performance Badge */}
      <div className="glass-subtle rounded px-2 py-1 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-glow-pulse" />
        <span className="text-[9px] font-mono text-white/30">
          PERF {perfScore}
        </span>
      </div>
    </motion.div>
  );
}
