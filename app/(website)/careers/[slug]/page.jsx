import { notFound } from "next/navigation";

import CareerDetailBanner from "@/components/Pages/careers/CareerDetailBanner";
import CareerContent from "@/components/Pages/careers/CareerContent";
import CareerApplicationForm from "@/components/Pages/careers/CareerApplicationForm";

import { getCareerBySlug } from "@/services/cms/careers/get-career-by-slug";
import { getCareers } from "@/services/cms/careers/get-careers";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const career = await getCareerBySlug(slug);

  if (!career) {
    return {
      title: "Career Not Found | Phoenix Business Advisory",
    };
  }

  return {
    title: `${career.title} | Careers | Phoenix Business Advisory`,
    description: `Explore the ${career.title} opportunity at Phoenix Business Advisory${
      career.location ? ` in ${career.location}` : ""
    }.`,
  };
}

export default async function CareerDetailPage({ params }) {
  const { slug } = await params;

  const [career, careers] = await Promise.all([
    getCareerBySlug(slug),
    getCareers(),
  ]);

  if (!career) {
    notFound();
  }

  return (
    <main>
      <CareerDetailBanner career={career} />

      <CareerContent career={career} />

      <CareerApplicationForm
        career={career}
        careers={careers}
      />
    </main>
  );
}