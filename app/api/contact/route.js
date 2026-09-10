import dotenv from "dotenv";
import path from "node:path";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
  override: true,
});


const allowedOrigins = [
  "https://www.phoenixbusinessadvisory.com",
  "https://phoenixbusinessadvisory.com",
  "https://l1visausa.com",
  "https://www.l1visausa.com",
  "http://localhost:3000",
];
const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),

  phone: z
    .string()
    .trim()
    .min(7)
    .max(20)
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

function getHighestNumber(value) {
  const matches = String(value).match(/\d+/g);

  if (!matches?.length) {
    return value;
  }

  return Math.max(...matches.map(Number));
}

function createLeadSquaredPayload(data, tracking) {
  const payload = [
    {
      Attribute: "FirstName",
      Value: data.name,
    },

    {
      Attribute: "Phone",
      Value: data.phone,
    },

    {
      Attribute: "SearchBy",
      Value: "Phone",
    },
  ];

  if (data.email) {
    payload.push({
      Attribute: "EmailAddress",
      Value: data.email,
    });
  }

  if (data.city) {
    payload.push({
      Attribute: "mx_City",
      Value: data.city,
    });
  }

  if (data.companyName) {
    payload.push({
      Attribute: "mx_Company_Name",
      Value: data.companyName,
    });
  }

  if (data.annualTurnover) {
    payload.push({
      Attribute: "mx_Lead_Annual_Turnover",
      Value: data.annualTurnover,
    });
  }

  if (data.businessAge) {
    payload.push({
      Attribute: "mx_Client_Business_Age",
      Value: getHighestNumber(data.businessAge),
    });
  }

  if (data.employees) {
    payload.push({
      Attribute: "mx_Current_Employees",
      Value: getHighestNumber(data.employees),
    });
  }

  if (data.inquiryPurpose) {
    payload.push({
      Attribute: "mx_Purpose_of_Inquiry",
      Value: data.inquiryPurpose,
    });
  }

  if (data.comment) {
    payload.push({
      Attribute: "mx_Remarks",
      Value: data.comment,
    });
  }

  payload.push({
    Attribute: "Source",
    Value: tracking.utmSource || "Website",
  });

  if (tracking.utmCampaign) {
    payload.push({
      Attribute: "SourceCampaign",
      Value: tracking.utmCampaign,
    });
  }

  if (tracking.utmContent) {
    payload.push({
      Attribute: "SourceContent",
      Value: tracking.utmContent,
    });
  }

  return payload;
}

function getLeadSquaredError(responseData) {
  if (!responseData) {
    return null;
  }

  if (responseData.Status === "Error") {
    return (
      responseData.ExceptionMessage ||
      responseData.Message ||
      responseData.ErrorMessage ||
      "LeadSquared rejected the submission."
    );
  }

  if (responseData.ExceptionType || responseData.ExceptionMessage) {
    return (
      responseData.ExceptionMessage || "LeadSquared rejected the submission."
    );
  }

  return null;
}

export async function POST(request) {
  try {
    const origin = request.headers.get("origin");

    if (
      !origin &&
      !allowedOrigins.includes(origin)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized request.",
        },
        {
          status: 403,
        },
      );
    }
    const accessKey = process.env.LSQ_ACCESS_KEY;
    const secretKey = process.env.LSQ_SECRET_KEY;
    const endpoint = process.env.LSQ_ENDPOINT;

    if (!accessKey || !secretKey || !endpoint) {
      return NextResponse.json(
        {
          success: false,
          message: "Server configuration is incomplete.",
        },

        {
          status: 500,
        },
      );
    }

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

    const tracking = {
      utmSource: request.cookies.get("utm_source")?.value || "",

      utmCampaign: request.cookies.get("utm_campaign")?.value || "",

      utmContent: request.cookies.get("utm_content")?.value || "",
    };

    const leadSquaredPayload = createLeadSquaredPayload(data, tracking);

    const leadSquaredUrl = new URL(endpoint);

    leadSquaredUrl.searchParams.set("postUpdatedLead", "true");

    leadSquaredUrl.searchParams.set("accessKey", accessKey);

    leadSquaredUrl.searchParams.set("secretKey", secretKey);

    const leadSquaredResponse = await fetch(leadSquaredUrl.toString(), {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(leadSquaredPayload),

      cache: "no-store",

      signal: AbortSignal.timeout(30000),
    });

    const responseText = await leadSquaredResponse.text();

    let responseData = null;

    if (responseText) {
      try {
        responseData = JSON.parse(responseText);
      } catch {
        console.error("LeadSquared returned non JSON response:", responseText);
      }
    }

    if (!leadSquaredResponse.ok) {
      return NextResponse.json(
        {
          success: false,

          message:
            getLeadSquaredError(responseData) ||
            "Unable to submit your details at this time.",
        },

        {
          status: 502,
        },
      );
    }

    const leadSquaredError = getLeadSquaredError(responseData);

    if (leadSquaredError) {
      return NextResponse.json(
        {
          success: false,

          message: leadSquaredError,
        },

        {
          status: 400,
        },
      );
    }

    return NextResponse.json(
      {
        success: true,

        message: "Your details have been submitted successfully.",
      },

      {
        status: 200,
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
