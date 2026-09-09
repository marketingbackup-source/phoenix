"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import BaseModal from "@/components/UI/BaseModal";

const callbackSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),

  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number")
    .refine(
      (value) => value.replace(/\D/g, "").length === 10,
      "Phone number must be 10 digits",
    ),
});

export default function CallbackModal({ open, onClose }) {
  const [countdown, setCountdown] = useState(null);

  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(callbackSchema),

    defaultValues: {
      name: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      setCountdown(null);
      reset();
      onClose();

      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, onClose, reset]);

  async function submitForm(data) {
    setApiError("");

    try {
      const response = await fetch(
        "https://call-in-55-seconds.marketingbackup.workers.dev/lead",

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: data.name,

            phone: data.phone,
          }),
        },
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit request");
      }

      setCountdown(55);
    } catch (error) {
      console.error("Callback submission failed", error);

      setApiError(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <BaseModal
      isOpen={open}
      onClose={onClose}
      modalClass="
        w-full
        max-w-md
        rounded-3xl
        p-8
      "
      overlayClass="
        bg-black/70
        backdrop-blur-md
      "
    >
      {countdown !== null ? (
        <div
          className="
            flex
            min-h-[350px]
            flex-col
            items-center
            justify-center
            text-center
            "
        >
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-gray-500
              "
          >
            Your callback request is confirmed
          </p>

          <div
            className="
              mt-6
              text-7xl
              font-bold
              text-[var(--color-red-1)]
              "
          >
            {countdown}
          </div>

          <p
            className="
              mt-4
              text-gray-600
              "
          >
            Our team will call you within
            <br />
            the next 55 seconds.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <span
              className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-red-50
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-[var(--color-red-1)]
            "
            >
              <span
                className="
              h-2
              w-2
              rounded-full
              bg-[var(--color-red-1)]
              "
              />
              Quick Callback
            </span>

            <h2
              className="
            mt-5
            text-4xl
            font-semibold
            leading-tight
            text-gray-900
            "
            >
              Get a Call in
              <span
                className="
              text-[var(--color-red-1)]
              "
              >
                {" "}
                55 Seconds
              </span>
            </h2>

            <p
              className="
            mt-3
            text-sm
            text-gray-500
            "
            >
              Enter your details and our team will contact you shortly.
            </p>
          </div>

          {apiError && (
            <div
              className="
            mb-5
            rounded-lg
            bg-red-50
            px-4
            py-3
            text-sm
            text-red-600
            "
            >
              {apiError}
            </div>
          )}

          <form onSubmit={handleSubmit(submitForm)} className="space-y-5">
            <div>
              <label
                className="
              mb-2
              block
              text-sm
              font-semibold
              text-gray-800
              "
              >
                Full Name
              </label>

              <input
                {...register("name")}
                placeholder="Enter your full name"
                className="
              w-full
              rounded-lg
              border
              border-gray-300
              px-4
              py-3
              text-gray-900
              outline-none
              focus:border-[var(--color-red-1)]
              "
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                className="
              mb-2
              block
              text-sm
              font-semibold
              text-gray-800
              "
              >
                Phone Number
              </label>

              <input
                {...register("phone")}
                type="tel"
                maxLength={10}
                placeholder="Enter 10 digit phone number"
                className="
              w-full
              rounded-lg
              border
              border-gray-300
              px-4
              py-3
              text-gray-900
              outline-none
              focus:border-[var(--color-red-1)]
              "
              />

              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="
            w-full
            rounded-lg
            bg-[var(--color-red-1)]
            py-4
            text-sm
            font-semibold
            !text-white
            transition
            hover:opacity-90
            disabled:opacity-50
            "
            >
              {isSubmitting ? "Submitting..." : "Request a Callback"}
            </button>
          </form>
        </>
      )}
    </BaseModal>
  );
}
