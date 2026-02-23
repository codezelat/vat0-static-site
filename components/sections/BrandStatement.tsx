"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

export default function BrandStatement() {
  const container = useRef<HTMLDivElement>(null);

  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.7", "center 0.4"],
  });

  const statement =
    "We architect resilient digital infrastructure that is secure by default. Verify. Authorize. Track. Zero implicit trust.";
  const words = statement.split(" ");

  return (
    <section
      ref={container}
      className="relative min-h-screen md:min-h-[150vh] w-full flex items-center justify-center py-20 md:py-32 px-4 sm:px-6 md:px-10 lg:px-12 overflow-hidden"
    >
      {/* Dot Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient Mask for top/bottom fading */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black pointer-events-none z-0" />

      <div className="z-10 max-w-6xl mx-auto flex flex-wrap justify-center gap-x-3 sm:gap-x-4 md:gap-x-5 gap-y-2 w-full">
        {words.map((word, i) => {
          // Calculate when each word should start and finish fading in
          const start = i / words.length;
          const end = Math.min(start + 1.5 / words.length, 1);

          return (
            <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </div>
    </section>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  // Map scroll progress to opacity - fade from ghost to full
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className="relative inline-block text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-sans font-medium tracking-tight leading-tight">
      {/* Ghost text - always visible at low opacity */}
      <span className="text-white/[0.08]">{children}</span>
      
      {/* Animated overlay - fades in on scroll */}
      <motion.span 
        className="absolute inset-0 text-white"
        style={{ opacity }}
      >
        {children}
      </motion.span>
    </span>
  );
};
