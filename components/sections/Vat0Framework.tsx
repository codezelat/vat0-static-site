"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const frameworkPillars = [
  {
    letter: "V",
    title: "Verification",
    description:
      "All users, services, requests, and system interactions are validated before access is granted. No entity is trusted by default within the infrastructure perimeter.",
  },
  {
    letter: "A",
    title: "Authorization",
    description:
      "Permissions are granular, contextual, and time-bound. System components operate strictly within defined mandates without standing privileges.",
  },
  {
    letter: "T",
    title: "Tracking",
    description:
      "All actions across infrastructure, applications, and deployment pipelines are logged and auditable. Every change, interaction, and execution is timestamped and attributable.",
  },
  {
    letter: "0",
    title: "Zero",
    description:
      "Infrastructure is governed by Zero Trust Architecture principles: Zero implicit access, Zero standing privileges, Zero breach tolerance, Zero-day threat readiness.",
  },
];

export default function Vat0Framework() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress to horizontal movement
  // -x percent controls how far left the container slides.
  // We have 4 panels. To see the last panel fully, we need to slide left by a percentage
  // that depends on the total width relative to the viewport.
  // Using generic percentage based on number of items:
  // If we have 4 items, we need to scroll 3 viewports worth to see the last one.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Absolute Title that stays fixed during the horizontal scroll */}
        <div className="absolute top-12 md:top-24 left-6 md:left-12 lg:left-24 z-10 mix-blend-difference pointer-events-none">
          <h2 className="text-xl md:text-3xl font-mono text-terminal-green tracking-widest uppercase">
            The VAT//0 Framework
          </h2>
        </div>

        <motion.div style={{ x }} className="flex h-full">
          {frameworkPillars.map((pillar, index) => (
            <div
              key={index}
              className="w-screen h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 flex-shrink-0 relative"
            >
              {/* Massive Background Letter */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden select-none">
                <span className="text-[50vw] md:text-[40vw] font-serif font-black leading-none text-white tracking-tighter">
                  {pillar.letter}
                </span>
              </div>

              {/* Content Panel */}
              <div className="z-10 w-full max-w-4xl flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
                <div className="flex-shrink-0">
                  <span className="text-7xl md:text-9xl lg:text-[12rem] font-serif text-white leading-none">
                    {pillar.letter}
                  </span>
                </div>

                <div className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-0 max-w-2xl">
                  <h3 className="text-3xl md:text-5xl lg:text-7xl font-serif text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <div className="w-12 h-1 bg-terminal-green" />
                  <p className="text-base md:text-xl lg:text-2xl text-neutral-400 font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
