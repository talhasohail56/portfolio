"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export default function NavbarHUD() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeIndex = siteConfig.navigation.findIndex(
    (n) => n.href === pathname || (n.href !== "/" && pathname.startsWith(n.href))
  );

  return (
    <>
      {/* Desktop Nav */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-40 hidden md:block"
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="glass rounded-xl px-6 py-3 flex items-center justify-between">
            {/* Logo / Identity */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-md border border-neon-cyan/30 flex items-center justify-center text-neon-cyan font-mono text-xs font-bold group-hover:border-neon-cyan/60 transition-colors">
                TS
              </div>
              <span className="text-sm font-mono text-white/60 group-hover:text-white/90 transition-colors">
                TALHA.SOHAIL
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-1 relative">
              {siteConfig.navigation.map((item, i) => {
                const isActive =
                  item.href === pathname ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors",
                      isActive
                        ? "text-neon-cyan"
                        : "text-white/40 hover:text-white/70"
                    )}
                  >
                    <span className="text-white/20 mr-1.5">{item.code}</span>
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-neon-cyan rounded-full"
                        style={{ boxShadow: "0 0 10px rgba(0, 240, 255, 0.5)" }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-green animate-glow-pulse" />
              <span className="text-xs font-mono text-white/40">
                SYS.ONLINE
              </span>
            </div>
          </div>
        </div>

        {/* Neon line under nav */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="glow-line opacity-30" />
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40">
        <div className="glass px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded border border-neon-cyan/30 flex items-center justify-center text-neon-cyan font-mono text-[10px] font-bold">
              TS
            </div>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white/60 p-2"
            aria-label="Toggle navigation"
          >
            <div className="w-5 flex flex-col gap-1">
              <motion.div
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="h-[1.5px] bg-current"
              />
              <motion.div
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-[1.5px] bg-current"
              />
              <motion.div
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="h-[1.5px] bg-current"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-30 pt-16"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <div className="relative px-4 py-6 space-y-2">
              {siteConfig.navigation.map((item) => {
                const isActive =
                  item.href === pathname ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block glass rounded-lg px-4 py-3 font-mono text-sm",
                      isActive
                        ? "text-neon-cyan border-neon-cyan/30"
                        : "text-white/50"
                    )}
                  >
                    <span className="text-white/20 mr-2">{item.code}</span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
