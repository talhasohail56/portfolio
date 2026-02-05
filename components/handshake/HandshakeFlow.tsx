"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/data/site";
import MagneticButton from "@/components/ui/MagneticButton";

const intents = [
  {
    id: "website",
    label: "Website / Web App",
    description: "Full-stack web development, from architecture to deployment",
    icon: "◆",
  },
  {
    id: "growth",
    label: "Growth Engineering",
    description: "SEO, conversion optimization, analytics instrumentation",
    icon: "▲",
  },
  {
    id: "automation",
    label: "Automation",
    description: "Workflow orchestration, AI integration, process automation",
    icon: "⬡",
  },
  {
    id: "consulting",
    label: "Technical Consulting",
    description: "Architecture review, performance audit, strategy",
    icon: "◇",
  },
];

const timelines = [
  { id: "asap", label: "ASAP", description: "Need to start immediately" },
  {
    id: "2-4weeks",
    label: "2–4 Weeks",
    description: "Short-term engagement",
  },
  {
    id: "1-2months",
    label: "1–2 Months",
    description: "Standard project timeline",
  },
  { id: "flexible", label: "Flexible", description: "Open to discussion" },
];

export default function HandshakeFlow() {
  const [step, setStep] = useState(1);
  const [selectedIntent, setSelectedIntent] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const stepVariants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -30, transition: { duration: 0.2 } },
  };

  const handleSubmit = () => {
    // In production, this would send data to an API
    setStep(4);
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-10">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-mono transition-all ${
                step >= s
                  ? "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30"
                  : "text-white/15 border border-white/5"
              }`}
            >
              {step > s ? "✓" : s}
            </div>
            {s < 4 && (
              <div
                className={`w-8 h-[1px] transition-colors ${
                  step > s ? "bg-neon-cyan/30" : "bg-white/5"
                }`}
              />
            )}
          </div>
        ))}
        <span className="ml-3 text-[10px] font-mono text-white/20">
          {step === 1
            ? "INTENT"
            : step === 2
              ? "TIMELINE"
              : step === 3
                ? "DETAILS"
                : "CONFIRMED"}
        </span>
      </div>

      {/* Steps */}
      <AnimatePresence mode="wait">
        {/* Step 1: Intent */}
        {step === 1 && (
          <motion.div
            key="step1"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-2">
              Step 01 / Select Intent
            </div>
            <h2 className="text-lg font-bold text-white mb-6">
              What are you looking for?
            </h2>
            <div className="space-y-3">
              {intents.map((intent) => (
                <button
                  key={intent.id}
                  onClick={() => {
                    setSelectedIntent(intent.id);
                    setStep(2);
                  }}
                  className={`w-full text-left glass rounded-xl p-4 group hover:border-glow transition-all ${
                    selectedIntent === intent.id ? "border-glow" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-neon-cyan/30 group-hover:text-neon-cyan/60 transition-colors">
                      {intent.icon}
                    </span>
                    <div>
                      <div className="text-sm font-mono text-white/70 group-hover:text-white transition-colors">
                        {intent.label}
                      </div>
                      <div className="text-[10px] text-white/25">
                        {intent.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Timeline */}
        {step === 2 && (
          <motion.div
            key="step2"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-2">
              Step 02 / Timeline
            </div>
            <h2 className="text-lg font-bold text-white mb-6">
              What&apos;s your timeline?
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {timelines.map((timeline) => (
                <button
                  key={timeline.id}
                  onClick={() => {
                    setSelectedTimeline(timeline.id);
                    setStep(3);
                  }}
                  className={`text-left glass rounded-xl p-4 group hover:border-glow transition-all ${
                    selectedTimeline === timeline.id ? "border-glow" : ""
                  }`}
                >
                  <div className="text-sm font-mono text-white/70 group-hover:text-white transition-colors mb-1">
                    {timeline.label}
                  </div>
                  <div className="text-[10px] text-white/25">
                    {timeline.description}
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="mt-4 text-[10px] font-mono text-white/20 hover:text-white/40 transition-colors"
            >
              ← Back
            </button>
          </motion.div>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && (
          <motion.div
            key="step3"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase mb-2">
              Step 03 / Details
            </div>
            <h2 className="text-lg font-bold text-white mb-6">
              How can I reach you?
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono text-white/20 uppercase tracking-wider mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-surface-2 border border-white/8 rounded-lg px-4 py-2.5 text-sm font-mono text-white/70 focus:border-neon-cyan/30 focus:outline-none transition-colors placeholder:text-white/15"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-white/20 uppercase tracking-wider mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-surface-2 border border-white/8 rounded-lg px-4 py-2.5 text-sm font-mono text-white/70 focus:border-neon-cyan/30 focus:outline-none transition-colors placeholder:text-white/15"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-white/20 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full bg-surface-2 border border-white/8 rounded-lg px-4 py-2.5 text-sm font-mono text-white/70 focus:border-neon-cyan/30 focus:outline-none transition-colors placeholder:text-white/15 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="text-[10px] font-mono text-white/20 hover:text-white/40 transition-colors"
                >
                  ← Back
                </button>
                <MagneticButton onClick={handleSubmit}>
                  <div className="glass rounded-lg px-5 py-2.5 flex items-center gap-2 group hover:border-glow transition-all cursor-pointer">
                    <span className="text-xs font-mono text-white/50 group-hover:text-neon-cyan transition-colors">
                      Send Handshake
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan/40 group-hover:bg-neon-cyan animate-glow-pulse" />
                  </div>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <motion.div
            key="step4"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-16 h-16 rounded-full border-2 border-neon-green/40 flex items-center justify-center mx-auto mb-6"
            >
              <span className="text-2xl text-neon-green">✓</span>
            </motion.div>
            <div className="text-[10px] font-mono text-neon-green/60 tracking-[0.3em] uppercase mb-2">
              Handshake Initiated
            </div>
            <h2 className="text-xl font-bold text-white mb-3">
              Connection Established
            </h2>
            <p className="text-sm text-white/30 max-w-sm mx-auto mb-6">
              Signal received. Expect a response within{" "}
              {siteConfig.responseSLA}. Looking forward to building something
              extraordinary.
            </p>
            <button
              onClick={() => {
                setStep(1);
                setSelectedIntent("");
                setSelectedTimeline("");
                setFormData({ name: "", email: "", message: "" });
              }}
              className="text-[10px] font-mono text-white/20 hover:text-white/40 transition-colors"
            >
              ← Reset handshake
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
