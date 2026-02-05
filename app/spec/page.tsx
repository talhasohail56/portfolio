"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data/site";
import { experience, principles } from "@/lib/data/experience";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";
import SkillMatrix from "@/components/spec/SkillMatrix";
import MagneticButton from "@/components/ui/MagneticButton";

export default function SpecPage() {
  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-glow-pulse" />
            <span className="text-[10px] font-mono text-white/30 tracking-[0.3em] uppercase">
              Module SP-03 / System Spec
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-2">
            System Specification
          </h1>
          <p className="text-sm text-white/30 font-mono max-w-lg">
            Architecture overview, capability matrix, and operational changelog
            for the Talha Sohail system.
          </p>
          <div className="glow-line opacity-20 mt-6 max-w-xs" />
        </motion.div>

        {/* Identity & Mission */}
        <motion.section
          data-section="IDENTITY"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-4">
            Identity & Mission
          </div>
          <div className="glass rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">
                  {siteConfig.name}
                </h2>
                <p className="text-xs font-mono text-neon-cyan/60 mb-4">
                  {siteConfig.role}
                </p>
                <p className="text-sm text-white/40 leading-relaxed">
                  {siteConfig.description}
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Location", value: siteConfig.location },
                  { label: "Timezone", value: siteConfig.timezone },
                  { label: "Status", value: siteConfig.status },
                  { label: "Mode", value: siteConfig.workMode },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-xs font-mono text-white/50">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Principles */}
        <motion.section
          data-section="PRINCIPLES"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-4">
            Operating Principles
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-5 group hover:border-glow transition-all"
              >
                <div className="text-2xl mb-3 text-neon-cyan/40 group-hover:text-neon-cyan/70 transition-colors">
                  {principle.icon}
                </div>
                <h3 className="text-sm font-mono font-bold text-white/70 mb-1.5">
                  {principle.name}
                </h3>
                <p className="text-[11px] text-white/30 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Capability Matrix */}
        <motion.section
          data-section="CAPABILITIES"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-4">
            Capability Matrix
          </div>
          <div className="glass rounded-xl p-6">
            <SkillMatrix />
          </div>
        </motion.section>

        {/* Changelog (Experience) */}
        <motion.section
          data-section="CHANGELOG"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-4">
            Changelog
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {experience.map((entry) => (
              <motion.div
                key={entry.version}
                variants={staggerItem}
                className="glass rounded-xl p-5 relative overflow-hidden"
              >
                {/* Version badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-0.5 text-[9px] font-mono rounded ${
                      entry.type === "feature"
                        ? "text-neon-green/60 bg-neon-green/5 border border-neon-green/15"
                        : entry.type === "refactor"
                          ? "text-neon-orange/60 bg-neon-orange/5 border border-neon-orange/15"
                          : entry.type === "init"
                            ? "text-neon-cyan/60 bg-neon-cyan/5 border border-neon-cyan/15"
                            : "text-white/30 bg-white/5 border border-white/10"
                    }`}
                  >
                    {entry.type}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-neon-cyan/60 font-bold">
                    v{entry.version}
                  </span>
                  <span className="text-[10px] font-mono text-white/15">
                    {entry.date}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white/70 mb-0.5">
                  {entry.title}
                </h3>
                <p className="text-[11px] font-mono text-white/25 mb-3">
                  {entry.org}
                </p>

                <div className="space-y-1.5">
                  {entry.changes.map((change, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-neon-cyan/30 text-[10px] mt-0.5">
                        +
                      </span>
                      <span className="text-[11px] text-white/35 leading-relaxed">
                        {change}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Export Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <MagneticButton>
            <div className="glass rounded-xl px-6 py-3 inline-flex items-center gap-3 group hover:border-glow-hover transition-all cursor-pointer">
              <div className="w-6 h-6 rounded border border-neon-cyan/20 flex items-center justify-center group-hover:border-neon-cyan/40 transition-colors">
                <span className="text-[10px] text-neon-cyan/50">↓</span>
              </div>
              <span className="text-xs font-mono text-white/40 group-hover:text-white/60 transition-colors">
                Export Profile
              </span>
            </div>
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
}
