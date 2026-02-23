import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "404 | Page Not Found - VAulTzer0",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Subtle grain texture overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Animated glow effect behind 404 */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full animate-pulse-glow"
          style={{ 
            background: "radial-gradient(circle, rgba(0, 255, 65, 0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
          {/* 404 Typography */}
          <div
            className="relative mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h1 className="text-[20vw] md:text-[16vw] lg:text-[14vw] font-serif text-white leading-none tracking-tighter select-none">
              404
            </h1>
            
            {/* Terminal green accent line */}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-[#00ff41] animate-expand-width"
              style={{ boxShadow: "0 0 10px rgba(0, 255, 65, 0.5)" }}
            />
          </div>

          {/* Subtitle - Geist Mono */}
          <p
            className="font-mono text-neutral-400 text-sm md:text-base uppercase tracking-[0.2em] mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Page not found
          </p>

          {/* Terminal green dot accent */}
          <div
            className="w-1 h-1 rounded-full bg-[#00ff41] mb-6 animate-scale-in"
            style={{ boxShadow: "0 0 8px rgba(0, 255, 65, 0.8)" }}
          />

          {/* Description */}
          <p
            className="text-neutral-500 text-sm md:text-base max-w-md mb-12 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* CTA Button */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 rounded-full text-white text-sm font-medium bg-transparent hover:bg-white/5 transition-all duration-300"
            >
              Return Home
            </Link>
          </div>
        </div>

        {/* Corner decorative elements */}
        <div
          className="absolute top-24 left-6 md:left-12 w-8 h-8 border-l border-t border-white/10 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        />
        <div
          className="absolute top-24 right-6 md:right-12 w-8 h-8 border-r border-t border-white/10 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        />
        <div
          className="absolute bottom-24 left-6 md:left-12 w-8 h-8 border-l border-b border-white/10 animate-fade-in"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-24 right-6 md:right-12 w-8 h-8 border-r border-b border-white/10 animate-fade-in"
          style={{ animationDelay: "1.1s" }}
        />
      </main>

      <Footer />
    </>
  );
}
