import VisaDesktop from "@/components/Pages/Home/VisaDesktop";
import VisaMobile from "@/components/Pages/Home/VisaMobile";

const VISA_DESTINATIONS = [
  {
    country: "USA",
    flag: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/6666ca61871315eae5379a32_USA-Flag.png",

    title: "USA Business Visa",

    subtitle: "Expand Your Business",

    title2: "L-1 VISA",

    description:
      "Expand your business in the USA or buy an existing running business",

    points: [
      "3 Years + Old Business",
      "3 Employees + in Company",
      "₹3 Crore + Annual Turnover (recommended)",
      "$3,00,000 + Starting Investment (depends on business model)",
      "Suitable for Business Owners, Directors & Senior Managers",
      "Visa First Investment After",
      "End-to-end support for documentation, petition filing & interview preparation (T&C Apply)",
    ],

    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/USA-texture.webp",

    link: "/visa-programs/us-green-card-by-investment",
  },


  {
    country: "Australia",

    flag: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/6666ca675b8c4493235ade25_Aus-flat.png",

    title: "Australia Business Visa",

    subtitle: "No IELTS Required | No Age Limit",

    title2: "Australia National Innovation Visa",

    description: "",

    points: [
      "9 Months Family PR Pathway*",
      "AUD 1 Million+ Investment",
      "PR First, Invest After Arrival",
      "No Age Limit Required",
      "No IELTS Required",
      "National Award or Industry Recognition",
      "Business Expansion or Acquire a Running Business",
      "End-to-end support for documentation, petition filing & interview preparation (T&C Apply)",
    ],

    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/AU-texture.webp",

    link: "/visa-programs/niv",
  },


  {
    country: "New Zealand",

    flag: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/668c1de2bce4364450c63d8b_New-zealand.png",

    title: "New Zealand Investor Work Visa",

    subtitle: "",

    title2: "New Zealand Business Investor Work Visa",

    description: "",

    points: [
      "Minimum 25% Business Ownership",
      "Visa Processing: 9 Months*",
      "NZD $1M+ Investment",
      "Direct Path to New Zealand Residency",
      "Active Business Management",
      "Family Included",
      "*T&C Apply",
    ],

    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/NZ-texture.webp",

    link: "/visa-programs/new-zealand-investor-work-visa",
  },


  {
    country: "European Union",

    flag: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/6a06f189abe6ed7a98044edd_european-union-flag.png",

    title: "European Union",

    subtitle: "",

    title2: "Citizenship By Investment",

    description: "",

    points: [
      "Visa-free access to 180+ countries",
      "Live & work across all 27 EU member states",
      "Entry investments from EUR 250,000",
      "End-to-end management by Phoenix Business Advisory",
    ],

    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/EU-texture.webp",

    link: "/visa-programs/european-union",
  },
];


export default function VisaDestinations() {
  return (
    <section className="py-80-30">
      <div className="container-main">
        <VisaDesktop destinations={VISA_DESTINATIONS} />

        <VisaMobile destinations={VISA_DESTINATIONS} />
      </div>
    </section>
  );
}