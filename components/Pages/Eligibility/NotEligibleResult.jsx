"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Phone, RotateCcw, X } from "lucide-react";
import EligibilityShell from "./EligibilityShell";
import { RESULT_STORAGE_KEY, calculateEligibility } from "@/lib/eligibility";

export default function NotEligibleResult() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [checks, setChecks] = useState(null);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    const rawData = sessionStorage.getItem(RESULT_STORAGE_KEY);

    if (!rawData) {
      setMissing(true);
      return;
    }

    try {
      const parsed = JSON.parse(rawData);
      const eligibility = calculateEligibility(parsed);

      if (eligibility.eligible) {
        router.replace("/eligibility-result");
        return;
      }

      setData(parsed);
      setChecks(eligibility);
    } catch (error) {
      console.error("Eligibility result could not be read:", error);
      router.replace("/eligibility-tracker");
    }
  }, [router]);

  function restart() {
    sessionStorage.removeItem(RESULT_STORAGE_KEY);
    router.push("/eligibility-tracker");
  }

  if (!data && !missing) {
    return (
      <EligibilityShell progress={100}>
        <div className="py-10 text-center !text-[14px] text-gray-500">Loading your result...</div>
      </EligibilityShell>
    );
  }

  if (missing) {
    return (
      <EligibilityShell progress={100}>
        <div className="py-3 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-2xl">📋</div>
          <h1 className="!mb-3 !text-[24px] font-semibold">No eligibility result found</h1>
          <p className="!mb-6 !text-[14px] !text-gray-500">Please complete the eligibility checker first to view your result.</p>
          <button type="button" onClick={() => router.push("/eligibility-tracker")} className="rounded-[12px] bg-[var(--color-red-1)] px-5 py-3 !text-[13px] font-semibold text-white">Check Eligibility</button>
        </div>
      </EligibilityShell>
    );
  }

  const chips = [
    { label: `Business age: ${data.age?.label || ""}`, pass: checks.ageOk },
    { label: `Turnover: ${data.turnover?.label || ""}`, pass: checks.turnoverOk },
    { label: `Employees: ${data.emp?.label || ""}`, pass: checks.employeeOk },
    { label: "Investment readiness", pass: checks.investmentOk },
  ];

  return (
    <EligibilityShell progress={100}>
      <div className="py-2 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-[28px]">📋</div>

        <h1 className="!mb-4 !text-[24px] font-semibold leading-[1.3] sm:!text-[28px]">
          Your business doesn&apos;t match the basic eligibility criteria
        </h1>

        <div className="mb-5 flex flex-wrap justify-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip.label}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 !text-[11px] font-medium ${
                chip.pass ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
              }`}
            >
              {chip.pass ? <Check size={13} /> : <X size={13} />}
              {chip.label}
            </span>
          ))}
        </div>

        <p className="!mb-6 !text-[14px] leading-[1.7] !text-gray-500">
          Based on the information provided, <strong>{data.biz}</strong> currently does not meet all of the basic criteria used in this USA Business Migration eligibility checker.
          <br /><br />
          There may still be other business or immigration pathways available depending on your circumstances. Speak with our advisory team to explore the available options.
        </p>

        <a href="tel:+919964544000" className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-[var(--color-red-1)] px-5 py-3 !text-[13px] font-semibold text-white transition hover:bg-[var(--color-red-2)]">
          <Phone size={16} /> Call Our Expert: +91 99645 44000
        </a>

        <button type="button" onClick={restart} className="mx-auto mt-5 flex items-center gap-1.5 !text-[12px] text-gray-500 transition hover:text-[var(--color-gray-1)]">
          <RotateCcw size={13} /> Check Again
        </button>
      </div>
    </EligibilityShell>
  );
}
