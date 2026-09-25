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

  "https://cornflowerblue-cod-866086.hostingersite.com",

  "http://localhost:3000",

];



const newsletterSchema = z.object({

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(150),

});



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


  if (
    responseData.ExceptionType ||
    responseData.ExceptionMessage
  ) {

    return (
      responseData.ExceptionMessage ||
      "LeadSquared rejected the submission."
    );

  }


  return null;

}



function createNewsletterPayload(data) {

  return [

    {
      Attribute: "EmailAddress",
      Value: data.email,
    },

    {
      Attribute: "SearchBy",
      Value: "EmailAddress",
    },

    {
      Attribute: "Source",
      Value: "Website",
    },

    {
      Attribute: "SourceCampaign",
      Value: "Newsletter Subscription",
    },

  ];

}



export async function POST(request) {

  try {


    const origin = request.headers.get("origin");


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



    const accessKey = process.env.LSQ_ACCESS_KEY;

    const secretKey = process.env.LSQ_SECRET_KEY;

    const endpoint = process.env.LSQ_ENDPOINT;



    if (
      !accessKey ||
      !secretKey ||
      !endpoint
    ) {

      return NextResponse.json(

        {
          success: false,
          message: "Server configuration is incomplete.",
        },

        {
          status: 500,
        }

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
        }

      );

    }



    const validationResult =
      newsletterSchema.safeParse(requestBody);



    if (!validationResult.success) {


      return NextResponse.json(

        {
          success: false,
          message: "Please enter a valid email address.",
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



    const leadSquaredPayload =
      createNewsletterPayload(data);



    console.log(
      "Newsletter LeadSquared Payload:",
      JSON.stringify(
        leadSquaredPayload,
        null,
        2
      )
    );



    const leadSquaredUrl =
      new URL(endpoint);



    leadSquaredUrl.searchParams.set(
      "postUpdatedLead",
      "true"
    );


    leadSquaredUrl.searchParams.set(
      "accessKey",
      accessKey
    );


    leadSquaredUrl.searchParams.set(
      "secretKey",
      secretKey
    );



    const leadSquaredResponse =
      await fetch(
        leadSquaredUrl.toString(),
        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

          },

          body:
            JSON.stringify(
              leadSquaredPayload
            ),

          cache: "no-store",

          signal:
            AbortSignal.timeout(30000),

        }

      );



    const responseText =
      await leadSquaredResponse.text();



    let responseData = null;



    if (responseText) {

      try {

        responseData =
          JSON.parse(responseText);

      } catch {

        console.error(
          "LeadSquared returned non JSON response:",
          responseText
        );

      }

    }



    if (!leadSquaredResponse.ok) {


      return NextResponse.json(

        {

          success: false,

          message:
            getLeadSquaredError(responseData) ||
            "Unable to submit newsletter request.",

        },

        {

          status: 502,

        }

      );

    }



    const leadSquaredError =
      getLeadSquaredError(responseData);



    if (leadSquaredError) {


      return NextResponse.json(

        {

          success: false,

          message: leadSquaredError,

        },

        {

          status: 400,

        }

      );

    }



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