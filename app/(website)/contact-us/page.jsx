import Banner from '@/components/Pages/Contact/Banner'
import Contact from '@/components/Pages/Contact/Hero'
import { contactMetadata } from "@/components/Meta/Contact/contactMetadata";

export const metadata = contactMetadata;
export default function ContactPage() {
  return (
    <main>
      <Banner />
      <Contact />
    </main>
  );
}