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
import Team from '@/components/Pages/Home/Team';
import SuccessStories from '@/components/Pages/Home/SuccessStories';
import Featured from '@/components/Pages/Home/Featured';
import Youtube from '@/components/Pages/Home/Youtube';
const faqs = [
  {
    question: "Comprehensive Business Migration Services",
    answer:
      "We provide tailored business migration solutions to help you expand your business into the USA, Australia, European Union and the UAE.",
  },
  {
    question: "Business Acquisition Support – At No Extra Cost",
    answer:
      "Our experts help you find and acquire the best business opportunities, all at no extra cost to you.",
  },
  {
    question: "Professional Network Assistance – At No Extra Cost",
    answer:
      "We connect you with top accountants, lawyers, and tax consultants to support your business endeavors, free of charge.",
  },
  {
    question: "Family Support Services – At No Extra Cost",
    answer:
      "We help you find the best schools, healthcare facilities, and insurance options for your family, ensuring peace of mind without extra fees.",
  },
];
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
      <Faq badge="Frequently Asked Questions"
        title="Everything you need to know before joining"
        description="Find answers to common questions about registration, attendance, webinar access, and session recordings."
        faqs={faqs}></Faq>
    </main>
  );
}