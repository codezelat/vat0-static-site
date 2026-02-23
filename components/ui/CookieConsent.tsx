"use client";

import { useState, useEffect, createContext, useContext, ReactNode, useCallback } from "react";
import Link from "next/link";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export type ConsentLevel = "essential" | "all";

export interface CookieConsent {
  essential: boolean; // Always true - cannot be disabled
  analytics: boolean;
  marketing: boolean;
}

export interface ConsentState {
  consent: CookieConsent;
  hasConsented: boolean;
  timestamp: string | null;
}

// ============================================================================
// CONSTANTS
// ============================================================================

const CONSENT_KEY = "vat0-cookie-consent-v1";
const CONSENT_EXPIRY_DAYS = 180; // 6 months

// ============================================================================
// CONTEXT
// ============================================================================

interface CookieConsentContextType {
  consent: CookieConsent;
  hasConsented: boolean;
  updateConsent: (consent: Partial<CookieConsent>) => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  resetConsent: () => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(
  undefined
);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true,
    analytics: false,
    marketing: false,
  });
  const [hasConsented, setHasConsented] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  // Load consent from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      try {
        const parsed: ConsentState = JSON.parse(stored);

        if (parsed.timestamp) {
          const storedDate = new Date(parsed.timestamp);
          const now = new Date();
          const diffDays =
            (now.getTime() - storedDate.getTime()) / (1000 * 60 * 60 * 24);

          if (diffDays > CONSENT_EXPIRY_DAYS) {
            localStorage.removeItem(CONSENT_KEY);
            setShowBanner(true);
          } else {
            setConsent(parsed.consent);
            setHasConsented(parsed.hasConsented);
            setShowBanner(false);
          }
        }
      } catch {
        setShowBanner(true);
      }
    } else {
      // Delay showing banner by 1 second for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = useCallback(
    (newConsent: CookieConsent, consented: boolean) => {
      const state: ConsentState = {
        consent: newConsent,
        hasConsented: consented,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
      setConsent(newConsent);
      setHasConsented(consented);
    },
    []
  );

  const updateConsent = useCallback(
    (partialConsent: Partial<CookieConsent>) => {
      const newConsent = { ...consent, ...partialConsent };
      saveConsent(newConsent, true);
    },
    [consent, saveConsent]
  );

  const acceptAll = useCallback(() => {
    const newConsent = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(newConsent, true);
    setShowBanner(false);
  }, [saveConsent]);

  const rejectNonEssential = useCallback(() => {
    const newConsent = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    saveConsent(newConsent, true);
    setShowBanner(false);
  }, [saveConsent]);

  const resetConsent = useCallback(() => {
    localStorage.removeItem(CONSENT_KEY);
    setConsent({ essential: true, analytics: false, marketing: false });
    setHasConsented(false);
    setShowBanner(true);
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasConsented,
        updateConsent,
        acceptAll,
        rejectNonEssential,
        resetConsent,
        showBanner,
        setShowBanner,
      }}
    >
      {children}
      <CookieConsentBanner
        showBanner={showBanner}
        onAcceptAll={acceptAll}
        onEssentialOnly={rejectNonEssential}
      />
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider"
    );
  }
  return context;
}

// ============================================================================
// COOKIE CONSENT BANNER COMPONENT
// ============================================================================

interface CookieConsentBannerProps {
  showBanner: boolean;
  onAcceptAll: () => void;
  onEssentialOnly: () => void;
}

function CookieConsentBanner({
  showBanner,
  onAcceptAll,
  onEssentialOnly,
}: CookieConsentBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (showBanner) {
      setIsAnimating(true);
      // Small delay to allow the browser to render the element before animating
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      // Wait for animation to complete before removing from DOM
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [showBanner]);

  if (!isAnimating && !showBanner) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-xl border-t border-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      role="banner"
      aria-label="Cookie consent"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm text-white/90 leading-relaxed">
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic. By clicking
              &quot;Accept All&quot;, you consent to our use of cookies.{" "}
              <Link
                href="/privacy"
                className="text-[#00ff41] hover:underline transition-all duration-200"
              >
                Learn more
              </Link>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Accept All Button */}
            <button
              onClick={onAcceptAll}
              className="px-4 py-2 bg-[#00ff41] text-black rounded-full font-medium text-sm hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-[#00ff41] focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Accept all cookies"
            >
              Accept All
            </button>

            {/* Essential Only Button */}
            <button
              onClick={onEssentialOnly}
              className="px-4 py-2 bg-transparent border border-white/20 text-white rounded-full font-medium text-sm hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label="Accept only essential cookies"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieConsentBanner;
