import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;', '<': '&lt;', '>': '&gt;',
    '"': '&quot;', "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

function validateInput(data: any): { valid: boolean; error?: string } {
  if (!data || typeof data !== 'object') return { valid: false, error: 'Invalid request body' };
  if (!data.name || typeof data.name !== 'string' || data.name.length > 100) return { valid: false, error: 'Name is required and must be under 100 characters' };
  if (!data.email || typeof data.email !== 'string' || data.email.length > 254 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) return { valid: false, error: 'A valid email is required' };
  if (data.description && (typeof data.description !== 'string' || data.description.length > 2000)) return { valid: false, error: 'Description must be under 2000 characters' };
  if (data.company && (typeof data.company !== 'string' || data.company.length > 200)) return { valid: false, error: 'Company must be under 200 characters' };
  if (data.phone && (typeof data.phone !== 'string' || data.phone.length > 30)) return { valid: false, error: 'Phone must be under 30 characters' };
  if (data.projectType && (typeof data.projectType !== 'string' || data.projectType.length > 100)) return { valid: false, error: 'Project type must be under 100 characters' };
  if (data.budget && (typeof data.budget !== 'string' || data.budget.length > 100)) return { valid: false, error: 'Budget must be under 100 characters' };
  if (data.timeline && (typeof data.timeline !== 'string' || data.timeline.length > 100)) return { valid: false, error: 'Timeline must be under 100 characters' };
  // Honeypot check
  if (data.website && data.website.length > 0) return { valid: false, error: 'Invalid submission' };
  return { valid: true };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for") ?? req.headers.get("cf-connecting-ip") ?? "unknown";
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ success: false, error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const formData = await req.json();

    // Validate inputs
    const validation = validateInput(formData);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ success: false, error: validation.error }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const servicesText = Array.isArray(formData.services) && formData.services.length > 0
      ? formData.services.map((s: unknown) => escapeHtml(String(s))).join(", ")
      : "None specified";

    const emailResponse = await resend.emails.send({
      from: "Morales Assist <onboarding@resend.dev>",
      to: ["jalen@moralesassist.com"],
      subject: `New Service Request from ${escapeHtml(formData.name)}`,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(formData.company || "Not provided")}</p>
        <p><strong>Phone:</strong> ${escapeHtml(formData.phone || "Not provided")}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(formData.projectType || "Not specified")}</p>
        <p><strong>Budget Range:</strong> ${escapeHtml(formData.budget || "Not specified")}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(formData.timeline || "Not specified")}</p>
        <p><strong>Services Needed:</strong> ${servicesText}</p>
        <p><strong>Project Description:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(formData.description || "")}</p>
        
        <hr style="margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          This email was sent from the Morales Assist service request form.
        </p>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to send email. Please try again later." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(JSON.stringify({ success: true, message: "Request sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-request-email function:", error);
    return new Response(
      JSON.stringify({ error: "Unable to process your request. Please try again later.", success: false }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
