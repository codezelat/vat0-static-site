"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactModal from "@/components/ui/ContactModal";

// CSS for red tinted background with heavy grain
const redGrainStyle = {
  backgroundImage: `url("/images/hero-bg.png")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section
        id="contact"
        className="relative w-full py-24 md:py-48 px-4 sm:px-6 md:px-12 bg-black flex justify-center items-center overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full max-w-7xl rounded-2xl md:rounded-[2.5rem] overflow-hidden p-10 md:p-24 lg:p-32 flex flex-col items-center text-center border border-red-900/40 backdrop-blur-3xl bg-white/2 shadow-[0_0_100px_rgba(153,27,27,0.15)]"
        >
          {/* Grain texture overlay for cinematic glass effect */}
          <div 
            className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none bg-gradient-to-br from-red-950/30 via-transparent to-red-900/20" />

          {/* Ambient red glow behind the glass */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full bg-red-600/30 mix-blend-screen pointer-events-none z-0"
            style={{ filter: "blur(120px)" }}
          />

          <div className="relative z-10 flex flex-col items-center max-w-3xl">
            <span className="text-xs md:text-sm font-mono text-red-500 uppercase tracking-widest mb-6">
              Contact Us for a Consultation
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-serif text-white mb-6 md:mb-8 tracking-tight leading-[1.1]">
              Is your infrastructure <br className="hidden md:block" />
              ready for impact?
            </h2>

            {/* Main CTA button matching premium styling */}
            <button
              onClick={openModal}
              className="relative group px-10 md:px-12 py-5 md:py-6 bg-red-950/50 border border-red-900/50 text-white text-sm md:text-base font-semibold rounded-full hover:bg-red-900 shadow-[0_0_30px_rgba(153,27,27,0.3)] transition-all duration-500 overflow-hidden font-sans tracking-widest uppercase cursor-pointer"
            >
              {/* Soft inner glow on hover */}
              <div className="absolute inset-0 bg-linear-to-r from-red-600/0 via-red-600/30 to-red-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <span className="relative z-10">Initiate Protocol</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
