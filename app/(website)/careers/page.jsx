import CareerBanner from "@/components/Pages/careers/Banner";
import OpenPositions from "@/components/Pages/careers/OpenPositions";

import { getCareers } from "@/services/cms/careers/get-careers";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Careers | Phoenix Business Advisory",
  description:
    "Explore career opportunities at Phoenix Business Advisory and discover open positions across our growing team.",
};

export default async function CareersPage() {
  const careers = await getCareers();

  return (
    <main>
      <CareerBanner />

      <OpenPositions careers={careers} />
    </main>
  );
}