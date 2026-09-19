import { homeMetadata } from "@/components/Meta/Home/homeMetadata";
import HomeSchema from "@/components/Meta/Home/HomeSchema";

import Banner from "@/components/Pages/Home/Banner3";
import TrustAuthority from "@/components/Pages/Home/TrustAuthority";
import Proof from "@/components/Pages/Home/Proof";
import Faq from "@/components/Pages/Home/Faq";
import MigrationJourney from "@/components/Pages/Home/MigrationJourney";
import VisaDestinations from "@/components/Pages/Home/VisaDestinations";
import BusinessOpportunities from "@/components/Pages/Home/BusinessOpportunities";
import GreenCardAchiever from "@/components/Pages/Home/GreenCardAchiever";
import CEOMessage from "@/components/common/CEOMessage";
import LatestUpdate from "@/components/common/LatestUpdate";
import Team from "@/components/Pages/Home/Team";
import SuccessStories from "@/components/Pages/Home/SuccessStories";
import Featured from "@/components/Pages/Home/Featured";
import Youtube from "@/components/Pages/Home/Youtube";

import { getFAQs } from "@/services/cms/faqs/get-faqs";

export const metadata = homeMetadata;

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const faqs = await getFAQs("Homepage");

  return (
    <>
      <HomeSchema />

      <main>
        <Banner />

        <TrustAuthority />

        <Proof />

        <MigrationJourney />

        {/* <DocumentVault /> */}

        {/* <GlobalCountries /> */}

        <GreenCardAchiever />

        <BusinessOpportunities />

        <VisaDestinations />

        <CEOMessage />

        <Team />

        <SuccessStories />

        <Featured />

        <Youtube />

        <LatestUpdate />

        <Faq faqs={faqs} />
      </main>
    </>
  );
}
