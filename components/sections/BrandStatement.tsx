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

      <div className="z-10 max-w-5xl mx-auto flex flex-wrap justify-center gap-x-[0.2em] sm:gap-x-[0.3em] gap-y-1 w-full">
        {words.map((word, i) => {
          // Calculate when each word should start and finish fading in based on horizontal position in string
          const start = i / words.length;
          const end = start + 1 / words.length;

          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
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
  // Map scroll progress to opacity
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className="relative inline-block text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-sans font-medium text-white/90 tracking-tight leading-snug">
      <span className="absolute opacity-15">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
