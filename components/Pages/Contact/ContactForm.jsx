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

  email: z.string().trim().email("Please enter a valid email address"),

  city: z.string().trim().min(2, "Please enter your city"),

  companyName: z
    .string()
    .trim()
    .min(2, "Please enter your company name"),

  annualTurnover: z.string().min(1, "Please select annual turnover"),

  businessAge: z.string().min(1, "Please select business age"),

  employees: z.string().min(1, "Please select number of employees"),

  inquiryPurpose: z
    .string()
    .min(1, "Please select the purpose of inquiry"),

  comment: z
    .string()
    .trim()
    .min(10, "Please enter at least 10 characters")
    .max(1000, "Comment cannot exceed 1000 characters"),
});


const annualTurnoverOptions = [
  { value: "1 Cr", label: "1 Cr" },
  { value: "2 Cr", label: "2 Cr" },
  { value: "3 Cr+", label: "3 Cr+" },
];


const businessAgeOptions = [
  { value: "2 - 3", label: "2 - 3" },
  { value: "4 - 5", label: "4 - 5" },
  { value: "5+", label: "5+" },
];


const employeeOptions = [
  { value: "2 - 3", label: "2 - 3" },
  { value: "4 - 5", label: "4 - 5" },
  { value: "5+", label: "5+" },
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


const inputClass =
  `
  w-full
  rounded-lg
  border
  border-gray-200
  bg-white
  px-5
  py-4
  text-black
  outline-none
  transition-all
  duration-300
  placeholder:text-gray-400
  focus:border-[var(--color-red-1)]
  focus:ring-2
  focus:ring-[var(--color-red-1)]/10
  `;


const errorClass =
  "mt-2 text-sm text-[var(--color-red-1)]";


export default function ContactForm() {


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
      email: "",
      city: "",
      companyName: "",
      annualTurnover: "",
      businessAge: "",
      employees: "",
      inquiryPurpose: "",
      comment: "",
    },

  });



  const {
    submitForm: submitContactForm,
    isSubmitting,
    submissionError,
    submissionMessage,
    clearSubmissionState,
  } = useFormSubmission({
    endpoint: "/api/contact",
  });



  async function submitForm(data) {

    clearSubmissionState();

    const result = await submitContactForm(data);

    if (result.success) {
      reset();
    }

  }



  return (

    <form
      onSubmit={handleSubmit(submitForm)}
      noValidate
      className="
      grid
      gap-5
      rounded-2xl
      border
      border-gray-100
      bg-white
      p-6
      md:grid-cols-2
      shadow-[0_15px_40px_rgba(0,0,0,0.06)]
      "
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



      <div>

        <input
          type="email"
          placeholder="Email"
          aria-label="Email"
          className={inputClass}
          {...register("email")}
        />

        {errors.email && (
          <p className={errorClass}>
            {errors.email.message}
          </p>
        )}

      </div>



      <div>

        <input
          type="text"
          placeholder="City"
          aria-label="City"
          className={inputClass}
          {...register("city")}
        />

        {errors.city && (
          <p className={errorClass}>
            {errors.city.message}
          </p>
        )}

      </div>



      <div>

        <input
          type="text"
          placeholder="Company Name"
          aria-label="Company Name"
          className={inputClass}
          {...register("companyName")}
        />

        {errors.companyName && (
          <p className={errorClass}>
            {errors.companyName.message}
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
        name="businessAge"
        placeholder="Business Age"
        options={businessAgeOptions}
        register={register}
        error={errors.businessAge}
      />



      <BaseSelect
        name="employees"
        placeholder="Employees in Company"
        options={employeeOptions}
        register={register}
        error={errors.employees}
      />



      <div className="md:col-span-2">

        <BaseSelect
          name="inquiryPurpose"
          placeholder="Purpose of Inquiry"
          options={inquiryPurposeOptions}
          register={register}
          error={errors.inquiryPurpose}
        />

      </div>



      <div className="md:col-span-2">

        <textarea
          rows={3}
          placeholder="Comment"
          aria-label="Comment"
          className={`${inputClass} resize-none`}
          {...register("comment")}
        />

        {errors.comment && (
          <p className={errorClass}>
            {errors.comment.message}
          </p>
        )}

      </div>



      {submissionError && (

        <div className="md:col-span-2">

          <p
            role="alert"
            className="
            rounded-lg
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

        </div>

      )}



      {submissionMessage && (

        <div className="md:col-span-2">

          <p
            role="status"
            className="
            rounded-lg
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

        </div>

      )}



      <div className="md:col-span-2">

        <BaseButton
          title={isSubmitting ? "Submitting..." : "Submit"}
          type="submit"
          style="primary"
          disabled={isSubmitting}
        >

          <MoveRight
            size={20}
            className="
            ml-2
            transition-colors
            duration-300
            group-hover:text-[var(--color-white)]
            "
          />

        </BaseButton>

      </div>


    </form>

  );

}