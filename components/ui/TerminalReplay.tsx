"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TerminalReplayProps {
  lines: string[];
  speed?: number;
  className?: string;
}

export default function TerminalReplay({
  lines,
  speed = 80,
  className = "",
}: TerminalReplayProps) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isStarted) {
          setIsStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isStarted]);

  useEffect(() => {
    if (!isStarted || currentLine >= lines.length) return;

    const line = lines[currentLine];

    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, speed / 3);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, speed * 2);
      return () => clearTimeout(timeout);
    }
  }, [isStarted, currentLine, currentChar, lines, speed]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [visibleLines, currentChar]);

  const typingLine =
    currentLine < lines.length
      ? lines[currentLine].substring(0, currentChar)
      : "";

  return (
    <div ref={containerRef} className={className}>
      <div className="glass rounded-lg overflow-hidden">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-[10px] font-mono text-white/20 ml-2">
            build-log — bash
          </span>
        </div>

        {/* Terminal content */}
        <div
          ref={terminalRef}
          className="p-4 max-h-80 overflow-y-auto font-mono text-xs leading-relaxed"
        >
          {visibleLines.map((line, i) => (
            <div
              key={i}
              className={`${
                line.includes("✓")
                  ? "text-neon-green"
                  : line.includes("Error") || line.includes("✗")
                    ? "text-red-400"
                    : line.includes("Warning")
                      ? "text-yellow-400"
                      : "text-white/50"
              }`}
            >
              <span className="text-white/15 mr-2 select-none">$</span>
              {line}
            </div>
          ))}

          {currentLine < lines.length && (
            <div className="text-white/50">
              <span className="text-white/15 mr-2 select-none">$</span>
              {typingLine}
              <span className="inline-block w-1.5 h-3.5 bg-neon-cyan/60 ml-0.5 animate-pulse" />
            </div>
          )}

          {currentLine >= lines.length && visibleLines.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-neon-cyan/60 terminal-cursor"
            >
              <span className="text-white/15 mr-2 select-none">$</span>
              ready
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
