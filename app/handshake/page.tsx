"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data/site";
import { fadeInUp } from "@/lib/motion";
import HandshakeFlow from "@/components/handshake/HandshakeFlow";

export default function HandshakePage() {
  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-glow-pulse" />
            <span className="text-[10px] font-mono text-white/30 tracking-[0.3em] uppercase">
              Module HS-04 / Handshake Protocol
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-2">
            Initiate Handshake
          </h1>
          <p className="text-sm text-white/30 font-mono max-w-lg">
            Select your intent, define timeline, provide contact details.
            Response SLA: {siteConfig.responseSLA}.
          </p>
          <div className="glow-line opacity-20 mt-6 max-w-xs" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Flow */}
          <div className="lg:col-span-2">
            <HandshakeFlow />
          </div>

          {/* Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-4">
              Direct Channels
            </div>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block glass rounded-xl p-4 group hover:border-glow transition-all"
              >
                <div className="text-[9px] font-mono text-white/15 uppercase tracking-wider mb-1">
                  Email
                </div>
                <div className="text-xs font-mono text-white/40 group-hover:text-neon-cyan transition-colors">
                  {siteConfig.email}
                </div>
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass rounded-xl p-4 group hover:border-glow transition-all"
              >
                <div className="text-[9px] font-mono text-white/15 uppercase tracking-wider mb-1">
                  LinkedIn
                </div>
                <div className="text-xs font-mono text-white/40 group-hover:text-neon-cyan transition-colors">
                  linkedin.com/in/talhasohail
                </div>
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass rounded-xl p-4 group hover:border-glow transition-all"
              >
                <div className="text-[9px] font-mono text-white/15 uppercase tracking-wider mb-1">
                  GitHub
                </div>
                <div className="text-xs font-mono text-white/40 group-hover:text-neon-cyan transition-colors">
                  github.com/talhasohail
                </div>
              </a>
            </div>

            {/* Status Card */}
            <div className="mt-6 glass rounded-xl p-5">
              <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-3">
                System Status
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/25">
                    Availability
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-glow-pulse" />
                    <span className="text-[10px] font-mono text-neon-green/60">
                      Online
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/25">
                    Response SLA
                  </span>
                  <span className="text-[10px] font-mono text-white/40">
                    {siteConfig.responseSLA}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/25">
                    Location
                  </span>
                  <span className="text-[10px] font-mono text-white/40">
                    {siteConfig.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
