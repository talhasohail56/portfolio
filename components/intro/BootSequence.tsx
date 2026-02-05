"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";

interface BootSequenceProps {
  onComplete: () => void;
}

const bootLines = [
  { text: "Initializing Talha Sohail Interface...", delay: 0 },
  { text: "Loading system modules...", delay: 400 },
  { text: "Connecting to deployment network...", delay: 800 },
  { text: "Calibrating motion systems...", delay: 1200 },
  { text: "Running diagnostics...", delay: 1600 },
  { text: "All systems nominal.", delay: 2200 },
];

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [exiting, setExiting] = useState(false);
  const reducedMotion = useReducedMotion();

  const handleComplete = useCallback(() => {
    setExiting(true);
    setTimeout(onComplete, 500);
  }, [onComplete]);

  useEffect(() => {
    if (reducedMotion) {
      onComplete();
      return;
    }

    // Check if already seen
    const seen = localStorage.getItem("ts-boot-seen");
    if (seen) {
      onComplete();
      return;
    }

    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + 2;
      });
    }, 60);

    // Show lines sequentially
    bootLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
    });

    // Glitch effect
    setTimeout(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 2000);

    // Complete
    const completeTimeout = setTimeout(() => {
      localStorage.setItem("ts-boot-seen", "true");
      handleComplete();
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimeout);
    };
  }, [reducedMotion, onComplete, handleComplete]);

  if (reducedMotion) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
        >
          {/* Skip button */}
          <button
            onClick={() => {
              localStorage.setItem("ts-boot-seen", "true");
              handleComplete();
            }}
            className="absolute top-6 right-6 text-xs font-mono text-white/20 hover:text-white/50 transition-colors px-3 py-1.5 border border-white/10 rounded hover:border-white/20"
          >
            SKIP [ESC]
          </button>

          {/* Boot content */}
          <div
            className={`w-full max-w-lg px-8 ${glitch ? "translate-x-[2px] opacity-80" : ""} transition-all duration-75`}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <div className="text-neon-cyan font-mono text-xs tracking-[0.3em] mb-1 opacity-50">
                v4.2.0
              </div>
              <div className="text-white font-mono text-lg tracking-wider">
                TALHA SOHAIL
              </div>
              <div className="text-white/30 font-mono text-[10px] mt-1 tracking-widest">
                SYSTEMS INTERFACE
              </div>
            </motion.div>

            {/* Terminal lines */}
            <div className="space-y-1.5 mb-8 font-mono text-xs">
              {bootLines.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-center gap-2 ${
                    i === bootLines.length - 1
                      ? "text-neon-green"
                      : "text-white/40"
                  }`}
                >
                  <span className="text-white/20">[{String(i).padStart(2, "0")}]</span>
                  <span>{line.text}</span>
                  {i === visibleLines - 1 && i !== bootLines.length - 1 && (
                    <span className="inline-block w-1.5 h-3 bg-neon-cyan/50 animate-pulse ml-1" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-cyan to-neon-cyan/50 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-white/20">
                <span>LOADING SYSTEMS</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
