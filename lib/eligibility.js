export const RESULT_STORAGE_KEY = "phoenixEligibilityResult";
export const UTM_STORAGE_KEY = "phoenixEligibilityUTMs";
export const ELIGIBILITY_WORKER_URL =
  "https://eligibility-tracker.marketingbackup.workers.dev/lead";

export const initialEligibilityData = {
  name: "",
  biz: "",
  city: "",
  phone: "",
  email: "",
  age: { val: "", label: "", pass: false },
  turnover: { val: "", label: "", pass: false },
  emp: { val: "", label: "", pass: false },
  bizType: { val: "", label: "" },
  invest: { val: "", label: "", pass: false },
};

export const ageOptions = [
  { val: "lt1", label: "Less than 1 year", pass: false },
  { val: "1-2", label: "1 - 2 years", pass: false },
  { val: "2-3", label: "2 - 3 years", pass: false },
  { val: "3-5", label: "3 - 5 years", pass: true },
  { val: "5-10", label: "5 - 10 years", pass: true },
  { val: "10+", label: "10+ years", pass: true },
];

export const turnoverOptions = [
  { val: "1", label: "Below 1 Cr", pass: false },
  { val: "2", label: "1 - 3 Cr", pass: true },
  { val: "3", label: "3 - 5 Cr", pass: true },
  { val: "4", label: "5 Cr+", pass: true },
];

export const employeeOptions = [
  { val: "1-2", label: "1 - 2 employees", pass: false },
  { val: "2-3", label: "2 - 3 employees", pass: false },
  { val: "3-10", label: "3 - 10 employees", pass: true },
  { val: "10-50", label: "10 - 50 employees", pass: true },
  { val: "50+", label: "50+ employees", pass: true },
];

export const investmentOptions = [
  {
    val: "yes",
    label: "Yes, I am ready",
    display: "Yes, I am ready to make this investment",
    pass: true,
  },
  {
    val: "no",
    label: "Not ready yet",
    display: "Not right now, I need more time",
    pass: false,
  },
];

export const businessTypes = [
  "Aerospace & Defense",
  "Agriculture & Commercial Farming",
  "Agribusiness & Food Processing",
  "Alternative Energy & Cleantech",
  "Artificial Intelligence & Deep Tech",
  "Automotive Manufacturing & Dealerships",
  "Aviation & Aerospace Logistics",
  "Biotechnology & Life Sciences",
  "Chemicals & Advanced Materials",
  "Commercial Real Estate Development",
  "Construction & Infrastructure",
  "Crypto & Blockchain Ventures",
  "Cybersecurity & Data Privacy",
  "Digital Media & Entertainment",
  "E-commerce & Online Marketplaces",
  "Education & EdTech",
  "Electrical & Electronic Manufacturing",
  "Engineering & Technical Services",
  "Environmental Services & Waste Management",
  "Family Office / Wealth Management",
  "Fashion, Apparel & Luxury Goods",
  "Financial Services & Fintech",
  "Food & Beverage Franchises",
  "Government & Public Administration",
  "Healthcare Devices & MedTech",
  "Hospitality & Resort Management",
  "Import, Export & Global Trading",
  "Information Technology & Cloud Services",
  "Insurance & Actuarial Services",
  "Logistics, Warehousing & Supply Chain",
  "Maritime & Shipping Logistics",
  "Mining, Metals & Natural Resources",
  "Multi-Industry Conglomerate",
  "Oil, Gas & Renewable Energy",
  "Pharmaceuticals & Clinical Research",
  "Private Equity & Venture Capital",
  "Professional Services (Legal / Accounting)",
  "Real Estate Investment & Management",
  "Residential Property Development",
  "Retail Chains & Supermarkets",
  "Robotics & Automation",
  "Software as a Service (SaaS)",
  "Telecommunications & 5G Infrastructure",
  "Textile & Garment Manufacturing",
  "Tourism & Tour Operations",
  "Wholesale Distribution",
  "Hotel",
  "Motel",
  "Restaurant",
  "Petrol Pump",
  "Other / Diversified Interests",
];

export function calculateEligibility(data) {
  const ageOk = ["3-5", "5-10", "10+"].includes(data?.age?.val);
  const turnoverOk = ["2", "3", "4"].includes(data?.turnover?.val);
  const employeeOk = ["3-10", "10-50", "50+"].includes(data?.emp?.val);
  const investmentOk = data?.invest?.val === "yes";

  return {
    ageOk,
    turnoverOk,
    employeeOk,
    investmentOk,
    eligible: ageOk && turnoverOk && employeeOk && investmentOk,
  };
}

export function captureEligibilityUTMs() {
  if (typeof window === "undefined") {
    return { utmSource: "", utmCampaign: "", utmTerm: "", utmContent: "" };
  }

  const params = new URLSearchParams(window.location.search);
  const currentUTMs = {
    utmSource: params.get("utm_source") || "",
    utmCampaign: params.get("utm_campaign") || "",
    utmTerm: params.get("utm_term") || "",
    utmContent: params.get("utm_content") || "",
  };

  sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(currentUTMs));
  return currentUTMs;
}

export function getEligibilityUTMs() {
  if (typeof window === "undefined") {
    return { utmSource: "", utmCampaign: "", utmTerm: "", utmContent: "" };
  }

  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch (error) {
    console.error("Unable to read eligibility UTMs:", error);
  }

  return { utmSource: "", utmCampaign: "", utmTerm: "", utmContent: "" };
}
