import { NextResponse } from "next/server";
import { z } from "zod";

import { formatPhoneForLSQ } from "@/utils/phone";

export const runtime = "nodejs";

const WORKER_URL =
  "https://lsq-website-forms.marketingbackup.workers.dev/lead";

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
        }
      );
    }

    const validationResult =
      contactSchema.safeParse(requestBody);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the submitted form details.",
          errors:
            validationResult.error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const data = validationResult.data;

    /*
     * Keep the same phone formatting
     * your old API was already using.
     *
     * Example:
     * +919876543210
     * becomes:
     * +91-9876543210
     */
    const formattedPhone =
      formatPhoneForLSQ(data.phone);

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

      pageUrl:
        request.headers.get("referer") || "",
    };

    const workerResponse = await fetch(
      WORKER_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workerPayload),
        cache: "no-store",
      }
    );

    const workerData =
      await workerResponse.json();

    return NextResponse.json(
      workerData,
      {
        status: workerResponse.status,
      }
    );
  } catch (error) {
    console.error(
      "Contact form API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while submitting your details.",
      },
      {
        status: 500,
      }
    );
  }
}