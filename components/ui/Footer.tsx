"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [hovered, setHovered] = useState(false);

  return (
    <footer className="w-full bg-[#030303] pt-24 md:pt-40 pb-6 px-6 md:px-12 border-t border-white/5 overflow-hidden flex flex-col relative z-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-start gap-16 mb-24 md:mb-32 z-10">
        {/* Left Information */}
        <div className="flex flex-col gap-6 max-w-sm">
          <span className="text-2xl font-serif text-white tracking-widest">
            VAULT ZERO
          </span>
          <p className="text-sm text-neutral-500 font-sans leading-relaxed">
            Resilient systems. Verified access. Enterprise zero-trust
            architecture engineered for absolute scale and security.
          </p>
        </div>

        {/* Right Links Grid (Industrial Layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24 w-full lg:w-auto">
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-3">
              Practice Areas
            </h4>
            <a
              href="#"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              VAT0 Secure
            </a>
            <a
              href="#"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              VAT0 Ship
            </a>
            <a
              href="#"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              VAT0 Verify
            </a>
            <a
              href="#"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Zero Trust
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-3">
              Company
            </h4>
            <a
              href="#"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Architecture
            </a>
            <a
              href="#"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Privacy & Terms
            </a>
          </div>

          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <h4 className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-3">
              Connect
            </h4>
            <a
              href="#"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              X
            </a>
          </div>
        </div>
      </div>

      {/* Elegant Expanding Bottom Text - Serif */}
      <div
        className="w-full flex justify-center items-end mt-auto z-10 overflow-hidden px-4 md:px-0 cursor-default py-4"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
      >
        <motion.div
          layout
          className="flex items-center text-[16vw] md:text-[20vw] font-serif tracking-tight text-white leading-[0.8] select-none"
        >
          <motion.span layout>VA</motion.span>
          <AnimatePresence mode="popLayout">
            {hovered && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden inline-block"
              >
                ul
              </motion.span>
            )}
          </AnimatePresence>
          <motion.span layout>T</motion.span>
          <AnimatePresence mode="popLayout">
            {hovered && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden inline-block"
              >
                zer
              </motion.span>
            )}
          </AnimatePresence>
          <motion.span layout>0</motion.span>
        </motion.div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center mt-12 md:mt-16 text-[10px] md:text-xs text-neutral-600 font-mono uppercase tracking-widest border-t border-white/10 pt-6 z-10">
        <span>
          VAulTzer0 Security by{" "}
          <a
            href="https://codezela.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors duration-300"
          >
            Codezela Technologies
          </a>{" "}
          &copy; {currentYear}
        </span>
        <span className="mt-3 sm:mt-0">
          Built for scale. Secured by default.
        </span>
      </div>
    </footer>
  );
}
