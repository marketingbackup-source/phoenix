
export const dynamic = "force-dynamic";

import Banner from '@/components/Pages/Home/Banner3';

import TrustAuthority from '@/components/Pages/Home/TrustAuthority';
import Proof from '@/components/Pages/Home/Proof';
import Faq from '@/components/Pages/Home/Faq';
import MigrationJourney from '@/components/Pages/Home/MigrationJourney';
import DocumentVault from '@/components/Pages/Home/DocumentVault';
import VisaDestinations from '@/components/Pages/Home/VisaDestinations';
import GlobalCountries from '@/components/Pages/Home/GlobalCountries';
import BusinessOpportunities from '@/components/Pages/Home/BusinessOpportunities';
import GreenCardAchiever from '@/components/Pages/Home/GreenCardAchiever';
import CEOMessage from '@/components/common/CEOMessage';
import LatestUpdate from '@/components/common/LatestUpdate';
import Team from '@/components/Pages/Home/Team';
import SuccessStories from '@/components/Pages/Home/SuccessStories';
import Featured from '@/components/Pages/Home/Featured';
import Youtube from '@/components/Pages/Home/Youtube';


import { getFAQs } from "@/services/cms/faqs/get-faqs";
const faqs = await getFAQs("Homepage");
export default async function HomePage() {
  return (
    <main className="">
      <Banner></Banner>
      <TrustAuthority></TrustAuthority>
      <Proof></Proof>
      <MigrationJourney></MigrationJourney>
      <DocumentVault></DocumentVault>
      {/* <GlobalCountries></GlobalCountries> */}
      <GreenCardAchiever></GreenCardAchiever>
      <BusinessOpportunities></BusinessOpportunities>
      <VisaDestinations></VisaDestinations>
      <CEOMessage></CEOMessage>
      <Team></Team>
      <SuccessStories></SuccessStories>
      <Featured></Featured>
      <Youtube></Youtube>
      <LatestUpdate></LatestUpdate>
      <Faq faqs={faqs}></Faq>
    </main>
  );
}