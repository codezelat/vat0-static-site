"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useCallback, useRef } from "react";
import { useCookieConsent } from "@/components/ui/CookieConsent";

interface LenisProviderProps {
  children: ReactNode;
}

// Track scroll events for analytics (only if consent given)
function useScrollTracking() {
  const { consent, hasConsented } = useCookieConsent();
  const scrollDataRef = useRef({
    scrollDepth: 0,
    maxScrollDepth: 0,
    lastScrollTime: Date.now(),
    timeOnPage: 0,
  });

  const handleScroll = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      if (!consent.analytics || !hasConsented) return;

      const { scroll, limit } = e;

      // Calculate scroll depth percentage
      const scrollDepthPercent = limit > 0 ? Math.round((scroll / limit) * 100) : 0;

      // Update max scroll depth
      if (scrollDepthPercent > scrollDataRef.current.maxScrollDepth) {
        scrollDataRef.current.maxScrollDepth = scrollDepthPercent;
      }

      // Track significant scroll events (25%, 50%, 75%, 90% milestones)
      const milestones = [25, 50, 75, 90];
      milestones.forEach((milestone) => {
        if (
          scrollDepthPercent >= milestone &&
          scrollDataRef.current.scrollDepth < milestone
        ) {
          scrollDataRef.current.scrollDepth = milestone;
          // Send to analytics if available
          if (typeof window !== "undefined" && "gtag" in window) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).gtag?.("event", "scroll_depth", {
              depth: milestone,
              page_path: window.location.pathname,
            });
          }
        }
      });

      // Track engagement time
      const now = Date.now();
      scrollDataRef.current.timeOnPage += now - scrollDataRef.current.lastScrollTime;
      scrollDataRef.current.lastScrollTime = now;
    },
    [consent.analytics, hasConsented]
  );

  return handleScroll;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const handleScroll = useScrollTracking();

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
      }}
      onScroll={handleScroll}
    >
      {children}
    </ReactLenis>
  );
}
