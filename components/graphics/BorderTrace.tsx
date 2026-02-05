"use client";

import { useEffect, useRef, useState } from "react";

interface BorderTraceProps {
  className?: string;
  color?: string;
  active?: boolean;
}

export default function BorderTrace({
  className = "",
  color = "rgba(0, 240, 255, 0.6)",
  active = false,
}: BorderTraceProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const parent = svgRef.current?.parentElement;
    if (!parent) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    observer.observe(parent);
    return () => observer.disconnect();
  }, []);

  const { width, height } = dimensions;
  const r = 12;
  const perimeter = 2 * (width + height) - 8 * r + 2 * Math.PI * r;

  if (width === 0 || height === 0) {
    return (
      <svg
        ref={svgRef}
        className={`absolute inset-0 pointer-events-none ${className}`}
        aria-hidden="true"
      />
    );
  }

  const d = `M ${r} 0 H ${width - r} Q ${width} 0 ${width} ${r} V ${height - r} Q ${width} ${height} ${width - r} ${height} H ${r} Q 0 ${height} 0 ${height - r} V ${r} Q 0 0 ${r} 0 Z`;

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      width={width}
      height={height}
      aria-hidden="true"
    >
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray={perimeter}
        strokeDashoffset={active ? 0 : perimeter}
        style={{
          transition: active
            ? "stroke-dashoffset 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            : "none",
        }}
      />
    </svg>
  );
}
