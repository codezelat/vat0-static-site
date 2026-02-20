"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        {/* Container - Glassmorphism Pill */}
        <div className="pointer-events-auto flex items-center justify-between h-12 md:h-14 px-5 md:px-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-[calc(100vw-2rem)] md:w-[calc(100vw-5rem)] lg:w-[calc(100vw-6rem)] max-w-7xl shadow-2xl transition-all duration-300">
          {/* Logo Container */}
          <Link
            href="/"
            className="group relative flex items-center h-8 overflow-hidden text-white text-base md:text-lg font-bold tracking-tight z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Default Logo */}
            <motion.div
              className="flex items-center absolute inset-0 text-white font-bold"
              initial={{ opacity: 1, y: 0 }}
              animate={{
                opacity: isHovered ? 0 : 1,
                y: isHovered ? -10 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              VAulTzer0
            </motion.div>

            {/* Hover Logo (VAT0) */}
            <motion.div
              className="flex items-center absolute inset-0 text-terminal-green italic font-black"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              VAT0
            </motion.div>

            {/* Invisible structural spacer to keep the layout size correct */}
            <span className="opacity-0 pointer-events-none select-none">
              VAulTzer0
            </span>
          </Link>

          {/* Right side simple menu (Desktop) */}
          <div className="hidden md:flex gap-6 text-[10px] md:text-xs font-semibold text-white/80 uppercase tracking-widest z-50">
            <Link
              href="#services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/80 hover:text-white transition-colors z-50 p-1 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-8 text-2xl font-serif text-white tracking-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <Link
                  href="#services"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-terminal-green transition-colors"
                >
                  Services
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-terminal-green transition-colors"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
