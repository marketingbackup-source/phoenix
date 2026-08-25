import { notFound } from "next/navigation";

import getVisaProgram from "@/services/cms/visa-programs/get-visa-program";

import VisaBanner from "@/components/Pages/visa/VisaBanner";
import VisaContentLayout from "@/components/Pages/visa/VisaContentLayout";

export default async function VisaPage({ params }) {
  const { slug } = await params;

  const visa = await getVisaProgram(slug);

  if (!visa) {
    notFound();
  }

  return (
    <>
      <VisaBanner
        title={visa.title}
        excerpt={visa.excerpt}
        image={visa.image}
      />
      <VisaContentLayout content={visa.content} />
    </>
  );
}