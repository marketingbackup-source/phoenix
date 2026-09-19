"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, Check, Phone, RotateCcw } from "lucide-react";
import EligibilityShell from "./EligibilityShell";
import { RESULT_STORAGE_KEY, calculateEligibility } from "@/lib/eligibility";

const BOOKING_LINK =
  "https://phoenixbusinessadvisory1.zohobookings.in/445816000000204038";

export default function EligibilityResult() {
  const router = useRouter();
  const [data, setData] = useState(null);
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

      if (!eligibility.eligible) {
        router.replace("/not-eligible");
        return;
      }

      setData(parsed);
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
    `Business age: ${data.age.label}`,
    `Turnover: ${data.turnover.label}`,
    `Employees: ${data.emp.label}`,
    "Investment Ready",
  ];

  return (
    <EligibilityShell progress={100}>
      <div className="py-2 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-[30px]">🎉</div>

        <h1 className="!mb-4 !text-[24px] font-semibold leading-[1.3] sm:!text-[28px]">
          Congratulations, <span className="text-[var(--color-red-1)]">{data.name}</span>!
          <br />
          You&apos;re Eligible for USA Business Migration
        </h1>

        <div className="mb-5 flex flex-wrap justify-center gap-2">
          {chips.map((chip) => (
            <span key={chip} className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 !text-[11px] font-medium text-green-800">
              <Check size={13} /> {chip}
            </span>
          ))}
        </div>

        <p className="!mb-6 !text-[14px] leading-[1.7] !text-gray-500">
          <strong>{data.biz}</strong>, based in {data.city}, meets the key criteria for USA Business Expansion.
          <br /><br />
          Please wait for a call from the <strong>Phoenix Business Advisory</strong> team on <strong>{data.phone}</strong> and we&apos;ll guide you through every next step.
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <a href="tel:+919964544000" className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-green-600 px-5 py-3 !text-[13px] font-semibold text-white transition hover:bg-green-700">
            <Phone size={16} /> Call +91 99645 44000
          </a>
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-[var(--color-red-1)] px-5 py-3 !text-[13px] font-semibold text-white transition hover:bg-[var(--color-red-2)]">
            <CalendarDays size={16} /> Book Your Appointment
          </a>
        </div>

        <button type="button" onClick={restart} className="mx-auto mt-5 inline-flex items-center gap-1.5 !text-[12px] text-gray-500 transition hover:text-[var(--color-gray-1)]">
          <RotateCcw size={13} /> Check another business
        </button>
      </div>
    </EligibilityShell>
  );
}
