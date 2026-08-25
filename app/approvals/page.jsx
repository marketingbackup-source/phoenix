import Banner from '@/components/Pages/approvals/Banner';
import Approvals from '@/components/Pages/approvals/Approvals';
import NzApprovals from '@/components/Pages/approvals/NzApprovals';
export default async function ApprovalsPage() {
  return (
    <main className="">
      <Banner></Banner>
      <Approvals></Approvals>
      <NzApprovals></NzApprovals>
    </main>
  );
}