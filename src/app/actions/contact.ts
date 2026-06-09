"use server";

import { z } from "zod";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  cfTurnstileResponse: z.string().min(1, "CAPTCHA is required"),
});

export async function sendContactMessage(prevState: any, formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      cfTurnstileResponse: formData.get("cf-turnstile-response"),
    };

    const validatedData = contactSchema.parse(rawData);

    // Skip Turnstile check in local dev if no key is provided, or strictly enforce it
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      const verifyEndpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
      const res = await fetch(verifyEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${turnstileSecret}&response=${validatedData.cfTurnstileResponse}`,
      });

      const verifyData = await res.json();

      if (!verifyData.success) {
        console.error("Turnstile Verification Failed:", verifyData);
        return {
          success: false,
          error: "invalidCaptcha",
        };
      }
    } else {
      console.warn("TURNSTILE_SECRET_KEY is missing. Skipping CAPTCHA verification for development.");
    }

    if (!resend) {
      console.warn("RESEND_API_KEY is missing. Simulating successful email send.");
      return {
        success: true,
        message: "successMessage",
      };
    }

    // Send email using Resend
    // By default Resend allows sending to the registered account email using their onboarding domain.
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "jan@janeberwein.at",
      subject: `New Message from ${validatedData.name}`,
      replyTo: validatedData.email,
      text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nMessage:\n${validatedData.message}`,
    });

    if (!error) {
      return {
        success: true,
      };
    } else {
      console.error("Resend API Error:", error);
      return {
        success: false,
        error: "errorMessage",
      };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation Error:", error.issues);
      return {
        success: false,
        error: "errorMessage",
      };
    }
    
    console.error("Server Action Error:", error);
    return {
      success: false,
      error: "errorMessage",
    };
  }
}
