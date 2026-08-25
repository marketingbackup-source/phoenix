"use client";

import { useState } from "react";

export default function useFormSubmission({
  endpoint,
  onSuccess,
  onError,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  async function submitForm(data) {
    setIsSubmitting(true);
    setSubmissionError("");
    setSubmissionMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error("The server returned an invalid response.");
      }

      if (!response.ok || result.success === false) {
        throw new Error(
          result.message || "Unable to submit the form. Please try again."
        );
      }

      setSubmissionMessage(
        result.message || "Your form has been submitted successfully."
      );

      if (typeof onSuccess === "function") {
        onSuccess(result, data);
      }

      return {
        success: true,
        data: result,
      };
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to submit the form. Please try again.";

      setSubmissionError(message);

      if (typeof onError === "function") {
        onError(error, data);
      }

      return {
        success: false,
        error: message,
      };
    } finally {
      setIsSubmitting(false);
    }
  }

  function clearSubmissionState() {
    setSubmissionError("");
    setSubmissionMessage("");
  }

  return {
    submitForm,
    isSubmitting,
    submissionError,
    submissionMessage,
    clearSubmissionState,
  };
}