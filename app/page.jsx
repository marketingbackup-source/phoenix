import Banner from '@/components/Pages/Home/Banner';

import TrustAuthority from '@/components/Pages/Home/TrustAuthority';
import Proof from '@/components/Pages/Home/Proof';
import Faq from '@/components/Pages/Home/Faq';
import MigrationJourney from '@/components/Pages/Home/MigrationJourney';
import DocumentVault from '@/components/Pages/Home/DocumentVault';
import VisaDestinations from '@/components/Pages/Home/VisaDestinations';
import GlobalCountries from '@/components/Pages/Home/GlobalCountries';
import BusinessOpportunities from '@/components/Pages/Home/BusinessOpportunities';
import CEOMessage from '@/components/common/CEOMessage';
import Team from '@/components/Pages/Home/Team';
import SuccessStories from '@/components/Pages/Home/SuccessStories';
import Featured from '@/components/Pages/Home/Featured';
import Youtube from '@/components/Pages/Home/Youtube';
import TeamPanel from '@/components/common/TeamPanel';
const faqs = [
  {
    question: "Who should attend these webinars?",
    answer:
      "These webinars are designed for business owners, investors, entrepreneurs, and professionals exploring international business, investment, and migration opportunities.",
  },
  {
    question: "Are the webinars free to attend?",
    answer:
      "Yes. Registration is free unless a specific webinar clearly mentions a participation fee.",
  },
  {
    question: "How will I receive the webinar joining link?",
    answer:
      "After completing your registration, the joining details will be sent to your registered email address.",
  },
  {
    question: "Can I watch the webinar after the live session?",
    answer:
      "Selected webinar recordings may be made available after the event, depending on the session and speaker permissions.",
  },
  {
    question: "Can I ask questions during the webinar?",
    answer:
      "Yes. Most live sessions include a dedicated question-and-answer segment where participants can submit their questions.",
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
      <VisaDestinations></VisaDestinations>
      <GlobalCountries></GlobalCountries>
      <BusinessOpportunities></BusinessOpportunities>
      <CEOMessage></CEOMessage>
      <Team></Team>
      <SuccessStories></SuccessStories>
      <Featured></Featured>
      <Youtube></Youtube>
      <TeamPanel></TeamPanel>
      <Faq badge="Frequently Asked Questions"
        title="Everything you need to know before joining"
        description="Find answers to common questions about registration, attendance, webinar access, and session recordings."
        faqs={faqs}></Faq>
    </main>
  );
}