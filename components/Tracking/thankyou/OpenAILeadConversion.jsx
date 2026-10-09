"use client";

import { useEffect } from "react";

export default function OpenAILeadConversion() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (typeof window.oaiq === "function") {
      window.oaiq(
        "measure",
        "lead_created",
        {
          type: "customer_action",
        }
      );
    }
  }, []);

  return null;
}