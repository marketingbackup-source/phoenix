import { NextResponse } from "next/server";
import { z } from "zod";

import { formatPhoneForLSQ } from "@/utils/phone";
import { verifyRecaptcha } from "@/utils/verifyRecaptcha";

export const runtime = "nodejs";

const WORKER_URL =
  "https://call-in-55-seconds.marketingbackup.workers.dev/lead";


const callbackSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2)
    .max(100),

  phone: z
    .string()
    .trim()
    .min(7)
    .max(30),

  recaptchaToken: z
    .string()
    .min(1),
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
      callbackSchema.safeParse(requestBody);


    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please check your details and complete reCAPTCHA.",
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
     * Verify CAPTCHA before Worker/LSQ
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
     * Existing Worker payload
     */
    const workerPayload = {
      name: data.name,

      phone:
        formatPhoneForLSQ(
          data.phone
        ),
    };


    const workerResponse =
      await fetch(
        WORKER_URL,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body:
            JSON.stringify(
              workerPayload
            ),

          cache: "no-store",

          signal:
            AbortSignal.timeout(30000),
        }
      );


    const responseText =
      await workerResponse.text();


    let workerData = null;


    if (responseText) {
      try {
        workerData =
          JSON.parse(responseText);
      } catch {
        console.error(
          "Callback Worker returned non-JSON response:",
          responseText
        );
      }
    }


    if (!workerResponse.ok) {
      return NextResponse.json(
        {
          success: false,

          message:
            workerData?.message ||
            "Unable to submit callback request.",
        },
        {
          status: 502,
        }
      );
    }


    if (
      workerData &&
      workerData.success === false
    ) {
      return NextResponse.json(
        {
          success: false,

          message:
            workerData.message ||
            "Unable to submit callback request.",
        },
        {
          status: 400,
        }
      );
    }


    return NextResponse.json(
      workerData || {
        success: true,
        message:
          "Callback request submitted successfully.",
      },
      {
        status: 200,
      }
    );

  } catch (error) {
    console.error(
      "Callback API error:",
      error
    );


    return NextResponse.json(
      {
        success: false,

        message:
          "Something went wrong while submitting your callback request.",
      },
      {
        status: 500,
      }
    );
  }
}