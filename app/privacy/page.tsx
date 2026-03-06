import type { Metadata } from "next";
import { ArrowLeft, Shield, Lock, Eye, FileText, Globe, Clock, Users, Mail, Server } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | VaultZero (VAT0)",
  description: "Privacy Policy for VaultZero (VAT0) - A cybersecurity consultancy by Codezela Technologies. Learn how we collect, use, and protect your personal data in compliance with Sri Lanka PDPA and GDPR.",
  keywords: ["privacy policy", "VAT0", "VaultZero", "cybersecurity", "data protection", "GDPR", "Sri Lanka PDPA", "Codezela Technologies"],
  openGraph: {
    title: "Privacy Policy | VaultZero (VAT0)",
    description: "Privacy Policy for VaultZero (VAT0) - A cybersecurity consultancy by Codezela Technologies.",
    type: "article",
  },
};

const lastUpdated = "February 23, 2026";

interface PolicySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export default function PrivacyPolicy() {
  const sections: PolicySection[] = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            <strong>VaultZero Security</strong> (&quot;VAT0&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is 
            a cybersecurity consultancy operated by <strong>Codezela Technologies (Pvt) Ltd</strong>, 
            a company registered in <strong>Sri Lanka</strong> under company registration number 
            PV00218349. We are committed to protecting your privacy and ensuring the security of your 
            personal data.
          </p>
          <p className="mb-4">
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website (vat0.lk), use our contact forms, or engage with us professionally. 
            By accessing our services, you agree to the terms outlined in this policy.
          </p>
          <p>
            As a cybersecurity-focused organization, we hold ourselves to the highest standards of 
            data protection and privacy. Our practices are designed to comply with applicable data 
            protection laws, including the <strong>Sri Lanka Personal Data Protection Act (PDPA) No. 9 of 2022</strong>{" "}
            and the <strong>General Data Protection Regulation (GDPR)</strong> for our international clients.
          </p>
        </>
      ),
    },
    {
      id: "information-collected",
      title: "Information We Collect",
      icon: <Eye className="w-5 h-5" />,
      content: (
        <>
          <h3 className="text-lg font-serif text-white mb-3">Contact Form Data</h3>
          <p className="mb-4">
            When you submit an inquiry through our contact form, we collect the following personal information:
          </p>
          <ul className="list-disc list-inside mb-4 text-neutral-400 space-y-1 ml-4">
            <li><strong className="text-white">Name:</strong> Your full name for personalizing our response</li>
            <li><strong className="text-white">Email Address:</strong> For correspondence regarding your inquiry</li>
            <li><strong className="text-white">Phone Number:</strong> Optional, for direct communication if preferred</li>
            <li><strong className="text-white">Company/Organization:</strong> To understand your business context</li>
            <li><strong className="text-white">Service Interest:</strong> The service category you select in our contact form</li>
            <li><strong className="text-white">Budget Range:</strong> Optional budget preference for project scoping</li>
            <li><strong className="text-white">Message Content:</strong> Details about your cybersecurity needs</li>
            <li><strong className="text-white">Security Verification Token:</strong> A Cloudflare Turnstile token used to prevent spam</li>
          </ul>

          <h3 className="text-lg font-serif text-white mb-3">Analytics Data</h3>
          <p className="mb-4">
            We use <strong>Google Analytics 4 (GA4)</strong> to understand how visitors interact with our website.
            This may include:
          </p>
          <ul className="list-disc list-inside mb-4 text-neutral-400 space-y-1 ml-4">
            <li>Pages visited and time spent on each page</li>
            <li>Referral sources (how you found our website)</li>
            <li>Device type and browser information (anonymized)</li>
            <li>Geographic location (country/city level only)</li>
            <li>Interaction events such as page views and scroll depth</li>
          </ul>
          <p className="mb-4 text-neutral-400">
            GA4 is disabled by default and only activated after you grant analytics consent via our cookie banner.
            If you select &quot;Essential Only,&quot; analytics tracking remains disabled.
          </p>

          <h3 className="text-lg font-serif text-white mb-3">Technical Data</h3>
          <p className="text-neutral-400">
            Our servers automatically collect certain technical information when you visit our website, 
            including your IP address, browser type, operating system, and the date/time of your visit. 
            This data is used for security monitoring and to optimize website performance.
          </p>
        </>
      ),
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            We use the information we collect for the following specific purposes:
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-medium mb-1">Responding to Inquiries</h4>
              <p className="text-neutral-400">
                To respond to your questions, provide information about our cybersecurity services, 
                and communicate regarding potential business engagements.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Service Delivery</h4>
              <p className="text-neutral-400">
                To provide cybersecurity consulting services, security assessments, penetration testing, 
                and zero-trust architecture implementation for your organization.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Website Improvements</h4>
              <p className="text-neutral-400">
                To analyze website usage patterns and improve user experience based on aggregated, 
                anonymized analytics data.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Legal Compliance</h4>
              <p className="text-neutral-400">
                To comply with legal obligations under Sri Lankan law, including tax and accounting 
                requirements, and to protect our legal rights.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "data-storage",
      title: "Data Storage & Security",
      icon: <Server className="w-5 h-5" />,
      content: (
        <>
          <h3 className="text-lg font-serif text-white mb-3">Form Submission Processing</h3>
          <p className="mb-4 text-neutral-400">
            Contact form submissions are processed through our secure API endpoint at{" "}
            <strong className="text-white">/api/contact</strong>. Submission details are then sent to{" "}
            <strong className="text-white">Brevo</strong> to deliver notification emails to our team.
            We also use <strong className="text-white">Cloudflare Turnstile</strong> for spam prevention
            before a submission is accepted.
          </p>

          <h3 className="text-lg font-serif text-white mb-3">Security Measures</h3>
          <p className="mb-4">
            As a cybersecurity consultancy, we implement industry-leading security measures:
          </p>
          <ul className="space-y-2 text-neutral-400 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-terminal-green">•</span>
              <span>All data in transit is encrypted using TLS 1.3</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-green">•</span>
              <span>Access to personal data is restricted to authorized personnel only</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-green">•</span>
              <span>Multi-factor authentication (MFA) protects all systems containing personal data</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-green">•</span>
              <span>Regular security assessments and penetration testing of our infrastructure</span>
            </li>
          </ul>

          <h3 className="text-lg font-serif text-white mb-3">Data Retention</h3>
          <p className="text-neutral-400">
            We retain contact form submissions for <strong className="text-white">2 years</strong> from
            the date of submission in our operational communication systems. Where submissions lead to an
            active client relationship, related records may be retained for up to 7 years to satisfy legal,
            tax, and accounting obligations. Analytics data is retained for up to 26 months, after which it
            is deleted or anonymized according to provider settings.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      title: "Cookies & Tracking Technologies",
      icon: <Clock className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            Our website uses the following technologies that may store data on your device:
          </p>

          <h3 className="text-lg font-serif text-white mb-3">Lenis Smooth Scroll</h3>
          <p className="mb-4 text-neutral-400">
            We use the Lenis library for smooth scrolling animations. This library stores minimal 
            session data in your browser&apos;s memory to provide a seamless scrolling experience. 
            No personal data is collected or transmitted to external servers.
          </p>

          <h3 className="text-lg font-serif text-white mb-3">Framer Motion</h3>
          <p className="mb-4 text-neutral-400">
            We utilize Framer Motion for UI animations and transitions. This library operates 
            entirely client-side and does not transmit any data to external servers or store 
            persistent data on your device.
          </p>

          <h3 className="text-lg font-serif text-white mb-3">Google Analytics 4</h3>
          <p className="text-neutral-400">
            We use Google Analytics 4 (GA4) to understand how visitors interact with our website. 
            GA4 uses cookies and similar technologies to collect information about your device, 
            browser, and website usage patterns. This data helps us improve our website and services.
            We have configured GA4 to disable ad personalization signals by default.
            <br /><br />
            <strong className="text-white">Your Choice:</strong> You can control Google Analytics 
            tracking through our cookie consent banner. If you select &quot;Essential Only&quot;, 
            Google Analytics will be disabled. You can also opt-out of Google Analytics tracking 
            by visiting the{" "}
            <a 
              href="https://tools.google.com/dlpage/gaoptout" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-terminal-green hover:underline"
            >
              Google Analytics Opt-out Page
            </a>.
            <br /><br />
            For more information on how Google uses data, please refer to{" "}
            <a 
              href="https://policies.google.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-terminal-green hover:underline"
            >
              Google&apos;s Privacy Policy
            </a>.
          </p>
        </>
      ),
    },
    {
      id: "your-rights",
      title: "Your Rights (GDPR / CCPA / Sri Lanka PDPA)",
      icon: <Users className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            Depending on your location, you may have the following rights regarding your personal data:
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <h4 className="text-terminal-green font-mono text-xs uppercase tracking-wider mb-1">Right to Access</h4>
              <p className="text-neutral-500 text-xs">Request copies of your personal data we hold</p>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <h4 className="text-terminal-green font-mono text-xs uppercase tracking-wider mb-1">Right to Rectification</h4>
              <p className="text-neutral-500 text-xs">Request correction of inaccurate or incomplete data</p>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <h4 className="text-terminal-green font-mono text-xs uppercase tracking-wider mb-1">Right to Erasure</h4>
              <p className="text-neutral-500 text-xs">Request deletion of your personal data (&quot;Right to be Forgotten&quot;)</p>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <h4 className="text-terminal-green font-mono text-xs uppercase tracking-wider mb-1">Right to Restrict Processing</h4>
              <p className="text-neutral-500 text-xs">Request limitation on how we use your data</p>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <h4 className="text-terminal-green font-mono text-xs uppercase tracking-wider mb-1">Right to Data Portability</h4>
              <p className="text-neutral-500 text-xs">Receive your data in a structured, machine-readable format</p>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <h4 className="text-terminal-green font-mono text-xs uppercase tracking-wider mb-1">Right to Object</h4>
              <p className="text-neutral-500 text-xs">Object to processing based on legitimate interests</p>
            </div>
          </div>

          <h3 className="text-lg font-serif text-white mb-3">Sri Lanka PDPA Rights</h3>
          <p className="mb-4 text-neutral-400">
            Under Sri Lanka&apos;s Personal Data Protection Act No. 9 of 2022, data subjects have the 
            right to be informed about data collection, the right to access their personal data, 
            the right to correct inaccuracies, the right to object to processing for direct marketing, 
            and the right to lodge complaints with the Data Protection Authority of Sri Lanka.
          </p>

          <p className="text-neutral-400">
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:info@vat0.lk" className="text-terminal-green hover:underline">
              info@vat0.lk
            </a>. 
            We will respond to your request within 30 days as required by applicable law.
          </p>
        </>
      ),
    },
    {
      id: "third-parties",
      title: "Third-Party Services",
      icon: <Globe className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            We use the following third-party services that may process your data:
          </p>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-white font-medium mb-2">Brevo (formerly Sendinblue)</h4>
              <p className="text-neutral-400 text-sm">
                We use Brevo to send email notifications of contact form submissions. 
                When you submit our contact form, your information is transmitted via 
                Brevo&apos;s secure API to deliver the notification to our team. Brevo is 
                GDPR compliant and stores data in the EU.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-white font-medium mb-2">Vercel</h4>
              <p className="text-neutral-400 text-sm">
                Our website is hosted on Vercel&apos;s global edge network. Vercel may process 
                technical data (IP addresses, request logs) as part of their hosting service. 
                Vercel is SOC 2 Type 2 certified and GDPR compliant.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-white font-medium mb-2">Google Fonts & Analytics</h4>
              <p className="text-neutral-400 text-sm mb-3">
                We use Google Fonts for typography and Google Analytics 4 for website analytics. 
                Google Fonts API does not use cookies, but Google Analytics uses cookies to track 
                usage patterns. Google&apos;s services are governed by their{" "}
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-terminal-green hover:underline"
                >
                  Privacy Policy
                </a>. 
                You can opt-out of Google Analytics via our cookie banner.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-white font-medium mb-2">Cloudflare Turnstile</h4>
              <p className="text-neutral-400 text-sm">
                We use Cloudflare Turnstile to protect our contact forms from spam and abuse. 
                Turnstile analyzes browser behavior to distinguish humans from bots without 
                requiring traditional CAPTCHA challenges. Cloudflare may process technical data 
                including your IP address and browser information for security purposes. 
                See{" "}
                <a 
                  href="https://www.cloudflare.com/privacypolicy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-terminal-green hover:underline"
                >
                  Cloudflare&apos;s Privacy Policy
                </a>.
              </p>
            </div>
          </div>

          <p className="mt-4 text-neutral-400">
            We do not sell your personal data to any third parties. We only share data with 
            service providers necessary for operating our website and delivering our services.
          </p>
        </>
      ),
    },
    {
      id: "legal-basis",
      title: "Legal Basis for Processing",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            Under the GDPR and Sri Lankan PDPA, we process your personal data based on the 
            following legal grounds:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-terminal-green font-mono text-sm uppercase tracking-wider mb-2">Consent</h4>
              <p className="text-neutral-400 text-sm">
                When you voluntarily submit our contact form, you consent to us processing 
                your data to respond to your inquiry.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-terminal-green font-mono text-sm uppercase tracking-wider mb-2">Contract</h4>
              <p className="text-neutral-400 text-sm">
                Processing necessary to enter into or perform a contract for our services 
                with you or your organization.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-terminal-green font-mono text-sm uppercase tracking-wider mb-2">Legal Obligation</h4>
              <p className="text-neutral-400 text-sm">
                Processing necessary to comply with our legal obligations under Sri Lankan 
                tax, accounting, and company law.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-terminal-green font-mono text-sm uppercase tracking-wider mb-2">Legitimate Interests</h4>
              <p className="text-neutral-400 text-sm">
                Processing necessary for our legitimate business interests, such as website 
                analytics and security monitoring.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <>
          <p className="text-neutral-400">
            We may update this Privacy Policy from time to time to reflect changes in our practices, 
            legal requirements, or service offerings. When we make material changes, we will notify 
            you by:
          </p>
          <ul className="mt-4 space-y-2 text-neutral-400">
            <li className="flex items-start gap-2">
              <span className="text-terminal-green">•</span>
              <span>Posting the updated policy on our website with a revised &quot;Last Updated&quot; date</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-green">•</span>
              <span>Displaying a prominent notice on our website for significant changes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-green">•</span>
              <span>Sending an email notification to individuals with whom we have an ongoing business relationship</span>
            </li>
          </ul>
          <p className="mt-4 text-neutral-400">
            We encourage you to review this Privacy Policy periodically. Your continued use of our 
            services after any changes constitutes acceptance of the updated policy.
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <article className="w-full pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] flex items-center justify-center px-6 md:px-12 pt-16 pb-12">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-terminal-green/5 blur-[150px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Shield className="w-4 h-4 text-terminal-green" />
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                Data Protection
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight mb-6">
              Privacy Policy
            </h1>

            {/* Last Updated */}
            <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-8">
              Last Updated: {lastUpdated}
            </p>

            {/* Intro Paragraph */}
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              At VaultZero, we believe that privacy is a fundamental right and the foundation of 
              trust. This policy outlines how we collect, protect, and handle your personal information 
              with the same rigor we apply to enterprise security.
            </p>
          </div>
        </section>

        {/* Policy Content */}
        <section className="w-full px-6 md:px-12 pb-24">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <nav className="mb-16 p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
              <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">
                Contents
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {sections.map((section, idx) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors group"
                  >
                    <span className="text-terminal-green font-mono text-xs">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {section.title}
                    </span>
                  </a>
                ))}
              </div>
            </nav>

            {/* Policy Sections */}
            <div className="space-y-8">
              {sections.map((section, idx) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 p-6 md:p-8 lg:p-10 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-terminal-green/10 text-terminal-green">
                      {section.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest block mb-1">
                        Section {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-serif text-white">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  <div className="text-neutral-300 leading-relaxed">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Contact Section */}
            <section
              id="contact-privacy"
              className="mt-16 p-8 md:p-12 rounded-2xl bg-terminal-green/5 border border-terminal-green/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-terminal-green/10 text-terminal-green">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-white">
                  Contact for Privacy Questions
                </h2>
              </div>
              
              <p className="text-neutral-400 mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy 
                or our data practices, please contact our Data Protection Officer:
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-terminal-green mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <a
                        href="mailto:info@vat0.lk"
                        className="text-neutral-400 hover:text-terminal-green transition-colors"
                      >
                        info@vat0.lk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-terminal-green mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Company</h4>
                      <address className="text-neutral-400 not-italic">
                        VaultZero Security<br />
                        A division of Codezela Technologies (Pvt) Ltd<br />
                        345/35, RIT Alles Mw<br />
                        Colombo 08, 00800<br />
                        Sri Lanka
                      </address>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                  <p className="text-sm text-neutral-500 mb-2">Response Time</p>
                  <p className="text-white">
                    We aim to respond to all privacy-related inquiries within 
                    <span className="text-terminal-green"> 48 hours</span>.
                  </p>
                </div>
              </div>
            </section>

            {/* Back to Home */}
            <div className="mt-16 text-center">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="font-mono uppercase tracking-widest">Back to Home</span>
              </a>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
