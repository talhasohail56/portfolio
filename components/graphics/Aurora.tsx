"use client";

export default function Aurora() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Primary aurora beam */}
      <div
        className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full animate-aurora-shift"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0, 240, 255, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Secondary aurora beam */}
      <div
        className="absolute -bottom-1/3 -right-1/4 w-[600px] h-[600px] rounded-full animate-aurora-shift"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 0, 229, 0.04) 0%, transparent 70%)",
          filter: "blur(100px)",
          animationDelay: "-5s",
          animationDirection: "reverse",
        }}
      />
      {/* Tertiary accent */}
      <div
        className="absolute top-1/3 left-1/2 w-[400px] h-[400px] rounded-full animate-aurora-shift"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(57, 255, 20, 0.03) 0%, transparent 70%)",
          filter: "blur(120px)",
          animationDelay: "-10s",
        }}
      />
    </div>
  );
}
