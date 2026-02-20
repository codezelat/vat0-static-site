"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: "01",
    title: "Cybersecurity & Zero Trust",
    description:
      "Enterprise security architecture that prevents threats before they breach. We implement verify-first, deny-by-default infrastructure for comprehensive protection.",
    features: [
      "Zero Trust Architecture",
      "Penetration Testing",
      "Vulnerability Management",
      "Identity & Access Control",
    ],
    color: "bg-white/[0.03]",
  },
  {
    id: "02",
    title: "DevSecOps & Cloud Engineering",
    description:
      "Secure, scalable, and resilient deployment pipelines. We embed security directly into the software development lifecycle and cloud infrastructure.",
    features: [
      "CI/CD Pipeline Design",
      "Infrastructure as Code",
      "Container Security",
      "Continuous Deployment",
    ],
    color: "bg-white/[0.05]",
  },
  {
    id: "03",
    title: "Quality Engineering (QA)",
    description:
      "Rigorous testing frameworks ensuring software is performant, reliable, and verified at every release gate before production.",
    features: [
      "Automated Testing",
      "Performance & Load Testing",
      "Security Code Review",
      "Release Validation",
    ],
    color: "bg-white/[0.03]",
  },
];

export default function ServicesStack() {
  const container = useRef<HTMLDivElement>(null);

  // Track scroll over the entire stack container
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={container}
      className="relative w-full pb-20 md:pb-32 bg-black"
    >
      {/* Grainy Texture Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen"
        style={{ clipPath: "inset(0)" }}
      >
        <img
          src="/images/hero-bg-with-grain.png"
          alt="Grain texture"
          className="w-full h-full object-cover opacity-50 grayscale"
        />
      </div>
      {/* 
        The parent is relative, but each card container inside will be sticky.
        We add enough top padding to ensure the cards start stacking neatly.
      */}
      <div className="pt-16 md:pt-24 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto flex flex-col gap-0 relative">
        <div className="mb-16 md:mb-32">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white mb-4 md:mb-6">
            Our Services
          </h2>
          <div className="w-full h-[1px] bg-neutral-800" />
        </div>

        {services.map((service, index) => {
          // Calculate individual scale based on the total scroll progress
          // As we scroll further down, earlier cards scale down slightly.
          const targetScale = 1 - (services.length - index) * 0.05;

          return (
            <Card
              key={index}
              index={index}
              {...service}
              progress={scrollYProgress}
              targetScale={targetScale}
              range={[index * (1 / services.length), 1]}
            />
          );
        })}
      </div>
    </section>
  );
}

interface CardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  index: number;
  progress: any;
  targetScale: number;
  range: [number, number];
}

const Card = ({
  id,
  title,
  description,
  features,
  color,
  index,
  progress,
  targetScale,
  range,
}: CardProps) => {
  // Map scroll progress to a scale value
  const scale = useTransform(progress, range, [1, targetScale]);

  // Dynamic top calculating sticking offset for each card
  // Tighter stacking distance on mobile so cards fit better
  const topOffset = `calc(12vh + ${index * 20}px)`;

  return (
    <div
      className="sticky flex items-start justify-center"
      style={{
        top: topOffset,
        minHeight: "60vh",
        paddingBottom: "8vh",
        zIndex: index,
      }}
    >
      <motion.div
        style={{ scale }}
        className={`w-full min-h-[40vh] md:min-h-[50vh] rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-12 lg:p-16 flex flex-col justify-between border border-white/10 backdrop-blur-xl shadow-2xl ${color}`}
      >
        <div className="flex justify-between items-start">
          <span className="text-lg md:text-2xl font-mono text-neutral-500">
            {id}
          </span>
          {/* Optional decorative element */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-neutral-700 flex items-center justify-center">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-terminal-green shadow-[0_0_10px_rgba(0,255,65,0.5)]" />
          </div>
        </div>

        <div className="max-w-3xl mt-6 md:mt-8">
          <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-3 md:mb-6 tracking-tight">
            {title}
          </h3>
          <p className="text-sm sm:text-base md:text-xl text-neutral-400 leading-relaxed font-sans mb-6 md:mb-8">
            {description}
          </p>

          {/* Capability Boxes */}
          <div className="hidden md:flex flex-wrap gap-2 md:gap-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="px-3 md:px-5 py-2 rounded-full border border-white/10 bg-black/20 text-xs md:text-sm text-neutral-300 font-mono tracking-wide"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
