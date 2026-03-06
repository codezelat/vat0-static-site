"use client";

import Script from "next/script";

// LocalBusiness Schema for VAT0 / VAulTzer0
// This helps Google understand the business for local SEO

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://vat0.lk/#organization",
    "name": "VaultZero (VAT0)",
    "alternateName": "VAT0 Security",
    "description": "Sri Lanka's premier enterprise cybersecurity consultancy specializing in zero trust architecture, DevSecOps, cloud security, penetration testing, and vulnerability management.",
    "url": "https://vat0.lk",
    "logo": "https://vat0.lk/og-image.jpg",
    "image": "https://vat0.lk/og-image.jpg",
    "telephone": "+94 114858899",
    "email": "info@vat0.lk",
    "foundingDate": "2020", 
    "founders": [
      {
        "@type": "Person",
        "name": "Codezela Technologies"
      }
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Codezela Technologies (Pvt) Ltd",
      "url": "https://codezela.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "345/35, RIT Alles Mw",
      "addressLocality": "Colombo",
      "addressRegion": "Western Province",
      "postalCode": "00800",
      "addressCountry": "LK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.9271", 
      "longitude": "79.8612"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Colombo",
        "containedInPlace": {
          "@type": "Country",
          "name": "Sri Lanka"
        }
      },
      {
        "@type": "Country",
        "name": "Sri Lanka"
      }
    ],
    "serviceType": [
      "Cybersecurity Consulting",
      "Zero Trust Architecture",
      "DevSecOps Services",
      "Cloud Security",
      "Penetration Testing",
      "Vulnerability Management",
      "Quality Engineering",
      "Security Assessment"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cybersecurity Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity & Zero Trust",
            "description": "Enterprise security architecture that prevents threats before they breach. Zero Trust Architecture, Penetration Testing, Vulnerability Management, Identity & Access Control."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DevSecOps & Cloud Engineering",
            "description": "Secure, scalable, and resilient deployment pipelines. CI/CD Pipeline Design, Infrastructure as Code, Container Security, Continuous Deployment."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quality Engineering (QA)",
            "description": "Rigorous testing frameworks ensuring software is performant, reliable, and verified at every release gate. Automated Testing, Performance & Load Testing, Security Code Review, Release Validation."
          }
        }
      ]
    },
    "sameAs": [
      
      "https://www.linkedin.com/company/vat0",
      "https://www.facebook.com/vat0.lk",
      "https://www.instagram.com/vat0.lk",
      "https://www.x.com/vat0lk"
    ],
    "priceRange": "$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "LKR, USD"
  };

  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://vat0.lk/#website",
    "url": "https://vat0.lk",
    "name": "VAulTzer0 | Enterprise Zero Trust Security Solutions Sri Lanka",
    "description": "Sri Lanka's premier enterprise cybersecurity consultancy specializing in zero trust architecture, DevSecOps, cloud security, and penetration testing.",
    "publisher": {
      "@id": "https://vat0.lk/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://vat0.lk/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // WebPage schema for the homepage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://vat0.lk/#webpage",
    "url": "https://vat0.lk",
    "name": "VAulTzer0 | Enterprise Zero Trust Security Solutions Sri Lanka",
    "isPartOf": {
      "@id": "https://vat0.lk/#website"
    },
    "about": {
      "@id": "https://vat0.lk/#organization"
    },
    "description": "Sri Lanka's premier enterprise cybersecurity consultancy specializing in zero trust architecture, DevSecOps, cloud security, penetration testing, and vulnerability management.",
    "breadcrumb": {
      "@id": "https://vat0.lk/#breadcrumb"
    }
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://vat0.lk/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vat0.lk"
      }
    ]
  };

  return (
    <>
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="structured-data-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <Script
        id="structured-data-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}

// Helper component for generating breadcrumb schema on other pages
export function BreadcrumbSchema({ 
  items 
}: { 
  items: { name: string; item: string }[] 
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item,
    })),
  };

  return (
    <Script
      id="structured-data-breadcrumb"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
  );
}
