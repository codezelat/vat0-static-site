"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse for the background glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Text Animation Variants
  const containerVars = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const textVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const headline = ["Secure", "by", "Default.", "Verifiable", "at", "Release."];

  return (
    <section className="w-full h-svh p-6 md:p-10 lg:p-12 pb-0 md:pb-0 lg:pb-0">
      <div className="relative w-full h-full max-w-7xl mx-auto rounded-2xl md:rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center bg-[#050505] border border-white/5">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src="/images/hero-bg-with-grain.png"
            alt="Hero abstract background"
            className="w-full h-full object-cover object-center origin-center"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          {/* Overlays to secure text legibility and mood while keeping image visible */}
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/90" />
        </div>

        {/* Interactive Background Glow */}
        <motion.div
          className="absolute w-100 h-100 md:w-150 md:h-150 rounded-full bg-terminal-green/15 mix-blend-screen -z-10"
          style={{ filter: "blur(100px)" }}
          animate={{
            x: mousePosition.x * 200,
            y: mousePosition.y * 200,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 20, mass: 0.5 }}
        />

        {/* Static ambient center glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-neutral-900/40 mix-blend-lighten pointer-events-none -z-20"
          style={{ filter: "blur(120px)" }}
        />

        <div className="z-10 flex flex-col items-center text-center px-4 md:px-6 max-w-2xl">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-normal leading-[1.2] text-white flex flex-wrap justify-center gap-[0.2em]"
            variants={containerVars}
            initial="hidden"
            animate="visible"
          >
            {headline.map((word, i) => (
              <motion.span key={i} className="inline-block" variants={textVars}>
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-neutral-500 mt-5 text-xs md:text-sm max-w-md font-sans leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Architecting Zero Trust infrastructure where systems are resilient
            to compromise, observable in operation, and fiercely protected from
            the root up.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 flex flex-col items-center gap-3"
          >
            <div className="w-px h-8 bg-white/20" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-500 font-sans">
              Scroll
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
