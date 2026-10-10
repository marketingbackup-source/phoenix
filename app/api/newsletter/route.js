import { NextResponse } from "next/server";
import { z } from "zod";

import { verifyRecaptcha } from "@/utils/verifyRecaptcha";


export const runtime = "nodejs";


const allowedOrigins = [
  "https://www.phoenixbusinessadvisory.com",
  "https://phoenixbusinessadvisory.com",
  "https://l1visausa.com",
  "https://www.l1visausa.com",
];


const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxePR9PrRIBvkPx-XefWkh5kvCGOsrBcAx4iGKpOBPzn7qtwCACsHEhc_Raz5kpDS0sfw/exec";


const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(150),

  recaptchaToken: z
    .string()
    .min(1, "reCAPTCHA verification is required"),
});


export async function POST(request) {
  try {
    const origin = request.headers.get("origin");


    /*
     * Allow newsletter submissions only
     * from our approved websites.
     */
    if (
      !origin ||
      !allowedOrigins.includes(origin)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized request.",
        },
        {
          status: 403,
        }
      );
    }


    /*
     * Parse request body.
     */
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


    /*
     * Validate email and reCAPTCHA token.
     */
    const validationResult =
      newsletterSchema.safeParse(requestBody);


    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Please enter a valid email address and complete reCAPTCHA.",

          errors:
            validationResult.error.flatten()
              .fieldErrors,
        },
        {
          status: 400,
        }
      );
    }


    const data = validationResult.data;


    /*
     * Verify Google reCAPTCHA first.
     *
     * Nothing will be sent to Google Sheets
     * unless the CAPTCHA verification succeeds.
     */
    const recaptchaResult =
      await verifyRecaptcha(
        data.recaptchaToken
      );


    if (!recaptchaResult.success) {
      return NextResponse.json(
        {
          success: false,

          message:
            "reCAPTCHA verification failed. Please try again.",
        },
        {
          status: 400,
        }
      );
    }


    /*
     * Send only the email address to
     * the Google Apps Script Web App.
     *
     * The Apps Script itself generates
     * the Date before adding the row
     * to Google Sheets.
     */
    const googleResponse =
      await fetch(
        GOOGLE_SCRIPT_URL,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email: data.email,
          }),

          cache: "no-store",

          signal:
            AbortSignal.timeout(15000),
        }
      );


    /*
     * Apps Script returns JSON.
     */
    const responseText =
      await googleResponse.text();


    let googleData = null;


    try {
      googleData =
        JSON.parse(responseText);
    } catch {
      console.error(
        "Google Apps Script returned invalid response:",
        responseText
      );


      return NextResponse.json(
        {
          success: false,

          message:
            "Unable to save newsletter subscription.",
        },
        {
          status: 502,
        }
      );
    }


    /*
     * Handle HTTP failure from
     * the Google Apps Script endpoint.
     */
    if (!googleResponse.ok) {
      console.error(
        "Google Apps Script request failed:",
        googleData
      );


      return NextResponse.json(
        {
          success: false,

          message:
            "Unable to save newsletter subscription.",
        },
        {
          status: 502,
        }
      );
    }


    /*
     * Handle an error returned explicitly
     * by our Apps Script.
     */
    if (!googleData.success) {
      console.error(
        "Google Apps Script rejected newsletter:",
        googleData
      );


      return NextResponse.json(
        {
          success: false,

          message:
            googleData.message ||
            "Unable to save newsletter subscription.",
        },
        {
          status: 400,
        }
      );
    }


    /*
     * Subscription successfully stored
     * in Google Sheets.
     */
    return NextResponse.json(
      {
        success: true,

        message:
          "Newsletter subscription successful.",
      },
      {
        status: 200,
      }
    );

  } catch (error) {
    console.error(
      "Newsletter API error:",
      error
    );


    return NextResponse.json(
      {
        success: false,

        message:
          "Something went wrong while subscribing.",
      },
      {
        status: 500,
      }
    );
  }
}