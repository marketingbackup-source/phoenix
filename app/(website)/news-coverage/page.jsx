import Banner from '@/components/Pages/news-coverage/Banner';
import NewsGrid from '@/components/Pages/news-coverage/NewsGrid';
import { newsCoverageMetadata } from "@/components/Meta/NewsCoverage/newsCoverageMetadata";

export const metadata = newsCoverageMetadata;
export default function NewsCoveragePage() {
  return (
    <main>
      <Banner />
      <NewsGrid />
    </main>
  );
}