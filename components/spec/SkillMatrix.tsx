"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, type Skill } from "@/lib/data/skills";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function SkillMatrix() {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [activeCategory, setActiveCategory] = useState(
    skillCategories[0].code
  );

  const currentCategory = skillCategories.find(
    (c) => c.code === activeCategory
  );

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {skillCategories.map((cat) => (
          <button
            key={cat.code}
            onClick={() => setActiveCategory(cat.code)}
            className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider rounded transition-all whitespace-nowrap ${
              activeCategory === cat.code
                ? "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                : "text-white/30 hover:text-white/50 border border-transparent"
            }`}
          >
            <span className="text-white/15 mr-1">[{cat.code}]</span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skill Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          {currentCategory?.skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={staggerItem}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative glass rounded-lg p-4 group cursor-default"
            >
              {/* Skill Name & Proficiency */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-white/70 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <span className="text-[10px] font-mono text-neon-cyan/60">
                  {skill.proficiency}%
                </span>
              </div>

              {/* Proficiency Bar */}
              <div className="h-1 bg-white/5 rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-neon-cyan/40 rounded-full"
                  style={{ boxShadow: "0 0 6px rgba(0, 240, 255, 0.2)" }}
                />
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-1 mb-2">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-1.5 py-0.5 text-[8px] font-mono text-white/25 border border-white/6 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Usage (shown on hover) */}
              <AnimatePresence>
                {hoveredSkill?.name === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="text-[10px] text-white/30 pt-2 border-t border-white/5 mt-1">
                      {skill.usage}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
