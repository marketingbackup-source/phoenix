import VisaDesktop from "@/components/Pages/Home/VisaDesktop";
import VisaMobile from "@/components/Pages/Home/VisaMobile";

const VISA_DESTINATIONS = [
  {
    country: "USA",
    flag: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/6666ca61871315eae5379a32_USA-Flag.png",
    title: "USA Business Visa",
    subtitle: "Expand Your Business Globally",
    description:
      "Expand your business in the USA through strategic immigration solutions designed for entrepreneurs, executives, and business owners.",
    points: [
      "L-1A visa for executives and managers.",
      "EB-1C pathway for multinational executives.",
      "Business acquisition opportunities.",
      "Establish a new office in the USA.",
      "Pathway toward permanent residency.",
    ],
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/usa.webp",
    link: "/visa-programs/us-green-card-by-investment",
  },

  {
    country: "Australia",
    flag: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/6666ca675b8c4493235ade25_Aus-flat.png",
    title: "Australia Business Visa",
    subtitle: "No IELTS Required | No Age Limit",
    description:
      "Explore Australian business opportunities through innovation-focused immigration pathways.",
    points: [
      "National Innovation Visa (Subclass 858).",
      "No IELTS requirement.",
      "No age limit.",
      "Business and investment opportunities.",
      "Pathway toward permanent residency.",
    ],
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/aus.webp",
    link: "/visa-programs/niv",
  },

  {
    country: "New Zealand",
    flag: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/668c1de2bce4364450c63d8b_New-zealand.png",
    title: "New Zealand Investor Visa",
    subtitle: "Build Your Future",
    description:
      "Establish or acquire an eligible business in New Zealand through investment opportunities.",
    points: [
      "Business investment pathway.",
      "Operate and manage eligible businesses.",
      "Access New Zealand markets.",
      "Business expansion opportunities.",
      "Pathway toward residence.",
    ],
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/nz.webp",
    link: "/visa-programs/european-union",
  },

  {
    country: "European Union",
    flag: "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/08/6a06f189abe6ed7a98044edd_european-union-flag.png",
    title: "European Union Citizenship",
    subtitle: "Expand Your Global Mobility",
    description:
      "Access global mobility opportunities through qualifying investment programs.",
    points: [
      "Visa-free access to multiple countries.",
      "Live and work across eligible jurisdictions.",
      "Family inclusion opportunities.",
      "Global mobility benefits.",
      "Citizenship through investment.",
    ],
    image:
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/eu.webp",
    link: "/visa-programs/new-zealand-investor-work-visa",
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