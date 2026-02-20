"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative w-full py-24 md:py-48 px-4 sm:px-6 md:px-12 bg-black flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full max-w-6xl rounded-3xl md:rounded-[3rem] overflow-hidden p-10 md:p-24 lg:p-32 flex flex-col items-center text-center border border-white/10 backdrop-blur-3xl bg-white/[0.03] shadow-2xl"
      >
        {/* Grain overlay inside the glass box */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
          <Image
            src="/images/hero-bg-with-grain.png"
            alt="Grain texture"
            fill
            className="object-cover opacity-60 grayscale"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <span className="text-xs md:text-sm font-mono text-terminal-green uppercase tracking-widest mb-6">
            Initiate Protocol
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 md:mb-8 tracking-tight leading-[1.1]">
            Ready to secure your <br className="hidden md:block" />
            infrastructure?
          </h2>

          {/* Main CTA button matching site's initial button sizing */}
          <button className="px-8 md:px-10 py-4 md:py-5 bg-white text-black text-sm md:text-base font-semibold rounded-full hover:scale-105 transition-transform duration-300 font-sans tracking-wide">
            Get in Touch
          </button>
        </div>
      </motion.div>
    </section>
  );
}
