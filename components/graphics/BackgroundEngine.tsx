"use client";

import Grid from "./Grid";
import Aurora from "./Aurora";
import NoiseOverlay from "./NoiseOverlay";
import { useReducedMotion, useIsMobile } from "@/lib/utils";

export default function BackgroundEngine() {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  if (reducedMotion) return null;

  return (
    <>
      <Grid />
      {!isMobile && <Aurora />}
      <NoiseOverlay />
      {/* Scan line */}
      {!isMobile && (
        <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="scan-line" />
        </div>
      )}
    </>
  );
}
