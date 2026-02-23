import { NextRequest, NextResponse } from "next/server";

// Contact form API endpoint with Brevo (Sendinblue) email integration
// and Cloudflare Turnstile verification

interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone?: string;
  serviceInterest: string;
  budgetRange?: string;
  message: string;
  turnstileToken: string;
}

// Cloudflare Turnstile verification
async function verifyTurnstile(token: string): Promise<boolean> {
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

// Brevo (Sendinblue) email sender
async function sendEmailViaBrevo(data: ContactFormData & { submittedAt: string }): Promise<void> {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const TO_EMAIL = process.env.CONTACT_EMAIL || "info@vat0.lk";
  const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@vat0.lk";

  if (!BREVO_API_KEY) {
    throw new Error("BREVO_API_KEY not configured");
  }

  const serviceLabels: Record<string, string> = {
    "cybersecurity-zero-trust": "Cybersecurity & Zero Trust",
    "devsecops-cloud": "DevSecOps & Cloud Engineering",
    "quality-engineering": "Quality Engineering (QA)",
    "multiple-services": "Multiple Services",
    "general-inquiry": "General Inquiry",
  };

  const budgetLabels: Record<string, string> = {
    "under-10k": "Under $10,000",
    "10k-25k": "$10,000 - $25,000",
    "25k-50k": "$25,000 - $50,000",
    "50k-100k": "$50,000 - $100,000",
    "100k-plus": "$100,000+",
    "discuss": "Prefer to discuss",
  };

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Form Submission - VAT0</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #000; color: #fff; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 20px; }
    .field-label { font-weight: 600; color: #000; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
    .field-value { color: #333; font-size: 16px; }
    .message-box { background: #fff; padding: 15px; border-radius: 6px; border-left: 4px solid #00ff41; margin-top: 10px; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
    .badge { display: inline-block; background: #00ff41; color: #000; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🛡️ VAT0 Security</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.8;">New Contact Form Submission</p>
  </div>
  <div class="content">
    <div style="text-align: center; margin-bottom: 25px;">
      <span class="badge">${serviceLabels[data.serviceInterest] || data.serviceInterest}</span>
    </div>
    
    <div class="field">
      <div class="field-label">Full Name</div>
      <div class="field-value">${data.fullName}</div>
    </div>
    
    <div class="field">
      <div class="field-label">Company</div>
      <div class="field-value">${data.company}</div>
    </div>
    
    <div class="field">
      <div class="field-label">Email</div>
      <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
    </div>
    
    <div class="field">
      <div class="field-label">Phone</div>
      <div class="field-value">${data.phone || "Not provided"}</div>
    </div>
    
    <div class="field">
      <div class="field-label">Budget Range</div>
      <div class="field-value">${data.budgetRange ? budgetLabels[data.budgetRange] || data.budgetRange : "Not specified"}</div>
    </div>
    
    <div class="field">
      <div class="field-label">Message</div>
      <div class="message-box">${data.message.replace(/\n/g, "<br>")}</div>
    </div>
    
    <div class="footer">
      <p><strong>Submitted:</strong> ${new Date(data.submittedAt).toLocaleString("en-US", { timeZone: "Asia/Colombo" })} (Sri Lanka Time)</p>
      <p style="margin-top: 10px;">This email was sent from the VAT0 website contact form.</p>
    </div>
  </div>
</body>
</html>
  `;

  const textContent = `
NEW CONTACT FORM SUBMISSION - VAT0 SECURITY

Service: ${serviceLabels[data.serviceInterest] || data.serviceInterest}

Name: ${data.fullName}
Company: ${data.company}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Budget: ${data.budgetRange ? budgetLabels[data.budgetRange] || data.budgetRange : "Not specified"}

Message:
${data.message}

---
Submitted: ${new Date(data.submittedAt).toLocaleString()}
  `.trim();

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: {
        email: FROM_EMAIL,
        name: "VAT0 Website",
      },
      to: [
        {
          email: TO_EMAIL,
          name: "VAT0 Team",
        },
      ],
      replyTo: {
        email: data.email,
        name: data.fullName,
      },
      subject: `New Inquiry: ${data.fullName} from ${data.company}`,
      htmlContent,
      textContent,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Brevo API error:", errorData);
    throw new Error(`Brevo API error: ${response.status}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const requiredFields: (keyof ContactFormData)[] = [
      "fullName",
      "company",
      "email",
      "serviceInterest",
      "message",
      "turnstileToken",
    ];

    for (const field of requiredFields) {
      if (!body[field] || (typeof body[field] === "string" && !body[field].trim())) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Verify Cloudflare Turnstile
    const isHuman = await verifyTurnstile(body.turnstileToken);
    if (!isHuman) {
      return NextResponse.json(
        { error: "Security verification failed. Please try again." },
        { status: 403 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    // Prepare submission data
    const submissionData = {
      ...body,
      phone: body.phone || "Not provided",
      budgetRange: body.budgetRange || "Not specified",
      submittedAt: new Date().toISOString(),
    };

    // Log submission (for debugging)
    console.log("Contact Form Submission:", {
      name: submissionData.fullName,
      company: submissionData.company,
      email: submissionData.email,
      service: submissionData.serviceInterest,
      timestamp: submissionData.submittedAt,
    });

    // Send email via Brevo
    try {
      await sendEmailViaBrevo(submissionData);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      
      // If Brevo is not configured, still accept the form but log it
      if (!process.env.BREVO_API_KEY) {
        console.log("BREVO_API_KEY not set - form submitted but no email sent");
        return NextResponse.json(
          { 
            success: true, 
            warning: "Form received but email not sent (Brevo not configured)",
            data: { submittedAt: submissionData.submittedAt }
          },
          { status: 200 }
        );
      }
      
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Form submitted successfully",
        data: { submittedAt: submissionData.submittedAt }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
