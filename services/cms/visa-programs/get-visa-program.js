import wordpressClient from "@/services/cms/wordpress-client";
import mapVisaProgram from "./map-visa-program";

export default async function getVisaProgram(slug) {
  if (!slug) {
    return null;
  }

  const response = await wordpressClient.get("/visa_programs", {
    params: {
      slug,
      _embed: true,
    },
  });

  if (!response.data?.length) {
    return null;
  }

  return mapVisaProgram(response.data[0]);
}