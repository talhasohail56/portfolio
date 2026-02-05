"use client";

import { useReducedMotion } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export default function Marquee({
  items,
  speed = 30,
  className = "",
  reverse = false,
}: MarqueeProps) {
  const reducedMotion = useReducedMotion();

  // Double items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div
        className={`flex gap-6 whitespace-nowrap ${reducedMotion ? "" : "animate-marquee"}`}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-[11px] font-mono text-white/15 shrink-0"
          >
            <span className="w-1 h-1 rounded-full bg-neon-cyan/20" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
