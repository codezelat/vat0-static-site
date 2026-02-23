"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useCookieConsent } from "./ui/CookieConsent";

// Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = "G-DZN0JLD7FL";

// Extend window type for gtag
declare global {
  interface Window {
    gtag: (...args: (string | Date | Record<string, unknown>)[]) => void;
    dataLayer: (string | Date | Record<string, unknown>)[];
  }
}

export function GoogleAnalytics() {
  const { consent } = useCookieConsent();

  useEffect(() => {
    // Only initialize GA if analytics consent is given
    if (typeof window.gtag !== "function") return;
    
    if (consent.analytics) {
      // Enable analytics
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    } else {
      // Disable analytics
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  }, [consent.analytics]);

  return (
    <>
      {/* Google Tag Manager - Load with denied consent by default */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Default consent to denied until user accepts
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
            
            // Configure GA4
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              cookie_flags: 'SameSite=None;Secure',
              cookie_expires: 63072000, // 2 years
              cookie_update: true,
              send_page_view: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
              restricted_data_processing: true,
              transport_type: 'beacon'
            });
          `,
        }}
      />
    </>
  );
}

// Helper hook for tracking events
export function useAnalytics() {
  const { consent } = useCookieConsent();

  const trackEvent = (
    eventName: string,
    eventParams?: Record<string, unknown>
  ) => {
    if (typeof window.gtag !== "function" || !consent.analytics) return;
    
    if (eventParams) {
      window.gtag("event", eventName, eventParams);
    } else {
      window.gtag("event", eventName);
    }
  };

  const trackPageView = (url: string, title?: string) => {
    if (typeof window.gtag !== "function" || !consent.analytics) return;
    
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title || document.title,
      page_location: window.location.href,
    });
  };

  return { trackEvent, trackPageView };
}

export { GA_MEASUREMENT_ID };
