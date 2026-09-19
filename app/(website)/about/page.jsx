import Banner from '@/components/Pages/about/Banner';
import Vision from '@/components/Pages/about/Vision';
import CEOMessage from '@/components/common/CEOMessage';
import TeamPanel from '@/components/common/TeamPanel';
import Achievement from '@/components/common/Achievement';
export default async function HomePage() {
  return (
    <main className="">
      <Banner></Banner>
      <Vision></Vision>
      <CEOMessage></CEOMessage>
      <TeamPanel></TeamPanel>
      <Achievement></Achievement>
    </main>
  );
}