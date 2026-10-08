import wordpressClient from "@/services/cms/wordpress-client";

import { mapCareer } from "@/services/cms/careers/map-career";

export async function getCareerBySlug(slug) {
  if (!slug) {
    return null;
  }

  const response = await wordpressClient.get("/careers", {
    params: {
      slug,
      status: "publish",
    },
  });

  if (!response.data?.length) {
    return null;
  }

  return mapCareer(response.data[0]);
}