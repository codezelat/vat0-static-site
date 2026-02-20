"use client";

import { motion } from "framer-motion";

export default function TheMandate() {
  const mandates = [
    "Zero implicit access.",
    "Zero standing privileges.",
    "Zero breach tolerance.",
    "Zero-day readiness.",
  ];

  return (
    <section className="relative w-full py-32 md:py-64 bg-black overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 md:px-12">
      {/* Subtle Grain over the black background */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col gap-12 md:gap-24">
        {mandates.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 1,
              ease: [0.215, 0.61, 0.355, 1],
              delay: index * 0.1, // Slight stagger if multiple are on screen
            }}
            className="flex items-start gap-4 md:gap-8 lg:gap-12"
          >
            {/* Minimal line indicator */}
            <div className="mt-4 md:mt-8 w-8 md:w-16 lg:w-24 h-[2px] bg-terminal-green/50 flex-shrink-0" />

            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-serif font-medium text-white tracking-tight leading-[1.1] md:leading-[1]">
              {text}
            </h2>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 mt-32 md:mt-48 flex justify-end">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-lg md:text-2xl font-sans text-neutral-400 max-w-2xl leading-relaxed"
        >
          Our mandate is clear. We architect infrastructure that assumes
          compromise and defaults to a
          <span className="text-white"> deny-all state</span>. We move systems
          from development to production without ever compromising operational
          integrity.
        </motion.p>
      </div>
    </section>
  );
}
