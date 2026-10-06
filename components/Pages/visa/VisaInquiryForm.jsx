"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

import BaseButton from "@/components/UI/BaseButton";
import BaseSelect from "@/components/UI/BaseSelect";
import useFormSubmission from "@/hooks/useFormSubmission";
import BasePhoneInput from "@/components/UI/PhoneInput";

const formSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),

  phone: z.string().min(1, "Please enter your phone number"),

  annualTurnover: z.string().min(1, "Please select annual turnover"),

  inquiryPurpose: z.string().min(1, "Please select the purpose of inquiry"),
});

const annualTurnoverOptions = [
  {
    value: "1 Cr",
    label: "1 Cr",
  },
  {
    value: "2 Cr",
    label: "2 Cr",
  },
  {
    value: "3 Cr+",
    label: "3 Cr+",
  },
];

const inquiryPurposeOptions = [
  {
    value: "I want a job in USA",
    label: "I want a job in USA",
  },
  {
    value: "Work/Visitor Visa",
    label: "Work/Visitor Visa",
  },
  {
    value: "Planning to expand",
    label: "Planning to expand",
  },
  {
    value: "Open a New US Office",
    label: "Open a New US Office",
  },
  {
    value: "Acquire a US Business",
    label: "Acquire a US Business",
  },
  {
    value: "Transfer to My US Company",
    label: "Transfer to My US Company",
  },
  {
    value: "Check My L-1 Visa Eligibility",
    label: "Check My L-1 Visa Eligibility",
  },
  {
    value: "Not Sure (Need Guidance)",
    label: "Not Sure (Need Guidance)",
  },
];

const inputClass = `
  w-full
  rounded-xl
  border
  border-gray-200
  bg-white/70
  px-4
  py-3
  text-black
  outline-none
  transition
  duration-300
  focus:border-[var(--color-red-1)]
`;

const errorClass =
  "!mt-2 !mb-0 text-sm text-[var(--color-red-1)]";

export default function VisaInquiryForm() {
  const router = useRouter();

  /*
   * reCAPTCHA
   */
  const recaptchaRef = useRef(null);

  const [recaptchaToken, setRecaptchaToken] =
    useState("");

  const [recaptchaError, setRecaptchaError] =
    useState("");

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: "",
      phone: "",
      annualTurnover: "",
      inquiryPurpose: "",
    },
  });

  const {
    submitForm: submitVisaInquiry,
    isSubmitting,
    submissionError,
    submissionMessage,
    clearSubmissionState,
  } = useFormSubmission({
    endpoint: "/api/contact",
  });

  async function submitForm(data) {
    clearSubmissionState();

    /*
     * Do not submit without CAPTCHA.
     */
    if (!recaptchaToken) {
      setRecaptchaError(
        "Please confirm that you are not a robot."
      );

      return;
    }

    setRecaptchaError("");

    /*
     * Send the CAPTCHA token together with
     * the existing form data.
     */
    const result = await submitVisaInquiry({
      ...data,
      recaptchaToken,
    });

    if (result.success) {
      reset();

      recaptchaRef.current?.reset();

      setRecaptchaToken("");

      router.push("/thankyou");

      return;
    }

    /*
     * A reCAPTCHA token should not be reused
     * after a submission attempt.
     */
    recaptchaRef.current?.reset();

    setRecaptchaToken("");
  }

  return (
    <div
      className="
        rounded-4xl
        bg-white/[0.45]
        backdrop-blur-2xl
        border
        border-gray-200
        p-6
      "
    >
      <h3
        className="
          fs-32-20
          uppercase
          text-black
          !mb-6
        "
      >
        Get Expert Guidance
      </h3>

      <form
        onSubmit={handleSubmit(submitForm)}
        noValidate
        className="flex flex-col gap-5"
      >
        <div>
          <input
            type="text"
            placeholder="Name"
            aria-label="Name"
            className={inputClass}
            {...register("name")}
          />

          {errors.name && (
            <p className={errorClass}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <BasePhoneInput
            name="phone"
            control={control}
            error={errors.phone}
          />
        </div>

        <BaseSelect
          name="annualTurnover"
          placeholder="Annual Turnover"
          options={annualTurnoverOptions}
          register={register}
          error={errors.annualTurnover}
        />

        <BaseSelect
          name="inquiryPurpose"
          placeholder="Purpose of Inquiry"
          options={inquiryPurposeOptions}
          register={register}
          error={errors.inquiryPurpose}
        />

        {/* Google reCAPTCHA */}
        {/* Google reCAPTCHA */}
<div className="w-full overflow-hidden">
  <div
    className="
      origin-top-left
      scale-[0.82]
      sm:scale-[0.85]
    "
    style={{
      width: "304px",
      marginBottom: "-10px",
    }}
  >
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
      }
      onChange={(token) => {
        setRecaptchaToken(token || "");

        if (token) {
          setRecaptchaError("");
        }
      }}
      onExpired={() => {
        setRecaptchaToken("");
      }}
      onErrored={() => {
        setRecaptchaToken("");

        setRecaptchaError(
          "reCAPTCHA could not be loaded. Please try again."
        );
      }}
    />
  </div>

  {recaptchaError && (
    <p className={errorClass}>
      {recaptchaError}
    </p>
  )}
</div>

        {submissionError && (
          <p
            role="alert"
            className="
              !mb-0
              rounded-md
              border
              border-red-200
              bg-red-50
              px-4
              py-3
              text-sm
              text-[var(--color-red-1)]
            "
          >
            {submissionError}
          </p>
        )}

        {submissionMessage && (
          <p
            role="status"
            className="
              !mb-0
              rounded-md
              border
              border-green-200
              bg-green-50
              px-4
              py-3
              text-sm
              text-green-700
            "
          >
            {submissionMessage}
          </p>
        )}

        <BaseButton
          title={
            isSubmitting
              ? "Submitting..."
              : "Submit Enquiry"
          }
          type="submit"
          style="primary w-fit"
          disabled={isSubmitting}
        >
          <MoveRight
            size={20}
            className="ml-2 transition-colors duration-300 group-hover:text-[var(--color-white)]"
          />
        </BaseButton>
      </form>
    </div>
  );
}