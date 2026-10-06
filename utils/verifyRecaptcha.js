export async function verifyRecaptcha(token) {
  if (!token) {
    return {
      success: false,
      error: "Missing reCAPTCHA token.",
    };
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY is missing.");

    return {
      success: false,
      error: "reCAPTCHA server configuration is missing.",
    };
  }

  try {
    const body = new URLSearchParams();

    body.append("secret", secretKey);
    body.append("response", token);

    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(
        "Google reCAPTCHA HTTP error:",
        response.status
      );

      return {
        success: false,
        error: "Unable to verify reCAPTCHA.",
      };
    }

    const result = await response.json();

    if (!result.success) {
      console.warn(
        "Google reCAPTCHA rejected submission:",
        result["error-codes"] || []
      );

      return {
        success: false,
        error: "reCAPTCHA verification failed.",
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);

    return {
      success: false,
      error: "Unable to verify reCAPTCHA.",
    };
  }
}