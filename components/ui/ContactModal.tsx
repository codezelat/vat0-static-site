"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2, Shield } from "lucide-react";
import Script from "next/script";

// ============================================================================
// TYPES
// ============================================================================

interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  serviceInterest: string;
  budgetRange: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  serviceInterest?: string;
  budgetRange?: string;
  message?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

// Cloudflare Turnstile Site Key
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || "";

// ============================================================================
// SERVICE OPTIONS
// ============================================================================

const SERVICE_OPTIONS = [
  { value: "", label: "Select service..." },
  { value: "cybersecurity-zero-trust", label: "Cybersecurity & Zero Trust" },
  { value: "devsecops-cloud", label: "DevSecOps & Cloud Engineering" },
  { value: "quality-engineering", label: "Quality Engineering (QA)" },
  { value: "multiple-services", label: "Multiple Services" },
  { value: "general-inquiry", label: "General Inquiry" },
];

const BUDGET_OPTIONS = [
  { value: "", label: "Budget range (optional)" },
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k-plus", label: "$100,000+" },
  { value: "discuss", label: "Prefer to discuss" },
];

// ============================================================================
// HOOK: useLockBodyScroll
// ============================================================================

function useLockBodyScroll(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    const originalStyle = window.getComputedStyle(document.body);
    const originalOverflow = originalStyle.overflow;
    const originalPaddingRight = originalStyle.paddingRight;
    
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isLocked]);
}

// ============================================================================
// HOOK: useContactModal
// ============================================================================

interface UseContactModalReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function useContactModal(): UseContactModalReturn {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, open, close, toggle };
}

// ============================================================================
// CONTACT MODAL COMPONENT
// ============================================================================

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Extend window for Turnstile
declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        "error-callback"?: () => void;
        "expired-callback"?: () => void;
        theme?: "light" | "dark" | "auto";
        size?: "normal" | "compact" | "flexible";
      }) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceInterest: "",
    budgetRange: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [turnstileError, setTurnstileError] = useState<string>("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const turnstileWidgetId = useRef<string | null>(null);

  // Lock body scroll when modal is open
  useLockBodyScroll(isOpen);

  // Initialize Turnstile when script loads
  useEffect(() => {
    if (!isOpen || !turnstileReady || !window.turnstile || !TURNSTILE_SITE_KEY) return;

    // Render Turnstile widget
    const container = document.getElementById("turnstile-container");
    if (container) {
      container.innerHTML = ""; // Clear previous
      turnstileWidgetId.current = window.turnstile.render(container, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: "dark",
        size: "normal",
        callback: (token: string) => {
          setTurnstileToken(token);
          setTurnstileError("");
        },
        "error-callback": () => {
          setTurnstileError("Security verification failed. Please refresh and try again.");
        },
        "expired-callback": () => {
          setTurnstileToken("");
          setTurnstileError("Security verification expired. Please verify again.");
        },
      });
    }

    return () => {
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetId.current);
      }
    };
  }, [isOpen, turnstileReady]);

  // ============================================================================
  // VALIDATION
  // ============================================================================

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = "Required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Min 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check Turnstile
    if (!turnstileToken) {
      setTurnstileError("Please complete the security verification below.");
      return;
    }

    setTouched({
      fullName: true,
      company: true,
      email: true,
      serviceInterest: true,
      message: true,
    });

    if (!validateForm()) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          company: "",
          email: "",
          phone: "",
          serviceInterest: "",
          budgetRange: "",
          message: "",
        });
        setTurnstileToken("");
        setTouched({});
        // Reset Turnstile
        if (window.turnstile && turnstileWidgetId.current) {
          window.turnstile.reset(turnstileWidgetId.current);
        }
      } else {
        setStatus("error");
        if (result.error) {
          console.error("Submission error:", result.error);
        }
      }
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      serviceInterest: "",
      budgetRange: "",
      message: "",
    });
    setErrors({});
    setTouched({});
    setTurnstileToken("");
    setTurnstileError("");
    if (window.turnstile && turnstileWidgetId.current) {
      window.turnstile.reset(turnstileWidgetId.current);
    }
  };

  // ============================================================================
  // KEYBOARD HANDLERS
  // ============================================================================

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // ============================================================================
  // RENDER HELPERS
  // ============================================================================

  const inputClasses = (fieldName: keyof FormErrors, isSelect = false) => {
    const hasError = fieldName in errors && touched[fieldName];
    return `
      w-full px-3 py-2.5 bg-white/5 border rounded-lg text-white 
      placeholder:text-white/25 text-sm
      focus:outline-none focus:border-[#00FF41] focus:ring-1 focus:ring-[#00FF41]/20
      transition-all duration-200
      ${isSelect ? "appearance-none cursor-pointer" : ""}
      ${hasError ? "border-red-500/70" : "border-white/10"}
    `.trim();
  };

  const labelClasses = "block text-[10px] font-mono uppercase tracking-wider text-white/50 mb-1.5";

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Turnstile Script */}
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="lazyOnload"
            onLoad={() => setTurnstileReady(true)}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-xl max-h-[90vh] flex flex-col"
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-[#080808] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
                
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
                  <div>
                    <h2 className="text-lg font-serif text-white tracking-tight">
                      Initiate Protocol
                    </h2>
                    <p className="text-[10px] font-mono text-white/40 mt-0.5">
                      Secure channel // Encrypted transmission
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto p-5">
                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-10 text-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center mb-5">
                        <CheckCircle className="w-7 h-7 text-[#00FF41]" />
                      </div>
                      <h3 className="text-xl font-serif text-white mb-2">
                        Transmission Received
                      </h3>
                      <p className="text-white/50 text-sm max-w-sm mb-6">
                        Your inquiry has been securely transmitted. Our team will analyze your requirements and respond within 24 hours.
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={handleReset}
                          className="px-4 py-2 bg-white/5 border border-white/20 text-white text-sm rounded-lg hover:bg-white/10 transition-colors"
                        >
                          Send Another
                        </button>
                        <button
                          onClick={onClose}
                          className="px-4 py-2 bg-[#00FF41] text-black text-sm font-semibold rounded-lg hover:bg-[#00FF41]/90 transition-colors"
                        >
                          Close
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      {/* Row 1: Full Name & Company */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="fullName" className={labelClasses}>
                            Full Name <span className="text-[#00FF41]">*</span>
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur("fullName")}
                            placeholder="Enter full name"
                            className={inputClasses("fullName")}
                            disabled={status === "loading"}
                          />
                          {errors.fullName && touched.fullName && (
                            <p className="mt-1 text-[10px] text-red-400">{errors.fullName}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="company" className={labelClasses}>
                            Company <span className="text-[#00FF41]">*</span>
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur("company")}
                            placeholder="Enter company name"
                            className={inputClasses("company")}
                            disabled={status === "loading"}
                          />
                          {errors.company && touched.company && (
                            <p className="mt-1 text-[10px] text-red-400">{errors.company}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Email & Phone */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="email" className={labelClasses}>
                            Email <span className="text-[#00FF41]">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur("email")}
                            placeholder="Enter email address"
                            className={inputClasses("email")}
                            disabled={status === "loading"}
                          />
                          {errors.email && touched.email && (
                            <p className="mt-1 text-[10px] text-red-400">{errors.email}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="phone" className={labelClasses}>
                            Phone <span className="text-white/30">(Optional)</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter phone number"
                            className={inputClasses("phone")}
                            disabled={status === "loading"}
                          />
                        </div>
                      </div>

                      {/* Row 3: Service & Budget */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="serviceInterest" className={labelClasses}>
                            Service <span className="text-[#00FF41]">*</span>
                          </label>
                          <select
                            id="serviceInterest"
                            name="serviceInterest"
                            value={formData.serviceInterest}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur("serviceInterest")}
                            className={`${inputClasses("serviceInterest", true)} pr-10`}
                            disabled={status === "loading"}
                          >
                            {SERVICE_OPTIONS.map((opt) => (
                              <option key={opt.value} value={opt.value} className="bg-[#080808]">
                                {opt.label}
                              </option>
                            ))}
                          </select>
                          {errors.serviceInterest && touched.serviceInterest && (
                            <p className="mt-1 text-[10px] text-red-400">{errors.serviceInterest}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="budgetRange" className={labelClasses}>
                            Budget <span className="text-white/30">(Optional)</span>
                          </label>
                          <select
                            id="budgetRange"
                            name="budgetRange"
                            value={formData.budgetRange}
                            onChange={handleInputChange}
                            className={`${inputClasses("budgetRange", true)} pr-10`}
                            disabled={status === "loading"}
                          >
                            {BUDGET_OPTIONS.map((opt) => (
                              <option key={opt.value} value={opt.value} className="bg-[#080808]">
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Row 4: Message */}
                      <div>
                        <label htmlFor="message" className={labelClasses}>
                          Message <span className="text-[#00FF41]">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur("message")}
                          placeholder="Describe your project requirements..."
                          rows={3}
                          className={inputClasses("message")}
                          disabled={status === "loading"}
                        />
                        {errors.message && touched.message && (
                          <p className="mt-1 text-[10px] text-red-400">{errors.message}</p>
                        )}
                      </div>

                      {/* Turnstile Security Verification */}
                      <div className="pt-2">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-3.5 h-3.5 text-white/40" />
                          <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                            Security Verification
                          </span>
                        </div>
                        <div id="turnstile-container" className="min-h-[65px]" />
                        {turnstileError && (
                          <p className="mt-2 text-[10px] text-red-400 flex items-center gap-1">
                            <span>⚠</span> {turnstileError}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={status === "loading" || !turnstileToken}
                          className="w-full relative group px-6 py-3 bg-[#00FF41]/10 border border-[#00FF41]/40 text-[#00FF41] text-sm font-semibold rounded-lg hover:bg-[#00FF41]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                        >
                          {status === "loading" ? (
                            <span className="flex items-center justify-center gap-2">
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Transmitting...
                            </span>
                          ) : (
                            <span className="relative z-10">Send Message</span>
                          )}
                        </button>
                        
                        {status === "error" && (
                          <p className="mt-2 text-center text-xs text-red-400">
                            Transmission failed. Please try again.
                          </p>
                        )}
                      </div>

                      <p className="text-center text-[10px] text-white/30">
                        By submitting, you agree to our{" "}
                        <a 
                          href="/privacy" 
                          className="text-white/50 hover:text-white underline"
                          onClick={(e) => { e.preventDefault(); onClose(); window.location.href = '/privacy'; }}
                        >
                          Privacy Policy
                        </a>
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
