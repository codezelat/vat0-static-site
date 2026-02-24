"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Terminal green color for hover effects
const TERMINAL_GREEN = "#00ff41";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

function FooterLink({ href, children, external = false }: FooterLinkProps) {
  const baseClasses =
    "relative text-sm text-neutral-400 transition-colors duration-300 group";

  const content = (
    <>
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        {children}
      </span>
      {/* Terminal green underline animation */}
      <span
        className="absolute left-0 bottom-0 w-0 h-[1px] group-hover:w-full transition-all duration-300 ease-out"
        style={{
          backgroundColor: TERMINAL_GREEN,
          boxShadow: `0 0 8px ${TERMINAL_GREEN}`,
        }}
      />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {content}
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [hovered, setHovered] = useState(false);

  return (
    <footer className="w-full bg-[#030303] pt-24 md:pt-40 pb-6 px-6 md:px-12 border-t border-white/5 overflow-hidden flex flex-col relative z-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-start gap-16 mb-24 md:mb-32 z-10">
        {/* Left Information */}
        <div className="flex flex-col gap-6 max-w-sm">
          <Link href="/" className="group">
            <span className="text-2xl font-serif text-white tracking-widest group-hover:text-[#00ff41] transition-colors duration-300">
              VAULT ZERO
            </span>
          </Link>
          <p className="text-sm text-neutral-500 font-sans leading-relaxed">
            Resilient systems. Verified access. Enterprise zero-trust
            architecture engineered for absolute scale and security.
          </p>
          <div className="space-y-1 text-sm text-neutral-500 font-sans leading-relaxed">
            <address className="not-italic">
              345/35, RIT Alles Mw, Colombo 08
            </address>
            <a
              href="tel:+94114858899"
              className="text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Tel: +94114858899
            </a>
          </div>
        </div>

        {/* Right Links Grid - Now 3 columns instead of 4 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-16 w-full lg:w-auto">
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-3">
              Practice Areas
            </h4>
            <FooterLink href="/#services">VAT0 Secure</FooterLink>
            <FooterLink href="/#services">VAT0 Ship</FooterLink>
            <FooterLink href="/#services">VAT0 Verify</FooterLink>
            <FooterLink href="/#services">Zero Trust</FooterLink>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-3">
              Company
            </h4>
            <FooterLink href="/#contact">Contact</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-3">
              Connect
            </h4>
            <FooterLink href="https://www.linkedin.com/company/vat0" external>
              LinkedIn
            </FooterLink>
            <FooterLink href="https://www.facebook.com/vat0.lk" external>
              Facebook
            </FooterLink>
            <FooterLink href="https://www.instagram.com/vat0.lk" external>
              Instagram
            </FooterLink>
            <FooterLink href="https://www.x.com/vat0lk" external>
              X
            </FooterLink>
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
          <motion.span layout className="font-mono tabular-nums">
            0
          </motion.span>
        </motion.div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center mt-12 md:mt-16 text-[10px] md:text-xs text-neutral-600 font-mono uppercase tracking-widest border-t border-white/10 pt-6 z-10">
        <span>
          VAulTzer
          <span className="font-mono tabular-nums">0</span> Security by{" "}
          <a
            href="https://codezela.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-[#00ff41] transition-colors duration-300"
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
