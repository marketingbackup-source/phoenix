import { NextResponse } from "next/server";
import { z } from "zod";

import { formatPhoneForLSQ } from "@/utils/phone";
import { verifyRecaptcha } from "@/utils/verifyRecaptcha";

export const runtime = "nodejs";

const WORKER_URL = "https://lsq-website-forms.marketingbackup.workers.dev/lead";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),

  phone: z
    .string()
    .trim()
    .min(7)
    .max(30)
    .regex(/^[0-9+\-\s()]+$/),

  email: z.string().trim().email().max(150).optional(),

  city: z.string().trim().max(100).optional(),

  companyName: z.string().trim().max(150).optional(),

  annualTurnover: z.string().trim().min(1).max(100),

  businessAge: z.string().trim().max(50).optional(),

  employees: z.string().trim().max(50).optional(),

  inquiryPurpose: z.string().trim().min(1).max(250),

  comment: z.string().trim().max(1000).optional(),

  recaptchaToken: z.string().min(1),
});

export async function POST(request) {
  try {
    let requestBody;

    try {
      requestBody = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request body.",
        },
        {
          status: 400,
        },
      );
    }

    const validationResult = contactSchema.safeParse(requestBody);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the submitted form details.",
          errors: validationResult.error.flatten().fieldErrors,
        },
        {
          status: 400,
        },
      );
    }

    const data = validationResult.data;

    /*
     * Google reCAPTCHA verification
     * Nothing reaches Worker/LSQ unless this passes.
     */
    const recaptchaResult = await verifyRecaptcha(data.recaptchaToken);

    if (!recaptchaResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "reCAPTCHA verification failed. Please try again.",
        },
        {
          status: 400,
        },
      );
    }

    /*
     * Existing phone formatting
     */
    const formattedPhone = formatPhoneForLSQ(data.phone);

    /*
     * Existing Worker payload
     *
     * recaptchaToken is deliberately NOT
     * forwarded to the Worker or LeadSquared.
     */
    const workerPayload = {
      formType: "business-consultation",

      name: data.name,

      phone: formattedPhone,

      email: data.email || "",

      city: data.city || "",

      companyName: data.companyName || "",

      businessAge: data.businessAge || "",

      employeeCount: data.employees || "",

      businessInquiry: data.inquiryPurpose,

      annualTurnover: data.annualTurnover,

      comments: data.comment || "",

      pageUrl: request.headers.get("referer") || "",
    };

    /*
     * Existing Cloudflare Worker request
     */
    const workerResponse = await fetch(WORKER_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "X-Phoenix-API-Key": process.env.INTERNAL_API_KEY,
      },

      body: JSON.stringify(workerPayload),

      cache: "no-store",
    });

    /*
     * Safely read Worker response
     */
    const responseText = await workerResponse.text();

    let workerData = null;

    if (responseText) {
      try {
        workerData = JSON.parse(responseText);
      } catch {
        console.error("Worker returned non-JSON response:", responseText);
      }
    }

    /*
     * Worker failed
     */
    if (!workerResponse.ok) {
      return NextResponse.json(
        {
          success: false,

          message: workerData?.message || "Unable to submit your details.",
        },
        {
          status: workerResponse.status,
        },
      );
    }

    /*
     * Success
     */
    return NextResponse.json(
      workerData || {
        success: true,
        message: "Your details have been submitted successfully.",
      },
      {
        status: workerResponse.status,
      },
    );
  } catch (error) {
    console.error("Contact form API error:", error);

    return NextResponse.json(
      {
        success: false,

        message: "Something went wrong while submitting your details.",
      },
      {
        status: 500,
      },
    );
  }
}
