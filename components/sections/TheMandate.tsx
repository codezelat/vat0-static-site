"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TheMandate() {
  const mandates = [
    { text: "Zero implicit access.", index: 0 },
    { text: "Zero standing privileges.", index: 1 },
    { text: "Zero breach tolerance.", index: 2 },
    { text: "Zero-day readiness.", index: 3 },
  ];

  return (
    <section className="relative w-full py-32 md:py-64 bg-black overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 md:px-12">
      {/* Subtle ambient glow — no image, no color bleed */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[80vh] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,255,65,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col gap-12 md:gap-24">
        {mandates.map((item) => (
          <MandateRow key={item.index} text={item.text} index={item.index} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 mt-32 md:mt-48 flex justify-end">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-5%" }}
          transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-lg md:text-2xl font-sans text-neutral-400 max-w-2xl leading-relaxed"
        >
          Our mandate is clear. We architect infrastructure that assumes
          compromise and defaults to a{" "}
          <span className="text-white">deny-all state</span>. We move systems
          from development to production without ever compromising operational
          integrity.
        </motion.p>
      </div>
    </section>
  );
}

function MandateRow({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.4"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -60 : 60, 0],
  );
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="flex items-start gap-4 md:gap-8 lg:gap-12">
      {/* Animated line indicator */}
      <div className="mt-4 md:mt-8 shrink-0 w-8 md:w-16 lg:w-24 h-0.5 bg-neutral-900 relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-terminal-green"
          style={{ width: lineWidth }}
        />
      </div>

      <div className="overflow-x-clip overflow-y-visible flex-1">
        <motion.h2
          style={{ opacity, x }}
          transition={{ ease: [0.215, 0.61, 0.355, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[7rem] font-serif font-medium text-white tracking-tight leading-[1.15] md:leading-[1.1]"
        >
          {text}
        </motion.h2>
      </div>
    </div>
  );
}
