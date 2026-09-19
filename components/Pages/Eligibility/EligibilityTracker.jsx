"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";
import EligibilityShell from "./EligibilityShell";
import {
  RESULT_STORAGE_KEY,
  ELIGIBILITY_WORKER_URL,
  ageOptions,
  turnoverOptions,
  employeeOptions,
  investmentOptions,
  businessTypes,
  initialEligibilityData,
  calculateEligibility,
  captureEligibilityUTMs,
  getEligibilityUTMs,
} from "@/lib/eligibility";

const TOTAL_STEPS = 8;

const inputClass =
  "w-full rounded-[12px] border border-gray-200 bg-gray-50 px-4 py-3 !text-[14px] text-[var(--color-gray-1)] outline-none transition focus:border-[var(--color-red-1)] focus:bg-white focus:ring-2 focus:ring-[var(--color-red-1)]/10";

const actionButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-[12px] !text-white bg-[var(--color-red-1)] px-5 py-3 !text-[13px] font-semibold text-white transition hover:bg-[var(--color-red-2)] disabled:cursor-not-allowed disabled:opacity-40 sm:!text-[14px]";

function OptionList({ options, value, onChange }) {
  return (
    <div className="flex flex-col gap-2.5">
      {options.map((option) => {
        const selected = value === option.val;

        return (
          <button
            key={option.val}
            type="button"
            onClick={() => onChange(option)}
            className={`flex w-full items-center gap-3 rounded-[12px] border px-4 py-3 text-left transition ${
              selected
                ? "border-[var(--color-red-1)] bg-red-50"
                : "border-gray-200 bg-white hover:border-[var(--color-red-1)] hover:bg-red-50/50"
            }`}
          >
            <span
              className={`relative h-[18px] w-[18px] shrink-0 rounded-full border transition ${
                selected
                  ? "border-[var(--color-red-1)] bg-[var(--color-red-1)]"
                  : "border-gray-300 bg-white"
              }`}
            >
              {selected && (
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              )}
            </span>
            <span className="!text-[13px] text-[var(--color-gray-1)] sm:!text-[14px]">
              {option.display || option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function StepHeader({ step, title, hint }) {
  return (
    <>
      <p className="!mb-2 !text-[10px] font-semibold uppercase tracking-[0.18em] !text-[var(--color-red-1)]">
        Step {step} of {TOTAL_STEPS}
        {step === TOTAL_STEPS ? " - Final Question" : ""}
      </p>
      <h1 className="!mb-2 !text-[22px] font-semibold leading-[1.3] text-[var(--color-gray-1)] sm:!text-[26px]">
        {title}
      </h1>
      {hint && (
        <p className="!mb-6 !text-[13px] leading-[1.6] !text-gray-500">
          {hint}
        </p>
      )}
    </>
  );
}

function BackButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 inline-flex items-center gap-1.5 !text-[12px] text-gray-500 transition hover:text-[var(--color-gray-1)]"
    >
      <ArrowLeft size={14} />
      Back
    </button>
  );
}

export default function EligibilityTracker() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialEligibilityData);
  const [errorField, setErrorField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  useEffect(() => {
    captureEligibilityUTMs();
    sessionStorage.removeItem(RESULT_STORAGE_KEY);
  }, []);

  const progress = useMemo(
    () => Math.round(((step - 1) / TOTAL_STEPS) * 100),
    [step]
  );

  function updateChoice(key, option) {
    setData((current) => ({
      ...current,
      [key]: {
        val: option.val,
        label: option.label,
        pass: option.pass,
      },
    }));
    setErrorField("");
  }

  function goToStep(nextStep) {
    setErrorField("");
    setSubmissionError("");
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function requireField(field, valid, nextStep) {
    if (!valid) {
      setErrorField(field);
      return;
    }
    goToStep(nextStep);
  }

  async function sendEligibilityLead(eligibility) {
    const utm = getEligibilityUTMs();

    const payload = {
      formType: "business-consultation",
      name: data.name,
      phone: data.phone,
      email: data.email,
      city: data.city,
      companyName: data.biz,
      businessAge: data.age.label,
      employeeCount: data.emp.label,
      businessType: data.bizType.label,
      businessInquiry: "USA Business Migration Eligibility Checker",
      annualTurnover: data.turnover.val,
      comments:
        "Eligibility checker completed. " +
        `Eligibility status: ${eligibility.eligible ? "Eligible" : "Not Eligible"}. ` +
        `Business type: ${data.bizType.label}. ` +
        `Turnover range: ${data.turnover.label}. ` +
        `Investment readiness: ${data.invest.label}`,
      utmSource: utm.utmSource,
      utmCampaign: utm.utmCampaign,
      utmTerm: utm.utmTerm,
      utmContent: utm.utmContent,
      pageUrl: window.location.href,
    };

    try {
      const response = await fetch(ELIGIBILITY_WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let result;
      try {
        result = await response.json();
      } catch {
        return {
          success: false,
          error: "The server returned an invalid response. Please try again.",
        };
      }

      if (!response.ok || result.success !== true) {
        return {
          success: false,
          error:
            result.error ||
            result.message ||
            "Unable to submit your information.",
        };
      }

      return { success: true, data: result };
    } catch (error) {
      return {
        success: false,
        error:
          error?.message || "Unable to connect to the server. Please try again.",
      };
    }
  }

  async function submitEligibility() {
    if (!data.invest.val || isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionError("");

    const eligibility = calculateEligibility(data);
    const resultData = {
      ...data,
      checks: eligibility,
      eligible: eligibility.eligible,
    };

    sessionStorage.setItem(RESULT_STORAGE_KEY, JSON.stringify(resultData));

    const leadResult = await sendEligibilityLead(eligibility);

    if (!leadResult.success) {
      setSubmissionError(
        leadResult.error || "We could not submit your information. Please try again."
      );
      setIsSubmitting(false);
      return;
    }

    router.push(eligibility.eligible ? "/eligibility-result" : "/not-eligible");
  }

  return (
    <EligibilityShell stepLabel={`Step ${step} of ${TOTAL_STEPS}`} progress={progress}>
      <div key={step} className="animate-[fadeIn_0.25s_ease-out]">
        {step === 1 && (
          <>
            <StepHeader
              step={1}
              title="How long has your business been operating?"
              hint="Select the option that best matches."
            />
            <OptionList
              options={ageOptions}
              value={data.age.val}
              onChange={(option) => updateChoice("age", option)}
            />
            <button
              type="button"
              className={`${actionButtonClass} mt-5`}
              disabled={!data.age.val}
              onClick={() => goToStep(2)}
            >
              Continue <ArrowRight size={16} />
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <StepHeader step={2} title="What is your business's annual turnover?" />

            <div className="mb-5 flex items-start gap-3 rounded-r-[10px] border-l-[3px] border-[var(--color-red-1)] bg-gray-50 px-4 py-3">
              <LockKeyhole size={15} className="mt-0.5 shrink-0 text-gray-500" />
              <p className="!mb-0 !text-[12px] leading-[1.6] !text-gray-500">
                Your turnover is kept <strong>strictly confidential</strong> and is only used to verify that your business meets the minimum financial threshold required for USA Business Migration. It will never be shared.
              </p>
            </div>

            <select
              value={data.turnover.val}
              onChange={(event) => {
                const option = turnoverOptions.find(
                  (item) => item.val === event.target.value
                );
                if (option) updateChoice("turnover", option);
              }}
              className={`${inputClass} ${
                errorField === "turnover" ? "border-[var(--color-red-1)] bg-red-50" : ""
              }`}
            >
              <option value="">Select your annual turnover range</option>
              {turnoverOptions.map((option) => (
                <option key={option.val} value={option.val}>
                  {option.label}
                </option>
              ))}
            </select>

            <div className="mt-5">
              <button
                type="button"
                className={actionButtonClass}
                onClick={() => requireField("turnover", Boolean(data.turnover.val), 3)}
              >
                Continue <ArrowRight size={16} />
              </button>
              <div>
                <BackButton onClick={() => goToStep(1)} />
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <StepHeader
              step={3}
              title="How many employees are currently in your organisation?"
              hint="Count full-time employees working with you today."
            />
            <OptionList
              options={employeeOptions}
              value={data.emp.val}
              onChange={(option) => updateChoice("emp", option)}
            />
            <button
              type="button"
              className={`${actionButtonClass} mt-5`}
              disabled={!data.emp.val}
              onClick={() => goToStep(4)}
            >
              Continue <ArrowRight size={16} />
            </button>
            <div><BackButton onClick={() => goToStep(2)} /></div>
          </>
        )}

        {step === 4 && (
          <>
            <StepHeader
              step={4}
              title="What type of business do you operate?"
              hint="This helps us match you with the right migration pathway."
            />
            <select
              value={data.bizType.val}
              onChange={(event) => {
                const value = event.target.value;
                setData((current) => ({
                  ...current,
                  bizType: { val: value, label: value },
                }));
                setErrorField("");
              }}
              className={`${inputClass} ${
                errorField === "bizType" ? "border-[var(--color-red-1)] bg-red-50" : ""
              }`}
            >
              <option value="">Choose business type</option>
              {businessTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <div className="mt-5">
              <button
                type="button"
                className={actionButtonClass}
                onClick={() => requireField("bizType", Boolean(data.bizType.val), 5)}
              >
                Continue <ArrowRight size={16} />
              </button>
              <div><BackButton onClick={() => goToStep(3)} /></div>
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <StepHeader
              step={5}
              title="What's your name?"
              hint="We'll personalise your eligibility result just for you."
            />
            <input
              type="text"
              value={data.name}
              onChange={(event) => {
                setData((current) => ({ ...current, name: event.target.value }));
                setErrorField("");
              }}
              placeholder="Your full name"
              autoComplete="off"
              className={`${inputClass} ${
                errorField === "name" ? "border-[var(--color-red-1)] bg-red-50" : ""
              }`}
            />

            <div className="mt-5">
              <button
                type="button"
                className={actionButtonClass}
                onClick={() => requireField("name", Boolean(data.name.trim()), 6)}
              >
                Continue <ArrowRight size={16} />
              </button>
              <div><BackButton onClick={() => goToStep(4)} /></div>
            </div>
          </>
        )}

        {step === 6 && (
          <>
            <StepHeader
              step={6}
              title={data.name.trim() ? `Tell us about ${data.name.trim()}'s business` : "Tell us about your business"}
              hint="Business name and the city it operates from."
            />

            <div className="space-y-3">
              <input
                type="text"
                value={data.biz}
                onChange={(event) => {
                  setData((current) => ({ ...current, biz: event.target.value }));
                  setErrorField("");
                }}
                placeholder="Business name"
                autoComplete="off"
                className={`${inputClass} ${
                  errorField === "biz" ? "border-[var(--color-red-1)] bg-red-50" : ""
                }`}
              />
              <input
                type="text"
                value={data.city}
                onChange={(event) => {
                  setData((current) => ({ ...current, city: event.target.value }));
                  setErrorField("");
                }}
                placeholder="City (e.g. Ahmedabad, Mumbai, Surat)"
                autoComplete="off"
                className={`${inputClass} ${
                  errorField === "city" ? "border-[var(--color-red-1)] bg-red-50" : ""
                }`}
              />
            </div>

            <div className="mt-5">
              <button
                type="button"
                className={actionButtonClass}
                onClick={() => {
                  if (!data.biz.trim()) return setErrorField("biz");
                  if (!data.city.trim()) return setErrorField("city");
                  goToStep(7);
                }}
              >
                Continue <ArrowRight size={16} />
              </button>
              <div><BackButton onClick={() => goToStep(5)} /></div>
            </div>
          </>
        )}

        {step === 7 && (
          <>
            <StepHeader
              step={7}
              title={data.name.trim() ? `What is your contact number, ${data.name.trim()}?` : "What is your contact number?"}
              hint="Our advisory team will reach out to you on this number with your results."
            />

            <div className="space-y-3">
              <input
                type="tel"
                value={data.phone}
                onChange={(event) => {
                  const digits = event.target.value.replace(/\D/g, "").slice(0, 10);
                  setData((current) => ({ ...current, phone: digits }));
                  setErrorField("");
                }}
                placeholder="10-digit mobile number e.g. 9876543210"
                maxLength={10}
                inputMode="numeric"
                autoComplete="off"
                className={`${inputClass} ${
                  errorField === "phone" ? "border-[var(--color-red-1)] bg-red-50" : ""
                }`}
              />
              <input
                type="email"
                value={data.email}
                onChange={(event) => {
                  setData((current) => ({ ...current, email: event.target.value }));
                  setErrorField("");
                }}
                placeholder="Your email address"
                autoComplete="off"
                className={`${inputClass} ${
                  errorField === "email" ? "border-[var(--color-red-1)] bg-red-50" : ""
                }`}
              />
            </div>

            <div className="mt-5">
              <button
                type="button"
                className={actionButtonClass}
                onClick={() => {
                  if (data.phone.replace(/\D/g, "").length !== 10) {
                    setErrorField("phone");
                    return;
                  }
                  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
                    setErrorField("email");
                    return;
                  }
                  goToStep(8);
                }}
              >
                Continue <ArrowRight size={16} />
              </button>
              <div><BackButton onClick={() => goToStep(6)} /></div>
            </div>
          </>
        )}

        {step === 8 && (
          <>
            <StepHeader
              step={8}
              title="Are you prepared to invest ₹3 Crore or more for USA Business Migration?"
            />

            <div className="mb-5 rounded-[14px] border border-red-100 bg-red-50/70 px-5 py-4">
              <div className="!text-[30px] font-semibold leading-none text-[var(--color-red-1)] sm:!text-[34px]">
                ₹3 Cr+
              </div>
              <p className="!mt-2 !mb-0 !text-[12px] leading-[1.6] !text-gray-500">
                USA Business Migration typically requires a minimum investment of ₹3 Crore covering visa processing, legal structuring, business setup, and US regulatory compliance.
              </p>
            </div>

            <OptionList
              options={investmentOptions}
              value={data.invest.val}
              onChange={(option) => updateChoice("invest", option)}
            />

            {submissionError && (
              <div className="mt-4 rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 !text-[12px] leading-[1.6] text-red-700">
                {submissionError}
              </div>
            )}

            <button
              type="button"
              className={`${actionButtonClass} mt-5`}
              disabled={!data.invest.val || isSubmitting}
              onClick={submitEligibility}
            >
              {isSubmitting ? "Checking Eligibility..." : "Check My Eligibility"}
              {!isSubmitting && <ArrowRight size={16} />}
            </button>
            <div><BackButton onClick={() => goToStep(7)} /></div>
          </>
        )}
      </div>
    </EligibilityShell>
  );
}
