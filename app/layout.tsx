import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/LenisProvider";
import { CookieConsentProvider } from "@/components/ui/CookieConsent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { StructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vat0.lk"),
  title: "Vault Zero | VAT0 | Enterprise Zero Trust Security Solutions Sri Lanka",
  description:
    "VAulTzer0 (VAT0) is Sri Lanka's premier enterprise cybersecurity consultancy specializing in zero trust architecture, DevSecOps, cloud security, penetration testing, and vulnerability management. We deliver world-class security solutions for enterprises in Colombo and across the globe.",
  keywords: [
    "zero trust architecture",
    "cybersecurity sri lanka",
    "devsecops",
    "cloud security",
    "enterprise security",
    "penetration testing",
    "vulnerability management",
    "security consulting colombo",
    "VAulTzer0",
    "VAT0",
    "cybersecurity consultancy",
    "network security",
    "information security",
    "security assessment",
    "compliance consulting",
  ],
  authors: [{ name: "VaultZero", url: "https://vat0.lk" }],
  creator: "VaultZero (VAT0)",
  publisher: "VaultZero (VAT0)",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vat0.lk",
    siteName: "VAulTzer0 | Enterprise Zero Trust Security Solutions",
    title: "VAulTzer0 | Enterprise Zero Trust Security Solutions Sri Lanka",
    description:
      "Sri Lanka's premier enterprise cybersecurity consultancy specializing in zero trust architecture, DevSecOps, cloud security, and penetration testing. Secure your digital assets with VAT0.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VAulTzer0 - Enterprise Zero Trust Security Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VAulTzer0 | Enterprise Zero Trust Security Solutions Sri Lanka",
    description:
      "Sri Lanka's premier enterprise cybersecurity consultancy specializing in zero trust architecture, DevSecOps, cloud security, and penetration testing.",
    images: ["/images/og-image.jpg"],
    creator: "@vat0lk",
    site: "@vat0lk",
  },
  category: "Cybersecurity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <CookieConsentProvider>
          <LenisProvider>
            {children}
            <GoogleAnalytics />
            <StructuredData />
          </LenisProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
