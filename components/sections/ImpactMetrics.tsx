"use client";

import { motion } from "framer-motion";

export default function ImpactMetrics() {
  const metrics = [
    {
      value: "06+",
      label: "Years of Experience",
      description:
        "Building secure, scalable deployment pipelines and architecture for enterprise and high-growth technology platforms.",
    },
    {
      value: "70+",
      label: "Projects Secured",
      description:
        "Delivering robust IaC, runtime observation, and zero-day threat readiness with absolute clarity and operational velocity.",
    },
    {
      value: "18+",
      label: "Industries Hardened",
      description:
        "Cross-pollinating security strategies across finance, healthcare, AI, and manufacturing to build resilient trust ecosystems.",
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-48 bg-black overflow-hidden px-6 md:px-12 border-t border-white/5">
      {/* Ambient center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] rounded-full bg-terminal-green/5 mix-blend-screen pointer-events-none z-0"
        style={{ filter: "blur(120px)" }}
      />

      {/* Dot Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.15, // Cascading fade-in left to right
              }}
              className="flex flex-col border-l border-neutral-800 pl-6 md:pl-8"
            >
              <h3 className="text-5xl md:text-6xl lg:text-8xl font-serif text-white mb-4 tracking-tighter">
                {metric.value}
              </h3>
              <div className="w-8 h-1 bg-terminal-green mb-6" />
              <h4 className="text-xl md:text-2xl font-sans text-white mb-3">
                {metric.label}
              </h4>
              <p className="text-sm md:text-base text-neutral-500 font-sans leading-relaxed max-w-sm">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
