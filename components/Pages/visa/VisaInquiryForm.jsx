"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveRight } from "lucide-react";

import BaseButton from "@/components/UI/BaseButton";
import BaseSelect from "@/components/UI/BaseSelect";
import useFormSubmission from "@/hooks/useFormSubmission";

const formSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),

  annualTurnover: z.string().min(1, "Please select annual turnover"),

  inquiryPurpose: z
    .string()
    .min(1, "Please select the purpose of inquiry"),
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
  const {
    register,
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

    const result = await submitVisaInquiry(data);

    if (result.success) {
      reset();
    }
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
          <input
            type="tel"
            placeholder="Phone"
            aria-label="Phone"
            className={inputClass}
            {...register("phone")}
          />

          {errors.phone && (
            <p className={errorClass}>
              {errors.phone.message}
            </p>
          )}
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
          title={isSubmitting ? "Submitting..." : "Submit Enquiry"}
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