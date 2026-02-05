"use client";

interface WaveDividerProps {
  className?: string;
  flip?: boolean;
  color?: string;
}

export default function WaveDivider({
  className = "",
  flip = false,
  color = "rgba(0, 240, 255, 0.05)",
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden pointer-events-none select-none ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60C240 20 480 0 720 40C960 80 1200 100 1440 60V120H0V60Z"
          fill={color}
        />
        <path
          d="M0 80C200 40 400 60 600 50C800 40 1000 70 1200 60C1300 55 1400 65 1440 70V120H0V80Z"
          fill={color}
          opacity="0.5"
        />
        {/* Animated wave line */}
        <path
          d="M0 60C240 20 480 0 720 40C960 80 1200 100 1440 60"
          fill="none"
          stroke="rgba(0, 240, 255, 0.1)"
          strokeWidth="1"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0 60C240 20 480 0 720 40C960 80 1200 100 1440 60;
              M0 40C240 60 480 80 720 50C960 20 1200 40 1440 70;
              M0 60C240 20 480 0 720 40C960 80 1200 100 1440 60
            "
          />
        </path>
      </svg>
    </div>
  );
}
