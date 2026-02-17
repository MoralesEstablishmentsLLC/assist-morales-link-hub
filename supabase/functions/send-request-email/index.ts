import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface RequestFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  services: string[];
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: RequestFormData = await req.json();
    console.log("Received form data:", formData);

    const servicesText = formData.services.length > 0 
      ? formData.services.join(", ") 
      : "None specified";

    const emailResponse = await resend.emails.send({
      from: "Morales Assist <onboarding@resend.dev>",
      to: ["jalen@moralesassist.com"],
      subject: `New Service Request from ${formData.name}`,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company || "Not provided"}</p>
        <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
        <p><strong>Project Type:</strong> ${formData.projectType || "Not specified"}</p>
        <p><strong>Budget Range:</strong> ${formData.budget || "Not specified"}</p>
        <p><strong>Timeline:</strong> ${formData.timeline || "Not specified"}</p>
        <p><strong>Services Needed:</strong> ${servicesText}</p>
        <p><strong>Project Description:</strong></p>
        <p style="white-space: pre-wrap;">${formData.description}</p>
        
        <hr style="margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          This email was sent from the Morales Assist service request form.
        </p>
      `,
    });

    console.log("Resend response:", emailResponse);

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      return new Response(
        JSON.stringify({ success: false, error: emailResponse.error.message }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    return new Response(JSON.stringify({ success: true, message: "Request sent successfully!" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-request-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message, success: false }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);