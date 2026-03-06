import type { Metadata } from "next";
import Link from "next/link";
import { 
  FileText, 
  CheckCircle, 
  Briefcase, 
  Users, 
  Lightbulb, 
  Lock, 
  Scale, 
  CreditCard, 
  XCircle, 
  Globe, 
  RefreshCw, 
  Mail,
  ArrowLeft,
  Shield
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | VaultZero (VAT0)",
  description: "Terms of Service for VaultZero (VAT0) - A cybersecurity consultancy by Codezela Technologies. Legal terms governing our consulting services and client relationships.",
  keywords: ["terms of service", "terms and conditions", "VAT0", "VaultZero", "cybersecurity consulting", "legal", "Sri Lanka"],
  openGraph: {
    title: "Terms of Service | VaultZero (VAT0)",
    description: "Terms of Service for VaultZero (VAT0) - Legal terms governing our consulting services.",
    type: "article",
  },
};

const lastUpdated = "February 23, 2026";
const effectiveDate = "February 23, 2026";

interface TermsSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export default function TermsOfService() {
  const sections: TermsSection[] = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <CheckCircle className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            By accessing our website, engaging our services, or entering into a consulting agreement 
            with <strong>VaultZero Security</strong> (&quot;VAT0&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), 
            a division of <strong>Codezela Technologies (Pvt) Ltd</strong>, you (&quot;Client&quot;, &quot;you&quot;, or &quot;your&quot;) 
            acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
          <p className="mb-4">
            These Terms constitute a legally binding agreement between you and Codezela Technologies (Pvt) Ltd, 
            a company registered in Sri Lanka. If you are entering into this agreement on behalf of a company, 
            organization, or other legal entity, you represent that you have the authority to bind such entity 
            to these Terms.
          </p>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately 
            upon posting to our website. Your continued use of our services following any changes indicates 
            your acceptance of the revised Terms.
          </p>
        </>
      ),
    },
    {
      id: "services",
      title: "Services Description",
      icon: <Briefcase className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            VaultZero provides professional cybersecurity consulting and related technology services, including 
            but not limited to:
          </p>
          
          <div className="space-y-4 mb-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-terminal-green font-mono text-sm uppercase tracking-wider mb-2">Cybersecurity Consulting</h4>
              <p className="text-neutral-400 text-sm">
                Security assessments, penetration testing, vulnerability analysis, threat modeling, security 
                architecture review, and strategic security advisory services for enterprise organizations.
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-terminal-green font-mono text-sm uppercase tracking-wider mb-2">DevSecOps Implementation</h4>
              <p className="text-neutral-400 text-sm">
                Integration of security practices into CI/CD pipelines, automated security testing, infrastructure 
                as code security, container security, and secure software development lifecycle (SSDLC) consulting.
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-terminal-green font-mono text-sm uppercase tracking-wider mb-2">Quality Engineering</h4>
              <p className="text-neutral-400 text-sm">
                Test automation strategy, performance testing, security testing integration, QA process 
                optimization, and quality assurance framework development.
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-terminal-green font-mono text-sm uppercase tracking-wider mb-2">Zero Trust Architecture</h4>
              <p className="text-neutral-400 text-sm">
                Design and implementation of zero trust security models, identity-centric security architectures, 
                micro-segmentation strategies, and continuous verification systems.
              </p>
            </div>
          </div>
          
          <p className="text-neutral-400">
                The specific scope, deliverables, timelines, and fees for services will be defined in a separate 
                Statement of Work (SOW) or Service Agreement executed between the parties. In the event of any 
                conflict between these Terms and a signed SOW, the SOW shall prevail.
          </p>
        </>
      ),
    },
    {
      id: "responsibilities",
      title: "Client Responsibilities",
      icon: <Users className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            To ensure the successful delivery of our services, you agree to:
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-terminal-green mt-2 shrink-0" />
              <div>
                <strong className="text-white">Accurate Information:</strong>
                <p className="text-neutral-400 text-sm mt-1">
                  Provide accurate, complete, and timely information about your systems, infrastructure, 
                  security posture, and business requirements. You are responsible for the accuracy of all 
                  information provided to us.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-terminal-green mt-2 shrink-0" />
              <div>
                <strong className="text-white">System Access:</strong>
                <p className="text-neutral-400 text-sm mt-1">
                  Provide necessary access credentials, VPN access, documentation, and system privileges 
                  required to perform the agreed-upon services. All access must be granted in accordance 
                  with your security policies and applicable laws.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-terminal-green mt-2 shrink-0" />
              <div>
                <strong className="text-white">Cooperation:</strong>
                <p className="text-neutral-400 text-sm mt-1">
                  Designate a primary point of contact, provide timely responses to our inquiries, 
                  make key personnel available for meetings and workshops, and facilitate access to 
                  relevant stakeholders within your organization.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-terminal-green mt-2 shrink-0" />
              <div>
                <strong className="text-white">Legal Compliance:</strong>
                <p className="text-neutral-400 text-sm mt-1">
                  Ensure that you have all necessary rights, permissions, and authorizations for us to 
                  access and assess your systems. You warrant that engaging our services does not violate 
                  any applicable laws, regulations, or third-party agreements.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-terminal-green mt-2 shrink-0" />
              <div>
                <strong className="text-white">Backup and Recovery:</strong>
                <p className="text-neutral-400 text-sm mt-1">
                  Maintain current backups of all critical systems and data before any security testing 
                  or changes are made. We are not responsible for data loss or system disruptions arising 
                  from services performed.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: <Lightbulb className="w-5 h-5" />,
      content: (
        <>
          <h3 className="text-lg font-serif text-white mb-3">Ownership of Deliverables</h3>
          <p className="mb-4 text-neutral-400">
            Upon full payment of all fees, you will own all rights, title, and interest in the specific 
            deliverables created exclusively for you under a signed Statement of Work, including reports, 
            documentation, and custom configurations. This does not include:
          </p>
          <ul className="list-disc list-inside mb-4 text-neutral-400 space-y-1 ml-4">
            <li>Our pre-existing intellectual property, methodologies, or proprietary tools</li>
            <li>General knowledge, skills, or experience gained during the engagement</li>
            <li>Any improvements or modifications to our existing intellectual property</li>
          </ul>
          
          <h3 className="text-lg font-serif text-white mb-3">Client Data Ownership</h3>
          <p className="mb-4 text-neutral-400">
            You retain all ownership rights to your data, systems, and confidential information. We claim 
            no ownership over your proprietary information accessed during the course of our services. 
            All client data will be handled in accordance with our <Link href="/privacy" className="text-terminal-green hover:underline">Privacy Policy</Link> and any 
            applicable Non-Disclosure Agreement.
          </p>
          
          <h3 className="text-lg font-serif text-white mb-3">Third-Party Tools and Software</h3>
          <p className="text-neutral-400">
            Our services may involve the use of third-party tools, open-source software, or commercial 
            security products. Such third-party components remain subject to their respective license terms. 
            We will inform you of any significant third-party dependencies and associated licensing requirements.
          </p>
        </>
      ),
    },
    {
      id: "confidentiality",
      title: "Confidentiality & NDAs",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            We understand that our work involves access to your most sensitive information. Both parties 
            agree to maintain the confidentiality of all proprietary and confidential information disclosed 
            during the engagement.
          </p>
          
          <h3 className="text-lg font-serif text-white mb-3">Non-Disclosure Obligations</h3>
          <p className="mb-4 text-neutral-400">
            Unless otherwise agreed in writing, we will:
          </p>
          <ul className="list-disc list-inside mb-4 text-neutral-400 space-y-1 ml-4">
            <li>Protect your confidential information with the same degree of care we use for our own 
                confidential information, but in no event less than reasonable care</li>
            <li>Not disclose your confidential information to any third parties without your prior written consent</li>
            <li>Use your confidential information solely for the purpose of providing the agreed services</li>
            <li>Limit access to confidential information to personnel who have a legitimate need to know</li>
            <li>Return or destroy all confidential information upon request or upon termination of services</li>
          </ul>
          
          <h3 className="text-lg font-serif text-white mb-3">Exceptions</h3>
          <p className="text-neutral-400">
            Confidentiality obligations do not apply to information that: (a) is or becomes publicly available 
            through no breach of these Terms; (b) was rightfully in our possession prior to disclosure; 
            (c) is rightfully obtained from a third party without breach of any confidentiality obligation; 
            or (d) is required to be disclosed by law, regulation, or court order, provided we give prompt 
            notice to allow you to seek protective remedies.
          </p>
        </>
      ),
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <>
          <h3 className="text-lg font-serif text-white mb-3">No Guarantees of Absolute Security</h3>
          <p className="mb-4 text-neutral-400">
            While we strive to provide the highest quality cybersecurity services, you acknowledge that:
          </p>
          <ul className="list-disc list-inside mb-4 text-neutral-400 space-y-1 ml-4">
            <li>No security system is impenetrable or can guarantee absolute protection against all threats</li>
            <li>Cybersecurity is an ongoing process, not a one-time deliverable</li>
            <li>New vulnerabilities and attack vectors emerge continuously</li>
            <li>Security effectiveness depends on proper implementation, maintenance, and user compliance</li>
            <li>We cannot control or be responsible for security measures outside the defined scope of work</li>
          </ul>
          
          <h3 className="text-lg font-serif text-white mb-3">Industry-Standard Practices</h3>
          <p className="mb-4 text-neutral-400">
            Our services are performed in accordance with generally accepted industry standards and best 
            practices for cybersecurity consulting. We exercise reasonable skill, care, and diligence in 
            the performance of our services. However, we do not warrant that our services will detect all 
            vulnerabilities or prevent all security incidents.
          </p>
          
          <h3 className="text-lg font-serif text-white mb-3">Limitation of Damages</h3>
          <p className="mb-4 text-neutral-400">
            To the maximum extent permitted by applicable law:
          </p>
          <div className="space-y-3 text-neutral-400">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-terminal-green mt-2 shrink-0" />
              <p>
                Our total liability arising out of or relating to these Terms or our services, whether 
                in contract, tort (including negligence), or otherwise, shall not exceed the total amount 
                paid by you to us for the specific services giving rise to the liability in the twelve (12) 
                months preceding the claim.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-terminal-green mt-2 shrink-0" />
              <p>
                In no event shall we be liable for any indirect, incidental, special, consequential, or 
                punitive damages, including but not limited to loss of profits, revenue, data, or business 
                opportunities, even if advised of the possibility of such damages.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "payment",
      title: "Payment Terms",
      icon: <CreditCard className="w-5 h-5" />,
      content: (
        <>
          <h3 className="text-lg font-serif text-white mb-3">Fees and Invoicing</h3>
          <p className="mb-4 text-neutral-400">
            Fees for our consulting services will be specified in the applicable Statement of Work or 
            Service Agreement. Unless otherwise stated:
          </p>
          <ul className="list-disc list-inside mb-4 text-neutral-400 space-y-1 ml-4">
            <li>All fees are quoted and payable in United States Dollars (USD) or Sri Lankan Rupees (LKR) 
                as specified in the agreement</li>
            <li>Invoices will be issued according to the payment schedule outlined in the SOW</li>
            <li>Payment is due within thirty (30) days of the invoice date unless otherwise specified</li>
            <li>Late payments may incur interest at the rate of 1.5% per month or the maximum rate 
                permitted by law, whichever is lower</li>
          </ul>
          
          <h3 className="text-lg font-serif text-white mb-3">Expenses</h3>
          <p className="mb-4 text-neutral-400">
            You agree to reimburse us for reasonable out-of-pocket expenses incurred in connection with 
            the services, including travel, accommodation, and materials, provided such expenses are 
            pre-approved in writing and documented with appropriate receipts.
          </p>
          
          <h3 className="text-lg font-serif text-white mb-3">Taxes</h3>
          <p className="text-neutral-400">
            All fees are exclusive of applicable taxes, levies, or duties. You are responsible for all 
            applicable taxes, including but not limited to VAT, GST, withholding taxes, or sales taxes, 
            except for taxes based solely on our net income. We will itemize any taxes on invoices as 
            required by law.
          </p>
        </>
      ),
    },
    {
      id: "termination",
      title: "Termination",
      icon: <XCircle className="w-5 h-5" />,
      content: (
        <>
          <h3 className="text-lg font-serif text-white mb-3">Termination for Convenience</h3>
          <p className="mb-4 text-neutral-400">
            Either party may terminate the services with thirty (30) days&apos; written notice. Upon 
            termination, you will pay for all services performed and expenses incurred up to the 
            effective date of termination.
          </p>
          
          <h3 className="text-lg font-serif text-white mb-3">Termination for Cause</h3>
          <p className="mb-4 text-neutral-400">
            Either party may terminate immediately upon written notice if the other party:
          </p>
          <ul className="list-disc list-inside mb-4 text-neutral-400 space-y-1 ml-4">
            <li>Materially breaches these Terms and fails to cure such breach within fifteen (15) days 
                of receiving written notice</li>
            <li>Becomes insolvent, files for bankruptcy, or ceases business operations</li>
            <li>Violates confidentiality obligations or applicable laws</li>
          </ul>
          
          <h3 className="text-lg font-serif text-white mb-3">Effect of Termination</h3>
          <p className="text-neutral-400">
            Upon termination, all licenses and access rights granted by either party will immediately 
            terminate. We will deliver any completed work products and return or destroy your confidential 
            information as requested. Provisions related to confidentiality, intellectual property, 
            limitation of liability, and governing law shall survive termination.
          </p>
        </>
      ),
    },
    {
      id: "governing-law",
      title: "Governing Law & Dispute Resolution",
      icon: <Globe className="w-5 h-5" />,
      content: (
        <>
          <h3 className="text-lg font-serif text-white mb-3">Governing Law</h3>
          <p className="mb-4 text-neutral-400">
            These Terms and any dispute arising out of or in connection with them shall be governed by 
            and construed in accordance with the laws of the <strong className="text-white">Democratic 
            Socialist Republic of Sri Lanka</strong>, without regard to its conflict of law provisions.
          </p>
          
          <h3 className="text-lg font-serif text-white mb-3">Dispute Resolution</h3>
          <p className="mb-4 text-neutral-400">
            Any dispute, controversy, or claim arising out of or relating to these Terms or our services 
            shall be resolved through the following process:
          </p>
          <ol className="list-decimal list-inside mb-4 text-neutral-400 space-y-2 ml-4">
            <li>
              <strong className="text-white">Negotiation:</strong> The parties will first attempt to 
              resolve the dispute through good faith negotiation between senior representatives of each party.
            </li>
            <li>
              <strong className="text-white">Mediation:</strong> If negotiation fails, the parties will 
              attempt to resolve the dispute through non-binding mediation administered by a mutually 
              agreed mediator in Colombo, Sri Lanka.
            </li>
            <li>
              <strong className="text-white">Arbitration:</strong> If mediation fails, the dispute shall 
              be finally resolved by arbitration in Colombo, Sri Lanka, in accordance with the Arbitration 
              Act No. 11 of 1995 of Sri Lanka, by a sole arbitrator appointed in accordance with the said Act.
            </li>
          </ol>
          
          <h3 className="text-lg font-serif text-white mb-3">Jurisdiction</h3>
          <p className="text-neutral-400">
            The courts of Sri Lanka shall have exclusive jurisdiction over any legal proceedings arising 
            out of or in connection with these Terms, subject to the arbitration clause above. The parties 
            irrevocably submit to the jurisdiction of such courts and waive any objection to venue in 
            Colombo, Sri Lanka.
          </p>
        </>
      ),
    },
    {
      id: "changes",
      title: "Changes to Terms",
      icon: <RefreshCw className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4 text-neutral-400">
            We reserve the right to modify or replace these Terms at any time at our sole discretion. 
            When we make material changes, we will:
          </p>
          <ul className="list-disc list-inside mb-4 text-neutral-400 space-y-1 ml-4">
            <li>Post the updated Terms on our website with a revised &quot;Last Updated&quot; date</li>
            <li>Send email notification to active clients for significant changes</li>
            <li>Display a prominent notice on our website for a reasonable period</li>
          </ul>
          <p className="text-neutral-400">
            Your continued use of our services after any changes constitutes your acceptance of the 
            modified Terms. If you do not agree to the changes, you must stop using our services and 
            terminate any ongoing engagements in accordance with the Termination section.
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Back to Home Link - Fixed */}
      <div className="fixed top-24 md:top-28 left-6 md:left-12 z-40">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono uppercase tracking-widest hidden sm:inline">Back to Home</span>
        </Link>
      </div>

      <article className="w-full pt-32">
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] flex items-center justify-center px-6 md:px-12 pb-16">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-terminal-green/5 blur-[150px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <FileText className="w-4 h-4 text-terminal-green" />
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                Legal
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight mb-6">
              Terms of Service
            </h1>

            {/* Effective Date */}
            <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-4">
              Effective Date: {effectiveDate}
            </p>
            <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-8">
              Last Updated: {lastUpdated}
            </p>

            {/* Intro Paragraph */}
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              These Terms of Service govern your use of VaultZero&apos;s consulting services and 
              establish the legal framework for our professional relationship. Please read them carefully.
            </p>
          </div>
        </section>

        {/* Terms Content */}
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

            {/* Terms Sections */}
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
              id="contact"
              className="mt-16 p-8 md:p-12 rounded-2xl bg-terminal-green/5 border border-terminal-green/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-terminal-green/10 text-terminal-green">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-white">
                  Contact Information
                </h2>
              </div>
              
              <p className="text-neutral-400 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-terminal-green mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Company</h4>
                      <p className="text-neutral-400">
                        VaultZero Security<br />
                        A division of Codezela Technologies (Pvt) Ltd
                      </p>
                    </div>
                  </div>
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
                </div>
                <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                  <p className="text-sm text-neutral-500 mb-2">Registered Address</p>
                  <address className="text-white not-italic">
                    Codezela Technologies (Pvt) Ltd<br />
                    345/35, RIT Alles Mw<br />
                    Colombo 08, 00800<br />
                    Sri Lanka
                  </address>
                  <p className="text-sm text-neutral-500 mt-4 mb-2">Business Registration</p>
                  <p className="text-white">Registered in Sri Lanka</p>
                </div>
              </div>
            </section>

            {/* Agreement Notice */}
            <div className="mt-12 p-6 rounded-xl bg-white/[0.02] border border-white/10 text-center">
              <p className="text-sm text-neutral-500">
                By using our services, you acknowledge that you have read, understood, and agree to be 
                bound by these Terms of Service and our{" "}
                <Link href="/privacy" className="text-terminal-green hover:underline">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* Footer */}
      <Footer />
    </main>
  );
}
