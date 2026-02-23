"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
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
        {/* Background Images Container */}
        <div className="absolute inset-0 overflow-hidden">
          
          {/* Desktop Image */}
          <div className="absolute inset-0 hidden md:block">
            <motion.div
              className="absolute inset-0 will-change-transform"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <Image
                src="/images/hero-bg.png"
                alt="Hero background"
                fill
                priority
                quality={80}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
            {/* Desktop Overlays */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />
          </div>

          {/* Mobile Image */}
          <div className="absolute inset-0 block md:hidden">
            <motion.div
              className="absolute inset-0 will-change-transform"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Image
                src="/images/hero-bg-mobile.jpg"
                alt="Hero background"
                fill
                priority
                quality={80}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
            {/* Mobile Overlays */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
          </div>

          {/* CSS Grain Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Interactive Background Glow - Desktop only */}
        <motion.div
          className="hidden md:block absolute w-[600px] h-[600px] rounded-full bg-terminal-green/10 -z-10"
          style={{ filter: "blur(100px)" }}
          animate={{
            x: mousePosition.x * 200,
            y: mousePosition.y * 200,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 20, mass: 0.5 }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 max-w-2xl">
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
            className="text-neutral-400 mt-5 text-xs md:text-sm max-w-md font-sans leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Architecting Zero Trust infrastructure where systems are resilient
            to compromise, observable in operation, and fiercely protected from
            the root up.
          </motion.p>
        </div>

        {/* Scroll Indicator - Positioned at bottom of card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        >
          <div className="w-px h-8 bg-white/20" />
          <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-500 font-sans">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
