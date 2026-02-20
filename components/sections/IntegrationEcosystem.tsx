"use client";

import { motion } from "framer-motion";

// List of enterprise/cybersecurity tech stack text logos.
// We are using text instead of actual images to keep it minimal, fast, and
// perfectly matched to the monochrome aesthetic without needing external assets.
const technologies = [
  "AWS",
  "Google Cloud",
  "Microsoft Azure",
  "Kubernetes",
  "Docker",
  "Terraform",
  "GitLab",
  "GitHub Actions",
  "CrowdStrike",
  "Datadog",
  "Splunk",
  "HashiCorp Vault",
  "Palo Alto",
  "Cloudflare",
  "SonarQube",
];

export default function IntegrationEcosystem() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-black overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
      {/* Dot Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center mb-16 px-6">
        <h2 className="text-2xl md:text-4xl font-serif text-white mb-4">
          Integrated Ecosystem
        </h2>
        <p className="text-neutral-500 font-sans text-sm md:text-base max-w-xl mx-auto">
          Securing and observing modern deployment pipelines across leading
          cloud infrastructures.
        </p>
      </div>

      {/* 
        The Marquee Container. 
        It has a CSS mask-image (linear-gradient) applied to fade out the left and right edges.
      */}
      <div
        className="relative z-10 w-full flex overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <motion.div
          className="flex flex-nowrap whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35, // Slow, premium scroll speed
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* 
            We render the array twice within the same flex container to create a seamless infinite loop.
            When it translates -50%, it seamlessly resets to 0%.
          */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-12 md:px-20 text-xl md:text-3xl font-mono text-neutral-600 uppercase tracking-widest font-bold"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
