"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import "./globals.css";
import NavbarHUD from "@/components/hud/NavbarHUD";
import RightHUD from "@/components/hud/RightHUD";
import BackgroundEngine from "@/components/graphics/BackgroundEngine";
import BootSequence from "@/components/intro/BootSequence";
import CursorGlow from "@/components/ui/CursorGlow";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [booted, setBooted] = useState(false);
  const pathname = usePathname();

  const handleBootComplete = useCallback(() => {
    setBooted(true);
  }, []);

  // Check localStorage on mount — if already booted, skip immediately
  // This is handled inside BootSequence component

  return (
    <html lang="en" className="dark">
      <head>
        <title>Talha Sohail — Systems Interface</title>
        <meta
          name="description"
          content="Frontend developer building clean, performant websites with React and Next.js. Skilled in AI content automation and creative design."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-surface-0 text-white antialiased">
        {/* Boot Sequence */}
        {!booted && <BootSequence onComplete={handleBootComplete} />}

        {/* Main Application */}
        <div className={booted ? "opacity-100" : "opacity-0"} style={{ transition: "opacity 0.5s ease" }}>
          <BackgroundEngine />
          <CursorGlow />
          <NavbarHUD />
          <RightHUD />

          <AnimatePresence mode="wait">
            <motion.main
              key={pathname}
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              }}
              exit={{
                opacity: 0,
                y: -8,
                filter: "blur(4px)",
                transition: { duration: 0.3, ease: "easeIn" },
              }}
            >
              {children}
            </motion.main>
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
}
