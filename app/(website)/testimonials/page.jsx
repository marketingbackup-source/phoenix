import Banner from '@/components/Pages/testimonials/Banner';
import SuccessStories from '@/components/common/SuccessStories';
import YtTestimonials from '@/components/common/YtTestimonials';
import { testimonialMetadata } from "@/components/Meta/Testimonial/testimonialMetadata";

export const metadata = testimonialMetadata;
export default async function HomePage() {
  return (
    <main className="">
      <Banner></Banner>
      <SuccessStories></SuccessStories>
      <YtTestimonials></YtTestimonials>
    </main>
  );
}